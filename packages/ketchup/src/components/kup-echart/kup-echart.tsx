import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    Host,
    h,
    Method,
    Prop,
} from '@stencil/core';
import * as echarts from 'echarts';
import {
    KupEchartData,
    KupEchartLegendPlacement,
    KupEchartMaps,
    KupEchartProps,
    KupEchartTitle,
    KupEchartTypes,
} from './kup-echart-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { DataTable } from '../kup-data-table/kup-data-table-declarations';

@Component({
    tag: 'kup-echart',
    assetsDirs: ['assets/maps'],
    styleUrl: 'kup-echart.scss',
    shadow: true,
})
export class KupEchart {
    /**
     * References the root HTML element of the component (<kup-echart>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the axis of the chart.
     * @default ""
     */
    @Prop() axis: string = '';
    /**
     * Title of the graph.
     * @default null
     */
    @Prop() chartTitle: KupEchartTitle = null;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The actual data of the chart.
     * @default null
     */
    @Prop() data: KupEchartData = null;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.
     * @default KupEchartLegendPlacement.RIGHT
     */
    @Prop() legend: KupEchartLegendPlacement = KupEchartLegendPlacement.RIGHT;
    /**
     * Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america" and "world".
     * @default null
     */
    @Prop() mapName: KupEchartMaps = null;
    /**
     * The data series to be displayed. They must be of the same type.
     * @default []
     */
    @Prop() series: string[] = [];
    /**
     * The type of the chart. Supported formats: Line, Pie, Map, Scatter
     * @default [KupEchartTypes.LINE]
     */
    @Prop() types: KupEchartTypes[] = [KupEchartTypes.LINE];
    /**
     * Customization options for the x Axis.
     * @default null
     */
    @Prop() xAxis: echarts.XAXisComponentOption = null;
    /**
     * Customization options for the y Axis.
     * @default null
     */
    @Prop() yAxis: echarts.YAXisComponentOption = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Used to prevent too many resizes callbacks at once.
     */
    private resizeTimeout: number;
    private chartContainer?: HTMLDivElement;
    private chartEl: echarts.ECharts;
    private themeBorder: string = null;
    private themeBackground: string = null;
    private themeColors: string[] = null;
    private themeFont: string = null;
    private themeText: string = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-echart-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEchartClick: EventEmitter<KupEventPayload>;

    private onKupClick() {
        this.kupEchartClick.emit({ comp: this, id: this.rootElement.id });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupEchartProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(() => this.refresh(), 300);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupEchartProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private initChart() {
        if (this.chartEl) {
            echarts.dispose(this.chartContainer);
        }
        if (this.types && this.types.length > 0) {
            this.chartEl = echarts.init(this.chartContainer);
            this.createChart();
        } else {
            this.kupManager.debug.logMessage(
                this,
                "Can't intialize chart without specifiying at least 1 type.",
                KupDebugCategory.WARNING
            );
        }
    }
    private async createChart() {
        let options: echarts.EChartsOption = null;
        const firstType = this.types[0];
        switch (firstType) {
            case KupEchartTypes.GAUSSIAN:
                options = this.setGaussianOptions();
                break;
            case KupEchartTypes.MAP:
                const mapJson = await (
                    await fetch(
                        getAssetPath(`./assets/maps/${this.mapName}.json`)
                    )
                ).text();
                if (!mapJson) {
                    this.kupManager.debug.logMessage(
                        this,
                        "Couldn't fetch map JSON.",
                        KupDebugCategory.WARNING
                    );
                    return;
                }
                echarts.registerMap(this.mapName, mapJson);
                options = this.setMapOptions();
                break;
            case KupEchartTypes.PIE:
                options = this.setPieOptions();
                break;
            default:
                options = this.setOptions();
                break;
        }
        this.chartEl.setOption(options, true);
    }

    private createX() {
        const x: string[] = [];
        if (!this.axis) {
            for (let i = 0; i < this.data.rows.length; i++) {
                const cells = this.data.rows[i].cells;
                x.push(cells[0].value);
            }
        } else {
            for (let i = 0; i < this.data.rows.length; i++) {
                const cells = this.data.rows[i].cells;
                x.push(cells[this.axis].value);
            }
        }
        return x;
    }

    private createY() {
        const y = {};
        if (this.series && this.series.length > 0) {
            for (const row of this.data.rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key != this.axis) {
                        if (this.series.includes(key)) {
                            const cell = row.cells[key];
                            const value = cell.value;
                            if (!y[key]) {
                                y[key] = [];
                            }
                            y[key].push(value);
                        }
                    }
                }
            }
        } else {
            for (const row of this.data.rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key !== this.axis) {
                        const cell = row.cells[key];
                        const value = cell.value;
                        if (!y[key]) {
                            y[key] = [];
                        }
                        y[key].push(value);
                    }
                }
            }
        }
        return y;
    }

    private normalDistribution(average: number, variance: number, x: number) {
        return (
            (1 / Math.sqrt(variance * 2 * Math.PI)) *
            Math.exp(-Math.pow(x - average, 2) / (2 * variance))
        );
    }

    private generateData(values: string[]) {
        const data: number[][] = [];
        const max = Math.max.apply(Math, values);
        const min = Math.min.apply(Math, values);
        let average = 0;
        let variance = 0;
        for (let index = 0; index < values.length; index++) {
            const value = values[index];
            average += parseFloat(value);
        }
        average = average / values.length;
        for (let index = 0; index < values.length; index++) {
            const value = parseFloat(values[index]);
            variance += Math.pow(value - average, 2);
        }
        variance = variance / (values.length - 1);
        for (let i = 0; i <= 200; i++) {
            const x = ((max - min) * i) / 200 + min;
            data.push([x, this.normalDistribution(average, variance, x)]);
        }
        return data;
    }

    private setAxisColors() {
        return {
            axisLabel: {
                color: this.themeText,
                fontFamily: this.themeFont,
            },
            axisLine: { lineStyle: { color: this.themeText } },
            axisTick: { lineStyle: { color: this.themeBorder } },
            splitLine: { lineStyle: { color: this.themeBorder } },
        } as echarts.XAXisComponentOption | echarts.YAXisComponentOption;
    }

    private setLegend(y: {}) {
        const data: string[] = [];
        for (let key in y) {
            data.push(key);
        }
        return {
            data: data,
            [this.legend]: 0,
            textStyle: {
                color: this.themeText,
                fontFamily: this.themeFont,
            },
        } as echarts.LegendComponentOption;
    }

    private setTitle() {
        return {
            title: {
                text: this.chartTitle ? this.chartTitle.value : undefined,
                [this.chartTitle && this.chartTitle.position
                    ? this.chartTitle.position
                    : 'left']: 0,
                textStyle: {
                    color:
                        this.chartTitle && this.chartTitle.color
                            ? this.chartTitle.color
                            : 'black',
                    fontFamily: this.themeFont,
                    fontSize:
                        this.chartTitle && this.chartTitle.size
                            ? this.chartTitle.size
                            : 16,
                },
            },
        } as echarts.TitleComponentOption;
    }

    private setTooltip() {
        return {
            backgroundColor: this.themeBackground,
            textStyle: {
                color: this.themeText,
                fontFamily: this.themeFont,
            },
        } as echarts.TooltipComponentOption;
    }

    private setMapOptions() {
        const y = {};
        let objKey: string;
        for (const row of this.data.rows) {
            for (const key of Object.keys(row.cells)) {
                const cell = row.cells[key];
                const value = cell.value;
                if (this.axis.includes(key)) {
                    objKey = value;
                    if (!y[objKey]) {
                        y[objKey] = [];
                    }
                } else {
                    y[objKey].push(value);
                }
            }
        }
        const data: echarts.CustomSeriesOption[] = [];
        for (let key in y) {
            data.push({
                name: key,
                itemStyle: {
                    color: y[key][0],
                },
            });
        }
        const echartOption: echarts.EChartsOption = {
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                formatter: function (
                    params: echarts.DefaultLabelFormatterCallbackParams
                ) {
                    let value = params.color;
                    return params.name + ': ' + value;
                },
                showDelay: 0,
                trigger: 'item',
                transitionDuration: 0.2,
            },
            visualMap: { show: false },
            series: [
                {
                    data: data,
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                    map: this.mapName,
                    roam: true,
                    type: 'map',
                } as echarts.MapSeriesOption,
            ],
        };

        return echartOption;
    }

    private setPieOptions() {
        const y = this.createY();
        const data = [];
        for (let key in y) {
            let sum: number = 0;
            for (let j = 0; j < y[key].length; j++) {
                sum = sum + parseFloat(y[key][j]);
            }
            data.push({
                name: key,
                value: sum,
            });
        }
        return {
            color: this.themeColors,
            legend: this.setLegend(y),
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            series: [
                {
                    name: 'echart',
                    type: 'pie',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                } as echarts.PieSeriesOption,
            ],
        } as echarts.EChartsOption;
    }

    private setGaussianOptions() {
        const y = this.createY();
        const series: echarts.SeriesOption[] = [];
        for (const key in y) {
            const values: string[] = y[key];
            series.push({
                data: this.generateData(values),
                name: key,
                showSymbol: false,
                smooth: true,
                type: 'line',
            } as echarts.LineSeriesOption);
        }
        return {
            color: this.themeColors,
            legend: this.setLegend(y),
            series: series,
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                trigger: 'axis',
            },
            xAxis: {
                ...this.setAxisColors(),
                type: 'value',
                ...this.xAxis,
            },
            yAxis: {
                ...this.setAxisColors(),
                min: 0,
                max: 1.2,
                type: 'value',
                ...this.yAxis,
            },
        } as echarts.EChartsOption;
    }

    private setOptions() {
        const x = this.createX();
        const y = this.createY();
        let i: number = 0;
        const series: echarts.SeriesOption[] = [];
        for (const key in y) {
            const values: string[] = y[key];
            let type: KupEchartTypes;
            if (this.types[i]) {
                type = this.types[i];
            } else {
                type = KupEchartTypes.LINE;
            }
            switch (type) {
                case KupEchartTypes.BAR:
                    series.push({
                        data: values,
                        name: key,
                        type: 'bar',
                    } as echarts.BarSeriesOption);
                    break;
                case KupEchartTypes.SCATTER:
                    series.push({
                        data: values,
                        name: key,
                        type: 'scatter',
                    } as echarts.ScatterSeriesOption);
                    break;
                case KupEchartTypes.LINE:
                default:
                    series.push({
                        data: values,
                        name: key,
                        type: 'line',
                    } as echarts.LineSeriesOption);
                    break;
            }
            i++;
        }
        return {
            color: this.themeColors,
            legend: this.setLegend(y),
            series: series,
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                trigger: 'axis',
            },
            xAxis: {
                ...this.setAxisColors(),
                data: x,
                type: 'category',
                ...this.xAxis,
            },
            yAxis: {
                ...this.setAxisColors(),
                type: 'value',
                ...this.yAxis,
            },
        } as echarts.EChartsOption;
    }

    private fetchThemeColors() {
        let colorArray: string[] = [];
        let key: string = '--kup-chart-color-';
        for (
            let index = 1;
            this.kupManager.theme.cssVars[key + index];
            index++
        ) {
            colorArray.push(this.kupManager.theme.cssVars[key + index]);
        }
        this.themeBackground =
            this.kupManager.theme.cssVars[KupThemeColorValues.BACKGROUND];
        this.themeBorder =
            this.kupManager.theme.cssVars[KupThemeColorValues.BORDER];
        this.themeFont = this.kupManager.theme.cssVars['--kup-font-family'];
        this.themeText =
            this.kupManager.theme.cssVars[KupThemeColorValues.TEXT];
        this.themeColors = colorArray;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.resize.observe(this.rootElement);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        this.fetchThemeColors();
    }

    componentDidRender() {
        if (this.data && this.data.columns && this.data.rows) {
            this.initChart();
        } else {
            this.kupManager.debug.logMessage(
                this,
                'Insufficient data.(' + this.data + ')',
                KupDebugCategory.WARNING
            );
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    onClick={() => this.onKupClick()}
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                ></div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
    }
}

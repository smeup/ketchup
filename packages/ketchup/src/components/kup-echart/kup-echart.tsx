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
import { XAXisComponentOption, YAXisComponentOption } from 'echarts';
import {
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
import { getColumnByName } from '../../utils/cell-utils';
import {
    CellsHolder,
    Column,
    DataTable,
} from '../kup-data-table/kup-data-table-declarations';
import { KupDataFindCellFilters } from '../../managers/kup-data/kup-data-declarations';

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
    @Prop() data: DataTable = null;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.
     * @default KupEchartLegendPlacement.RIGHT
     */
    @Prop() legend: KupEchartLegendPlacement = KupEchartLegendPlacement.RIGHT;
    /**
     * Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america", "italy" and "world".
     * @default null
     */
    @Prop() mapName: KupEchartMaps = null;
    /**
     * The data series to be displayed. They must be of the same type.
     * @default []
     */
    @Prop() series: string[] = [];
    /**
     * The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "100%"
     */
    @Prop() sizeX: string = '100%';
    /**
     * The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "100%"
     */
    @Prop() sizeY: string = '100%';
    /**
     * The type of the chart. Supported formats: Bar, Gaussian, Line, Pie, Map and Scatter.
     * @default [KupEchartTypes.LINE]
     */
    @Prop() types: KupEchartTypes[] = [KupEchartTypes.LINE];
    /**
     * Customization options for the x Axis.
     * @default null
     */
    @Prop() xAxis: XAXisComponentOption = null;
    /**
     * Customization options for the y Axis.
     * @default null
     */
    @Prop() yAxis: YAXisComponentOption = null;

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
    private gaussianDatasets: { [index: string]: DataTable };
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
                options = this.setMapOptions(mapJson);
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
                const treatedCells: CellsHolder = {};
                for (const key in cells) {
                    const cell = cells[key];
                    const title = getColumnByName(this.data.columns, key).title;
                    treatedCells[title] = cell;
                }
                x.push(treatedCells[0].value);
            }
        } else {
            for (let i = 0; i < this.data.rows.length; i++) {
                const cells = this.data.rows[i].cells;
                const treatedCells: CellsHolder = {};
                const title = getColumnByName(
                    this.data.columns,
                    this.axis
                ).title;
                treatedCells[title] = cells[this.axis];
                x.push(treatedCells[title].value);
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
                            const title = getColumnByName(
                                this.data.columns,
                                key
                            ).title;
                            if (!y[title]) {
                                y[title] = [];
                            }
                            y[title].push(value);
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
                        const title = getColumnByName(
                            this.data.columns,
                            key
                        ).title;
                        if (!y[title]) {
                            y[title] = [];
                        }
                        y[title].push(value);
                    }
                }
            }
        }
        return y;
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

    private setVisualMap(
        max: number,
        min: number,
        colors: string[],
        hasNumericValues: boolean
    ) {
        const opts: echarts.EChartsOption = {
            visualMap: {
                show: false,
            },
        };
        const colorRange = !hasNumericValues
            ? undefined
            : colors.length > 0
            ? { inRange: { color: colors }, min: min, max: max }
            : { inRange: { color: this.themeColors }, min: min, max: max };
        if (colorRange) {
            opts.visualMap = {
                ...opts.visualMap,
                ...colorRange,
                calculable: true,
                min: min,
                max: max,
                show: true,
            };
        }
        return opts;
    }

    private setMapOptions(map: string) {
        const mapJson = JSON.parse(map);
        const isoA2: string[] = [];
        const names: string[] = [];
        const mapFeatures: {
            properties: {
                iso_a2: string;
                name: string;
            };
        }[] = mapJson.features;
        for (let index = 0; index < mapFeatures.length; index++) {
            const feature = mapFeatures[index];
            isoA2.push(feature.properties.iso_a2);
            names.push(feature.properties.name);
        }
        const y = {};
        let objKey: string;
        for (const row of this.data.rows) {
            objKey = row.cells[this.axis].value;
            y[objKey] = [];
            for (const key of Object.keys(row.cells)) {
                const cell = row.cells[key];
                const value = cell.value;
                if (!this.axis.includes(key)) {
                    y[objKey].push(value);
                }
            }
        }
        const colors: string[] = [];
        const data = [];
        let hasNumericValues = false;
        let min = 0;
        let max = 0;
        for (let key in y) {
            let color: string = null;
            let n: number = null;
            for (let index = 0; index < y[key].length; index++) {
                const value = y[key][index];
                const res = this.kupManager.data.numberify(value);
                if (isNaN(value)) {
                    color = value;
                } else {
                    n = res;
                    if (n > max) {
                        max = n;
                    }
                    if (n < min) {
                        min = n;
                    }
                }
            }
            if (n !== null) {
                data.push({
                    name: names.includes(key) ? key : names[isoA2.indexOf(key)],
                    value: n ? n : undefined,
                });
                if (color) {
                    colors.push(color);
                }
                hasNumericValues = true;
            } else if (color) {
                data.push({
                    itemStyle: {
                        color: color,
                    },
                    name: names.includes(key) ? key : names[isoA2.indexOf(key)],
                });
            }
        }
        const echartOption: echarts.EChartsOption = {
            emphasis: {
                label: {
                    show: true,
                },
            },
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                formatter: function (
                    params: echarts.DefaultLabelFormatterCallbackParams
                ) {
                    const value = params.value;
                    if (
                        isNaN(value as unknown as number) ||
                        value === null ||
                        value === undefined
                    ) {
                        return null;
                    } else {
                        return params.name + ': ' + value;
                    }
                },
                showDelay: 0,
                trigger: 'item',
                transitionDuration: 0.2,
            },
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
            ...this.setVisualMap(max, min, colors, hasNumericValues),
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
        this.gaussianDatasets = {};
        for (const key in y) {
            let values: string[] = null;
            const column = this.data.columns.find(
                (col: Column) => col.title === key
            );
            if (!this.kupManager.objects.isNumber(column.obj)) {
                const newDataset =
                    this.kupManager.data.datasetOperations.distinct(this.data, [
                        column.name,
                    ]);
                values = this.kupManager.data.datasetOperations.cell.getValue(
                    newDataset,
                    [column.name]
                );
                this.gaussianDatasets[column.name] = newDataset;
            } else {
                values = y[key];
            }
            series.push({
                data: this.kupManager.data.normalDistribution(values),
                name: key,
                showSymbol: false,
                smooth: true,
                type: 'line',
            } as echarts.LineSeriesOption);
        }
        // "any" because type is mismanaged inside echarts library
        const tipCb: any = (params: any) => {
            const wrapper =
                '<div style="display: flex; flex-direction: column">';
            let format = wrapper;
            let count = 0;
            for (let index = 0; index < params.length; index++) {
                const param = params[index];
                const value = param.value[0];
                const x = `<div><span style="margin-right: 5px;"><strong>x:</strong></span><span>${param.value[0]}</span></div>`;
                if (!index) {
                    format += x;
                }
                const column = this.data.columns.find(
                    (col: Column) => col.title === param.seriesName
                ).name;
                const filters: KupDataFindCellFilters = {
                    columns: [column],
                    range: {
                        max: value + (value / 100) * 50,
                        min: value - (value / 100) * 50,
                    },
                };
                const rows = this.kupManager.data.datasetOperations.row.find(
                    this.gaussianDatasets[column]
                        ? this.gaussianDatasets[column]
                        : this.data,
                    filters
                );
                for (let index = 0; index < rows.length; index++) {
                    const row = rows[index];
                    const cells = row.cells;
                    if (cells[this.axis] || cells[column].title) {
                        let title = '';
                        if (cells[this.axis]) {
                            title = cells[this.axis].value;
                        } else {
                            title = cells[column].title;
                        }
                        const remainder = count % 4;
                        if (!remainder) {
                            if (count) {
                                format += `</div>`;
                            }
                            format += `<div style="display: flex; flex-direction: row;">`;
                        }
                        const style = `style="color: ${param.color}; margin-right: 5px"`;
                        format += `<span ${style}><strong>${title}</strong>: ${cells[column].value}</span>`;
                        count++;
                    }
                }
            }
            if (format === wrapper) {
                return null;
            } else {
                return format + '</div>';
            }
        };
        return {
            color: this.themeColors,
            legend: this.setLegend(y),
            series: series,
            title: this.setTitle(),
            tooltip: {
                ...this.setTooltip(),
                trigger: 'axis',
                formatter: tipCb,
            },
            xAxis: {
                ...this.setAxisColors(),
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                ...this.xAxis,
            },
            yAxis: {
                ...this.setAxisColors(),
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
        const style: GenericObject = {
            '--kup_echart_height': this.sizeY ? this.sizeY : '100%',
            '--kup_echart_width': this.sizeX ? this.sizeX : '100%',
        };

        return (
            <Host style={style}>
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

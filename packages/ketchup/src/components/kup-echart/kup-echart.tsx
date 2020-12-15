import {
    Component,
    Host,
    h,
    Prop,
    Element,
    getAssetPath,
    Event,
    EventEmitter,
    State,
    Method,
} from '@stencil/core';

import { ResizeObserver } from 'resize-observer';
import { ResizeObserverCallback } from 'resize-observer/lib/ResizeObserverCallback';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';

import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import echarts, { EChartOption, ECharts } from 'echarts';

@Component({
    tag: 'kup-echart',
    assetsDirs: ['assets/maps'],
    styleUrl: 'kup-echart.scss',
    shadow: true,
})
export class KupEchart {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() stateSwitcher: boolean = false;
    @State() themeBorder: string = undefined;
    @State() themeColors: string[] = undefined;
    @State() themeFont: string = undefined;
    @State() themeText: string = undefined;

    /**
     * Sets the axis of the chart.
     */
    @Prop() axis: string = '';
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization.
     */
    @Prop() customStyle: string = undefined;
    /**
     * The actual data of the chart.
     */
    @Prop() data: object = {};
    /**
     * Title of the graph.
     */
    @Prop() graphTitle: string = '';
    /**
     * Title of the graph's color.
     */
    @Prop() graphTitleColor: string;
    /**
     * Size of title of the graph (in pixels).
     */
    @Prop() graphTitleSize: number;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.
     */
    @Prop() legend: string;
    /**
     * choose which map you want to view. europe, africa, asia, oceania, america, world. you can also switch to json data to form a custom map
     */
    @Prop() mapType: any;
    /**
     * The data series to be displayed. They must be of the same type.
     */
    @Prop() series: string[];
    /**
     * Title position
     */
    @Prop() titlePosition: string = 'left';
    /**
     * The type of the chart. Supported formats: Line, Pie, Map, Scatter
     */
    @Prop() types: String[] = ['Line'];

    private chartContainer?: HTMLDivElement;
    private chartEl: ECharts;
    private echartOption: EChartOption;
    private echartSeries: EChartOption.Series[];
    private y = {};
    private x = [];
    private nameMap: any;
    private jsonMap: any;
    private resObserver: ResizeObserver = undefined;

    @Event() kupEchartClicked: EventEmitter;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme =
            'Needs to be refreshed every time the theme changes because there are dynamic colors.';
        this.customStyleTheme = customStyleTheme;
        this.fetchThemeColors();
    }

    private onKupClick() {
        this.kupEchartClicked.emit();
    }

    private forceUpdate() {
        this.stateSwitcher = !this.stateSwitcher;
    }

    private resetChart() {
        this.y = {};
        this.x = [];
        this.echartOption = {};
        this.echartSeries = [];
        this.nameMap = '';
    }

    private initializeChart() {
        if (this.types[0] != 'map') {
            if (this.types[0].toLowerCase() == 'pie') {
                this.createY();
                this.objectPie();
                this.createEchartPieJson();
            } else {
                this.createX();
                this.createY();
                this.createEchartJson();
            }
        }
        this.CreateEchart();
    }

    private CreateEchart() {
        if (this.chartEl) {
            echarts.dispose(this.chartContainer);
        }
        this.chartEl = echarts.init(this.chartContainer);
        if (this.types[0].toLowerCase() == 'map') {
            this.dynamicImport()
                .then(() => {
                    echarts.registerMap(this.nameMap, this.jsonMap);
                    this.createObjectMapYvalue();
                    this.objectMap();
                    this.createEchartMapJson();
                    this.chartEl.setOption(this.echartOption, true);
                })
                .catch((error) => {
                    logMessage(this, error, 'error');
                });
        } else {
            this.chartEl.setOption(this.echartOption, true);
        }
    }

    async dynamicImport(): Promise<Boolean> {
        const chart = this;
        let maps = getAssetPath(`./assets/maps/maps.js`);
        return new Promise(function (resolve, reject) {
            if (typeof chart.mapType == 'string') {
                import(maps)
                    .then((res) => {
                        chart.setMap(res, chart).then(() => {
                            resolve(true);
                        });
                    })
                    .catch((error) => {
                        logMessage(this, error, 'error');
                        reject();
                    });
            } else if (typeof chart.mapType == 'object') {
                import(maps)
                    .then((res) => {
                        chart.setMap(res, chart).then(() => {
                            resolve(true);
                        });

                        resolve(true);
                    })
                    .catch((error) => {
                        logMessage(this, error, 'error');
                        reject();
                    });
            } else reject();
        });
    }

    async setMap(maps: {}, chart: KupEchart) {
        if (typeof (chart.mapType == 'string')) {
            chart.jsonMap = maps[chart.mapType];
            chart.nameMap = chart.mapType;
        } else if (typeof (chart.mapType == 'object')) {
            chart.jsonMap = chart.mapType;
            chart.nameMap = 'custom';
        }
    }

    private createX() {
        let x = this.data['rows'];

        if (!this.axis) {
            for (let i = 0; i < x.length; i++) {
                this.x[i] = x[i].cells[0].value;
            }
        } else {
            for (let i = 0; i < x.length; i++) {
                this.x[i] = x[i].cells[this.axis].value;
            }
        }
    }

    private createY() {
        let rows = this.data['rows'];

        if (this.series) {
            for (const row of rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key != this.axis) {
                        if (this.series.indexOf(key) != -1) {
                            // Temporary - waiting for axes selection prop.
                            const cell = row.cells[key];
                            const value = cell.value;
                            if (!this.y[key]) {
                                this.y[key] = [];
                            }
                            this.y[key].push(value);
                        }
                    }
                }
            }
        } else {
            for (const row of rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key !== this.axis) {
                        // Temporary - waiting for axes selection prop.
                        const cell = row.cells[key];
                        const value = cell.value;
                        if (!this.y[key]) {
                            this.y[key] = [];
                        }
                        this.y[key].push(value);
                    }
                }
            }
        }
    }

    private createObjectMapYvalue() {
        // Creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart map.
        let rows = this.data['rows'];
        let objKey: string;
        for (const row of rows) {
            for (const key of Object.keys(row.cells)) {
                if (key == this.axis) {
                    objKey = row.cells[key].value;
                    if (!this.y[objKey]) this.y[objKey] = [];
                } else {
                    const cell = row.cells[key];
                    const value = cell.value;
                    this.y[objKey].push(value);
                }
            }
        }
    }

    private createLegend() {
        let arr: string[] = [];
        for (let key in this.y) {
            arr.push(key);
        }
        return arr;
    }

    private objectPie() {
        let data = [];
        for (let key in this.y) {
            let sum: number = 0;
            for (let j = 0; j < this.y[key].length; j++) {
                sum = sum + parseFloat(this.y[key][j]);
            }
            data.push({
                name: key,
                value: sum,
            });
        }

        this.echartSeries = [
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
            },
        ];
    }

    private objectMap() {
        let data = [];
        for (let i in this.y) {
            data.push({
                name: i,
                itemStyle: {
                    color: this.y[i][0],
                },
            });
        }

        this.echartSeries = [
            {
                name: 'estimate',
                type: 'map',
                roam: true,
                map: this.nameMap,
                emphasis: {
                    label: {
                        show: true,
                    },
                },

                data: data,
            },
        ];
    }

    private createEchartJson() {
        // Line, bar, scatter
        let i: number = 0;
        for (const key in this.y) {
            let type: string;
            if (this.types[i]) {
                type = this.types[i].toLowerCase();
            } else {
                type = 'line';
            }
            this.echartSeries.push({
                data: this.y[key],
                name: key,
                type: type,
            });
            i++;
        }

        this.echartOption = {
            color: this.themeColors,
            title: {
                text: this.graphTitle,
                [this.titlePosition]: 0,
                textStyle: {
                    color: this.graphTitleColor,
                    fontFamily: this.themeFont,
                    fontSize: this.graphTitleSize,
                },
            },
            legend: {
                data: this.createLegend(),
                [this.legend]: 0,
                textStyle: {
                    color: this.themeText,
                    fontFamily: this.themeFont,
                },
            },
            xAxis: {
                axisLine: { lineStyle: { color: this.themeText } },
                axisLabel: {
                    color: this.themeText,
                    fontFamily: this.themeFont,
                },
                axisTick: { lineStyle: { color: this.themeBorder } },
                data: this.x,
                splitLine: { lineStyle: { color: this.themeBorder } },
                type: 'category',
            },
            tooltip: {
                textStyle: {
                    fontFamily: this.themeFont,
                },
                trigger: 'axis',
            },
            yAxis: {
                axisLine: { lineStyle: { color: this.themeText } },
                axisLabel: {
                    color: this.themeText,
                    fontFamily: this.themeFont,
                },
                axisTick: { lineStyle: { color: this.themeBorder } },
                splitLine: { lineStyle: { color: this.themeBorder } },
                type: 'value',
            },
            series: this.echartSeries,
        };
    }

    private createEchartPieJson() {
        this.echartOption = {
            color: this.themeColors,
            title: {
                text: this.graphTitle,
                [this.titlePosition]: 0,
                textStyle: {
                    color: this.graphTitleColor,
                    fontFamily: this.themeFont,
                    fontSize: this.graphTitleSize,
                },
            },
            legend: {
                data: this.createLegend(),
                [this.legend]: 0,
                textStyle: {
                    color: this.themeText,
                    fontFamily: this.themeFont,
                },
            },
            tooltip: {
                textStyle: {
                    fontFamily: this.themeFont,
                },
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            series: this.echartSeries,
        };
    }

    private fetchThemeColors() {
        let colorArray: string[] = [];
        for (let index = 1, color = undefined; color !== ''; index++) {
            let key = '--kup-chart-color-' + index;
            color = document.documentElement.style.getPropertyValue(key);
            if (color) {
                colorArray.push(color);
            }
        }
        this.themeBorder = document.documentElement.style.getPropertyValue(
            '--kup-border-color'
        );
        this.themeFont = document.documentElement.style.getPropertyValue(
            '--kup-font-family'
        );
        this.themeText = document.documentElement.style.getPropertyValue(
            '--kup-text-color'
        );

        this.themeColors = colorArray;
    }

    private createEchartMapJson() {
        // Create the right json for creating map-like graphics
        this.echartOption = {
            title: {
                text: this.graphTitle,
                [this.titlePosition]: 0,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params: any) {
                    let value;
                    if (params.color != '#c23531') {
                        value = params.color;
                    } else {
                        value = 'no value';
                    }

                    return (
                        params.seriesName + '<br/>' + params.name + ': ' + value
                    );
                },
            },
            series: this.echartSeries,
        };
    }

    private setObserver() {
        let callback: ResizeObserverCallback = (
            entries: ResizeObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                logMessage(
                    this,
                    'Size changed to x: ' +
                        entry.contentRect.width +
                        ', y: ' +
                        entry.contentRect.height +
                        '.'
                );
                this.forceUpdate();
            });
        };
        this.resObserver = new ResizeObserver(callback);
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        this.setObserver();
        setThemeCustomStyle(this);
        this.fetchThemeColors();
    }

    componentDidLoad() {
        this.resObserver.observe(this.rootElement);

        this.initializeChart();
        logLoad(this, true);
    }

    componentWillUpdate() {
        this.resetChart();
        this.initializeChart();
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div
                    id="kup-component"
                    onClick={() => this.onKupClick()}
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                ></div>
            </Host>
        );
    }

    disconnectedCallBack() {
        this.resObserver.unobserve(this.rootElement);
    }
}

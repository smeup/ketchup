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
import { logLoad, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import echarts from 'echarts';

@Component({
    tag: 'kup-echart',
    assetsDirs: ['assets/maps'],
    styleUrl: 'kup-echart.scss',
    shadow: true,
})
export class KupEchart {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
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
    private myChart: any;
    private objectyvalue = {};
    private Xaxis = [];
    private echartjson: any;
    private datajson = [];
    private datapiejson = [];
    private datamapjson = [];
    private objectmapyvalue = {};
    private namemap: any;
    private jsonmap: any;

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

    private resetChart() {
        this.objectyvalue = {};
        this.Xaxis = [];
        this.echartjson = {};
        this.datajson = [];
        this.datapiejson = [];
        this.datamapjson = [];
        this.objectmapyvalue = {};
        this.namemap = '';
    }

    private initializeChart() {
        if (this.types[0] != 'map') {
            if (this.types[0].toLowerCase() == 'pie') {
                this.createObjectYvalue();
                this.objectPie();
                this.createEchartPieJson();
            } else {
                this.createXaxis();
                this.createObjectYvalue();
                this.createEchartJson();
            }
        }
        this.CreateEchart();
    }

    private CreateEchart() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
        }
        if (this.types[0].toLowerCase() == 'map') {
            this.dynamicImport()
                .then(() => {
                    echarts.registerMap(this.namemap, this.jsonmap);
                    this.createObjectMapYvalue();
                    this.objectMap();
                    this.createEchartMapJson();
                    this.myChart.setOption(this.echartjson, true);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.myChart.setOption(this.echartjson, true);
        }
    }

    async dynamicImport(): Promise<Boolean> {
        const charts = this;
        let maps = getAssetPath(`./assets/maps/maps.js`);
        return new Promise(function (resolve, reject) {
            if (typeof charts.mapType == 'string') {
                let total;
                import(maps)
                    .then((res) => {
                        total = res;
                        charts.assigne(total, charts).then(() => {
                            resolve(true);
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        reject();
                    });
            } else if (typeof charts.mapType == 'object') {
                let total;
                import(maps)
                    .then((res) => {
                        total = res;
                        charts.assigne(total, charts).then(() => {
                            resolve(true);
                        });

                        resolve(true);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject();
                    });
            } else reject();
        });
    }

    async assigne(total, charts) {
        if (typeof (charts.mapType == 'string')) {
            charts.jsonmap = total[charts.mapType];
            charts.namemap = charts.mapType;
        } else if (typeof (charts.mapType == 'object')) {
            charts.jsnonmap = charts.mapType;
            charts.namemap = 'custom';
        }
    }

    private createXaxis() {
        // Creates an array that contains x-axis values
        let x = this.data['rows'];
        if (!this.axis) {
            for (let i = 0; i < x.length; i++) {
                this.Xaxis[i] = x[i].cells.Col1.value;
            }
        } else {
            for (let i = 0; i < x.length; i++) {
                this.Xaxis[i] = x[i].cells[this.axis].value;
            }
        }
    }

    private createObjectYvalue() {
        // Creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart.
        let rows = this.data['rows'];

        if (this.series) {
            for (const row of rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key != this.axis) {
                        if (this.series.indexOf(key) != -1) {
                            // Temporary - waiting for axes selection prop.
                            const cell = row.cells[key];
                            const value = cell.value;
                            if (!this.objectyvalue[key])
                                this.objectyvalue[key] = [];
                            this.objectyvalue[key].push(value);
                        }
                    }
                }
            }
        } else {
            for (const row of rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key != this.axis) {
                        // Temporary - waiting for axes selection prop.
                        const cell = row.cells[key];
                        const value = cell.value;
                        if (!this.objectyvalue[key])
                            this.objectyvalue[key] = [];
                        this.objectyvalue[key].push(value);
                    }
                }
            }
        }
    }

    private createObjectMapYvalue() {
        // Creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart map.
        let rows = this.data['rows'];
        let objetckey;
        for (const row of rows) {
            for (const key of Object.keys(row.cells)) {
                if (key == this.axis) {
                    objetckey = row.cells[key].value;
                    if (!this.objectmapyvalue[objetckey])
                        this.objectmapyvalue[objetckey] = [];
                } else {
                    const cell = row.cells[key];
                    const value = cell.value;
                    this.objectmapyvalue[objetckey].push(value);
                }
            }
        }
    }

    private createLegend() {
        let arr = [];
        for (let key in this.objectyvalue) {
            arr.push(key);
        }
        return arr;
    }

    private objectPie() {
        for (let key in this.objectyvalue) {
            let somma = 0;
            const rjson = {};
            for (let j = 0; j < this.objectyvalue[key].length; j++) {
                let d = parseFloat(this.objectyvalue[key][j]);
                somma = somma + d;
            }
            rjson['value'] = somma;
            rjson['name'] = key;
            this.datapiejson.push(rjson);
        }

        return this.datapiejson;
    }

    private objectMap() {
        //creates object containing the right data format to pass to pie type
        for (let i in this.objectmapyvalue) {
            const rjson = {};
            const item = {};
            item['color'] = this.objectmapyvalue[i][0];
            rjson['name'] = i;
            rjson['itemStyle'] = item;
            this.datamapjson.push(rjson);
        }
        return this.datamapjson;
    }

    private createEchartJson() {
        // Create the object and the right json format to create line, bar, scatter graphs
        let i = 0;
        for (const key in this.objectyvalue) {
            let rjson = {};
            rjson['data'] = this.objectyvalue[key];
            rjson['name'] = key;
            if (this.types[i]) {
                rjson['type'] = this.types[i].toLowerCase();
            } else {
                rjson['type'] = 'line';
            }
            this.datajson.push(rjson);
            i++;
        }

        this.echartjson = {
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
                data: this.Xaxis,
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
            series: this.datajson,
        };
    }

    private createEchartPieJson() {
        // Create the right json to create pie type charts
        this.echartjson = {
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

            series: [
                {
                    name: 'echart',
                    type: 'pie',
                    data: this.datapiejson,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
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
        this.echartjson = {
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
                formatter: function (params) {
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

            series: [
                {
                    name: 'estimate',
                    type: 'map',
                    roam: true,
                    map: this.namemap,
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },

                    data: this.datamapjson,
                },
            ],
        };
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.fetchThemeColors();
    }

    componentDidLoad() {
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
}

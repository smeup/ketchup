import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

import echarts from 'echarts';

import { world } from '../../assets/maps/Emaps';

@Component({
    tag: 'kup-echarts',
    styleUrl: 'kup-echarts.css',
    shadow: true,
})
export class KupEcharts {
    /**
     * The actual data of the chart.
     */
    @Prop() objectData: object = {};
    /**
     * The type of the chart. Supported formats: Line, Pie, Map, Scatter
     */
    @Prop() types: String[] = ['Line'];
    /**
     * Title of the graph.
     */
    @Prop() graphTitle: string = '';
    /**
     * Size of title of the graph (in pixels).
     */
    @Prop() graphTitleSize: number;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.
     */
    @Prop() legend: string;
    /**
     * Title of the graph's color.
     */
    @Prop() graphTitleColor: string;
    /**
     * choose which map you want to view. europe, africa, asia, oceania, america, world. you can also switch to json data to form a custom map
     */
    @Prop() mapType: any;
    /**
     * Title position
     */
    @Prop() titlePosition: string = 'left';
    /**
     * Sets the axis of the chart.
     */
    @Prop() axis: string = 'Col1';
    /**
     * The data series to be displayed. They must be of the same type.
     */
    @Prop() series: string[];

    private chartContainer?: HTMLDivElement;
    private myChart: any;
    private objectyvalue = {};
    private Xaxis = [];
    private echartsjson: any;
    private datajson = [];
    private datapiejson = [];
    private datamapjson = [];
    private objectmapyvalue = {};
    private namemap: any;
    private jsonmap: any;

    @Event() kupEchartsClicked: EventEmitter;

    CreateEcharts() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
        }
        if (this.types[0].toLowerCase() == 'map') {
            this.dynamicImport()
                .then((res) => {
                    console.log(res);
                    //  console.log('stoprovando', this.jsonmap, this.namemap);
                    echarts.registerMap(this.namemap, this.jsonmap);
                    this.createObjectMapYvalue();
                    this.objectMap();
                    this.createEchartsMapJson();
                    this.myChart.setOption(this.echartsjson, true);
                })
                .catch((error) => {
                    console.log(error);
                });

            // echarts.registerMap('world', world);
        } else {
            this.myChart.setOption(this.echartsjson, true);
        }
    }
    async dynamicImport(): Promise<Boolean> {
        const charts = this;
        return new Promise(function (resolve, reject) {
            if (typeof charts.mapType == 'string') {
                let total;
                import('../../assets/maps/Emaps')
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
                import('../../assets/maps/Emaps')
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
        console.log(charts.mapType);
        if (typeof (charts.mapType == 'string')) {
            charts.jsonmap = total[charts.mapType];

            charts.namemap = charts.mapType;
            // console.log('originale', charts.jsonmap, charts.namemap);
        } else if (typeof (charts.mapType == 'object')) {
            charts.jsnonmap = charts.mapType;
            charts.namemap = 'custom';
            //  console.log('originale', charts.jsonmap, charts.namemap);
        }
    }

    createXaxis() {
        //creates an array that contains x-axis values
        let x = this.objectData['rows'];
        if (!this.axis) {
            for (let i = 0; i < x.length; i++) {
                this.Xaxis[i] = x[i].cells.Col1.value;
            }
        } else {
            for (let i = 0; i < x.length; i++) {
                this.Xaxis[i] = x[i].cells[this.axis].value;
            }
        }

        //console.log(this.Xaxis);
    }

    createObjectYvalue() {
        //creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart.
        let rows = this.objectData['rows'];

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
    createObjectMapYvalue() {
        //creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart map.
        let rows = this.objectData['rows'];
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
        // console.log(this.objectmapyvalue);
    }

    createLegend() {
        //create the chart legend
        let arr = [];
        for (let key in this.objectyvalue) {
            arr.push(key);
        }
        return arr;
    }

    objectPie() {
        //creates object containing the right data format to pass to pie type
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

        // console.log(this.datapiejson);
        return this.datapiejson;
    }

    objectMap() {
        //creates object containing the right data format to pass to pie type
        for (let i in this.objectmapyvalue) {
            const rjson = {};
            const item = {};
            item['color'] = this.objectmapyvalue[i][0];
            rjson['name'] = i;
            rjson['itemStyle'] = item;
            this.datamapjson.push(rjson);
        }
        //  console.log(this.datamapjson);
        return this.datamapjson;
    }

    createEchartsJson() {
        //Create the object and the right json format to create line, bar, scatter graphs
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

        // console.log(this.datajson);
        this.echartsjson = {
            title: {
                text: this.graphTitle,
                [this.titlePosition]: 0,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            legend: {
                data: this.createLegend(),
                [this.legend]: 0,
            },
            xAxis: {
                type: 'category',
                data: this.Xaxis,
            },
            tooltip: {
                trigger: 'axis',
            },
            yAxis: {
                type: 'value',
            },
            series: this.datajson,
        };
    }

    createEchartsPieJson() {
        //create the right json to create pie type charts
        this.echartsjson = {
            title: {
                text: this.graphTitle,
                [this.titlePosition]: 0,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            legend: {
                data: this.createLegend(),
                [this.legend]: 0,
            },

            tooltip: {
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

    createEchartsMapJson() {
        //create the right json for creating map-like graphics
        this.echartsjson = {
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
            },

            series: [
                {
                    name: 'Europe estimate',
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

    componentWillUpdate() {
        this.resetChart();
        this.initializeChart();
    }

    componentDidLoad() {
        this.initializeChart();
    }

    resetChart() {
        this.objectyvalue = {};
        this.Xaxis = [];
        this.echartsjson = {};
        this.datajson = [];
        this.datapiejson = [];
        this.datamapjson = [];
        this.objectmapyvalue = {};
        this.namemap = '';
    }

    initializeChart() {
        if (this.types[0] != 'map') {
            if (this.types[0].toLowerCase() == 'pie') {
                this.createObjectYvalue();
                this.objectPie();
                this.createEchartsPieJson();
            } else {
                this.createXaxis();
                this.createObjectYvalue();
                this.createEchartsJson();
            }
        } else {
            /*
            this.createObjectMapYvalue();
            this.objectMap();
            this.createEchartsMapJson();
            */
        }
        this.CreateEcharts();
    }

    OnKupClick() {
        this.kupEchartsClicked.emit();
    }

    render() {
        return (
            <Host>
                <div
                    id="main"
                    onClick={() => this.OnKupClick()}
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                ></div>
            </Host>
        );
    }
}

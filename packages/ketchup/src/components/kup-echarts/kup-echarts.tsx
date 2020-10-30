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
    @Prop() types: string;
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

    private chartContainer?: HTMLDivElement;
    private myChart: any;
    private objectyvalue = {};
    private Xaxis = [];
    private echartsjson: any;
    private datajson = [];
    private datapiejson = [];
    private datamapjson = [];
    private objectkey: any;
    private objectmapyvalue = {};

    @Event() kupEchartsClicked: EventEmitter;

    CreateEcharts() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
        }
        if (this.types == 'map') {
            echarts.registerMap('World', world);
        }

        this.myChart.setOption(this.echartsjson, true);
    }

    createXaxis() {
        //creates an array that contains x-axis values
        let x = this.objectData['rows'];

        for (let i = 0; i < x.length; i++) {
            this.Xaxis[i] = x[i].cells.Col1.value;
        }
    }

    createObjectYvalue() {
        //creates an object that contains all the information needed to derive the values ​​and keys needed to create the chart.
        let rows = this.objectData['rows'];
        for (const row of rows) {
            for (const key of Object.keys(row.cells)) {
                if (key != 'Col1') {
                    // Temporary - waiting for axes selection prop.
                    const cell = row.cells[key];
                    const value = cell.value;
                    if (!this.objectyvalue[key]) this.objectyvalue[key] = [];
                    this.objectyvalue[key].push(value);
                }
            }
        }
    }
    createObjectMapYvalue() {
        let rows = this.objectData['rows'];
        for (const row of rows) {
            for (const key of Object.keys(row.cells)) {
                if (key == 'Col1') {
                    this.objectkey = row.cells[key].value;
                    if (!this.objectmapyvalue[this.objectkey])
                        this.objectmapyvalue[this.objectkey] = [];
                } else {
                    const cell = row.cells[key];
                    const value = cell.value;
                    this.objectmapyvalue[this.objectkey].push(value);
                }
            }
        }
        console.log(this.objectmapyvalue);
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
        for (let i in this.objectmapyvalue) {
            const rjson = {};
            const item = {};
            item['color'] = this.objectmapyvalue[i][0];
            rjson['name'] = i;
            rjson['itemStyle'] = item;
            this.datamapjson.push(rjson);
        }
        console.log(this.datamapjson);
        return this.datamapjson;
    }

    createEchartsJson() {
        //Create the object and the right json format to create line, bar, scatter graphs
        for (const key in this.objectyvalue) {
            let rjson = {};
            rjson['data'] = this.objectyvalue[key];
            rjson['name'] = key;
            rjson['type'] = this.types.toLowerCase();
            this.datajson.push(rjson);
        }

        // console.log(this.datajson);
        this.echartsjson = {
            title: {
                text: this.graphTitle,
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
                text: 'World map',
                subtext: 'Data of Population Europe',
                left: 'right',
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
                    map: 'World',
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
        this.objectkey = '';
        this.objectmapyvalue = {};
    }

    initializeChart() {
        if (this.types != 'map') {
            if (this.types.toLowerCase() == 'pie') {
                this.createObjectYvalue();
                this.objectPie();
                this.createEchartsPieJson();
            } else {
                this.createXaxis();
                this.createObjectYvalue();
                this.createEchartsJson();
            }
        } else {
            this.createObjectMapYvalue();
            this.objectMap();
            this.createEchartsMapJson();
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

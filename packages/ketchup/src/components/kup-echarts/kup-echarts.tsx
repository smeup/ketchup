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
                transitionDuration: 0.2,
                formatter: function (params) {
                    var value = [];
                    value = (params.value + '').split('.');
                    value = value[0].replace(
                        /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
                        '$1,'
                    );
                    return (
                        params.seriesName + '<br/>' + params.name + ': ' + value
                    );
                },
            },
            visualMap: {
                left: 'right',
                min: 500000,
                max: 38000000,
                inRange: {
                    color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        '#a50026',
                    ],
                },
                text: ['High', 'Low'],
                calculable: true,
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

                    data: [
                        { name: 'Italy', value: 4822023 },
                        { name: 'Russia', value: 50000000 },
                        { name: 'Spain', value: 5000004 },
                        { name: 'Germany', value: 23444444 },
                        { name: 'Ukraine', value: 2399999 },
                        { name: 'Sweden', value: 30234122 },
                        { name: 'Poland', value: 21212121 },
                        { name: 'Finland', value: 21212121 },
                        { name: 'Roma', value: 21212121 },
                    ],
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

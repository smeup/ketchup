import {
    Component,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
} from '@stencil/core';

import echarts from 'echarts';
// import { europe } from '../../assets/maps/Emaps';
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
    private oj = {};
    private x = [];
    private rightjson: any;
    private datajson = [];
    private datapiejson = [];
    // private rightjsonmap: any;

    @Event() kupEchartsClicked: EventEmitter;

    CreateEcharts() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
        }
        if (this.types == 'map') {
            echarts.registerMap('World', world);
        }

        this.myChart.setOption(this.rightjson, true);
    }

    ParseJsonX() {
        let Xaxis = this.objectData['rows'];

        for (let i = 0; i < Xaxis.length; i++) {
            this.x[i] = Xaxis[i].cells.Col1.value;
        }
    }

    ParseJsonY() {
        let rows = this.objectData['rows'];
        for (const row of rows) {
            for (const key of Object.keys(row.cells)) {
                if (key != 'Col1') { // Temporary - waiting for axes selection prop.
                    const cell = row.cells[key];
                    const value = cell.value;
                    if (!this.oj[key]) this.oj[key] = [];
                    this.oj[key].push(value);
                }
            }  
        }
    }
    createlegend() {
        let arr = [];
        for (let key in this.oj) {
            arr.push(key);
        }
        return arr;
    }

    objectpie() {
        // console.log(this.oj);
        // let somme = [];
        // for (let key in this.oj) {
        //     let somma = 0;
        //     for (let j = 0; j < this.oj[key].length; j++) {
        //         let d = parseFloat(this.oj[key][j]);
        //         somma = somma + d;
        //     }
        //     somme.push(somma);
        // }

        // let i = 0;
        // for (let key in this.oj) {
        //     let rjson = {};
        //     rjson['value'] = somme[i];
        //     rjson['name'] = key;

        //     this.datapiejson.push(rjson);
        //     i++;
        // }

        for (let key in this.oj) {
            let somma = 0;
            const rjson = {};
            for (let j = 0; j < this.oj[key].length; j++) {
                let d = parseFloat(this.oj[key][j]);
                somma = somma + d;
            }
            rjson['value'] = somma;
            rjson['name'] = key;
            this.datapiejson.push(rjson);
        }

        console.log(this.datapiejson);
        return this.datapiejson;
    }

    Createrightjson() {
        for (const key in this.oj) {
            let rjson = {};
            rjson['data'] = this.oj[key];
            rjson['name'] = key;
            rjson['type'] = this.types.toLowerCase();
            this.datajson.push(rjson);
        }

        console.log(this.datajson);

        const tlegend = this.legend;
        console.log(tlegend);

        console.log(this.datajson);
        this.rightjson = {
            title: {
                text: this.graphTitle,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            legend: {
                data: this.createlegend(),
                [tlegend]: 0,
            },
            xAxis: {
                type: 'category',
                data: this.x,
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

    createpiejson() {
        let tlegend = this.legend;
        this.rightjson = {
            title: {
                text: this.graphTitle,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            legend: {
                data: this.createlegend(),
                [tlegend]: 0,
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

    createmapjson() {
        this.rightjson = {
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
                text: ['High', 'Low'], // 文本，默认为数值文本
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
                    // 文本位置修正

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
        this.oj = {};
        this.x = [];
        this.rightjson = {};
        this.datajson = [];
        this.datapiejson = [];
        // this.myChart = '';
    }

    initializeChart() {
        if (this.types != 'map') {
            if (this.types.toLowerCase() == 'pie') {
                this.ParseJsonY();
                this.objectpie();
                this.createpiejson();
            } else {
                this.ParseJsonX();
                this.ParseJsonY();
                this.Createrightjson();
            }
        } else {
            this.createmapjson();
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

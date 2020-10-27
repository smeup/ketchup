import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core';
import echarts from 'echarts';
import { map } from 'lodash';
import { europe } from '../../assets/maps/Emaps';
import { world } from '../../assets/maps/Emaps';

@Component({
    tag: 'kup-echarts',
    styleUrl: 'kup-echarts.css',
    shadow: true,
})
export class KupEcharts {
    @Prop() objectData: object = {};
    @Prop() types: string;
    @Prop() graphTitle: string = '';
    @Prop() graphTitleSize: number;
    @Prop() legend: string;
    @Prop() graphTitleColor: string;

    private chartContainer?: HTMLDivElement;
    private myChart: any;
    private oj = {};
    private x = [];
    private rightjson: any;
    private datajson = [];
    private datapiejson = [];
    private rightjsonmap: any;

    @Event() kupEchartsClicked: EventEmitter;

    CreateEcharts() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
        }
        if (this.types == 'map') {
            echarts.registerMap('Wordl', world);
        }

        this.myChart.setOption(this.rightjson, true);
    }

    ParseJsonX() {
        let Xaxis = this.objectData['rows'];

        for (let i = 0; i < Xaxis.length; i++) {
            this.x[i] = Xaxis[i].cells.Col1.obj.k;
        }
    }

    ParseJsonY() {
        let ngraph = this.objectData['columns'];
        let conta = 0;

        for (let i = 0; i < ngraph.length; i++) {
            if (ngraph[i].name != 'Col1') {
                this.oj[ngraph[i].name] = [];

                conta = conta + 1;
            }
        }

        let yvalue = this.objectData['rows'];
        let x = [];
        for (let i = 0; i < yvalue.length; i++) {
            for (let key in this.oj) {
                if (this.oj.hasOwnProperty(key)) {
                    let value = yvalue[i].cells[key].obj.k;
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
        console.log(this.oj);
        let somme = [];
        for (let key in this.oj) {
            let somma = 0;
            for (let j = 0; j < this.oj[key].length; j++) {
                let d = parseFloat(this.oj[key][j]);
                somma = somma + d;
            }
            somme.push(somma);
        }

        let i = 0;
        for (let key in this.oj) {
            let rjson = {};
            rjson['value'] = somme[i];
            rjson['name'] = key;

            this.datapiejson.push(rjson);
            i++;
        }

        console.log(this.datapiejson);
        return this.datapiejson;
    }

    Createrightjson() {
        for (let key in this.oj) {
            let rjson = {};
            rjson['data'] = this.oj[key];
            rjson['name'] = key;
            rjson['type'] = this.types.toLowerCase();
            this.datajson.push(rjson);
        }

        console.log(this.datajson);

        let tlegend = this.legend;
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
                    map: 'Wordl',
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
        this.oj = {};
        this.x = [];
        this.rightjson = {};
        this.datajson = [];
        this.datapiejson = [];
        this.myChart = '';

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

    componentDidLoad() {
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

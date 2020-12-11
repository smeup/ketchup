import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    State,
    Method,
} from '@stencil/core';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import echarts from 'echarts';

@Component({
    tag: 'kup-echarts',
    styleUrl: 'kup-echarts.css',
    shadow: true,
})
export class KupEcharts {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() themeBorder: string = undefined;
    @State() themeColors: string[] = undefined;
    @State() themeText: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization.
     */
    @Prop() customStyle: string = undefined;

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

    @Event() kupEchartsClicked: EventEmitter;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme =
            'Needs to be refreshed every time the theme changes because there are dynamic colors.';
        this.customStyleTheme = customStyleTheme;
        this.fetchThemeColors();
    }

    CreateEcharts() {
        if (!this.myChart) {
            this.myChart = echarts.init(this.chartContainer);
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

        let tlegend = this.legend;
        this.rightjson = {
            color: this.themeColors,
            legend: {
                data: this.createlegend(),
                [tlegend]: 0,
                textStyle: { color: this.themeText },
            },
            series: this.datajson,
            title: {
                text: this.graphTitle,
                textStyle: {
                    fontSize: this.graphTitleSize,
                    color: this.graphTitleColor,
                },
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                axisLine: { lineStyle: { color: this.themeText } },
                axisLabel: { color: this.themeText },
                axisTick: { lineStyle: { color: this.themeBorder } },
                data: this.x,
                splitLine: { lineStyle: { color: this.themeBorder } },
                type: 'category',
            },
            yAxis: {
                axisLine: { lineStyle: { color: this.themeText } },
                axisLabel: { color: this.themeText },
                axisTick: { lineStyle: { color: this.themeBorder } },
                splitLine: { lineStyle: { color: this.themeBorder } },
                type: 'value',
            },
        };
    }

    createpiejson() {
        let tlegend = this.legend;
        this.rightjson = {
            color: this.themeColors,
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
                textStyle: { color: this.themeText },
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

    private fetchThemeColors() {
        let colorArray: string[] = [];
        for (let index = 1, color = undefined; color !== ''; index++) {
            let key = '--kup-chart-color-' + index;
            color = document.documentElement.style.getPropertyValue(key);
            if (color) {
                colorArray.push(color);
            }
        }
        this.themeText = document.documentElement.style.getPropertyValue(
            '--kup-text-color'
        );
        this.themeBorder = document.documentElement.style.getPropertyValue(
            '--kup-border-color'
        );

        this.themeColors = colorArray;
    }

    componentWillLoad() {
        setThemeCustomStyle(this);
        this.fetchThemeColors();
    }

    componentWillUpdate() {
        this.oj = {};
        this.x = [];
        this.rightjson = {};
        this.datajson = [];
        this.datapiejson = [];
        this.myChart = '';

        if (this.types.toLowerCase() == 'pie') {
            this.ParseJsonY();
            this.objectpie();
            this.createpiejson();
        } else {
            this.ParseJsonX();
            this.ParseJsonY();
            this.Createrightjson();
        }

        this.CreateEcharts();
    }

    componentDidLoad() {
        if (this.types.toLowerCase() == 'pie') {
            this.ParseJsonY();
            this.objectpie();
            this.createpiejson();
        } else {
            this.ParseJsonX();
            this.ParseJsonY();
            this.Createrightjson();
        }

        this.CreateEcharts();
    }
    OnKupClick() {
        this.kupEchartsClicked.emit();
    }

    render() {
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div
                    id="kup-component"
                    onClick={() => this.OnKupClick()}
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                >
                    {' '}
                </div>
            </Host>
        );
    }
}

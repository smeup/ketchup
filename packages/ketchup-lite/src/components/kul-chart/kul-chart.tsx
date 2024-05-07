import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Host,
    h,
    Method,
    Prop,
    State,
} from '@stencil/core';
import {
    KulChartEventPayload,
    KulChartEvent,
    KulChartType,
    KulChartProps,
    KulChartLegendPlacement,
} from './kul-chart-declarations';
import {
    BarSeriesOption,
    EChartsOption,
    LegendComponentOption,
    LineSeriesOption,
    PieSeriesOption,
    ScatterSeriesOption,
    SeriesOption,
    TooltipComponentOption,
    XAXisComponentOption,
    YAXisComponentOption,
    dispose,
    graphic,
    init,
} from 'echarts';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KulThemeColorValues } from '../../managers/kul-theme/kul-theme-declarations';
import { GenericMap, GenericObject } from '../../types/GenericTypes';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import {
    KulDataCellContainer,
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';

@Component({
    tag: 'kul-chart',
    styleUrl: 'kul-chart.scss',
    shadow: true,
})
export class KulChart {
    /**
     * References the root HTML element of the component (<kul-chart>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Debug information.
     */
    @State() debugInfo: KulDebugComponentInfo = {
        endTime: 0,
        renderCount: 0,
        renderEnd: 0,
        renderStart: 0,
        startTime: performance.now(),
    };

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the axis of the chart.
     * @default ""
     */
    @Prop({ mutable: true }) kulAxis = '';
    /**
     * Overrides theme's colors.
     * @default []
     */
    @Prop() kulColors: string[] = [];
    /**
     * The actual data of the chart.
     * @default null
     */
    @Prop() kulData: KulDataDataset = null;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top, hidden. Keep in mind that legend types are tied to chart types, some combinations might not work.
     * @default "bottom"
     */
    @Prop() kulLegend: KulChartLegendPlacement = 'bottom';
    /**
     * The data series to be displayed. They must be of the same type.
     * @default []
     */
    @Prop() kulSeries: string[] = [];
    /**
     * The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "100%"
     */
    @Prop() kulSizeX = '100%';
    /**
     * The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "100%"
     */
    @Prop() kulSizeY = '100%';
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop() kulStyle = '';
    /**
     * The type of the chart. Supported formats: Bar, Gaussian, Line, Pie, Map and Scatter.
     * @default ["line"]
     */
    @Prop() kulTypes: KulChartType[] = ['line'];
    /**
     * Customization options for the x Axis.
     * @default null
     */
    @Prop() kulXAxis: XAXisComponentOption = null;
    /**
     * Customization options for the y Axis.
     * @default null
     */
    @Prop() kulYAxis: YAXisComponentOption = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #chartContainer: HTMLDivElement;
    #chartEl: echarts.ECharts;
    #gaussianDatasets: { [index: string]: KulDataDataset };
    #kulManager = kulManagerInstance();
    #sortedDataset: KulDataDataset = null;
    #minColorHeatMap = '';
    #maxColorHeatMap = '';
    #themeBackground = '';
    #themeBorder = '';
    #themeFont = '';
    #themeText = '';
    #findColumn = this.#kulManager.data.column.find;
    #stringify = this.#kulManager.data.cell.stringify;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kul-echart-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulChartEventPayload>;

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulChartEvent,
        { column, node, x, y }: Partial<KulChartEventPayload>
    ) {
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            column,
            node,
            x,
            y,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulChartProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #initChart() {
        if (this.#chartEl) {
            dispose(this.#chartContainer);
        }
        if (this.kulTypes && this.kulTypes.length > 0) {
            this.#chartEl = init(this.#chartContainer);
            this.#createChart();
        } else {
            this.#kulManager.debug.logMessage(
                this,
                "Can't intialize chart without specifiying at least 1 type.",
                'warning'
            );
        }
    }

    #createX(dataset: KulDataDataset = null) {
        const x: string[] = [];
        if (!dataset) {
            dataset = this.kulData;
        }
        if (!this.kulAxis) {
            for (let i = 0; i < dataset.nodes.length; i++) {
                const cells = dataset.nodes[i].cells;
                const treatedCells: KulDataCellContainer = {};
                for (const key in cells) {
                    const cell = cells[key];
                    const title = this.#findColumn(this.kulData, { id: key })[0]
                        .title;
                    treatedCells[title] = cell;
                }
                if (treatedCells[0]) {
                    x.push(this.#stringify(treatedCells[0].value));
                }
            }
        } else {
            for (let i = 0; i < dataset.nodes.length; i++) {
                const cells = dataset.nodes[i].cells;
                const treatedCells: KulDataCellContainer = {};
                const title = this.#findColumn(dataset, { id: this.kulAxis })[0]
                    .title;
                treatedCells[title] = cells[this.kulAxis];
                x.push(this.#stringify(treatedCells[title].value));
            }
        }
        return x;
    }

    #createY() {
        const y = {};
        if (this.kulSeries && this.kulSeries.length > 0) {
            for (const node of this.kulData.nodes) {
                for (const key of Object.keys(node.cells)) {
                    if (key != this.kulAxis) {
                        if (this.kulSeries.includes(key)) {
                            const cell = node.cells[key];
                            const value = cell.value;
                            const column = this.#findColumn(this.kulData, {
                                id: key,
                            })[0];
                            if (column) {
                                const title = column.title;
                                if (!y[title]) {
                                    y[title] = [];
                                }
                                y[title].push(value);
                            }
                        }
                    }
                }
            }
        } else {
            for (const node of this.kulData.nodes) {
                for (const key of Object.keys(node.cells)) {
                    if (key !== this.kulAxis) {
                        const cell = node.cells[key];
                        const value = cell.value;
                        const column = this.#findColumn(this.kulData, {
                            id: key,
                        })[0];
                        if (column) {
                            const title = column.title;
                            if (!y[title]) {
                                y[title] = [];
                            }
                            y[title].push(value);
                        }
                    }
                }
            }
        }
        return y;
    }

    async #createChart() {
        this.#sortedDataset = null;
        const options: EChartsOption = {};
        const firstType = this.kulTypes[0];
        switch (firstType) {
            /*            case 'bubble':
                Object.assign(options, this.#bubbleChart());
                break;
            case 'calendar':
                Object.assign(options, this.#calendarChart());
                break;
            case 'candle':
                Object.assign(options, this.#candleChart());
                break;
            case 'funnel':
                Object.assign(options, this.#funnelChart());
                break;
            case 'gaussian':
                Object.assign(options, this.#setGaussianOptions());
                break;
            case 'radar':
                Object.assign(options, this.#radarChart());
                break;
            case 'sankey':
                Object.assign(options, this.#sankeyChart());
                break;*/
            case 'pie':
                Object.assign(options, this.#setPieOptions());
                break;
            default:
                Object.assign(options, this.#setOptions());
                break;
        }
        this.#chartEl.setOption(options, true);
        this.#chartEl.on('click', (e) => {
            const node: KulDataNode = { id: '' };
            if (this.#sortedDataset && e.seriesType === 'bar') {
                Object.assign(node, this.#sortedDataset.nodes[e.dataIndex]);
            } else if (!Array.isArray(e.data)) {
                Object.assign(node, this.kulData.nodes[e.dataIndex]);
            }
            this.onKulEvent(e.event?.event, 'click', {
                x: Array.isArray(e.data as number[]) ? e.data[0] : e.name,
                y: Array.isArray(e.data as number[]) ? e.data[1] : e.value,
            });
        });
    }

    #updateTextColor() {
        this.#themeBackground =
            this.#kulManager.theme.cssVars[KulThemeColorValues.BACKGROUND];
        this.#themeBorder =
            this.#kulManager.theme.cssVars[KulThemeColorValues.BORDER];
        this.#themeFont = this.#kulManager.theme.cssVars['--kul-font-family'];
        this.#themeText =
            this.#kulManager.theme.cssVars[KulThemeColorValues.TEXT];
    }

    #setColors(requiredNumber: number) {
        const colorArray =
            this.kulColors && this.kulColors.length > 0
                ? [...this.kulColors]
                : [];
        let key = '--kul-chart-color-';
        for (
            let index = 1;
            this.#kulManager.theme.cssVars[key + index];
            index++
        ) {
            colorArray.push(this.#kulManager.theme.cssVars[key + index]);
        }
        if (this.kulColors && this.kulColors[0]) {
            this.#maxColorHeatMap = this.kulColors[0];
        } else {
            const colorCheckDark = this.#kulManager.theme.colorCheck(
                colorArray[0]
            );
            this.#maxColorHeatMap = `hsl(${colorCheckDark.hue}, ${
                colorCheckDark.saturation
            },  ${(parseFloat(colorCheckDark.lightness) - 30).toString()}%)`;
        }
        if (this.kulColors && this.kulColors[1]) {
            this.#minColorHeatMap = this.kulColors[1];
        } else {
            const colorCheckBright = this.#kulManager.theme.colorCheck(
                colorArray[0]
            );
            this.#minColorHeatMap = `hsl(${colorCheckBright.hue}, ${
                colorCheckBright.saturation
            }, ${(parseFloat(colorCheckBright.lightness) + 30).toString()}%)`;
        }
        for (
            let index = colorArray.length;
            requiredNumber && index < requiredNumber;
            index++
        ) {
            colorArray.push(this.#kulManager.theme.randomColor(128));
        }

        return colorArray;
    }

    #setAxisColors() {
        return {
            axisLabel: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
            axisLine: { lineStyle: { color: this.#themeText } },
            axisTick: { lineStyle: { color: this.#themeBorder } },
            splitLine: { lineStyle: { color: this.#themeBorder } },
        } as XAXisComponentOption | YAXisComponentOption;
    }

    #setLegend(y: {}) {
        if (this.kulLegend === 'hidden') {
            return null;
        }
        const data: string[] = [];
        for (let key in y) {
            data.push(key);
        }
        return {
            data: data,
            [this.kulLegend]: 0,
            textStyle: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
        } as LegendComponentOption;
    }

    #setTooltip() {
        return {
            backgroundColor: this.#themeBackground,
            textStyle: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
        } as TooltipComponentOption;
    }

    #setOptions() {
        const x = this.#createX();
        const y = this.#createY();
        let i: number = 0;
        const series: SeriesOption[] = [];
        const color = this.#setColors(Object.keys(y).length);
        for (const key in y) {
            const values: string[] = y[key];
            let type: KulChartType;
            if (this.kulTypes[i]) {
                type = this.kulTypes[i];
            } else {
                type = 'line';
            }
            this.#addSeries(type, series, values, key, color[i]);
            i++;
        }
        const isHorizontal = !!('hbar' === this.kulTypes[0]);
        return {
            color,
            legend: this.#setLegend(y),
            series,
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'axis',
            },
            xAxis: {
                ...this.#setAxisColors(),
                data: isHorizontal ? undefined : x,
                type: isHorizontal ? 'value' : 'category',
                ...this.kulXAxis,
            },
            yAxis: {
                ...this.#setAxisColors(),
                data: isHorizontal ? x : undefined,
                type: isHorizontal ? 'category' : 'value',
                ...this.kulYAxis,
            },
        } as EChartsOption;
    }

    #setPieOptions() {
        const y = this.#createY();
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
            color: this.#setColors(Object.keys(y).length),
            legend: this.#setLegend(y),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            series: [
                {
                    name: this.#findColumn(this.kulData, {
                        id: this.kulAxis,
                    })[0].title,
                    type: 'pie',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                } as PieSeriesOption,
            ],
        } as EChartsOption;
    }
    /*
    #funnelChart() {
        const x = this.#createX();
        const y = this.#createY();
        const cellsSum: { [index: string]: number } = {};
        const data = [];
        let highest = 0;

        for (let key in y) {
            for (let j = 0; j < y[key].length; j++) {
                if (cellsSum[x[j]]) {
                    cellsSum[x[j]] += parseFloat(y[key][j]);
                } else {
                    cellsSum[x[j]] = parseFloat(y[key][j]);
                }
            }
        }

        for (let key in cellsSum) {
            const value = cellsSum[key];
            if (value > highest) {
                highest = value;
            }
        }

        for (const key in cellsSum) {
            const value = cellsSum[key];
            data.push({
                name: key,
                value: ((100 * value) / highest).toFixed(2),
            });
        }
        return {
            color: this.#setColors(Object.keys(cellsSum).length),
            title: this.#setTitle(),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: (value: unknown) => {
                    const name = (value as GenericObject).data.name as string;
                    const percentage = (value as GenericObject).data
                        .value as string;
                    return `${name}: <strong>${
                        cellsSum[name]
                    }</strong> (${this.#kulManager.math.format(percentage)}%)`;
                },
            },
            legend: this.#setLegend(cellsSum),
            series: [
                {
                    name: this.#kulManager.data.column.find(this.data, {
                        name: this.axis,
                    })[0].title,
                    type: 'funnel',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            width: 1,
                            type: 'solid',
                        },
                    },
                    itemStyle: {
                        borderColor: this.#themeBackground,
                        borderWidth: 1,
                    },
                    left: '10%',
                    right: '10%',
                    width: '80%',
                    data,
                },
            ],
        } as echarts.EChartsOption;
    }

    #radarChart() {
        const x = this.#createX();
        const y = this.#createY();
        const data: { name: string; value: number[] }[] = [],
            transposedData: { name: string; value: number[] }[] = [],
            transposedIndicator: { name: string; max: number }[] = [];

        for (const [_index, values] of x.entries()) {
            data.push({ name: values, value: [] });
        }

        for (const key in y) {
            transposedData.push({
                name: key,
                value: y[key],
            });
            for (const values in y[key]) {
                data[values].value.push(y[key][values]);
            }
        }
        for (let index = 0; index < data.length; index++) {
            const dataEl = data[index];
            const key = dataEl.name;
            const foundEl = transposedIndicator.find((d) => d.name === key);
            const max = Math.floor(Math.max(...dataEl.value) * 1.05);
            if (!foundEl) {
                transposedIndicator.push({
                    name: key,
                    max,
                });
            } else {
                foundEl.max = foundEl.max > max ? foundEl.max : max;
            }
        }

        return {
            color: this.#setColors(Object.keys(y).length),
            title: this.#setTitle(),
            legend: this.#setLegend(y),
            radar: {
                indicator: transposedIndicator,
            },
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
            },
            series: [
                {
                    name: this.#kulManager.data.column.find(this.data, {
                        name: this.axis,
                    })[0].title,
                    type: 'radar',
                    data: transposedData,
                },
            ],
        } as echarts.EChartsOption;
    }

    #bubbleChart() {
        const y = this.#createY(),
            data = [],
            temp = [],
            legend = {},
            series = [];
        let year = [];

        const content = this.data.columns.map((data) => data.title);

        if (content && content.length) {
            for (let i = 0; i < y[content[0]].length; i++) {
                const arr = [];
                for (let j = 0; j < content.length; j++) {
                    arr.push(y[content[j]][i]);
                    // last value always be a year
                    if (j === content.length - 1) {
                        year.push(y[content[j]][i]);
                    }
                }
                temp.push(arr);
            }
        }

        year = [...new Set(year)];

        year.forEach((e, i) => {
            let k = [];
            temp.forEach((data) => {
                if (data.includes(e)) k.push(data);
            });
            data.push(k);

            legend[e] = i;
        });

        data.forEach((el, i) => {
            series.push({
                name: year[i],
                data: el,
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: function (param: any) {
                            return param.data[3];
                        },
                        position: 'top',
                    },
                },
            });
        });

        return {
            title: this.#setTitle(),
            legend: this.#setLegend(legend),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: (value: unknown) => {
                    const name = (value as GenericObject).data;
                    const data = content.map((e, i) => {
                        return `<li>  ${e}: ${name[i]} </li>`;
                    });
                    let showContent = '';
                    data.forEach((r) => {
                        showContent += r;
                    });

                    return `<ul>${showContent}</ul> `;
                },
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                scale: true,
            },
            color: this.#setColors(content.length),
            series: series,
        } as echarts.EChartsOption;
    }

    #sankeyChart() {
        const links: GenericObject[] = [],
            y = this.#createY(),
            keys = Object.keys(y);
        // Assuming all arrays in the question object have the same length
        const arrayLength = y[keys[0]].length;

        for (let i = 0; i < arrayLength; i++) {
            const entry: GenericObject = {};

            entry['source'] = y[keys[0]][i];
            entry['target'] = y[keys[1]][i];
            entry['value'] = parseInt(y[keys[2]][i]);

            links.push(entry);
        }

        const data = Array.from(
            new Set([
                ...links.map((link) => link.source),
                ...links.map((link) => link.target),
            ])
        ).map((name) => ({ name }));

        const legend = {};
        data.forEach((e, i) => {
            legend[e.name] = i;
        });

        return {
            title: this.#setTitle(),
            legend: this.#setLegend(legend),
            color: this.#setColors(arrayLength),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
            },
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency',
                },
                data,
                links,
                right: '10%',
                left: '10%',
            },
        } as echarts.EChartsOption;
    }

    #candleChart() {
        const y = this.#createY(),
            answer = [],
            itemStyle = {
                color: 'red',
                borderColor: 'red',
                color0: 'green',
                borderColor0: 'green',
            };

        let caseInsensitiveObj = new Proxy(y, {
            get: function (target, prop: any) {
                // Convert the property name to lowercase
                const lowercaseProp = prop.toLowerCase();

                // Search for the property case-insensitively
                for (let key in target) {
                    if (key.toLowerCase() === lowercaseProp) {
                        return target[key];
                    }
                }

                // Property not found, return undefined
                return undefined;
            },
        });
        const date = caseInsensitiveObj['date'];

        for (let i = 0; i < caseInsensitiveObj['Open'].length; i++) {
            answer.push([
                parseInt(caseInsensitiveObj['close'][i]),
                parseInt(caseInsensitiveObj['Open'][i]),
                parseInt(caseInsensitiveObj['Low'][i]),
                parseInt(caseInsensitiveObj['High'][i]),
            ]);
        }
        let legend = {};
        date.forEach((e, i) => {
            legend[e] = i;
        });
        return {
            legend: this.#setLegend(legend),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
            },
            title: this.#setTitle(),
            xAxis: {
                data: date,
            },
            yAxis: {},
            series: [
                {
                    type: 'candlestick',
                    data: answer,
                    itemStyle: itemStyle,
                },
            ],
        } as echarts.EChartsOption;
    }

    #calendarChart() {
        const y = this.#createY();

        let caseInsensitiveObj = new Proxy(y, {
            get: function (target, prop: any) {
                // Convert the property name to lowercase
                const lowercaseProp = prop.toLowerCase();

                // Search for the property case-insensitively
                for (let key in target) {
                    if (key.toLowerCase() === lowercaseProp) {
                        return target[key];
                    }
                }

                // Property not found, return undefined
                return undefined;
            },
        });

        const date = caseInsensitiveObj['Date'],
            answer = [],
            keys = Object.keys(y),
            year = new Date(date[0]).getFullYear(),
            arrayLength = date.length;

        date.forEach((element, i) => {
            answer.push([element, caseInsensitiveObj['Value'][i]]);
        });
        return {
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: (value: unknown) => {
                    const name = (value as GenericObject).data;
                    const data = keys.map((e, i) => {
                        return `<li>  ${e}: ${name[i]} </li>`;
                    });
                    let showContent = '';
                    data.forEach((r) => {
                        showContent += r;
                    });

                    return `<ul>${showContent}</ul> `;
                },
            },
            gradientColor: this.#setColors(arrayLength),
            title: this.#setTitle(),
            visualMap: {
                show: false,
                min: 0,
                max: 10000,
            },
            calendar: {
                range: year,
                itemStyle: {
                    color: this.#themeBackground,
                },
                dayLabel: {
                    color: this.#themeText,
                },
                yearLabel: {
                    color: this.#themeText,
                },
                monthLabel: {
                    color: this.#themeText,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: this.#themeText,
                    },
                },
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: answer,
            },
        } as echarts.EChartsOption;
    }
*/

    /*
    #setVisualMap(
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
            ? ({
                  inRange: { color: colors },
                  min: min,
                  max: max,
                  textStyle: { color: this.#themeText },
              } as VisualMapComponentOption)
            : ({
                  inRange: {
                      color: [this.#minColorHeatMap, this.#maxColorHeatMap],
                  },
                  min: min,
                  max: max,
                  textStyle: { color: this.#themeText },
              } as VisualMapComponentOption);
        if (colorRange) {
            opts.visualMap = {
                ...opts.visualMap,
                ...colorRange,
                calculable: true,
                formatter: (value) => {
                    return this.#kulManager.math.format(value as string);
                },
                min: min,
                max: max,
                show: true,
            };
        }
        return opts;
    }

    #setGaussianOptions() {
        let x = this.#createX();
        const y = this.#createY();
        const series: echarts.SeriesOption[] = [];
        const mixedSeries =
            this.types.filter((i) => i != KulChartType.GAUSSIAN).length > 0;
        const needSortDataset =
            this.types.filter((j) => j != KulChartType.GAUSSIAN).length == 1;
        this.#gaussianDatasets = {};
        let i: number = 0;
        const color = this.#setColors(Object.keys(y).length);
        for (const key in y) {
            let type: KulChartType;
            if (this.types[i]) {
                type = this.types[i];
            } else {
                type = KulChartType.GAUSSIAN;
            }
            let values: ValueDisplayedValue[] = null;
            const column = this.data.columns.find(
                (col: KulDataColumn) => col.title === key
            );
            if (type == KulChartType.GAUSSIAN) {
                if (!this.#kulManager.objects.isNumber(column.obj)) {
                    const newDataset = this.#kulManager.data.distinct(
                        this.data,
                        [column.name]
                    );
                    values = this.#kulManager.data.cell.getUnivocalValue(
                        newDataset,
                        column
                    );
                    this.#gaussianDatasets[column.name] = newDataset;
                } else {
                    values = [];
                    for (let index = 0; index < y[key].length; index++) {
                        const element = y[key][index];
                        values.push({ value: element });
                    }
                }
            } else {
                if (needSortDataset) {
                    // if there is only one series other than the Gaussian then I apply the sorting algorithm that arranges the data in "mountain"
                    this.#sortedDataset = this.#kulManager.data.sort(
                        this.data,
                        'normalDistribution',
                        column.name
                    );
                    values = this.#kulManager.data.cell.getValue(
                        this.#sortedDataset,
                        column
                    );
                    x = this.#createX(this.#sortedDataset);
                } else {
                    values = this.#kulManager.data.cell.getValue(
                        this.data,
                        column
                    );
                }
            }
            const justValues: string[] = new Array();

            for (let i = 0; i < values.length; i++) {
                justValues.push(values[i].value);
            }

            this.#addSeries(
                type,
                series,
                justValues,
                key,
                color[i],
                mixedSeries,
                needSortDataset
            );
            i++;
        }
        // "any" because type is mismanaged inside echarts library
        const tipCb: any = (params: any[]) => {
            params.sort((a, b) => a.seriesIndex - b.seriesIndex);
            const wrapper =
                '<div style="display: flex; flex-direction: column">';
            let format = wrapper;
            let count = 0;
            for (let index = 0; index < params.length; index++) {
                const param = params[index];

                if (
                    this.types[param.seriesIndex] == undefined ||
                    this.types[param.seriesIndex] == KulChartType.GAUSSIAN
                ) {
                    const value = param.value[0];
                    const x = `<div style="color: ${param.color};"><span style="margin-right: 5px;"><strong>x:</strong></span><span>${param.value[0]}</span></div>`;
                    if (!index) {
                        format += x;
                    }

                    const column = this.data.columns.find(
                        (col: KulDataColumn) => col.title === param.seriesName
                    ).name;
                    const filters: KulDataFindCellFilters = {
                        columns: [column],
                        range: {
                            max: value + (value / 100) * 50,
                            min: value - (value / 100) * 50,
                        },
                    };
                    const rows = this.#kulManager.data.row.find(
                        this.#gaussianDatasets[column]
                            ? this.#gaussianDatasets[column]
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
                    if (format !== wrapper) format += '</div>';
                } else {
                    const style = `style="color: ${param.color}; margin-right: 5px"`;
                    format += `<div ${style}><strong>${param.name}</strong>: ${param.value}</div>`;
                }
            }
            if (format === wrapper) {
                return null;
            } else {
                return format;
            }
        };
        // list of x-axis, one for the non-Gaussian series which appears on the left and one for the Gaussian series on the right.
        const xAxisTmp = [
            {
                ...this.#setAxisColors(),
                data: x.length > 0 ? x : null,
                type: 'category',
                ...this.xAxis,
            },
            {
                ...this.#setAxisColors(),
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                ...this.xAxis,
            },
        ];
        // list of y-axis, one for the non-Gaussian series which appears at the bottom and one for the Gaussian series at the top.
        const yAxisTmp = [
            {
                ...this.#setAxisColors(),
                type: 'value',
                ...this.yAxis,
            },
            {
                ...this.#setAxisColors(),
                type: 'value',
                ...this.yAxis,
            },
        ];
        // If the series are not mixed, then I eliminate the extra axis
        if (!mixedSeries) {
            xAxisTmp.splice(0, 1);
            yAxisTmp.splice(0, 1);
        }
        return {
            color,
            legend: this.#setLegend(y),
            series: series,
            title: this.#setTitle(),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'axis',
                formatter: tipCb,
            },
            xAxis: xAxisTmp,
            yAxis: yAxisTmp,
        } as echarts.EChartsOption;
    }
*/
    #addSeries(
        type: KulChartType,
        series: echarts.SeriesOption[],
        values: string[],
        key: string,
        color: string,
        mixedSeries: boolean = false,
        needSortDataset: boolean = false
    ) {
        switch (type) {
            case 'bar':
            case 'hbar':
                series.push({
                    data: values,
                    name: key,
                    type: 'bar',
                    barWidth: needSortDataset ? '100%' : undefined,
                } as BarSeriesOption);
                break;
            case 'gaussian':
                series.push({
                    data: this.#kulManager.math.normalDistribution(values),
                    name: key,
                    showSymbol: false,
                    smooth: true,
                    type: 'line',
                    xAxisIndex: mixedSeries ? 1 : 0,
                    yAxisIndex: mixedSeries ? 1 : 0,
                } as LineSeriesOption);
                break;
            case 'scatter':
                series.push({
                    data: values,
                    name: key,
                    type: 'scatter',
                } as ScatterSeriesOption);
                break;
            case 'area':
            case 'line':
            default:
                series.push({
                    data: values,
                    name: key,
                    type: 'line',
                    areaStyle:
                        type === 'area'
                            ? {
                                  color: new graphic.LinearGradient(
                                      0,
                                      0,
                                      0,
                                      0.25,
                                      [
                                          {
                                              offset: 0,
                                              color: `rgba(${
                                                  this.#kulManager.theme.colorCheck(
                                                      color
                                                  ).rgbValues
                                              }, 0.375)`,
                                          },
                                      ]
                                  ),
                              }
                            : undefined,
                } as LineSeriesOption);
                break;
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready', {});
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#updateTextColor();
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        if (this.kulData && this.kulData.columns && this.kulData.nodes) {
            this.#initChart();
        } else {
            this.#kulManager.debug.logMessage(
                this,
                'Not enough data. (' + JSON.stringify(this.kulData) + ')',
                'warning'
            );
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        const style: GenericMap = {
            '--kul_chart_height': this.kulSizeY ? this.kulSizeY : '100%',
            '--kul_chart_width': this.kulSizeX ? this.kulSizeX : '100%',
        };

        return (
            <Host style={style}>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div
                    id={KUL_WRAPPER_ID}
                    ref={(chartContainer) =>
                        (this.#chartContainer = chartContainer)
                    }
                ></div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}

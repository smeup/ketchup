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
import { GeoJSON, FeatureCollection } from 'geojson';
import { VisualMapComponentOption } from 'echarts';
import {
    KupEchartClickEventPayload,
    KupEchartLegendPlacement,
    KupEchartMaps,
    KupEchartProps,
    KupEchartTitle,
    KupEchartTypes,
    KupEchartXAxis,
    KupEchartYAxis,
} from './kup-echart-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { getColumnByName } from '../../utils/cell-utils';
import {
    KupDataColumn,
    KupDataDataset,
    KupDataFindCellFilters,
    KupDataNewColumnTypes,
    KupDataRow,
    KupDataRowCells,
} from '../../managers/kup-data/kup-data-declarations';
import { ValueDisplayedValue } from '../../utils/filters/filters-declarations';

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
    @Prop({ mutable: true }) axis: string = '';
    /**
     * Overrides theme's colors.
     * @default []
     */
    @Prop() colors: string[] = [];
    /**
     * When true, performs checks in order to properly initialize props which could be missing (i.e.: axis).
     * For performances purposes, this prop will run only once when the component is initially created.
     * @default false
     */
    @Prop() consistencyCheck: boolean = false;
    /**
     * Title of the graph.
     * @default null
     */
    @Prop() chartTitle: KupEchartTitle = null;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The actual data of the chart.
     * @default null
     */
    @Prop() data: KupDataDataset = null;
    /**
     * Sets the position of the legend. Supported values: bottom, left, right, top, hidden. Keep in mind that legend types are tied to chart types, some combinations might not work.
     * @default KupEchartLegendPlacement.RIGHT
     */
    @Prop() legend: KupEchartLegendPlacement = KupEchartLegendPlacement.RIGHT;
    /**
     * Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america", "italy" and "world". It's possible to supply a custom JSON too.
     * @default null
     */
    @Prop() map: KupEchartMaps | string | GeoJSON = null;
    /**
     * The data series to be displayed. They must be of the same type.
     * @default []
     */
    @Prop() series: string[] = [];
    /**
     * Displays the numerical values.
     * @default false
     */
    @Prop() showMarks = false;
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
     * Displays the data columns of an object on top of each other.
     * @default false
     */
    @Prop() stacked = false;
    /**
     * The type of the chart. Supported formats: Bar, Gaussian, Line, Pie, Map and Scatter.
     * @default [KupEchartTypes.LINE]
     */
    @Prop() types: KupEchartTypes[] = [KupEchartTypes.LINE];
    /**
     * Customization options for the x Axis.
     * @default null
     */
    @Prop() xAxis: KupEchartXAxis = null;
    /**
     * Customization options for the y Axis.
     * @default null
     */
    @Prop() yAxis: KupEchartYAxis = null;
    /**
     * Minimum for the y Axis.
     * @default null
     */
    @Prop() axisYMin: string = null;
    /**
     * Maximum for the y Axis.
     * @default null
     */
    @Prop() axisYMax: string = null;
    /**
     * Multiple axes for y
     * @default null
     */
    @Prop() multipleYAxes: string = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #chartContainer?: HTMLDivElement;
    #chartEl: echarts.ECharts;
    #gaussianDatasets: { [index: string]: KupDataDataset };
    #kupManager: KupManager = kupManagerInstance();
    #mapObj: GenericObject = {};
    #resizeTimeout: number;
    #sortedDataset: KupDataDataset = null;
    #themeBorder: string = null;
    #themeBackground: string = null;
    #minColorHeatMap: string = null;
    #maxColorHeatMap: string = null;
    #themeFont: string = null;
    #themeText: string = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-echart-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEchartClick: EventEmitter<KupEchartClickEventPayload>;

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
        window.clearTimeout(this.#resizeTimeout);
        this.#resizeTimeout = window.setTimeout(() => {
            if (this.#chartEl && this.#chartEl.getZr()) {
                const xMin = this.rootElement.clientWidth - 5;
                const xMax = this.rootElement.clientWidth + 5;
                const yMin = this.rootElement.clientHeight - 5;
                const yMax = this.rootElement.clientHeight + 5;
                const x = this.#chartEl.getWidth();
                const y = this.#chartEl.getHeight();
                if (x < xMin || x > xMax || y < yMin || y > yMax) {
                    this.#chartEl.resize();
                }
            }
        }, 300);
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

    #initChart() {
        if (this.#chartEl) {
            echarts.dispose(this.#chartContainer);
        }
        if (this.types && this.types.length > 0) {
            this.#chartEl = echarts.init(this.#chartContainer);
            this.#createChart();
        } else {
            this.#kupManager.debug.logMessage(
                this,
                "Can't intialize chart without specifiying at least 1 type.",
                KupDebugCategory.WARNING
            );
        }
    }

    async #createChart() {
        this.#sortedDataset = null;
        let options: echarts.EChartsOption = null;
        const firstType = this.types[0];
        switch (firstType) {
            case KupEchartTypes.GAUSSIAN:
                options = this.#setGaussianOptions();
                break;
            case KupEchartTypes.MAP:
                let stringifiedMap = '';
                if (this.map) {
                    if ((this.map as FeatureCollection).features) {
                        stringifiedMap = JSON.stringify(this.map);
                    } else if (
                        Object.values(KupEchartMaps).includes(
                            this.map as KupEchartMaps
                        )
                    ) {
                        stringifiedMap = await (
                            await fetch(
                                getAssetPath(`./assets/maps/${this.map}.json`)
                            )
                        ).text();
                    } else {
                        stringifiedMap = this.map as string;
                    }
                }
                if (!stringifiedMap) {
                    this.#kupManager.debug.logMessage(
                        this,
                        "Couldn't fetch map JSON.",
                        KupDebugCategory.WARNING
                    );
                    return;
                }
                echarts.registerMap(
                    this.rootElement.id ? this.rootElement.id : '',
                    stringifiedMap
                );
                options = this.#setMapOptions(stringifiedMap);
                break;
            case KupEchartTypes.PIE:
                options = this.#setPieOptions();
                break;
            case KupEchartTypes.FUNNEL:
                options = this.#funnelChart();
                break;
            case KupEchartTypes.RADAR:
                options = this.#radarChart();
                break;
            case KupEchartTypes.BUBBLE:
                options = this.#bubbleChart();
                break;
            case KupEchartTypes.SANKEY:
                options = this.#sankeyChart();
                break;
            case KupEchartTypes.CANDLE:
                options = this.#candleChart();
                break;
            case KupEchartTypes.CALENDAR:
                options = this.#calendarChart();
                break;
            default:
                options = this.#setOptions();
                break;
        }
        this.#chartEl.setOption(options, true);
        this.#chartEl.on('click', (e) => {
            const column = this.#kupManager.data.column.find(this.data, {
                title: e.seriesName,
            })[0];
            let row: KupDataRow = null;
            if (e.seriesType === 'map') {
                row = this.#kupManager.data.row.find(this.data, {
                    value: this.#mapObj[e.name],
                })[0];
            } else if (this.#sortedDataset && e.seriesType === 'bar') {
                row = this.#sortedDataset.rows[e.dataIndex];
            } else if (!Array.isArray(e.data)) {
                row = this.data.rows[e.dataIndex];
            }
            this.kupEchartClick.emit({
                comp: this,
                id: this.rootElement.id,
                column: column,
                row: row,
                x: Array.isArray(e.data as number[]) ? e.data[0] : e.name,
                y: Array.isArray(e.data as number[]) ? e.data[1] : e.value,
            });
        });
    }

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
                    }</strong> (${this.#kupManager.math.format(percentage)}%)`;
                },
            },
            legend: this.#setLegend(cellsSum),
            series: [
                {
                    name: this.#kupManager.data.column.find(this.data, {
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
        const castArrayToNumber = (strEl: unknown) =>
            typeof strEl === 'string'
                ? Number(strEl.replace(',', ''))
                : Number(strEl);
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
                value: y[key].map(castArrayToNumber),
            });
            for (const values in y[key]) {
                data[values].value.push(castArrayToNumber(y[key][values]));
            }
        }
        for (let index = 0; index < data.length; index++) {
            const dataEl = data[index];
            const key = dataEl.name;
            const foundEl = transposedIndicator.find((d) => d.name === key);
            /* Handle the case where array contains strings instead of numbers */
            const castedValueArray = dataEl.value.map(castArrayToNumber);
            const max = Math.floor(Math.max(...castedValueArray) * 1.05);
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
                    name: this.#kupManager.data.column.find(this.data, {
                        name: this.axis,
                    })[0].title,
                    type: 'radar',
                    data: transposedData,
                },
            ],
        } as echarts.EChartsOption;
    }

    #bubbleChart() {
        const x = this.#createX(),
            y = this.#createY(),
            data = [],
            temp = [],
            legend = {},
            series = [];
        let groups = [];

        // Handle cases where data.columns don't include one col for size
        const defaultPointSize = '1000000000';
        let usingDefaultSize = false;

        const content = this.data.columns
            .map((data) => data.name)
            .filter((name) => name != this.axis);

        // Populate temp array with data points
        if (content.length > 0) {
            for (let i = 0; i < y[content[0]].length; i++) {
                const rowData: string[] = [];
                for (let j = 0; j < content.length; j++) {
                    rowData.push(y[content[j]][i]);

                    if (j === content.length - 2 && x[i]) {
                        usingDefaultSize = true;
                        rowData.push(defaultPointSize); // Default size
                        rowData.push(x[i]); // Label
                    }

                    if (j === content.length - 1) {
                        groups.push(y[content[j]][i]); // Collect groups
                    }
                }
                temp.push(rowData);
            }
        }

        groups = [...new Set(groups)];

        groups.forEach((e, i) => {
            let k = [];
            temp.forEach((data) => {
                if (data.includes(e) && data.lastIndexOf(e) === data.length - 1)
                    k.push(data);
            });
            data.push(k);

            legend[e] = i;
        });

        // Organize data and legend by group
        groups.forEach((groupValue, index) => {
            const filteredData = temp.filter(
                (row) =>
                    row.includes(groupValue) &&
                    row.lastIndexOf(groupValue) === row.length - 1
            );
            data.push(filteredData);
            legend[groupValue] = index;
        });

        data.forEach((dataPoints, index) => {
            series.push({
                name: groups[index],
                data: dataPoints,
                type: 'scatter',
                symbolSize: (point: any) => Math.sqrt(point[2]) / 500,
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: (param: any) => param.data[3],
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
                    const rowData = (value as GenericObject).data;

                    //Generates tooltip content hiding size's label if usingDefaultSize
                    const tooltipContent = content
                        .map((key, index) => {
                            if (usingDefaultSize && index === 2) return '';
                            const columnTitle = this.data.columns.find(
                                (col) => col.name === key
                            ).title;
                            return `<li>${columnTitle}: ${rowData[index]}</li>`;
                        })
                        .join('');

                    // Add label
                    const label = `<b>${rowData[rowData.length - 2]}</b>`;

                    return `<ul>${label}${tooltipContent}</ul>`;
                },
            },
            xAxis: {
                splitLine: { lineStyle: { type: 'dashed' } },
            },
            yAxis: {
                splitLine: { lineStyle: { type: 'dashed' } },
                scale: true,
            },
            color: this.#setColors(content.length),
            series: series,
        } as echarts.EChartsOption;
    }

    #sankeyChart() {
        const links: GenericObject[] = [],
            x = this.#createX(),
            y = this.#createYWithColumnTitle(),
            // do not use Object.keys(y) because it does not preserve order and it's important to establish tuple <SOURCE, TARGET, WEIGHT> of Sankey!
            yKeys = [
                this.data.columns[0].title,
                this.data.columns[1].title,
                this.data.columns[2].title,
            ];
        // Assuming all arrays in the question object have the same length
        const arrayLength = y[yKeys[0]].length;

        for (let i = 0; i < arrayLength; i++) {
            const entry: GenericObject = {};

            entry['source'] = y[yKeys[0]][i];
            entry['target'] = y[yKeys[1]][i];
            entry['value'] = parseInt(y[yKeys[2]][i]);

            links.push(entry);
        }

        const data = Array.from(
            new Set([
                ...links.map((link) => link.source),
                ...links.map((link) => link.target),
            ])
        )
            .filter((elem) => !!elem)
            .map((name) => ({ name }));

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
        const x = this.#createX();
        const y = this.#createYWithColumnTitle(),
            answer = [],
            itemStyle = {
                color: 'green',
                borderColor: 'green',
                color0: 'red',
                borderColor0: 'red',
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

        for (let i = 0; i < caseInsensitiveObj['open'].length; i++) {
            answer.push([
                parseInt(caseInsensitiveObj['close'][i]),
                parseInt(caseInsensitiveObj['open'][i]),
                parseInt(caseInsensitiveObj['low'][i]),
                parseInt(caseInsensitiveObj['high'][i]),
            ]);
        }
        let legend = {};
        x.forEach((e, i) => {
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
                data: x,
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
        const y = this.#createYWithColumnTitle();

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
        const date =
                caseInsensitiveObj['Date'] ?? caseInsensitiveObj['Data'] ?? [],
            value =
                caseInsensitiveObj['Value'] ??
                caseInsensitiveObj['Valore'] ??
                [],
            answer = [],
            keys = Object.keys(y ?? {}),
            year = date?.[0]
                ? new Date(date?.[0]).getFullYear()
                : new Date().getFullYear(),
            arrayLength = date?.length;

        if (!date.length && !value.length) {
            console.warn(
                'Warning: Invalid data structure detected for the calendar. Please check the incoming data.'
            );
        }
        date?.forEach((element, i) => {
            const castedValue =
                typeof value?.[i] === 'string'
                    ? Number(value?.[i].replace(',', ''))
                    : Number(value?.[i]);
            answer.push([element, castedValue]);
        });
        return {
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: (value: unknown) => {
                    const name = (value as GenericObject).data || [];
                    const data = keys.map((e, i) => {
                        return `<li>  ${e}: ${name[i] ?? '-'} </li>`;
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
    #createX(dataset: KupDataDataset = null) {
        const x: string[] = [];
        if (!dataset) dataset = this.data;
        if (!this.axis) {
            for (let i = 0; i < dataset.rows.length; i++) {
                const cells = dataset.rows[i].cells;
                const treatedCells: KupDataRowCells = {};
                for (const key in cells) {
                    const cell = cells[key];
                    const title = getColumnByName(dataset.columns, key).title;
                    treatedCells[title] = cell;
                }
                if (treatedCells[0]) {
                    x.push(treatedCells[0].value);
                }
            }
        } else {
            for (let i = 0; i < dataset.rows.length; i++) {
                const cells = dataset.rows[i].cells;
                const treatedCells: KupDataRowCells = {};
                const title = getColumnByName(dataset.columns, this.axis).title;
                treatedCells[title] = cells[this.axis];
                x.push(treatedCells[title].value);
            }
        }
        return x;
    }

    #createY() {
        const y = {};
        if (this.series && this.series.length > 0) {
            for (const row of this.data.rows) {
                for (const key of Object.keys(row.cells)) {
                    if (key != this.axis) {
                        const cell = row.cells[key];
                        const value = cell.value;
                        const column = getColumnByName(this.data.columns, key);
                        if (column) {
                            const name = column.name;
                            if (!y[name]) {
                                y[name] = [];
                            }
                            y[name].push(value);
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
                        const column = getColumnByName(this.data.columns, key);
                        if (column) {
                            const name = column.name;
                            if (!y[name]) {
                                y[name] = [];
                            }
                            y[name].push(value);
                        }
                    }
                }
            }
        }
        return y;
    }

    #createYWithColumnTitle() {
        /* Use column.title instead of column.name in some graph forms */
        const y = {};

        for (const row of this.data.rows) {
            for (const key of Object.keys(row.cells)) {
                const cell = row.cells[key];
                const value = cell.value;
                const column = getColumnByName(this.data.columns, key);
                if (column) {
                    const title = column.title;
                    if (!y[title]) {
                        y[title] = [];
                    }
                    y[title].push(value);
                }
            }
        }

        return y;
    }

    #createYForPie() {
        const y = {};
        const column = getColumnByName(this.data.columns, this.axis);
        if (!column) {
            return y;
        }
        for (const row of this.data.rows) {
            const title = row.cells[this.axis]?.value ?? '[not found]';
            for (const key of Object.keys(row.cells)) {
                if (
                    !this.series ||
                    this.series.length == 0 ||
                    this.series.includes(key)
                ) {
                    if (!y[title]) {
                        y[title] = [];
                    }
                    y[title].push(row.cells[key]?.value ?? '');
                }
            }
        }
        return y;
    }

    #setAxisColors() {
        return {
            axisLabel: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
            axisLine: { lineStyle: { color: this.#themeText ?? '' } },
            axisTick: { lineStyle: { color: this.#themeBorder ?? '' } },
            splitLine: { lineStyle: { color: this.#themeBorder ?? '' } },
        } as echarts.XAXisComponentOption | echarts.YAXisComponentOption;
    }

    #setLegend(y: {}) {
        if (this.legend === KupEchartLegendPlacement.HIDDEN) {
            return null;
        }
        const data = Object.keys(y).flatMap((key) => {
            if (this.series.includes(key)) {
                const columnTitle = this.data.columns.find(
                    (col) => col.name === key
                )?.title;
                return columnTitle ? [columnTitle] : [];
            } else {
                return [key];
            }
        });

        let padding: number[] = [40, 0, 0, 0]; // Default padding
        let orientation: 'horizontal' | 'vertical' = 'horizontal'; // Default orient
        const currentContainerWidth = this.rootElement.clientWidth;
        const minContainerWidth = 400;

        switch (this.legend) {
            case KupEchartLegendPlacement.TOP:
                padding = [20, 0, 40, 0];
                break;
            case KupEchartLegendPlacement.BOTTOM:
                padding = [40, 0, 20, 0];
                break;
            case KupEchartLegendPlacement.LEFT:
                padding = [40, 40, 5, 0];
                orientation = 'vertical';
                break;
            case KupEchartLegendPlacement.RIGHT:
                padding = [40, 0, 5, 40];
                orientation = 'vertical';
                break;
        }

        const legendConfig = {
            data: data,
            [this.legend]: 0,
            textStyle: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
            orient: orientation,
            padding: padding,
            type: 'scroll',
            pageButtonItemGap: 3,
            pageButtonPosition: 'end',
        } as echarts.LegendComponentOption;

        // Move legend when container is too small
        if (currentContainerWidth < minContainerWidth) {
            return {
                ...legendConfig,
                bottom: 0,
                orient: 'horizontal',
                padding: [50, 0, 0, 0],
            };
        }

        return legendConfig;
    }

    #setTitle() {
        return {
            text: this.chartTitle ? this.chartTitle.value : undefined,
            [this.chartTitle && this.chartTitle.position
                ? this.chartTitle.position
                : 'left']: 0,
            textStyle: {
                width: this.rootElement.clientWidth - 5,
                overflow: 'break',
                color:
                    this.chartTitle && this.chartTitle.color
                        ? this.#kupManager.theme.colorCheck(
                              this.chartTitle.color
                          ).rgbColor
                        : 'black',
                fontFamily: this.#themeFont,
                fontSize:
                    this.chartTitle && this.chartTitle.size
                        ? this.chartTitle.size
                        : 16,
            },
        } as echarts.TitleComponentOption;
    }

    #setTooltip() {
        return {
            appendTo: 'body',
            backgroundColor: this.#themeBackground,
            textStyle: {
                color: this.#themeText,
                fontFamily: this.#themeFont,
            },
        } as echarts.TooltipComponentOption;
    }

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
                    return this.#kupManager.math.format(value as string);
                },
                min: min,
                max: max,
                show: true,
            };
        }
        return opts;
    }

    #setMapOptions(map: string) {
        const computedColors = this.#setColors(3);
        const mapJson: FeatureCollection = JSON.parse(map);
        const isoA2: string[] = [];
        const names: string[] = [];
        for (let index = 0; index < mapJson.features.length; index++) {
            const feature = mapJson.features[index];
            isoA2.push(feature.properties.iso_a2);
            names.push(feature.properties.name);
        }
        const y = {};
        let objKey: string;
        if (this.axis) {
            for (const row of this.data.rows) {
                objKey = row.cells[this.axis].value.trim();
                if (!y[objKey]) {
                    y[objKey] = [];
                }
                for (const key of Object.keys(row.cells)) {
                    const cell = row.cells[key];
                    const value = cell.value.trim();
                    if (!this.axis.includes(key)) {
                        if (
                            this.series &&
                            this.series.length > 0 &&
                            !this.series.includes(key)
                        ) {
                            continue;
                        }
                        y[objKey].push(value);
                    }
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
                const hexColor =
                    this.#kupManager.theme.colorCheck(value).hexColor;
                if (hexColor) {
                    color = hexColor;
                } else {
                    n = this.#kupManager.math.numberify(value);
                    if (n > max) {
                        max = n;
                    }
                    if (n < min) {
                        min = n;
                    }
                }
            }
            const keyIsName = names.includes(key);
            if (n !== null) {
                data.push({
                    name: keyIsName ? key : names[isoA2.indexOf(key)],
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
                    name: keyIsName ? key : names[isoA2.indexOf(key)],
                });
            }
            this.#mapObj[
                keyIsName
                    ? names[names.indexOf(key)]
                    : names[isoA2.indexOf(key)]
            ] = key;
        }
        const tipCb = (params: echarts.DefaultLabelFormatterCallbackParams) => {
            const value = params.value;
            if (
                isNaN(value as unknown as number) ||
                value === null ||
                value === undefined
            ) {
                return null;
            } else {
                return (
                    "<div style='min-width: 60px; text-align: center'>" +
                    this.#kupManager.math.format(value as string) +
                    '</div>'
                );
            }
        };
        let axisColumn = this.#kupManager.data.column.find(this.data, {
            name: this.axis,
        });
        let serieTitle =
            axisColumn && axisColumn.length > 0
                ? axisColumn[0].title
                : 'No title';
        const echartOption: echarts.EChartsOption = {
            emphasis: {
                label: {
                    show: true,
                },
            },
            title: this.#setTitle(),
            tooltip: {
                ...this.#setTooltip(),
                formatter: tipCb,
                showDelay: 0,
                trigger: 'item',
                transitionDuration: 0.2,
            },
            series: [
                {
                    data: data,
                    emphasis: {
                        itemStyle: {
                            areaColor: null,
                            borderWidth: 1.5,
                        },
                        label: {
                            color: this.#themeText,
                            fontFamily: this.#themeFont,
                            show: true,
                        },
                    },
                    itemStyle: {
                        areaColor: this.#themeBackground,
                        borderColor: this.#themeText,
                    },
                    label: {
                        backgroundColor: this.#themeBackground,
                        borderColor: this.#themeBorder,
                        borderRadius: 4,
                        borderWidth: 1,
                        color: this.#themeText,
                        fontFamily: this.#themeFont,
                        padding: 4,
                    },
                    map: this.rootElement.id ? this.rootElement.id : '',
                    name: serieTitle,
                    roam: true,
                    select: {
                        itemStyle: {
                            areaColor: computedColors[0],
                        },
                        label: {
                            color: this.#themeText,
                            fontFamily: this.#themeFont,
                            show: true,
                        },
                    },
                    type: 'map',
                } as echarts.MapSeriesOption,
            ],
            ...this.#setVisualMap(max, min, colors, hasNumericValues),
        };

        return echartOption;
    }

    #setPieOptions() {
        const y = this.#createYForPie();
        const data = [];
        for (let key in y) {
            let sum: number = 0;
            for (let j = 0; j < y[key].length; j++) {
                sum = sum + (parseFloat(y[key][j]) || 0);
            }
            if (sum !== 0) {
                data.push({
                    name: key,
                    value: sum,
                });
            }
        }
        return {
            color: this.#setColors(Object.keys(y).length),
            legend: this.#setLegend(y),
            title: this.#setTitle(),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
                confine: false,
                appendTo: 'body',
                position: (point, _params, dom, _rect, size) => {
                    const centerX = size.viewSize[0] / 2;
                    const centerY = size.viewSize[1] / 2;
                    const dx = point[0] - centerX;
                    const dy = point[1] - centerY;
                    const tooltipWidth = (dom as HTMLDivElement).offsetWidth;
                    const tooltipHeight = (dom as HTMLDivElement).offsetHeight;

                    const x =
                        dx >= 0 ? point[0] + 15 : point[0] - tooltipWidth - 15;

                    const y =
                        dy < 0 ? point[1] - tooltipHeight - 10 : point[1] + 10;

                    return [x, y];
                },
            },
            series: [
                {
                    name: this.#kupManager.data.column.find(this.data, {
                        name: this.axis,
                    })[0].title,
                    type: 'pie',
                    data: data,
                    radius: '60%',
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: (value) => {
                            return `${value.percent}%`;
                        },
                    },
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

    #setGaussianOptions() {
        let x = this.#createX();
        const y = this.#createY();
        const series: echarts.SeriesOption[] = [];
        const mixedSeries =
            this.types.filter((i) => i != KupEchartTypes.GAUSSIAN).length > 0;
        const needSortDataset =
            this.types.filter((j) => j != KupEchartTypes.GAUSSIAN).length == 1;
        this.#gaussianDatasets = {};
        let i: number = 0;
        const color = this.#setColors(Object.keys(y).length);
        for (const key in y) {
            let type: KupEchartTypes;
            if (this.types[i]) {
                type = this.types[i];
            } else {
                type = KupEchartTypes.GAUSSIAN;
            }
            let values: ValueDisplayedValue[] = null;
            const column = this.data.columns.find(
                (col: KupDataColumn) => col.name === key
            );
            if (type == KupEchartTypes.GAUSSIAN) {
                if (!this.#kupManager.objects.isNumber(column.obj)) {
                    const newDataset = this.#kupManager.data.distinct(
                        this.data,
                        [column.name]
                    );
                    values = this.#kupManager.data.cell.getUnivocalValue(
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
                    this.#sortedDataset = this.#kupManager.data.sort(
                        this.data,
                        'normalDistribution',
                        column.name
                    );
                    values = this.#kupManager.data.cell.getValue(
                        this.#sortedDataset,
                        column
                    );
                    x = this.#createX(this.#sortedDataset);
                } else {
                    values = this.#kupManager.data.cell.getValue(
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
                    this.types[param.seriesIndex] == KupEchartTypes.GAUSSIAN
                ) {
                    const value = param.value[0];
                    const x = `<div style="color: ${param.color};"><span style="margin-right: 5px;"><strong>x:</strong></span><span>${param.value[0]}</span></div>`;
                    if (!index) {
                        format += x;
                    }

                    const column = this.data.columns.find(
                        (col: KupDataColumn) => col.name === param.seriesName
                    ).name;
                    const filters: KupDataFindCellFilters = {
                        columns: [column],
                        range: {
                            max: value + (value / 100) * 50,
                            min: value - (value / 100) * 50,
                        },
                    };
                    const rows = this.#kupManager.data.row.find(
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

    #addSeries(
        type: KupEchartTypes,
        series: echarts.SeriesOption[],
        values: string[],
        key: string,
        color: string,
        mixedSeries: boolean = false,
        needSortDataset: boolean = false
    ) {
        switch (type) {
            case KupEchartTypes.GAUSSIAN:
                series.push({
                    data: this.#kupManager.math.normalDistribution(values),
                    label: {
                        show: this.showMarks,
                    },
                    name: key,
                    showSymbol: false,
                    smooth: true,
                    type: 'line',
                    xAxisIndex: mixedSeries ? 1 : 0,
                    yAxisIndex: mixedSeries ? 1 : 0,
                } as echarts.LineSeriesOption);
                break;
            case KupEchartTypes.BAR:
            case KupEchartTypes.HBAR:
                series.push({
                    data: values,
                    label: {
                        show: this.showMarks,
                    },
                    name: key,
                    stack: this.stacked ? 'total' : undefined,
                    type: 'bar',
                    barWidth: needSortDataset ? '100%' : undefined,
                } as echarts.BarSeriesOption);
                break;
            case KupEchartTypes.SCATTER:
                series.push({
                    data: values,
                    label: {
                        show: this.showMarks,
                    },
                    name: key,
                    type: 'scatter',
                } as echarts.ScatterSeriesOption);
                break;
            case KupEchartTypes.AREA:
            case KupEchartTypes.LINE:
            default:
                series.push({
                    data: values.map((value) =>
                        this.#kupManager.math.numberifySafe(value)
                    ),
                    label: {
                        show: this.showMarks,
                    },
                    name: key,
                    type: 'line',
                    areaStyle:
                        type === KupEchartTypes.AREA
                            ? {
                                  color: new echarts.graphic.LinearGradient(
                                      0,
                                      0,
                                      0,
                                      0.25,
                                      [
                                          {
                                              offset: 0,
                                              color: `rgba(${
                                                  this.#kupManager.theme.colorCheck(
                                                      color
                                                  ).rgbValues
                                              }, 0.375)`,
                                          },
                                      ]
                                  ),
                              }
                            : undefined,
                } as echarts.LineSeriesOption);
                break;
        }
    }

    #setOptions() {
        const x = this.#createX();
        const y = this.#createY();
        let i: number = 0;
        const series: echarts.SeriesOption[] = [];
        const color = this.#setColors(Object.keys(y).length);
        const multipleYAxes = this.multipleYAxes?.replace(/Y/g, '').split('|');
        for (const key in y) {
            if (this.series.includes(key)) {
                const values: string[] = y[key];
                let type: KupEchartTypes;
                if (this.types[i]) {
                    type = this.types[i];
                } else {
                    type = KupEchartTypes.LINE;
                }
                this.#addSeries(type, series, values, key, color[i]);
                if (this.multipleYAxes) {
                    (series[i] as echarts.LineSeriesOption).yAxisIndex =
                        +multipleYAxes[i];
                }
                i++;
            }
        }
        const isHorizontal = !!(KupEchartTypes.HBAR === this.types[0]);

        const axisLabelFormatter = (value) => {
            if (this.#kupManager.dates.isIsoDate(value)) {
                return this.#kupManager.dates.format(value);
            }

            const numberValue =
                typeof value === 'string' ? Number(value) : value;

            // Formats number to browser locale
            if (typeof numberValue === 'number' && !isNaN(numberValue)) {
                return new Intl.NumberFormat(navigator.language).format(
                    numberValue
                );
            }

            return value;
        };

        /* 
        col.name is used in operations for unicity,
        but name in series object should match with values in legend
        */
        const renamedSeries = series.map((s) => ({
            ...s,
            name: this.data.columns.find((col) => col.name === s.name).title,
        }));
        const yAxis =
            multipleYAxes?.length === renamedSeries.length
                ? Array.from({ length: renamedSeries.length }, (_el, i) => ({
                      ...this.#setAxisColors(),
                      data: isHorizontal ? x : undefined,
                      type: isHorizontal ? 'category' : 'value',
                      axisLabel: {
                          formatter: axisLabelFormatter,
                      },
                      min: this.axisYMin,
                      max: this.axisYMax,
                      offset: Math.floor(i / 2) * 60,
                      ...this.yAxis,
                  }))
                : {
                      ...this.#setAxisColors(),
                      data: isHorizontal ? x : undefined,
                      type: isHorizontal ? 'category' : 'value',
                      axisLabel: {
                          formatter: axisLabelFormatter,
                      },
                      min: this.axisYMin,
                      max: this.axisYMax,
                      ...this.yAxis,
                  };

        return {
            color,
            legend: this.#setLegend(y),
            series: renamedSeries,
            title: this.#setTitle(),
            tooltip: {
                ...this.#setTooltip(),
                trigger: 'item',
                formatter: (params: GenericObject) => {
                    return `<b>${params.name}</b><br/>${params.seriesName}: <b>${params.value}</b>`;
                },
            },
            xAxis: {
                ...this.#setAxisColors(),
                data: isHorizontal ? undefined : x,
                type: isHorizontal ? 'value' : 'category',
                axisLabel: {
                    formatter: axisLabelFormatter,
                },
                ...this.xAxis,
            },
            yAxis,
            grid: { show: true, containLabel: true },
        } as echarts.EChartsOption;
    }

    #setColors(requiredNumber: number) {
        let colorArray: string[] =
            this.colors && this.colors.length > 0 ? [...this.colors] : [];
        let key: string = '--kup-chart-color-';
        for (
            let index = 1;
            this.#kupManager.theme.cssVars[key + index];
            index++
        ) {
            colorArray.push(this.#kupManager.theme.cssVars[key + index]);
        }
        if (this.colors && this.colors[0]) {
            this.#maxColorHeatMap = this.colors[0];
        } else {
            const colorCheckDark = this.#kupManager.theme.colorCheck(
                colorArray[0]
            );
            this.#maxColorHeatMap = `hsl(${colorCheckDark.hue}, ${
                colorCheckDark.saturation
            },  ${(parseFloat(colorCheckDark.lightness) - 30).toString()}%)`;
        }
        if (this.colors && this.colors[1]) {
            this.#minColorHeatMap = this.colors[1];
        } else {
            const colorCheckBright = this.#kupManager.theme.colorCheck(
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
            colorArray.push(this.#kupManager.theme.randomColor(128));
        }

        return colorArray;
    }

    #checks() {
        const gaussianCount = this.types.filter(
            (type) => type === KupEchartTypes.GAUSSIAN
        ).length;
        const nonGaussianCount = this.types.filter(
            (type) => type === KupEchartTypes.GAUSSIAN
        ).length;
        // Automatically sets axis when there is no Gaussian chart and when axis is invalid.
        // The first visible and non-numerical column will be used as axis.
        if (
            !gaussianCount &&
            (!this.axis ||
                !this.#kupManager.data.column.find(this.data, {
                    name: this.axis,
                }).length)
        ) {
            for (let index = 0; index < this.data.columns.length; index++) {
                const column = this.data.columns[index];
                if (
                    column.visible &&
                    !this.#kupManager.objects.isNumber(column.obj)
                ) {
                    this.axis = column.name;
                    this.#kupManager.debug.logMessage(
                        this,
                        'Axis overridden. (' + this.axis + ')',
                        KupDebugCategory.WARNING
                    );
                    break;
                }
            }
        }
        // Automatically copies columns when there are multiple types and no specified series.
        // Also 1 types must be GAUSSIAN.
        if (
            (!this.series || !this.series.length) &&
            gaussianCount === 1 &&
            nonGaussianCount > 0 &&
            this.data.columns &&
            ((this.data.columns.length === 1 && !this.axis) ||
                (this.data.columns.length === 2 && this.axis))
        ) {
            const series = !this.axis
                ? this.data.columns[0]
                : this.data.columns.filter((col) => col.name !== this.axis)[0];
            for (let index = 0; index < this.types.length; index++) {
                const type = this.types[index];
                if (type !== KupEchartTypes.GAUSSIAN) {
                    this.#kupManager.data.column.new(
                        this.data,
                        KupDataNewColumnTypes.DUPLICATE,
                        {
                            columns: [series.name],
                            newColumn: {
                                ...series,
                                name: series.name + '_' + index,
                                title: series.title + ` (${type})`,
                            },
                        }
                    );
                }
            }
        }
        // Checks for multiple series with the same column name, creating duplicate columns in case they are present.
        // When there are more types than series, new series will be automatically added to match chart types.
        if (
            this.series &&
            this.types &&
            this.series.length &&
            this.types.length &&
            this.data.columns
        ) {
            if (this.types.length > this.series.length) {
                const lastSerie = this.series[this.series.length - 1];
                for (
                    let index = this.series.length;
                    index < this.types.length;
                    index++
                ) {
                    this.series.push(lastSerie);
                }
            }
            const occurrences: { [index: string]: number[] } = {};
            for (let index = 0; index < this.series.length; index++) {
                const serie = this.series[index];
                if (Object.keys(occurrences).includes(serie)) {
                    occurrences[serie].push(index);
                } else {
                    occurrences[serie] = [index];
                }
            }
            for (const key in occurrences) {
                const indexes = occurrences[key];
                for (
                    let index = 1;
                    indexes.length > 1 && index < indexes.length;
                    index++
                ) {
                    const seriesIndex = indexes[index];
                    const column = this.#kupManager.data.column.find(
                        this.data,
                        {
                            name: this.series[seriesIndex],
                        }
                    )[0];
                    const newName = column.name + '_' + index;
                    this.#kupManager.data.column.new(
                        this.data,
                        KupDataNewColumnTypes.DUPLICATE,
                        {
                            columns: [column.name],
                            newColumn: {
                                ...column,
                                name: newName,
                                title:
                                    column.title +
                                    ` (${this.types[seriesIndex]})`,
                            },
                        }
                    );
                    this.series[seriesIndex] = newName;
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        if (this.consistencyCheck) {
            this.#checks();
        }
    }

    componentDidLoad() {
        this.#kupManager.resize.observe(this.rootElement);
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#themeBackground =
            this.#kupManager.theme.cssVars[KupThemeColorValues.BACKGROUND];
        this.#themeBorder =
            this.#kupManager.theme.cssVars[KupThemeColorValues.BORDER];
        this.#themeFont = this.#kupManager.theme.cssVars['--kup-font-family'];
        this.#themeText =
            this.#kupManager.theme.cssVars[KupThemeColorValues.TEXT];
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        if (this.data && this.data.columns && this.data.rows) {
            this.#initChart();
        } else {
            this.#kupManager.debug.logMessage(
                this,
                'Insufficient data.(' + this.data + ')',
                KupDebugCategory.WARNING
            );
        }
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const style: GenericObject = {
            '--kup_echart_height': this.sizeY ? this.sizeY : '100%',
            '--kup_echart_width': this.sizeX ? this.sizeX : '100%',
        };

        return (
            <Host style={style}>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    ref={(chartContainer) =>
                        (this.#chartContainer = chartContainer)
                    }
                ></div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#chartEl?.dispose();
        this.#kupManager.theme.unregister(this);
        this.#kupManager.resize.unobserve(this.rootElement);
    }
}

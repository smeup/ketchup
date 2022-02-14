import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    Watch,
} from '@stencil/core';
import {
    ChartType,
    ChartAspect,
    ChartOptions,
    ChartAxis,
    ChartOfflineMode,
    ChartSerie,
    ChartTitle,
    KupChartProps,
    KupChartClickEvent,
    KupChartTrendlines,
    KupChartSort,
} from './kup-chart-declarations';
import {
    convertColumns,
    convertRows,
    getSerieDecode,
} from './kup-chart-builder';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, identify, setProps } from '../../utils/utils';
import { getColumnByName } from '../../utils/cell-utils';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';

declare const google: any;
declare const $: any;

@Component({
    tag: 'kup-chart',
    styleUrl: 'kup-chart.scss',
    shadow: true,
})
export class KupChart {
    /**
     * References the root HTML element of the component (<kup-chart>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the chart to a 2D or 3D aspect. 3D only works for Pie graphs.
     * @default undefined
     */
    @Prop() asp: ChartAspect;
    /**
     * Sets the axis of the chart.
     * @default undefined
     */
    @Prop() axis: string;
    /**
     * Title of the graph.
     * @default undefined
     */
    @Prop() chartTitle: ChartTitle;
    /**
     * Colors of the chart.
     * @default []
     */
    @Prop() colors: string[] = [];
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The actual data of the chart.
     * @default undefined
     */
    @Prop() data: KupDataDataset;
    /**
     * Customize the hAxis.
     * @default undefined
     */
    @Prop() hAxis: ChartAxis;
    /**
     * Customize the hAxes for multiple-chart.
     */
    @Prop() hAxes: ChartAxis[];
    /**
     * Sets the position of the legend. Supported values: bottom, labeled, left, none, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.
     * @default "right"
     */
    @Prop() legend: string = 'right';
    /**
     * Renders charts without the Google API and using jQuery Sparkline.
     * @default undefined
     */
    @Prop() offlineMode: ChartOfflineMode = undefined;
    /**
     * The data series to be displayed. They must be of the same type.
     * @default undefined
     */
    @Prop() series: ChartSerie[];
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
     * Used to sort series.
     * @default null
     */
    @Prop() sorting: KupChartSort[] = null;
    /**
     * Displays the data columns of an object on top of each other.
     */
    @Prop() stacked = false;
    /**
     * The type of the chart. Supported formats: Area, Bubble, Cal, Candlestick, Combo, Geo, Hbar, Line, Ohlc, Pie, Sankey, Scatter, Unk, Vbar.
     * @default [ChartType.Hbar]
     */
    @Prop() types: ChartType[] = [ChartType.Hbar];
    /**
     * Customize the vAxes for multiple-chart.
     */
    @Prop() vAxes: ChartAxis[];
    /**
     * Customize the vAxis.
     * @default undefined
     *
     */
    @Prop() vAxis: ChartAxis;
    /**
     * KupChartTrendlines.
     */
    @Prop() trendlines: KupChartTrendlines;
    /**
     * Google chart version to load
     * @default "45.2"
     */
    @Prop() version = '45.2';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Used to prevent too many resize callbacks at once.
     */
    private resizeTimeout: number;
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private chartContainer?: HTMLDivElement;
    private gChart: any;
    private gChartDataTable: any;
    private gChartView: any;
    private elStyle = undefined;
    private themeColors: string[] = null;
    private themeText: string = null;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    identifyRows() {
        if (this.data) {
            identify(this.data.rows);
        }
    }

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when a chart serie is clicked
     */
    @Event({
        eventName: 'kup-chart-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChartClick: EventEmitter<KupChartClickEvent>;

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
        return getProps(this, KupChartProps, descriptions);
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
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(() => {
            if (!this.offlineMode) {
                const options = this.createGoogleChartOptions();
                try {
                    this.gChart.draw(this.gChartView, options);
                } catch (error) {}
            } else {
                this.loadOfflineChart();
            }
        }, 300);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupChartProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private loadGoogleChart(): void {
        google.charts.setOnLoadCallback(this.createChart.bind(this));
    }

    private createGoogleChart(): any {
        if (this.isComboChart()) {
            return new google.visualization.ComboChart(this.chartContainer);
        } else if (this.types.length === 1) {
            switch (this.types[0]) {
                case ChartType.Area:
                    return new google.visualization.AreaChart(
                        this.chartContainer
                    );

                case ChartType.Bubble:
                    return new google.visualization.BubbleChart(
                        this.chartContainer
                    );

                case ChartType.Cal:
                    return new google.visualization.Calendar(
                        this.chartContainer
                    );

                case ChartType.Candlestick:
                    return new google.visualization.CandlestickChart(
                        this.chartContainer
                    );

                case ChartType.Geo:
                    return new google.visualization.GeoChart(
                        this.chartContainer
                    );

                case ChartType.Hbar:
                    return new google.visualization.BarChart(
                        this.chartContainer
                    );

                case ChartType.Line:
                    return new google.visualization.LineChart(
                        this.chartContainer
                    );

                case ChartType.Pie:
                    return new google.visualization.PieChart(
                        this.chartContainer
                    );

                case ChartType.Sankey:
                    return new google.visualization.Sankey(this.chartContainer);

                case ChartType.Scatter:
                    return new google.visualization.ScatterChart(
                        this.chartContainer
                    );

                default:
                    return new google.visualization.ColumnChart(
                        this.chartContainer
                    );
            }
        }
    }

    private getMainChartType(): ChartType {
        if (this.types.length > 0) {
            return this.types[0];
        }

        return ChartType.Unk;
    }

    private isComboChart(): boolean {
        return this.types.length > 1;
    }

    private createGoogleChartOptions(): ChartOptions {
        const opts: ChartOptions = {
            backgroundColor: 'transparent',
            is3D: ChartAspect.D3 === this.asp,
        };

        if (this.trendlines) opts.trendlines = this.trendlines;

        if (this.colors && this.colors.length > 0) {
            opts.colors = this.colors;
        } else {
            opts.colors = this.themeColors;
        }

        if (this.legend && this.legend !== 'none') {
            opts.legend = {
                position: this.legend,
                textStyle: { color: this.themeText },
            };
        } else {
            opts.legend = {
                position: 'none',
            };
        }

        if (
            this.stacked &&
            (ChartType.ColumnChart === this.getMainChartType() ||
                ChartType.Unk === this.getMainChartType() ||
                ChartType.Hbar === this.getMainChartType() ||
                ChartType.Vbar === this.getMainChartType())
        ) {
            opts.isStacked = true;
        }

        if (this.chartTitle) {
            opts.title = this.chartTitle.value;

            opts.titleTextStyle = {};
            if (this.chartTitle.color) {
                opts.titleTextStyle.color = this.chartTitle.color;
            } else {
                opts.titleTextStyle.color = this.themeText;
            }

            if (this.chartTitle.size) {
                opts.titleTextStyle.fontSize = this.chartTitle.size;
            }
        }

        // series for combo chart
        if (this.isComboChart()) {
            opts.series = {};

            this.types.forEach((type, index) => {
                let serieType = 'bars';

                if (ChartType.Line === type) {
                    serieType = 'line';
                } else if (ChartType.Area === type) {
                    serieType = 'area';
                }

                let idx = '';
                if (
                    (this.vAxes && this.vAxes.length > 0) ||
                    (this.hAxes && this.hAxes.length > 0)
                ) {
                    idx = index.toString();
                }
                opts.series[index.toString()] = {
                    type: serieType,
                    targetAxisIndex: idx,
                };
            });
        }
        if (this.vAxes) {
            opts.vAxes = {};
            this.vAxes.forEach((vAxe, index) => {
                opts.vAxes[index.toString()] = vAxe;
            });
        }

        if (this.vAxis) {
            opts.vAxis = this.vAxis;
            opts.vAxis['textStyle'] = { color: this.themeText };
        } else {
            opts.vAxis = { textStyle: { color: this.themeText } };
        }

        if (this.hAxes) {
            opts.hAxes = {};
            this.hAxes.forEach((hAxe, index) => {
                opts.hAxes[index.toString()] = hAxe;
            });
        }

        if (this.hAxis) {
            opts.hAxis = this.hAxis;
            opts.hAxis['textStyle'] = { color: this.themeText };
        } else {
            opts.hAxis = { textStyle: { color: this.themeText } };
        }

        if (this.types[0] === 'Pie') {
            opts.slices = [];
            for (let index = 0; index < opts.colors.length; index++) {
                opts.slices.push({
                    textStyle: {
                        color: this.kupManager.theme.colorContrast(
                            opts.colors[index]
                        ),
                    },
                });
            }
        }
        return opts;
    }

    private createChart(): void {
        const tableColumns = convertColumns(this.data, {
            axis: this.axis,
            series: this.series,
        });

        const tableRows = convertRows(this.data, tableColumns, this.showMarks);

        const dataTableColumns = [];

        for (let i = 0; i < tableColumns.length; i++) {
            const c = tableColumns[i];

            dataTableColumns.push({
                label: getSerieDecode(c.name, this.data.columns),
            });

            if (i > 0 && this.showMarks) {
                dataTableColumns.push({
                    type: 'string',
                    role: 'annotation',
                });
            }
        }

        this.gChartDataTable = new google.visualization.arrayToDataTable([
            dataTableColumns,
            ...tableRows,
        ]);

        this.gChartView = new google.visualization.DataView(
            this.gChartDataTable
        );

        if (this.sorting && this.sorting.length > 0) {
            this.gChartView.setRows(
                this.gChartView.getSortedRows(this.sorting)
            );
        }

        this.gChart = this.createGoogleChart();

        const options = this.createGoogleChartOptions();

        this.gChart.draw(this.gChartView, options);

        google.visualization.events.addListener(
            this.gChart,
            'select',
            this.onChartSelect.bind(this)
        );
    }

    private onChartSelect(): void {
        const selectedItem = this.gChart.getSelection()[0];

        if (selectedItem) {
            const event: KupChartClickEvent = {
                comp: this,
                id: this.rootElement.id,
            };

            if (selectedItem.date) {
                // calendar chart
                event.datetime = selectedItem.date;

                if (selectedItem.row || selectedItem.row == 0) {
                    const rowIndex = this.gChartView.getTableRowIndex(
                        selectedItem.row
                    );
                    event.row = this.data.rows[rowIndex];
                    event.rowindex = rowIndex;
                } else {
                    return;
                }
            } else {
                // any other chart
                const rowIndex = selectedItem.row;
                const colIndex = selectedItem.column;

                const originalRowIndex = this.gChartView.getTableRowIndex(
                    rowIndex != null ? rowIndex : 0
                );

                event.row = this.data.rows[originalRowIndex];
                event.rowindex = originalRowIndex;

                if (this.series.length > 1) {
                    let originalColIndex = this.gChartView.getTableColumnIndex(
                        colIndex != null ? colIndex : 0
                    );

                    // checking if col is annotation
                    if (
                        'annotation' ===
                        this.gChartDataTable.getColumnProperty(
                            originalColIndex,
                            'role'
                        )
                    ) {
                        --originalColIndex;
                    }

                    event.column = getColumnByName(
                        this.data.columns,
                        this.series[originalColIndex - 1].code
                    );

                    event.colindex = originalColIndex;
                } else {
                    event.column = getColumnByName(
                        this.data.columns,
                        this.series[0].code
                    );
                    event.colindex = 0;
                }
            }
            this.kupChartClick.emit(event);
        }
    }

    private loadOfflineChart(): void {
        if (!this.offlineMode.value || this.offlineMode.value == '') {
            this.kupManager.debug.logMessage(
                this,
                "Incorrect or incomplete data, can't render chart in offline mode!",
                KupDebugCategory.WARNING
            );
            return;
        }

        let valueAsArray: string[] = this.offlineMode.value.split(';');
        let colors: string[] = undefined;

        var options = {
            height: this.rootElement.clientHeight,
            width: this.rootElement.clientWidth,
        };

        if (this.colors && this.colors.length > 0) {
            colors = this.colors;
        } else {
            colors = this.themeColors;
        }

        switch (this.offlineMode.shape) {
            case 'box':
                options['type'] = 'box';
                break;

            case 'bul':
            case 'bullet':
                options['type'] = 'bullet';
                options['targetWidth'] = this.rootElement.clientWidth / 20;
                break;

            case 'dis':
            case 'discrete':
                options['type'] = 'discrete';
                options['lineColor'] = colors[0];
                break;

            case 'lin':
            case 'line':
                options['type'] = 'line';
                options['lineColor'] = colors[0];
                options['fillColor'] = colors[1];
                break;

            case 'pie':
                options['type'] = 'pie';
                options['sliceColors'] = colors;
                break;

            case 'tri':
            case 'tristate':
                options['type'] = 'tristate';
                options['barWidth'] =
                    this.rootElement.clientWidth / valueAsArray.length;
                break;

            default:
                options['type'] = 'bar';
                options['barColor'] = colors[0];
                options['negBarColor'] = colors[1];
                options['zeroBarColor'] = colors[2];
                options['barWidth'] =
                    this.rootElement.clientWidth / valueAsArray.length;
        }

        $(this.chartContainer).sparkline(
            this.complianceCheck(valueAsArray),
            options
        );
    }

    private complianceCheck(valueAsArray: string[]): number[] {
        let ints: number[] = [valueAsArray.length];
        let i = 0;
        valueAsArray.forEach((element) => {
            try {
                element = element.replace(',', '.');
                ints[i++] = parseFloat(element);
            } catch (e) {
                ints[i++] = null;
            }
        });
        return ints;
    }

    private fetchThemeColors(): void {
        const colorArray: string[] = [];
        const key: string = '--kup-chart-color-';
        for (
            let index = 1;
            this.kupManager.theme.cssVars[key + index];
            index++
        ) {
            colorArray.push(this.kupManager.theme.cssVars[key + index]);
        }
        this.themeText =
            this.kupManager.theme.cssVars[KupThemeColorValues.TEXT];

        try {
            for (
                let index = 0;
                index < this.data.rows.length ||
                index < this.data.columns.length;
                index++
            ) {
                colorArray.push(this.kupManager.theme.randomColor(25));
            }
        } catch (error) {
            if (!this.offlineMode) {
                this.kupManager.debug.logMessage(
                    this,
                    'Chart colors setup failed!',
                    KupDebugCategory.WARNING
                );
            }
        }

        this.themeColors = colorArray;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.identifyRows();
    }

    componentDidLoad() {
        this.kupManager.resize.observe(this.rootElement);
        if (!this.offlineMode && (!this.axis || !this.series)) {
            return;
        }

        // loading charts
        if (google && !this.offlineMode) {
            // getting google charts css from main document
            document
                .querySelectorAll(
                    `link[href^="https://www.gstatic.com/charts/${this.version}/css"]`
                )
                .forEach((node) =>
                    this.rootElement.shadowRoot.appendChild(node.cloneNode())
                );

            try {
                this.loadGoogleChart();
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                this.loadOfflineChart();
            } catch (err) {
                console.error(err);
            }
        }
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        this.fetchThemeColors();
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    componentWillUpdate() {
        if (this.gChart) {
            this.gChart.clearChart();
        }
    }

    componentDidUpdate() {
        if (!this.offlineMode) {
            this.loadGoogleChart();
        } else {
            this.loadOfflineChart();
        }
    }

    render() {
        this.elStyle = undefined;
        this.elStyle = {
            height: this.sizeY,
            minHeight: this.sizeY,
            width: this.sizeX,
            minWidth: this.sizeX,
        };

        return (
            <Host style={this.elStyle}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                />
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
    }
}

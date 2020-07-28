import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    h,
} from '@stencil/core';

import {
    ChartType,
    ChartAspect,
    ChartOptions,
    ChartClickedEvent,
    ChartAxis,
    ChartOfflineMode,
} from './kup-chart-declarations';

import { ResizeObserver } from 'resize-observer';

import { convertColumns, convertRows } from './kup-chart-builder';

import { DataTable } from '../kup-data-table/kup-data-table-declarations';

import { getColumnByName } from '../kup-data-table/kup-data-table-helper';

import { errorLogging } from '../../utils/error-logging';
import { fetchThemeCustomStyle, setCustomStyle } from '../../utils/theming';

declare const google: any;
declare const $: any;

@Component({
    tag: 'kup-chart',
    styleUrl: 'kup-chart.scss',
    shadow: true,
})
export class KupChart {
    @Element() rootElement: HTMLElement;
    @Prop() data: DataTable;

    @Prop()
    asp: ChartAspect;

    @Prop({ reflect: true })
    axis: string;

    @Prop()
    colors: string[] = [];
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    @Prop({ reflect: true })
    graphTitle: string;

    @Prop({ reflect: true })
    graphTitleColor: string;

    @Prop({ reflect: true })
    graphTitleSize: number;

    @Prop()
    hAxis: ChartAxis;

    @Prop({ reflect: true })
    legend = true;

    @Prop()
    series: string[];

    @Prop({ reflect: true })
    showMarks = false;

    @Prop({ reflect: true })
    sizeX: string = '100%';

    @Prop({ reflect: true })
    sizeY: string = '100%';

    @Prop({ reflect: true })
    offlineMode: ChartOfflineMode = undefined;

    @Prop({ reflect: true })
    stacked = false;

    @Prop()
    types: ChartType[] = [ChartType.Hbar];

    @Prop()
    vAxis: ChartAxis;

    /**
     * Google chart version to load
     */
    @Prop()
    version = '45.2';

    /**
     * Triggered when a chart serie is clicked
     */
    @Event({
        eventName: 'kupChartClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChartClicked: EventEmitter<ChartClickedEvent>;

    private chartContainer?: HTMLDivElement;

    private gChart: any;

    private gChartDataTable: any;

    private gChartView: any;
    private elStyle = undefined;

    //---- Methods ----

    private loadGoogleChart() {
        google.charts.setOnLoadCallback(this.createChart.bind(this));
    }

    private createGoogleChart() {
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

    private isComboChart() {
        return this.types.length > 1;
    }

    private createGoogleChartOptions() {
        const opts: ChartOptions = {
            backgroundColor: 'transparent',
            is3D: ChartAspect.D3 === this.asp,
        };

        if (this.colors && this.colors.length > 0) {
            opts.colors = this.colors;
        }

        if (!this.legend) {
            opts.legend = {
                position: 'none',
            };
        }

        if (
            this.stacked &&
            (ChartType.Hbar === this.getMainChartType() ||
                ChartType.Vbar === this.getMainChartType())
        ) {
            opts.isStacked = true;
        }

        if (this.graphTitle) {
            opts.title = this.graphTitle;

            opts.titleTextStyle = {};
            if (this.graphTitleColor) {
                opts.titleTextStyle.color = this.graphTitleColor;
            }

            if (this.graphTitleSize) {
                opts.titleTextStyle.fontSize = this.graphTitleSize;
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

                opts.series[index.toString()] = {
                    type: serieType,
                };
            });
        }

        if (this.vAxis) {
            opts.vAxis = this.vAxis;
        }

        if (this.hAxis) {
            opts.hAxis = this.hAxis;
        }

        return opts;
    }

    private createChart() {
        const tableColumns = convertColumns(this.data, {
            axis: this.axis,
            series: this.series,
        });

        const tableRows = convertRows(this.data, tableColumns, this.showMarks);

        const dataTableColumns = [];

        for (let i = 0; i < tableColumns.length; i++) {
            const c = tableColumns[i];

            dataTableColumns.push({
                label: c.name,
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

        this.gChart = this.createGoogleChart();

        const options = this.createGoogleChartOptions();

        this.gChart.draw(this.gChartView, options);

        google.visualization.events.addListener(
            this.gChart,
            'select',
            this.onChartSelect.bind(this)
        );
    }

    private onChartSelect() {
        const selectedItem = this.gChart.getSelection()[0];

        if (selectedItem) {
            const event: ChartClickedEvent = {};

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
                        this.series[originalColIndex - 1]
                    );

                    event.colindex = originalColIndex;
                } else {
                    event.column = getColumnByName(
                        this.data.columns,
                        this.series[0]
                    );
                    event.colindex = 0;
                }
            }

            this.kupChartClicked.emit(event);
        }
    }

    private loadOfflineChart() {
        if (!this.offlineMode.value || this.offlineMode.value == '') {
            let message =
                "Incorrect or incomplete data, can't render chart in offline mode!";
            errorLogging(this.rootElement.tagName, message);
            return;
        }

        let valueAsArray: string[] = this.offlineMode.value.split(';');

        var options = {
            height: this.rootElement.clientHeight,
            width: this.rootElement.clientWidth,
        };

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
                options['lineColor'] = this.colors[0];
                break;

            case 'lin':
            case 'line':
                options['type'] = 'line';
                options['lineColor'] = this.colors[0];
                options['fillColor'] = this.colors[1];
                break;

            case 'pie':
                options['type'] = 'pie';
                options['sliceColors'] = this.colors;
                break;

            case 'tri':
            case 'tristate':
                options['type'] = 'tristate';
                options['barWidth'] =
                    this.rootElement.clientWidth / valueAsArray.length;
                break;

            default:
                options['type'] = 'bar';
                options['barColor'] = this.colors[0];
                options['negBarColor'] = this.colors[1];
                options['zeroBarColor'] = this.colors[2];
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

    private fetchThemeColors() {
        const color1 = document.documentElement.style.getPropertyValue(
            '--kup-chart-color-1'
        );
        const color2 = document.documentElement.style.getPropertyValue(
            '--kup-chart-color-2'
        );
        const color3 = document.documentElement.style.getPropertyValue(
            '--kup-chart-color-3'
        );
        const color4 = document.documentElement.style.getPropertyValue(
            '--kup-chart-color-4'
        );
        if (this.colors) {
            this.colors.push(color1, color2, color3, color4);
        } else {
            this.colors = [color1, color2, color3, color4];
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        fetchThemeCustomStyle(this, false);
    }

    componentDidLoad() {
        this.fetchThemeColors();
        const observer = new ResizeObserver(() => {
            if (!this.offlineMode) {
                const options = this.createGoogleChartOptions();
                try {
                    this.gChart.draw(this.gChartView, options);
                } catch (error) {}
            } else {
                this.loadOfflineChart();
            }
        });
        observer.observe(this.rootElement);

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
                <style>{setCustomStyle(this)}</style>
                <div
                    id="kup-component"
                    ref={(chartContainer) =>
                        (this.chartContainer = chartContainer)
                    }
                />
            </Host>
        );
    }
}

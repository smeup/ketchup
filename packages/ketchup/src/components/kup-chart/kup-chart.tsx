import { Component, Prop, h } from '@stencil/core';

import { ChartType, ChartAspect } from './kup-chart-declarations';

import { convertColumns, convertRows } from './kup-chart-builder';

import { DataTable } from '../kup-data-table/kup-data-table-declarations';

declare const google: any;

@Component({
    tag: 'kup-chart',
    shadow: true,
})
export class KupChart {
    @Prop() data: DataTable;

    @Prop()
    type: ChartType = ChartType.Hbar;

    @Prop()
    axe: string;

    @Prop()
    series: string[];

    @Prop()
    asp: ChartAspect;

    @Prop()
    colors: string[] = [];

    @Prop()
    width: number;

    @Prop()
    height: number;

    @Prop()
    legend = true;

    @Prop()
    stacked = false;

    @Prop()
    graphTitle: string;

    @Prop()
    graphTitleColor: string;

    @Prop()
    graphTitleSize: number;

    private chartContainer?: HTMLDivElement;

    private gChart: any;

    componentDidLoad() {
        if (!this.axe || !this.series) {
            // cannot create chart
            return;
        }

        // loading charts
        if (google) {
            try {
                this._loadGoogleChart();
            } catch (err) {
                console.log(err);
            }
        }
    }

    componentWillUpdate() {
        if (this.gChart) {
            this.gChart.clearChart();
        }
    }

    componentDidUpdate() {
        this._loadGoogleChart();
    }

    private _loadGoogleChart() {
        google.charts.setOnLoadCallback(this._createChart.bind(this));
    }

    private _createGoogleChart() {
        switch (this.type) {
            case ChartType.Area:
                return new google.visualization.AreaChart(this.chartContainer);

            case ChartType.Bubble:
                return new google.visualization.BubbleChart(
                    this.chartContainer
                );

            case ChartType.Cal:
                return new google.visualization.Calendar(this.chartContainer);

            case ChartType.Candlestick:
                return new google.visualization.CandlestickChart(
                    this.chartContainer
                );

            case ChartType.Combo:
                return new google.visualization.ComboChart(this.chartContainer);

            case ChartType.Geo:
                return new google.visualization.GeoChart(this.chartContainer);

            case ChartType.Hbar:
                return new google.visualization.BarChart(this.chartContainer);

            case ChartType.Line:
                return new google.visualization.LineChart(this.chartContainer);

            case ChartType.Pie:
                return new google.visualization.PieChart(this.chartContainer);

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

    private _createGoogleChartOptions() {
        const opts: any = {};

        // 2d vs 3d
        opts.is3D = ChartAspect.D3 === this.asp;

        if (this.colors && this.colors.length > 0) {
            opts.colors = this.colors;
        }

        if (this.width) {
            try {
                opts.width = this.width;
            } catch (e) {
                console.error(e);
            }
        }

        if (this.height) {
            try {
                opts.height = this.height;
            } catch (e) {
                console.error(e);
            }
        }

        // wtf check for legend
        if (!this.legend) {
            opts.legend = {
                position: 'none',
            };
        }

        if (
            this.stacked &&
            (ChartType.Hbar === this.type || ChartType.Vbar === this.type)
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

        return opts;
    }

    private _createChart() {
        const tableColumns = convertColumns(this.data, {
            axe: this.axe,
            series: this.series,
        });

        const tableRows = convertRows(this.data, tableColumns);

        const columnTitles = tableColumns.map((c) => c.title);

        const dataTable = new google.visualization.arrayToDataTable([
            columnTitles,
            ...tableRows,
        ]);

        this.gChart = this._createGoogleChart();

        const options = this._createGoogleChartOptions();

        this.gChart.draw(dataTable, options);
    }

    render() {
        return (
            <div
                id="chart"
                ref={(el) => (this.chartContainer = el as HTMLDivElement)}
            />
        );
    }
}

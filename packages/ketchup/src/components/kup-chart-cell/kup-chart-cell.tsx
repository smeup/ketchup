import { Component, Prop, Watch, h } from '@stencil/core';
import { ChartElement } from './kup-chart-cell-declarations';

declare const $: any;

@Component({
    tag: 'kup-chart-cell',
    shadow: true,
})
export class KupChartCell {
    @Prop({ attribute: 'cellConfig' })
    cellConfig?: any;

    @Prop()
    value: string;

    span: HTMLSpanElement;
    chart_element_marker_splitter = '\\\\';
    cellId: string = 'noId';
    defaultColor: 'R000G000B255';

    @Watch('value')
    onValueChange(): void {
        console.log('kup-chart-cell.onValueChange()');
        this.draw();
    }

    // lifecycle
    componentDidLoad(): void {
        console.log('kup-chart-cell.componentDidLoad()');
        this.draw();
    }

    // private methods
    private draw(): void {
        if (!this.value) {
            console.log('kup-chart-cell.draw() this.value = undefined');
            return;
        }
        if (this.value == '') {
            console.log('kup-chart-cell.draw() this.value = blank');
            return;
        }
        if (!this.cellConfig) {
            console.log('kup-chart-cell.draw() this.cellConfig = undefined');
            return;
        }

        this.cellId = this.cellConfig.cellId;
        console.log(
            'kup-chart-cell.draw() this.cellId = [' + this.cellId + ']'
        );

        const chartElem = this.value;
        let vShapeMarker = '';

        const vMarkersArray = chartElem.split(
            this.chart_element_marker_splitter
        );

        let shapesInfo = '';

        vMarkersArray.forEach((vString) => {
            if (this.isChartMarker(vString)) {
                vShapeMarker = vString;
            } else {
                if (vString != '') shapesInfo = vString;
            }
        });

        const elem = new ChartElement();
        elem.initChart(vShapeMarker, shapesInfo);

        if (this.cellConfig.width) {
            elem.setWidth(this.cellConfig.width);
        }
        if (this.cellConfig.height) {
            elem.setHeight(this.cellConfig.height);
        }
        if (this.cellConfig.color) {
            elem.setStrColor(this.cellConfig.color);
        } else {
            elem.setStrColor(this.defaultColor);
        }

        this.renderGra(this.cellId, elem);
    }

    isChartMarker(value: string): boolean {
        return value && value.toUpperCase().startsWith('CHART;');
    }

    private renderGra(containerID: string, config: ChartElement) {
        var opts = {
            type: config.getShape(),
            fillColor: config.isFillColor(),
            height: config.getHeight(),
            width: config.getWidth(),
            barWidth: config.getBarWidth(),
            lineColor: config.getColor(),
            /** per il momento disabilitati i tooltip dato che non funzionano correttamente */
            //disableTooltips: true,
            //tooltipContainer: window.document.body,
            tooltipContainer: this.span,
        };

        console.log(
            'kup-chart-cell.renderGra() cellId: ' +
                containerID +
                ' config.getChartUltInfoAsArray(): ' +
                JSON.stringify(config.getChartUltInfoAsArray())
        );
        console.log('kup-chart-cell.renderGra() opts: ' + JSON.stringify(opts));
        $(this.span).sparkline(config.getChartUltInfoAsArray(), opts);
    }

    render() {
        if (this.cellConfig) {
            this.cellId = this.cellConfig.cellId;
        }
        console.log(
            'kup-chart-cell.render() id:[' +
                this.cellId +
                '] value:[' +
                this.value +
                ']'
        );

        return [<span ref={(el) => (this.span = el)} id={this.cellId}></span>];
    }
}

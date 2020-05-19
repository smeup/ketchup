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
    cellId: string = 'noId';
    defaultColor: 'R000G000B255';

    @Watch('value')
    onValueChange(): void {
        this.draw();
    }

    // lifecycle
    componentDidLoad(): void {
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

        const elem = new ChartElement();
        elem.initChart(this.cellConfig.type, this.value);

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

        this.renderGra(elem);
    }

    private renderGra(config: ChartElement) {
        var opts = {
            type: config.getShape(),
            fillColor: config.isFillColor(),
            height: config.getHeight() > 0 ? config.getHeight() : null,
            width: config.getWidth() > 0 ? config.getWidth() : null,
            barWidth: config.getBarWidth() > 0 ? config.getBarWidth() : null,
            lineColor: config.getColor(),
        };

        $(this.span).sparkline(config.getChartUltInfoAsArray(), opts);
    }

    render() {
        if (this.cellConfig) {
            this.cellId = this.cellConfig.cellId;
        }

        return [<span ref={(el) => (this.span = el)} id={this.cellId}></span>];
    }
}

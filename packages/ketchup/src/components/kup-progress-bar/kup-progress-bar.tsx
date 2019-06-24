import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-progress-bar',
    styleUrl: 'kup-progress-bar.scss',
    shadow: true,
})
export class KupProgressBar {
    @Prop()
    value = 0;

    @Prop()
    label = '';

    render() {
        const valueStyle = {
            width: `${this.value}%`,
        };

        return (
            <div id="progress-bar">
                <div id="value" style={valueStyle} />
                <div id="label">{this.label}</div>
            </div>
        );
    }
}

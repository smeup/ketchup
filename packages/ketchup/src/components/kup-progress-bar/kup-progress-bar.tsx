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
    labelText: string;

    @Prop()
    hideLabel = false;

    render() {
        const valueStyle = {
            width: `${this.value}%`,
        };

        let label = null;
        if (!this.hideLabel) {
            if (this.labelText) {
                label = this.labelText;
            } else {
                label = this.value + '%';
            }
        }

        return (
            <div id="progress-bar">
                <div id="progress-bar-percentage" style={valueStyle}>
                    <span>{label}</span>
                </div>
            </div>
        );
    }
}

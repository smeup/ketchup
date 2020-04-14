import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-progress-bar',
    styleUrl: 'kup-progress-bar.scss',
    shadow: true,
})
export class KupProgressBar {
    @Element() rootElement: HTMLElement;

    /**
     * Displays the label in the middle of the progress bar.
     */
    @Prop({ reflect: true }) centeredLabel: boolean = true;
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Flag to show or hide the progress bar's label.
     */
    @Prop({ reflect: true }) hideLabel: boolean = false;
    /**
     * Specifies a text for the bar's label.
     */
    @Prop({ reflect: true }) label: string = undefined;
    /**
     * Sets a padding between the bar and its container.
     */
    @Prop({ reflect: true }) hasPadding: boolean = false;
    /**
     * Sets a striped background.
     */
    @Prop({ reflect: true }) hasStripes: boolean = false;
    /**
     * When striped background is active, it will be animated.
     */
    @Prop({ reflect: true }) isAnimated: boolean = false;
    /**
     * Slim version.
     */
    @Prop({ reflect: true }) isSlim: boolean = false;
    /**
     * The current value the progress bar must display.
     */
    @Prop({ reflect: true }) value: number = 0;

    render() {
        let componentClass: string = 'progress-bar';

        if (this.hasPadding) {
            componentClass += ' has-padding';
        }

        if (this.hasStripes) {
            componentClass += ' has-stripes';
        }

        if (this.isAnimated) {
            componentClass += ' is-animated';
        }

        if (this.isSlim) {
            componentClass += ' is-slim';
        }

        let labelStyle = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        const valueStyle = {
            width: `${this.value}%`,
        };

        if (!this.centeredLabel) {
            labelStyle = valueStyle;
        }

        let label = null;
        if (!this.hideLabel) {
            if (this.label) {
                label = this.label;
            } else {
                label = this.value + '%';
            }
        }

        return (
            <Host>
                {customStyle}
                <div id="kup-component" title={label}>
                    <div class={componentClass}>
                        <div class="progress-bar-percentage" style={valueStyle}>
                            <span style={labelStyle}>{label}</span>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}

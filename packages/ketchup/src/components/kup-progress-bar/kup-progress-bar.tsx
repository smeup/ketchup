import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-progress-bar',
    styleUrl: 'kup-progress-bar.scss',
    shadow: true,
})
export class KupProgressBar {
    @Element() rootElement: HTMLElement;

    /**
     * Displays the label in the middle of the progress bar. It's the default for the radial variant and can't be changed.
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
     * Sets a padding between the bar and its container. Not supported for the radial variant.
     */
    @Prop({ reflect: true }) hasPadding: boolean = false;
    /**
     * Sets a striped background. Not supported for the radial variant.
     */
    @Prop({ reflect: true }) hasStripes: boolean = false;
    /**
     * When striped background is active, it will be animated. Not supported for the radial variant.
     */
    @Prop({ reflect: true }) isAnimated: boolean = false;
    /**
     * Radial version.
     */
    @Prop({ reflect: true }) isRadial: boolean = false;
    /**
     * Slim version.
     */
    @Prop({ reflect: true }) isSlim: boolean = false;
    /**
     * The current value the progress bar must display.
     */
    @Prop({ reflect: true }) value: number = 0;

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != undefined && this.isRadial) {
            let deg = this.value * 3.6 + 'deg';
            root.querySelector('.left-side').setAttribute(
                'style',
                'transform: rotate(' + deg + ')'
            );
        }
    }

    render() {
        let wrapperClass: string = '';
        let componentClass: string = '';
        let pieClass: string = 'pie';
        let radialStyle = undefined;
        if (this.isRadial) {
            componentClass = 'pie-wrapper';
        } else {
            componentClass = 'progress-bar';
        }

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
            if (this.isRadial) {
                if (this.label) {
                    label = <span class="label">{this.label}</span>;
                } else {
                    label = (
                        <span class="label">
                            {this.value}
                            <span class="smaller">%</span>
                        </span>
                    );
                }
            } else {
                if (this.label) {
                    label = this.label;
                } else {
                    label = this.value + '%';
                }
            }
        }

        if (this.value > 0) {
            pieClass += ' has-value';
            if (this.value > 50) {
                pieClass += ' is-more-than-half';
            } else {
                pieClass += ' is-less-than-half';
            }
        }

        let el: HTMLElement;
        if (this.isRadial) {
            wrapperClass += ' is-radial';
            el = (
                <div class={componentClass}>
                    {label}
                    <div class={pieClass}>
                        <div
                            style={radialStyle}
                            class="left-side half-circle"
                        ></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                </div>
            );
        } else {
            el = (
                <div class={componentClass}>
                    <div class="progress-bar-percentage" style={valueStyle}>
                        <span style={labelStyle}>{label}</span>
                    </div>
                </div>
            );
        }

        return (
            <Host>
                {customStyle}
                <div id="kup-component" class={wrapperClass}>
                    {el}
                </div>
            </Host>
        );
    }
}

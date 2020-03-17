import { Component, Prop, Element, Host, h } from '@stencil/core';

@Component({
    tag: 'kup-spinner',
    styleUrl: 'kup-spinner.scss',
    shadow: true,
    assetsDirs: ['assets'],
})
export class KupSpinner {
    @Element() rootElement: HTMLElement;

    /**
     * When set to true the spinner is animating.
     */
    @Prop({ reflect: true }) active: boolean = false;

    /**
     * Decides whether the component is a bar or a spinner.
     */
    @Prop({ reflect: true }) barVariant: boolean = false;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * Width and height of the spinner. For the bar variant, only height.
     */
    @Prop({ reflect: true }) dimensions: string = undefined;

    /**
     * Places a blend modal over the wrapper to darken the view (or lighten, when the theme is dark).
     */
    @Prop({ reflect: true }) fader: boolean = false;

    /**
     * The time required for the "fader" to trigger.
     */
    @Prop({ reflect: true }) faderTimeout: number = 3500;

    /**
     * When set to true the component will fill the whole viewport.
     */
    @Prop({ reflect: true }) fullScreen: boolean = false;

    /**
     * Sets the layout of the spinner.
     */
    @Prop({ reflect: true }) layout: number = 1;

    //---- Methods ----

    //---- Lifecycle hooks ----

    componentDidUpdate() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            root.querySelector('#loading-wrapper-master').classList.remove(
                'loading-wrapper-big-wait'
            );
        }
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root) {
            if (this.fader) {
                setTimeout(function() {
                    root.querySelector('#loading-wrapper-master').classList.add(
                        'loading-wrapper-big-wait'
                    );
                }, this.faderTimeout);
            }
        }
    }

    render() {
        let masterClass = '';
        let wrapperClass = '';
        let spinnerClass = '';
        let spinnerEl: any = '';
        let elStyle = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.active) {
            masterClass += ' loading-wrapper-visible';
        }

        if (this.barVariant) {
            masterClass += ' bar-version';
            wrapperClass = 'loading-wrapper-master-bar';
            spinnerClass = 'spinner-bar-v' + this.layout;
        } else {
            masterClass += ' spinner-version';
            wrapperClass = 'loading-wrapper-master-spinner';
            spinnerClass = 'spinner-v' + this.layout;
            if (this.layout === 7) {
                spinnerEl = [
                    <div class="sk-spinner-v7-dot"></div>,
                    <div class="sk-spinner-v7-dot"></div>,
                    <div class="sk-spinner-v7-dot"></div>,
                    <div class="sk-spinner-v7-dot"></div>,
                    <div class="sk-spinner-v7-dot"></div>,
                    <div class="sk-spinner-v7-dot"></div>,
                ];
            }
            if (this.layout === 9) {
                spinnerEl = [
                    <div class="sk-spinner-v9-bounce1"></div>,
                    <div class="sk-spinner-v9-bounce2"></div>,
                ];
            }
            if (this.layout === 10) {
                spinnerEl = [
                    <div class="sk-spinner-v10-cube1"></div>,
                    <div class="sk-spinner-v10-cube2"></div>,
                ];
            }
            if (this.layout === 12) {
                spinnerEl = [
                    <div class="sk-spinner-v12-dot1"></div>,
                    <div class="sk-spinner-v12-dot2"></div>,
                ];
            }
            if (this.layout === 13) {
                spinnerEl = [
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube1"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube2"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube3"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube4"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube5"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube6"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube7"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube8"></div>,
                    <div class="sk-spinner-v13-cube sk-spinner-v13-cube9"></div>,
                ];
            }
            if (this.layout === 14) {
                spinnerEl = [
                    <div class="sk-spinner-v14-circle1 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle2 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle3 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle4 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle5 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle6 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle7 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle8 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle9 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle10 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle11 sk-spinner-v14-circle"></div>,
                    <div class="sk-spinner-v14-circle12 sk-spinner-v14-circle"></div>,
                ];
            }
        }

        if (this.fullScreen) {
            masterClass += ' full-screen';
        } else {
            elStyle = {
                height: '100%',
                width: '100%',
            };
        }

        if (this.dimensions) {
            elStyle = {
                ...elStyle,
                fontSize: this.dimensions,
            };
        } else if (!this.barVariant) {
            elStyle = {
                ...elStyle,
                fontSize: '16px',
            };
        } else {
            elStyle = {
                ...elStyle,
                fontSize: '3px',
            };
        }

        return (
            <Host style={elStyle}>
                {customStyle}
                <div id="kup-component" style={elStyle}>
                    <div
                        id="loading-wrapper-master"
                        class={masterClass}
                        style={elStyle}
                    >
                        <div id={wrapperClass} style={elStyle}>
                            <div class={spinnerClass}>{spinnerEl}</div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}

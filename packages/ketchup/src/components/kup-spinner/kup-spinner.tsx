import { Component, Prop, Element, Host, h } from '@stencil/core';
import { errorLogging } from '../../utils/error-logging';

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
        let message = 'Updating...';
        errorLogging('kup-spinner', message);
        const root = this.rootElement.shadowRoot;
        if (root) {
            root.querySelector('#loading-wrapper-master').classList.remove(
                'loading-wrapper-big-wait'
            );
        }
    }

    componentWillRender() {
        let message = 'Rendering...';
        errorLogging('kup-spinner', message);
    }

    componentDidRender() {
        let message = 'Rendered...';
        errorLogging('kup-spinner', message);
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

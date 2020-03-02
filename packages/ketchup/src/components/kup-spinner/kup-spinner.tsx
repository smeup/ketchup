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
     * Sets whether the component is a bar or a spinner.
     */
    @Prop({ reflect: true }) barVariant: boolean = false;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * Places a blend modal over the wrapper to darken the view. It will be displayed after 3500ms since the component's render.
     */
    @Prop({ reflect: true }) fader: boolean = false;

    /**
     * When set to true the component will fill the whole viewport.
     */
    @Prop({ reflect: true }) fullScreen: boolean = false;

    /**
     * Sets the layout of the spinner.
     */
    @Prop({ reflect: true }) layout: string = '1';

    //---- Methods ----

    //---- Lifecycle hooks ----

    componentWillRender() {
        let message = 'Rendering...';
        errorLogging('kup-spinner', message);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != undefined && this.fader) {
            setTimeout(function() {
                root.querySelector('#loading-wrapper-master').classList.add(
                    'loading-wrapper-big-wait'
                );
            }, 3500);
        }
    }

    render() {
        let masterClass = '';
        let wrapperClass = '';
        let spinnerClass = '';
        let elStyle = undefined;
        let spinnerEl = undefined;
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

            if (this.layout === '1') {
                spinnerEl = (
                    <div class="lds-circle">
                        <div></div>
                    </div>
                );
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

        return (
            <Host style={elStyle}>
                {customStyle}
                <div id="kup-component" style={elStyle}>
                    <div id="loading-wrapper-master" class={masterClass}>
                        <div id={wrapperClass}>
                            <div class={spinnerClass}>{spinnerEl}</div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}

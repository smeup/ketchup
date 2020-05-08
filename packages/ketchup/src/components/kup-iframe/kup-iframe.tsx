import {
    Component,
    Event,
    Element,
    Host,
    EventEmitter,
    Prop,
    h,
} from '@stencil/core';

import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-iframe',
    styleUrl: 'kup-iframe.scss',
    shadow: true,
})
export class KupIframe {
    @Element() rootElement: HTMLElement;

    /**
     *  Props of the button (when isButton is set to true).
     */
    @Prop() buttonData: Object = {};
    /**
     * The component will be rendered as a button, which opens the link associated to the iframe in another tab when clicked.
     */
    @Prop({ reflect: true }) isButton: boolean = false;
    /**
     * The address the iframe should be referencing to.
     */
    @Prop({ reflect: true }) src: string = undefined;

    @Event({
        eventName: 'kupIframeError',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIframeError: EventEmitter;

    onKupIframeError() {
        this.kupIframeError.emit();
    }

    @Event({
        eventName: 'kupIframeLoad',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIframeLoad: EventEmitter;

    onKupIframeLoad() {
        this.kupIframeLoad.emit();
    }

    openInNew() {
        window.open(this.src, '_blank');
    }

    render() {
        if (this.src === undefined || this.src === null || this.src === '') {
            let message = 'Resource undefined, not rendering!';
            errorLogging('kup-iframe', message);
            return;
        }

        if (!this.buttonData['icon']) {
            this.buttonData['icon'] = 'open_in_new';
        }

        if (!this.buttonData['label']) {
            this.buttonData['label'] = 'Open in new tab';
        }

        return !this.isButton ? (
            <Host class="iframe-version">
                <iframe
                    onError={this.onKupIframeError.bind(this)}
                    onLoad={this.onKupIframeLoad.bind(this)}
                    src={this.src}
                />
            </Host>
        ) : (
            <Host class="button-version">
                <kup-button
                    {...this.buttonData}
                    onKupButtonClick={() => this.openInNew()}
                />
            </Host>
        );
    }
}

import {
    Component,
    Event,
    Element,
    Host,
    EventEmitter,
    Prop,
    h,
} from '@stencil/core';

import { logMessage } from '../../utils/debug-manager';

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
    @Prop() isButton: boolean = false;
    /**
     * The address the iframe should be referencing to.
     */
    @Prop() src: string = undefined;

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    //---- Methods ----

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

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        if (this.src === undefined || this.src === null || this.src === '') {
            let message = 'Resource undefined, not rendering!';
            logMessage(this, message, 'warning');
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

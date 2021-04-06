import {
    Component,
    Event,
    Element,
    Host,
    EventEmitter,
    Prop,
    h,
    Method,
} from '@stencil/core';
import type { GenericObject } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { KupIframeProps } from './kup-iframe-declarations';

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

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

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
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        let props: GenericObject = {};
        if (descriptions) {
            props = KupIframeProps;
        } else {
            for (const key in KupIframeProps) {
                if (Object.prototype.hasOwnProperty.call(KupIframeProps, key)) {
                    props[key] = this[key];
                }
            }
        }
        return props;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        if (this.src === undefined || this.src === null || this.src === '') {
            let message = 'Resource undefined, not rendering!';
            this.kupManager.debug.logMessage(this, message, 'warning');
            return;
        }

        if (!this.buttonData['icon']) {
            this.buttonData['icon'] = 'open_in_new';
        }

        if (!this.buttonData['label']) {
            this.buttonData['label'] = 'Open in new tab';
        }

        return !this.isButton ? (
            <Host class="kup-iframe-version">
                <iframe
                    onError={this.onKupIframeError.bind(this)}
                    onLoad={this.onKupIframeLoad.bind(this)}
                    src={this.src}
                />
            </Host>
        ) : (
            <Host class="kup-button-version">
                <kup-button
                    {...this.buttonData}
                    onKupButtonClick={() => this.openInNew()}
                />
            </Host>
        );
    }
}

import {
    Component,
    Element,
    Prop,
    Event,
    EventEmitter,
    h,
    State,
    Host,
    Method,
} from '@stencil/core';
import { FImage } from '../../f-components/f-image/f-image';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';

@Component({
    tag: 'kup-badge',
    styleUrl: 'kup-badge.scss',
    shadow: true,
})
export class KupBadge {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the image displayed inside the badge.
     */
    @Prop() imageData: {} = undefined;
    /**
     * The text displayed inside the badge.
     */
    @Prop() text: string = undefined;

    @Event({
        eventName: 'kupBadgeClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        el: EventTarget;
    }>;

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    //---- Methods ----

    @Method()
    async themeChangeCallback(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
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
        if (this.text === undefined && this.imageData === undefined) {
            let message = 'Empty badge, not rendering!';
            this.kupManager.debug.logMessage(this, message, 'warning');
            return;
        }

        let imageEl: HTMLElement = undefined;

        if (this.text === undefined && this.imageData !== undefined) {
            if (!this.imageData['sizeX']) {
                this.imageData['sizeX'] = '1em';
            }
            if (!this.imageData['sizeY']) {
                this.imageData['sizeY'] = '1em';
            }
            if (!this.imageData['color']) {
                this.imageData['color'] = 'var(--kup-text-on-primary-color)';
            }
            imageEl = <FImage {...this.imageData}></FImage>;
        }

        return (
            <Host>
                <style>{this.kupManager.theme.setCustomStyle(this)}</style>
                <div id="kup-component" onClick={(e) => this.onKupClick(e)}>
                    {this.text}
                    {imageEl}
                </div>
            </Host>
        );
    }

    componentDidUnload() {
        this.kupManager.theme.unregister(this);
    }
}

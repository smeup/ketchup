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
import { FImage } from '../../utils/components/f-image/f-image';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

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
    @Prop() customStyle: string = undefined;
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

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        if (this.text === undefined && this.imageData === undefined) {
            let message = 'Empty badge, not rendering!';
            logMessage(this, message, 'warning');
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
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" onClick={(e) => this.onKupClick(e)}>
                    {this.text}
                    {imageEl}
                </div>
            </Host>
        );
    }
}

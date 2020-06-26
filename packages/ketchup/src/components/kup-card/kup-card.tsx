import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
} from '@stencil/core';
import * as customLayouts from './custom/kup-card-custom';
import * as materialLayouts from './material/kup-card-material';
import { MDCRipple } from '@material/ripple';
import { ComponentCardElement } from './kup-card-declarations';
import { errorLogging } from '../../utils/error-logging';
import { fetchThemeCustomStyle, setCustomStyle } from '../../utils/theming';

@Component({
    tag: 'kup-card',
    styleUrl: 'kup-card.scss',
    shadow: true,
})
export class KupCard {
    @Element() rootElement: HTMLElement;
    @State() refresh: boolean = false;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The actual data of the card.
     */
    @Prop() data: ComponentCardElement = undefined;
    /**
     * Defines whether the card is a menu or not.
     */
    @Prop({ reflect: true }) isMenu: boolean = false;
    /**
     * Sets the type of the card. Currently supported values: "material", "custom".
     */
    @Prop({ reflect: true }) layoutFamily: string = 'material';
    /**
     * Sets the number of the layout.
     */
    @Prop({ reflect: true }) layoutNumber: number = 1;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop({ reflect: true }) menuVisible: boolean = false;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeX: string = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeY: string = '100%';

    private elStyle = undefined;

    @Event({
        eventName: 'kupCardEvent',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEvent: EventEmitter<{
        id: any;
        value: any;
        event: any;
    }>;

    //---- Methods ----

    onKupEvent(e) {
        const root = this.rootElement.shadowRoot;
        if (e.type === 'kupImageLoad') {
            let rippleEl: any = root.querySelector('.mdc-ripple-surface');
            if (rippleEl) {
                MDCRipple.attachTo(rippleEl);
            }
        }

        this.kupEvent.emit({
            id: e.detail.id,
            value: e.detail,
            event: e,
        });
    }

    getLayout() {
        let card: HTMLElement = undefined;
        let method: string = 'create' + this.layoutNumber;

        switch (this.layoutFamily) {
            case 'custom': {
                card = customLayouts[method](this.layoutNumber, this.data);
                break;
            }
            case 'material': {
                card = materialLayouts[method](this.layoutNumber, this.data);
                break;
            }
            default: {
                card = materialLayouts[method](this.layoutNumber, this.data);
                break;
            }
        }

        return card;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        fetchThemeCustomStyle(this, false);

        const root = this.rootElement;

        if (root != undefined) {
            root.addEventListener('kupButtonClick', (e) => {
                this.onKupEvent(e);
            });
            root.addEventListener('kupImageLoad', (e) => {
                this.onKupEvent(e);
            });
        }
    }

    componentDidUnload() {
        const root = this.rootElement.shadowRoot;
        root.removeEventListener('kupButtonClick', (e) => {
            this.onKupEvent(e);
        });
    }

    render() {
        if (
            !this.data ||
            !this.layoutNumber ||
            !this.layoutFamily ||
            this.layoutNumber < 1
        ) {
            let message = 'Data or layout information missing, not rendering!';
            errorLogging(this.rootElement.tagName, message);
            return;
        }
        let wrapperClass = undefined;

        this.elStyle = undefined;
        this.elStyle = {
            height: this.sizeY,
            minHeight: this.sizeY,
            width: this.sizeX,
            minWidth: this.sizeX,
        };

        if (this.isMenu) {
            wrapperClass = 'mdc-menu mdc-menu-surface';

            if (this.menuVisible) {
                wrapperClass += ' visible';
            }
        }

        let card = this.getLayout();

        return (
            <Host style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" class={wrapperClass}>
                    {card}
                </div>
            </Host>
        );
    }
}

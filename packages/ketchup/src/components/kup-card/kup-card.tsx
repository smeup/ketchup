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
import * as collapsibleLayouts from './collapsible/kup-card-collapsible';
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
     * Sets the type of the card. Currently supported values: "material", "custom", "collapsible".
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
    private oldSizeY = undefined;

    @Event({
        eventName: 'kupCardClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: any;
    }>;

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

    onKupClick() {
        this.kupClick.emit({
            id: this.rootElement.id,
        });
    }

    onKupEvent(e) {
        const root = this.rootElement.shadowRoot;

        if (e.type === 'kupImageLoad') {
            let rippleEl: any = root.querySelector('.mdc-ripple-surface');
            if (rippleEl) {
                MDCRipple.attachTo(rippleEl);
            }
        }

        if (e.type === 'kupButtonClick' && e.detail.id === 'expand-action') {
            let collapsibleCard = root.querySelector('.collapsible-card');
            if (!collapsibleCard.classList.contains('expanded')) {
                collapsibleCard.classList.add('expanded');
                this.oldSizeY = this.sizeY;
                this.sizeY = 'auto';
            } else if (this.oldSizeY) {
                collapsibleCard.classList.remove('expanded');
                this.sizeY = this.oldSizeY;
            }
        }

        this.kupEvent.emit({
            id: this.rootElement.id,
            value: e.detail,
            event: e,
        });
    }

    getLayout() {
        let card: HTMLElement = undefined;
        let method: string = 'create' + this.layoutNumber;

        try {
            switch (this.layoutFamily) {
                case 'collapsible': {
                    card = collapsibleLayouts[method](this);
                    break;
                }
                case 'custom': {
                    card = customLayouts[method](this);
                    break;
                }
                case 'material': {
                    card = materialLayouts[method](this);
                    break;
                }
                default: {
                    card = materialLayouts[method](this);
                    break;
                }
            }
        } catch (error) {
            card = (
                <kup-image
                    resource="warning"
                    title="Layout not yet implemented!"
                ></kup-image>
            );
        }

        return card;
    }

    collapsibleManager(
        collapsibleEl: Element,
        collapsibleCard: Element,
        collapsibleWrap: Element
    ) {
        if (!collapsibleCard.classList.contains('expanded')) {
            if (collapsibleEl.clientHeight > collapsibleWrap.clientHeight) {
                if (!collapsibleCard.classList.contains('collapsible-active')) {
                    collapsibleCard.classList.add('collapsible-active');
                }
            } else {
                if (collapsibleCard.classList.contains('collapsible-active')) {
                    collapsibleCard.classList.remove('collapsible-active');
                }
            }
        }
    }

    listenButtonEvents(root: ShadowRoot) {
        root.addEventListener('kupButtonBlur', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupButtonClick', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupButtonFocus', (e) => {
            this.onKupEvent(e);
        });
    }

    listenChipEvents(root: ShadowRoot) {
        root.addEventListener('kupChipBlur', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupChipClick', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupChipFocus', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupChipIconClick', (e) => {
            this.onKupEvent(e);
        });
    }

    listenImageEvents(root: ShadowRoot) {
        root.addEventListener('kupImageClick', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupImageLoad', (e) => {
            this.onKupEvent(e);
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        fetchThemeCustomStyle(this, false);

        const root = this.rootElement.shadowRoot;

        if (root != undefined) {
            for (var key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    switch (key) {
                        case 'button1':
                            this.listenButtonEvents(root);
                            break;
                        case 'chip1':
                            this.listenChipEvents(root);
                            break;
                        case 'image1':
                            this.listenImageEvents(root);
                            break;
                    }
                }
            }
        }
    }

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;
        let collapsibleEl = root.querySelector('.collapsible-element');

        if (collapsibleEl) {
            let collapsibleCard = root.querySelector('.collapsible-card');
            let collapsibleWrap = root.querySelector('.collapsible-wrapper');
            this.collapsibleManager(
                collapsibleEl,
                collapsibleCard,
                collapsibleWrap
            );
            setInterval(() => {
                this.collapsibleManager(
                    collapsibleEl,
                    collapsibleCard,
                    collapsibleWrap
                );
            }, 1000);
        }
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
                <div
                    id="kup-component"
                    class={wrapperClass}
                    onClick={() => this.onKupClick()}
                >
                    {card}
                </div>
            </Host>
        );
    }
}

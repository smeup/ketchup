import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { ResizeObserver } from 'resize-observer';
import * as collapsibleLayouts from './collapsible/kup-card-collapsible';
import * as scalableLayouts from './scalable/kup-card-scalable';
import * as standardLayouts from './standard/kup-card-standard';
import { MDCRipple } from '@material/ripple';
import { ComponentCardElement } from './kup-card-declarations';
import { errorLogging } from '../../utils/error-logging';
import {
    setThemeCustomStyle,
    setCustomStyle,
    colorContrast,
} from '../../utils/theming';

@Component({
    tag: 'kup-card',
    styleUrl: 'kup-card.scss',
    shadow: true,
})
export class KupCard {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization.
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
     * Sets the type of the card. Currently supported values: "collapsible", "scalable", "standard".
     */
    @Prop({ reflect: true }) layoutFamily: string = 'standard';
    /**
     * Sets the number of the layout.
     */
    @Prop({ reflect: true }) layoutNumber: number = 1;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop({ reflect: true }) menuVisible: boolean = false;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     */
    @Prop({ reflect: true }) sizeX: string = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeY: string = '100%';

    private elStyle = undefined;
    private oldSizeY = undefined;
    private scalingActive = false;
    private observer: ResizeObserver = undefined;

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

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

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
                case 'scalable': {
                    card = scalableLayouts[method](this);
                    break;
                }
                case 'standard': {
                    card = standardLayouts[method](this);
                    break;
                }
                default: {
                    card = standardLayouts[method](this);
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

    layoutManager() {
        const root = this.rootElement.shadowRoot;
        let dynColors = root.querySelectorAll('.dyn-color');
        for (let i = 0; i < dynColors.length; i++) {
            this.rootElement.style.setProperty(
                '--dyn-color-' + i,
                colorContrast(
                    window.getComputedStyle(dynColors[i]).backgroundColor
                )
            );
        }

        switch (this.layoutFamily) {
            case 'collapsible':
                this.collapsible();
                break;
            case 'scalable':
                if (!this.scalingActive) {
                    this.scalable();
                }
                break;
            default:
                break;
        }
    }

    collapsible() {
        const root = this.rootElement.shadowRoot;
        let collapsibleEl = root.querySelector('.collapsible-element');
        let collapsibleCard = root.querySelector('.collapsible-card');
        let collapsibleWrap = root.querySelector('.collapsible-wrapper');
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

    async scalable() {
        this.scalingActive = true;
        const root: ShadowRoot = this.rootElement.shadowRoot;
        let scalableEl: HTMLElement = root.querySelector('.scalable-element');
        let scalableCard: HTMLElement = root.querySelector('.scalable-card');
        let multiplierStep: number = 0.1;
        let multiplier: number = parseFloat(
            scalableCard.style.getPropertyValue('--multiplier')
        );
        let cardHeight: number = (75 / 100) * scalableCard.clientHeight;
        let cardWidthLow: number = (40 / 100) * scalableCard.clientWidth;
        let cardWidthHigh: number = (60 / 100) * scalableCard.clientWidth;
        let tooManyAttempts: number = 2000;
        //Cycle to adjust width
        do {
            tooManyAttempts--;
            if (scalableEl.clientWidth < cardWidthLow) {
                multiplier = multiplier + multiplierStep;
                scalableCard.style.setProperty('--multiplier', multiplier + '');
            } else if (scalableEl.clientWidth > cardWidthHigh) {
                multiplier = multiplier - multiplierStep;
                scalableCard.style.setProperty('--multiplier', multiplier + '');
            } else {
                tooManyAttempts = 0;
            }
        } while (
            (scalableEl.clientWidth < cardWidthLow ||
                scalableEl.clientWidth > cardWidthHigh) &&
            tooManyAttempts > 0 &&
            multiplier > multiplierStep
        );
        //Cycle to adjust height
        do {
            multiplier = multiplier - multiplierStep;
            scalableCard.style.setProperty('--multiplier', multiplier + '');
        } while (
            scalableEl.clientHeight > cardHeight &&
            multiplier > multiplierStep
        );
        this.scalingActive = false;
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
        setThemeCustomStyle(this);

        const root = this.rootElement.shadowRoot;

        this.listenButtonEvents(root);
        this.listenChipEvents(root);
        this.listenImageEvents(root);

        this.observer = new ResizeObserver(() => {
            this.layoutManager();
        });
        this.observer.observe(this.rootElement);
    }

    disconnectedCallBack() {
        this.observer.unobserve(this.rootElement);
    }

    componentDidRender() {
        this.layoutManager();
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
            <Host class="handles-custom-style" style={this.elStyle}>
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

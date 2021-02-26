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
import { ResizeObserverCallback } from 'resize-observer/lib/ResizeObserverCallback';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import * as collapsibleLayouts from './collapsible/kup-card-collapsible';
import * as scalableLayouts from './scalable/kup-card-scalable';
import * as standardLayouts from './standard/kup-card-standard';
import { MDCRipple } from '@material/ripple';
import { ComponentCardElement } from './kup-card-declarations';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import {
    setThemeCustomStyle,
    setCustomStyle,
    colorContrast,
} from '../../utils/theme-manager';
import { FImage } from '../../f-components/f-image/f-image';
import { FCheckboxMDC } from '../../f-components/f-checkbox/f-checkbox-mdc';

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
    @Prop() customStyle: string = undefined;
    /**
     * The actual data of the card.
     */
    @Prop() data: ComponentCardElement = undefined;
    /**
     * Defines whether the card is a menu or not.
     */
    @Prop() isMenu: boolean = false;
    /**
     * Sets the type of the card. Currently supported values: "collapsible", "scalable", "standard".
     */
    @Prop() layoutFamily: string = 'standard';
    /**
     * Sets the number of the layout.
     */
    @Prop() layoutNumber: number = 1;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop() menuVisible: boolean = false;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     */
    @Prop() sizeX: string = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop() sizeY: string = '100%';

    private elStyle: {
        [key: string]: string;
    } = undefined;
    private oldSizeY: string = undefined;
    private scalingActive: boolean = false;
    private resObserver: ResizeObserver = undefined;

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
        card: KupCard;
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
            card: this,
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
                default:
                case 'standard': {
                    card = standardLayouts[method](this);
                    break;
                }
            }
        } catch (error) {
            let props = {
                resource: 'warning',
                title: 'Layout not yet implemented!',
            };
            card = <FImage {...props}></FImage>;
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
        if (multiplier < 0.1) {
            multiplier = 1;
        }
        let cardHeight: number = (90 / 100) * scalableCard.clientHeight;
        let cardWidthLow: number = (40 / 100) * scalableCard.clientWidth;
        let cardWidthHigh: number = (75 / 100) * scalableCard.clientWidth;
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
        root.addEventListener('kupButtonClick', (e) => {
            this.onKupEvent(e);
        });
    }

    listenCheckboxEvents(root: ShadowRoot) {
        root.addEventListener('kupCheckboxClick', (e) => {
            this.onKupEvent(e);
        });
    }

    listenChipEvents(root: ShadowRoot) {
        root.addEventListener('kupChipClick', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupChipIconClick', (e) => {
            this.onKupEvent(e);
        });
    }

    listenTextFieldEvents(root: ShadowRoot) {
        root.addEventListener('kupTextFieldClearIconClick', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupTextFieldInput', (e) => {
            this.onKupEvent(e);
        });
        root.addEventListener('kupTextFieldSubmit', (e) => {
            this.onKupEvent(e);
        });
    }

    setObserver() {
        let callback: ResizeObserverCallback = (
            entries: ResizeObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                logMessage(
                    this,
                    'Size changed to x: ' +
                        entry.contentRect.width +
                        ', y: ' +
                        entry.contentRect.height +
                        '.'
                );
                this.layoutManager();
            });
        };
        this.resObserver = new ResizeObserver(callback);
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        const root = this.rootElement.shadowRoot;

        logLoad(this, false);
        this.setObserver();
        setThemeCustomStyle(this);

        this.listenButtonEvents(root);
        this.listenCheckboxEvents(root);
        this.listenChipEvents(root);
        this.listenTextFieldEvents(root);
    }

    componentDidLoad() {
        this.resObserver.observe(this.rootElement);

        let rippleEl: any = this.rootElement.shadowRoot.querySelector(
            '.mdc-ripple-surface'
        );
        if (rippleEl) {
            MDCRipple.attachTo(rippleEl);
        }

        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        this.layoutManager();
        logRender(this, true);
    }

    render() {
        if (
            !this.data ||
            !this.layoutNumber ||
            !this.layoutFamily ||
            this.layoutNumber < 1
        ) {
            let message = 'Data or layout information missing, not rendering!';
            logMessage(this, message, 'warning');
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

    disconnectedCallBack() {
        this.resObserver.unobserve(this.rootElement);
    }
}

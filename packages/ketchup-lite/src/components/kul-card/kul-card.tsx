import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import * as standardLayouts from './standard/kul-card-standard';
import type {
    GenericMap,
    GenericObject,
    KulComponent,
    KulEventPayload,
} from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulCardFamily,
    KulCardProps,
    KulCardEvents,
} from './kul-card-declarations';
import { KulDebugCategory } from '../../managers/kul-debug/kul-debug-declarations';
import { KulLanguageGeneric } from '../../managers/kul-language/kul-language-declarations';
import { getProps, setProps } from '../../utils/utils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDataDataset } from '../../managers/kul-data/kul-data-declarations';

@Component({
    tag: 'kul-card',
    styleUrl: 'kul-card.scss',
    shadow: true,
})
export class KulCard {
    /**
     * References the root HTML element of the component (<kul-card>).
     */
    @Element() rootElement: HTMLKulCardElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * The actual data of the card.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
    /**
     * Sets the type of the card.
     * @default KulCardFamily.STANDARD
     */
    @Prop({ mutable: true, reflect: true }) kulLayoutFamily: KulCardFamily =
        'standard';
    /**
     * Sets the number of the layout.
     * @default 1
     */
    @Prop({ mutable: true, reflect: true }) kulLayoutNumber = 1;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "100%"
     */
    @Prop({ mutable: true, reflect: true }) kulSizeX = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "100%"
     */
    @Prop({ mutable: true, reflect: true }) kulSizeY = '100%';
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the card is clicked.
     */
    @Event({
        eventName: 'kul-card-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event, eventType: KulCardEvents): void {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            eventType,
            originalEvent: e,
        });
    }

    #cardEvent: EventListenerOrEventListenerObject = (e: CustomEvent) => {
        e.stopPropagation();
        this.onKulEvent(e, 'kul-event');
    };

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulCardProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KulCardProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * This method will return the virtual node of the card, selecting the correct layout through layoutFamily and layoutNumber.
     * @returns {VNode} Virtual node of the card for the specified family layout and number.
     */
    getLayout(): VNode {
        const family: KulCardFamily =
            this.kulLayoutFamily.toLowerCase() as KulCardFamily;
        const method: string = 'create' + this.kulLayoutNumber;

        try {
            switch (family) {
                default:
                case 'standard': {
                    return standardLayouts[method](this);
                }
            }
        } catch (error) {
            this.#kulManager.debug.logMessage(
                this,
                error,
                KulDebugCategory.WARNING
            );
            return (
                <kul-image
                    resource="warning"
                    title={
                        this.#kulManager.language.translate(
                            KulLanguageGeneric.LAYOUT_NYI
                        ) + '!'
                    }
                ></kul-image>
            );
        }
    }
    /**
     * Sets the event listeners on the sub-components, in order to properly emit the generic kul-card-event.
     */
    registerListeners(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        root.addEventListener('kul-badge-event', this.#cardEvent);
        root.addEventListener('kul-button-event', this.#cardEvent);
        root.addEventListener('kul-image-event', this.#cardEvent);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.debug.logLoad(this, false);
        this.#kulManager.language.register(this);
        this.#kulManager.theme.register(this);
        this.registerListeners();
    }

    componentDidLoad() {
        const rippleEl: HTMLElement = this.rootElement.shadowRoot.querySelector(
            '.mdc-ripple-surface'
        );
        if (rippleEl) {
            MDCRipple.attachTo(rippleEl);
        }
        this.#kulManager.resize.observe(this.rootElement);
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kulManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kulManager.debug.logRender(this, true);
    }

    render() {
        if (!this.kulData && this.rootElement.children.length < 1) {
            return;
        }

        const style: GenericMap = {
            '--kul_card_height': this.kulSizeY ? this.kulSizeY : '100%',
            '--kul_card_width': this.kulSizeX ? this.kulSizeX : '100%',
        };

        return (
            <Host style={style}>
                <style>
                    {this.#kulManager.theme.setKulStyle(
                        this.rootElement as KulComponent
                    )}
                </style>
                <div
                    id={KUL_WRAPPER_ID}
                    onClick={(e) => this.onKulEvent(e, 'click')}
                >
                    {this.getLayout()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.language.unregister(this);
        this.#kulManager.resize.unobserve(this.rootElement);
        this.#kulManager.theme.unregister(this);
    }
}

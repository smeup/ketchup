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
import * as boxLayouts from './box/kup-card-box';
import * as builtInLayouts from './built-in/kup-card-built-in';
import * as collapsibleLayouts from './collapsible/kup-card-collapsible';
import * as dialogLayouts from './dialog/kup-card-dialog';
import * as freeLayouts from './free/kup-card-free';
import * as scalableLayouts from './scalable/kup-card-scalable';
import * as standardLayouts from './standard/kup-card-standard';
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import Picker from 'vanilla-picker';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupCardData,
    KupCardFamily,
    KupCardCSSClasses,
    KupCardEventPayload,
    KupCardIds,
    KupCardProps,
    KupCardClickPayload,
    KupCardColorPickerOptions,
} from './kup-card-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { layoutSpecificEvents } from './kup-card-helper';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-card',
    styleUrl: 'kup-card.scss',
    shadow: true,
})
export class KupCard {
    /**
     * References the root HTML element of the component (<kup-card>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The actual data of the card.
     * @default null
     */
    @Prop() data: KupCardData = null;
    /**
     * Defines whether the card is a menu or not.
     * Works together with menuVisible.
     * @default false
     */
    @Prop({ reflect: true }) isMenu: boolean = false;
    /**
     * Sets the type of the card.
     * @default KupCardFamily.STANDARD
     */
    @Prop() layoutFamily: KupCardFamily = KupCardFamily.STANDARD;
    /**
     * Sets the number of the layout.
     * @default 1
     */
    @Prop() layoutNumber: number = 1;
    /**
     * Sets the status of the card as menu, when false it's hidden otherwise it's visible.
     * Works together with isMenu.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) menuVisible: boolean = false;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "100%"
     */
    @Prop() sizeX: string = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "100%"
     */
    @Prop() sizeY: string = '100%';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * kup-card-event callback.
     */
    private cardEvent: EventListenerOrEventListenerObject = (
        e: CustomEvent
    ) => {
        e.stopPropagation();
        this.onKupEvent(e);
    };
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Previous height of the component, tested when the card is collapsible.
     */
    oldSizeY: string;
    /**
     * Used to prevent too many resizes callbacks at once.
     */
    private resizeTimeout: number;
    /**
     * Prevents multiple scaling callbacks when the card is scalable.
     */
    private scalingActive: boolean = false;
    private componentWrapper: HTMLElement = null;
    private colorPicker: Picker = null;
    private firstColorPickerChange: boolean = true;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the card is clicked.
     */
    @Event({
        eventName: 'kup-card-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupCardClickPayload>;
    /**
     * Triggered when a dialog card is closed with the "X".
     */
    @Event({
        eventName: 'kup-card-close',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClose: EventEmitter<KupEventPayload>;
    /**
     * Triggered when a sub-component of the card emits an event.
     */
    @Event({
        eventName: 'kup-card-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEvent: EventEmitter<KupCardEventPayload>;
    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-card-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    onKupClick(id: string, value: string): void {
        this.kupClick.emit({
            comp: this,
            id: id,
            value: value,
        });
    }

    onKupClose(id: string): void {
        this.kupClose.emit({
            comp: this,
            id: id,
        });
        this.rootElement.remove();
    }

    onKupEvent(e: CustomEvent): void {
        layoutSpecificEvents(this, e);
        this.kupEvent.emit({
            comp: this,
            id: this.rootElement.id,
            event: e,
        });
    }

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
        return getProps(this, KupCardProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(() => {
            this.layoutManager();
        }, 300);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupCardProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Set the events of the component.
     */
    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            // The dialog "X" button.
            const dialogClose: HTMLElement = root.querySelector(
                '#' + KupCardIds.DIALOG_CLOSE
            );
            if (dialogClose) {
                dialogClose.onclick = () =>
                    this.onKupClose(KupCardIds.DIALOG_CLOSE);
            }
            // When an element can be clicked. Ideally anchors/links.
            const links: NodeListOf<HTMLElement> = root.querySelectorAll(
                '.' + KupCardCSSClasses.CLICKABLE_LINK
            );
            for (let index = 0; index < links.length; index++) {
                const link: HTMLElement = links[index];
                link.onclick = (e) => {
                    e.stopPropagation();
                    this.onKupClick(link.id, null);
                };
            }
        }
    }

    /**
     * This method is invoked by the layout manager when the layout family is collapsible.
     * When the card is not expanded and the collapsible content fits the wrapper, the bottom bar won't be displayed.
     */
    collapsible(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        const el: HTMLElement = root.querySelector(
            '.' + KupCardCSSClasses.COLLAPSIBLE_ELEMENT
        );
        const card: HTMLElement = root.querySelector(
            '.' + KupCardCSSClasses.COLLAPSIBLE_CARD
        );
        const wrapper: HTMLElement = root.querySelector(
            '.' + KupCardCSSClasses.COLLAPSIBLE_WRAPPER
        );
        if (!card.classList.contains(KupCardCSSClasses.EXPANDED)) {
            if (el.clientHeight > wrapper.clientHeight) {
                if (
                    !card.classList.contains(
                        KupCardCSSClasses.COLLAPSIBLE_ACTIVE
                    )
                ) {
                    card.classList.add(KupCardCSSClasses.COLLAPSIBLE_ACTIVE);
                }
            } else {
                if (
                    card.classList.contains(
                        KupCardCSSClasses.COLLAPSIBLE_ACTIVE
                    )
                ) {
                    card.classList.remove(KupCardCSSClasses.COLLAPSIBLE_ACTIVE);
                }
            }
        }
    }
    /**
     * This method will return the virtual node of the card, selecting the correct layout through layoutFamily and layoutNumber.
     * @returns {VNode} Virtual node of the card for the specified family layout and number.
     */
    getLayout(): VNode {
        const family: string = this.layoutFamily.toLowerCase();
        const method: string = 'create' + this.layoutNumber;

        try {
            switch (family) {
                case KupCardFamily.BOX: {
                    return boxLayouts[method](this);
                }
                case KupCardFamily.BUILT_IN: {
                    return builtInLayouts[method](this);
                }
                case KupCardFamily.COLLAPSIBLE: {
                    return collapsibleLayouts[method](this);
                }
                case KupCardFamily.DIALOG: {
                    return dialogLayouts[method](this);
                }
                case KupCardFamily.FREE: {
                    return freeLayouts[method](this);
                }
                case KupCardFamily.SCALABLE: {
                    return scalableLayouts[method](this);
                }
                default:
                case KupCardFamily.STANDARD: {
                    return standardLayouts[method](this);
                }
            }
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                error,
                KupDebugCategory.WARNING
            );
            let props = {
                resource: 'warning',
                title:
                    this.kupManager.language.translate(
                        KupLanguageGeneric.LAYOUT_NYI
                    ) + '!',
            };
            return <FImage {...props}></FImage>;
        }
    }
    /**
     * This method is invoked by the layout manager when the layout family is dialog.
     * It will "dialogify" the card.
     */
    dialog(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const card: HTMLElement = this.rootElement as HTMLElement;
            const dragHandle: HTMLElement = root.querySelector(
                '#' + KupCardIds.DRAG_HANDLE
            );
            const unresizable: boolean = !!root.querySelector(
                '.' + KupCardCSSClasses.DIALOG_UNRESIZABLE
            );
            if (!this.kupManager.interact.isRegistered(card)) {
                this.kupManager.interact.dialogify(
                    card,
                    dragHandle ? dragHandle : null,
                    {
                        unresizable: unresizable,
                    }
                );
            }
        }
    }
    /**
     * This method is invoked by the layout manager when the layout family is built-in.
     */
    builtIn(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const builtinLayout: HTMLElement = root.querySelector(
                '.' + KupCardCSSClasses.BUILT_IN_CARD
            );
            switch (this.layoutNumber) {
                case 4:
                    const colorPickerOptions: KupCardColorPickerOptions =
                        this.data && this.data.options
                            ? (this.data.options as KupCardColorPickerOptions)
                            : null;
                    const color = colorPickerOptions
                        ? colorPickerOptions.initialValue
                        : null;
                    if (!this.colorPicker) {
                        this.colorPicker = new Picker({
                            alpha: false,
                            color: color,
                            parent: builtinLayout,
                            popup: false,
                            onChange:
                                colorPickerOptions &&
                                colorPickerOptions.changeCb
                                    ? (color) => {
                                          if (!this.firstColorPickerChange) {
                                              colorPickerOptions.changeCb(
                                                  color
                                              );
                                          }
                                          this.firstColorPickerChange = false;
                                      }
                                    : null,
                        });
                        if (
                            colorPickerOptions &&
                            colorPickerOptions.creationCb
                        ) {
                            colorPickerOptions.creationCb(this.colorPicker);
                        }
                    }
                    break;
            }
        }
    }
    /**
     * This method will trigger whenever the card's render() hook occurs or when the size changes (through KupManager), in order to manage the more complex layout families.
     * It will also update any dynamic color handled by the selected layout.
     */
    layoutManager(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (this.componentWrapper) {
            const family: string = this.layoutFamily.toLowerCase();
            const dynColors: NodeListOf<HTMLElement> =
                root.querySelectorAll('.dyn-color');
            for (let index = 0; index < dynColors.length; index++) {
                this.rootElement.style.setProperty(
                    '--kup_card_dynamic_color_' + index,
                    this.kupManager.theme.colorContrast(
                        window.getComputedStyle(dynColors[index])
                            .backgroundColor
                    )
                );
            }
            const autoscroll = root.querySelectorAll(
                '.' + KupCardCSSClasses.AUTOSCROLL
            );
            if (autoscroll && autoscroll.length) {
                autoscroll.forEach((el) => {
                    el.scrollTop = el.scrollHeight;
                });
            }
            switch (family) {
                case KupCardFamily.COLLAPSIBLE:
                    this.collapsible();
                    break;
                case KupCardFamily.DIALOG:
                    this.dialog();
                    break;
                case KupCardFamily.BUILT_IN:
                    this.builtIn();
                    break;
                case KupCardFamily.SCALABLE:
                    if (!this.scalingActive) {
                        this.scalable();
                    }
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * Sets the event listeners on the sub-components, in order to properly emit the generic kup-card-event.
     */
    registerListeners(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        root.addEventListener('kup-autocomplete-blur', this.cardEvent);
        root.addEventListener('kup-autocomplete-change', this.cardEvent);
        root.addEventListener('kup-autocomplete-input', this.cardEvent);
        root.addEventListener('kup-autocomplete-itemclick', this.cardEvent);
        root.addEventListener('kup-button-click', this.cardEvent);
        root.addEventListener('kup-checkbox-change', this.cardEvent);
        root.addEventListener('kup-chip-blur', this.cardEvent);
        root.addEventListener('kup-chip-click', this.cardEvent);
        root.addEventListener('kup-chip-iconclick', this.cardEvent);
        root.addEventListener('kup-combobox-change', this.cardEvent);
        root.addEventListener('kup-combobox-itemclick', this.cardEvent);
        root.addEventListener('kup-datatable-cellupdate', this.cardEvent);
        root.addEventListener('kup-datatable-rowselected', this.cardEvent);
        root.addEventListener('kup-datepicker-cleariconclick', this.cardEvent);
        root.addEventListener('kup-datepicker-input', this.cardEvent);
        root.addEventListener('kup-datepicker-change', this.cardEvent);
        root.addEventListener('kup-datepicker-itemclick', this.cardEvent);
        root.addEventListener('kup-datepicker-textfieldsubmit', this.cardEvent);
        root.addEventListener('kup-dropdownbutton-itemclick', this.cardEvent);
        root.addEventListener('kup-list-click', this.cardEvent);
        root.addEventListener('kup-switch-change', this.cardEvent);
        root.addEventListener('kup-tabbar-click', this.cardEvent);
        root.addEventListener('kup-textfield-cleariconclick', this.cardEvent);
        root.addEventListener('kup-textfield-change', this.cardEvent);
        root.addEventListener('kup-textfield-input', this.cardEvent);
        root.addEventListener('kup-textfield-submit', this.cardEvent);
        root.addEventListener('kup-timepicker-cleariconclick', this.cardEvent);
        root.addEventListener('kup-timepicker-input', this.cardEvent);
        root.addEventListener('kup-timepicker-itemclick', this.cardEvent);
        root.addEventListener('kup-timepicker-textfieldsubmit', this.cardEvent);
        root.addEventListener('kup-tree-dynamicmassexpansion', this.cardEvent);
        root.addEventListener('kup-tree-buttonclick', this.cardEvent);
        root.addEventListener('kup-tree-didunload', this.cardEvent);
        root.addEventListener('kup-tree-nodecollapse', this.cardEvent);
        root.addEventListener('kup-tree-nodedblclick', this.cardEvent);
        root.addEventListener('kup-tree-nodeexpand', this.cardEvent);
        root.addEventListener('kup-tree-nodeselected', this.cardEvent);
    }
    /**
     * This method is invoked by the layout manager when the layout family is scalable.
     * The content of the card (.scalable-element) will be resized to fit the wrapper (kup-card).
     * The scaling is performed by using a CSS variable (--kup_card_scalable_multiplier) which will impact the card's font-size.
     * When there is empty space, the multiplier will be increased, as will the content.
     * Viceversa, when the content exceeds the boundaries, the multiplier will be decreased.
     */
    async scalable() {
        this.scalingActive = true;
        const root: ShadowRoot = this.rootElement.shadowRoot;
        const el: HTMLElement = root.querySelector('.scalable-element');
        const card: HTMLElement = this.rootElement;
        /**
         * cardHeight sets the maximum height of the content, when exceeded the multiplier will be reduced (90%).
         */
        const cardHeight = (90 / 100) * card.clientHeight;
        /**
         * cardWidthLow and cardWidthHigh will set the boundaries in which the component must fit (85% - 95%).
         */
        const cardWidthLow = (85 / 100) * card.clientWidth;
        const cardWidthHigh = (95 / 100) * card.clientWidth;
        const multiplierStep = 0.1;
        let tooManyAttempts = 75;
        let multiplier = 1;
        let redrawCount = 0;
        const redraw = async () => {
            card.style.setProperty(
                '--kup_card_scalable_multiplier',
                multiplier.toFixed(1) + ''
            );
            this.kupManager.debug.logMessage(
                this,
                'Redrawing scalable card (' + ++redrawCount + ').',
                KupDebugCategory.INFO
            );
        };
        const roundMultiplier = (m: number) => {
            return parseFloat(m.toFixed(1));
        };
        card.style.opacity = '0';
        card.style.transition = 'opacity 125ms ease-in';
        /**
         * Cycle to adjust the width.
         */
        await redraw();
        while (
            (el.clientWidth < cardWidthLow || el.clientWidth > cardWidthHigh) &&
            tooManyAttempts > 0 &&
            multiplier > multiplierStep
        ) {
            tooManyAttempts--;
            if (
                el.clientWidth < cardWidthLow &&
                el.clientHeight <= cardHeight
            ) {
                multiplier = roundMultiplier(multiplier + multiplierStep);
                await redraw();
            } else if (el.clientWidth > cardWidthHigh) {
                multiplier = roundMultiplier(multiplier - multiplierStep);
                await redraw();
            } else {
                tooManyAttempts = 0;
            }
        }
        card.style.opacity = '1';
        this.scalingActive = false;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.registerListeners();
    }

    componentDidLoad() {
        const rippleEl: HTMLElement = this.rootElement.shadowRoot.querySelector(
            '.mdc-ripple-surface'
        );
        if (rippleEl) {
            MDCRipple.attachTo(rippleEl);
        }
        this.kupManager.resize.observe(this.rootElement);
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.setEvents();
        this.layoutManager();
        if (
            this.isMenu &&
            this.menuVisible &&
            (!document.activeElement ||
                document.activeElement.tagName === 'BODY')
        ) {
            setTimeout(() => {
                this.rootElement.focus();
            }, 0);
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data && this.rootElement.children.length < 1) {
            return;
        }

        const style: GenericObject = {
            '--kup_card_height': this.sizeY ? this.sizeY : '100%',
            '--kup_card_width': this.sizeX ? this.sizeX : '100%',
        };

        return (
            <Host style={style}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    onClick={() => this.onKupClick(null, null)}
                    ref={(el) => (this.componentWrapper = el)}
                >
                    {this.getLayout()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.interact.unregister([this.rootElement]);
        this.kupManager.language.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
    }
}

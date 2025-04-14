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
    State,
    VNode,
    Watch,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import {
    GenericObject,
    KupComponent,
    KupComponentSizing,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import {
    KupAccordionProps,
    KupAccordionNode,
    KupAccordionEventPayload,
} from './kup-accordion-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupThemeColorValues,
    KupThemeIconValues,
} from '../../managers/kup-theme/kup-theme-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
    KupDynamicPositionPlacement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';

@Component({
    tag: 'kup-accordion',
    styleUrl: 'kup-accordion.scss',
    shadow: true,
})
export class KupAccordion {
    /**
     * References the root HTML element of the component (<kup-accordion>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Names of the selected items
     * @default []
     */
    @State() private selectedItems: string[] = [];

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
     * Data of the accordion.
     * @default null
     */
    @Prop() data: KupAccordionNode[] = null;
    /**
     * When true, it will show the info activation icon.
     * @default false
     */
    @Prop() infoIcon: boolean = false;
    /**
     * When enabled displays Material's ripple effect on item headers.
     * @default true
     */
    @Prop() ripple: boolean = false;
    /**
     * When true, it will show the toolbar activation icon.
     * @default false
     */
    @Prop() toolbar: boolean = false;
    /**
     * Sets the type of the component sizing
     * @default KupComponentSizing.SMALL
     */
    @Prop() sizing: KupComponentSizing = KupComponentSizing.SMALL;

    @Prop() toolbarCallback: () => Promise<KupDataNode[]>;
    @Prop() infoCallback: () => Promise<KupDataNode[]>;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    toolbarState: KupDataNode[] = [];
    infoState: KupDataNode[] = [];

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    #clickCbDropCard: KupManagerClickCb = null;
    /**
     * Instance of the KupManager class.
     */
    private slotsNames: string[] = [];

    /**
     * Toolbar List.
     */
    private toolbarList: KupDynamicPositionElement;
    private infoList: KupDynamicPositionElement;

    #dropDownActionCardAnchor: HTMLElement = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the accordion loses focus.
     */
    @Event({
        eventName: 'kup-accordion-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupAccordionEventPayload>;

    /**
     * Triggered when an item is selected.
     */
    @Event({
        eventName: 'kup-accordion-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupAccordionEventPayload>;

    /**
     * Triggered when the icon inside accordion is clicked.
     */
    @Event({
        eventName: 'kup-accordion-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupAccordionEventPayload>;

    /**
     * Triggered when the icon inside accordion is clicked.
     */
    @Event({
        eventName: 'kup-accordion-infoiconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInfoIconClick: EventEmitter<KupAccordionEventPayload>;

    /**
     * Triggered when the accordion is focused.
     */
    @Event({
        eventName: 'kup-accordion-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupAccordionEventPayload>;

    /**
     * Triggered when a list item is clicked.
     */
    @Event({
        eventName: 'kup-accordion-toolbaritemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupToolbarItemClick: EventEmitter<KupAccordionEventPayload>;

    onKupBlur(node: KupAccordionNode) {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            node: node,
        });
    }

    onKupClick(i: number, node: KupAccordionNode) {
        this.data[i].contentVisible = !this.data[i].contentVisible;
        this.updateSelectedItems();

        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            node: node,
        });
    }

    onKupIconClick(el: HTMLElement) {
        if (!el) {
            this.kupManager.debug.logMessage(
                this,
                'onKupIconClick: Element is null'
            );
            return;
        }
        this.#dropDownActionCardAnchor = el;
        this.createDropDownToolbarList();
    }

    onKupInfoIconClick(el: HTMLElement) {
        if (!el) {
            this.kupManager.debug.logMessage(
                this,
                'onKupIconClick: Element is null'
            );
            return;
        }
        this.#dropDownActionCardAnchor = el;
        this.createDropDownInfoList();
    }

    onKupFocus(node: KupAccordionNode) {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            node: node,
        });
    }

    onKupToolbarItemClick(e: CustomEvent) {
        this.kupToolbarItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            node: e.detail.selected,
        });
    }
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('ripple')
    applyRipple() {
        const root = this.rootElement.shadowRoot;
        if (root && this.ripple) {
            const rippleCells = root.querySelectorAll(
                '.mdc-ripple-surface:not(.mdc-ripple-upgraded)'
            );
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * This method collapses all expandible items.
     */
    @Method()
    async collapseAll(): Promise<void> {
        const ids: string[] = [];

        for (let i = 0; i < this.data.length; i++) {
            const node = this.data[i];
            const itemName = node.id;
            if (
                !this.isItemExpandible(itemName) &&
                this.isItemSelected(itemName)
            ) {
                ids.push(itemName);
            }
        }

        this.selectedItems = ids;
    }
    /**
     * This method expands all expandible items.
     */
    @Method()
    async expandAll(): Promise<void> {
        const ids: string[] = [];

        for (let i = 0; i < this.data.length; i++) {
            const node = this.data[i];
            const itemName = node.id;
            if (this.isItemExpandible(itemName)) {
                ids.push(itemName);
            }
        }

        this.selectedItems = ids;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupAccordionProps, descriptions);
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
        setProps(this, KupAccordionProps, props);
    }
    /**
     * This method activates or deactivates an item
     * @param {string} itemName - Name of the item.
     */
    @Method()
    async toggleItem(node: KupAccordionNode) {
        const ids: string[] = [...this.selectedItems];
        if (ids.includes(node.id)) {
            ids.splice(ids.indexOf(node.id), 1);
        } else {
            ids.push(node.id);
        }
        this.selectedItems = ids;

        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            node: node,
        });
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private updateSelectedItems() {
        const ids: string[] = [];
        for (let i = 0; i < this.data.length; i++) {
            const node = this.data[i];
            if (node.contentVisible) {
                ids.push(node.id);
            }
        }
        this.selectedItems = ids;
    }

    private isItemExpandible(itemName: string): boolean {
        return this.slotsNames.includes(itemName);
    }

    private isItemSelected(itemName: string): boolean {
        return this.selectedItems.includes(itemName);
    }

    private renderItems(): VNode[] {
        const items: VNode[] = [];
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        this.slotsNames = [];
        for (let index = 0; index < slots.length; index++) {
            const slot = slots[index];
            this.slotsNames.push(slot.slot);
        }

        for (let i = 0; i < this.data.length; i++) {
            const node: KupAccordionNode = this.data[i];
            const itemName: string = node.id;
            const isItemSelected: boolean = this.isItemSelected(itemName);
            const isItemExpandible: boolean = this.isItemExpandible(itemName);

            const itemHeaderClass: GenericObject = {
                'accordion-item__header': true,
                'accordion-item__header--selected':
                    !isItemExpandible && isItemSelected ? true : false,
                'accordion-item__header--expanded':
                    isItemExpandible && isItemSelected ? true : false,
                'mdc-ripple-surface': this.ripple ? true : false,
                [`accordion-item--${this.sizing}`]: this.sizing ? true : false,
            };

            const itemContentClass: GenericObject = {
                'accordion-item__content': true,
                'accordion-item__content--selected': isItemSelected
                    ? true
                    : false,
            };

            const wrapper = (
                <div class="accordion-rigtbuttons">
                    {this.infoIcon && (
                        <FImage
                            resource="info_outline"
                            sizeX="16px"
                            sizeY="16px"
                            onClick={async (event: MouseEvent) => {
                                event.stopPropagation();
                                const el = event.currentTarget as HTMLElement;
                                const data = await this.infoCallback();
                                this.infoState = data;
                                if (this.infoState.length > 0) {
                                    this.onKupInfoIconClick(el);
                                } else {
                                    this.kupManager.debug.logMessage(
                                        this,
                                        'InfoIcon data is empty, not opening dropdown.'
                                    );
                                }
                            }}
                            wrapperClass="tab__iconToolbar iconInfo"
                        />
                    )}
                    {this.toolbar && (
                        <FImage
                            resource="more_vert"
                            sizeX="16px"
                            sizeY="16px"
                            onClick={async (event: MouseEvent) => {
                                event.stopPropagation();
                                const el = event.currentTarget as HTMLElement;
                                const data = await this.toolbarCallback();
                                this.toolbarState = data;
                                if (this.toolbarState.length > 0) {
                                    this.onKupIconClick(el);
                                } else {
                                    this.kupManager.debug.logMessage(
                                        this,
                                        'Toolbar data is empty, not opening dropdown.'
                                    );
                                }
                            }}
                            wrapperClass="tab__iconToolbar iconToolbar"
                        ></FImage>
                    )}
                    {isItemExpandible ? (
                        <div
                            class={`accordion-item__dropdown kup-icon ${KupThemeIconValues.DROPDOWN.replace(
                                '--',
                                ''
                            )}`}
                        />
                    ) : null}
                </div>
            );

            items.push(
                <div class="accordion-item">
                    <div
                        tabindex={i}
                        title={node.title ?? null}
                        class={itemHeaderClass}
                        onClick={() => this.toggleItem(node)}
                        onBlur={() => this.onKupBlur(node)}
                        // onClick={() => this.onKupClick(i, node)}
                        onFocus={() => this.onKupFocus(node)}
                    >
                        {node.icon ? (
                            <FImage
                                color={`var(${KupThemeColorValues.PRIMARY})`}
                                resource={node.icon}
                                placeholderResource={node.placeholderIcon}
                                sizeX="1.5em"
                                sizeY="1.5em"
                                wrapperClass="accordion-item__icon"
                            />
                        ) : null}
                        {node.value ? (
                            <span class="accordion-item__text">
                                {node.value ?? ''}
                            </span>
                        ) : null}
                        {wrapper}
                    </div>
                    <div class={itemContentClass}>
                        <slot name={node.id}></slot>
                    </div>
                </div>
            );
        }
        return items;
    }

    closeRowToolbarList() {
        if (this.toolbarList) {
            this.kupManager.dynamicPosition.stop(
                this.toolbarList as unknown as KupDynamicPositionElement
            );
            this.kupManager.removeClickCallback(this.#clickCbDropCard);
            this.toolbarList.remove();
            this.kupManager.dynamicPosition.unregister([this.toolbarList]);
            this.toolbarList = null;
        }
    }

    /**
     * Create dropdown list for toolbar
     */
    createDropDownToolbarList() {
        if (!this.#dropDownActionCardAnchor) {
            this.kupManager.debug.logMessage(
                this,
                'createDropDownToolbarList: Anchor is null!'
            );
            return;
        }
        if (this.toolbarList) {
            this.closeRowToolbarList();
        }
        if (this.toolbarState.length === 0) {
            this.kupManager.debug.logMessage(
                this,
                'No toolbar state available.'
            );
            return;
        }
        const listEl = document.createElement('kup-toolbar');
        listEl.data = this.toolbarState;
        listEl.addEventListener('kup-toolbar-click', (e: CustomEvent) => {
            this.onKupToolbarItemClick(e);
            setTimeout(() => {
                this.closeRowToolbarList();
            }, 0);
        });
        this.toolbarList = listEl;
        this.#clickCbDropCard = {
            cb: () => {
                this.closeRowToolbarList();
            },
            el: this.toolbarList,
        };

        this.kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.rootElement.shadowRoot.appendChild(this.toolbarList);
        requestAnimationFrame(() => {
            if (!this.#dropDownActionCardAnchor) {
                this.kupManager.debug.logMessage(
                    this,
                    'DropDown anchor is still null after delay!'
                );
                return;
            }
            this.kupManager.dynamicPosition.register(
                this.toolbarList as unknown as KupDynamicPositionElement,
                this.#dropDownActionCardAnchor as KupDynamicPositionAnchor,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
            this.kupManager.dynamicPosition.start(
                this.toolbarList as unknown as KupDynamicPositionElement
            );
        });
    }

    /**
     * Create dropdown list for tab info icon
     */
    createDropDownInfoList() {
        if (!this.#dropDownActionCardAnchor) {
            this.kupManager.debug.logMessage(
                this,
                'createDropDownToolbarList: Anchor is null!'
            );
            return;
        }
        if (this.infoList) {
            this.closeInfoDataList();
        }
        if (this.infoState.length === 0) {
            this.kupManager.debug.logMessage(
                this,
                'No toolbar state available.'
            );
            return;
        }
        const listEl = document.createElement('kup-list');
        listEl.data = this.infoState;
        this.infoList = listEl;
        this.#clickCbDropCard = {
            cb: () => {
                this.closeInfoDataList();
            },
            el: this.infoList,
        };

        this.kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.rootElement.shadowRoot.appendChild(this.infoList);
        requestAnimationFrame(() => {
            this.kupManager.dynamicPosition.register(
                this.infoList,
                this.#dropDownActionCardAnchor as KupDynamicPositionAnchor,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
            this.kupManager.dynamicPosition.start(
                this.infoList as unknown as KupDynamicPositionElement
            );
        });
    }

    /**
     * Destroy dropdown list for tab info icon
     */
    closeInfoDataList() {
        if (this.infoList) {
            this.kupManager.dynamicPosition.stop(
                this.infoList as KupDynamicPositionElement
            );
            this.kupManager.removeClickCallback(this.#clickCbDropCard);
            this.infoList.remove();
            this.kupManager.dynamicPosition.unregister([this.infoList]);
            this.infoList = null;
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.updateSelectedItems();
        this.applyRipple();
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            const rippleCells = root.querySelectorAll('.mdc-ripple-surface');
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const content: VNode[] =
            this.data && this.data.length ? this.renderItems() : null;

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="accordion">{content}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

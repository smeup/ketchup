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
    KupTabBarNode,
    KupTabBarEventPayload,
    KupTabBarProps,
    KupTabbarStyling,
} from './kup-tab-bar-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { KupScrollOnHoverElement } from '../../managers/kup-scroll-on-hover/kup-scroll-on-hover-declarations';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
    KupDynamicPositionPlacement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupToolbarItemClickEventPayload } from '../../components/kup-toolbar/kup-toolbar-declarations';

@Component({
    tag: 'kup-tab-bar',
    styleUrl: 'kup-tab-bar.scss',
    shadow: true,
})
export class KupTabBar {
    /**
     * References the root HTML element of the component (<kup-tab-bar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() value: string = '';

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
     * List of elements.
     * @default null
     */
    @Prop() data: KupTabBarNode[] = null;
    /**
     * When enabled displays toolbar item inside each single tab.
     * @default false
     */
    @Prop() infoIcon: boolean = false;
    /**
     * List of elements.
     * @default KupTabbarStyling.FLAT
     */
    @Prop() variant: KupTabbarStyling = KupTabbarStyling.FLAT;
    /**
     * Defaults at false. When set to true, the component is dense.
     * @default false
     */
    @Prop() dense: boolean = false;
    /**
     * When enabled displays Material's ripple effect on item headers.
     * @default true
     */
    @Prop() ripple: boolean = false;

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
     * Element scrollable on mouse hover.
     */
    private scrollArea: KupScrollOnHoverElement = null;
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
     * Triggered when the tab loses focus.
     */
    @Event({
        eventName: 'kup-tabbar-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupTabBarEventPayload>;

    /**
     * Triggered when the tab is clicked.
     */
    @Event({
        eventName: 'kup-tabbar-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupTabBarEventPayload>;

    /**
     * Triggered when the icon inside tab is clicked.
     */
    @Event({
        eventName: 'kup-tabbar-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupTabBarEventPayload>;

    /**
     * Triggered when the tab is focused.
     */
    @Event({
        eventName: 'kup-tabbar-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupTabBarEventPayload>;

    /**
     * Triggered when a list item is clicked.
     */
    @Event({
        eventName: 'kup-tabbar-toolbaritemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupToolbarItemClick: EventEmitter<KupToolbarItemClickEventPayload>;

    onKupBlur(i: number, node: KupTabBarNode) {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            index: i,
            node: node,
        });
    }

    onKupClick(i: number, node: KupTabBarNode) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i].active = false;
        }
        this.data[i].active = true;
        this.value = node.id;

        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            index: i,
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

    onKupFocus(i: number, node: KupTabBarNode) {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            index: i,
            node: node,
        });
    }

    onKupToolbarItemClick(e: CustomEvent) {
        this.kupToolbarItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
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
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupTabBarProps, descriptions);
    }
    /**
     * Returns the selected node.
     * @returns {Promise<KupTabBarNode>} Selected node.
     */
    @Method()
    async getSelectedNode(): Promise<KupTabBarNode> {
        let res: KupTabBarNode = null;
        this.data.forEach((node) => {
            if (node.id === this.value) {
                res = node;
            }
        });
        return res;
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
        setProps(this, KupTabBarProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

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

    private consistencyCheck() {
        let activeTabs: number = 0;
        let lastActiveOccurrence: number = 0;
        if (this.data && this.data.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].active) {
                    activeTabs++;
                    lastActiveOccurrence = i;
                }
                this.data[i].active = false;
            }
            if (activeTabs > 1) {
                this.data[lastActiveOccurrence].active = true;
                this.value = this.data[lastActiveOccurrence].id;
                this.kupManager.debug.logMessage(
                    this,
                    'Too many active tabs, forcing last one.',
                    KupDebugCategory.WARNING
                );
            } else if (activeTabs === 0) {
                this.data[0].active = true;
                this.value = this.data[0].id;
                this.kupManager.debug.logMessage(
                    this,
                    'No active tabs detected, forcing first one.'
                );
            } else {
                this.data[lastActiveOccurrence].active = true;
                this.value = this.data[lastActiveOccurrence].id;
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.consistencyCheck();
    }

    componentDidLoad() {
        this.kupManager.scrollOnHover.register(this.scrollArea);
        this.applyRipple();
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data || this.data.length === 0) {
            return;
        }

        const tabBar: Array<VNode> = [];

        for (let i = 0; i < this.data.length; i++) {
            const node: KupTabBarNode = this.data[i];
            const tabClass: Record<string, boolean> = {
                tab: true,
                'tab--active': node.active ? true : false,
                'mdc-ripple-surface': this.ripple ? true : false,
                'kup-dense': this.dense,
                'kup-danger': node.danger,
            };

            const tabEl: VNode = (
                <f-button
                    class={tabClass}
                    role="tab"
                    aria-selected={node.active ? true : false}
                    tabIndex={i}
                    title={node.title ? node.title : null}
                    onBlur={() => this.onKupBlur(i, node)}
                    onClick={() => this.onKupClick(i, node)}
                    onFocus={() => this.onKupFocus(i, node)}
                >
                    <span class="tab__content">
                        {node.icon ? (
                            <FImage
                                color={`var(${KupThemeColorValues.PRIMARY})`}
                                resource={node.icon}
                                placeholderResource={node.placeholderIcon}
                                wrapperClass="tab__icon"
                            />
                        ) : null}
                        {node.value ? (
                            <span class="tab__text-label">{node.value}</span>
                        ) : null}
                    </span>
                    {this.infoIcon && (
                        <FImage
                            resource="info_outline"
                            sizeX="16px"
                            sizeY="16px"
                            onClick={async (event: MouseEvent) => {
                                if (node.active) {
                                    event.stopPropagation();
                                    const el =
                                        event.currentTarget as HTMLElement;
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
                                }
                            }}
                            wrapperClass="tab__iconToolbar iconInfo"
                        />
                    )}
                    {node?.toolbar && (
                        <FImage
                            resource="more_vert"
                            sizeX="16px"
                            sizeY="16px"
                            onClick={async (event: MouseEvent) => {
                                if (node.active) {
                                    event.stopPropagation();
                                    const el =
                                        event.currentTarget as HTMLElement;
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
                                }
                            }}
                            wrapperClass="tab__iconToolbar iconToolbar"
                        ></FImage>
                    )}
                    <span
                        class={`tab-indicator ${
                            node.active ? ' tab-indicator--active' : ''
                        }`}
                    >
                        <span class="tab-indicator__content tab-indicator__content--underline"></span>
                    </span>
                </f-button>
            );
            tabBar.push(tabEl);
        }

        const tabbarRole: Record<string, boolean> = {
            'tab-bar': true,
            [`tab-bar--${this.variant}`]: this.variant ? true : false,
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class={tabbarRole} role="tablist">
                        <div class="tab-scroller">
                            <div
                                class="tab-scroller__scroll-area"
                                ref={(el: HTMLElement) =>
                                    (this.scrollArea =
                                        el as KupScrollOnHoverElement)
                                }
                            >
                                <div class="tab-scroller__scroll-content">
                                    {tabBar}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.scrollOnHover.unregister(this.scrollArea);
        this.kupManager.theme.unregister(this);
        if (this.toolbarList) {
            this.kupManager.dynamicPosition.unregister([this.toolbarList]);
        }
        if (this.infoList) {
            this.kupManager.dynamicPosition.unregister([this.infoList]);
        }
    }
}

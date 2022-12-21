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
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * List of elements.
     * @default null
     */
    @Prop() data: KupTabBarNode[] = null;
    /**
     * When enabled displays Material's ripple effect on item headers.
     * @default true
     */
    @Prop() ripple: boolean = true;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Element scrollable on mouse hover.
     */
    private scrollArea: KupScrollOnHoverElement = null;

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
     * Triggered when the tab is focused.
     */
    @Event({
        eventName: 'kup-tabbar-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupTabBarEventPayload>;

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

    onKupFocus(i: number, node: KupTabBarNode) {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            index: i,
            node: node,
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
            };

            const tabEl: VNode = (
                <button
                    class={tabClass}
                    role="tab"
                    aria-selected={this.data[i].active ? true : false}
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
                                sizeX="24px"
                                sizeY="24px"
                                wrapperClass="tab__icon"
                            />
                        ) : null}
                        {node.value ? (
                            <span class="tab__text-label">
                                {this.data[i].value}
                            </span>
                        ) : null}
                    </span>
                    <span
                        class={`tab-indicator ${
                            node.active ? ' tab-indicator--active' : ''
                        }`}
                    >
                        <span class="tab-indicator__content tab-indicator__content--underline"></span>
                    </span>
                </button>
            );
            tabBar.push(tabEl);
        }

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="tab-bar" role="tablist">
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
    }
}

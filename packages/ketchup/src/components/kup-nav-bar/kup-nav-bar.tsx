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
import {
    KupNavBarStyling,
    KupNavBarProps,
    navbarClass,
} from './kup-nav-bar-declarations';
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-nav-bar',
    styleUrl: 'kup-nav-bar.scss',
    shadow: true,
})
export class KupNavBar {
    /**
     * References the root HTML element of the component (<kup-nav-bar>).
     */
    @Element() rootElement: HTMLElement;

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
     * Defines the style of the nav bar.
     * @default KupNavBarStyling.STANDARD
     */
    @Prop({ reflect: true }) styling: KupNavBarStyling =
        KupNavBarStyling.STANDARD;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Used to prevent too many resizes callbacks at once.
     */
    private resizeTimeout: number;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-navbar-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarReady: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the component is resize.
     */
    @Event({
        eventName: 'kup-navbar-resize',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarResize: EventEmitter<KupEventPayload>;

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
        return getProps(this, KupNavBarProps, descriptions);
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
            this.kupNavbarResize.emit({
                comp: this,
                id: this.rootElement.id,
            });
        }, 300);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupNavBarProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Reads the slots returning them as an array of virtual nodes.
     */
    private content(): VNode[] {
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        const leftSlots: VNode[] = [];
        const rightSlots: VNode[] = [];
        for (let index = 0; index < slots.length; index++) {
            const slot = slots[index];
            if (slot.slot === 'left') {
                leftSlots.push(<slot name="left"></slot>);
            } else {
                rightSlots.push(<slot name="right"></slot>);
            }
        }
        return [
            leftSlots.length ? (
                <section
                    class={`${navbarClass}__section ${navbarClass}__section--align-start`}
                >
                    {leftSlots}
                </section>
            ) : null,
            rightSlots.length ? (
                <section
                    class={`${navbarClass}__section ${navbarClass}__section--align-end`}
                    role="toolbar"
                >
                    {rightSlots}
                </section>
            ) : null,
        ];
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupNavbarReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.kupManager.resize.observe(this.rootElement);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host class="header">
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <header
                        class={`${navbarClass} ${navbarClass}--${this.styling.toLowerCase()} `}
                    >
                        <div class={`${navbarClass}__row`}>
                            {this.content()}
                        </div>
                    </header>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
    }
}

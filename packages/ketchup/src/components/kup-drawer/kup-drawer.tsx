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
} from '@stencil/core';
import {
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
import { drawerClass, KupDrawerProps } from './kup-drawer-declarations';

@Component({
    tag: 'kup-drawer',
    styleUrl: 'kup-drawer.scss',
    shadow: true,
})
export class KupDrawer {
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * True when the drawer is open.
     * @default false
     */
    @State() opened: boolean = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Fired when the drawer gets closed.
     */
    @Event({
        eventName: 'kup-drawer-close',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDrawerClose: EventEmitter<KupEventPayload>;
    /**
     * Fired when the drawer gets opened.
     */
    @Event({
        eventName: 'kup-drawer-open',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDrawerOpen: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-drawer-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDrawerReady: EventEmitter<KupEventPayload>;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Closes the drawer.
     */
    @Method()
    async close(): Promise<void> {
        this.opened = false;
        this.kupDrawerClose.emit({ comp: this, id: this.rootElement.id });
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupDrawerProps, descriptions);
    }
    /**
     * Returns the state of the drawer.
     * @returns {Promise<boolean>} True when opened, false when closed.
     */
    @Method()
    async isOpened(): Promise<boolean> {
        return this.opened;
    }
    /**
     * Opens the drawer.
     */
    @Method()
    async open(): Promise<void> {
        this.opened = true;
        this.kupDrawerOpen.emit({ comp: this, id: this.rootElement.id });
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
        setProps(this, KupDrawerProps, props);
    }
    /**
     * Opens the drawer when closed and vice-versa.
     */
    @Method()
    async toggle(): Promise<void> {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    /*-------------------------------------------------*/
    /*          P r i v a t e   M e t h o d s          */
    /*-------------------------------------------------*/

    /**
     * Reads the slots returning them as an array of virtual nodes.
     */
    private content(): VNode[] {
        const contentSlots: VNode[] = [];
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        const content: VNode[] = [];
        for (let index = 0; index < slots.length; index++) {
            contentSlots.push(<slot></slot>);
        }
        content.push(
            <div class={`${drawerClass}__content`}>{contentSlots}</div>
        );
        return content;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupDrawerReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
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
            <Host kup-opened={this.opened}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    class="backdrop"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.close();
                    }}
                    onTouchStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                />
                <div id={componentWrapperId}>
                    <div class={drawerClass}>{this.content()}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

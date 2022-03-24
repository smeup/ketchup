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
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import {
    KupAccordionData,
    KupAccordionProps,
    KupAccordionItemSelectedEventPayload,
} from './kup-accordion-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupThemeColorValues,
    KupThemeIconValues,
} from '../../managers/kup-theme/kup-theme-declarations';
import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';

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
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Data of the accordion.
     * @default null
     */
    @Prop() data: KupAccordionData = null;
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
     * Instance of the KupManager class.
     */
    private slotsNames: string[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Fired when an item is selected.
     */
    @Event({
        eventName: 'kup-accordion-itemselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAccordionItemSelected: EventEmitter<KupAccordionItemSelectedEventPayload>;

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

        for (let i = 0; i < this.data.columns.length; i++) {
            const column = this.data.columns[i];
            const itemName = column.name;
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

        for (let i = 0; i < this.data.columns.length; i++) {
            const column = this.data.columns[i];
            const itemName = column.name;
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
    async toggleItem(itemName: string) {
        const isItemExpandible = this.isItemExpandible(itemName);

        const ids: string[] = [...this.selectedItems];
        if (ids.includes(itemName)) {
            ids.splice(ids.indexOf(itemName), 1);
        } else {
            ids.push(itemName);
        }
        this.selectedItems = ids;

        if (!isItemExpandible) {
            this.kupAccordionItemSelected.emit({
                comp: this,
                id: this.rootElement.id,
                itemName: itemName,
            });
        }
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

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

        for (let i = 0; i < this.data.columns.length; i++) {
            const column: KupDataColumn = this.data.columns[i];
            const itemName: string = column.name;
            const isItemSelected: boolean = this.isItemSelected(itemName);
            const isItemExpandible: boolean = this.isItemExpandible(itemName);

            const itemHeaderClass: GenericObject = {
                'accordion-item__header': true,
                'accordion-item__header--selected':
                    !isItemExpandible && isItemSelected ? true : false,
                'accordion-item__header--expanded':
                    isItemExpandible && isItemSelected ? true : false,
                'mdc-ripple-surface': this.ripple ? true : false,
            };

            const itemContentClass: GenericObject = {
                'accordion-item__content': true,
                'accordion-item__content--selected': isItemSelected
                    ? true
                    : false,
            };

            items.push(
                <div class="accordion-item">
                    <div
                        title={column.title}
                        class={itemHeaderClass}
                        onClick={() => this.toggleItem(itemName)}
                    >
                        {column.icon ? (
                            <FImage
                                color={`var(${KupThemeColorValues.ICON})`}
                                resource={column.icon}
                                sizeX="1.5em"
                                sizeY="1.5em"
                                wrapperClass="accordion-item__icon"
                            />
                        ) : null}
                        <span class="accordion-item__text">{column.title}</span>
                        {isItemExpandible ? (
                            <span
                                class={`accordion-item__dropdown kup-icon ${KupThemeIconValues.DROPDOWN.replace(
                                    '--',
                                    ''
                                )}`}
                            />
                        ) : null}
                    </div>

                    <div class={itemContentClass}>
                        <slot name={column.name}></slot>
                    </div>
                </div>
            );
        }
        return items;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
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
            this.data && this.data.columns ? this.renderItems() : null;

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

import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import {
    KupListNode,
    KupListEventPayload,
    KupListProps,
    KupListRole,
} from './kup-list-declarations';
import { KupRadio } from '../kup-radio/kup-radio';
import { ItemsDisplayMode } from './kup-list-declarations';
import { getIdOfItemByDisplayMode } from './kup-list-helper';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { FImage } from '../../f-components/f-image/f-image';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';

@Component({
    tag: 'kup-list',
    styleUrl: 'kup-list.scss',
    shadow: true,
})
export class KupList {
    /**
     * References the root HTML element of the component (<kup-list>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The focused list item.
     * @default null
     */
    @State() focused: number = null;
    /**
     * The selected list items.
     * @default []
     */
    @State() selected: string[] = [];

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
     * The data of the list.
     * @default []
     */
    @Prop({ mutable: true }) data: KupListNode[] = [];
    /**
     * Selects how the items must display their label and how they can be filtered for.
     * @default ItemsDisplayMode.DESCRIPTION
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Keeps string for filtering elements when filter mode is active
     * @default ''
     */
    @Prop({ mutable: true }) filter: string = '';
    /**
     * Hides rows' text, ideally to display a list of icons only.
     * @default false
     */
    @Prop() hideText: boolean = false;
    /**
     * Defines whether the list is a menu or not.
     * @default false
     */
    @Prop() isMenu: boolean = false;
    /**
     * When true, enables items' navigation through arrow keys.
     * @default true
     */
    @Prop() keyboardNavigation: boolean = true;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     * @default false
     */
    @Prop() menuVisible: boolean = false;
    /**
     * Defines the type of selection. Values accepted: listbox, radiogroup or group.
     * @default KupListRole.LISTBOX
     */
    @Prop({ mutable: true }) roleType?: KupListRole = KupListRole.LISTBOX;
    /**
     * Defines whether items are selectable or not.
     * @default true
     */
    @Prop() selectable: boolean = true;
    /**
     * Displays the icons associated to each row when set to true.
     * @default false
     */
    @Prop() showIcons: boolean = false;
    /**
     * The list elements descriptions will be arranged in two lines.
     * @default false
     */
    @Prop() twoLine: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    #radios: KupRadio[] = [];
    #listItems: HTMLElement[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-list-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupEventPayload>;

    @Event({
        eventName: 'kup-list-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupEventPayload>;

    @Event({
        eventName: 'kup-list-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupListEventPayload>;

    onKupBlur() {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupClick(index: number) {
        this.#handleSelection(index);
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.keyboardNavigation) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#handleSelection(this.focused);
                    break;
            }
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Focuses the next element of the list.
     */
    @Method()
    async focusNext(): Promise<void> {
        if (
            isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined
        ) {
            if (this.selected.length === 1) {
                const selectedItem: KupListNode = this.data.find(
                    (x: KupListNode) => x.id === this.selected[0]
                );
                this.focused = this.data.indexOf(selectedItem) + 1;
            } else {
                this.focused = 0;
            }
        } else {
            this.focused++;
        }
        if (this.focused > this.#listItems.length - 1) {
            this.focused = 0;
        }
        this.#listItems[this.focused].focus();
    }
    /**
     * Focuses the previous element of the list.
     */
    @Method()
    async focusPrevious(): Promise<void> {
        if (
            isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined
        ) {
            if (this.selected.length === 1) {
                const selectedItem: KupListNode = this.data.find(
                    (x: KupListNode) => x.id === this.selected[0]
                );
                this.focused = this.data.indexOf(selectedItem) - 1;
            } else {
                this.focused = 0;
            }
        } else {
            this.focused--;
        }
        if (this.focused < 0) {
            this.focused = this.#listItems.length - 1;
        }
        this.#listItems[this.focused].focus();
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupListProps, descriptions);
    }
    /**
     * Returns the selected node.
     * @returns {Promise<KupListNode>} Selected node.
     */
    @Method()
    async getSelectedNode(): Promise<KupListNode[]> {
        const nodes: KupListNode[] = [];
        this.data.forEach((node) => {
            if (this.selected.includes(node.id)) {
                nodes.push(node);
            }
        });
        return nodes;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Calls handleSelection internal method to select the given item.
     * @param {number} index - Based zero index of the item that must be selected, when not provided the list will attempt to select the focused element.
     */
    @Method()
    async select(index?: number): Promise<void> {
        if (index === undefined) {
            index = this.focused;
        }
        this.#handleSelection(index);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Selects the specified item.
     * @param {number} index - Based zero index of the item that must be selected, when not provided the list will attempt to select the focused element.
     */
    #handleSelection(index: number): void {
        if (index !== null && index !== undefined && !isNaN(index)) {
            const listItems: NodeListOf<HTMLElement> =
                this.rootElement.shadowRoot.querySelectorAll('.list-item');
            const id: string = listItems[index].dataset.id;
            const dataEl = this.data.find((x: KupListNode) => x.id === id);
            switch (this.roleType) {
                case KupListRole.GROUP:
                    if (this.selected.includes(id)) {
                        this.selected.splice(this.selected.indexOf(id), 1);
                    } else {
                        this.selected.push(id);
                    }
                    this.selected = new Array(...this.selected);
                    break;
                default:
                    this.selected = new Array(id);
                    break;
            }
            for (let index = 0; index < this.data.length; index++) {
                const item = this.data[index];
                item.selected = this.selected.includes(item.id);
            }
            this.kupClick.emit({
                comp: this,
                id: this.rootElement.id,
                selected: dataEl,
            });
        }
    }

    #isNested() {
        return this.rootElement.hasAttribute('nested-list');
    }

    #renderListItem(item: KupListNode, index: number) {
        if (item.selected != true) {
            item.selected = false;
        }
        if (!item.id) {
            item.id = item.value;
        }

        let nestedList: VNode = null;
        if (item.children && item.children.length > 0) {
            this.rootElement.setAttribute('nested-list', '');
            nestedList = (
                <kup-list
                    class="kup-paddingless"
                    data={item.children}
                    isMenu={true}
                    menuVisible={true}
                    nested-list
                ></kup-list>
            );
        }

        let imageTag: HTMLElement = undefined;
        if (
            this.showIcons == true &&
            item.icon != null &&
            item.icon.trim() != ''
        ) {
            imageTag = this.#getIconTag(item.icon);
        }
        let primaryTextTag = [
            getIdOfItemByDisplayMode(item, this.displayMode, ' - '),
        ];

        let secTextTag = [];
        if (this.twoLine && item.secondaryText && item.secondaryText != '') {
            primaryTextTag = [
                <span class="list-item__primary-text">{item.value}</span>,
            ];
            secTextTag = [
                <span class="list-item__secondary-text">
                    {item.secondaryText}
                </span>,
            ];
        }
        let classAttr = 'list-item';
        let tabIndexAttr = item.selected == true ? '0' : '-1';
        if (
            !this.#isNested() &&
            item.selected == true &&
            this.#isListBoxRule()
        ) {
            classAttr += ' list-item--selected';
        }
        if (this.focused === index) {
            classAttr += ' list-item--focused';
        }
        let roleAttr = 'option';

        let ariaCheckedAttr: string = null;
        let ariaSelectedAttr: string = item.selected == true ? 'true' : 'false';
        if (this.selectable != true) {
            ariaSelectedAttr = null;
        }
        let innerSpanTag = [
            imageTag,
            <span class="list-item__text">
                {primaryTextTag}
                {secTextTag}
            </span>,
        ];
        if (this.#isRadioButtonRule()) {
            roleAttr = 'radio';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let dataTmp = [
                {
                    value: item.id,
                    label: '',
                    checked: item.selected == true ? true : false,
                },
            ];
            let trickForMDC = {
                display: 'none',
            };
            innerSpanTag = [
                <span class="list-item__graphic">
                    <input type="radio" style={trickForMDC} />
                    <kup-radio
                        data={dataTmp}
                        id={this.rootElement.id + '_' + index}
                        ref={(el) => (this.#radios[index] = el as any)}
                    ></kup-radio>
                </span>,
                imageTag,
                <label
                    class="list-item__text"
                    htmlFor={this.rootElement.id + '_' + index}
                >
                    {primaryTextTag}
                    {secTextTag}
                </label>,
            ];
        } else if (this.#isCheckBoxRule()) {
            roleAttr = 'checkbox';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let checkedAttr: boolean = item.selected == true ? true : false;

            let trickForMDC = {
                display: 'none',
            };

            innerSpanTag = [
                <span class="list-item__graphic">
                    <input type="checkbox" style={trickForMDC} />
                    <FCheckbox checked={checkedAttr} />
                </span>,
                imageTag,
                <label
                    class="list-item__text"
                    htmlFor={this.rootElement.id + '_' + index}
                >
                    {primaryTextTag}
                    {secTextTag}
                </label>,
            ];
        }
        const vNodes: VNode[] = [];
        if (item.separator) {
            vNodes.push(<li role="separator" class="list-divider"></li>);
        }
        vNodes.push(
            <li
                ref={(el: HTMLLIElement) => {
                    this.#listItems.push(el);
                }}
                class={classAttr}
                role={roleAttr}
                tabindex={tabIndexAttr}
                data-id={item.id}
                aria-selected={ariaSelectedAttr}
                aria-checked={ariaCheckedAttr}
                onBlur={
                    !this.selectable
                        ? (e: FocusEvent) => e.stopPropagation()
                        : () => this.onKupBlur()
                }
                onFocus={
                    !this.selectable
                        ? (e: FocusEvent) => e.stopPropagation()
                        : () => this.onKupFocus()
                }
                onClick={
                    !this.selectable
                        ? (e: MouseEvent) => e.stopPropagation()
                        : this.#isNested()
                        ? (e: MouseEvent) => {
                              e.stopPropagation();
                              this.onKupClick(index);
                          }
                        : () => this.onKupClick(index)
                }
            >
                {innerSpanTag}
                {nestedList
                    ? [
                          <FImage
                              resource="chevron-right"
                              sizeX="1.5em"
                              sizeY="1.5em"
                              wrapperClass="list-item__expand-icon"
                          ></FImage>,
                          nestedList,
                      ]
                    : null}
            </li>
        );
        return vNodes;
    }

    #getIconTag(icon: string) {
        const large: boolean = this.rootElement.classList.contains('kup-large');
        const propsFImage = {
            color: `var(${KupThemeColorValues.PRIMARY})`,
            sizeX: large ? '32px' : '24px',
            sizeY: large ? '32px' : '24px',
        };

        return (
            <FImage
                {...propsFImage}
                resource={icon}
                wrapperClass={`icon-button__icon kup-icon`}
            />
        );
    }

    #isMultiSelection(): boolean {
        return this.#isCheckBoxRule();
    }

    #isCheckBoxRule(): boolean {
        return this.roleType == KupListRole.GROUP;
    }

    #isRadioButtonRule(): boolean {
        return this.roleType == KupListRole.RADIOGROUP;
    }

    #isListBoxRule(): boolean {
        return this.roleType == KupListRole.LISTBOX;
    }

    #checkRoleType() {
        if (!this.#isCheckBoxRule() && !this.#isRadioButtonRule()) {
            this.roleType = KupListRole.LISTBOX;
        }
    }

    #itemCompliant(item: KupListNode): boolean {
        if (!this.filter) {
            return true;
        }

        if (this.displayMode == ItemsDisplayMode.CODE) {
            return (
                item.id.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            );
        }
        if (this.displayMode == ItemsDisplayMode.DESCRIPTION) {
            return (
                item.value.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            );
        }

        return (
            item.id.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            item.value.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        for (let index = 0; index < this.data.length; index++) {
            const el: KupListNode = this.data[index];
            if (el.selected) {
                this.selected.push(el.id);
            }
        }
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
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
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        this.#listItems = [];
        let componentClass: string = 'list';
        let wrapperClass = undefined;

        if (this.isMenu) {
            wrapperClass = 'kup-menu';

            if (this.menuVisible) {
                wrapperClass += ' visible';
            }
        }

        this.#checkRoleType();

        if (this.selectable != true) {
            componentClass += ' list--non-interactive';
        }

        if (this.twoLine) {
            componentClass += ' list--two-line';
        }

        if (this.hideText) {
            componentClass += ' text-hidden';
        }

        if (!this.data || this.data.length === 0) {
            componentClass += ' list--empty';
        }

        let roleAttr = this.roleType;

        let ariaMultiSelectable: string = 'false';
        if (this.#isMultiSelection()) {
            ariaMultiSelectable = 'true';
        }

        this.#radios = [];
        let index = 0;

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id="kup-component" class={wrapperClass}>
                    <ul
                        class={componentClass}
                        role={roleAttr}
                        aria-multiselectable={ariaMultiSelectable}
                    >
                        {this.data
                            .filter((item) => this.#itemCompliant(item))
                            .map((item) => this.#renderListItem(item, index++))}
                    </ul>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}

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
    Watch,
} from '@stencil/core';
import { MDCList } from '@material/list';
import {
    ComponentListElement,
    KupListEventPayload,
    KupListProps,
} from './kup-list-declarations';
import { KupRadio } from '../kup-radio/kup-radio';
import { KupCheckbox } from '../kup-checkbox/kup-checkbox';
import { ItemsDisplayMode } from './kup-list-declarations';
import { getValueOfItemByDisplayMode } from './kup-list-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { FImage } from '../../f-components/f-image/f-image';
import { KupThemeColorValues } from '../../utils/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';

@Component({
    tag: 'kup-list',
    styleUrl: 'kup-list.scss',
    shadow: true,
})
export class KupList {
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
     * Used to navigate the list when it's bound to a text field, i.e.: autocomplete.
     */
    @Prop({ mutable: true }) arrowDown: boolean = false;
    @Prop({ mutable: true }) arrowUp: boolean = false;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the list.
     */
    @Prop({ mutable: true }) data: ComponentListElement[] = [];
    /**
     * Selects how the items must display their label and how they can be filtered for.
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Keeps string for filtering elements when filter mode is active
     */
    @Prop({ mutable: true }) filter: string = '';
    /**
     * Hides rows' text, ideally to display a list of icons only.
     */
    @Prop() hideText: boolean = false;
    /**
     * Defines whether the list is a menu or not.
     */
    @Prop() isMenu: boolean = false;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop() menuVisible: boolean = false;
    /**
     * Defines the type of selection. Values accepted: listbox, radiogroup or group.
     */
    @Prop({ mutable: true }) roleType?: string = KupList.ROLE_LISTBOX;
    /**
     * Defines whether items are selectable or not.
     */
    @Prop() selectable: boolean = true;
    /**
     * Displays the icons associated to each row when set to true.
     */
    @Prop() showIcons: boolean = false;
    /**
     * The list elements descriptions will be arranged in two lines.
     */
    @Prop() twoLine: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    static ROLE_LISTBOX: string = 'listbox';
    static ROLE_RADIOGROUP: string = 'radiogroup';
    static ROLE_CHECKBOX: string = 'group';

    private filteredItems: ComponentListElement[] = [];
    private listComponent: MDCList = null;
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    private radios: KupRadio[] = [];
    private checkboxes: KupCheckbox[] = [];

    private focIndex: number = -1;

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

    onKupBlur(index: number) {
        if (this.focused === index) {
            this.focused = null;
        }
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupFocus(index: number) {
        this.focused = index;
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupClick(index: number) {
        this.select(index);
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeyup(e: KeyboardEvent) {
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
                this.select(this.focused);
                break;
        }
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('filter')
    watchFilter() {
        this.focIndex = -1;

        this.filteredItems = [];
        let index = 0;
        this.data.map((item) => {
            this.setUnselected(item, index++);
        });
        this.data = [...this.data];
    }

    @Watch('arrowDown')
    watchArrowDown() {
        if (this.arrowDown == true) {
            if (this.focIndex < this.listComponent.listElements.length - 1) {
                if (this.focIndex == -1) {
                    let idx = this.listComponent
                        .getDefaultFoundation()
                        .focusFirstElement();
                    this.focIndex = idx;
                } else {
                    let idx = this.listComponent
                        .getDefaultFoundation()
                        .focusNextElement(this.focIndex);
                    this.focIndex = idx;
                }
                //this.focIndex++;
            }
            this.arrowDown = false;
        }
    }

    @Watch('arrowUp')
    watchArrowUp() {
        if (this.arrowUp == true) {
            if (this.focIndex > 0) {
                this.listComponent
                    .getDefaultFoundation()
                    .focusPrevElement(this.focIndex--);
            }
            this.arrowUp = false;
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
        return getProps(this, KupListProps, descriptions);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupListProps, props);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Focuses the previous element of the list.
     */
    @Method()
    async focusPrevious(): Promise<void> {
        const listItems: NodeListOf<HTMLElement> =
            this.rootElement.shadowRoot.querySelectorAll('.list-item');
        if (isNaN(this.focused)) {
            this.focused = 0;
        } else {
            this.focused--;
        }
        if (this.focused < 0) {
            this.focused = listItems.length - 1;
        }
        listItems[this.focused].focus();
    }
    /**
     * Focuses the next element of the list.
     */
    @Method()
    async focusNext(): Promise<void> {
        const listItems: NodeListOf<HTMLElement> =
            this.rootElement.shadowRoot.querySelectorAll('.list-item');
        if (isNaN(this.focused)) {
            this.focused = 0;
        } else {
            this.focused++;
        }
        if (this.focused > listItems.length - 1) {
            this.focused = 0;
        }
        listItems[this.focused].focus();
    }
    /**
     * Selects the specified item.
     * @param {number} index - Based zero index of the item that must be selected.
     */
    @Method()
    async select(index: number): Promise<void> {
        const value: string = this.data[index].value;
        switch (this.roleType) {
            case KupList.ROLE_CHECKBOX:
                if (this.selected.includes(value)) {
                    this.selected.splice(this.selected.indexOf(value));
                } else {
                    this.selected.push(value);
                }
                this.selected = new Array(...this.selected);
                break;
            default:
                this.selected = new Array(value);
                break;
        }
        for (let index = 0; index < this.data.length; index++) {
            const item: ComponentListElement = this.data[index];
            if (this.selected.includes(item.value)) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        }
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            selected: this.data[index],
        });
    }
    /**
     * Resets filter.
     * memo - FOSLUC to PASCAR: why isn't it enough to change only the prop?
     */
    @Method()
    async resetFilter(newFilter: string) {
        this.filter = newFilter;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    renderSeparator() {
        return <li role="separator" class="list-divider"></li>;
    }

    renderListItem(item: ComponentListElement, index: number) {
        this.filteredItems[index] = item;

        if (item.selected != true) {
            item.selected = false;
        }

        let imageTag: HTMLElement = undefined;
        if (
            this.showIcons == true &&
            item.icon != null &&
            item.icon.trim() != ''
        ) {
            imageTag = this.getIconTag(item.icon);
        }
        let primaryTextTag = [
            getValueOfItemByDisplayMode(item, this.displayMode, ' - '),
        ];

        let secTextTag = [];
        if (this.twoLine && item.secondaryText && item.secondaryText != '') {
            primaryTextTag = [
                <span class="list-item__primary-text">{item.text}</span>,
            ];
            secTextTag = [
                <span class="list-item__secondary-text">
                    {item.secondaryText}
                </span>,
            ];
        }
        let classAttr = 'list-item';
        let tabIndexAttr = item.selected == true ? '0' : '-1';
        if (item.selected == true && this.isListBoxRule()) {
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
        if (this.isRadioButtonRule()) {
            roleAttr = 'radio';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let dataTmp = [
                {
                    value: item.value,
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
                        ref={(el) => (this.radios[index] = el as any)}
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
        } else if (this.isCheckBoxRule()) {
            roleAttr = 'checkbox';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let checkedAttr: boolean = item.selected == true ? true : false;

            let trickForMDC = {
                display: 'none',
            };

            innerSpanTag = [
                <span class="list-item__graphic">
                    <input type="checkbox" style={trickForMDC} />
                    <kup-checkbox
                        class="checkbox"
                        id={this.rootElement.id + '_' + index}
                        checked={checkedAttr}
                        ref={(el) => (this.checkboxes[index] = el as any)}
                    ></kup-checkbox>
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
        return (
            <li
                class={classAttr}
                role={roleAttr}
                tabindex={tabIndexAttr}
                data-value={item.value}
                aria-selected={ariaSelectedAttr}
                aria-checked={ariaCheckedAttr}
                onBlur={
                    !this.selectable
                        ? (e: FocusEvent) => e.stopPropagation()
                        : () => this.onKupBlur(index)
                }
                onFocus={
                    !this.selectable
                        ? (e: FocusEvent) => e.stopPropagation()
                        : () => this.onKupFocus(index)
                }
                onClick={
                    !this.selectable
                        ? (e: MouseEvent) => e.stopPropagation()
                        : () => this.onKupClick(index)
                }
            >
                {innerSpanTag}
            </li>
        );
    }

    getIconTag(icon: string) {
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
                wrapperClass={`icon-button__icon icon-container`}
            />
        );
    }

    setUnselected(item: ComponentListElement, index: number) {
        item.selected = false;
        this.sendInfoToSubComponent(index, item);
    }

    setSelected(item: ComponentListElement, index: number) {
        item.selected = true;
        this.sendInfoToSubComponent(index, item);
    }

    sendInfoToSubComponent(index: number, item: ComponentListElement) {
        if (this.isRadioButtonRule()) {
            if (this.radios[index]) {
                let dataTmp = [
                    {
                        value: item.value,
                        label: '',
                        checked: item.selected == true ? true : false,
                    },
                ];
                this.radios[index].data = dataTmp;
            }
        }
        if (this.isCheckBoxRule()) {
            if (this.checkboxes[index]) {
                this.checkboxes[index].checked = item.selected;
            }
        }
    }

    getLiIndexElementForValue(key: string): number {
        let index = -1;
        let i = 0;
        this.filteredItems.forEach((item) => {
            if (item.isSeparator != true) {
                if (item.value == key) {
                    index = i;
                }
            }
            i++;
        });

        return index;
    }

    isSingleSelection(): boolean {
        return this.isRadioButtonRule() || this.isListBoxRule();
    }

    isMultiSelection(): boolean {
        return this.isCheckBoxRule();
    }

    isCheckBoxRule(): boolean {
        return this.roleType == KupList.ROLE_CHECKBOX;
    }

    isRadioButtonRule(): boolean {
        return this.roleType == KupList.ROLE_RADIOGROUP;
    }

    isListBoxRule(): boolean {
        return this.roleType == KupList.ROLE_LISTBOX;
    }

    checkRoleType() {
        if (!this.isCheckBoxRule() && !this.isRadioButtonRule()) {
            this.roleType = KupList.ROLE_LISTBOX;
        }
    }

    itemCompliant(item: ComponentListElement): boolean {
        if (item.isSeparator) {
            return true;
        }
        if (!this.filter) {
            return true;
        }

        if (this.displayMode == ItemsDisplayMode.CODE) {
            return (
                item.value.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            );
        }
        if (this.displayMode == ItemsDisplayMode.DESCRIPTION) {
            return (
                item.text.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            );
        }

        return (
            item.value.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            item.text.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        for (let index = 0; index < this.data.length; index++) {
            const el: ComponentListElement = this.data[index];
            if (el.selected) {
                this.selected.push(el.value);
            }
        }
    }

    componentDidLoad() {
        this.listComponent = null;
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;
        if (root) {
            //this.listComponent = MDCList.attachTo(root.querySelector('.list'));
            //this.listComponent.singleSelection = this.isSingleSelection();
        }
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
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
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        let componentClass: string = 'list';
        let wrapperClass = undefined;

        if (this.isMenu) {
            wrapperClass = 'kup-menu';

            if (this.menuVisible) {
                wrapperClass += ' visible';
            }
        }

        this.checkRoleType();

        if (this.selectable != true) {
            componentClass += ' list--non-interactive';
        }

        if (this.twoLine) {
            componentClass += ' list--two-line';
        }

        if (this.hideText) {
            componentClass += ' text-hidden';
        }

        let roleAttr = this.roleType;

        let ariaMultiSelectable: string = 'false';
        if (this.isMultiSelection()) {
            ariaMultiSelectable = 'true';
        }

        this.filteredItems = [];
        this.radios = [];
        this.checkboxes = [];
        let index = 0;

        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id="kup-component" class={wrapperClass}>
                    <ul
                        class={componentClass}
                        role={roleAttr}
                        id={'kup-list_' + this.rootElement.id}
                        aria-multiselectable={ariaMultiSelectable}
                    >
                        {this.data
                            .filter((item) => this.itemCompliant(item))
                            .map((item) =>
                                item.isSeparator
                                    ? this.renderSeparator()
                                    : this.renderListItem(item, index++)
                            )}
                    </ul>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

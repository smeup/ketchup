import {
    Component,
    Event,
    EventEmitter,
    Element,
    Host,
    h,
    Prop,
    Watch,
    Method,
} from '@stencil/core';

import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
import { ComponentListElement } from './kup-list-declarations';
import { KupRadio } from '../kup-radio/kup-radio';
import { KupCheckbox } from '../kup-checkbox/kup-checkbox';
import { ItemsDisplayMode } from './kup-list-declarations';
import { getValueOfItemByDisplayMode } from './kup-list-declarations';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-list',
    styleUrl: 'kup-list.scss',
    shadow: true,
})
export class KupList {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    /**
     * Sets a custom style for the component by feeding this string into a <style> tag.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * The data of the list.
     */
    @Prop() data: ComponentListElement[] = [];

    /**
     * Selects how the items must display their label and how they can be filtered for.
     */
    @Prop({ reflect: true }) displayMode: ItemsDisplayMode =
        ItemsDisplayMode.DESCRIPTION;

    /**
     * Keeps string for filtering elements when filter mode is active
     */
    @Prop({ reflect: true }) filter: string = '';

    /**
     * Defines whether the list is a menu or not.
     */
    @Prop({ reflect: true }) isMenu: boolean = false;

    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop({ reflect: true }) menuVisible: boolean = false;

    /**
     * Defines the type of selection. Values accepted: listbox, radiogroup or group.
     */
    @Prop({ reflect: true }) roleType?: string = KupList.ROLE_LISTBOX;

    /**
     * Defines whether items are selectable or not.
     */
    @Prop({ reflect: true }) selectable: boolean = true;

    /**
     * The list elements descriptions will be arranged in two lines.
     */
    @Prop({ reflect: true }) twoLine: boolean = false;

    /**
     * Used for navigate throw the list items when list is associated to o text-file, like autocomplete
     */
    @Prop({ mutable: true, reflect: true }) arrowDown: boolean = false;
    @Prop({ mutable: true, reflect: true }) arrowUp: boolean = false;

    //---- Internal state ----

    static ROLE_LISTBOX: string = 'listbox';
    static ROLE_RADIOGROUP: string = 'radiogroup';
    static ROLE_CHECKBOX: string = 'group';

    private filteredItems: ComponentListElement[] = [];
    private listComponent: MDCList = null;

    private radios: KupRadio[] = [];
    private checkboxes: KupCheckbox[] = [];

    private focIndex: number = -1;

    /**
     * Events.
     */

    @Event({
        eventName: 'kupListBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        selected: ComponentListElement;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupListChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        selected: ComponentListElement;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupListClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        selected: ComponentListElement;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupListFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        selected: ComponentListElement;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupListInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        selected: ComponentListElement;
        el: EventTarget;
    }>;

    @Watch('filter')
    watchFilter(newValue: string, oldValue: string) {
        this.focIndex = -1;
        this.log(
            'watchFilter',
            'newValue: ' +
                newValue +
                '[' +
                this.filter +
                ']' +
                ' != ' +
                oldValue +
                ' - this.focIndex: ' +
                this.focIndex
        );
        let index = 0;
        /*
        this.filteredItems.map((item) => {
            this.setUnselected(item, index++);
        });
        index = 0;*/
        this.data.map((item) => {
            this.setUnselected(item, index++);
        });
    }

    @Watch('arrowDown')
    watchArrowDown() {
        if (this.arrowDown == true) {
            if (this.focIndex < this.listComponent.listElements.length - 1) {
                this.log('watchArrowDown', 'this.focIndex: ' + this.focIndex);
                /*
                let evt: KeyboardEvent = new KeyboardEvent('keydown', {
                    key: 'ArrowDown',
                });
                this.listComponent
                    .getDefaultFoundation()
                    .handleKeydown(evt, true, this.focIndex++);
                */
                if (this.focIndex == -1) {
                    this.listComponent
                        .getDefaultFoundation()
                        .focusFirstElement();
                } else {
                    this.listComponent
                        .getDefaultFoundation()
                        .focusNextElement(this.focIndex);
                }
                this.focIndex++;
            }
            this.arrowDown = false;
        }
    }

    @Watch('arrowUp')
    watchArrowUp() {
        if (this.arrowUp == true) {
            if (this.focIndex > 0) {
                this.log('watchArrowUp', 'this.focIndex: ' + this.focIndex);
                /*
                let evt: KeyboardEvent = new KeyboardEvent('keydown', {
                    key: 'ArrowUp', 
                this.listComponent
                    .getDefaultFoundation()
                    .handleKeydown(evt, true, this.focIndex--);
                    */
                this.listComponent
                    .getDefaultFoundation()
                    .focusPrevElement(this.focIndex--);
            }
            this.arrowUp = false;
        }
    }

    /*
    @Listen('keyup', { target: 'document' })
    listeKeyup(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            let index1 = 0;
            let index = -1;
            let item: ComponentListElement = null;
            this.filteredItems.map((item1) => {
                if (item1.selected) {
                    item = item1;
                    index = index1;
                }
            });
            this.onKupClickInternalUse(e.target, item, index);
        }
    }*/
    /**
     * --- Methods ----
     */
    onKupBlur(e: CustomEvent, item: ComponentListElement) {
        this.kupBlur.emit({
            selected: item,
            el: e.target,
        });
    }

    onKupChange(e: CustomEvent, item: ComponentListElement) {
        this.kupChange.emit({
            selected: item,
            el: e.target,
        });
    }

    onKupClick(
        e: CustomEvent & { target: HTMLLIElement },
        item: ComponentListElement,
        index: number
    ) {
        this.onKupClickInternalUse(e.target, item, index);
    }

    onKupClickInternalUse(
        target: EventTarget,
        item: ComponentListElement,
        index: number
    ) {
        if (this.isMultiSelection()) {
            if (item.selected == true) {
                this.setUnselected(item, index);
            } else {
                this.setSelected(item, index);
            }
        }
        if (this.isSingleSelection()) {
            if (item.selected != true) {
                let index1 = 0;
                this.filteredItems.map((item1) => {
                    this.setUnselected(item1, index1++);
                });
                this.setSelected(item, index);
            }
        }

        this.kupClick.emit({
            selected: item,
            el: target,
        });
    }

    onKupFocus(e: CustomEvent, item: ComponentListElement) {
        this.kupFocus.emit({
            selected: item,
            el: e.target,
        });
    }

    onKupInput(e: KeyboardEvent, item: ComponentListElement, index: number) {
        if (e.key == 'Enter') {
            this.onKupClickInternalUse(e.target, item, index);
        } else {
            this.kupInput.emit({
                selected: item,
                el: e.target,
            });
        }
    }

    @Method()
    async resetFilter() {
        this.focIndex = -1;
        let index = 0;

        this.data.map((item) => {
            this.setUnselected(item, index++);
        });
        this.filter = '';
    }

    renderSeparator() {
        return <li role="separator" class="mdc-list-divider"></li>;
    }

    renderListItem(item: ComponentListElement, index: number) {
        this.filteredItems[index] = item;

        if (item.selected != true) {
            item.selected = false;
        }

        let primaryTextTag = [
            getValueOfItemByDisplayMode(item, this.displayMode, ' - '),
        ];

        let secTextTag = [];
        if (item.secondaryText && item.secondaryText != '') {
            primaryTextTag = [
                <span class="mdc-list-item__primary-text">{item.text}</span>,
            ];
            secTextTag = [
                <span class="mdc-list-item__secondary-text">
                    {item.secondaryText}
                </span>,
            ];
        }
        let classAttr = 'mdc-list-item';
        let tabIndexAttr = item.selected == true ? '0' : '-1';
        if (item.selected == true && this.isListBoxRule()) {
            classAttr += ' mdc-list-item--selected';
        }
        let roleAttr = 'option';

        let ariaCheckedAttr: string = null;
        let ariaSelectedAttr: string = item.selected == true ? 'true' : 'false';
        if (this.selectable != true) {
            ariaSelectedAttr = null;
        }
        let innerSpanTag = [
            <span class="mdc-list-item__text">
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
            let aaa = {
                display: 'none',
            };
            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <input type="radio" style={aaa} />
                    <kup-radio
                        name={this.rootElement.id + '_radio'}
                        data={dataTmp}
                        id={this.rootElement.id + '_' + index}
                        ref={(el) => (this.radios[index] = el as any)}
                    ></kup-radio>
                </span>,
                <label
                    class="mdc-list-item__text"
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

            let aaa = {
                display: 'none',
            };

            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <input type="checkbox" style={aaa} />
                    <kup-checkbox
                        class="mdc-checkbox"
                        id={this.rootElement.id + '_' + index}
                        checked={checkedAttr}
                        ref={(el) => (this.checkboxes[index] = el as any)}
                    ></kup-checkbox>
                </span>,
                <label
                    class="mdc-list-item__text"
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
                onFocus={
                    !this.selectable
                        ? (e: any) => e.stopPropagation()
                        : (e: any) => this.onKupFocus(e, item)
                }
                onClick={
                    !this.selectable
                        ? (e: any) => e.stopPropagation()
                        : (e: any) => this.onKupClick(e, item, index)
                }
                onKeyUp={
                    !this.selectable
                        ? (e: any) => e.stopPropagation()
                        : (e: any) => this.onKupInput(e, item, index)
                }
            >
                {innerSpanTag}
            </li>
        );
    }

    setUnselected(item: ComponentListElement, index: number) {
        item.selected = false;
        /*
        let target = this.listComponent.listElements[index];
        if (this.isListBoxRule()) {
            target.setAttribute('class', 'mdc-list-item');
        }*/

        this.sendInfoToSubComponent(index, item);
    }

    setSelected(item: ComponentListElement, index: number) {
        item.selected = true;
        this.sendInfoToSubComponent(index, item);
    }

    sendInfoToSubComponent(index: number, item: ComponentListElement) {
        if (this.isRadioButtonRule()) {
            let dataTmp = [
                {
                    value: item.value,
                    label: '',
                    checked: item.selected == true ? true : false,
                },
            ];
            this.radios[index].data = dataTmp;
        }
        if (this.isCheckBoxRule()) {
            this.checkboxes[index].checked = item.selected;
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

    log(methodName: string, msg: string) {
        errorLogging(
            'kup-list',
            methodName + '() ' + this.rootElement.id + ' - ' + msg,
            'log'
        );
    }
    //---- Lifecycle hooks ----

    componentDidRender() {
        /*
        let firstElement: HTMLElement = this.rootElement.shadowRoot.querySelector(
            '.mdc-list-item'
        ) as HTMLElement;
        if (firstElement != null) {
            firstElement.focus();
        }*/
    }

    componentDidLoad() {
        this.listComponent = null;
        this.focIndex = -1;
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;
        if (root != null) {
            this.listComponent = MDCList.attachTo(
                root.querySelector('.mdc-list')
            );

            this.listComponent.singleSelection = this.isSingleSelection();

            this.listComponent.listElements.map(
                (listItemEl: any) => new MDCRipple(listItemEl)
            );
        }
    }

    itemComplient(item: ComponentListElement): boolean {
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

    render() {
        let wrapperClass = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.isMenu) {
            wrapperClass = 'mdc-menu mdc-menu-surface';

            if (this.menuVisible) {
                wrapperClass += ' visible';
            }
        }

        this.checkRoleType();

        //---- Rendering ----
        let componentClass: string = 'mdc-list';
        if (this.selectable != true) {
            componentClass += ' mdc-list--non-interactive';
        }
        if (this.twoLine) {
            componentClass += ' mdc-list--two-line';
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

        return (
            <Host>
                {customStyle}
                <div id="kup-component" class={wrapperClass}>
                    <ul
                        class={componentClass}
                        role={roleAttr}
                        id={'kup-list_' + this.rootElement.id}
                        aria-multiselectable={ariaMultiSelectable}
                    >
                        {this.data
                            .filter((item) => this.itemComplient(item))
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
}

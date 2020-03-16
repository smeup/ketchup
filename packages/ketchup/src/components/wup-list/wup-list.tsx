import {
    Component,
    Event,
    EventEmitter,
    Element,
    Host,
    h,
    Prop,
    State,
} from '@stencil/core';

import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
import { ComponentListElement } from './wup-list-declarations';
import { WupRadio } from '../wup-radio/wup-radio';
import { WupCheckbox } from '../wup-checkbox/wup-checkbox';

@Component({
    tag: 'wup-list',
    styleUrl: 'wup-list.scss',
    shadow: true,
})
export class WupList {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    @Prop() data: ComponentListElement[] = [];

    private filteredItems: ComponentListElement[] = [];
    private listComponent: MDCList = null;

    private radios: WupRadio[] = [];
    private checkboxes: WupCheckbox[] = [];

    /**
     * Marks the list as filterable, allowing an input text to filter the options
     */
    @Prop({ reflect: true }) isFilterable: boolean = false;

    //---- Internal state ----
    // Keeps string for filtering elements when filter mode is active
    @State() filter: string = '';

    // no-select - items non selezionabili
    // one-select - un solo item selezionabile alla volta
    // multi-select - più di un item selezionabile alla volta
    @Prop({ reflect: true }) selectable: boolean = true;

    @Prop({ reflect: true }) listId: string = 'WupList-myId';

    @Prop({ reflect: true }) twoLine: boolean = false;

    @Prop({ reflect: true }) roleType?: string = WupList.ROLE_LISTBOX;

    static ROLE_LISTBOX: string = 'listbox';
    static ROLE_RADIOGROUP: string = 'radiogroup';
    static ROLE_CHECKBOX: string = 'group';

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
        const { target } = e;
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

    onKupInput(e: CustomEvent, item: ComponentListElement) {
        this.kupInput.emit({
            selected: item,
            el: e.target,
        });
    }

    /**
     * Function which gets triggered when filter changes
     * @param event
     */
    onFilterUpdate(event: CustomEvent) {
        this.filter = event.detail.value.toLowerCase();
    }

    renderSeparator() {
        return <li role="separator" class="mdc-list-divider"></li>;
    }

    renderListItem(item: ComponentListElement, index: number) {
        this.filteredItems[index] = item;

        if (item.selected != true) {
            item.selected = false;
        }

        let primaryTextTag = [item.text];
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
            //tabIndexAttr = '0';
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
                    <wup-radio
                        name={this.listId + 'radio'}
                        data={dataTmp}
                        id={this.listId + index}
                        ref={(el) => (this.radios[index] = el as any)}
                    ></wup-radio>
                </span>,
                <label
                    class="mdc-list-item__text"
                    htmlFor={this.listId + index}
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
                    <wup-checkbox
                        class="mdc-checkbox"
                        id={this.listId + index}
                        checked={checkedAttr}
                        ref={(el) => (this.checkboxes[index] = el as any)}
                    ></wup-checkbox>
                </span>,
                <label
                    class="mdc-list-item__text"
                    htmlFor={this.listId + index}
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
                onClick={
                    !this.selectable
                        ? (e: any) => e.stopPropagation()
                        : (e: any) => this.onKupClick(e, item, index)
                }
            >
                {innerSpanTag}
            </li>
        );
    }

    setUnselected(item: ComponentListElement, index: number) {
        item.selected = false;
        let target = this.listComponent.listElements[index];
        target.setAttribute('aria-selected', 'false');
        target.setAttribute('aria-checked', 'false');
        target.setAttribute('tabindex', '-1');
        if (this.isListBoxRule()) {
            target.setAttribute('class', 'mdc-list-item');
        }

        this.sendInfoToSubComponent(index, item);
    }

    setSelected(item: ComponentListElement, index: number) {
        item.selected = true;
        let target = this.listComponent.listElements[index];
        target.setAttribute('aria-selected', 'true');
        target.setAttribute('aria-checked', 'true');
        target.setAttribute('tabindex', '0');
        if (this.isListBoxRule()) {
            target.setAttribute(
                'class',
                'mdc-list-item' + ' ' + 'mdc-list-item--selected'
            );
        }

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
        return this.roleType == WupList.ROLE_CHECKBOX;
    }

    isRadioButtonRule(): boolean {
        return this.roleType == WupList.ROLE_RADIOGROUP;
    }

    isListBoxRule(): boolean {
        return this.roleType == WupList.ROLE_LISTBOX;
    }

    checkRoleType() {
        if (!this.isCheckBoxRule() && !this.isRadioButtonRule()) {
            this.roleType = WupList.ROLE_LISTBOX;
        }
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        this.listComponent = null;
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;
        if (root != null) {
            // Material design javascript initialization
            // Refer to: https://material.io/develop/web/components and choose your component
            this.listComponent = MDCList.attachTo(
                root.querySelector('.mdc-list') // Use your widget selector
            );

            this.listComponent.singleSelection = this.isSingleSelection();

            this.listComponent.listElements.map(
                (listItemEl: any) => new MDCRipple(listItemEl)
            );
        }
    }

    render() {
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
        // Host refers to container DOM element - wup-list
        // Copy your material design markup from https://material.io/develop/web/components/
        return (
            <Host>
                <div id="kup-component">
                    <ul
                        class={componentClass}
                        role={roleAttr}
                        id={this.listId}
                        aria-multiselectable={ariaMultiSelectable}
                    >
                        {this.data
                            .filter(
                                (item) =>
                                    !this.filter ||
                                    item.isSeparator ||
                                    item.text
                                        .toLowerCase()
                                        .indexOf(this.filter) >= 0
                            )
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

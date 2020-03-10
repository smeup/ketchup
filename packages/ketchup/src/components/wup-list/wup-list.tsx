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
import { MDCCheckbox } from '@material/checkbox';
import { MDCRadio } from '@material/radio';

import { MDCRipple } from '@material/ripple';
import { ComponentListElement } from './wup-list-declarations';

@Component({
    tag: 'wup-list',
    styleUrl: 'wup-list.scss',
    shadow: false,
})
export class WupList {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    @Prop() data: ComponentListElement[] = [];

    private filteredItems: ComponentListElement[] = [];
    private listComponent: MDCList = null;

    /**
     * Marks the list as filterable, allowing an input text to filter the options
     */
    @Prop({ reflect: true }) isFilterable: boolean = false;

    //---- Internal state ----
    // Keeps string for filtering elements when filter mode is active
    @State() filter: string = '';

    // false - not selectable items
    // true  - selectable items (@see role-type attribute)
    @Prop({ reflect: true }) selectable?: boolean = true;

    @Prop({ reflect: true }) listId: string = 'WupList-myId';

    // each item text fills 2 rows, (no density)
    @Prop({ reflect: true }) twoLine: boolean = false;

    @Prop({ reflect: true }) roleType?: string = WupList.ROLE_LISTBOX;

    // just single selection
    static ROLE_LISTBOX: string = 'listbox';
    // just single selection, with radio button
    static ROLE_RADIOGROUP: string = 'radiogroup';
    // just multiple selection, with check box
    static ROLE_CHECKBOX: string = 'group';

    /**
     * Defaults at false. When set to true, the component will be set to 'indeterminate'.
     */
    @Prop({ reflect: true }) indeterminate: boolean = false;

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
        item: ComponentListElement
    ) {
        const { target } = e;

        if (this.isMultiSelection()) {
            if (item.selected == true) {
                this.setUnselected(item);
            } else {
                this.setSelected(item);
            }
        }

        if (this.isSingleSelection()) {
            if (item.selected == false) {
                this.data.map((item1) => {
                    this.setUnselected(item1);
                });
                this.setSelected(item);
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

    private isSingleSelection(): boolean {
        return (
            this.roleType == WupList.ROLE_LISTBOX ||
            this.roleType == WupList.ROLE_RADIOGROUP
        );
    }

    private isMultiSelection(): boolean {
        return this.roleType == WupList.ROLE_CHECKBOX;
    }

    private isSimpleListbox(): boolean {
        return this.roleType == WupList.ROLE_LISTBOX;
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
        this.filteredItems[this.filteredItems.length] = item;
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
        let tabIndexAttr = '-1';
        if (item.selected == true && this.isSimpleListbox()) {
            classAttr += ' mdc-list-item--selected';
            tabIndexAttr = '0';
        }
        let roleAttr = 'option';
        let ariaCheckedAttr: string = null;
        let ariaSelectedAttr: string = item.selected == true ? 'true' : 'false';
        if (!this.selectable) {
            ariaSelectedAttr = null;
        }
        let innerSpanTag = [
            <span class="mdc-list-item__text">
                {primaryTextTag}
                {secTextTag}
            </span>,
        ];
        if (this.roleType == WupList.ROLE_RADIOGROUP) {
            roleAttr = 'radio';
            let checkedAttr: boolean = item.selected == true ? true : null;
            let componentClass: string = 'mdc-radio';

            if (!this.selectable) {
                componentClass += ' mdc-radio--disabled';
            }

            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <div class={componentClass}>
                        <input
                            class="mdc-radio__native-control"
                            type="radio"
                            id={this.listId + 'radio' + index}
                            name={this.listId + 'radio'}
                            value={item.value}
                            checked={checkedAttr}
                            disabled={!this.selectable}
                        ></input>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                </span>,
                <label htmlFor={this.listId + 'radio' + index}>
                    {primaryTextTag}
                    {secTextTag}
                </label>,
            ];
        } else if (this.roleType == WupList.ROLE_CHECKBOX) {
            roleAttr = 'checkbox';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let checkedAttr: boolean = item.selected == true ? true : null;

            let componentClass: string = 'mdc-checkbox';

            if (!this.selectable) {
                componentClass += ' mdc-checkbox--disabled';
            }
            if (item.selected) {
                componentClass += ' mdc-checkbox--checked';
            }

            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <div class={componentClass}>
                        {/* 
                            // @ts-ignore */}
                        <input
                            type="checkbox"
                            class="mdc-checkbox__native-control"
                            indeterminate={this.indeterminate}
                            checked={checkedAttr}
                            value={item.value}
                            id={this.listId + index}
                        />
                        <div class="mdc-checkbox__background">
                            <svg
                                class="mdc-checkbox__checkmark"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    class="mdc-checkbox__checkmark-path"
                                    fill="none"
                                    d="M1.73,12.91 8.1,19.28 22.79,4.59"
                                />
                            </svg>
                            <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                    </div>
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
                        : (e: any) => this.onKupClick(e, item)
                }
            >
                {innerSpanTag}
            </li>
        );
    }

    setUnselected(item: ComponentListElement) {
        item.selected = false;
    }

    setSelected(item: ComponentListElement) {
        item.selected = true;
    }

    getLiIndexElementForValue(key: string) {
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

    //---- Lifecycle hooks ----

    componentDidLoad() {
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;
        if (root != null) {
            if (this.roleType == WupList.ROLE_CHECKBOX) {
                root.querySelectorAll('.mdc-checkbox').forEach((c) => {
                    MDCCheckbox.attachTo(c);
                });
            }
            if (this.roleType == WupList.ROLE_RADIOGROUP) {
                root.querySelectorAll('.mdc-radio').forEach((c) => {
                    MDCRadio.attachTo(c);
                });
            }

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
        //---- Rendering ----
        let componentClass: string = 'mdc-list';
        if (!this.selectable) {
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

        console.log(
            'wup-list.render() -id: ' +
                this.listId +
                ' -data: ' +
                JSON.stringify(this.data)
        );

        this.filteredItems = [];
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

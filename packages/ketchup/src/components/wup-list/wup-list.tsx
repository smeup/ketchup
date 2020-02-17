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
import { MDCListFoundation } from '@material/list/foundation';

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

    @Prop() items: ComponentListElement[] = [];

    filteredItems: ComponentListElement[] = [];
    listComponent: MDCList = null;

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
    @Prop({ reflect: true }) selectable: string = WupList.SELECTABLE_NO_SELECT;

    static SELECTABLE_NO_SELECT: string = 'no-select';
    static SELECTABLE_ONE_SELECT: string = 'one-select';
    static SELECTABLE_MULTI_SELECT: string = 'multi-select';

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

    ___onKupClick(
        e: CustomEvent & { target: HTMLLIElement },
        item: ComponentListElement
    ) {
        const { target } = e;
        if (!(target instanceof HTMLLIElement)) {
            return;
        }
        console.log(
            'onKupClict() target: ' + target + ' item: ' + JSON.stringify(item)
        );
        this.kupClick.emit({
            selected: item,
            el: target,
        });
    }

    onKupClick(
        e: CustomEvent & { target: HTMLLIElement },
        item: ComponentListElement
    ) {
        const { target } = e;

        if (!(target instanceof HTMLLIElement)) {
            return;
        }
        console.log('onKupClict() target: ' + target);

        if (this.selectable == WupList.SELECTABLE_MULTI_SELECT) {
            if (item.selected == true) {
                this.setUnselected(item);
            } else {
                this.setSelected(item);
            }
        }
        if (this.selectable == WupList.SELECTABLE_ONE_SELECT) {
            if (item.selected == false) {
                this.items.map((item1) => {
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

    /**
     * Function which gets triggered when filter changes
     * @param event
     */
    onFilterUpdate(event: CustomEvent) {
        this.filter = event.detail.value.toLowerCase();
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            // Material design javascript initialization
            // Refer to: https://material.io/develop/web/components and choose your component
            this.listComponent = MDCList.attachTo(
                root.querySelector('.' + MDCListFoundation.cssClasses.ROOT) // Use your widget selector
            );

            if (this.selectable == WupList.SELECTABLE_ONE_SELECT) {
                this.listComponent.singleSelection = true;
            } else if (this.selectable == WupList.SELECTABLE_MULTI_SELECT) {
                this.listComponent.singleSelection = false;
            }

            this.listComponent.listElements.map(
                (listItemEl: any) => new MDCRipple(listItemEl)
            );
        }
    }

    render() {
        //---- Rendering ----
        let componentClass: string = MDCListFoundation.cssClasses.ROOT;
        if (this.selectable == WupList.SELECTABLE_NO_SELECT) {
            componentClass += ' mdc-list--non-interactive';
        }
        /*
        if (this.dense == true) {
            componentClass += ' mdc-list--dense';
        }
        */
        if (this.twoLine) {
            componentClass += ' mdc-list--two-line';
        }
        let roleAttr = this.roleType;

        let ariaMultiSelectable: string = 'false';
        if (this.selectable == WupList.SELECTABLE_MULTI_SELECT) {
            ariaMultiSelectable = 'true';
        }

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
                        {this.items
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
        let classAttr = MDCListFoundation.cssClasses.LIST_ITEM_CLASS;
        let tabIndexAttr = '-1';
        if (item.selected == true) {
            classAttr +=
                ' ' + MDCListFoundation.cssClasses.LIST_ITEM_SELECTED_CLASS;
            tabIndexAttr = '0';
        }
        let roleAttr = 'option';
        let ariaCheckedAttr: string = null;
        let ariaSelectedAttr: string = item.selected == true ? 'true' : 'false';
        if (this.selectable == WupList.SELECTABLE_NO_SELECT) {
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
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let checkedAttr: boolean = item.selected == true ? true : null;
            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <wup-radio
                        value={item.value}
                        checked={checkedAttr}
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
        } else if (this.roleType == WupList.ROLE_CHECKBOX) {
            roleAttr = 'checkbox';
            ariaCheckedAttr = item.selected == true ? 'true' : 'false';
            let checkedAttr: boolean = item.selected == true ? true : null;
            innerSpanTag = [
                <span class="mdc-list-item__graphic">
                    <div class="mdc-checkbox">
                        <input
                            type="checkbox"
                            class="mdc-checkbox__native-control"
                            id={this.listId + index}
                            value={item.value}
                            checked={checkedAttr}
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
                    this.selectable == WupList.SELECTABLE_NO_SELECT
                        ? (e: any) => e.stopPropagation()
                        : (e: any) => this.onKupClick(e, item)
                }
            >
                {innerSpanTag}
            </li>
        );
    }

    setUnselected(item: ComponentListElement) {
        let index = this.getLiIndexElementForValue(item.value);

        if (index > -1) {
            let target = this.listComponent.listElements[index];
            target.setAttribute(
                MDCListFoundation.strings.ARIA_SELECTED,
                'false'
            );
            target.setAttribute(
                MDCListFoundation.strings.ARIA_CHECKED,
                'false'
            );
            target.setAttribute(
                'class',
                MDCListFoundation.cssClasses.LIST_ITEM_CLASS
            );
        }
        item.selected = false;
    }

    setSelected(item: ComponentListElement) {
        let index = this.getLiIndexElementForValue(item.value);
        if (index > -1) {
            let target = this.listComponent.listElements[index];

            target.setAttribute(
                MDCListFoundation.strings.ARIA_SELECTED,
                'true'
            );
            target.setAttribute(MDCListFoundation.strings.ARIA_CHECKED, 'true');
            target.setAttribute(
                'class',
                MDCListFoundation.cssClasses.LIST_ITEM_CLASS +
                    ' ' +
                    MDCListFoundation.cssClasses.LIST_ITEM_SELECTED_CLASS
            );
        }
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
}

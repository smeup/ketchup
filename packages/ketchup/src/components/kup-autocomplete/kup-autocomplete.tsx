import {Component, Element, Event, EventEmitter, h, Listen, Prop, State, Watch,} from '@stencil/core';

import {AutocompleteDisplayMode, KupAutocompleteOption,} from './kup-autocomplete-declarations';

import {isEventFromElement} from '../../utils/utils';
import {GenericObject} from "../../types/GenericTypes";

@Component({
  tag: 'kup-autocomplete',
  styleUrl: 'kup-autocomplete.scss',
  shadow: true,
})
export class KupAutocomplete {
  /**
   * Sets if the autocomplete should be enabled or not
   */
  @Prop({reflect: true}) disabled: boolean = false;
  /**
   * Selects how the autocomplete items must display their label and how they can be filtered for
   */
  @Prop({reflect: true}) displayMode: AutocompleteDisplayMode = AutocompleteDisplayMode.DESCRIPTION_AND_CODE;
  /**
   * Sets the checkbox to be disabled
   *
   * Must have reflect into the attribute
   */
  @Prop() items: KupAutocompleteOption[] = [];
  /**
   * Label shown when there are no items found with a given filter
   */
  @Prop() noItemsLabel: string = 'There are no items which\nmatch with the given filter.';
  /**
   * The minimum number of chars to trigger the autocomplete
   */
  @Prop({reflect: true}) minimumChars: number = 3;
  /**
   * Allows more than one option to be selected at the same time.
   */
  @Prop({reflect: true}) multipleSelection: boolean = false;
  /**
   * The placeholder string to set to the input for the autocomplete
   */
  @Prop() placeholder: string = 'Scegli';
  /**
   * Shows the icon to clear the input
   */
  @Prop({reflect: true}) showClearIcon: boolean = false;
  /**
   * Shows icon to force the dropdown menu to be opened
   */
  @Prop({reflect: true}) showDropdownIcon: boolean = false;


  //---- Internal state ----
  @Element()
  hostEl: HTMLKupAutocompleteElement;

  @State()
  currentFilter: string = '';

  @State()
  menuIsOpen: boolean = false;

  @State()
  selectedItems: KupAutocompleteOption[] = [];

  @State()
  keyboardSelectedItem: KupAutocompleteOption | undefined;

  currentlyFilteredItems: KupAutocompleteOption[] = [];
  filterInputRef: HTMLKupTextInputElement;
  listRef: HTMLUListElement;
  scrollIntoViewFlag: boolean = false;

  //---- Public events ----

  /**
   * Fired when the checkbox input changes its value
   */
  @Event({
    eventName: 'kupAutocompleteSelectionUpdate',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupAutocompleteSelectionUpdate: EventEmitter<KupAutocompleteOption[]>;

  //---- Lifecycle hooks ----
  componentDidRender() {
    if (this.listRef && this.keyboardSelectedItem && this.scrollIntoViewFlag) {
      const toMakeVisible: HTMLElement = this.listRef.querySelector('[data-code="' + this.keyboardSelectedItem.code + '"]');
      if (toMakeVisible && toMakeVisible.scrollIntoView) {
        toMakeVisible.scrollIntoView();
      }
      this.scrollIntoViewFlag = false;
    }
  }

  //-------- Methods --------

  addItemToSelection(toAdd: KupAutocompleteOption) {
    if (!this.multipleSelection) {
      this.selectedItems = [toAdd];
      this.emitAutocompleteSelectionUpdate();
      this.closeMenu();
      if (this.filterInputRef) {
        this.filterInputRef.changeValue(this.getItemLabel(toAdd), true);
      }
    } else {
      if (!this.itemIsSelected(toAdd)) {
        this.selectedItems = [
          ...this.selectedItems,
          toAdd
        ];
        this.emitAutocompleteSelectionUpdate();
        this.closeMenu();
        this.filterInputRef.changeValue('', true);
      }
    }
  }

  closeMenu() {
    this.menuIsOpen = false;
  }

  emitAutocompleteSelectionUpdate() {
    this.kupAutocompleteSelectionUpdate.emit(this.selectedItems);
  }

  findItemIndexInCollection({code}: KupAutocompleteOption, collectionToSearchFor: KupAutocompleteOption[] = this.currentlyFilteredItems): number {
    for (let i = 0; i < collectionToSearchFor.length; i++) {
      if (collectionToSearchFor[i].code === code) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Gets the computed item label according to the displayMode prop.
   * @param item - The item from which the label will be extracted.
   * @param [separator] - Optional separator for when both code and description will be retrieved.
   */
  getItemLabel(item: KupAutocompleteOption, separator: string = ' - '): string {
    switch(this.displayMode) {
      case AutocompleteDisplayMode.CODE:
        return item.code;
      case AutocompleteDisplayMode.DESCRIPTION:
        return item.description;
      case AutocompleteDisplayMode.DESCRIPTION_AND_CODE:
      default:
        return  item.code + separator + item.description;
    }
  }

  itemIsSelected(item: KupAutocompleteOption): boolean {
    return !!this.selectedItems.find(selectedItem => selectedItem.code === item.code);
  }

  menuStateToggle() {
    if (this.menuIsOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * Opens the menu only when the component is not disabled and the menu is not already open.
   * @param checkFilterLength - If set to true, also checks if the minimum length of the filter is respected before opening the menu
   */
  openMenu(checkFilterLength: boolean = false) {
    if (
      !this.disabled && !this.menuIsOpen &&
      (!checkFilterLength || (checkFilterLength && this.currentFilter && this.currentFilter.length >= this.minimumChars) || (this.currentlyFilteredItems && this.currentlyFilteredItems.length < 1))
    ) {
      this.menuIsOpen = true;
    }
  }

  removeItemFromSelection(toRemove: KupAutocompleteOption) {
    const newlySelectedItems: KupAutocompleteOption[] = [];
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (toRemove.code !== this.selectedItems[i].code) {
        newlySelectedItems.push(this.selectedItems[i]);
      }
    }
    this.selectedItems = newlySelectedItems;
    this.emitAutocompleteSelectionUpdate();
  }

  /**
   * Updates the currentFilter, but only if the given new filter is longer than the minimum amount of chars required to trigger the search action.
   * @param newFilter - The new filter value.
   */
  updatePartialFilter(newFilter: string) {
    if (newFilter && newFilter.length >= this.minimumChars) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
    this.currentFilter = newFilter;
  }

  //---- Watchers ----
  @Watch('disabled')
  closeOnDisabledTrue(newValue: boolean) {
    if (newValue) {
      this.closeMenu();
    }
  }

  //-- Events handlers --
  handleArrowDown() {
    // If there are no selected items or the selected item is the last of the list, we set it to the first element
    if (!this.keyboardSelectedItem || this.keyboardSelectedItem.code === this.currentlyFilteredItems[this.currentlyFilteredItems.length - 1].code) {
      this.keyboardSelectedItem = this.currentlyFilteredItems[0];
    } else {
      // We have a selected item which is not the last one, we move it to the next
      const itemIndex = this.findItemIndexInCollection(this.keyboardSelectedItem);
      this.keyboardSelectedItem = itemIndex >= 0 ? this.currentlyFilteredItems[itemIndex + 1] : undefined;
    }

    this.scrollIntoViewFlag = true;
    this.openMenu();
  }

  handleArrowUp() {
    // If there are no selected items or the selected item is the last of the list, we set it to the last
    if (!this.keyboardSelectedItem || this.keyboardSelectedItem.code === this.currentlyFilteredItems[0].code) {
      this.keyboardSelectedItem = this.currentlyFilteredItems[this.currentlyFilteredItems.length - 1];
    } else {
      // We have a selected item which is not the first one, we move it to the previous
      const itemIndex = this.findItemIndexInCollection(this.keyboardSelectedItem);
      this.keyboardSelectedItem = itemIndex >= 0 ? this.currentlyFilteredItems[itemIndex - 1] : undefined;
    }

    this.scrollIntoViewFlag = true;
    this.openMenu();
  }

  handleEnter() {
    if (this.keyboardSelectedItem) {
      this.addItemToSelection(this.keyboardSelectedItem);
      this.keyboardSelectedItem = undefined;
    }
  }

  @Listen('keyup', {target: 'document'})
  keyupListener(e: KeyboardEvent) {

    // We execute the handlers only if there are some displayed items AND (the menu is open OR the current filter is long enough)
    if (
      (this.menuIsOpen || (isEventFromElement(e,this.hostEl) && this.currentFilter && this.currentFilter.length >= this.minimumChars))
      && (this.currentlyFilteredItems && this.currentlyFilteredItems.length)
    ) {
      switch (e.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          this.handleArrowDown();
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          this.handleArrowUp();
          break;
        case "Enter":
          this.handleEnter();
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
  }

  //---- Render ----
  composeAutocompleteItemList() {
    const lowercaseFilter = this.currentFilter.toLowerCase();
    let foundKeyboardSelectedItem: boolean = false;

    // Stores the filtered items for keyboard interaction use
    this.currentlyFilteredItems = this.items.filter(item => {
      return this.getItemLabel(item, ' - ').toLowerCase().indexOf(lowercaseFilter) >= 0;
    });

    // Creates elements to render
    const itemsToReturn = this.currentlyFilteredItems.map(item => {
        let classes: GenericObject = {};

        if (!foundKeyboardSelectedItem && this.keyboardSelectedItem && this.keyboardSelectedItem.code === item.code) {
          this.keyboardSelectedItem = item;
          foundKeyboardSelectedItem = true;
          classes['keyboard-selected'] = true;
        }

        return <li
          class={classes}
          data-code={item.code}
          onClick={() => this.addItemToSelection(item)}
        >{this.getItemLabel(item)}</li>
      });

    // When, among the filtered items to render there is no keyboardSelectedItem,
    // then it means it was filtered so we remove it from selection.
    if (!foundKeyboardSelectedItem) {
      this.keyboardSelectedItem = undefined;
    }

    return itemsToReturn;
  }

  composeMultipleSelectionContainer() {
    return <div class="autocomplete-multiple-selection-container">{
      this.selectedItems.map(selectedItem => {

        return <kup-chip
            closable={true}
            onClose={() => this.removeItemFromSelection(selectedItem)}>
          {this.getItemLabel(selectedItem, ' - ')}
        </kup-chip>;
      })
    }</div>;
  }

  render() {
    const autocompleteItems = this.composeAutocompleteItemList();

    return (
      <div class={'autocomplete' + (this.menuIsOpen ? ' is-active' : '')}>
        {
          this.multipleSelection ?
            this.composeMultipleSelectionContainer() :
            null
        }
        <kup-text-input
          disabled={this.disabled}
          isClearable={this.showClearIcon}
          placeholder={this.placeholder}
          ref={(el) => this.filterInputRef = el as HTMLKupTextInputElement}
          onKetchupTextInputFocused={() => {this.openMenu(true)}}
          onKetchupTextInputUpdated={(e: CustomEvent) => this.updatePartialFilter(e.detail.value)}>
          <kup-menu
            isActive={this.menuIsOpen}
            slot="left"
            onKupMenuClose={() => {this.closeMenu()}}>
            {
              !autocompleteItems || !autocompleteItems.length ?
                <div
                  class="autocomplete__no-items"
                  slot="top-container">{this.noItemsLabel}</div>:
                null
            }
            <ul
              class="autocomplete__item-list"
              ref={(el) => this.listRef = el as HTMLUListElement}>
              {autocompleteItems}
            </ul>
          </kup-menu>
          {
            this.showDropdownIcon ?
              <kup-icon
                class="autocomplete__menu-toggle-icon"
                iconClass={"mdi mdi-menu-down"}
                role="button"
                slot="right"
                onClick={this.menuStateToggle.bind(this)}/> :
              null
          }
        </kup-text-input>
      </div>
    );
  }
}

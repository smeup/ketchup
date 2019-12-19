import {Component, Event, EventEmitter, h, Prop, State, Watch,} from '@stencil/core';

import {AutocompleteDisplayMode, KupAutocompleteOption,} from './kup-autocomplete-declarations';

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
  @State()
  currentFilter: string = '';

  @State()
  menuIsOpen: boolean = false;

  @State()
  selectedItems: KupAutocompleteOption[] = [];

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

  //-------- Methods --------

  closeMenu() {
    this.menuIsOpen = false;
  }

  emitAutocompleteSelectionUpdate() {
    this.kupAutocompleteSelectionUpdate.emit(this.selectedItems);
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
    console.log(this.currentFilter);
    if (
      !this.disabled && !this.menuIsOpen &&
      (!checkFilterLength || (checkFilterLength && this.currentFilter && this.currentFilter.length >= this.minimumChars))
    ) {
      this.menuIsOpen = true;
    }
  }

  //---- Watchers ----
  @Watch('disabled')
  closeOnDisabledTrue(newValue: boolean) {
    if (newValue) {
      this.closeMenu();
    }
  }

  //-- Events handlers --
  addItemToSelection(toAdd: KupAutocompleteOption) {
    if (!this.multipleSelection) {
      this.selectedItems = [toAdd];
      this.emitAutocompleteSelectionUpdate();
      this.closeMenu();
      //TODO update the value of the text input
    } else {
      if (!this.itemIsSelected(toAdd)) {
        this.selectedItems = [
          ...this.selectedItems,
          toAdd
        ];
        this.emitAutocompleteSelectionUpdate();
        this.closeMenu();
      }
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

  //---- Lifecycle hooks ----

  //---- Render ----
  composeAutocompleteItemList() {
    const lowercaseFilter = this.currentFilter.toLowerCase();

    return this.items.filter(item => {
      return this.getItemLabel(item, ' - ').toLowerCase().indexOf(lowercaseFilter) >= 0;
    })
      .map(item => {
        return <li
          onClick={() => this.addItemToSelection(item)}
        >{this.getItemLabel(item)}</li>
      });
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
    return (
      <div class="autocomplete">
        {
          this.multipleSelection ?
            this.composeMultipleSelectionContainer() :
            null
        }
        <kup-text-input
          isClearable={this.showClearIcon}
          placeholder={this.placeholder}
          onKetchupTextInputUpdated={(e: CustomEvent) => this.updatePartialFilter(e.detail.value)}
          onKetchupTextInputFocused={() => {this.openMenu(true)}}>
          <kup-menu
            isActive={this.menuIsOpen}
            slot="left"
            onKupMenuClose={() => {this.closeMenu()}}>
            <ul class="autocomplete__item-list">
              {this.composeAutocompleteItemList()}
            </ul>
          </kup-menu>
          {
            this.showDropdownIcon ?
              <kup-icon
                class="autocomplete__menu-toggle-icon"
                iconClass={"mdi mdi-menu-down"}
                role="button"
                slot="right"/> :
              null
          }
        </kup-text-input>
      </div>
    );
  }
}

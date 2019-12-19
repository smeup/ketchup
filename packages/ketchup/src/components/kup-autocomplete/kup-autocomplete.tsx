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
    // TODO if too slow, then do not use the .filter function but a regular for cycle
    this.kupAutocompleteSelectionUpdate.emit(this.selectedItems);
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
   * Opens the menu only when the component is not disabled.
   */
  openMenu() {
    if (!this.disabled) {
      this.menuIsOpen = true;
    }
  }

  //-- Events handlers --
  removeItemFromSelection(toRemove: KupAutocompleteOption) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (toRemove.code === this.selectedItems[i].code) {
        this.selectedItems.splice(i, 1);
        this.emitAutocompleteSelectionUpdate();
        break;
      }
    }

  }

  //---- Lifecycle hooks ----


  //---- Watchers ----
  @Watch('disabled')
  closeOnDisabledTrue(newValue: boolean) {
    if (newValue) {
      this.closeMenu();
    }
  }

  //---- Render ----

  composeMultipleSelectionContainer() {
    return <div class="autocomplete-multiple-selection-container">{
      this.selectedItems.map(selectedItem => {

        // TODO maybe use a function for this
        let label = '';
        switch(this.displayMode) {
          case AutocompleteDisplayMode.CODE:
            label = selectedItem.code;
            break;
          case AutocompleteDisplayMode.DESCRIPTION:
            label = selectedItem.description;
            break;
          case AutocompleteDisplayMode.DESCRIPTION_AND_CODE:
          default:
            label = selectedItem.code + ' - ' + selectedItem.description;
            break;
        }

        return <kup-chip
            closable={true}
            onClose={() => this.removeItemFromSelection(selectedItem)}>
          {label}
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
        <span
          class={'checkbox-menu__label' + (this.disabled ? ' checkbox-menu__label--disabled' : '')}
          onClick={this.menuStateToggle.bind(this)}>
          {this.placeholder}
          <kup-icon iconClass={"mdi mdi-menu-down"}/>
        </span>
      </div>
    );
  }
}

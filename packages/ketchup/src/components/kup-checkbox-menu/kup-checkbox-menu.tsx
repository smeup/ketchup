import {
  Component,
  Event,
  Prop,
  State,
  Watch,
  EventEmitter,
  h,
  //Method,
} from '@stencil/core';

import {KupCheckboxMenuItem} from './kup-checkbox-menu-declarations';

import {basicListFilter} from '../../utils/filters';

@Component({
  tag: 'kup-checkbox-menu',
  styleUrl: 'kup-checkbox-menu.scss',
  shadow: true,
})
export class KupCheckboxMenu {
  /**
   * Chooses which field of an item object should be used to create the list and be filtered.
   */
  @Prop() displayedField: string = 'id';
  /**
   * Sets if the checkbox menu should be disabled
   */
  @Prop({reflect: true}) disabled: boolean = false;
  /**
   * The label to show as a placeholder inside the filter input
   */
  @Prop()
  filterLabel: string = 'Filtra per';
  /**
   * Sets the checkbox to be disabled
   *
   * Must have reflect into the attribute
   */
  @Prop() items: KupCheckboxMenuItem[] = [];
  /**
   * Marks the field as filterable, allowing an input text to filter the options
   */
  @Prop({ reflect: true }) isFilterable: boolean = true;
  /**
   * The label to set to the component
   */
  @Prop() label: string = 'Scegli';
  /**
   * Chooses which field of an item object should be used to create the list and be filtered.
   */
  @Prop() valueField: string = 'id';


  //---- Internal state ----
  @State()
  currentFilter: string = '';

  @State()
  menuIsOpen: boolean = false;

  @State()
  selectedItems: string[] = [];

  //---- Public events ----

  /**
   * Fired when the checkbox input changes its value
   */
  @Event({
    eventName: 'kupCheckboxMenuSelected',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupCheckboxMenuSelected: EventEmitter<KupCheckboxMenuItem[]>;

  //-------- Methods --------

  closeMenu() {
    this.menuIsOpen = false;
  }

  emitCheckboxSelectionUpdate() {
    // TODO if too slow, then do not use the .filter function but a regular for cycle
    this.kupCheckboxMenuSelected.emit(this.items.filter(item => this.itemIsSelected(item)));
  }

  itemIsSelected(item: KupCheckboxMenuItem, fieldToCheck: string = this.valueField): boolean {
    return this.selectedItems.indexOf(item[fieldToCheck]) >= 0;
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

  handleCheckboxItemStateChange(item: KupCheckboxMenuItem, e: CustomEvent) {
    if (e.detail.checked) {
      if (!this.itemIsSelected(item)) {
        // When the given item is not already selected, we select it and emit update event
        this.selectedItems = [
          ...this.selectedItems,
          item[this.valueField]
        ];
        this.emitCheckboxSelectionUpdate();
      }
    } else {
      if (this.itemIsSelected(item)) {
        // When the given item is already selected, we deselect it and emit update event
        this.selectedItems.splice(this.selectedItems.indexOf(item[this.valueField]),1);
        this.emitCheckboxSelectionUpdate();
      }
    }
  }

  toggleAllCheckboxesSelection(e: CustomEvent) {
    if (e.detail.checked) {
      // Selects all items
      this.selectedItems = this.items.map(item => item[this.valueField]); // TODO if there are perfomance issues, then convert to standard for cycle
    } else {
      // Deselect all items
      this.selectedItems = [];
    }

    this.emitCheckboxSelectionUpdate();
  }

  //---- Lifecycle hooks ----


  // ---- Watchers ----
  @Watch('disabled')
  closeOnDisabledTrue(newValue: boolean) {
    if (newValue) {
      this.closeMenu();
    }
  }

  @Watch('valueField')
  updateSelectedItemsArray(newValue: string, oldValue: string) {
    if (this.items && this.items.length) {
      const convertedSelectedItems: string[] = [];

      for (let i = 0; i < this.items.length; i++) {
        if (this.selectedItems.indexOf(this.items[i][oldValue]) >= 0 && this.items[i][newValue]) {
          convertedSelectedItems.push(this.items[i][newValue]);
        }
      }

      this.selectedItems = convertedSelectedItems;
    }
  }

  //---- Render ----
  renderCheckboxList() {
    const itemsToRender = this.isFilterable && this.currentFilter.length ?
      basicListFilter(this.items, this.currentFilter, this.displayedField) :
      this.items;

    return <ul class="checkbox-menu-list">
      {
        itemsToRender.map((item) => {
          return <li>
            <kup-checkbox
              checked={this.selectedItems.indexOf(item[this.valueField]) >= 0}
              label={item[this.displayedField]}
              showLabel={true}
              onKupCheckboxChange={(e: CustomEvent) => {this.handleCheckboxItemStateChange(item, e)}}
            />
          </li>
        })
      }
    </ul>;
  }


  render() {


    return (
      <div class="checkbox-menu">
        <span
          class={'checkbox-menu__label' + (this.disabled ? ' checkbox-menu__label--disabled' : '')}
          onClick={this.menuStateToggle.bind(this)}>
          {this.label}
          <kup-icon iconClass={"mdi mdi-menu-down"}/>
        </span>

        <kup-menu
          isActive={this.menuIsOpen}
          onKetchupMenuClose={this.closeMenu.bind(this)}>
          <div
            class="checkbox-menu-header"
            slot="top-container">
            <kup-checkbox
              onKupCheckboxChange={(e: CustomEvent) => {this.toggleAllCheckboxesSelection(e)}}/>
            {
              this.isFilterable ?
                <kup-text-input
                  placeholder={this.filterLabel}
                  onKetchupTextInputUpdated={(e: CustomEvent) => {this.currentFilter = e.detail.value;}}/>
                : null
            }
            <kup-icon
              iconClass={"mdi mdi-close"}
              onClick={this.closeMenu.bind(this)}/>
          </div>
          {this.renderCheckboxList()}
        </kup-menu>
      </div>
    );
  }
}

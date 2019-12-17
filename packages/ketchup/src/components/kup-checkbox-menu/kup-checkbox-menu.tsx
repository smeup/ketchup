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
   * Fired when the checkbox input is blurred
   */
  @Event({
    eventName: 'kupCheckboxBlur',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupCheckboxBlur: EventEmitter<{
    checked: boolean;
  }>;

  /**
   * Fired when the checkbox input changes its value
   */
  @Event({
    eventName: 'kupCheckboxChange',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupCheckboxChange: EventEmitter<{
    checked: boolean;
  }>;

  /**
   * Fired when the checkbox input receive focus
   */
  @Event({
    eventName: 'kupCheckboxFocus',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupCheckboxFocus: EventEmitter<{
    checked: boolean;
  }>;

  //-------- Methods --------

  //-- Events handlers --

  closeMenu() {
    this.menuIsOpen = false;
  }

  handleCheckboxItemStateChange(item: KupCheckboxMenuItem, e: Event) {

  }

  //---- Lifecycle hooks ----


  // ---- Watchers ----
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

    return <ul>
      {
        itemsToRender.map((item) => {
          return <li>
            <kup-checkbox
              checked={this.selectedItems.indexOf(item[this.valueField]) >= 0}
              label={item[this.displayedField]}
              onKupCheckboxChange={(e: Event) => {this.handleCheckboxItemStateChange(item, e)}}
            />
          </li>
        })
      }
    </ul>;
  }


  render() {
    return (
      <div>
        <kup-input label={this.label}></kup-input>
        <kup-menu
          isActive={this.menuIsOpen}
          onKetchupMenuClose={this.closeMenu.bind(this)}
          >
          <div slot="top-container">
            <kup-checkbox/>
            {
              this.isFilterable ?
                <kup-input></kup-input>
                : null
            }
            <kup-button
              button-class="mdi mdi-close"
              flat
              showicon
            />
          </div>
          {this.renderCheckboxList()}
        </kup-menu>
      </div>
    );
  }
}

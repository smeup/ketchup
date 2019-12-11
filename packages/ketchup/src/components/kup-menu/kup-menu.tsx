import {Component, Element, h, Host, Prop,} from '@stencil/core';

import {KupMenuAllowedPositions} from './kup-menu-declarations';
import {NODE_TYPES} from "@stencil/core/mock-doc";

@Component({
  tag: 'kup-menu',
  styleUrl: 'kup-menu.scss',
  shadow: true,
})
export class KupMenu {
  /**
   * When set to true, the menu will automatically close when the user clicks outside of its deactivationRelativeTo prop.
   * @see deactivationRelativeTo
   */
  @Prop({reflect: true})
  closeOnOuterClick: boolean = true;

  /**
   * HTML element ancestor of the current kup-menu instance. When closeOnOuterClick is set to true,
   * the menu will search for this element inside the event path: if found, then the menu will not be closed.
   * If left to null, once, when the component menu is mounted, this prop will be automatically set to the parent HTML element.
   * @see closeOnOuterClick
   */
  @Prop({mutable: true})
  deactivationRelativeTo: HTMLElement = null;

  /**
   * Open or closes the menu. The menu itself can edit this prop.
   * @see closeOnOuterClick
   * @see deactivationRelativeTo
   */
  @Prop({reflect: true, mutable: true})
  isActive: boolean = false;

  /**
   * Forces the menu to open on a given position.
   * The default value allows the menu to open itself in the best position according to its calculation.
   * @see positionRelativeTo
   */
  @Prop({reflect: true})
  position: KupMenuAllowedPositions = KupMenuAllowedPositions.AUTO;

  /**
   * The element relative to which the menu will be opened in a given position.
   * If left to null, once, when the component menu is mounted, this prop will be automatically set to the parent HTML element.
   * @see position
   */
  @Prop({mutable: true})
  positionRelativeTo: HTMLElement = null;

  //-------- Internal State --------
  @Element() menuElement: HTMLElement;

  //-------- Lifecycle hooks --------

  componentDidLoad() {

    // If there are no positionRelativeTo or deactivationRelativeTo elements set, we set them to the parent component
    const parentElement = this.getMenuParentNode();

    if (!this.positionRelativeTo) {
      this.positionRelativeTo = parentElement;
    }
    if (!this.deactivationRelativeTo) {
      this.deactivationRelativeTo = parentElement;
    }
  }

  //-------- Methods --------

  getMenuParentNode(): HTMLElement {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    if (this.menuElement.parentNode.nodeType === NODE_TYPES.DOCUMENT_FRAGMENT_NODE) {
      // The component is a direct child of another web component (or contained inside a shadow dom)
      // https://stackoverflow.com/questions/25339932/get-shadow-root-host-element
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode
      // Still used this method due to the fact that currently it has a slightly better support.
      // https://caniuse.com/#feat=mdn-api_shadowroot_host
      // https://caniuse.com/#search=getRootNode
      // TODO migrate to better method invocation
      return (this.menuElement.parentNode as any).host; // THis here gets an error in typescript, but its strange since its supported.
    } else {
      // The parent component is child of an HTML element
      return this.menuElement.parentElement;
    }
  }


  render() {
    return <Host>
      <div class="menu-optional-container menu-optional-container--top">
        <slot name="top-container"/>
      </div>
      <div class="menu-content">
        <slot/>
      </div>
      <div class="menu-optional-container menu-optional-container--bottom">
        <slot name="bottom-container"/>
      </div>
    </Host>;
  }
}

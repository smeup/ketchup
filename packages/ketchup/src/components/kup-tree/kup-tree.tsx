import {
  Component,
  // Element,
  // Event,
  // EventEmitter,
  // Method,
  Prop,
  // State,
  //Watch,
  h,
} from '@stencil/core';

/*import {
  ComboItem,
  ComboPosition,
  KetchupComboEvent,
} from './kup-combo-declarations';
import { eventFromElement } from '../../utils/utils';
import { getElementOffset } from '../../utils/offset';
import { GenericObject } from '../../types/GenericTypes';
*/

@Component({
  tag: 'kup-tree',
  styleUrl: 'kup-tree.scss',
  shadow: true,
})
export class KupTree {
  /**
   * The json data used to populate the tree view.
   */
  @Prop() data: JSON;
  /**
   * Flag: the nodes of the whole tree must be already expanded upon loading.
   */
  @Prop() expanded: boolean = false;
  /**
   * Shows the tree data as a table.
   */
  @Prop() showColumns: boolean = false;
  /**
   * Flag: shows the header of the tree when the tree is displayed as a table.
   * @see showColumns
   */
  @Prop() showHeader: boolean = false;
  /**
   * Show the icons of the various nodes of the tree.
   */
  @Prop() showIcons: boolean = true;
  /**
   * An array of integers containing the path to a selected child.\
   * Groups up the properties SelFirst, SelItem, SelName.
   */
  @Prop() selectedNode: Number[]= [];
  /**
   * When a node has options in its data and is on mouse over state while this prop is true,
   * the node must shows the cog wheel to trigger object navigation upon click.
   *
   * This will generate an event to inform the navigation object has been activated.
   */
  @Prop() showObjectNavigation: boolean = false;
  /**
   * When the component must use the dynamic expansion feature to open its nodes, it means that not all the nodes of the
   * tree have been passed inside the data property.
   *
   * Therefore, when expanding a node, the tree must emit an event (or run a given callback)
   * and wait for the child nodes to be downloaded from the server.
   *
   * For more information:
   * @see dynamicExpansionCallback
   */
  @Prop() useDynamicExpansion: boolean = false;
  /**
   * Function that gets invoked when a new set of nodes must be loaded as children of a node.
   * Used in combination with showObjectNavigation.
   *
   * When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop.
   * 1 - If this prop is set to null, no callback to download data is available:
   *    the component will emit an event requiring the parent to load the children of the given node.
   * 2 - If this prop is set to have a callback, then the component will automatically make requests to load children of
   *    a given node. After the load has been completed, a different event will be fired to alert the parent of the change.
   *
   * @see useDynamicExpansion
   */
  @Prop() dynamicExpansionCallback: Function | null = null;
  /**
   * Nodes of the tree are draggable and can be sorted.
   * Currently this feature is not available.
   */
  // @Prop() draggableNodes: boolean = false;

  //-------- Rendering --------
  renderHeader() {
    return null;
  }

  renderTree(treeData) {


    return null;
  }

  render() {
    return (
      <table>
        <thead class={{'header--is-visible': this.showHeader}}>
          {this.renderHeader()}
        </thead>
        <tbody>
          {this.renderTree(this.data)}
        </tbody>
      </table>
    );
  }
}

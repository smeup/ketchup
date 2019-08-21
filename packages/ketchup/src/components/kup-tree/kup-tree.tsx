import {
  Component,
  // Element,
  Event,
  EventEmitter,
  // Method,
  Prop,
  // State,
  Watch,
  h,
} from '@stencil/core';

import {
  //Cell,
  Column,
  //RowAction,
} from "./../kup-data-table/kup-data-table-declarations";

import {
  treeExpandedPropName,
  TreeNode
} from "./kup-tree-declarations";

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
   * The columns of the tree when tree visualization is active
   */
  @Prop() columns?: Column[];
  /**
   * The json data used to populate the tree view.
   */
  @Prop() data: TreeNode;
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

  //-------- State --------


  //-------- Events --------
  /**
   * When a cell option is clicked
   */
  @Event({
    eventName: 'kupTreeNodeActionClicked',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupTreeNodeOptionClicked: EventEmitter<{
    column: string;
    // row: Row;
  }>;

  /**
   * Fired when a node of the tree has been selected
   */
  @Event({
    eventName: 'kupTreeNodeSelected',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupTreeNodeSelected: EventEmitter<{
    column: string;
    // row: Row;
  }>;

  /**
   * Fired when a dynamicExpansion has been triggered.
   */
  @Event({
    eventName: 'kupTreeNodeExpand',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  kupTreeNodeExpand: EventEmitter<{
    column: string;
    // row: Row;
  }>;

  //-------- Lifecycle hooks --------
  componentWillLoad() {
    if (this.data) {
      // When the nodes must be expanded upon loading and the tree is not using a dynamicExpansion
      // the default value of the treeExpandedPropName is set to true
      this.enrichWithIsExpanded(this.data, this.expanded && !this.useDynamicExpansion)
    }
  }

  //-------- Watchers --------
  @Watch('data')
  enrichDataWhenChanged(newData, oldData) {
    if (newData !== oldData) {
      this.enrichWithIsExpanded(newData);
    }
  }

  //-------- Methods --------
  enrichWithIsExpanded(treeNode: TreeNode, expandNode: boolean = false) {
    // The node is expandable, which means there are sub trees
    if (treeNode.expandable) {
      // If the node does not already have the property to toggle expansion we add it
      if (!treeNode.hasOwnProperty(treeExpandedPropName)) {
        treeNode[treeExpandedPropName] = expandNode;
      }

      // Enriches also direct subtrees recursively (if it has children)
      if (treeNode.children && treeNode.children.length) {
        // To save some function calls, only child elements which are expandable will be enriched
        for (let i = 0; i < treeNode.children.length; i ++) {
          if (treeNode.children[i].expandable) {
            this.enrichWithIsExpanded(treeNode.children[i], expandNode);
          }
        }
      }
    }
  }


  //-------- Rendering --------
  renderHeader() {
    return null;
  }

  renderTree(treeData) {

    if (treeData) {

    }

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

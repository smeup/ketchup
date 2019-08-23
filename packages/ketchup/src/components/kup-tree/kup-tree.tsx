import {Component, Event, EventEmitter, h, Prop, State, Watch, JSX} from '@stencil/core';

import {Cell, Column,} from "./../kup-data-table/kup-data-table-declarations";

import {treeExpandedPropName, TreeNode, TreeNodePath,} from "./kup-tree-declarations";

import {isBar, isButton, isCheckbox, isIcon, isImage, isLink, isVoCodver,} from '../../utils/object-utils';

import {styleHasBorderRadius,} from './../kup-data-table/kup-data-table-helper';

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
  @Prop({reflect: true}) showIcons: boolean = true;
  /**
   * An array of integers containing the path to a selected child.\
   * Groups up the properties SelFirst, SelItem, SelName.
   */
  @Prop() selectedNode: TreeNodePath = [];
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
  private visibleColumns: Column[] = [];

  @State() stateSwitcher: boolean = false;

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
    treeNodePath: TreeNodePath,
    treeNode: TreeNode,
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
      this.data.children.forEach(rootNode => {this.enrichWithIsExpanded(rootNode, this.expanded && !this.useDynamicExpansion)})
    }
  }

  //-------- Watchers --------
  @Watch('data')
  enrichDataWhenChanged(newData, oldData) {
    if (newData !== oldData) {
      newData.children.forEach(rootNode => {this.enrichWithIsExpanded(rootNode)});
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

  /**
   * Forces component update with a simple trick.
   * Should be avoided if possible.
   * Thinking about a more clean and functional solution.
   * @todo Find a better way to achieve this. And maybe also where to store the expanded flag.
   * @author Francesco Bonacini f.bonacini@dreamonkey.com
   */
  forceUpdate() {
    this.stateSwitcher = !this.stateSwitcher;
  }

  // When a TreeNode must be expanded or closed
  hdlTreeNodeClicked(treeNodeData: TreeNode, treeNodePath: string) {
    const hasExpandIcon: boolean = !!(treeNodeData.expandable && treeNodeData.children && treeNodeData.children.length);

    // If this TreeNode is not disabled, then it can be selected and an event is emitted
    if (!treeNodeData.disabled) {
      this.kupTreeNodeSelected.emit({
        treeNodePath: treeNodePath.split(',').map(treeNodeIndex => parseInt(treeNodeIndex)),
        treeNode: treeNodeData
      });
    }

    // if this element can be expanded or closed, it does so.
    // TODO check the 8th todo in the readme
    if (hasExpandIcon) {
      treeNodeData[treeExpandedPropName] = !treeNodeData[treeExpandedPropName];
      this.forceUpdate();
    }
  }


  //-------- Rendering --------
  /**
   * Factory function for cells.
   * @param cell - cell object
   * @param column - the cell's column name
   * @param previousRowCellValue - An optional value of the previous cell on the same column. If set and equal to the value of the current cell, makes the value of the current cell go blank.
   * @param cellData - Additional data for the current cell.
   * @param cellData.column - The column object to which the cell belongs.
   * @param cellData.row - The row object to which the cell belongs.
   */
  private renderCell(
    cell: Cell,
    column: string,
    cellData: {
      column: Column;
      row: TreeNode;
    },
    previousRowCellValue?: string
  ) {
    // TODO missing a piece to create a complete rendering of a cell @see kup-data-table row 1145 (basically missing style={cellStyle} class={cellClass} and cellOptions)

    // When the previous row value is different from the current value, we can show the current value.
    const valueToDisplay =
      previousRowCellValue !== cell.value ? cell.value : '';

    // Sets the default value
    let content: any = valueToDisplay;

    if (isIcon(cell.obj) || isVoCodver(cell.obj)) {
      content = <span class={valueToDisplay} />;
    } else if (isImage(cell.obj)) {
      content = (
        <img src={valueToDisplay} alt="" width="64" height="64" />
      );
    } else if (isLink(cell.obj)) {
      content = (
        <a href={valueToDisplay} target="_blank">
          {valueToDisplay}
        </a>
      );
    } else if (isCheckbox(cell.obj)) {
      content = (
        <kup-checkbox
          checked={!!cell.obj.k}
          disabled={
            cellData &&
            cellData.row &&
            cellData.row.hasOwnProperty('readOnly')
              ? cellData.row.readOnly
              : true
          }
        />
      );
    } else if (isButton(cell.obj)) {
      /**
       * Here either using .bind() or () => {} function would bring more or less the same result.
       * Both those syntax would create at run time a new function for each cell on which they're rendered.
       * (See references below.)
       *
       * Another solution would be to simply bind an event handler like this:
       * onKupButtonClicked={this.onJ4btnClicked}
       *
       * The problem here is that, by using that syntax:
       * 1 - Each time a cell is rendered with an object item, either the cell or button must have a data-row,
       *      data-column and data-cell-name attributes which stores the index of cell's and the name of the clicked cell;
       * 2 - each time a click event is triggered, the handler reads the row and column index set on the element;
       * 3 - searches those column and row inside the current data for the table;
       * 4 - once the data is found, creates the custom event with the data to be sent.
       *
       * Currently there is no reason to perform such a search, but it may arise if on large data tables
       * there is a significant performance loss.
       * @see https://reactjs.org/docs/handling-events.html
       */

       //TODO 2: check if this must be added to the cells parsing content
       content = (
        <kup-button
          /*{...createJ4objButtonConfig(cell)}*/
          onKupButtonClicked={ e => console.log("kup tree J4btn clicked event", e, column)
            /*this.onJ4btnClicked.bind(
            this,
            cellData ? cellData.row : null,
            cellData ? cellData.column : null,
            cell
          )*/}
        />
      );
    } else if (isBar(cell.obj)) {
      const props: { value: string; width?: number } = {
        value: cell.value,
      };

      // TODO 2 check with Giovanni
      // check if column has width
      /*if (this.columnsWidth && this.columnsWidth[column]) {
        props.width = this.columnsWidth[column];
      }
      */

      // Controls if we should display this cell value
      content = valueToDisplay ? <kup-graphic-cell {...props} /> : null;
    }

    // TODO
    // else if (isProgressBar(cell.obj)) {
    //     content = <kup-progress-bar />;
    // }

    // if cell.style has border, apply style to cellcontent
    let style = null;
    if (styleHasBorderRadius(cell)) {
      style = cell.style;
    }

    return (
      <span class="cell-content" style={style}>
        {content}
      </span>
    );
  }

  /**
   * Renders the header of the tree when it must be displayed as a table.
   * @returns An array of table header cells.
   */
  private renderHeader(): JSX.Element[] {
    return this.visibleColumns.map(column => <th>
        <span class="column-title">{column.title}</span>
      </th>
    );
  }

  /**
   * Given a TreeNode, reads through its data then composes and returns its JSX object.
   * @param treeNodeData - The TreeNode object to parse.
   * @param treeNodePath - A string containing the comma(,) separated indexes of the TreeNodes to use,
   *    sorted from left to right, to access the current TreeNode starting from the data prop children object.
   * @param treeNodeDepth - An integer to keep track of the depth level of the current TreeNode. Used for indentation.
   * @returns The the JSX created from the current tree node.
   */
  private renderTreeNode(treeNodeData: TreeNode, treeNodePath: string, treeNodeDepth: number = 0): JSX.Element {
    // Creates the indentation of the current element. Use a css variable to specify padding.
    let indent = treeNodeDepth
      ? <span
          class="kup-tree__indent"
          style={{ ["--tree-node_depth"]: treeNodeDepth.toString() }}/>
      : null;

    // If the tree node is expandable, adds the icon to show the expansion. If it is not expandable, we simply add a placeholder with no icons.
    const hasExpandIcon: boolean = !!(treeNodeData.expandable && treeNodeData.children && treeNodeData.children.length);
    let treeExpandIcon = <span class={"kup-tree__icon kup-tree__node__expander" + (hasExpandIcon ? " mdi mdi-menu-down" : null)}/>;

    // When TreeNode icons are visible, creates the icon if one is specified
    let treeNodeIcon = this.showIcons
      ? <span class={"kup-tree__icon mdi mdi-" + treeNodeData.iconClass}/>
      : null;

    // Composes additional options for the tree node element
    let treeNodeOptions = {};
    if (treeNodeData.hasOwnProperty(treeExpandedPropName) && treeNodeData[treeExpandedPropName] && hasExpandIcon) {
      // If the node can be expanded it has this attribute set to if this node is expanded or not.
      treeNodeOptions['data-is-expanded'] = treeNodeData[treeExpandedPropName];
    }

    // When can be expanded
    if (hasExpandIcon) {
      treeNodeOptions['onClick'] = () => {
        console.log('Cliccato elemento', treeNodePath);
        this.hdlTreeNodeClicked(treeNodeData, treeNodePath);
      };
    }

    // When a tree node is displayed as a table
    let treeNodeCells: JSX.Element[] | null = null;
    if (this.showColumns && this.visibleColumns && this.visibleColumns.length) {
      treeNodeCells = [];
      // Renders all the cells
      for (let j = 0; j < this.visibleColumns.length; j++) {
        const column = this.visibleColumns[j];
        treeNodeCells.push(
          <td>{
            this.renderCell(
              treeNodeData.cells[column.name],
              column.name,
              {
                column,
                row: treeNodeData
              }
            )
          }</td>
        );
      }
    }

    return (
      <tr
        class={{
          "kup-tree__node": true,
          "kup-tree__node--disabled": treeNodeData.disabled,
        }}
        data-tree-path={treeNodePath}
        {...treeNodeOptions}>
        <td>
          {indent}
          {treeExpandIcon}
          {treeNodeIcon}
          <span>{treeNodeData.value}</span>
        </td>
        {treeNodeCells}
      </tr>
    );
  }

  /**
   * Given a TreeNode, reads through its data to compose and return the TreeNodes of the root of this TreeNode
   * and its children nodes, composing an array of JSX TreeNodes.
   * @param treeNodeData - The TreeNode object to parse.
   * @param treeNodePath - A string containing the comma(,) separated indexes of the TreeNodes to use,
   *    sorted from left to right, to access the current TreeNode starting from the data prop children object.
   * @param treeNodeDepth - An integer to keep track of the depth level of the current TreeNode. Used for indentation.
   * @returns An array of JSX TreeNodes created from the given treeNodeData.
   */
  private renderTree(treeNodeData: TreeNode, treeNodePath: string, treeNodeDepth: number = 0): JSX.Element[] {
    let treeNodes = [];

    if (treeNodeData) {
      // Creates and adds the root of the current tree
      treeNodes.push(
        this.renderTreeNode(treeNodeData, treeNodePath, treeNodeDepth)
      );

      // Checks if the current node can be expanded, has children and is expanded
      if (treeNodeData.expandable && treeNodeData.children.length && treeNodeData[treeExpandedPropName]) {
        for (let i = 0; i < treeNodeData.children.length; i++) {
          treeNodes = treeNodes.concat(this.renderTree(
            treeNodeData.children[i],
            treeNodePath + ',' + i,
            treeNodeDepth + 1)
          );
        }
      }
    }

    return treeNodes;
  }

  render() {
    // Computes the visible columns for later use
    if (this.showColumns && this.columns) {
      this.visibleColumns = this.columns.filter(column => column.hasOwnProperty('visible') ? column.visible : true);
    }

    // Composes TreeNodes
    let treeNodes: JSX.Element[] = [];
    if (this.data && this.data.children && this.data.children.length) {
      this.data.children.forEach((zeroDepthNode, index) => {
        treeNodes = treeNodes.concat(this.renderTree(zeroDepthNode, index.toString()));
      });
    } else {
      // There are no TreeNodes, so we print a single cell with a caption
      treeNodes.push(
        <tr><td>Nessun elemento nell'albero</td></tr>
      );
    }

    // Calculates if header must be shown or not
    // TODO check if this method here is correct when there are columns but the header does not have all cells
    const visibleHeader = this.showHeader && this.showColumns;

    return [
      <link href='https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css' rel="stylesheet" type="text/css" />,
      <table class="kup-tree">
        <thead class={{'header--is-visible': visibleHeader}}>
          <tr>
            <th/>
            {visibleHeader ? this.renderHeader() : null}
          </tr>
        </thead>
        <tbody>
          {treeNodes}
        </tbody>
      </table>
    ];
  }
}

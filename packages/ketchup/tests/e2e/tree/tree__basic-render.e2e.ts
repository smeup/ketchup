/**
 * NOTES:
 * In this test suites, TreeNodes are not expanded.
 */
import { newE2EPage } from '@stencil/core/testing';

import { Column,  } from '../../../src/components/kup-data-table/kup-data-table-declarations';
import { TreeNode,  } from '../../../src/components/kup-tree/kup-tree-declarations';
import { TreeConfigData, TreeFactory } from '../../../src/components/kup-tree/kup-tree-faker';
import { KupTreeSelectors } from './tree__selectors';
import { styleHasBorderRadius } from "../../../src/components/kup-data-table/kup-data-table-helper";

let data: TreeNode | undefined;
let columns: Column[] | undefined;
let page, treeElement, treeHeader, visibleColumns;

describe('kup-tree with data', () => {
  //---- Creates a new batch of data and then cleans it ----
  beforeEach(async () => {
    const treeData: TreeConfigData = TreeFactory(4,4);
    data = treeData.data;
    columns = treeData.columns;

    page = await newE2EPage();
    await page.setContent('<kup-tree></kup-tree>');
    treeElement = await page.find('kup-tree');
    treeElement.setProperty('data', data);
    await page.waitForChanges();
    treeElement.setProperty('columns', columns);
    await page.waitForChanges();
    treeHeader = await page.find(KupTreeSelectors.TreeHeader);
  }, 30000);

  afterEach(() => {
    data = undefined;
    columns = undefined;
    treeElement = undefined;
    page = undefined;
  });

  it('renders in tree mode', async () => {
    const treeRows = await page.findAll(KupTreeSelectors.TableRows);

    // Must render only base nodes
    expect(treeRows).toHaveLength(data.children.length);

    // Since it's a basic tree, must render only the TreeNodeCell
    treeRows.forEach(row => expect(row.childNodes).toHaveLength(1));

    const headerStyle = await treeHeader.getComputedStyle();
    // The table header must be hidden
    expect(headerStyle.display).toEqual('none');
  });

  it('renders TreeNodeCell correctly', async () => {
    const treeNodeCells = await page.findAll(KupTreeSelectors.OnlyTreeNodeCells);

    // Each TreeNode must have its TreeNodeCell
    expect(treeNodeCells).toHaveLength(data.children.length);

    treeNodeCells.forEach((tnc, index) => {
      // Reference to the current node data from which the tnc was rendered
      const currentNodeData = data.children[index];

      // Since icon is not hidden and showObjectNavigation is not set,
      // each TreeNodeCell must render 3 elements:
      // open/close icon, TreeNode icon and the cell content
      expect(tnc.childNodes).toHaveLength(3);

      // First child is menu down icon
      const nodeExpanderClasses = ['mdi', 'mdi-menu-down'];
      if (currentNodeData.expandable) {
        // When TreeNode is expandable, it has the menu-down icon
        expect(tnc.childNodes[0]).toHaveClasses(nodeExpanderClasses);
      } else {
        expect(tnc.childNodes[0]).not.toHaveClasses(nodeExpanderClasses);
      }

      // Second item must be the NodeTree icon
      expect(tnc.childNodes[1]).toHaveClass('kup-tree__icon');

      // Third item is the NodeTree content
      expect(tnc.childNodes[2]).toEqualText(currentNodeData.value);
    })
  });

  describe('is displayed as table', () => {
    beforeEach(async () => {
      visibleColumns = columns.filter(col => col.visible);
      treeElement.setAttribute('show-columns', 'true');
      await page.waitForChanges();
    }, 30000);

    afterEach(() => {
      visibleColumns = undefined;
    });

    it('shows all other visible columns', async () => {
      const treeNodes = await page.findAll(KupTreeSelectors.TableRows);

      // For all visible columns each TreeNode must have an equal amount of cells
      treeNodes.forEach(node => expect(node.childNodes).toHaveLength(1 + visibleColumns.length));

      // The header still must NOT be visible
      const headerStyle = await treeHeader.getComputedStyle();
      expect(headerStyle.display).toEqual('none');
    });

    it('shows header when attribute show-header is set', async () => {
      treeElement.setAttribute('show-header', 'true');
      await page.waitForChanges();

      // The header MUST be visible
      const headerStyle = await treeHeader.getComputedStyle();
      expect(headerStyle.display).toEqual('table-header-group');

      const treeHeaderCells = treeHeader.childNodes[0].childNodes;
      expect(treeHeaderCells).toHaveLength(1 + visibleColumns.length);

      // th of the TreeNodeCell must be empty
      expect(treeHeaderCells[0]).toEqualText("");
    });

    it('applies style to cells with style', async () => {
      const treeNodes = await page.findAll(KupTreeSelectors.TableRows);
      for (let i = 0; i < treeNodes.length; i++) {
        const rowCells = await treeNodes[i].findAll('td');

        for (let j = 0; j < visibleColumns.length; j++) {
          const col = visibleColumns[j];
          const currentCell = data.children[i].cells[col.name];
          const theStyle = currentCell.style;

          // Controls if we have a style to test against
          if (theStyle) {
            const styleProps = Object.keys(theStyle);
            let cellComputedStyle;

            // Style does NOT have border radius -> is applied only to td element
            if (!styleHasBorderRadius(currentCell)) {
              cellComputedStyle = await rowCells[j + 1].getComputedStyle();
            } else {
              // Style DOES have border radius -> is applied only to .cell-content element
              const cellContent = await rowCells[j + 1].find('.cell-content');
              cellComputedStyle = await cellContent.getComputedStyle();
            }

            // Checks that each css prop is set
            styleProps.forEach(prop => {
              /**
               * There is an issue with testing colors.
               * @name TreeBasicRender.cellStyle
               * @see TreeDataPool.cellStyles
               */
              expect(
                // Gets the CSS kebab-case properties and converts them into JS camelCase
                cellComputedStyle[prop.replace(/-([a-z])/g, (a,b) => b.toUpperCase())]
              ).toMatch(theStyle[prop]);
            });
          }
        }
      }
    });

  });

  // console.log("tnc", tnc.childNodes.length);
  // console.log(KupTreeSelectors, treeNodeCells);
  // console.log("contenuto", Object.keys(treeRows[0]));
  // console.log("figli", treeRows[0].childNodes);
});

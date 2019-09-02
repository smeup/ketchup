/**
 * NOTES:
 * In this test suites, TreeNodes are not expanded.
 */
import { newE2EPage } from '@stencil/core/testing';

import { Column,  } from './../../../src/components/kup-data-table/kup-data-table-declarations';
import { TreeNode,  } from './../../../src/components/kup-tree/kup-tree-declarations';
import { TreeConfigData, TreeFactory } from './../../../src/components/kup-tree/kup-tree-faker';
import { KupTreeSelectors } from './tree__selectors';

let data: TreeNode | undefined;
let columns: Column[] | undefined;
let page, treeElement;

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

    // console.log("contenuto", Object.keys(treeRows[0]));
    // console.log("figli", treeRows[0].childNodes);

    // Since it's a basic tree, must render only the TreeNodeCell
    treeRows.forEach(row => expect(row.childNodes).toHaveLength(1));
  });

  it('renders TreeNodeCell correctly', async () => {
    const treeNodeCells = await page.findAll(KupTreeSelectors.OnlyTreeNodeCells);

    // Each TreeNode must have its TreeNodeCell
    expect(treeNodeCells).toHaveLength(data.children.length);

    // console.log(KupTreeSelectors, treeNodeCells);

    treeNodeCells.forEach((tnc, index) => {
      // Since icon is not hidden and showObjectNavigation is not set,
      // each TreeNodeCell must render 3 elements:
      // open/close icon, TreeNode icon and the cell content
      expect(tnc.childNodes).toHaveLength(3);

      console.log("tnc", tnc.childNodes.length);

      // First child is menu down icon
      const nodeExpanderClasses = ['mdi', 'mdi-menu-down'];
      if (data.children[index].expandable) {
        // When TreeNode is expandable, it has the menu-down icon
        expect(tnc.childNodes[0]).toHaveClasses(nodeExpanderClasses);
      } else {
        expect(tnc.childNodes[0]).not.toHaveClasses(nodeExpanderClasses);
      }

      // Second item must be the NodeTree icon
      expect(tnc.childNodes[1]).toHaveClass('kup-tree__icon');

      // Third item is the NodeTree content
      expect(tnc.childNodes[2]).toEqualText(data.children[index].value);
    })
  });
});

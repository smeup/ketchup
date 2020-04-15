import { E2EElement, newE2EPage } from '@stencil/core/testing';

import {
    Column,
    GenericMap,
} from '../../../src/components/kup-data-table/kup-data-table-declarations';
import {
    TreeNode,
    treeExpandedPropName,
} from '../../../src/components/kup-tree/kup-tree-declarations';
import {
    flattenTree,
    getRandomInteger,
    getRndTreeNode,
    getTreeNodeFromPath,
    TreeConfigData,
    TreeFactory,
    DynamicExpansionFaker,
} from '../../../src/components/kup-tree/kup-tree-faker';
import { KupTreeSelectors } from './tree__selectors';
import { testTreeNodeValue } from './tree__test__helpers';
import { styleHasBorderRadius } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { defaultData } from './mocked-data';

const dataTreeConfiguration: {
    depth: number;
} = {
    depth: 4,
};

let data: TreeNode[] | undefined;
let columns: Column[] | undefined;
let page, treeElement, treeHeader, visibleColumns, expandedListener;
let dynamicCallbackFaker;

/**
 * Given a E2EElement node and a style object, checks if all properties of the given style are present inside the
 * getComputedStyle of the htmlNode element.
 *
 * There is [an issue]{@link TreeDataPool.cellStyles} with testing colors.
 *
 * Uses the match method to check if string is contained within the second argument.
 * This is done because some computed style values (example: text-decoration) will return multiple values.
 *
 * @async
 * @param htmlNode - Reference to the node to test.
 * @param style - the style object the computeStyle of the htmlNode will be tested against.
 * @see https://www.w3schools.com/cssref/pr_text_text-decoration.asp
 */
async function testElementStyle(htmlNode: E2EElement, style: GenericMap) {
    const styleProps = Object.keys(style);
    let cellComputedStyle = await htmlNode.getComputedStyle();

    // Checks that each css prop is set
    styleProps.forEach((prop) => {
        expect(
            // Gets the CSS kebab-case properties and converts them into JS camelCase
            cellComputedStyle[
                prop.replace(/-([a-z])/g, (a, b) => b.toUpperCase())
            ]
        ).toMatch(style[prop]);
    });
}

describe('kup-tree with data', () => {
    //---- Creates a new batch of data and then cleans it ----
    beforeEach(async () => {
        //const treeData: TreeConfigData = TreeFactory(dataTreeConfiguration.depth,4);
        // used a fixed tree generated from TreeFactory (to understand tests failures easily)
        const treeData = defaultData;
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
        expect(treeRows).toHaveLength(data.length);

        // Since it's a basic tree, must render only the TreeNodeCell
        treeRows.forEach((row) => expect(row.childNodes).toHaveLength(1));

        const headerStyle = await treeHeader.getComputedStyle();
        // The table header must be hidden
        expect(headerStyle.display).toEqual('none');
    });

    it('renders TreeNodeCell correctly', async () => {
        const treeNodeCells = await page.findAll(
            KupTreeSelectors.OnlyTreeNodeCells
        );

        // Each TreeNode must have its TreeNodeCell
        expect(treeNodeCells).toHaveLength(data.length);

        for (let index = 0; index < treeNodeCells.length; index++) {
            // Reference to the current node data from which the tnc was rendered
            const currentNodeData = data[index];
            const tnc = treeNodeCells[index];

            // Since icon is not hidden and showObjectNavigation is not set,
            // each TreeNodeCell must render 3 elements:
            // open/close icon, TreeNode icon and the cell content
            expect(tnc.childNodes).toHaveLength(3);

            // First child is expand icon
            const nodeExpanderClasses = ['expand-icon'];
            if (currentNodeData.expandable) {
                // When TreeNode is expandable, it has the expand icon
                expect(tnc.childNodes[0]).toHaveClasses(nodeExpanderClasses);
            } else {
                expect(tnc.childNodes[0]).not.toHaveClasses(
                    nodeExpanderClasses
                );
            }

            // Second item must be the NodeTree icon
            expect(tnc.childNodes[1]).toHaveClass('kup-tree__icon');

            // Third item is the NodeTree content
            expect(tnc.childNodes[2]).toEqualText(currentNodeData.value);

            // If a style is specified on the TreeNodeCell, it must be applied
            if (currentNodeData.style) {
                await testElementStyle(tnc, currentNodeData.style);
            } else {
                expect(tnc).not.toHaveAttribute('style');
            }
        }
    });

    describe('when is displayed as table', () => {
        beforeEach(async () => {
            visibleColumns = columns.filter((col) => col.visible);
            treeElement.setAttribute('show-columns', 'true');
            await page.waitForChanges();
        }, 30000);

        afterEach(() => {
            visibleColumns = undefined;
        });

        it('shows all other visible columns', async () => {
            const treeNodes = await page.findAll(KupTreeSelectors.TableRows);

            // For all visible columns each TreeNode must have an equal amount of cells
            treeNodes.forEach((node) =>
                expect(node.childNodes).toHaveLength(1 + visibleColumns.length)
            );

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
            expect(treeHeaderCells[0]).toEqualText('');
        });

        it('applies style to cells with style', async () => {
            const treeNodes = await page.findAll(KupTreeSelectors.TableRows);
            for (let i = 0; i < treeNodes.length; i++) {
                const rowCells = await treeNodes[i].findAll('td');

                for (let j = 0; j < visibleColumns.length; j++) {
                    const col = visibleColumns[j];
                    const currentCell = data[i].cells[col.name];
                    const theStyle = currentCell.style;

                    // Controls if we have a style to test against
                    if (theStyle) {
                        // By default, style which does NOT have border radius is applied only to td element
                        let elementStyleCompare = rowCells[j + 1];

                        // Style DOES have border radius -> is applied only to .cell-content element
                        if (styleHasBorderRadius(currentCell)) {
                            elementStyleCompare = await rowCells[j + 1].find(
                                '.cell-content'
                            );
                        }

                        await testElementStyle(elementStyleCompare, theStyle);
                    }
                }
            }
        });
    });

    describe.each([['tree'], ['table']])('in %s mode', (displayMode) => {
        beforeEach(async () => {
            expandedListener = await treeElement.spyOnEvent(
                'kupTreeNodeExpand'
            );

            switch (displayMode) {
                case 'tree':
                    break;
                case 'table':
                    visibleColumns = columns.filter((col) => col.visible);
                    treeElement.setAttribute('show-columns', 'true');
                    await page.waitForChanges();
                    break;
            }
        }, 30000);

        afterEach(() => {
            expandedListener = null;
            visibleColumns = undefined;
        });

        it('can expand automatically', async () => {
            // Table nodes are not expanded automatically by default
            // First we check that the treeElement is not expanded
            let flatTree = flattenTree(await treeElement.getProperty('data'));
            let treeNodeCells: Array<E2EElement> = await page.findAll(
                KupTreeSelectors.OnlyTreeNodeCells
            );

            expect(flatTree).toHaveLength(data.length);

            for (let i = 0; i < flatTree.length; i++) {
                await testTreeNodeValue(treeNodeCells[i], flatTree[i].value);
            }

            // Now sets automatic expansion and set again the data to trigger the expansion
            treeElement.setAttribute('expanded', 'true');
            treeElement.setProperty('data', [...data]);

            await page.waitForChanges();

            flatTree = flattenTree(await treeElement.getProperty('data'));
            treeNodeCells = await page.findAll(
                KupTreeSelectors.OnlyTreeNodeCells
            );

            // The elements are expanded automatically, they should not fire any event
            expect(expandedListener).toHaveLength(0);

            expect(flatTree).not.toHaveLength(data.length);
            expect(flatTree).toHaveLength(treeNodeCells.length);

            for (let i = 0; i < flatTree.length; i++) {
                await testTreeNodeValue(treeNodeCells[i], flatTree[i].value);
            }
        }, 60000);

        it('can hide TreeNodes icons', async () => {
            treeElement.setAttribute('expanded', 'true');
            treeElement.setProperty('data', [...data]);
            await page.waitForChanges();

            let treeNodes = await page.findAll(KupTreeSelectors.TableRows);
            let allTreeNodeCellIcons = await page.findAll(
                KupTreeSelectors.OnlyTreeNodeCells +
                    ' ' +
                    KupTreeSelectors.simple.CellIcon +
                    ':not(.kup-tree__node__expander)'
            );

            expect(allTreeNodeCellIcons).toHaveLength(treeNodes.length);

            treeElement.setProperty('showIcons', false);
            await page.waitForChanges();

            allTreeNodeCellIcons = await page.findAll(
                KupTreeSelectors.OnlyTreeNodeCells +
                    ' ' +
                    KupTreeSelectors.simple.CellIcon +
                    ':not(.kup-tree__node__expander)'
            );

            expect(allTreeNodeCellIcons).not.toHaveLength(treeNodes.length);
            expect(allTreeNodeCellIcons.length).toBe(0);
        });

        describe('when show-object-navigation is set', () => {
            beforeEach(async () => {
                treeElement.setAttribute('expanded', 'true');
                treeElement.setAttribute('show-object-navigation', 'true');
                treeElement.setProperty('data', [...data]);
                await page.waitForChanges();
            });

            it('renders an "options" icon only in cells with options', async () => {
                const treeNodes = await page.findAll(
                    KupTreeSelectors.TableRows
                );
                let flatTree = flattenTree(
                    await treeElement.getProperty('data')
                );

                for (let i = 0; i < flatTree.length; i++) {
                    // If tree node is enabled it can render option cells
                    if (!flatTree[i].disabled) {
                        // Checks the tree node cell first
                        let treeCellOption = await treeNodes[i].find(
                            'td:nth-of-type(1) ' +
                                KupTreeSelectors.OptionElement
                        );
                        if (flatTree[i].options) {
                            expect(treeCellOption).toBeTruthy();
                        } else {
                            expect(treeCellOption).toBeFalsy();
                        }

                        // When displayed as table, checks also other columns cells
                        if (displayMode === 'table') {
                            let currentCol;
                            for (let k = 0; k < visibleColumns.length; k++) {
                                currentCol = visibleColumns[k];
                                treeCellOption = await treeNodes[i].find(
                                    `td:nth-of-type(${k + 2}) ` +
                                        KupTreeSelectors.OptionElement
                                );
                                if (
                                    flatTree[i].cells[visibleColumns[k].name]
                                        .options
                                ) {
                                    expect(treeCellOption).toBeTruthy();
                                } else {
                                    expect(treeCellOption).toBeFalsy();
                                }
                            }
                        }
                    } else {
                        const optionsElements = await treeNodes[i].findAll(
                            KupTreeSelectors.OptionElement
                        );
                        expect(optionsElements).toHaveLength(0);
                    }
                }
            }, 300000);

            it('fires kupOptionClicked when an option is clicked', async () => {
                const checkOptionPayload = (
                    { detail },
                    cellDataValue: string,
                    treeNode: TreeNode,
                    columnName: string = 'TreeNodeCell'
                ) => {
                    expect(detail.treeNode.id).toEqual(treeNode.id);
                    expect(detail.cell.value).toEqual(cellDataValue);
                    expect(detail.column.name).toEqual(columnName);
                };

                // Sets listener for the event
                const optionClickedListener = await treeElement.spyOnEvent(
                    'kupOptionClicked'
                );

                expect(optionClickedListener).toHaveLength(0);

                let flatTree = flattenTree(
                    await treeElement.getProperty('data')
                );
                let treeNodeCells = await page.findAll(
                    KupTreeSelectors.TableRows
                );
                let eventsFired: number = 0;

                for (let i = 0; i < flatTree.length; i++) {
                    const currentNodeData = flatTree[i];
                    const nodePosition = await treeNodeCells[
                        i
                    ].getBoundingClientRect();
                    await page.mouse.move(
                        nodePosition.top + 4,
                        nodePosition.left + 4
                    );

                    if (currentNodeData.options) {
                        const optionElement = await treeNodeCells[i].find(
                            KupTreeSelectors.TreeNodeCell +
                                ' ' +
                                KupTreeSelectors.OptionElement
                        );

                        if (!currentNodeData.disabled) {
                            await optionElement.click();

                            // Checks if the event was fired
                            eventsFired++;
                            expect(optionClickedListener).toHaveLength(
                                eventsFired
                            );
                            checkOptionPayload(
                                optionClickedListener.lastEvent,
                                currentNodeData.value,
                                currentNodeData
                            );
                        } else {
                            // When node is disabled it should not render option icon
                            expect(optionElement).toBe(null);
                        }
                    }

                    if (displayMode === 'table' && !currentNodeData.disabled) {
                        const visibleColumnsWithOptions = [];
                        visibleColumns.forEach((col, index) => {
                            if (currentNodeData.cells[col.name].options) {
                                visibleColumnsWithOptions.push(index);
                            }
                        });

                        for (
                            let k = 0;
                            k < visibleColumnsWithOptions.length;
                            k++
                        ) {
                            const optionElement = await treeNodeCells[i].find(
                                'td:nth-of-type(' +
                                    (visibleColumnsWithOptions[k] + 2) +
                                    ') ' +
                                    KupTreeSelectors.OptionElement
                            );
                            await optionElement.click();

                            // Checks if the event was fired
                            eventsFired++;
                            expect(optionClickedListener).toHaveLength(
                                eventsFired
                            );
                            checkOptionPayload(
                                optionClickedListener.lastEvent,
                                currentNodeData.cells[
                                    visibleColumns[visibleColumnsWithOptions[k]]
                                        .name
                                ].value,
                                currentNodeData,
                                visibleColumns[visibleColumnsWithOptions[k]]
                                    .name
                            );
                        }
                    }
                }

                // This test is truly monstrous. It needs a high time to be performed
            }, 500000);
        });

        describe('a not disabled tree node', () => {
            beforeEach(async () => {
                // Since these test require at least a node to not be disabled, we programmatically set a node to not be disabled
                data[0].disabled = false;
                treeElement.setAttribute('expanded', 'true');
                treeElement.setProperty('data', [...data]);
                await page.waitForChanges();
            });

            test('can be selected programmatically, through prop selectedNode', async () => {
                const selectedListener = await treeElement.spyOnEvent(
                    'kupTreeNodeSelected'
                );
                let updatedData = await treeElement.getProperty('data');
                let flatTree = flattenTree(updatedData);

                // Tests the selection of x elements
                for (let i = 0; i < 5; i++) {
                    const { treeNodePath, selectedTreeNode } = getRndTreeNode(
                        updatedData,
                        dataTreeConfiguration.depth
                    );

                    await treeElement.setProperty('selectedNode', treeNodePath);
                    await page.waitForChanges();

                    console.time('Slept for');
                    //await page.waitFor(1000);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    console.timeEnd('Slept for');

                    // Find element index
                    let flatIndex: number = -1;
                    for (let k = 0; k < flatTree.length; k++) {
                        if (
                            flatTree[k].id === selectedTreeNode.id &&
                            flatTree[k].value === selectedTreeNode.value
                        ) {
                            flatIndex = k;
                            break;
                        }
                    }

                    // Must have found an element
                    expect(flatIndex).toBeGreaterThan(-1);

                    const selectedE2ENode = await page.find(
                        KupTreeSelectors.TableRows +
                            ':nth-of-type(' +
                            (flatIndex + 1) +
                            ')'
                    );
                    const treeNodeCellContent = await selectedE2ENode.find(
                        KupTreeSelectors.TreeNodeCell + ' .cell-content'
                    );

                    expect(treeNodeCellContent).toEqualText(
                        selectedTreeNode.value
                    );
                    if (!selectedTreeNode.disabled) {
                        console.log(
                            'tmp log: selected node cycle n. ' +
                                i +
                                ' ' +
                                JSON.stringify(selectedE2ENode.outerHTML)
                        );
                        expect(selectedE2ENode).toHaveClass(
                            'kup-tree__node--selected'
                        );
                    } else {
                        expect(selectedE2ENode).not.toHaveClass(
                            'kup-tree__node--selected'
                        );
                    }
                }

                // Controls that no selection events were generated during this process
                expect(selectedListener).toHaveLength(0);
            }, 60000);

            test('emits a selected event if clicked (not on the expand icon)', async () => {
                const selectedListener = await treeElement.spyOnEvent(
                    'kupTreeNodeSelected'
                );
                let updatedData = await treeElement.getProperty('data');
                let flatTree = flattenTree(updatedData);

                let eventCount = 0;
                const rowIndexesToTest = [0]; // Always test the first element because in the beforeAll it was set to enabled
                for (let k = 0; k < 19; k++) {
                    rowIndexesToTest.push(
                        getRandomInteger(flatTree.length - 1)
                    );
                }

                for (let i = 0; i < rowIndexesToTest.length; i++) {
                    const treeNodeCellContent = await page.find(
                        KupTreeSelectors.TableRows +
                            ':nth-of-type(' +
                            (rowIndexesToTest[i] + 1) +
                            ') td:nth-of-type(1) .cell-content'
                    );
                    await treeNodeCellContent.click();

                    if (!flatTree[rowIndexesToTest[i]].disabled) {
                        eventCount++;
                        expect(selectedListener.lastEvent).toBeTruthy();

                        const { detail } = selectedListener.lastEvent;
                        expect(detail.treeNode.id).toEqual(
                            flatTree[rowIndexesToTest[i]].id
                        );
                        expect(Array.isArray(detail.treeNodePath));
                        expect(detail.treeNode.id).toEqual(
                            getTreeNodeFromPath(
                                updatedData,
                                detail.treeNodePath
                            ).id
                        );
                    }

                    expect(selectedListener).toHaveLength(eventCount);
                }
            });
        });

        it('can expand TreeNodes', async () => {
            expect(true).toBeTruthy();

            let expandedNodesCount: number = 0;

            // Expand first layer of elements
            let treeNodeCells: Array<E2EElement> = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].expandable && !data[i].disabled) {
                    expandedNodesCount++;
                    treeNodeCells = await page.findAll(
                        KupTreeSelectors.OnlyTreeNodeCells
                    );

                    // IMPORTANT: Once data is set, there is no further link between this test file 'data' prop
                    // and the actual 'data' prop located on the treeElement.
                    // To avoid future errors, keep this in mind when you have to perform checks and operations on updated data.
                    // You have to fetch the updated data asynchronously like this
                    // await element.getProperty('propName')
                    const flatTree = flattenTree(
                        await treeElement.getProperty('data')
                    );

                    // Checks that currently rendered TreeNodes have the same length as its FlatTree
                    expect(treeNodeCells).toHaveLength(flatTree.length);

                    for (let j = 0; j < flatTree.length; j++) {
                        if (data[i].id === flatTree[j].id) {
                            // Should have Found the element -> controls its value
                            const cellContent = await treeNodeCells[j].find(
                                '.cell-content'
                            );
                            expect(cellContent).toEqualText(data[i].value);

                            // Searches expander and control it can expand -> triggers expansion
                            const expanderNode = await treeNodeCells[j].find(
                                '.kup-tree__node__expander'
                            );
                            expect(expanderNode).toHaveClass('expand-icon');
                            await expanderNode.click();

                            // Checks if event was correctly registered
                            expect(expandedListener).toHaveLength(
                                expandedNodesCount
                            );

                            break;
                        }
                    }
                }
            }

            // Checks that each event has the correct payload
            for (let k = 0; k < expandedListener.events.length; k++) {
                const { detail } = expandedListener.events[k];
                expect(detail).toHaveProperty('treeNodePath');
                expect(Array.isArray(detail.treeNodePath)).toBeTruthy();
                expect(detail).toHaveProperty('treeNode');
                if (detail.usesDynamicExpansion) {
                    expect(detail.usesDynamicExpansion).toBeFalsy();
                }
            }

            // This is a long test, waits for almost a minute before dropping it
        }, 60000);

        describe('use-dynamic-expansion set', () => {
            beforeEach(async () => {
                // Creates data, and set half of the items to enabled and the rest to disabled
                dynamicCallbackFaker = DynamicExpansionFaker(3, 5);
                data = dynamicCallbackFaker.data;
                columns = dynamicCallbackFaker.columns;

                for (let k = 0; k < data.length; k++) {
                    data[k].disabled = Math.ceil(data.length / 2) < k;
                }

                expandedListener = await treeElement.spyOnEvent(
                    'kupTreeNodeExpand'
                );

                treeElement.setProperty('columns', columns);
                treeElement.setProperty('data', data);
                treeElement.setAttribute('use-dynamic-expansion', 'true');
                await page.waitForChanges();

                const updatedData = await treeElement.getProperty('data');

                for (let k = 0; k < updatedData.length; k++) {
                    updatedData[k].disabled =
                        Math.ceil(updatedData.length / 2) < k;
                }
            });

            afterEach(() => {
                expandedListener = null;
                dynamicCallbackFaker = null;
            });

            it('can be used without a callback set', async () => {
                const rows = await page.findAll(KupTreeSelectors.TableRows);
                const expanderNode = await rows[0].find(
                    'td:first-of-type ' +
                        KupTreeSelectors.simple.TreeNodeExpander
                );
                await expanderNode.click();

                expect(expandedListener).toHaveLength(1);

                const { detail } = expandedListener.lastEvent;
                expect(detail.treeNode.id).toEqual(data[0].id);
                expect(detail.treeNodePath).toEqual([0]);
                expect(detail.usesDynamicExpansion).toBeTruthy();
                expect(detail.dynamicExpansionRequireChildren).toBeTruthy();
            });

            it('can be used by providing a callback', async () => {
                function kupTreeDynamicCallbackFactory(currentFaker) {
                    return (treeNodeToExpand, treeNodePath) =>
                        currentFaker.getTreeNodeChildren(treeNodePath);
                }

                // Creates and expose functions to the browser instance to allow correct callback to be set
                // https://github.com/ionic-team/stencil/issues/1174
                const expansionCallback = kupTreeDynamicCallbackFactory(
                    dynamicCallbackFaker
                );
                await page.exposeFunction('toInject', expansionCallback);
                await page.$eval('kup-tree', (tree: any) => {
                    tree.dynamicExpansionCallback = this.toInject;
                });
                await page.waitForChanges();

                // Controls that current data has no children element set
                let updatedData: TreeNode[] = await treeElement.getProperty(
                    'data'
                );
                if (updatedData[0].children) {
                    expect(updatedData[0].children).toHaveLength(0);
                }

                // Triggers expansion
                const rows = await page.findAll(KupTreeSelectors.TableRows);
                const expanderNode = await rows[0].find(
                    'td:first-of-type ' +
                        KupTreeSelectors.simple.TreeNodeExpander
                );
                await expanderNode.click();

                expect(expandedListener).toHaveLength(1);

                const { detail } = expandedListener.lastEvent;
                expect(detail.treeNode.id).toEqual(data[0].id);
                expect(detail.treeNodePath).toEqual([0]);
                expect(detail.usesDynamicExpansion).toBeTruthy();
                expect(detail).not.toHaveProperty(
                    'dynamicExpansionRequireChildren'
                );

                // Controls that elements have been correctly added to the node
                updatedData = await treeElement.getProperty('data');
                expect(updatedData[0].children).toBeTruthy();
                expect(updatedData[0].children.length).toBeGreaterThan(0);
            });
        });
    });

    // console.log("tnc", tnc.childNodes.length);
    // console.log(KupTreeSelectors, treeNodeCells);
    // console.log("contenuto", Object.keys(treeRows[0]));
    // console.log("figli", treeRows[0].childNodes);
    // console.log(data[i].value, flatTree[j].value, treeNodeCells.length);
    // await page.screenshot({path: `screenshot_${displayMode}_${j}.png`});
    // console.log("afterlunghezza", flattenTree(data).length, data.map((node) => node[treeExpandedPropName]));
});

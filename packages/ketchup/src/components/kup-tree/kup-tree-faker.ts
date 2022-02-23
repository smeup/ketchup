//---- Types ----
import {
    KupDataColumn,
    KupDataRowCells,
} from '../../managers/kup-data/kup-data-declarations';
import { KupTreeNode, TreeNodePath } from './kup-tree-declarations';

interface TreeRndNodeGetter {
    selectedTreeNode: KupTreeNode | null;
    treeNodePath: TreeNodePath | null;
}

export interface FactoryTreeNodeOptions {
    minimumChildCount: number;
    propagate?: boolean;
}

export interface FactoryTreeOptions {
    forceColumnVisibility: boolean;
}

export interface DynamicExpansionFakerOptions {
    useDelay?: number;
}

export interface TreeConfigData {
    columns: KupDataColumn[];
    data: KupTreeNode[];
}

//---- Constants ----

/**
 * The data pool usable to populate a fake TreeNode
 * See {@link TreeDataPool.cellStyles}
 * @namespace
 */
const TreeDataPool: {
    cellStyles: Array<{ [index: string]: string }>;
    columnsName: string[];
    nameValues: string[];
    programValues: string[];
} = {
    /**
     * IMPORTANT: colors here must always be specified as rgb or rgba()
     * This is due to a browser method getComputedStyle which always computes the colors as rgb/rgba values
     * So when using a HEX color (for example) to test these objects, the test will fail due to a different color format received.
     *
     * See [this issue]{@link https://www.npmjs.com/package/color} event if it's related to Cypress and not Jest.
     * The concepts are identical.
     *
     * @memberOf! TreeDataPool
     * @see https://www.npmjs.com/package/color
     */
    cellStyles: [
        {
            'background-color': 'rgb(84, 84, 84)',
            color: 'rgba(255, 0, 255, 0.87)',
        },
        {
            'background-color': 'rgba(0, 255, 0, 0.54)',
            color: 'rgb(255, 255, 255)',
            'font-size': '20px',
        },
        {
            'background-color': 'rgb(46, 125, 50)',
            color: 'rgba(130, 20, 200, 0.54)',
            'text-decoration': 'underline',
        },
        {
            backgroundColor: 'rgb(0, 16, 100)',
            borderRadius: '4px',
            color: 'rgba(0, 200, 225, 0.54)',
            textDecoration: 'line-through',
        },
    ],
    columnsName: ['Mat', 'Program', 'Attack', 'Defense'],
    nameValues: ['DELGIO', 'CASFRA', 'PARFRA', 'FIOGIA', 'ZAMCHI'],
    programValues: ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'],
};

//---- Helper methods ----

/**
 * If the Math.random() value is equal lower than the given a threshold, return true. False otherwise.
 * @param probability - The probability that the returned boolean will be truthy.
 */
function getBooleanOnProbability(probability: number = 0.5): boolean {
    return Math.random() < probability;
}

export function getRandomInteger(maximum: number = 10): number {
    return Math.round(Math.random() * maximum);
}

export function getTreeNodeFromPath(
    treeNodes: KupTreeNode[],
    path: TreeNodePath
): KupTreeNode | null {
    if (path.length) {
        let supportTreeNode = treeNodes[path[0]];
        for (let i = 1; i < path.length; i++) {
            supportTreeNode = supportTreeNode.children[path[i]];
        }
        return supportTreeNode;
    }
    return null;
}

export function flattenTree(
    nodesToFlatten: KupTreeNode[],
    useIsExpandedFlag = true
) {
    let flattenedNodes: KupTreeNode[] = [];
    if (nodesToFlatten && nodesToFlatten.length) {
        for (let i = 0; i < nodesToFlatten.length; i++) {
            flattenedNodes.push(nodesToFlatten[i]);
            if (
                !useIsExpandedFlag ||
                (useIsExpandedFlag && nodesToFlatten[i].isExpanded)
            ) {
                flattenedNodes = flattenedNodes.concat(
                    flattenTree(nodesToFlatten[i].children)
                );
            }
        }
    }
    return flattenedNodes;
}

/**
 * Randomly selects a not disabled node.
 * If all nodes are disabled, returns null.
 * @param currentDepthTreeElements
 * @param desiredTreeNodeDepth
 * @param currentDepth
 */
function randomlyTraverseTree(
    currentDepthTreeElements: KupTreeNode[],
    desiredTreeNodeDepth: number,
    currentDepth: number = 0
): TreeRndNodeGetter {
    let itemIndex = getRandomInteger(currentDepthTreeElements.length - 1);
    let count = 0;

    // Searches a non disabled node
    while (
        count < currentDepthTreeElements.length &&
        currentDepthTreeElements[itemIndex].disabled
    ) {
        itemIndex++;
        count++;
        if (itemIndex >= currentDepthTreeElements.length) {
            itemIndex = 0;
        }
    }

    // Element is still disabled -> all elements are disabled
    if (currentDepthTreeElements[itemIndex].disabled) {
        // Returns null value
        return {
            selectedTreeNode: null,
            treeNodePath: null,
        };
    }

    const selectedNode = currentDepthTreeElements[itemIndex];
    if (
        !(selectedNode.children && selectedNode.children.length) ||
        desiredTreeNodeDepth === currentDepth
    ) {
        return {
            selectedTreeNode: selectedNode,
            treeNodePath: [itemIndex],
        };
    } else {
        const nextDepth = randomlyTraverseTree(
            selectedNode.children,
            desiredTreeNodeDepth,
            currentDepth + 1
        );
        return {
            selectedTreeNode: nextDepth.selectedTreeNode
                ? nextDepth.selectedTreeNode
                : selectedNode,
            treeNodePath: nextDepth.treeNodePath
                ? [itemIndex].concat(nextDepth.treeNodePath)
                : [itemIndex],
        };
    }
}

export function getRndTreeNode(
    currentDepthTreeElements: KupTreeNode[],
    treeDepth: number
): TreeRndNodeGetter {
    return randomlyTraverseTree(
        currentDepthTreeElements,
        getRandomInteger(treeDepth)
    );
}

//---- Factory functions ----

function ColumnFactory(index: number, forceVisibility: boolean = false) {
    let colName = TreeDataPool.columnsName[index]
        ? TreeDataPool.columnsName[index]
        : 'Col' + index;

    return {
        name: colName,
        title: colName + ' Title',
        visible: forceVisibility || getBooleanOnProbability(0.7),
    };
}

function TreeNodeFactory(
    columns: any[],
    depth: {
        current: number;
        max: number;
        path: string;
    } = {
        current: 0,
        max: 5,
        path: '0',
    },
    index: number,
    options: {
        isExpandedProbability?: number;
        minimumChildCount: number;
        maximumChildCount?: number;
        propagate?: boolean;
    } = {
        minimumChildCount: 0,
    }
): KupTreeNode {
    let childrenCount = Math.max(
        getRandomInteger(options.maximumChildCount || 5),
        options.minimumChildCount
    );
    const children: any[] = [];

    // If it can have children, and the randomly extracted children are more than 1, adds children to this node
    if (depth.current < depth.max && childrenCount) {
        for (let i = 0; i < childrenCount; i++)
            children.push(
                TreeNodeFactory(
                    columns,
                    {
                        current: depth.current + 1,
                        max: depth.max,
                        path: depth.path + index.toString(),
                    },
                    i,
                    options.propagate ? options : undefined
                )
            );
    } else {
        // IT can have no children, so we set them to 0
        // Fixes an error of expand icon rendering even if the node is not expandable
        childrenCount = 0;
    }

    // Defines a generated value to be used
    const depthAndIndex: string = depth.current.toString() + index.toString();

    // Adds cells to the Node
    let cells: KupDataRowCells = {};
    if (columns && columns.length) {
        for (let j = 0; j < columns.length; j++) {
            const colName = columns[j].name;
            const cellValue = depthAndIndex + colName;
            cells[colName] = {
                obj: {
                    t: 'NR',
                    p: '',
                    k: cellValue,
                },
                icon: 'widgets',
                cssClass: 'strong-text',
                value: cellValue,
                style: getBooleanOnProbability(0.2)
                    ? TreeDataPool.cellStyles[
                          getRandomInteger(TreeDataPool.cellStyles.length - 1)
                      ]
                    : undefined,
                //config: any,
            };
        }
    }

    // TreeNode value
    const treeNodeValue =
        TreeDataPool.nameValues[
            getRandomInteger(TreeDataPool.nameValues.length - 1)
        ] + depthAndIndex;

    return {
        // actions?: Array<RowAction>;
        cells,

        children,

        disabled: getBooleanOnProbability(0.3),

        expandable: !!childrenCount,

        icon: 'account',

        id: depth.path + depthAndIndex + childrenCount.toString(),

        isExpanded: getBooleanOnProbability(options.isExpandedProbability || 0),

        obj: {
            t: 'TN', // TODO Stands for TreeNode -> Update with effective value
            p: '',
            k: treeNodeValue,
        },

        style: getBooleanOnProbability(0.1)
            ? TreeDataPool.cellStyles[
                  getRandomInteger(TreeDataPool.cellStyles.length - 1)
              ]
            : undefined,

        value: treeNodeValue,
    };
}

/**
 * Function returning the columns and the data to create and initialize a kup-tree component.
 * @param treeDepth - How many subtree a tree can have.
 * @param columnCount - How many columns the columns field must generate.
 * @param options - Generic options
 * @param treeOptions - Options bag to pass to the treeNodeFactory
 * @returns {{columns: array, data: object}}*
 */
export function TreeFactory(
    treeDepth: number = 5,
    columnCount: number = 4,
    options: FactoryTreeOptions = {
        forceColumnVisibility: false,
    },
    treeOptions: FactoryTreeNodeOptions = {
        minimumChildCount: 5,
    }
): TreeConfigData {
    let columns = [];

    for (let i = 0; i < columnCount; i++) {
        columns.push(ColumnFactory(i, options.forceColumnVisibility));
    }

    const data: KupTreeNode[] = [];

    for (let j = 0; j < treeOptions.minimumChildCount; j++) {
        data.push(
            TreeNodeFactory(
                columns,
                {
                    current: 0,
                    max: treeDepth,
                    path: j.toString(),
                },
                j,
                treeOptions
            )
        );
    }

    return {
        columns,
        data,
    };
}

/**
 * Function mocking a DynamicallyExpandable tree.
 * @param treeDepth - How many subtree a tree can have.
 * @param columnCount - How many columns the columns field must generate.
 * @param options - Generic options bag
 * @param options.tree - Options bag to pass to the TreeFactory
 * @param options.treeNode - Options bag to pass to the TreeNodeFactory
 * @param [options.dynamicExpansion] - Options bag to pass to the DynamicExpansionFaker
 * @returns {{columns: array, data: object}}*
 */
export function DynamicExpansionFaker(
    treeDepth: number = 5,
    columnCount: number = 4,
    options: {
        tree: FactoryTreeOptions;
        treeNode: FactoryTreeNodeOptions;
        dynamicExpansion?: DynamicExpansionFakerOptions;
    } = {
        tree: {
            forceColumnVisibility: false,
        },
        treeNode: {
            minimumChildCount: 5,
        },
    }
) {
    // Function to copy a tree node but not its children.
    function copyTreeNodeWithoutChildren(node: KupTreeNode): KupTreeNode {
        const { children, ...otherProps } = node;
        return {
            ...otherProps,
            children: [],
        };
    }

    function getTreeNodeChildren(
        startTreeChildren: KupTreeNode[],
        nodePath: TreeNodePath = []
    ) {
        let children = startTreeChildren;
        if (nodePath.length) {
            for (
                let i = 0;
                i < nodePath.length && children && children.length;
                i++
            ) {
                children = children[nodePath[i]].children;
            }
        }
        return children.map((child) => copyTreeNodeWithoutChildren(child));
    }

    // Generates the model
    const treeDataSource = TreeFactory(
        treeDepth,
        columnCount,
        options.tree,
        options.treeNode
    );

    const data = treeDataSource.data.map((treeNode) =>
        copyTreeNodeWithoutChildren(treeNode)
    );

    return {
        data,
        columns: treeDataSource.columns,
        getTreeNodeChildren(nodePath: TreeNodePath = []) {
            const children = getTreeNodeChildren(treeDataSource.data, nodePath);
            const waitTime =
                options.dynamicExpansion && options.dynamicExpansion.useDelay
                    ? options.dynamicExpansion.useDelay
                    : 0;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (children) resolve(children);
                    else
                        reject(
                            '404: The required children of the given treeNodePath could not be found.'
                        );
                }, waitTime);
            });
        },
        treeDataSource,
    };
}

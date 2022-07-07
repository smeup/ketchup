import { TreeNodePath } from '../../components/kup-tree/kup-tree-declarations';
import { KupDataNode, KupDataNodeDrilldownInfo } from './kup-data-declarations';

/**
 * Removes the given node from the input array, by searching even children.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @param {KupDataNode} node2remove - Node to remove.
 * @returns {KupDataNode} Copy of the removed node.
 */
export function removeNode(
    nodes: KupDataNode[],
    node2remove: KupDataNode
): KupDataNode {
    let removed: KupDataNode = null;
    for (let index = 0; index < nodes.length; index++) {
        recursive(nodes[index], nodes);
        function recursive(node: KupDataNode, array: KupDataNode[]) {
            const i = array.indexOf(node2remove);
            if (i > -1) {
                removed = { ...node2remove };
                array.splice(i, 1);
                return;
            }
            for (
                let index = 0;
                node.children && index < node.children.length;
                index++
            ) {
                if (node.children[index]) {
                    recursive(node.children[index], node.children);
                }
            }
        }
    }
    return removed;
}
/**
 * Sets the values specified in the properties to every node of the input array.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @param {Partial<KupDataNode>} properties - New properties values to set.
 * @param {boolean} recursively - Sets values to every child node.
 * @param {KupDataNode[]} exclude - Nodes to exclude (they won't be updated).
 * @returns {KupDataNode[]} Array of the updated nodes.
 */
export function setPropertiesNode(
    nodes: KupDataNode[],
    properties: Partial<KupDataNode>,
    recursively?: boolean,
    exclude?: KupDataNode[]
): KupDataNode[] {
    const updated: KupDataNode[] = [];
    if (!exclude) {
        exclude = [];
    }
    if (recursively) {
        nodes = toStreamNode(nodes);
    }
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        for (const key in properties) {
            if (!exclude.includes(node)) {
                node[key] = properties[key];
                updated.push(node);
            }
        }
    }
    return updated;
}
/**
 * Streamlines an array of nodes by recursively fetching every child node.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @returns {KupDataNode[]} Streamlined array of every node and their children.
 */
export function toStreamNode(nodes: KupDataNode[]): KupDataNode[] {
    const streamlined: KupDataNode[] = [];
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        recursive(node);

        function recursive(node: KupDataNode) {
            streamlined.push(node);
            for (
                let index = 0;
                node.children && index < node.children.length;
                index++
            ) {
                recursive(node.children[index]);
            }
        }
    }
    return streamlined;
}
/**
 * Gets information about the tree depth, such as max number of children and max depth.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @returns {KupDataNodeDrilldownInfo} Information about the tree depth.
 */
export function getDrilldownInfoNode(
    nodes: KupDataNode[]
): KupDataNodeDrilldownInfo {
    let maxChildren = 0;
    let maxDepth = 0;
    const getDepth = function (n: KupDataNode) {
        const depth = 0;
        if (n.children) {
            n.children.forEach(function (d) {
                const tmpDepth = getDepth(d);
                if (tmpDepth > depth) {
                    maxDepth = tmpDepth;
                }
            });
        }
        return depth;
    };
    const recursive = (arr: KupDataNode[]) => {
        maxDepth++;
        for (let index = 0; index < arr.length; index++) {
            const node = arr[index];
            getDepth(node);
            if (
                Array.isArray(node.children) &&
                maxChildren < node.children.length
            ) {
                maxChildren = node.children.length;
                recursive(node.children);
            }
        }
    };

    recursive(nodes);
    return {
        maxChildren,
        maxDepth,
    };
}
/**
 * Returns the parent of the given node.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @param {KupDataNode} child - Child node.
 * @returns {KupDataNode} Parent node.
 */
export function getParentNode(
    nodes: KupDataNode[],
    child: KupDataNode
): KupDataNode {
    let parent: KupDataNode = null;
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        recursive(node);

        function recursive(node: KupDataNode) {
            const hasChildren = !!node.children;

            if (hasChildren && node.children.includes(child)) {
                parent = node;
                return;
            }
            for (
                let index = 0;
                !parent && hasChildren && index < node.children.length;
                index++
            ) {
                recursive(node.children[index]);
            }
        }
    }
    return parent;
}

/**
 * Returns the node with id equal to the given value.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @param {string} treeNodePath - Tree node path.
 * @returns {KupDataNode} Node.
 */
export function getNodeByPath(
    nodes: KupDataNode[],
    treeNodePath: TreeNodePath
): KupDataNode {
    if (!nodes || nodes.length == 0) {
        return undefined;
    }
    if (!treeNodePath || treeNodePath.length == 0) {
        return undefined;
    }
    return _getNodeByPath(nodes, treeNodePath);
}

function _getNodeByPath(nodes: KupDataNode[], path: TreeNodePath): KupDataNode {
    let node: KupDataNode = null;
    for (let j = 0; j < path.length; j++) {
        const i = path[j];
        node = _getNode(nodes, node, i);
    }
    return node;
}

function _getNode(
    nodes: KupDataNode[],
    node: KupDataNode,
    index: number
): KupDataNode {
    if (node == null) {
        return nodes[index];
    } else {
        return node.children[index];
    }
}

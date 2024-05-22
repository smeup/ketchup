import {
    KulDataDataset,
    KulDataNode,
    KulDataNodeDrilldownInfo,
} from '../kul-data-declarations';
/**
 * Finds all nodes in the input dataset that match the specified filter criteria.
 * @param {(value: unknown) => string} stringify - Method of KulData that stringifies a cell/value.
 * @param {KulDataDataset} dataset - The dataset containing nodes to search through.
 * @param {Partial<KulDataNode>} filters - Criteria to match nodes against.
 * @param {boolean} partialMatch - Whether to allow partial matches for filter values.
 * @returns {{ matchingNodes: KulDataNode[], remainingNodes: KulDataNode[], ancestorNodes: KulDataNode[] }} Object containing arrays of matching nodes, nodes remaining after filtering, and their ancestor nodes.
 */
export function filter(
    stringify: (value: unknown) => string,
    dataset: KulDataDataset,
    filters: Partial<KulDataNode>,
    partialMatch: boolean = false
): {
    matchingNodes: Set<KulDataNode>;
    remainingNodes: Set<KulDataNode>;
    ancestorNodes: Set<KulDataNode>;
} {
    const matchingNodes: Set<KulDataNode> = new Set();
    const remainingNodes: Set<KulDataNode> = new Set();
    const ancestorNodes: Set<KulDataNode> = new Set();

    // Helper function to check if a node matches the filters
    // Modified helper function to check if a node or any of its descendants match the filters
    const matchesFiltersRecursively = (node: KulDataNode): boolean => {
        let matches = false;

        // Check if the current node matches the filters
        for (const key in filters) {
            const nodeValue = node[key];
            const filterValue = filters[key];

            // Convert values to string for partial matching comparison
            const nodeValueStr = stringify(nodeValue).toLowerCase();
            const filterValueStr = stringify(filterValue).toLowerCase();

            if (partialMatch) {
                // Check for partial match
                if (!nodeValueStr.includes(filterValueStr)) {
                    continue;
                }
            } else {
                // Check for exact match
                if (nodeValue !== filterValue) {
                    continue;
                }
            }

            matches = true;
            break;
        }

        // If the current node matches, no need to check its children
        if (matches) {
            return true;
        }

        // Recursively check children
        if (node.children) {
            for (const child of node.children) {
                if (matchesFiltersRecursively(child)) {
                    matches = true;
                    break;
                }
            }
        }

        return matches;
    };

    dataset.nodes.forEach((node) => {
        if (matchesFiltersRecursively(node)) {
            matchingNodes.add(node);
            const ancestorsArray = getAncestors(node, dataset.nodes);
            ancestorsArray.forEach((ancestor) => {
                ancestorNodes.add(ancestor);
            });
        } else {
            remainingNodes.add(node);
        }
    });

    return {
        matchingNodes,
        remainingNodes,
        ancestorNodes,
    };
}
/**
 * Gets the input node's ancestors.
 * @param {KulDataNode} node - Input node.
 * @param {KulDataNode[]} nodes - An array of all nodes in the hierarchy.
 * @returns {KulDataNode[]} An array of the node's ancestors ordered from the closest ancestor to the furthest.
 */
export function getAncestors(
    node: KulDataNode,
    nodes: KulDataNode[]
): KulDataNode[] {
    const ancestors: KulDataNode[] = [];
    let current: KulDataNode = node;

    while (current) {
        ancestors.push(current);
        current = getParent(nodes, current);
    }
    ancestors.reverse();
    return ancestors;
}
/**
 * Sorts input nodes.
 * @param {(value: unknown) => string} stringify - Method of KulData that stringifies a cell/value.
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @param {'asc' | 'desc'} direction - Sorting direction.
 * @returns {KulDataNodeDrilldownInfo} Sorted nodes.
 */
export function sort(
    stringify: (value: unknown) => string,
    nodes: KulDataNode[],
    direction: 'asc' | 'desc' = 'asc'
): KulDataNode[] {
    nodes.sort((a, b) => {
        let result = 0;
        const strA = stringify(a.value);
        const strB = stringify(b.value);
        if (strA < strB) {
            result = -1;
        } else if (strA > strB) {
            result = 1;
        }

        return direction === 'desc' ? result * -1 : result;
    });
    return nodes;
}
/**
 * Gets information about the tree depth, such as max number of children and max depth.
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @returns {KulDataNodeDrilldownInfo} Information about the tree depth.
 */
export function getDrilldownInfo(
    nodes: KulDataNode[]
): KulDataNodeDrilldownInfo {
    let maxChildren = 0;
    let maxDepth = 0;

    // Function to get the depth of a node
    const getDepth = function (n: KulDataNode) {
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

    // Recursive function to traverse nodes and update maxDepth and maxChildren
    const recursive = (arr: KulDataNode[]) => {
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
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @param {KulDataNode} child - Child node.
 * @returns {KulDataNode} Parent node.
 */
export function getParent(
    nodes: KulDataNode[],
    child: KulDataNode
): KulDataNode {
    let parent: KulDataNode = null;
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        recursive(node);

        // Recursive function to traverse nodes and find the parent node
        function recursive(node: KulDataNode) {
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
 * Removes the given node from the input array, by searching even children.
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @param {KulDataNode} node2remove - Node to remove.
 * @returns {KulDataNode} Copy of the removed node.
 */
export function pop(
    nodes: KulDataNode[],
    node2remove: KulDataNode
): KulDataNode {
    let removed: KulDataNode = null;
    for (let index = 0; index < nodes.length; index++) {
        recursive(nodes[index], nodes);

        // Recursive function to traverse nodes and remove the specified node
        function recursive(node: KulDataNode, array: KulDataNode[]) {
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
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @param {Partial<KulDataNode>} properties - New properties values to set.
 * @param {boolean} recursively - Sets values to every child node.
 * @param {KulDataNode[]} exclude - Nodes to exclude (they won't be updated).
 * @returns {KulDataNode[]} Array of the updated nodes.
 */
export function setProperties(
    nodes: KulDataNode[],
    properties: Partial<KulDataNode>,
    recursively?: boolean,
    exclude?: KulDataNode[]
): KulDataNode[] {
    const updated: KulDataNode[] = [];
    if (!exclude) {
        exclude = [];
    }
    // Streamline nodes if properties should be set recursively
    if (recursively) {
        nodes = toStream(nodes);
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
 * @param {KulDataNode[]} nodes - Input array of nodes.
 * @returns {KulDataNode[]} Streamlined array of every node and their children.
 */
export function toStream(nodes: KulDataNode[]): KulDataNode[] {
    const streamlined: KulDataNode[] = [];
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        recursive(node);

        // Recursive function to traverse nodes and add them to the streamlined array
        function recursive(node: KulDataNode) {
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

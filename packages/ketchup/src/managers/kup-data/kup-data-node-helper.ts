import { KupDataNode } from './kup-data-declarations';

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
 * Sets the values specified in the filters to every node of the input array.
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

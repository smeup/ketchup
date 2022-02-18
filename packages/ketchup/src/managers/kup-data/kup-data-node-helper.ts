import { KupDataNode } from './kup-data-declarations';

/**
 * Sets the values specified in the filters to every node of the input array.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @param {Partial<KupDataNode>} properties - New properties values to set.
 * @param {boolean} recursively - Sets values to every child node.
 * @returns {KupDataNode[]} Array of the updated nodes.
 */
export function setPropertiesNode(
    nodes: KupDataNode[],
    properties: Partial<KupDataNode>,
    recursively: boolean
): KupDataNode[] {
    const updated: KupDataNode[] = [];
    if (recursively) {
        nodes = toStreamNodes(nodes);
    }
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        for (const key in properties) {
            node[key] = properties[key];
            updated.push(node);
        }
    }
    return updated;
}
/**
 * Streamlines an array of nodes by recursively fetching every child node.
 * @param {KupDataNode[]} nodes - Input array of nodes.
 * @returns {KupDataNode[]} Streamlined array of every node and their children.
 */
export function toStreamNodes(nodes: KupDataNode[]): KupDataNode[] {
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

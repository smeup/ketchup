import { KupTreeNode } from './kup-tree-declarations';

export function isExpandable(node: KupTreeNode): boolean {
    return (
        (node.children?.length > 0 || node.expandable) &&
        node.expandable !== false
    );
}

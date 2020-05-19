const Tree = 'kup-tree >>> .kup-tree';
const TreeHeader = Tree + ' thead';
const TableRows = Tree + ' > tbody > tr';
const TreeNodeCell = 'td:nth-of-type(1)';

export const KupTreeSelectors = {
    TreeHeader,
    TreeHeaderCells: TreeHeader + ' th',
    TableRows,
    TreeNodeCell,
    OnlyTreeNodeCells: TableRows + ' > ' + TreeNodeCell,
    OptionElement: 'kup-button',
    simple: {
        CellIcon: '.kup-tree__icon',
        TreeNodeExpander: '.kup-tree__node__expander',
    },
};

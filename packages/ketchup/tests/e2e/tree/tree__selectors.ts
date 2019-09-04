const Tree = 'kup-tree >>> .kup-tree';
const TreeHeader = Tree + ' thead';
const TableRows = Tree + ' > tbody > tr';
const TreeNodeCell = 'td:first-child';

export const KupTreeSelectors = {
  TreeHeader,
  TreeHeaderCells: TreeHeader + ' th',
  TableRows,
  TreeNodeCell,
  OnlyTreeNodeCells: TableRows + ' > ' + TreeNodeCell,
};

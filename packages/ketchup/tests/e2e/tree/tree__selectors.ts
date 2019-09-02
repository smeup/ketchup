const TableRows = 'kup-tree >>> .kup-tree > tbody > tr';
const TreeNodeCell = 'td:first-child';

export const KupTreeSelectors = {
  TableRows,
  TreeNodeCell,
  OnlyTreeNodeCells: TableRows + ' > ' + TreeNodeCell,
};

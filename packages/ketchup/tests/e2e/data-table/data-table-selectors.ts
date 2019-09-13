export const headerCellsSelector = 'kup-data-table >>> table > thead > tr > th';
export const rowsSelector = 'kup-data-table >>> table > tbody > tr';

export const cellsSelector = 'kup-data-table >>> table > tbody > tr > td';
export const cellContentSelector = cellsSelector + ' .cell-content';

// grouping
export const expanderSelector = '.group-cell-content svg.group-expander';
export const expanderPathSelector = expanderSelector + ' path';
export const rowExpanderSelector = rowsSelector + '.group ' + expanderSelector;

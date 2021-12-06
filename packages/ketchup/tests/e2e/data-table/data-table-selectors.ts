export const headerCellsSelector = 'kup-data-table >>> table > thead > tr > th';
export const rowsSelector = 'kup-data-table >>> table > tbody > tr';

export const cellsSelector = 'kup-data-table >>> .f-cell';
export const cellContentSelector = cellsSelector + ' .f-cell__content';

// grouping
export const expanderSelector = '.group-cell-content .mdi';
//export const expanderPathSelector = expanderSelector + ' path';
export const rowExpanderSelector = rowsSelector + '.group ' + expanderSelector;

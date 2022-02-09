import {
    Cell,
    Column,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';

/**
 * Sets the given columns of the input dataset to be hidden.
 * @param {DataTable | Column[]} dataset - Input dataset or array of columns.
 * @param {string[]} columns2hide - Columns to merge.
 * @returns {Column[]} Columns that were set to hidden.
 */
export function hideColumns(
    dataset: DataTable | Column[],
    columns2hide: string[]
): Column[] {
    const columns = (dataset as DataTable).columns
        ? (dataset as DataTable).columns
        : (dataset as Column[]);
    const hidden: Column[] = [];
    for (let index = 0; index < columns.length; index++) {
        const column = columns[index];
        if (columns2hide.includes(column.name)) {
            column.visible = false;
            hidden.push(column);
        }
    }
    return hidden;
}
/**
 * Takes the columns to merge and creates a new column with their cells. The merged columns will then be removed.
 * @param {DataTable} dataset - Input dataset.
 * @param {string[]} columns2merge - Columns to merge.
 * @param {Column} newColumn - Column created.
 * @returns {Column} Resulting column.
 */
export function mergeColumns(
    dataset: DataTable,
    columns2merge: string[],
    newColumn: Column
): Column {
    const outputCells: Cell[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (columns2merge.includes(key)) {
                outputCells.push({ ...cell });
                delete cells[key];
            }
        }
    }
    for (let index = 0; index < columns2merge.length; index++) {
        const column2removeIndex = dataset.columns.findIndex(
            (col: Column) => col.name === columns2merge[index]
        );
        dataset.columns.splice(column2removeIndex, 1);
    }
    let rowIndex = 0;
    for (let index = 0; index < outputCells.length; index++) {
        const outputCell = outputCells[index];
        let row: Row = null;
        if (!dataset.rows[rowIndex]) {
            dataset.rows[rowIndex] = { cells: {} };
        }
        row = dataset.rows[rowIndex];
        row.cells[newColumn.name] = outputCell;
        rowIndex++;
    }
    dataset.columns.push(newColumn);
    return newColumn;
}

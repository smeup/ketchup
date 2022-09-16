import { SortMode } from '../../components/kup-data-table/kup-data-table-declarations';
import {
    compareValues,
    getCellValueForDisplay,
    getValueForDisplay2,
} from '../../utils/cell-utils';
import { Filters } from '../../utils/filters/filters';
import { ValueDisplayedValue } from '../../utils/filters/filters-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupObjects } from '../kup-objects/kup-objects';
import { KupObj } from '../kup-objects/kup-objects-declarations';
import {
    KupDataCell,
    KupDataColumn,
    KupDataDataset,
    KupDataFindCellFilters,
    KupDataRow,
} from './kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;
const kupObjects: KupObjects = dom.ketchup
    ? dom.ketchup.objects
    : new KupObjects();

/**
 * Finds all the cells matching the filters criteria in the input dataset.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {KupDataCell[]}  Array of cells fetched after applying the filters.
 */
export function findCell(
    dataset: KupDataDataset,
    filters: KupDataFindCellFilters
): KupDataCell[] {
    return dom.ketchup.data.finder(dataset, filters).cells;
}

/**
 * Returns all the cells values of the specified column, sorted if required.
 * @param {Array<KupDataRow>} dataset - Input dataset.
 * @param {KupDataColumn} column - Column included in the search. When missing, returns empty array.
 * @returns {ValueDisplayedValue[]} Values of the cells, sorted.
 */
export function getCellValue(
    dataset: KupDataDataset,
    column: KupDataColumn,
    sorted?: boolean,
    univocal?: boolean
): ValueDisplayedValue[] {
    const rows = dataset.rows;
    const values: { value: string; displayedValue?: string; obj?: KupObj }[] =
        new Array();
    const result: ValueDisplayedValue[] = new Array();
    if (!rows || rows.length == 0 || !column) {
        return result;
    }
    extractColumnValues(rows, column, values, univocal);
    if (sorted == true) {
        values.sort((n1, n2) => {
            return compareValues(
                null,
                kupObjects.isDate(n1.obj)
                    ? n1.value
                    : getValueForDisplay2(n1, column),
                null,
                kupObjects.isDate(n2.obj)
                    ? n2.value
                    : getValueForDisplay2(n2, column),
                SortMode.A
            );
        });
    }
    for (let i = 0; i < values.length; i++) {
        let v = values[i];
        result.push({ value: v.value, displayedValue: v.displayedValue });
    }
    return result;
}

function extractColumnValues(
    rows: Array<KupDataRow>,
    column: KupDataColumn,
    values: { value: string; displayedValue?: string; obj?: KupObj }[],
    univocal?: boolean
) {
    /** il valore delle righe attualmente filtrate, formattato */
    rows.forEach((row) =>
        addColumnValueFromRow(values, column, row.cells[column.name], univocal)
    );
    return values;
}

export function addColumnValueFromRow(
    values: { value: string; displayedValue?: string; obj?: KupObj }[],
    column: KupDataColumn,
    cell: KupDataCell,
    univocal?: boolean
) {
    if (cell) {
        let item: { value: string; displayedValue?: string; obj?: KupObj } = {
            value: cell.value,
            displayedValue: getCellValueForDisplay(column, cell),
            obj: cell.obj ? cell.obj : column.obj,
        };
        if (
            univocal != true ||
            !Filters.valuesArrayContainsValue(values, cell.value)
        ) {
            values.push(item);
        }
    }
}

/**
 * Overrides the given cell attributes for the specified columns.
 * If no columns are provided, the value will be applied to every column of the dataset.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataCell} cell - New cell.
 * @param {string[]} columns - Columns to be handled.
 * @returns {KupDataCell[]} Replaced cells.
 */
export function replaceCell(
    dataset: KupDataDataset,
    cell: KupDataCell,
    columns?: string[]
): KupDataCell[] {
    const replaced: KupDataCell[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            if (!columns || !columns.length || columns.includes(key)) {
                cells[key] = { ...cell };
                replaced.push(cells[key]);
            }
        }
    }
    return replaced;
}

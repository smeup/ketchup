import {
    Cell,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupDataFindCellFilters } from './kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Utility used by findRow and findCell.
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {{cells: Cell[], rows: Row[]}}  Object containing rows and cells.
 */
export function finder(
    dataset: DataTable,
    filters: KupDataFindCellFilters
): { cells: Cell[]; rows: Row[] } {
    const columns = filters ? filters.columns : null;
    const range = filters ? filters.range : null;
    const value = filters ? filters.value : null;
    const min = range && range.min ? range.min : null;
    const max = range && range.max ? range.max : null;
    const result: { cells: Cell[]; rows: Row[] } = {
        cells: [],
        rows: [],
    };
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (!columns || !columns.length || columns.includes(key)) {
                if (min && max) {
                    let d: Date = null,
                        s = '',
                        n = 0;
                    if (dom.ketchup.objects.isDate(cell.obj)) {
                        d = dom.ketchup.dates.toDate(cell.value);
                        const dMax = dom.ketchup.dates.toDate(
                            max instanceof String ? max.valueOf() : max
                        );
                        const dMin = dom.ketchup.dates.toDate(
                            min instanceof String ? min.valueOf() : min
                        );
                        if (
                            d === dMax ||
                            d === dMin ||
                            (d < dMax && d > dMin)
                        ) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    } else if (
                        typeof min === 'string' ||
                        min instanceof String
                    ) {
                        s = cell.value;
                        if (s === max || s === min || (s < max && s > min)) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    } else {
                        n = dom.ketchup.data.numberify(cell.value);
                        if (n === max || n === min || (n < max && n > min)) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    }
                } else if (value === cell.value) {
                    result.cells.push(cell);
                    result.rows.push(row);
                }
            }
        }
    }
    return result;
}

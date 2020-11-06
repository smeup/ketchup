import {
    Row,
    Column,
    DataTable,
} from '../kup-data-table/kup-data-table-declarations';

import { isDate, isNumber } from '../../utils/object-utils';

import { formatToNumber, formatToMomentDate } from '../../utils/cell-formatter';
import { getColumnByName } from '../kup-data-table/kup-data-table-helper';

export const convertColumns = (data: DataTable, { series, axis }): Column[] => {
    if (!data || !series) {
        return [];
    }

    const columns: Column[] = [];

    // axis
    const axisColumn = getColumnByName(data.columns, axis);
    if (axisColumn) {
        columns.push(axisColumn);
    }

    // series
    series.map((serie: string) => {
        // searching colum
        const c = getColumnByName(data.columns, serie);

        if (c) {
            columns.push(c);
        }
    });

    return columns;
};

export const convertRows = (
    data: any,
    columns: Column[],
    showMarks: boolean
) => {
    if (!data) {
        return [];
    }

    const rows = [];

    if (data.rows) {
        data.rows.forEach((r: Row) => {
            const cells = r.cells;

            const currentRow = [];

            columns.forEach((c, index) => {
                const cell = cells[c.name];

                if (cell && cell.obj) {
                    const addMark = showMarks && index > 0;

                    if (isNumber(cell.obj)) {
                        const value = formatToNumber(cell);
                        currentRow.push(value);
                        if (addMark) {
                            currentRow.push(value.toString());
                        }
                    } else if (isDate(cell.obj)) {
                        const value = formatToMomentDate(cell).toDate();
                        currentRow.push(value);
                        if (addMark) {
                            currentRow.push(value.toString());
                        }
                    } else {
                        currentRow.push(cell.obj.k);
                        if (addMark) {
                            currentRow.push(cell.value);
                        }
                    }
                }
            });

            rows.push(currentRow);
        });
    }

    return rows;
};

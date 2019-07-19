import {
    Row,
    Column,
    DataTable,
} from '../kup-data-table/kup-data-table-declarations';

import { isDate, isNumber } from '../../utils/object-utils';
import { formatToNumber, formatToMomentDate } from '../../utils/cell-formatter';

function getColumnByName(name: string, columns: Column[]): Column | null {
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        if (name === column.name) {
            return column;
        }
    }

    return null;
}

export const convertColumns = (data: DataTable, { series, axe }): Column[] => {
    if (!data || !series) {
        return [];
    }

    const columns: Column[] = [];

    // axe
    const axeColumn = getColumnByName(axe, data.columns);
    if (axeColumn) {
        columns.push(axeColumn);
    }

    // series
    series.map((serie: string) => {
        // searching colum
        const c = getColumnByName(serie, data.columns);

        if (c) {
            columns.push(c);
        }
    });

    return columns;
};

export const convertRows = (data: any, columns: Column[]) => {
    if (!data) {
        return [];
    }

    const rows = [];

    if (data.rows) {
        data.rows.forEach((r: Row) => {
            const cells = r.cells;

            const currentRow = [];

            columns.forEach((c) => {
                const cell = cells[c.name];

                if (cell && cell.obj) {
                    if (isNumber(cell.obj)) {
                        currentRow.push(formatToNumber(cell));
                    } else if (isDate(cell.obj)) {
                        currentRow.push(formatToMomentDate(cell).toDate());
                    } else {
                        currentRow.push(cell.obj.k);
                    }
                }
            });

            rows.push(currentRow);
        });
    }

    return rows;
};

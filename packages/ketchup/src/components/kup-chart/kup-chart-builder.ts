import {
    Row,
    Column,
    DataTable,
} from '../kup-data-table/kup-data-table-declarations';

import { formatToNumber, formatToMomentDate } from '../../utils/cell-formatter';
import { ChartSerie } from './kup-chart-declarations';
import { getColumnByName } from '../../utils/cell-utils';
import { KupObjects } from '../../utils/kup-obj/kup-obj';

export function getSerieDecode(serie: string, series: ChartSerie[]): string {
    if (serie == null || series == null) {
        return null;
    }

    for (let i = 0; i < series.length; i++) {
        let serieObj = series[i];
        if (serieObj != null && serieObj.code == serie) {
            return serieObj.decode;
        }
    }
    return serie;
}

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
    series.map((serie: ChartSerie) => {
        // searching colum
        const c = getColumnByName(data.columns, serie.code);

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
    const kupObjects: KupObjects = new KupObjects();
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

                    if (kupObjects.isNumber(cell.obj)) {
                        const value = formatToNumber(cell);
                        currentRow.push(value);
                        if (addMark) {
                            currentRow.push(value.toString());
                        }
                    } else if (kupObjects.isDate(cell.obj)) {
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

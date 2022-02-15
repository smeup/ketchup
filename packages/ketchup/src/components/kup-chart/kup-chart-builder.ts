import { formatToNumber } from '../../utils/cell-utils';
import { ChartSerie } from './kup-chart-declarations';
import { getColumnByName } from '../../utils/cell-utils';
import { KupObjects } from '../../managers/kup-objects/kup-objects';
import { KupDates } from '../../managers/kup-dates/kup-dates';
import { KupDatesNormalize } from '../../managers/kup-dates/kup-dates-declarations';
import {
    KupDataColumn,
    KupDataDataset,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';

export function getSerieDecode(serie: string, series: KupDataColumn[]): string {
    if (serie == null || series == null) {
        return null;
    }

    for (let i = 0; i < series.length; i++) {
        let serieObj = series[i];
        if (serieObj != null && serieObj.name == serie) {
            return serieObj.title;
        }
    }
    return serie;
}

export const convertColumns = (
    data: KupDataDataset,
    { series, axis }
): KupDataColumn[] => {
    if (!data || !series) {
        return [];
    }

    const columns: KupDataColumn[] = [];

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
    columns: KupDataColumn[],
    showMarks: boolean
) => {
    if (!data) {
        return [];
    }

    const rows = [];

    if (data.rows) {
        const kupDates: KupDates = new KupDates();
        const kupObjects: KupObjects = new KupObjects();
        data.rows.forEach((r: KupDataRow) => {
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
                        const value = kupDates.toDate(
                            kupObjects.parseDate(cell.obj)
                        );
                        currentRow.push(value);
                        if (addMark) {
                            currentRow.push(value.toString());
                        }
                    } else if (kupObjects.isTime(cell.obj)) {
                        const datetime = kupDates.normalize(
                            cell.obj.k,
                            KupDatesNormalize.TIME
                        );
                        currentRow.push(datetime.toDate());
                        if (addMark) {
                            currentRow.push(datetime.toDate());
                        }
                    } else if (kupObjects.isTimestamp(cell.obj)) {
                        const datetime = kupDates.normalize(
                            cell.obj.k,
                            KupDatesNormalize.TIMESTAMP
                        );
                        currentRow.push(datetime.toDate());
                        if (addMark) {
                            currentRow.push(datetime.toDate());
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

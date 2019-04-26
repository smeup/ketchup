import { ChartConfig } from './ketchup-chart-declarations';

export const convertColumns = (data: any, config: ChartConfig) => {
    if (!data || !config || !config.series) {
        return [];
    }

    const columns: Array<string> = [];

    // axe
    columns.push(config.axe);

    // series
    config.series.map((serie: string) => {
        // searching colum
        let c: any;

        for (let i = 0; i < data.columns.length; i++) {
            const column = data.columns[i];
            if (serie === column.name) {
                c = column;
                break;
            }
        }

        if (c) {
            columns.push(c.name);
        }
    });

    return columns;
};

export const convertRows = (data: any, series: Array<string>) => {
    if (!data) {
        return [];
    }

    const rows = [];

    if (data.rows) {
        data.rows.forEach((r) => {
            const cells = r.cells;

            const currentRow = [];

            // adding series
            series.forEach((serie) => {
                const cell = cells[serie];

                if (cell && cell.obj) {
                    if ('NR' === cell.obj.t) {
                        currentRow.push(parseFloat(cell.obj.k));
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

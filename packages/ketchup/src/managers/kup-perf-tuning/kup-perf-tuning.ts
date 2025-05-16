import { number } from 'echarts';
import {
    KupPerfTuningData,
    KupPerfTuningPriority,
} from './kup-perf-tuning-declarations';

export class KupPerfTuning {
    data: KupPerfTuningData;

    constructor(data: KupPerfTuningData) {
        this.data = data;
    }

    getPerfIndex(duration: number): number {
        const endTime = performance.now() + duration;
        let operations = 0;

        while (performance.now() < endTime) {
            Math.sqrt(Math.random());
            const a = Math.floor(Math.random() * 1000);
            const b = Math.floor(Math.random() * 1000);
            const c = a * b + a - b;
            operations++;
        }

        return Math.round(operations / 1e6);
    }

    performPerfTuning(duration: number = 1000): void {
        const perfIndex = this.getPerfIndex(duration);
        // 11 was evaluated on my hardare
        const perfFactor = perfIndex / 11;
        this.data.maxCellsPerPage = 5000 * perfFactor;
        console.log(
            `perfIndex ${perfIndex}, maxCellsPerPage ${this.data.maxCellsPerPage}`
        );
    }

    maxRowsPerPageProvider(
        columnsNumber: number,
        rowsNumber: number,
        maxRowsConsumer: (maxRows: number) => void
    ): void {
        switch (this.data.priority) {
            case KupPerfTuningPriority.ROWS_PER_PAGE:
                maxRowsConsumer(this.data.maxRowsPerPage);
                break;

            case KupPerfTuningPriority.CELLS_PER_PAGE:
                computeRowCount(this.data.maxCellsPerPage);
                break;
            case KupPerfTuningPriority.DYNAMIC_ROWS_PER_PAGE:
                if (columnsNumber <= 25) {
                    maxRowsConsumer(this.data.maxRowsPerPage);
                } else {
                    computeRowCount(this.data.maxCellsPerPage);
                }
        }

        function computeRowCount(maxCellsNumberPerPage: number) {
            const cellsNumber = columnsNumber * rowsNumber;
            if (cellsNumber > maxCellsNumberPerPage) {
                // Rounds a number up to the nearest multiple of ten.
                maxRowsConsumer(
                    Math.ceil(maxCellsNumberPerPage / columnsNumber / 10) * 10
                );
            }
        }
    }
}

import { KupPerfTuningData } from './kup-perf-tuning-declarations';

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

    mark(checkpoint: string): void {
        performance.mark(`${checkpoint} - Started`);
    }

    measure(
        checkpoint: string,
        track: string,
        trackGroup = 'SmeUP Performance Tracking'
    ): void {
        performance.measure(`${checkpoint} - Completed`, {
            start: `${checkpoint} - Started`,
            detail: {
                devtools: {
                    dataType: 'track-entry',
                    track: `${track} - Tasks`,
                    trackGroup: trackGroup,
                    color: 'tertiary-dark',
                },
            },
        });
    }
}

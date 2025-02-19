export class KupPerfMonitoring {
    active: boolean = false;

    // It creates a named PerformanceMark object representing
    // a high resolution timestamp marker in the browser's performance timeline
    // @param {string} checkpoint - A string representing the name of the mark
    mark(checkpoint: string): void {
        this.active && performance.mark(`${checkpoint} - Started`);
    }

    // It creates a named PerformanceMeasure object representing
    // a time measurement between the mark and current time in the browser's performance timeline
    // The measure name is equals to checkpoint with " - Time" suffix
    // @param {string} checkpoint - The mark name used for calculating the measure
    // @param {string} track - Name of the custom track displayed
    // @param {string} trackGroup (optional) - Group for organizing tracks
    measure(
        checkpoint: string,
        track: string,
        trackGroup = 'SmeUP Performance Tracking'
    ): void {
        this.active &&
            performance.measure(`${checkpoint} - Time`, {
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

    // Returns an array of PerformanceEntry objects currently present
    // in the performance timeline for the type "measure"
    // @param {string} name (optional): The full or partial name of the measure
    // @param {(entry: PerformanceEntry) => boolean} predicate (optional): A predicate to filter the entries
    // @returns {PerformanceEntryList}
    getMeasures(
        name?: string,
        predicate?: (entry: PerformanceEntry) => boolean
    ): PerformanceEntryList {
        let entries = performance.getEntriesByType('measure');
        if (predicate) {
            return entries.filter((p) => predicate(p));
        } else if (!name && name.trim() !== '') {
            return entries.filter((m) => m.name.includes(name));
        } else return entries;
    }
}

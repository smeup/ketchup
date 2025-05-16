export interface KupPerfTuningData {
    maxCellsPerPage: number;
    maxRowsPerPage: number;
    filtersMaxLength: number;
    priority: KupPerfTuningPriority;
}

export enum KupPerfTuningPriority {
    CELLS_PER_PAGE = 'cells-per-page',
    ROWS_PER_PAGE = 'rows-per-page',
    DYNAMIC_ROWS_PER_PAGE = 'dynamic-rows-per-page',
}

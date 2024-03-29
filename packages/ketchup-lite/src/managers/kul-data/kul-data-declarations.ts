export interface KulDataCell {
    shape: KulDataShapes;
    value: unknown;
}

export interface KulDataCellContainer {
    [index: string]: KulDataCell;
}

export interface KulDataColumn {
    id: string;
    type: KulDataShapes;
}

export interface KulDataDataset {
    columns?: KulDataColumn[];
    nodes?: KulDataNode[];
}

export interface KulDataNode {
    id: string;
    cells?: KulDataCellContainer;
    children?: KulDataNode[];
    description?: string;
    icon?: string;
    value?: unknown;
}

export type KulDataShapes = 'badge' | 'button' | 'image';

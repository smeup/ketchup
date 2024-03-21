import {
    KupDataCell,
    KupDataColumn,
} from '../../managers/kup-data/kup-data-declarations';

export interface KupInputPanelData {
    columns?: KupDataColumn[];
    rows?: KupInputPanelRow[];
}

export interface KupInputPanelColumn {
    name: string;
    title: string;
    visible?: boolean;
}

export interface KupInputPanelRow {
    cells?: KupInputPanelRowCells;
    layout?: KupInputPanelLayout;
}

export interface KupInputPanelRowCells {
    [key: string]: KupInputPanelCell;
}

export interface KupInputPanelCell extends KupDataCell {
    // TODO tipizzare dopo validazione da SMEUP
    options?: { id: string; label: string }[];
    editable?: boolean;
    mandatory?: boolean;
    fun?: string;
}

export interface KupInputPanelLayout {
    horizontal?: boolean;
    sections?: KupInputPanelLayoutSection[];
}

export interface KupInputPanelLayoutSection {
    id?: string;
    content?: KupInputPanelLayoutField[];
    sections?: KupInputPanelLayoutSection[];
    dim?: string;
    horizontal?: boolean;
    gridCols?: number;
    gridRows?: number;
    gap?: number;
}

export interface KupInputPanelLayoutField {
    id: string;
    colSpan?: number;
    colStart?: number;
    colEnd?: number;
    rowSpan?: number;
    rowStart?: number;
    rowEnd?: number;
}

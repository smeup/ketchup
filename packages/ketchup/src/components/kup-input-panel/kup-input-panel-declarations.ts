import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';

export interface KupInputPanelData {
    columns?: KupInputPanelColumn[];
    rows?: KupInputPanelRow[];
}

export interface KupInputPanelColumn {
    name: string;
    title?: string;
    visible?: boolean;
}

export interface KupInputPanelRow {
    cells?: KupInputPanelRowCells;
    layout?: KupInputPanelLayout;
}

export interface KupInputPanelRowCells {
    [key: string]: KupInputPanelCell;
}

export interface KupInputPanelCell {
    value?: string;
    obj?: KupObj;
    options?: string[];
    icon?: string;
    editable?: boolean;
    mandatory?: boolean;
    shape?: FCellShapes;
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

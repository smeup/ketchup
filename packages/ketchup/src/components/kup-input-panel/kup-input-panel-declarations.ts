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
    options?: KupInputPanelCellOptions[];
    editable?: boolean;
    mandatory?: boolean;
    fun?: string;
}

export interface KupInputPanelCellOptions {
    id: string;
    label: string;
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

export type DataAdapterFn = (
    options: KupInputPanelCellOptions[],
    fieldLabel: string,
    currentValue: string
) => Object;

export type InputPanelCells = {
    cells: { cell: KupDataCell; column: KupDataColumn }[];
    row?: KupInputPanelRow;
};

export type InputPanelEvent = {
    state: { cell: KupDataCell; column: KupDataColumn }[];
    data: {
        field: string;
        value: number | string | object;
    };
};

export type InputPanelEventsCallback = {
    eventName: string;
    eventCallback: (e: InputPanelEvent) => unknown;
};

export enum KupInputPanelProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the input panel.',
    hiddenSubmitButton = 'Creates a hidden submit button in order to submit the form with enter.',
    submitCb = 'Sets the callback function on submit form',
    valueChangeCb = 'Sets the callback function on value change event',
}

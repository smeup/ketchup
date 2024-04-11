import { GenericObject } from '../../components';
import {
    KupDataCell,
    KupDataColumn,
} from '../../managers/kup-data/kup-data-declarations';

export interface KupInputPanelSubmit {
    after: KupInputPanelData;
    before: KupInputPanelData;
}

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
    options?: GenericObject | GenericObject[];
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
    // Gap is in rem
    gap?: number;
}

export interface KupInputPanelLayoutField {
    id: string;
    // Span is referred to start
    colSpan?: number;
    colStart?: number;
    colEnd?: number;
    // Span is referred to start
    rowSpan?: number;
    rowStart?: number;
    rowEnd?: number;
}

export type DataAdapterFn = (
    options: GenericObject,
    fieldLabel: string,
    currentValue: string,
    fun?: string
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

export type InputPanelOptionsHandler = (fun: string) => GenericObject;

export enum KupInputPanelProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the input panel.',
    hiddenSubmitButton = 'Creates a hidden submit button in order to submit the form with enter.',
    submitCb = 'Sets the callback function on submit form',
    optionsHandler = 'Sets the callback function to recieve options',
}

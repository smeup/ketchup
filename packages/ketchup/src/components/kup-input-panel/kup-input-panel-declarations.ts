import { GenericObject, KupEventPayload } from '../../components';
import {
    KupDataCell,
    KupDataColumn,
    KupDataCommand,
} from '../../managers/kup-data/kup-data-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';

export interface KupInputPanelSubmit {
    value: KupInputPanelSubmitValue;
    cell?: string;
}
export interface KupInputPanelSubmitValue {
    after: KupInputPanelData;
    before: KupInputPanelData;
}

export interface KupInputPanelData {
    columns?: KupDataColumn[];
    rows?: KupInputPanelRow[];
    actions?: KupInputPanelAction[];
    setup?: {
        commands?: Array<KupDataCommand>;
    };
}

export interface KupInputPanelAction {
    type?: string;
    fun?: string;
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
    inputSettings?: GenericObject;
    fun?: string;
}

export interface KupInputPanelCellOptions {
    id: string;
    label: string;
}

export interface KupInputPanelLayout {
    horizontal?: boolean;
    absolute?: boolean;
    sections?: KupInputPanelLayoutSection[];
    sectionsType?: KupInputPanelLayoutSectionType;
}

export enum KupInputPanelLayoutSectionType {
    TAB = 'tab',
}

export interface KupInputPanelLayoutSection {
    id?: string;
    title?: string;
    icon?: string;
    content?: KupInputPanelLayoutField[];
    sections?: KupInputPanelLayoutSection[];
    dim?: string;
    horizontal?: boolean;
    gridCols?: number;
    gridRows?: number;
    // Gap is in rem
    gap?: number;
    sectionsType?: KupInputPanelLayoutSectionType;
    // absolute Attributes
    absoluteColumn?: number;
    absoluteWidth?: number;
    absoluteRow?: number;
    absoluteHeight?: number;
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
    // absolute Attributes
    absoluteColumn?: number;
    absoluteRow?: number;
    absoluteLength?: number;
}

export type DataAdapterFn = (
    options: GenericObject,
    fieldLabel: string,
    currentValue: string,
    cell?: KupInputPanelCell,
    id?: string
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

export type InputPanelOptionsHandler = (
    fun: string,
    inputValue: string,
    currentState: KupInputPanelData,
    cellId: string
) => Promise<GenericObject>;

export type InputPanelCheckValidObjCallback = (event: {
    obj: KupObj;
    currentState: KupInputPanelData;
    fun?: string;
}) => Promise<ValidCheckObjResponse>;

export interface ValidCheckObjResponse {
    valid: boolean;
}

export type InputPanelButtonClickHandler = (event: {
    fun: string;
    cellId: string;
    currentState: KupInputPanelData;
}) => void;

export type InputPanelCheckValidValueCallback = (
    currentState: KupInputPanelSubmitValue,
    cellId: string
) => void;

export enum KupInputPanelProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the input panel.',
    hiddenSubmitButton = 'Creates a hidden submit button in order to submit the form with enter.',
    submitCb = 'Sets the callback function on submit form',
    optionsHandler = 'Sets the callback function to recieve options',
}

export interface KupInputPanelEventHandlerDetails {
    anchor: HTMLElement;
    cell: KupDataCell;
    column: KupDataColumn;
    originalEvent: PointerEvent;
}

export interface KupInputPanelClickEventPayload extends KupEventPayload {
    details: KupInputPanelEventHandlerDetails;
}

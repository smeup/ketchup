import { GenericObject, KupEventPayload } from '../../components';
import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import {
    KupDataCell,
    KupDataCellOptions,
    KupDataColumn,
    KupDataCommand,
    KupDataRow,
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

export interface KupInputPanelCell extends KupDataCellOptions {
    editable?: boolean;
    mandatory?: boolean;
    inputSettings?: GenericObject;
    fun?: string;
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
    absoluteHeight?: number;
}

export type DataAdapterFn = (
    options: GenericObject,
    fieldLabel: string,
    currentValue: string,
    cell?: KupInputPanelCell,
    id?: string,
    layout?: KupInputPanelLayout
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
    buttonPosition = 'Manage the position of the buttons related to the input panel content. It is an enumeration',
    inputPanelPosition = 'Manage the global layout of the input panel fields. The default is COLUMNS.',
    autoSkip = 'Sets the auto skip between input text fields when the value reaches the max length.',
    autoFocus = 'Sets whether the first input should receive focus.',
}

export interface KupInputPanelEventHandlerDetails {
    anchor: HTMLElement;
    cell: KupDataCell;
    column: KupDataColumn;
    row: KupDataRow;
    originalEvent: PointerEvent;
}

export interface KupInputPanelClickEventPayload extends KupEventPayload {
    details: KupInputPanelEventHandlerDetails;
}

export enum KupInputPanelPosition {
    COLUMNS = 'COLUMNS',
    INLINE = 'INLINE',
    STRETCHED = 'STRETCHED',
    UPINLINE = 'UPINLINE',
    UPCOLUMNS = 'UPCOLUMNS',
    PLACEHOLDER = 'PLACEHOLDER',
}

export enum KupInputPanelButtonsPositions {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    BOTTOM = 'BOTTOM',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
}

interface InputPanelCommand {
    [key: string]: string;
}

export const InputPanelKeyCommands: InputPanelCommand = {
    '*F01': 'F1',
    '*F02': 'F2',
    '*F03': 'F3',
    '*F04': 'F4',
    '*F05': 'F5',
    '*F06': 'F6',
    '*F07': 'F7',
    '*F08': 'F8',
    '*F09': 'F9',
    '*F10': 'F10',
    '*F11': 'F11',
    '*F12': 'F12',
    '*F13': 'shift+F1',
    '*F14': 'shift+F2',
    '*F15': 'shift+F3',
    '*F16': 'shift+F4',
    '*F17': 'shift+F5',
    '*F18': 'shift+F6',
    '*F19': 'shift+F7',
    '*F20': 'shift+F8',
    '*F21': 'shift+F9',
    '*F22': 'shift+F10',
    '*F23': 'shift+F11',
    '*F24': 'shift+F12',
    '*ENT': 'Enter',
    '*PDN': 'PageDown',
    '*PUP': 'PageUp',
};

export enum CheckTriggeringEvents {
    BLUR = 'blur',
    ITEMCLICK = 'itemclick',
}

export const CheckConditionsByEventType = {
    blur: (value: FCellShapes) => {
        return (
            value === FCellShapes.CHECKBOX ||
            value === FCellShapes.SWITCH ||
            value === FCellShapes.COMBOBOX
        );
    },
    itemclick: (value: FCellShapes) => {
        return value !== FCellShapes.COMBOBOX;
    },
};

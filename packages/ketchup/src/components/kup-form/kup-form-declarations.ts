import {
    FCellProps,
    FCellShapes,
} from '../../f-components/f-cell/f-cell-declarations';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-form component.
 * Used to export every prop in an object.
 */
export enum KupFormProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
}

export interface KupFormData {
    columns?: KupFormColumn[];
    rows?: KupFormRow[];
}

export interface KupFormColumn extends KupDataColumn {
    label?: string;
}

export interface KupFormRow extends KupDataRow {
    layout?: KupFormSection;
}

export interface KupFormSection {
    content?: KupFormContent[];
    dim?: string;
    horizontal?: boolean;
    id?: string;
    sections?: KupFormSection[];
    style?: { [index: string]: string };
    title?: string;
}
export interface KupFormContent {
    column?: string;
    shape?: FCellShapes;
}

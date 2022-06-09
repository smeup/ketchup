import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
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
    data = 'Actual data of the form.',
    layout = 'How the form will arrange its content.',
}
export interface KupFormData {
    columns?: KupDataColumn[];
    rows?: KupFormRow[];
}
export interface KupFormRow extends KupDataRow {
    layout?: KupFormLayout;
}

export interface KupFormLayout {
    horizontal?: boolean;
    sections?: KupFormSection[];
}

export interface KupFormSection {
    id?: string;
    horizontal?: boolean;
    dim?: string;
    sections?: KupFormSection[];
    content?: KupFormField[];
    style?: { [index: string]: string };
    columns?: number;
    title?: string;
}

export interface KupFormField {
    column?: string;
    value?: string;
    shape?: FCellShapes;
    config?: any;
}

export enum KupFormLabelPlacement {
    BOTTOM = 'bottom',
    LEFT = 'left',
    HIDDEN = 'hidden',
    RIGHT = 'right',
    TOP = 'top',
}

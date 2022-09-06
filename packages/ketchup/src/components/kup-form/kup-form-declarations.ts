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
    hiddenSubmitButton = 'Creates a hidden submit button in order to submit the form with enter.',
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
    columns?: number;
    content?: KupFormField[];
    dim?: string;
    horizontal?: boolean;
    id?: string;
    label?: KupFormLabel;
    sections?: KupFormSection[];
    style?: { [index: string]: string };
    title?: string;
}

export interface KupFormField {
    column?: string;
    data?: any;
    label?: string;
    shape?: FCellShapes;
    value?: string;
}

export interface KupFormLabel {
    alignment?: KupFormLabelAlignment;
    placement?: KupFormLabelPlacement;
    width?: string;
}

export enum KupFormLabelAlignment {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

export enum KupFormLabelPlacement {
    BOTTOM = 'bottom',
    LEFT = 'left',
    HIDDEN = 'hidden',
    PLACEHOLDER = 'placeholder',
    RIGHT = 'right',
    TOP = 'top',
}

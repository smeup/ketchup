import { FCellProps } from '../../f-components/f-cell/f-cell-declarations';
import { KupDataRow } from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-form component.
 * Used to export every prop in an object.
 */
export enum KupFormProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
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
    content?: FCellProps[];
    style?: { [index: string]: string };
    collapsible?: boolean;
    columns?: number;
    title?: string;
}

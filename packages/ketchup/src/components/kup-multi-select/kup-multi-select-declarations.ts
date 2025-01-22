import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-multi-select component.
 * Used to export every prop in an object.
 */
export enum KupMultiSelectProps {
    customStyle = 'Custom style of the component.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    data = 'The json data used to populate the tree view: the basic, always visible tree nodes.',
}

export interface KupMultiSelectEventPayload extends KupEventPayload {
    value: string;
}

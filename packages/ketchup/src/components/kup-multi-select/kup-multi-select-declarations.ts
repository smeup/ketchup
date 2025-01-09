import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-multi-select component.
 * Used to export every prop in an object.
 */
export enum KupMultiSelectProps {
    checked = "Defaults at false. When set to true, the component will be set to 'checked'.",
    customStyle = 'Custom style of the component.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    label = 'Defaults at null. When specified, its content will be shown as a label.',
    leadingLabel = 'Defaults at false. When set to true, the label will be on the left of the component.',
}

export interface KupMultiSelectEventPayload extends KupEventPayload {
    value: string;
}

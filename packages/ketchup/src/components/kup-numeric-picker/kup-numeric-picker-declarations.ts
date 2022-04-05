import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-numeric-picker component.
 * Used to export every prop in an object.
 */
export enum KupNumericPickerProps {
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    decimals = 'Defaults at false. When set to true, the component has decimals.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    initialValue = 'Sets the initial value of the component',
    maxDecimals = 'when set, the component allows you to enter decimals with a maximum of characters.',
    maxIntegers = 'When set, the component allows you to enter integer numbers with a maximum of characters.',
    maxLength = 'When set, the component allows you to enter numbers with a maximum of characters, including decimals.',
    negative = 'Defaults at false. When set to true, the component has negative number.',
}

export interface KupNumericPickerEventPayload extends KupEventPayload {
    value: string;
}

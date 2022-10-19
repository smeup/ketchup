import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-text-field component.
 * Used to export every prop in an object.
 */
export enum KupTextFieldProps {
    customStyle = 'Custom style of the component.',
    decimals = 'Number of decimals (should be used when inputType is number).',
    disabled = 'When set to true, the component is disabled.',
    emitSubmitEventOnEnter = "When the text field is part of the autocomplete component and the list is opened, enter key selects the item and doesn't submit.",
    fullWidth = 'When set to true, the component will be rendered at full width.',
    helper = 'When set, its content will be shown as a help text below the field.',
    helperEnabled = 'When true, the helper will be displayed.',
    helperWhenFocused = 'When set, the helper will be shown only when the field is focused.',
    icon = 'When set, the text-field will show this icon.',
    initialValue = 'Sets the initial value of the component',
    inputMode = 'The HTML inputmode of the input element. It has no effect on text areas.',
    inputType = 'The HTML type of the input element. It has no effect on text areas.',
    isClearable = 'Enables a clear trailing icon.',
    label = 'When set, its content will be shown as a label.',
    leadingLabel = 'When set to true, the label will be on the left of the component.',
    max = 'The HTML max attribute specifies the maximum value for the input element. Works with the following input types: number, range, date, datetime-local, month, time and week.',
    maxLength = 'When set, the helper will display a character counter.',
    min = 'The HTML min attribute specifies the minimum value for the input element. Works with the following input types: number, range, date, datetime-local, month, time and week.',
    name = 'The HTML name attribute used for form autocomplete.',
    outlined = 'When set to true, the component will be rendered as an outlined field.',
    readOnly = 'Sets the component to read only state, making it not editable, but interactable. Used in combobox component when it behaves as a select.',
    step = 'The HTML step of the input element. It has effect only with number input type.',
    textArea = 'When set to true, the component will be rendered as a textarea.',
    trailingIcon = 'When set, the icon will be shown after the text.',
    trailingLabel = 'When set to true, the label will be on the right of the component.',
}

export interface KupTextFieldEventPayload extends KupEventPayload {
    value: string;
}

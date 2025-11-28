import { KupEventPayload } from '../../types/GenericTypes';
import { KupListNode } from '../kup-list/kup-list-declarations';

/**
 * Props of the kup-combobox component.
 * Used to export every prop in an object.
 */
export enum KupComboboxProps {
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components (date input text field).',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    DescrMode = 'Sets how to show the selected item value. Suported values: "CodeOnly", "DescOnly", "Both".',
    ListDescrMode = 'Sets how to show the list items of the component. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".',
    initialValue = 'Sets the initial value of the component',
    initialValueDecode = 'Sets the initial value decode of the component',
    isClearable = 'Enables a clear trailing icon.',
    isSelect = 'Lets the combobox behave as a select element.',
    selectMode = 'Sets how to return the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".',
    showDropDownIcon = 'When true shows the drop-down icon, for open list.',
    label = 'When set, its content will be shown as a label.',
    leadingLabel = 'When set to true, the label will be on the left of the component.',
    showMarker = 'When true shows a small marker on the component',
    legacyLook = 'When true enables the monospaced look for the CMB component',
    size = 'Sets the size of the input element',
}

export interface KupComboboxEventPayload extends KupEventPayload {
    inputValue: any;
    node?: KupListNode;
    value: any;
}
export interface KupComboboxIconClickEventPayload
    extends KupComboboxEventPayload {
    open: boolean;
}

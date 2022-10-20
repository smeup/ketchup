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
    displayMode = 'Sets how to show the selected item value. Suported values: "code", "description", "both".',
    initialValue = 'Sets the initial value of the component',
    isSelect = 'Lets the combobox behave as a select element.',
    selectMode = 'Sets how to return the selected item value. Suported values: "code", "description", "both".',
    showDropDownIcon = 'When true shows the drop-down icon, for open list.',
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

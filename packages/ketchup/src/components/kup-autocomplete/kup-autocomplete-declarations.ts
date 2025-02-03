import { KupEventPayload } from '../../types/GenericTypes';
import { KupListNode } from '../kup-list/kup-list-declarations';
/**
 * Props of the kup-autocomplete component.
 * Used to export every prop in an object.
 */
export enum KupAutocompleteProps {
    allowInconsistentValues = "When true, the autocomplete fires the change event even when the value typed isn't included in the autocomplete list.",
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    displayMode = 'Sets how to show the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".',
    initialValue = 'Sets the initial value of the component.',
    initialValueDecode = 'Sets the initial value decode of the component',
    inputDelay = 'Input event emission delay in milliseconds.',
    minimumChars = 'The minimum number of chars to trigger the autocomplete.',
    selectMode = 'Sets how to return the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".',
    serverHandledFilter = 'When true, the items filter is managed server side, otherwise items filter is done client side.',
    showDropDownIcon = 'When true shows the drop-down icon, for open list.',
    showMarker = 'When true shows a small marker on the component',
}

export interface KupAutocompleteEventPayload extends KupEventPayload {
    value: string;
    inputValue: string;
    node?: KupListNode;
}
export interface KupAutocompleteIconClickEventPayload
    extends KupAutocompleteEventPayload {
    open: boolean;
}

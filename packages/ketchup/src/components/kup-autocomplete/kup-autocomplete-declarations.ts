import { KupEventPayload } from '../../types/GenericTypes';
/**
 * Props of the kup-autocomplete component.
 * Used to export every prop in an object.
 */
export enum KupAutocompleteProps {
    allowInconsistentValues = "When true, the autocomplete fires the change event even when the value typed isn't included in the autocomplete list.",
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    displayMode = 'Sets how to show the selected item value. Suported values: "code", "description", "both".',
    initialValue = 'Sets the initial value of the component.',
    inputDelay = 'Input event emission delay in milliseconds.',
    minimumChars = 'The minimum number of chars to trigger the autocomplete.',
    selectMode = 'Sets how to return the selected item value. Suported values: "code", "description", "both".',
    serverHandledFilter = 'When true, the items filter is managed server side, otherwise items filter is done client side.',
    showDropDownIcon = 'When true shows the drop-down icon, for open list.',
}
/**
 * The available display modes for the autocomplete component.
 */
export enum KupAutocompleteDisplayMode {
    CODE = 'code',
    DESCRIPTION = 'description',
    DESCRIPTION_AND_CODE = 'both',
}

export interface KupAutocompleteEventPayload extends KupEventPayload {
    value: any;
    inputValue: any;
}
export interface KupAutocompleteIconClickEventPayload
    extends KupAutocompleteEventPayload {
    open: boolean;
}

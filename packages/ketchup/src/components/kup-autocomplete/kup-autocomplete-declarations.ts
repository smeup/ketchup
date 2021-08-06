import { KupEventPayload } from '../../types/GenericTypes';
/**
 * Props of the kup-autocomplete component.
 * Used to export every prop in an object.
 */
export enum KupAutocompleteProps {
    callBackOnFilterUpdate = 'Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.',
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    displayMode = 'Sets how to show the selected item value. Suported values: "code", "description", "both".',
    initialValue = 'Sets the initial value of the component.',
    minimumChars = 'The minimum number of chars to trigger the autocomplete.',
    selectMode = 'Sets how to return the selected item value. Suported values: "code", "description", "both".',
    serverHandledFilter = 'When true, it will emit events to inform the listener of the change of the current filter value. Also the component builtin filter will be disabled.',
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
}

export interface kupAutocompleteFilterChangedEventPayload
    extends KupEventPayload {
    filter: string;
    matchesMinimumCharsRequired: boolean;
}

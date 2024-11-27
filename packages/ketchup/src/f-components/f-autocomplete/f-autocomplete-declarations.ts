import type { FComponent, KupComponentSizing } from '../../types/GenericTypes';
import { FTextFieldProps } from '../f-text-field/f-text-field-declarations';
/**
 * Props of the f-autocomplete component.
 */
export interface FAutocompleteProps extends FTextFieldProps {
    options: { label: string; value: string }[];
    optionsVisible: boolean;
    minCharsForAutocomplete?: number;
}

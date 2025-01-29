import { KupListNode } from '../../components/kup-list/kup-list-declarations';

export interface GenericFilter {
    [index: string]: Filter;
}

export interface ValueDisplayedValue {
    value: string;
    displayedValue?: string;
    // userd for kup-autocomplete and kup-combobox
    node?: KupListNode;
}

export interface Filter {
    textField: string;
    textFieldTmp?: string;
    checkBoxes: ValueDisplayedValue[];
}

/**
 * This regular expression returns a match with the following groups:
 * if the string does not match, it returns null; otherwise, the indexes correspond to:
 *
 * @property {string} 0 - The entire match of the regexp; equal to the cellValue.
 * @property {string} 1 - Operator: '!', '>', '>=', '<', or '<=' at the start of the regexp.
 * @property {string} 2 - Either % or null: indicates the string must start with the given string.
 * @property {string} 3 - Either "" or a string with a length.
 * @property {string} 4 - Either % or null: indicates the string must finish with the given string.
 */
export const FILTER_ANALIZER = /^(!|>|>=|<|<=){0,1}'(%){0,1}(.*?)(%){0,1}'$/;

export enum KupGlobalFilterMode {
    SIMPLE = 'simple',
    HIGHLIGHT = 'highlight',
}

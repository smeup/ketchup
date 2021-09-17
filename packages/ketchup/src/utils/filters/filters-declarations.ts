/**
 * Interface for ranged filters.
 */
export enum FilterInterval {
    FROM = 0,
    TO = 1,
}

export interface GenericFilter {
    [index: string]: Filter;
}

export interface ValueDisplayedValue {
    value: string;
    displayedValue?: string;
}

export interface Filter {
    textField: string;
    textFieldTmp?: string;
    checkBoxes: ValueDisplayedValue[];
    interval: string[];
    intervalTmp?: string[];
}

/**
 * This regular expressions returns a match like this one:
 * if the string does not match is null, otherwise the indexes are equal to the object below:
 *
 * @property {string} 0 - The entire match of the regexp; is equal to the cellValue.
 * @property {string} 1 - Either !' or ' it's the start of the regexp.
 * @property {string} 2 - Either % or null: means the string must start with the given string.
 * @property {string} 3 - Either "" or a string with a length.
 * @property {string} 4 - Either % or null: means the string must finish with the given string.
 * @property {string} 5 - Always equal to ': it's the end of the filter.
 */
export const FILTER_ANALIZER = /^('|!')(%){0,1}(.*?)(%){0,1}(')$/;

export enum KupGlobalFilterMode {
    SIMPLE = 'simple',
    HIGHLIGHT = 'highlight',
}

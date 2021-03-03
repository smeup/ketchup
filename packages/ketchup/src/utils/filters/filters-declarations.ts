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

export interface Filter {
    textField: string;
    checkBoxes: Array<string>;
    interval: string[];
}

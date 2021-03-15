import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-chip component.
 */
export interface FChipsProps extends FComponent {
    data?: FChipData[];
    type?: FChipType;
}
/**
 * The object of a single chip contained in a chip set.
 * @property {string} value - Intrinsic/server side value.
 * @property {string} icon - Icon displayed on the left.
 * @property {string} label - Displayed text.
 * @property {boolean} checked - Defines whether a chip is selected or not.
 */
export interface FChipData {
    value: string;
    icon?: string;
    label: string;
    checked: boolean;
}
/**
 * Types of the f-chip component.
 * @enum {string}
 * @property {string} CHOICE - Only 1 chip may be selected at a time.
 * @property {string} FILTER - Multiple chips may be selected at a time.
 * @property {string} INPUT - Chips can be deleted by clicking on the rightmost icon.
 * @property {string} STANDARD - Standard chip set.
 */
export enum FChipType {
    CHOICE = 'choice',
    FILTER = 'filter',
    INPUT = 'input',
    STANDARD = 'standard',
}

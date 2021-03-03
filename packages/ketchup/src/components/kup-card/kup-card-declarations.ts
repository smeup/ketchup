import { GenericObject } from '../../types/GenericTypes';
/**
 * Data prop of the kup-card component.
 */
export interface CardData {
    button: GenericObject[];
    chart: GenericObject[];
    checkbox: GenericObject[];
    chip: GenericObject[];
    color: string[];
    image: GenericObject[];
    progressbar: GenericObject[];
    text: string[];
    textfield: GenericObject[];
}
/**
 * Layout families of the kup-card component.
 * @enum {string}
 * @property {string} COLLAPSIBLE - Cards belonging to this family will display an area usable to expand the content of the card.
 * @property {string} SCALABLE - Content will fit its container, resizing itself automatically.
 * @property {string} STANDARD - Stndard layouts.
 */
export enum CardFamily {
    COLLAPSIBLE = 'collapsible',
    SCALABLE = 'scalable',
    STANDARD = 'standard',
}

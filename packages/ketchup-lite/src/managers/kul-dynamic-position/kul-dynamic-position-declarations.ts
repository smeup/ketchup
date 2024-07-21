/**
 * HTML attribute attached to dynamically positioned elements.
 */
export const kulDynamicPositionAttribute = 'kul-dynamic-position';
/**
 * HTML attribute attached to dynamically positioned elements' anchor point.
 */
export const kulDynamicPositionAnchorAttribute = 'kul-dynamic-position-anchor';
/**
 * Master type extending all subtypes of available anchor points.
 */
export type KulDynamicPositionAnchor =
    | HTMLElement
    | KulDynamicPositionCoordinates;
/**
 * Fixed position element.
 */
export interface KulDynamicPositionElement extends HTMLElement {
    kulDynamicPosition?: {
        anchor: KulDynamicPositionAnchor;
        detach: boolean;
        margin: number;
        originalPath: HTMLElement[];
        placement: KulDynamicPositionPlacement;
        rAF: number;
    };
}
/**
 * Coordinates for fixed positioning.
 */
export interface KulDynamicPositionCoordinates {
    x: number;
    y: number;
}
/**
 * Available placements.
 */
export enum KulDynamicPositionPlacement {
    AUTO = '',
    BOTTOM = 'b',
    BOTTOM_LEFT = 'bl',
    BOTTOM_RIGHT = 'br',
    LEFT = 'l',
    RIGHT = 'r',
    TOP = 't',
    TOP_LEFT = 'tl',
    TOP_RIGHT = 'tr',
}

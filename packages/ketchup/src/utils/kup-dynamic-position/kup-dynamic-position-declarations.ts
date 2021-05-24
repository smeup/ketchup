/**
 * Fixed position element.
 */
export interface KupDynamicPositionElement extends HTMLElement {
    dynamicPosition: {
        anchor: HTMLElement;
        detached: boolean;
        margin: number;
        position: KupDynamicPositionPlacement;
        rAF: number;
    };
}
/**
 * Available placements.
 */
export enum KupDynamicPositionPlacement {
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

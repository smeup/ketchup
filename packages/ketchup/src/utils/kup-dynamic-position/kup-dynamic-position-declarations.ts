/**
 * Fixed position element.
 */
export interface KupDynamicPositionElement extends HTMLElement {
    dynamicPosition: {
        anchor: HTMLElement;
        margin: number;
        above: boolean;
        rAF: number;
        right: boolean;
    };
}

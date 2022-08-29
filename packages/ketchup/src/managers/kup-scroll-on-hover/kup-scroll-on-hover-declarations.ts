/**
 * Element scrollable on mouse over.
 */
export interface KupScrollOnHoverElement extends HTMLElement {
    scrollOnHover: {
        active: boolean;
        children: NodeListOf<HTMLElement>;
        percentages: KupScrollOnHoverPercentages;
        rect: DOMRect;
        vertical: boolean;
        x: number;
        y: number;
    };
}
export interface KupScrollOnHoverPercentages {
    back: number;
    forward: number;
}
/**
 * The direction to which ScollableElement can be scrolled.
 */
export enum ScrollOnHoverDirection {
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
}

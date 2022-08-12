/**
 * Element scrollable on mouse over.
 */
export interface KupScrollOnHoverElement extends HTMLElement {
    scrollOnHover: {
        active: boolean;
        children: NodeListOf<HTMLElement>;
        rect: DOMRect;
        vertical: boolean;
        x: number;
        y: number;
    };
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

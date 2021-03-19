/**
 * Element scrollable on mouse over.
 */
export interface ScrollableElement extends HTMLElement {
    scrollOnHover: {
        active: boolean;
        children: NodeListOf<HTMLElement>;
        rect: DOMRect;
        x: number;
        y: number;
    };
}
/**
 * The direction to which ScollableElement can be scrolled.
 */
export enum ScrollOnHoverDirection {
    LEFT = 'left',
    RIGHT = 'right',
}

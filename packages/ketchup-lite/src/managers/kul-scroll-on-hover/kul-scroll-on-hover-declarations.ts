/**
 * Element scrollable on mouse over.
 */
export interface KulScrollOnHoverElement extends HTMLElement {
    scrollOnHover: {
        active: boolean;
        children: NodeListOf<HTMLElement>;
        percentages: KulScrollOnHoverPercentages;
        rect: DOMRect;
        step?: number;
        vertical: boolean;
        x: number;
        y: number;
    };
}
export interface KulScrollOnHoverPercentages {
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

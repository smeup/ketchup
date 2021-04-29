import type { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Fixed position element.
 */
export interface DynamicallyPositionedElement extends HTMLStencilElement {
    dynamicPosition: {
        anchor: HTMLElement;
        margin: number;
        above: boolean;
        rAF: number;
        right: boolean;
    };
}

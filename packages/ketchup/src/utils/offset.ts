/**
 * Offset Interface
 **/
export interface ElementOffset {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}

/**
 * Given an HTML element, how a third element must be positioned relatively to it and an offset element from which it must be positioned
 * calculates the top or bottom, right or left properties to allow correctly placing that third element.
 *
 * IMPORTANT #1:
 * Changing the offsetEl can lead to bugs. This is due to the fact that by using the documentElement as a reference,
 * scrollbars are already counted inside the the measurements, while in other elements there is no such guarantee.
 *
 * IMPORTANT #2:
 * Previously the bottom property was calculated as it follows:
 * ret.bottom = offsetEl.scrollHeight - scrollTop - rect.top;
 * However, this brought on the following issue:
 * When an absolute element is created inside the body tag, and if neither the body or html tag have a position different from static,
 * then the absolute positioning is referred to the window object.
 * In other words, using bottom property on the absolute element would position it starting from a scrollTop = 0
 * margin bottom window, making all calculations useless. (Try it yourselves)
 * On the other hand, making the component set a position different from static on body or html tag has a lot of side effects:
 * 1 - other elements are influenced by this behaviour,
 * 2 - calculations would once again break down due to the positioning being referenced on an element different from document.
 * The solution was to position the element exactly on top of the 'el' element and then adding a negative translation to it
 * equal to its height.
 *
 * @name getElementOffset
 * @param el - The element relative to which the third element must be placed
 * @param positioning - How the third element must be placed in relation to el (if over or under, left or right aligned)
 * @param [offsetEl] - An optional parameter to specify from which scrollable element calculations must take place. Default: document.documentElement. Change at your own risk and fault: see full comment.
 * @returns the position in pixel to apply to the third element to be placed correctly.
 */
export function getElementOffset(
    el: HTMLElement | null,
    positioning: {isRight: boolean, isTop: boolean} = {isRight: false, isTop: false},
    offsetEl: HTMLElement = document.documentElement
): ElementOffset | null {
    // We must consider the use case where the el element is not available in reality
    // In this case this code will throw an error
    // To avoid that we exit the function when such a case will happen.
    if (!el) {return ;}

    let ret: ElementOffset = {};
    // Get rectangle of the component.
    let rect = el.getBoundingClientRect(),
        scrollLeft = offsetEl.scrollLeft,
        scrollTop = offsetEl.scrollTop;
    // If left positioned
    if (!positioning.isRight) {
        ret.left = rect.left + scrollLeft;
    } else {
        // If right positioned
        ret.right = offsetEl.offsetWidth - rect.left - rect.width;
    }

    // If positioned on the bottom of the el element
    if (!positioning.isTop) {
        ret.top = scrollTop + rect.top + rect.height;
    } else {
        // If positioned on the top of the el element
        // See [IMPORTANT #2] on this doc for more info about this calculation
        ret.bottom = scrollTop + rect.top;
    }
    return ret;
}

/**
 * Given an HTMLElement and a position object, sets given positions to that element, while setting the others to initial state.
 *
 * IMPORTANT:
 * When applying a bottom property, the given values is always assigned to top property, while adding a translateY(-100%)
 * to allow the positioning to be correct. See getElementOffset at the bottom of this doc for more info about this issue.
 *
 * @name setElementOffset
 * @param el - The element to position
 * @param position - The position to assign to that element
 * @see getElementOffset
 */
export function setElementOffset(el: HTMLElement, position: ElementOffset) {
    const style = el.style;
    // Always check alterned elements
    if (position.left) {
        style.left = position.left + 'px';
        style.right = 'initial';
    } else if (position.right) {
        style.right = position.right + 'px';
        style.left = 'initial';
    }

    // Notice that this piece must ALWAYS return a value.
    // Otherwise the positioning offset will be wrongly placed.
    if (position.top) {
        style.top = position.top + 'px';
        style.bottom = 'initial';
        style.transform = '';
    } else if (position.bottom) {
        style.top = position.bottom + 'px';
        style.bottom = 'initial';
        style.transform = 'translateY(-100%)';
    }
}

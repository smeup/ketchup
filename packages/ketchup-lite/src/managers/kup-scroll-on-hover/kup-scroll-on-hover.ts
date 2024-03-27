import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupScrollOnHoverElement,
    KupScrollOnHoverPercentages,
    ScrollOnHoverDirection,
} from './kup-scroll-on-hover-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Lets the user scroll an element's overflow by hovering with the mouse on its left/right edge.
 * @module KupScrollOnHover
 */
export class KupScrollOnHover {
    container: HTMLElement;
    delay: number;
    managedElements: Set<KupScrollOnHoverElement>;
    step: number;
    #arrowsContainer: HTMLElement;
    #leftArrows: HTMLElement[];
    #rightArrows: HTMLElement[];
    #scrollEvent: (event: Event) => void;
    #mousemoveEvent: (event: MouseEvent) => Promise<void>;
    #mouseleaveEvent: (event: MouseEvent) => Promise<void>;
    #rAF: number;
    #timeout: ReturnType<typeof setTimeout>;
    /**
     * Initializes KupScrollOnHover.
     * @param {number} delay - Sets the time in milliseconds before the scrolling starts when mouse-hovering.
     * @param {number} step - The amount in pixels for each scroll recursion.
     */
    constructor(delay?: number, step?: number) {
        this.delay = delay ? delay : 500;
        this.managedElements = new Set();
        this.step = step ? step : 50;
        this.#mouseleaveEvent = (event: MouseEvent) =>
            this.stop(event.target as KupScrollOnHoverElement);
        this.#mousemoveEvent = (event: MouseEvent) => this.start(event);
        this.#rAF = null;
        this.#scrollEvent = (event: Event) =>
            this.updateChildren(event.target as KupScrollOnHoverElement);
        this.#timeout = null;
    }
    /**
     * Initializes the left and right arrow icons.
     */
    #initArrows() {
        this.#arrowsContainer = document.createElement('div');
        this.#leftArrows = [];
        this.#rightArrows = [];
        this.#arrowsContainer.id = 'kup-scrolling-arrows';
        for (let index = 1; index < 4; index++) {
            const arrow: HTMLElement = document.createElement('div');
            arrow.setAttribute(
                'class',
                'kup-left-scrolling-arrow kup-arrow-' + index
            );
            this.#leftArrows.push(arrow);
        }
        for (let index = 1; index < 4; index++) {
            const arrow: HTMLElement = document.createElement('div');
            arrow.setAttribute(
                'class',
                'kup-right-scrolling-arrow kup-arrow-' + index
            );
            this.#rightArrows.push(arrow);
        }
        this.#arrowsContainer.append(
            this.#leftArrows[2],
            this.#leftArrows[1],
            this.#leftArrows[0],
            this.#rightArrows[0],
            this.#rightArrows[1],
            this.#rightArrows[2]
        );
        this.container = document.createElement('div');
        this.container.setAttribute('kup-scroll-on-hover', '');
        this.container.appendChild(this.#arrowsContainer);
        document.body.appendChild(this.container);
    }
    /**
     * Watches the given element in order to trigger the scroll on hover when conditions are met.
     * Children nodes with the "hover-scrolling-child" will be watched and scrolled when el scrolls.
     * @param {KupScrollOnHoverElement} el - Element to watch.
     * @param {boolean} vertical - Enables vertical scroll.
     * @param {KupScrollOnHoverPercentages} percentages - Sets how big is the area in which the scroll is enabled.
     * @param {number} step - The amount in pixels for each scroll recursion.
     */
    register(
        el: KupScrollOnHoverElement,
        vertical?: boolean,
        percentages?: KupScrollOnHoverPercentages,
        step?: number
    ): void {
        if (!this.#arrowsContainer) {
            this.#initArrows();
        }
        el.style.overflowX = 'auto';
        el.scrollOnHover = {
            active: false,
            children: el.querySelectorAll('.hover-scrolling-child'),
            percentages: percentages
                ? percentages
                : { back: 0.1, forward: 0.9 },
            rect: null,
            step: step,
            vertical: vertical || null,
            x: 0,
            y: 0,
        };
        if (el.scrollOnHover.children) {
            el.addEventListener('scroll', this.#scrollEvent);
        }
        el.addEventListener('mousemove', this.#mousemoveEvent);
        el.addEventListener('mouseleave', this.#mouseleaveEvent);
        this.managedElements.add(el);
    }
    /**
     * Removes the given element from ScrollOnHover watchlist.
     * @param {KupScrollOnHoverElement} el - Element to unregister.
     */
    unregister(el: KupScrollOnHoverElement): void {
        el.removeEventListener('scroll', this.#scrollEvent);
        el.removeEventListener('mousemove', this.#mousemoveEvent);
        el.removeEventListener('mouseleave', this.#mouseleaveEvent);
        if (this.managedElements) {
            this.managedElements.delete(el);
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {KupScrollOnHoverElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: KupScrollOnHoverElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
    /**
     * When called, this function prepares the class for the scrolling process.
     * @param {MouseEvent} event - The starter event, which should be a MouseMove event.
     */
    async start(event: MouseEvent): Promise<void> {
        const el: KupScrollOnHoverElement =
            event.currentTarget as KupScrollOnHoverElement;
        el.scrollOnHover.rect = el.getBoundingClientRect();
        el.scrollOnHover.x = event.clientX;
        el.scrollOnHover.y = event.clientY;
        this.#arrowsContainer.style.left = event.clientX + 'px';
        this.#arrowsContainer.style.top = event.clientY + 'px';
        if (el.scrollOnHover.active || this.#timeout) {
            return;
        }
        let trueHeight: number = el.clientHeight;
        if (trueHeight === 0) {
            trueHeight = el.offsetHeight;
        }
        let trueWidth: number = el.clientWidth;
        if (trueWidth === 0) {
            trueWidth = el.offsetWidth;
        }
        if (el.scrollWidth > trueWidth + 10) {
            if (trueWidth !== 0 && !el.scrollOnHover.active) {
                const percRight: number =
                    trueWidth - trueWidth * el.scrollOnHover.percentages.back;
                const percLeft: number =
                    trueWidth -
                    trueWidth * el.scrollOnHover.percentages.forward;
                const elOffset: number =
                    el.scrollOnHover.x - el.scrollOnHover.rect.left;
                const maxScrollLeft: number = el.scrollWidth - trueWidth;
                const direction: ScrollOnHoverDirection =
                    elOffset < percLeft && el.scrollLeft !== 0
                        ? ScrollOnHoverDirection.LEFT
                        : elOffset > percRight &&
                          el.scrollLeft !== maxScrollLeft
                        ? ScrollOnHoverDirection.RIGHT
                        : null;
                if (direction) {
                    for (let i = 0; i < 3; i++) {
                        if (direction === ScrollOnHoverDirection.LEFT) {
                            this.#leftArrows[i].classList.add('kup-activated');
                        } else {
                            this.#rightArrows[i].classList.add('kup-activated');
                        }
                    }
                    this.#timeout = setTimeout(() => {
                        el.scrollOnHover.active = true;
                        this.#rAF = requestAnimationFrame(function () {
                            dom.ketchup.scrollOnHover.run(
                                el,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                direction
                            );
                        });
                    }, this.delay);
                }
            }
        }
        if (el.scrollOnHover.vertical && el.scrollHeight > trueHeight + 10) {
            if (trueHeight !== 0 && !el.scrollOnHover.active) {
                const percBottom: number =
                    trueHeight - trueHeight * el.scrollOnHover.percentages.back;
                const percTop: number =
                    trueHeight -
                    trueHeight * el.scrollOnHover.percentages.forward;
                const elOffset: number =
                    el.scrollOnHover.y - el.scrollOnHover.rect.top;
                const maxScrollTop: number = el.scrollHeight - trueHeight;
                const direction: ScrollOnHoverDirection =
                    elOffset < percTop && el.scrollTop !== 0
                        ? ScrollOnHoverDirection.TOP
                        : elOffset > percBottom && el.scrollTop !== maxScrollTop
                        ? ScrollOnHoverDirection.BOTTOM
                        : null;
                if (direction) {
                    this.#timeout = setTimeout(() => {
                        el.scrollOnHover.active = true;
                        this.#rAF = requestAnimationFrame(function () {
                            dom.ketchup.scrollOnHover.run(
                                el,
                                maxScrollTop,
                                percBottom,
                                percTop,
                                direction
                            );
                        });
                    }, this.delay);
                }
            }
        }
    }
    /**
     * When called, this function stops the scrolling process.
     * @param {KupScrollOnHoverElement} el - The scrolled element.
     */
    async stop(el: KupScrollOnHoverElement): Promise<void> {
        el.scrollOnHover.active = false;
        cancelAnimationFrame(this.#rAF);
        clearTimeout(this.#timeout);
        this.#timeout = null;
        for (let i = 0; i < this.#leftArrows.length; i++) {
            this.#leftArrows[i].classList.remove('kup-activated');
            this.#leftArrows[i].classList.remove('kup-animated');
        }
        for (let i = 0; i < this.#rightArrows.length; i++) {
            this.#rightArrows[i].classList.remove('kup-activated');
            this.#rightArrows[i].classList.remove('kup-animated');
        }
    }
    /**
     * The actual recursive scroll function.
     * @param {KupScrollOnHoverElement} el - The scrolled element.
     * @param {number} maxScrollLeft - Left coordinates to which the recursiveness must be stopped.
     * @param {number} percForward - Range of the right (or bottom) area.
     * @param {number} percBack - Range of the left (or top) scrollable area.
     * @param {ScrollOnHoverDirection} direction - Direction of the scroll.
     */
    run(
        el: KupScrollOnHoverElement,
        maxScrollLeft: number,
        percForward: number,
        percBack: number,
        direction: ScrollOnHoverDirection
    ): void {
        if (!el.scrollOnHover.active) {
            this.stop(el);
            return;
        }
        let offset: number = 0;
        switch (direction) {
            case ScrollOnHoverDirection.BOTTOM:
            case ScrollOnHoverDirection.TOP: {
                offset = el.scrollOnHover.y - el.scrollOnHover.rect.top;
                if (offset > percBack && offset < percForward) {
                    this.stop(el);
                    return;
                }
                break;
            }
            case ScrollOnHoverDirection.LEFT:
            case ScrollOnHoverDirection.RIGHT: {
                offset = el.scrollOnHover.x - el.scrollOnHover.rect.left;
                if (offset > percBack && offset < percForward) {
                    this.stop(el);
                    return;
                }
                break;
            }
        }
        if (
            direction === ScrollOnHoverDirection.RIGHT &&
            percForward > offset
        ) {
            this.stop(el);
            return;
        }
        if (direction === ScrollOnHoverDirection.LEFT && percBack < offset) {
            this.stop(el);
            return;
        }
        if (direction === ScrollOnHoverDirection.TOP && percBack < offset) {
            this.stop(el);
            return;
        }
        if (
            direction === ScrollOnHoverDirection.BOTTOM &&
            percForward > offset
        ) {
            this.stop(el);
            return;
        }
        if (el.scrollOnHover.children) {
            this.updateChildren(el);
        }
        let arrow: HTMLElement[];
        switch (direction) {
            case ScrollOnHoverDirection.BOTTOM: {
                arrow = [];
                if (el.scrollTop === maxScrollLeft) {
                    this.stop(el);
                    return;
                }
                el.scrollTop += el.scrollOnHover.step
                    ? el.scrollOnHover.step
                    : this.step;
                break;
            }
            case ScrollOnHoverDirection.LEFT: {
                arrow = this.#leftArrows;
                if (el.scrollLeft === 0) {
                    this.stop(el);
                    return;
                }
                el.scrollLeft -= el.scrollOnHover.step
                    ? el.scrollOnHover.step
                    : this.step;
                break;
            }
            case ScrollOnHoverDirection.RIGHT: {
                arrow = this.#rightArrows;
                if (el.scrollLeft === maxScrollLeft) {
                    this.stop(el);
                    return;
                }
                el.scrollLeft += el.scrollOnHover.step
                    ? el.scrollOnHover.step
                    : this.step;
                break;
            }
            case ScrollOnHoverDirection.TOP: {
                arrow = [];
                if (el.scrollTop === 0) {
                    this.stop(el);
                    return;
                }
                el.scrollTop -= el.scrollOnHover.step
                    ? el.scrollOnHover.step
                    : this.step;
                break;
            }
        }

        for (let i = 0; i < arrow.length; i++) {
            arrow[i].classList.add('kup-animated');
        }

        this.#rAF = requestAnimationFrame(function () {
            dom.ketchup.scrollOnHover.run(
                el,
                maxScrollLeft,
                percForward,
                percBack,
                direction
            );
        });
    }
    /**
     * Scrolls children of the element having the "hover-scrolling-child" class
     * @param {KupScrollOnHoverElement} el - The scrolled element.
     */
    updateChildren(el: KupScrollOnHoverElement): void {
        for (let i = 0; i < el.scrollOnHover.children.length; i++) {
            el.scrollOnHover.children[i].scrollLeft = el.scrollLeft;
        }
    }
}

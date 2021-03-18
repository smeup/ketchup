import type { ScrollableElement } from './scroll-on-hover-declarations';

/**
 * Lets the user scroll an element's overflow by hovering with the mouse on its left/right edge.
 * @module ScrollOnHover
 */
export class ScrollOnHover {
    #arrowsContainer: HTMLElement = null;
    #leftArrows: HTMLElement[] = [];
    #rightArrows: HTMLElement[] = [];
    #initialized: boolean = false;
    #scrollEvent = (event: Event) =>
        this.updateChildren(event.target as ScrollableElement);
    #mousemoveEvent = (event: MouseEvent) => this.start(event);
    #mouseleaveEvent = (event: MouseEvent) =>
        this.stop(event.target as ScrollableElement);
    #timeout = null;
    debounce: number = 25;
    delay: number = 500;
    managedElements: Set<ScrollableElement> = null;
    /**
     * Initializes the class' elements.
     */
    initialize(): void {
        this.#arrowsContainer = document.createElement('div');
        this.#arrowsContainer.id = 'container-scrolling-arrow';
        for (let index = 1; index < 4; index++) {
            const arrow: HTMLElement = document.createElement('div');
            arrow.setAttribute('class', 'left-scrolling-arrow arrow-' + index);
            this.#leftArrows.push(arrow);
        }
        for (let index = 1; index < 4; index++) {
            const arrow: HTMLElement = document.createElement('div');
            arrow.setAttribute('class', 'right-scrolling-arrow arrow-' + index);
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
        document.body.append(this.#arrowsContainer);
        this.#initialized = true;
        this.managedElements = new Set();
    }
    /**
     * Watches the given element in order to trigger the scroll on hover when conditions are met.
     * Children nodes with the "hover-scrolling-child" will be watched and scrolled when el scrolls.
     * @param {ScrollableElement} el - Element to watch.
     */
    register(el: ScrollableElement): void {
        if (!this.#initialized) {
            this.initialize();
        }
        el.style.overflowX = 'auto';
        el.scrollOnHover = {
            active: false,
            children: el.querySelectorAll('.hover-scrolling-child'),
            rect: null,
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
     * @param {ScrollableElement} el - Element to unregister.
     */
    unregister(el: ScrollableElement): void {
        el.removeEventListener('scroll', this.#scrollEvent);
        el.removeEventListener('mousemove', this.#mousemoveEvent);
        el.removeEventListener('mouseleave', this.#mouseleaveEvent);
        this.managedElements.delete(el);
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {ScrollableElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: ScrollableElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }

    async start(event: any): Promise<void> {
        const el: ScrollableElement = event.currentTarget;
        el.scrollOnHover.rect = el.getBoundingClientRect();
        el.scrollOnHover.x = event.clientX;
        el.scrollOnHover.y = event.clientY;
        this.#arrowsContainer.style.left = event.clientX + 'px';
        this.#arrowsContainer.style.top = event.clientY + 'px';
        if (el.scrollOnHover.active) {
            return;
        }
        if (el.scrollOnHover.children) {
            this.updateChildren(el);
        }
        let trueWidth: number = el.clientWidth;
        if (trueWidth === 0) {
            trueWidth = el.offsetWidth;
        }
        if (el.scrollWidth > trueWidth + 10) {
            if (trueWidth !== 0 && !el.scrollOnHover.active) {
                const percRight: number = trueWidth - trueWidth * 0.1;
                const percLeft: number = trueWidth - trueWidth * 0.9;
                const elOffset: number =
                    el.scrollOnHover.x - el.scrollOnHover.rect.left;
                const maxScrollLeft: number = el.scrollWidth - trueWidth;
                if (elOffset < percLeft) {
                    if (el.scrollLeft !== 0) {
                        for (let i = 0; i < this.#leftArrows.length; i++) {
                            this.#leftArrows[i].classList.add('activated');
                        }
                        this.#timeout = setTimeout(() => {
                            this.run(
                                el,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                'left'
                            );
                        }, this.delay);
                    }
                } else if (elOffset > percRight) {
                    if (el.scrollLeft !== maxScrollLeft) {
                        for (let i = 0; i < this.#rightArrows.length; i++) {
                            this.#rightArrows[i].classList.add('activated');
                        }
                        this.#timeout = setTimeout(() => {
                            this.run(
                                el,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                'right'
                            );
                        }, this.delay);
                    }
                }
            }
        }
    }

    async stop(el: ScrollableElement): Promise<void> {
        el.scrollOnHover.active = false;
        clearTimeout(this.#timeout);
        for (let i = 0; i < this.#leftArrows.length; i++) {
            this.#leftArrows[i].classList.remove('activated');
            this.#leftArrows[i].classList.remove('animated');
        }
        for (let i = 0; i < this.#rightArrows.length; i++) {
            this.#rightArrows[i].classList.remove('activated');
            this.#rightArrows[i].classList.remove('animated');
        }
    }

    async run(
        el: ScrollableElement,
        maxScrollLeft: number,
        percRight: number,
        percLeft: number,
        direction: string
    ) {
        el.scrollOnHover.active = true;
        let offset = el.scrollOnHover.x - el.scrollOnHover.rect.left;
        if (offset > percLeft && offset < percRight) {
            this.stop(el);
            return;
        }
        if (direction === 'right' && percRight > offset) {
            this.stop(el);
            return;
        }
        if (direction === 'left' && percLeft < offset) {
            this.stop(el);
            return;
        }
        var step = el.scrollLeft;
        if (el.scrollOnHover.children) {
            this.updateChildren(el);
        }
        let arrow: HTMLElement[];
        if (direction === 'left') {
            arrow = this.#leftArrows;
            if (step === 0) {
                this.stop(el);
                return;
            }
            step = step - parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        } else {
            arrow = this.#rightArrows;
            if (step === maxScrollLeft) {
                this.stop(el);
                return;
            }
            step = step + parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        }
        for (let i = 0; i < arrow.length; i++) {
            arrow[i].classList.add('animated');
        }
        el.scrollLeft = step;
        setTimeout(() => {
            this.run(el, maxScrollLeft, percRight, percLeft, direction);
        }, this.debounce);
    }

    updateChildren(el: ScrollableElement) {
        let step = el.scrollLeft;
        for (let i = 0; i < el.scrollOnHover.children.length; i++) {
            el.scrollOnHover.children[i].scrollLeft = step;
        }
    }
}

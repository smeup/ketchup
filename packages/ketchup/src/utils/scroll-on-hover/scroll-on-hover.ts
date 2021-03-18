/**
 * Lets the user scroll an element's overflow by hovering with the mouse on its left/right edge.
 * @module ScrollOnHover
 */
export class ScrollOnHover {
    #arrowsContainer: HTMLElement = null;
    #leftArrows: HTMLElement[] = [];
    #rightArrows: HTMLElement[] = [];
    #initialized: boolean = false;
    managedElements: Set<HTMLElement> = null;

    initialize() {
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
        this.#initialized = true;
        this.managedElements = new Set();
    }

    register(el: HTMLElement) {
        if (!this.#initialized) {
            this.initialize();
        }
        el.classList.add('hover-scrolling-el');
        el.style.overflowX = 'auto';
        el.parentElement.classList.add('hover-scrolling-parent');
        el['scrollTimeout'] = 'off';
        document.body.append(this.#arrowsContainer);
        el['childrenToScroll'] = el.querySelectorAll('.hover-scrolling-child');
        if (el['childrenToScroll']) {
            el.addEventListener('scroll', (event: any) =>
                this.setChildrenScroll(event.target)
            );
            el.addEventListener('click', (event: any) =>
                this.setChildrenScroll(event.target)
            );
        }
        el.addEventListener('mousemove', (event: MouseEvent) =>
            this.handleScroll(event)
        );
        el.addEventListener('mouseleave', (event: MouseEvent) =>
            this.stop(event.target)
        );
        this.managedElements.add(el);
    }

    unregister(el: HTMLElement) {
        el.classList.remove('hover-scrolling-el');
        el.parentElement.classList.remove('hover-scrolling-parent');
        el.removeEventListener('scroll', (event: any) =>
            this.setChildrenScroll(event.target)
        );
        el.removeEventListener('click', (event: any) =>
            this.setChildrenScroll(event.target)
        );
        el.removeEventListener('mousemove', (event: MouseEvent) =>
            this.handleScroll(event)
        );
        el.removeEventListener('mouseleave', (event: MouseEvent) =>
            this.stop(event)
        );
        this.managedElements.delete(el);
    }

    isRegistered(el: HTMLElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }

    async start(
        el: any,
        arrow: any,
        maxScrollLeft: number,
        percRight: number,
        percLeft: number,
        direction: string
    ) {
        if (!el) {
            return;
        }
        let elOffset = el.scrollOnHoverX - el.clientRect.left;
        if (
            el.scrollTimeout === 'off' ||
            (elOffset > percLeft && elOffset < percRight)
        ) {
            this.stop(el);
            return;
        }
        if (direction === 'right' && percRight > elOffset) {
            this.stop(el);
            return;
        }
        if (direction === 'left' && percLeft < elOffset) {
            this.stop(el);
            return;
        }
        var step = el.scrollLeft;
        this.setChildrenScroll(el);
        for (let i = 0; i < arrow.length; i++) {
            arrow[i].classList.add('animated');
        }
        var firstArrow = arrow[0];
        if (firstArrow.classList.contains('left-scrolling-arrow')) {
            if (step === 0) {
                this.stop(el);
                return;
            }
            step = step - parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        } else {
            if (step === maxScrollLeft) {
                this.stop(el);
                return;
            }
            step = step + parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        }
        el.scrollLeft = step;
        setTimeout(() => {
            this.start(
                el,
                arrow,
                maxScrollLeft,
                percRight,
                percLeft,
                direction
            );
        }, 10);
    }

    async stop(el: any) {
        if (!el) {
            return;
        }
        el['scrollTimeout'] = 'off';
        clearTimeout(el.scrollTimeout);
        for (let i = 0; i < this.#leftArrows.length; i++) {
            this.#leftArrows[i].classList.remove('activated');
            this.#leftArrows[i].classList.remove('animated');
        }
        for (let i = 0; i < this.#rightArrows.length; i++) {
            this.#rightArrows[i].classList.remove('activated');
            this.#rightArrows[i].classList.remove('animated');
        }
    }

    setChildrenScroll(el: any) {
        if (!el) {
            return;
        }
        let step = el.scrollLeft;
        let childrenToScroll = el.querySelectorAll('.hover-scrolling-child');
        if (childrenToScroll) {
            for (let i = 0; i < childrenToScroll.length; i++) {
                childrenToScroll[i].scrollLeft = step;
            }
        }
    }

    async handleScroll(event: any) {
        let parentEl = event.target.closest('.hover-scrolling-parent');
        if (!parentEl) {
            return;
        }
        let el = parentEl.querySelector('.hover-scrolling-el');
        if (!el) {
            return;
        }
        el['clientRect'] = el.getBoundingClientRect();
        el['scrollOnHoverX'] = event.clientX;
        el['scrollOnHoverY'] = event.clientY;
        this.#arrowsContainer.style.left = event.clientX + 'px';
        this.#arrowsContainer.style.top = event.clientY + 'px';
        if (el['scrollTimeout'] !== 'off') {
            return;
        }
        if (el['childrenToScroll']) {
            this.setChildrenScroll(el);
        }
        let trueWidth = el.clientWidth;

        if (trueWidth === 0) {
            trueWidth = el.offsetWidth;
        }
        if (el.scrollWidth > trueWidth + 10) {
            if (trueWidth !== 0 && el.scrollTimeout === 'off') {
                let percRight = trueWidth - trueWidth * 0.1;
                let percLeft = trueWidth - trueWidth * 0.9;
                let elOffset = el.scrollOnHoverX - el.clientRect.left;
                let maxScrollLeft = el.scrollWidth - trueWidth;
                if (elOffset < percLeft) {
                    if (el.scrollLeft !== 0) {
                        for (let i = 0; i < this.#leftArrows.length; i++) {
                            this.#leftArrows[i].classList.add('activated');
                        }
                        el['scrollTimeout'] = setTimeout(() => {
                            this.start(
                                el,
                                this.#leftArrows,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                'left'
                            );
                        }, 500);
                    }
                } else if (elOffset > percRight) {
                    if (el.scrollLeft !== maxScrollLeft) {
                        for (let i = 0; i < this.#rightArrows.length; i++) {
                            this.#rightArrows[i].classList.add('activated');
                        }
                        el['scrollTimeout'] = setTimeout(() => {
                            this.start(
                                el,
                                this.#rightArrows,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                'right'
                            );
                        }, 500);
                    }
                }
            }
        }
    }
}

// Scroll-on-hover function
//
// Arguments:
//
// - el       = element that needs to scroll on mouse over
//

export class scrollOnHover {
    scrollOnHoverDisable(el: HTMLElement) {
        if (!el) {
            return;
        }
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
            this.killScroll(event)
        );
    }

    setupArrows() {
        let arrowsContainer: HTMLElement = document.createElement('div');
        arrowsContainer.setAttribute('id', 'container-scrolling-arrow');
        let leftArrow1: HTMLElement = document.createElement('div');
        leftArrow1.setAttribute('class', 'left-scrolling-arrow arrow-1');
        let leftArrow2: HTMLElement = document.createElement('div');
        leftArrow2.setAttribute('class', 'left-scrolling-arrow arrow-2');
        let leftArrow3: HTMLElement = document.createElement('div');
        leftArrow3.setAttribute('class', 'left-scrolling-arrow arrow-3');
        let rightArrow1: HTMLElement = document.createElement('div');
        rightArrow1.setAttribute('class', 'right-scrolling-arrow arrow-1');
        let rightArrow2: HTMLElement = document.createElement('div');
        rightArrow2.setAttribute('class', 'right-scrolling-arrow arrow-2');
        let rightArrow3: HTMLElement = document.createElement('div');
        rightArrow3.setAttribute('class', 'right-scrolling-arrow arrow-3');
        arrowsContainer.append(
            leftArrow3,
            leftArrow2,
            leftArrow1,
            rightArrow1,
            rightArrow2,
            rightArrow3
        );
        return arrowsContainer;
    }

    scrollOnHoverSetup(el: HTMLElement) {
        if (!el) {
            return;
        }
        let arrows = this.setupArrows();
        el.classList.add('hover-scrolling-el');
        el.parentElement.classList.add('hover-scrolling-parent');
        el['scrollTimeout'] = 'off';
        el.append(arrows);
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
            this.killScroll(event.target)
        );
    }

    async setCoordinates(event: any, el: any) {
        if (!el) {
            return;
        }
        let arrowContainer = el.querySelector('#container-scrolling-arrow');
        el['clientRect'] = el.getBoundingClientRect();
        el['scrollOnHoverX'] = event.clientX;
        el['scrollOnHoverY'] = event.clientY;
        arrowContainer.style.left = event.clientX + 'px';
        arrowContainer.style.top = event.clientY + 'px';
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
        this.setCoordinates(event, el);
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
                var leftArrow = el.querySelectorAll(
                    '#container-scrolling-arrow .left-scrolling-arrow'
                );
                var rightArrow = el.querySelectorAll(
                    '#container-scrolling-arrow .right-scrolling-arrow'
                );
                if (elOffset < percLeft) {
                    if (el.scrollLeft !== 0) {
                        for (let i = 0; i < leftArrow.length; i++) {
                            leftArrow[i].classList.add('activated');
                        }
                        el['scrollTimeout'] = setTimeout(() => {
                            this.startScrollOnHover(
                                el,
                                leftArrow,
                                maxScrollLeft,
                                percRight,
                                percLeft,
                                'left'
                            );
                        }, 500);
                    }
                } else if (elOffset > percRight) {
                    if (el.scrollLeft !== maxScrollLeft) {
                        for (let i = 0; i < rightArrow.length; i++) {
                            rightArrow[i].classList.add('activated');
                        }
                        el['scrollTimeout'] = setTimeout(() => {
                            this.startScrollOnHover(
                                el,
                                rightArrow,
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

    async startScrollOnHover(
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
            this.killScroll(el);
            return;
        }
        if (direction === 'right' && percRight > elOffset) {
            this.killScroll(el);
            return;
        }
        if (direction === 'left' && percLeft < elOffset) {
            this.killScroll(el);
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
                this.killScroll(el);
                return;
            }
            step = step - parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        } else {
            if (step === maxScrollLeft) {
                this.killScroll(el);
                return;
            }
            step = step + parseInt('10', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        }
        el.scrollLeft = step;
        setTimeout(() => {
            this.startScrollOnHover(
                el,
                arrow,
                maxScrollLeft,
                percRight,
                percLeft,
                direction
            );
        }, 10);
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

    async killScroll(el: any) {
        if (!el) {
            return;
        }
        el['scrollTimeout'] = 'off';
        clearTimeout(el.scrollTimeout);
        var leftArrow = el.querySelectorAll(
            '#container-scrolling-arrow .left-scrolling-arrow'
        );
        var rightArrow = el.querySelectorAll(
            '#container-scrolling-arrow .right-scrolling-arrow'
        );
        for (let i = 0; i < leftArrow.length; i++) {
            leftArrow[i].classList.remove('activated');
            leftArrow[i].classList.remove('animated');
        }
        for (let i = 0; i < rightArrow.length; i++) {
            rightArrow[i].classList.remove('activated');
            rightArrow[i].classList.remove('animated');
        }
    }
}

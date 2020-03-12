// Scroll-on-hover function
//
// Arguments:
//
// - el       = element that needs to scroll on mouse over
//

var scrollOnHoverX: number = 0;
var scrollOnHoverY: number = 0;
var scrollTimeout: any = 'off';

export class scrollOnHover {
    scrollOnHoverDisable(el: HTMLElement) {
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

    scrollOnHoverSetup(el: HTMLElement) {
        el.classList.add('hover-scrolling-el');
        el.parentElement.classList.add('hover-scrolling-parent');
        document.createElement;
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
        el.append(arrowsContainer);
        el.addEventListener('scroll', (event: any) =>
            this.setChildrenScroll(event.target)
        );
        el.addEventListener('click', (event: any) =>
            this.setChildrenScroll(event.target)
        );
        el.addEventListener('mousemove', (event: MouseEvent) =>
            this.handleScroll(event)
        );
        el.addEventListener('mouseleave', (event: MouseEvent) =>
            this.killScroll(event)
        );
    }

    handleScroll(event: any) {
        scrollOnHoverX = event.clientX;
        scrollOnHoverY = event.clientY;
        let elParent = event.target.closest('.hover-scrolling-parent');
        if (!elParent) {
            return;
        }
        let el = elParent.querySelectorAll('.hover-scrolling-el')[0];
        if (!el) {
            return;
        }

        const elPos = el.getBoundingClientRect();
        this.setChildrenScroll(el);
        let arrowContainter = el.querySelectorAll(
            '#container-scrolling-arrow'
        )[0];
        let trueWidth = el.clientWidth;
        arrowContainter.style.top = scrollOnHoverY + 'px';
        arrowContainter.style.left = scrollOnHoverX + 'px';

        if (trueWidth === 0) {
            trueWidth = el.offsetWidth;
        }
        if (el.scrollWidth > trueWidth + 10) {
            if (trueWidth !== 0 && scrollTimeout === 'off') {
                let percRight = trueWidth - trueWidth * 0.1;
                let percLeft = trueWidth - trueWidth * 0.9;
                let elOffset = scrollOnHoverX - elPos.left;
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
                        scrollTimeout = setTimeout(() => {
                            this.startScrollOnHover(
                                el,
                                leftArrow,
                                maxScrollLeft,
                                arrowContainter,
                                percRight,
                                percLeft,
                                event,
                                'left'
                            );
                        }, 500);
                    }
                } else if (elOffset > percRight) {
                    if (el.scrollLeft !== maxScrollLeft) {
                        for (let i = 0; i < rightArrow.length; i++) {
                            rightArrow[i].classList.add('activated');
                        }
                        scrollTimeout = setTimeout(() => {
                            this.startScrollOnHover(
                                el,
                                rightArrow,
                                maxScrollLeft,
                                arrowContainter,
                                percRight,
                                percLeft,
                                event,
                                'right'
                            );
                        }, 500);
                    }
                }
            }
        }
    }

    startScrollOnHover(
        el: any,
        arrow: any,
        maxScrollLeft: number,
        arrowContainter: HTMLElement,
        percRight: number,
        percLeft: number,
        event: any,
        direction: string
    ) {
        const elPos = el.getBoundingClientRect();

        let elOffset = scrollOnHoverX - elPos.left;
        if (
            scrollTimeout === 'off' ||
            (elOffset > percLeft && elOffset < percRight)
        ) {
            this.killScroll(event);
            return;
        }
        if (direction === 'right' && percRight > elOffset) {
            this.killScroll(event);
            return;
        }
        if (direction === 'left' && percLeft < elOffset) {
            this.killScroll(event);
            return;
        }
        var step = el.scrollLeft;
        this.setChildrenScroll(el);
        arrowContainter.style.top = scrollOnHoverY + 'px';
        arrowContainter.style.left = scrollOnHoverX + 'px';
        for (let i = 0; i < arrow.length; i++) {
            arrow[i].classList.add('animated');
        }
        var firstArrow = arrow[0];
        if (firstArrow.classList.contains('left-scrolling-arrow')) {
            if (step === 0) {
                this.killScroll(event);
                return;
            }
            step = step - parseInt('1', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        } else {
            if (step === maxScrollLeft) {
                this.killScroll(event);
                return;
            }
            step = step + parseInt('1', 10); //subtracting 1 without this trick caused Safari to have problems: it subtracted decimal values instead of 1 - scroll didn't work
        }
        el.scrollLeft = step;
        setTimeout(() => {
            this.startScrollOnHover(
                el,
                arrow,
                maxScrollLeft,
                arrowContainter,
                percRight,
                percLeft,
                event,
                direction
            );
        }, 50);
        //Doppio lancio per aumentare la velocità ad ogni giro (in cascata)
        setTimeout(() => {
            this.startScrollOnHover(
                el,
                arrow,
                maxScrollLeft,
                arrowContainter,
                percRight,
                percLeft,
                event,
                direction
            );
        }, 250);
    }

    setChildrenScroll(el: any) {
        let step = el.scrollLeft;
        let childrenToScroll = el.querySelectorAll('.hover-scrolling-child');
        if (childrenToScroll) {
            for (let i = 0; i < childrenToScroll.length; i++) {
                childrenToScroll[i].scrollLeft = step;
            }
        }
    }

    killScroll(event: any) {
        let el: any;
        if (event.target.shadowRoot) {
            let elShadow = event.target.shadowRoot;
            if (!elShadow) {
                return;
            }
            el = elShadow.querySelectorAll('.hover-scrolling-el')[0];
            if (!el) {
                return;
            }
        } else {
            let elParent = event.target.closest('.hover-scrolling-parent');
            if (!elParent) {
                return;
            }
            el = elParent.querySelectorAll('.hover-scrolling-el')[0];
            if (!el) {
                return;
            }
        }
        scrollTimeout = 'off';
        clearTimeout(scrollTimeout);
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

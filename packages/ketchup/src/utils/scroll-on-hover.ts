// Funzione per abilitare lo scroll on-hover.
//
// Parametri:
//
// - el       = l'elemento che deve scrollare
//

var scrollOnHoverX: number = 0;
var scrollOnHoverY: number = 0;
var scrollTimeout: any = 'off';

export class scrollOnHover {
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
        el.addEventListener('click', (event: MouseEvent) =>
            this.handleScroll(event)
        );
        el.addEventListener('scroll', (event: MouseEvent) =>
            this.handleScroll(event)
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
        let el = event.target
            .closest('.hover-scrolling-parent')
            .querySelectorAll('.hover-scrolling-el')[0];
        let step = el.scrollLeft;
        let childrenToScroll = el.querySelectorAll('.hover-scrolling-child');
        if (childrenToScroll) {
            for (let i = 0; i < childrenToScroll.length; i++) {
                childrenToScroll[i].scrollLeft = step;
            }
        }
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
                let elOffset =
                    scrollOnHoverX - el.offsetLeft - el.offsetParent.offsetLeft;
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
                                elOffset,
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
                                elOffset,
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
        el: HTMLElement,
        elOffset: number,
        arrow: any,
        maxScrollLeft: number,
        arrowContainter: HTMLElement,
        percRight: number,
        percLeft: number,
        event: any,
        direction: string
    ) {
        let childrenToScroll = el.querySelectorAll('.hover-scrolling-child');
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
        if (childrenToScroll) {
            for (let i = 0; i < childrenToScroll.length; i++) {
                childrenToScroll[i].scrollLeft = step;
            }
        }
        setTimeout(() => {
            this.startScrollOnHover(
                el,
                elOffset,
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
                elOffset,
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

    killScroll(event: any) {
        let el: any;
        if (event.target.shadowRoot) {
            el = event.target.shadowRoot.querySelectorAll(
                '.hover-scrolling-el'
            )[0];
        } else {
            el = event.target
                .closest('.hover-scrolling-parent')
                .querySelectorAll('.hover-scrolling-el')[0];
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

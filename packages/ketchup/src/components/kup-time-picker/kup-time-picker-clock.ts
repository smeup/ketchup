export function timepicker(component) {
    let root = component.rootElement.shadowRoot;
    function createCircleOfDivs(
        num,
        radius,
        offsetX,
        offsetY,
        className,
        add,
        teilbar
    ) {
        var x, y;
        for (var n = 0; n < num; n++) {
            x = radius * Math.cos((n / num) * 2 * Math.PI);
            y = radius * Math.sin((n / num) * 2 * Math.PI);
            var div = document.createElement('div');
            div.className = className;
            if (teilbar == 1) {
                if (n + 3 > 12) {
                    div.textContent = n + 3 - 12 + add;
                } else {
                    let calc = n + 3 + add;
                    if (calc !== 24) {
                        div.textContent = n + 3 + add;
                    } else {
                        div.textContent = '00';
                    }
                }
            } else {
                if (n % teilbar == 0) {
                    if (n + 15 >= 60) {
                        div.setAttribute('data-value', n + 15 - 60 + '');
                        div.textContent = n + 15 - 60 + add;
                    } else {
                        div.setAttribute('data-value', n + 15 + '');
                        div.textContent = n + 15 + add;
                    }
                } else {
                    if (n + 15 >= 60) {
                        div.setAttribute('data-value', n + 15 - 60 + '');
                        div.textContent = '⋅';
                    } else {
                        div.setAttribute('data-value', n + 15 + '');
                        div.textContent = '\u00B7';
                    }
                }
            }

            div.style.left = x + offsetX + 'px';
            div.style.top = y + offsetY + 'px';
            component.rootElement.shadowRoot
                .querySelector('.clock .circle')
                .appendChild(div);
        }
    }
    function selectHours() {
        let circle: HTMLElement = root.querySelector('.circle');
        circle.innerHTML = '';
        createCircleOfDivs(12, 101, 105, 105, 'hour', 0, 1);
        createCircleOfDivs(12, 64, 110, 110, 'hour2', 12, 1);
        let child = document.createElement('div');
        child.classList.add('mid');
        circle.appendChild(child);
        root.querySelector('.clock .top .active').classList.remove('active');
        root.querySelector('.clock .top .h').classList.add('active');
        let hours = root.querySelectorAll('.hour, .hour2');
        for (let index = 0; index < hours.length; index++) {
            hours[index].addEventListener('mouseup', function (this) {
                let root = this.closest('#kup-component');
                root.querySelector('.clock .top .h').innerText =
                    this.innerText.length > 1
                        ? this.innerText
                        : '0' + this.innerText;
                selectMinutes();
            });
        }
    }
    function selectMinutes() {
        root.querySelector('.clock .circle').innerHTML = '';
        root.querySelector('.clock .top .active').classList.remove('active');
        root.querySelector('.clock .top .m').classList.add('active');
        createCircleOfDivs(60, 101, 115, 115, 'min', 0, 5);
        let minutes = root.querySelectorAll('.clock .circle .min');
        for (let index = 0; index < minutes.length; index++) {
            minutes[index].addEventListener('mouseup', function (this) {
                let root = this.closest('#kup-component');
                root.querySelector('.clock .top .m').innerText =
                    this.getAttribute('data-value').length > 1
                        ? this.getAttribute('data-value')
                        : '0' + this.getAttribute('data-value');
            });
        }
    }
    selectHours();

    let hhmm = root.querySelectorAll('.clock .top span');
    for (let index = 0; index < hhmm.length; index++) {
        hhmm[index].addEventListener('click', function (this) {
            if (!this.classList.contains('active')) {
                if (this.classList.contains('h')) {
                    selectHours();
                } else {
                    selectMinutes();
                }
            }
        });
    }
}

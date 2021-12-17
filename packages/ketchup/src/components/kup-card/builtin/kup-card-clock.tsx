import { h, JSX } from '@stencil/core';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupDatesFormats } from '../../../utils/kup-dates/kup-dates-declarations';
import { KupDom } from '../../../utils/kup-manager/kup-manager-declarations';
import { KupCard } from '../kup-card';

const dom: KupDom = document.documentElement as KupDom;
let componentRef: KupCard;
let clockEl: HTMLElement = undefined;
let hoursEl: HTMLElement = undefined;
let hoursCircleEl: HTMLElement = undefined;
let minutesEl: HTMLElement = undefined;
let minutesCircleEl: HTMLElement = undefined;
let secondsCircleEl: HTMLElement = undefined;
let secondsEl: HTMLElement = undefined;
let hoursActive: boolean = true;
let minutesActive: boolean = false;
let secondsActive: boolean = false;

let value = '';
let manageSeconds = false;

export function prepareClock(component: KupCard) {
    componentRef = component;
    return prepTimeArea();
}

function prepTimeArea() {
    return (
        <div
            id="clock-div"
            onBlur={(e: any) => {
                if (!isRelatedTargetInThisComponent(e)) {
                    onKupBlur();
                }
            }}
        >
            {createClock()}
        </div>
    );
}

function onKupClockItemClick(e: CustomEvent, value?: string) {
    if (e != null) {
        if (value == null) {
            value = e.detail.selected.value;
        }
    }
    setClockValueSelected(value);

    componentRef.onKupClick(componentRef.rootElement.id, value);
}

function setClockValueSelected(newValue?: string) {
    if (newValue == null) {
        newValue = value;
    }
    if (newValue == null) {
        return;
    }
    value = newValue;
}

function isRelatedTargetInThisComponent(e: any): boolean {
    if (!e.relatedTarget) {
        return false;
    }
    let id = e.relatedTarget.id;
    if (id == null || id.trim() == '') {
        return false;
    }
    if (id == getClockElId()) {
        return true;
    }

    let idConc = '#clock-div#confirm#';
    return idConc.indexOf('#' + id + '#') >= 0;
}

function getClockElId(): string {
    return clockEl.id;
}

function onKupBlur() {
    componentRef.onKupClick(componentRef.rootElement.id, value);
}

function createClock() {
    let selectedTime: Date;
    if (value) {
        selectedTime = dom.ketchup.dates.toDate(
            value,
            manageSeconds
                ? KupDatesFormats.ISO_TIME
                : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
        );
    } else {
        selectedTime = new Date();
    }

    let hh: string = selectedTime.getHours().toString();
    let mm: string = selectedTime.getMinutes().toString();
    if (hh.length === 1) {
        hh = '0' + hh;
    }
    if (mm.length === 1) {
        mm = '0' + mm;
    }
    let ss: string = '';
    if (manageSeconds) {
        ss = selectedTime.getSeconds().toString();
        if (ss.length === 1) {
            ss = '0' + ss;
        }
    }
    let seconds: HTMLElement;
    let time: JSX.Element[] = [
        <span
            class={`h ${hoursActive ? 'active' : ''}`}
            ref={(el) => (hoursEl = el as any)}
            onClick={() => {
                setClockViewActive(true, false, false);
                switchView(hoursEl, hoursCircleEl);
            }}
            innerHTML={hh}
        ></span>,
        ':',
        <span
            class={`m ${minutesActive ? 'active' : ''}`}
            ref={(el) => (minutesEl = el as any)}
            onClick={() => {
                setClockViewActive(false, true, false);
                switchView(minutesEl, minutesCircleEl);
            }}
            innerHTML={mm}
        ></span>,
    ];
    if (manageSeconds) {
        seconds = (
            <div
                class={`circle seconds ${secondsActive ? 'active' : ''}`}
                ref={(el) => (secondsCircleEl = el as any)}
            >
                {buildClock(60, 101, 115, 115, 'sec unit', 0, 5, ss)}
                <div class="mid"></div>
            </div>
        );
        time.push(
            ':',
            <span
                class={`s ${secondsActive ? 'active' : ''}`}
                ref={(el) => (secondsEl = el as any)}
                onClick={() => {
                    setClockViewActive(false, false, true);
                    switchView(secondsEl, secondsCircleEl);
                }}
                innerHTML={ss}
            ></span>
        );
    }

    return (
        <div
            class="clock"
            id={componentRef.rootElement.id + '_clock'}
            ref={(el) => (clockEl = el as any)}
        >
            <div class="top">{time}</div>
            <div
                class={`circle hours ${hoursActive ? 'active' : ''}`}
                ref={(el) => (hoursCircleEl = el as any)}
            >
                {buildClock(12, 101, 105, 105, 'hour', 0, 1, hh)}
                {buildClock(12, 64, 110, 110, 'hour2', 12, 1, hh)}
                <div class="mid"></div>
            </div>
            <div
                class={`circle minutes ${minutesActive ? 'active' : ''}`}
                ref={(el) => (minutesCircleEl = el as any)}
            >
                {buildClock(60, 101, 115, 115, 'min unit', 0, 5, mm)}
                <div class="mid"></div>
            </div>
            {seconds}
            <div class="actions">
                <kup-button
                    onkup-button-click={(e: any) => {
                        setTimeFromClock(e);
                    }}
                    id="confirm"
                    styling={FButtonStyling.FLAT}
                    label="Ok"
                ></kup-button>
            </div>
        </div>
    );
}

function setClockViewActive(
    hoursAct: boolean,
    minutesAct: boolean,
    secondsAct: boolean
) {
    hoursActive = hoursAct;
    minutesActive = minutesAct;
    secondsActive = secondsAct;
}

function switchView(el: HTMLElement, elCircle: HTMLElement) {
    hoursEl.classList.remove('active');
    hoursCircleEl.classList.remove('active');
    minutesEl.classList.remove('active');
    minutesCircleEl.classList.remove('active');
    if (secondsEl) {
        secondsEl.classList.remove('active');
        secondsCircleEl.classList.remove('active');
    }
    el.classList.add('active');
    elCircle.classList.add('active');
}

function buildClock(
    num: number,
    radius: number,
    offsetX: number,
    offsetY: number,
    className: string,
    add: number,
    separator: number,
    selectedValue: string
) {
    let x: number, y: number;
    let divsArray: JSX.Element[] = [];

    for (var n = 0; n < num; n++) {
        x = radius * Math.cos((n / num) * 2 * Math.PI);
        y = radius * Math.sin((n / num) * 2 * Math.PI);
        let text: string;
        let dataValue: { [key: string]: string } = {};
        let style: { [key: string]: string } = {};
        if (separator == 1) {
            if (n + 3 > 12) {
                text = n + 3 - 12 + add + '';
            } else {
                let calc = n + 3 + add;
                if (calc !== 24) {
                    text = n + 3 + add + '';
                } else {
                    text = '00';
                }
            }
            dataValue['data-value'] = text;
        } else {
            if (n % separator == 0) {
                if (n + 15 >= 60) {
                    dataValue['data-value'] = n + 15 - 60 + '';
                    text = n + 15 - 60 + add + '';
                } else {
                    dataValue['data-value'] = n + 15 + '';
                    text = n + 15 + add + '';
                }
            } else {
                if (n + 15 >= 60) {
                    dataValue['data-value'] = n + 15 - 60 + '';
                    text = '⋅';
                } else {
                    dataValue['data-value'] = n + 15 + '';
                    text = '\u00B7';
                }
            }
        }
        style['left'] = x + offsetX + 'px';
        style['top'] = y + offsetY + 'px';

        if (dataValue['data-value'].length === 1) {
            dataValue['data-value'] = '0' + dataValue['data-value'];
        }

        let elClass = className;
        if (dataValue['data-value'] === selectedValue) {
            elClass += ' selected';
        }

        let div: HTMLElement = (
            <div
                class={elClass}
                style={style}
                {...dataValue}
                onClick={(e) => setClockTime(e)}
            >
                {text}
            </div>
        );
        divsArray.push(div);
    }

    return divsArray;
}

function setTimeFromClock(e: CustomEvent) {
    let text: string = hoursEl.innerText + ':' + minutesEl.innerText;
    if (manageSeconds) {
        text += ':' + secondsEl.innerText;
    }
    onKupClockItemClick(e, text);
}

function setClockTime(e) {
    let time = e.target.getAttribute('data-value');
    if (hoursActive) {
        hoursEl.innerText = time;
        hoursCircleEl.querySelector('.selected').classList.remove('selected');
        setClockViewActive(false, true, false);
        switchView(minutesEl, minutesCircleEl);
    } else if (minutesActive) {
        minutesEl.innerText = time;
        minutesCircleEl.querySelector('.selected').classList.remove('selected');
        if (manageSeconds) {
            setClockViewActive(false, false, true);
            switchView(secondsEl, secondsCircleEl);
        } else {
            setTimeFromClock(e);
        }
    } else {
        secondsEl.innerText = time;
        secondsCircleEl.querySelector('.selected').classList.remove('selected');
        setTimeFromClock(e);
    }
    e.target.classList.add('selected');
}

import { h, JSX } from '@stencil/core';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupDatesFormats } from '../../../utils/kup-dates/kup-dates-declarations';
import { KupDom } from '../../../utils/kup-manager/kup-manager-declarations';
import { KupObj } from '../../../utils/kup-objects/kup-objects-declarations';
import { KupCard } from '../kup-card';
import { KupCardBuiltinClockOptions } from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;
//let hoursEl: HTMLElement = undefined;
//let hoursCircleEl: HTMLElement = undefined;
//let minutesEl: HTMLElement = undefined;
//let minutesCircleEl: HTMLElement = undefined;
//let secondsCircleEl: HTMLElement = undefined;
//let secondsEl: HTMLElement = undefined;

export function prepareClock(component: KupCard) {
    //componentRef = component;
    const el = component.rootElement as any;
    el.kupData = {};

    if (component.data && component.data.options) {
        const opts = component.data.options as KupCardBuiltinClockOptions;
        const obj = opts.initialValue as KupObj;
        if (opts.initialValue) {
            if (obj && obj.k) el.kupData.value = obj.k;
            else el.kupData.value = opts.initialValue as string;
        }
        if (opts.manageSeconds) el.kupData.manageSeconds = opts.manageSeconds;
        if (opts.hoursActive) el.kupData.hoursActive = opts.hoursActive;
        if (opts.minutesActive) el.kupData.minutesActive = opts.minutesActive;
        if (opts.secondsActive) el.kupData.secondsActive = opts.secondsActive;
    }

    return prepTimeArea(component);
}

function isManageSeconds(component: KupCard): boolean {
    const el = component.rootElement as any;
    if (el.kupData.manageSeconds) return el.kupData.manageSeconds;
    return false;
}

function getValue(component: KupCard): string {
    const el = component.rootElement as any;
    if (el.kupData.value) return el.kupData.value;
    return '';
}

function setValue(component: KupCard, value: string) {
    const el = component.rootElement as any;
    el.kupData.value = value;
}

function getHoursActive(component: KupCard): boolean {
    const el = component.rootElement as any;
    if (el.kupData.hoursActive) return el.kupData.hoursActive;
    return false;
}

function getMinutesActive(component: KupCard): boolean {
    const el = component.rootElement as any;
    if (el.kupData.minutesActive) return el.kupData.minutesActive;
    return false;
}

function getSecondsActive(component: KupCard): boolean {
    const el = component.rootElement as any;
    if (el.kupData.secondsActive) return el.kupData.secondsActive;
    return false;
}

function getElementId(component: KupCard, elemName: string): string {
    const el = component.rootElement as any;
    if (el.kupData[elemName]) return el.kupData[elemName];
    return null;
}

function setElementId(component: KupCard, elemName: string, id: string) {
    const el = component.rootElement as any;
    el.kupData[elemName] = id;
}

function getElement(component: KupCard, elemName: string): HTMLElement {
    return component.rootElement.shadowRoot.getElementById(
        getElementId(component, elemName)
    );
}

function prepTimeArea(component: KupCard) {
    return (
        <div
            id="clock-div"
            onBlur={(e: any) => {
                if (!isRelatedTargetInThisComponent(e, component)) {
                    onKupBlur(component);
                }
            }}
        >
            {createClock(component)}
        </div>
    );
}

function onKupClockItemClick(
    e: CustomEvent,
    component: KupCard,
    value?: string
) {
    if (e != null) {
        if (value == null) {
            value = e.detail.selected.value;
        }
    }
    setClockValueSelected(component, value);

    component.onKupClick(component.rootElement.id, value);
}

function setClockValueSelected(component: KupCard, newValue?: string) {
    if (newValue == null) {
        newValue = getValue(component);
    }
    if (newValue == null) {
        return;
    }
    setValue(component, newValue);
}

function isRelatedTargetInThisComponent(e: any, component: KupCard): boolean {
    if (!e.relatedTarget) {
        return false;
    }
    let id = e.relatedTarget.id;
    if (id == null || id.trim() == '') {
        return false;
    }
    if (id == getElementId(component, 'clockEl')) {
        return true;
    }

    let idConc = '#clock-div#confirm#';
    return idConc.indexOf('#' + id + '#') >= 0;
}

function onKupBlur(component: KupCard) {
    component.onKupClick(component.rootElement.id, getValue(component));
}

function createClock(component: KupCard) {
    let selectedTime: Date;
    if (getValue(component)) {
        selectedTime = dom.ketchup.dates.toDate(
            getValue(component),
            isManageSeconds(component)
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
    if (isManageSeconds(component)) {
        ss = selectedTime.getSeconds().toString();
        if (ss.length === 1) {
            ss = '0' + ss;
        }
    }
    let seconds: HTMLElement;
    let time: JSX.Element[] = [
        <span
            id={component.rootElement.id + '_hours'}
            class={`h ${getHoursActive(component) ? 'active' : ''}`}
            ref={(el) => {
                setElementId(component, 'hoursEl', el.id);
            }}
            onClick={() => {
                setClockViewActive(component, true, false, false);
                switchView(component, 'hoursEl', 'hoursCircleEl');
            }}
            innerHTML={hh}
        ></span>,
        ':',
        <span
            id={component.rootElement.id + '_minutes'}
            class={`m ${getMinutesActive(component) ? 'active' : ''}`}
            ref={(el) => {
                setElementId(component, 'minutesEl', el.id);
            }}
            onClick={() => {
                setClockViewActive(component, false, true, false);
                switchView(component, 'minutesEl', 'minutesCircleEl');
            }}
            innerHTML={mm}
        ></span>,
    ];
    if (isManageSeconds(component)) {
        seconds = (
            <div
                id={component.rootElement.id + '_circleseconds'}
                class={`circle seconds ${
                    getSecondsActive(component) ? 'active' : ''
                }`}
                ref={(el) => {
                    setElementId(component, 'secondsCircleEl', el.id);
                }}
            >
                {buildClock(60, 101, 115, 115, 'sec unit', 0, 5, ss, component)}
                <div class="mid"></div>
            </div>
        );
        time.push(
            ':',
            <span
                id={component.rootElement.id + '_seconds'}
                class={`s ${getSecondsActive(component) ? 'active' : ''}`}
                ref={(el) => {
                    setElementId(component, 'secondsEl', el.id);
                }}
                onClick={() => {
                    setClockViewActive(component, false, false, true);
                    switchView(component, 'secondsEl', 'secondsCircleEl');
                }}
                innerHTML={ss}
            ></span>
        );
    }

    return (
        <div
            class="clock"
            id={component.rootElement.id + '_clock'}
            ref={(el) => {
                setElementId(component, 'clockEl', el.id);
            }}
        >
            <div class="top">{time}</div>
            <div
                id={component.rootElement.id + '_circlehours'}
                class={`circle hours ${
                    getHoursActive(component) ? 'active' : ''
                }`}
                ref={(el) => {
                    setElementId(component, 'hoursCircleEl', el.id);
                }}
            >
                {buildClock(12, 101, 105, 105, 'hour', 0, 1, hh, component)}
                {buildClock(12, 64, 110, 110, 'hour2', 12, 1, hh, component)}
                <div class="mid"></div>
            </div>
            <div
                id={component.rootElement.id + '_circleminutes'}
                class={`circle minutes ${
                    getMinutesActive(component) ? 'active' : ''
                }`}
                ref={(el) => {
                    setElementId(component, 'minutesCircleEl', el.id);
                }}
            >
                {buildClock(60, 101, 115, 115, 'min unit', 0, 5, mm, component)}
                <div class="mid"></div>
            </div>
            {seconds}
            <div class="actions">
                <kup-button
                    onkup-button-click={(e: any) => {
                        setTimeFromClock(e, component);
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
    component: KupCard,
    hoursAct: boolean,
    minutesAct: boolean,
    secondsAct: boolean
) {
    const el = component.rootElement as any;
    el.kupData.hoursActive = hoursAct;
    el.kupData.minutesActive = minutesAct;
    el.kupData.secondsActive = secondsAct;
}

function switchView(component: KupCard, elId: string, elCircleId: string) {
    getElement(component, 'hoursEl').classList.remove('active');
    getElement(component, 'hoursCircleEl').classList.remove('active');
    getElement(component, 'minutesEl').classList.remove('active');
    getElement(component, 'minutesCircleEl').classList.remove('active');
    if (isManageSeconds(component)) {
        getElement(component, 'secondsEl').classList.remove('active');
        getElement(component, 'secondsCircleEl').classList.remove('active');
    }
    getElement(component, elId).classList.add('active');
    getElement(component, elCircleId).classList.add('active');
}

function buildClock(
    num: number,
    radius: number,
    offsetX: number,
    offsetY: number,
    className: string,
    add: number,
    separator: number,
    selectedValue: string,
    component: KupCard
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
                onClick={(e) => setClockTime(e, component)}
            >
                {text}
            </div>
        );
        divsArray.push(div);
    }

    return divsArray;
}

function setTimeFromClock(e: CustomEvent, component: KupCard) {
    const hoursEl = getElement(component, 'hoursEl');
    const minutesEl = getElement(component, 'minutesEl');
    const secondsEl = getElement(component, 'secondsEl');
    let text: string = hoursEl.innerText + ':' + minutesEl.innerText;
    if (isManageSeconds(component)) {
        text += ':' + secondsEl.innerText;
    }
    onKupClockItemClick(e, component, text);
}

function setClockTime(e, component: KupCard) {
    const hoursEl = getElement(component, 'hoursEl');
    const minutesEl = getElement(component, 'minutesEl');
    const secondsEl = getElement(component, 'secondsEl');
    const hoursCircleEl = getElement(component, 'hoursCircleEl');
    const minutesCircleEl = getElement(component, 'minutesCircleEl');
    const secondsCircleEl = getElement(component, 'secondsCircleEl');

    let time = e.target.getAttribute('data-value');
    if (getHoursActive(component)) {
        hoursEl.innerText = time;
        hoursCircleEl.querySelector('.selected').classList.remove('selected');
        setClockViewActive(component, false, true, false);
        switchView(component, 'minutesEl', 'minutesCircleEl');
    } else if (getMinutesActive(component)) {
        minutesEl.innerText = time;
        minutesCircleEl.querySelector('.selected').classList.remove('selected');
        if (isManageSeconds(component)) {
            setClockViewActive(component, false, false, true);
            switchView(component, 'secondsEl', 'secondsCircleEl');
        } else {
            setTimeFromClock(e, component);
        }
    } else {
        secondsEl.innerText = time;
        secondsCircleEl.querySelector('.selected').classList.remove('selected');
        setTimeFromClock(e, component);
    }
    e.target.classList.add('selected');
}

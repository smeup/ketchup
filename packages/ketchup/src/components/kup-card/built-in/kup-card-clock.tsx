import { h, JSX } from '@stencil/core';
import { FButton } from '../../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../../f-components/f-button/f-button-declarations';
import { KupDatesFormats } from '../../../managers/kup-dates/kup-dates-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { KupObj } from '../../../managers/kup-objects/kup-objects-declarations';
import { KupCard } from '../kup-card';
import {
    KupCardBuiltInClock,
    KupCardBuiltInClockElements,
    KupCardBuiltInClockOptions,
    KupCardCSSClasses,
} from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function prepareClock(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInClock;
    el.kupData = {};
    if (component.data && component.data.options) {
        const opts = component.data.options as KupCardBuiltInClockOptions;
        const obj = opts.initialValue as KupObj;
        if (opts.initialValue) {
            if (obj && obj.k) el.kupData.value = obj.k;
            else el.kupData.value = opts.initialValue as string;
        }
        if (opts.manageSeconds != null)
            el.kupData.manageSeconds = opts.manageSeconds;
        if (opts.hoursActive != null) el.kupData.hoursActive = opts.hoursActive;
        if (opts.minutesActive != null)
            el.kupData.minutesActive = opts.minutesActive;
        if (opts.secondsActive != null)
            el.kupData.secondsActive = opts.secondsActive;
    } else {
        el.kupData.hoursActive = true;
    }

    return prepTimeArea(component);
}

function isManageSeconds(component: KupCard): boolean {
    const el = component.rootElement as KupCardBuiltInClock;
    if (el.kupData.manageSeconds != null) return el.kupData.manageSeconds;
    return false;
}

function getValue(component: KupCard): string {
    const el = component.rootElement as KupCardBuiltInClock;
    if (el.kupData.value) return el.kupData.value;
    return '';
}

function setValue(component: KupCard, value: string) {
    const el = component.rootElement as KupCardBuiltInClock;
    el.kupData.value = value;
}

function getHoursActive(component: KupCard): boolean {
    const el = component.rootElement as KupCardBuiltInClock;
    if (el.kupData.hoursActive != null) return el.kupData.hoursActive;
    return false;
}

function getMinutesActive(component: KupCard): boolean {
    const el = component.rootElement as KupCardBuiltInClock;
    if (el.kupData.minutesActive != null) return el.kupData.minutesActive;
    return false;
}

function getSecondsActive(component: KupCard): boolean {
    const el = component.rootElement as KupCardBuiltInClock;
    if (el.kupData.secondsActive != null) return el.kupData.secondsActive;
    return false;
}

function setElement(component: KupCard, elem: HTMLElement) {
    if (elem) {
        const el = component.rootElement as KupCardBuiltInClock;
        el.kupData[elem.id] = elem;
    }
}

function getElement(component: KupCard, elemId: string): HTMLElement {
    return component.rootElement.shadowRoot.getElementById(elemId);
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
            value = e.detail.selected.id;
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
    if (id == getElement(component, KupCardBuiltInClockElements.CLOCK).id) {
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
            id={KupCardBuiltInClockElements.HOURS}
            class={`h ${
                getHoursActive(component) ? KupCardCSSClasses.VISIBLE : ''
            }`}
            ref={(el) => {
                setElement(component, el);
            }}
            onClick={() => {
                setClockViewActive(component, true, false, false);
                switchView(
                    component,
                    KupCardBuiltInClockElements.HOURS,
                    KupCardBuiltInClockElements.HOURSCIRCLE
                );
            }}
            innerHTML={hh}
        ></span>,
        ':',
        <span
            id={KupCardBuiltInClockElements.MINUTES}
            class={`m ${
                getMinutesActive(component) ? KupCardCSSClasses.VISIBLE : ''
            }`}
            ref={(el) => {
                setElement(component, el);
            }}
            onClick={() => {
                setClockViewActive(component, false, true, false);
                switchView(
                    component,
                    KupCardBuiltInClockElements.MINUTES,
                    KupCardBuiltInClockElements.MINUTESCIRCLE
                );
            }}
            innerHTML={mm}
        ></span>,
    ];
    if (isManageSeconds(component)) {
        seconds = (
            <div
                id={KupCardBuiltInClockElements.SECONDSCIRCLE}
                class={`circle seconds ${
                    getSecondsActive(component) ? KupCardCSSClasses.VISIBLE : ''
                }`}
                ref={(el) => {
                    setElement(component, el);
                }}
            >
                {buildClock(60, 101, 115, 115, 'sec unit', 0, 5, ss, component)}
                <div class="mid"></div>
            </div>
        );
        time.push(
            ':',
            <span
                id={KupCardBuiltInClockElements.SECONDS}
                class={`s ${
                    getSecondsActive(component) ? KupCardCSSClasses.VISIBLE : ''
                }`}
                ref={(el) => {
                    setElement(component, el);
                }}
                onClick={() => {
                    setClockViewActive(component, false, false, true);
                    switchView(
                        component,
                        KupCardBuiltInClockElements.SECONDS,
                        KupCardBuiltInClockElements.SECONDSCIRCLE
                    );
                }}
                innerHTML={ss}
            ></span>
        );
    }

    const confirmButtonProp: FButtonProps = {
        label: 'Ok',
        styling: FButtonStyling.FLAT,
        onClick: (e: any) => {
            setTimeFromClock(e, component);
        },
    };

    return (
        <div
            class="clock"
            id={KupCardBuiltInClockElements.CLOCK}
            ref={(el) => {
                setElement(component, el);
            }}
        >
            <div class="top">{time}</div>
            <div
                id={KupCardBuiltInClockElements.HOURSCIRCLE}
                class={`circle hours ${
                    getHoursActive(component) ? KupCardCSSClasses.VISIBLE : ''
                }`}
                ref={(el) => {
                    setElement(component, el);
                }}
            >
                {buildClock(12, 101, 105, 105, 'hour', 0, 1, hh, component)}
                {buildClock(12, 64, 110, 110, 'hour2', 12, 1, hh, component)}
                <div class="mid"></div>
            </div>
            <div
                id={KupCardBuiltInClockElements.MINUTESCIRCLE}
                class={`circle minutes ${
                    getMinutesActive(component) ? KupCardCSSClasses.VISIBLE : ''
                }`}
                ref={(el) => {
                    setElement(component, el);
                }}
            >
                {buildClock(60, 101, 115, 115, 'min unit', 0, 5, mm, component)}
                <div class="mid"></div>
            </div>
            {seconds}
            <div class="actions">
                <FButton {...confirmButtonProp}></FButton>
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
    getElement(component, KupCardBuiltInClockElements.HOURS).classList.remove(
        KupCardCSSClasses.VISIBLE
    );
    getElement(
        component,
        KupCardBuiltInClockElements.HOURSCIRCLE
    ).classList.remove(KupCardCSSClasses.VISIBLE);
    getElement(component, KupCardBuiltInClockElements.MINUTES).classList.remove(
        KupCardCSSClasses.VISIBLE
    );
    getElement(
        component,
        KupCardBuiltInClockElements.MINUTESCIRCLE
    ).classList.remove(KupCardCSSClasses.VISIBLE);
    if (isManageSeconds(component)) {
        getElement(
            component,
            KupCardBuiltInClockElements.SECONDS
        ).classList.remove(KupCardCSSClasses.VISIBLE);
        getElement(
            component,
            KupCardBuiltInClockElements.SECONDSCIRCLE
        ).classList.remove(KupCardCSSClasses.VISIBLE);
    }
    getElement(component, elId).classList.add(KupCardCSSClasses.VISIBLE);
    getElement(component, elCircleId).classList.add(KupCardCSSClasses.VISIBLE);
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
    const divsArray: JSX.Element[] = [];

    for (let n = 0; n < num; n++) {
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
    const hoursEl = getElement(component, KupCardBuiltInClockElements.HOURS);
    const minutesEl = getElement(
        component,
        KupCardBuiltInClockElements.MINUTES
    );
    const secondsEl = getElement(
        component,
        KupCardBuiltInClockElements.SECONDS
    );
    let text: string = hoursEl.innerText + ':' + minutesEl.innerText;
    if (isManageSeconds(component)) {
        text += ':' + secondsEl.innerText;
    }
    onKupClockItemClick(e, component, text);
}

function setClockTime(e, component: KupCard) {
    const hoursEl = getElement(component, KupCardBuiltInClockElements.HOURS);
    const minutesEl = getElement(
        component,
        KupCardBuiltInClockElements.MINUTES
    );
    const hoursCircleEl = getElement(
        component,
        KupCardBuiltInClockElements.HOURSCIRCLE
    );
    const minutesCircleEl = getElement(
        component,
        KupCardBuiltInClockElements.MINUTESCIRCLE
    );
    const secondsEl = getElement(
        component,
        KupCardBuiltInClockElements.SECONDS
    );
    const secondsCircleEl = getElement(
        component,
        KupCardBuiltInClockElements.SECONDSCIRCLE
    );

    let time = e.target.getAttribute('data-value');
    if (getHoursActive(component)) {
        hoursEl.innerText = time;
        hoursCircleEl.querySelector('.selected').classList.remove('selected');
        setClockViewActive(component, false, true, false);
        switchView(
            component,
            KupCardBuiltInClockElements.MINUTES,
            KupCardBuiltInClockElements.MINUTESCIRCLE
        );
    } else if (getMinutesActive(component)) {
        minutesEl.innerText = time;
        minutesCircleEl.querySelector('.selected').classList.remove('selected');
        if (isManageSeconds(component)) {
            setClockViewActive(component, false, false, true);
            switchView(
                component,
                KupCardBuiltInClockElements.SECONDS,
                KupCardBuiltInClockElements.SECONDSCIRCLE
            );
        } else {
            setTimeFromClock(e, component);
            setClockViewActive(component, true, false, false);
            switchView(
                component,
                KupCardBuiltInClockElements.HOURS,
                KupCardBuiltInClockElements.HOURSCIRCLE
            );
        }
    } else {
        secondsEl.innerText = time;
        secondsCircleEl.querySelector('.selected').classList.remove('selected');
        setTimeFromClock(e, component);
        setClockViewActive(component, true, false, false);
        switchView(
            component,
            KupCardBuiltInClockElements.HOURS,
            KupCardBuiltInClockElements.HOURSCIRCLE
        );
    }
    e.target.classList.add('selected');
}

import { h } from '@stencil/core';
import { FButton } from '../../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../../f-components/f-button/f-button-declarations';
import { KupDatesFormats } from '../../../managers/kup-dates/kup-dates-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { KupObj } from '../../../managers/kup-objects/kup-objects-declarations';
import {
    DateTimeFormatOptionsMonth,
    getMonthsAsStringByLocale,
} from '../../../utils/utils';
import { SourceEvent } from '../../kup-date-picker/kup-date-picker-declarations';
import { KupCard } from '../kup-card';
import {
    KupCardBuiltInCalendar,
    KupCardBuiltInCalendarOptions,
} from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function prepareCalendar(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (!el.kupData) el.kupData = {};

    if (component.data && component.data.options) {
        const opts = component.data.options as KupCardBuiltInCalendarOptions;
        if (opts.resetStatus) {
            el.kupData = {};
            const obj = opts.initialValue as KupObj;
            if (opts.initialValue) {
                if (obj && obj.k) setValue(component, new Date(obj.k));
                else setValue(component, new Date(opts.initialValue as string));
            }
            if (opts.firstDayIndex)
                el.kupData.firstDayIndex = opts.firstDayIndex;
            opts.resetStatus = false;
        }
    }

    if (!el.kupData.value) setValue(component, new Date());

    const months = getMonthsAsStringByLocale();
    const curYear: number = getYear(component);
    const curMonth: number = getMonth(component);
    const yearRange = getInitEndYear(curYear);
    const initYear: number = yearRange.initYear;
    const endYear: number = yearRange.endYear;

    let changeViewButtonLabel: string = 'not-set';
    switch (getView(component)) {
        case SourceEvent.DATE: {
            changeViewButtonLabel =
                months[curMonth] + ', ' + curYear.toString();
            break;
        }
        case SourceEvent.MONTH: {
            changeViewButtonLabel = curYear.toString();
            break;
        }
        case SourceEvent.YEAR: {
            changeViewButtonLabel =
                initYear.toString() + ' - ' + endYear.toString();
            break;
        }
    }

    const prevButtonProp: FButtonProps = {
        icon: 'chevron_left',
        wrapperClass: 'prev-page',
        onClick: () => prevPage(component),
    };
    const prevButtonComp = <FButton {...prevButtonProp} />;

    const nextButtonProp: FButtonProps = {
        icon: 'chevron_right',
        wrapperClass: 'next-page',
        onClick: () => nextPage(component),
    };
    const nextButtonComp = <FButton {...nextButtonProp} />;

    const changeViewButtonProp: FButtonProps = {
        wrapperClass: 'change-view-button',
        styling: FButtonStyling.FLAT,
        label: changeViewButtonLabel,
        onClick: () => changeView(component),
        id: 'change-view-button',
    };
    //text-transform:capitalize
    return (
        <div id={component.rootElement.id + '_calendar'}>
            <div class="section-1">
                <div class="sub-1 nav">
                    {prevButtonComp}
                    <FButton {...changeViewButtonProp} />
                    {nextButtonComp}
                </div>
            </div>
            <div class="section-2">{createCalendar(component)}</div>
        </div>
    );
}

function setValue(component: KupCard, value: Date) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    el.kupData.value = value;
    el.kupData.day = el.kupData.value.getDate();
    el.kupData.month = el.kupData.value.getMonth();
    el.kupData.year = el.kupData.value.getFullYear();
}

function getValue(component: KupCard): Date {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.value == null) setValue(component, new Date());
    return el.kupData.value;
}

function getDay(component: KupCard): number {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.day != null) return el.kupData.day;
    return null;
}

function getMonth(component: KupCard): number {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.month != null) return el.kupData.month;
    return null;
}

function getYear(component: KupCard): number {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.year != null) return el.kupData.year;
    return null;
}

function setDay(component: KupCard, value: number) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    el.kupData.day = value;
}

function setMonth(component: KupCard, value: number) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    el.kupData.month = value;
}

function setYear(component: KupCard, value: number) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    el.kupData.year = value;
}

function getFirstDayIndex(component: KupCard): number {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.firstDayIndex) return el.kupData.firstDayIndex;
    return 1;
}

function getView(component: KupCard): SourceEvent {
    const el = component.rootElement as KupCardBuiltInCalendar;
    if (el.kupData.calendarView) return el.kupData.calendarView;
    return SourceEvent.DATE;
}

function setView(component: KupCard, value: SourceEvent) {
    const el = component.rootElement as KupCardBuiltInCalendar;
    el.kupData.calendarView = value;
}

function createCalendar(component: KupCard) {
    switch (getView(component)) {
        case SourceEvent.DATE: {
            return createDaysCalendar(component);
        }
        case SourceEvent.MONTH: {
            return createMonthsCalendar(component);
        }
        case SourceEvent.YEAR: {
            return createYearsCalendar(component);
        }
    }
}

function createDaysCalendar(component: KupCard) {
    const days = getDaysOfWeekAsStringByLocale(getFirstDayIndex(component));

    const selectedDate: Date = getValue(component);
    const selectedDay: number = getDay(component);
    const selectedMonth: number = getMonth(component);
    const selectedYear: number = getYear(component);

    const thead = [];
    const tbody = [];
    for (let index = 0; index < days.length; index++) {
        thead.push(
            <th>
                <span class="item-text">{days[index]}</span>
            </th>
        );
    }

    const firstMonthDay = new Date(selectedYear, selectedMonth, 1);
    const lastMonthDay = new Date(selectedYear, selectedMonth + 1, 0);

    const finish: boolean = false;
    let currentDayIndex = getFirstDayIndex(component);
    const firstMonthDayIndex = firstMonthDay.getDay();
    let row = [];
    let daysForRowAdded = 0;
    while (!finish) {
        if (currentDayIndex == firstMonthDayIndex) {
            break;
        }
        row.push(<td class="item empty"></td>);
        currentDayIndex++;
        daysForRowAdded++;
        if (currentDayIndex > 6) {
            currentDayIndex = 0;
        }
    }
    let dayCount = 1;
    while (dayCount <= lastMonthDay.getDate()) {
        for (let i = daysForRowAdded; i < 7; i++) {
            let dayClass = 'item';
            let dataIndex = {
                'data-index':
                    selectedYear.toString() +
                    '-' +
                    fillString((selectedMonth + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(dayCount.toString(), '0', 2, true),
            };
            if (
                (selectedDay != null && dayCount === selectedDay) ||
                (dayCount === selectedDate.getDate() &&
                    selectedMonth === selectedDate.getMonth() &&
                    selectedYear === selectedDate.getFullYear())
            ) {
                dayClass += ' selected';
            }
            row.push(
                <td class={dayClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarItemClick(
                                component,
                                dataIndex['data-index']
                            );
                        }}
                    >
                        {dayCount}
                    </span>
                </td>
            );
            dayCount++;
            if (dayCount > lastMonthDay.getDate()) {
                break;
            }
        }
        if (row.length > 0) {
            tbody.push(<tr>{row}</tr>);
            row = [];
        }
        daysForRowAdded = 0;
    }

    return (
        <table class="calendar">
            <thead>{thead}</thead>
            <tbody>{tbody}</tbody>
        </table>
    );
}

function createMonthsCalendar(component: KupCard) {
    const months = getMonthsAsStringByLocale(DateTimeFormatOptionsMonth.SHORT);

    let selectedDay: number = getDay(component);
    const selectedMonth: number = getMonth(component);
    const selectedYear: number = getYear(component);
    if (selectedDay == null) selectedDay = 1;

    const tbody = [];
    let row = [];
    let monthCount = 0;
    while (monthCount < 12) {
        for (let i = 0; i < 4; i++) {
            let monthClass = 'item';
            const dataIndex = {
                'data-index':
                    selectedYear.toString() +
                    '-' +
                    fillString((monthCount + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(selectedDay.toString(), '0', 2, true),
            };
            if (monthCount === selectedMonth) {
                monthClass += ' selected';
            }
            row.push(
                <td class={monthClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarMonthYearItemClick(
                                component,
                                dataIndex['data-index']
                            );
                        }}
                    >
                        {months[monthCount]}
                    </span>
                </td>
            );
            monthCount++;
        }
        if (row.length > 0) {
            tbody.push(<tr>{row}</tr>);
            row = [];
        }
    }

    return (
        <table class="calendar">
            <tbody>{tbody}</tbody>
        </table>
    );
}

function createYearsCalendar(component: KupCard) {
    let selectedDay: number = getDay(component);
    const selectedMonth: number = getMonth(component);
    const selectedYear: number = getYear(component);
    if (selectedDay == null) selectedDay = 1;

    const yearRange = getInitEndYear(selectedYear);
    const initYear: number = yearRange.initYear;
    const endYear: number = yearRange.endYear;

    const tbody = [];
    let row = [];
    let yearCount = initYear;
    while (yearCount <= endYear) {
        for (let i = 0; i < 4; i++) {
            let yearClass = 'item';
            let dataIndex = {
                'data-index':
                    yearCount.toString() +
                    '-' +
                    fillString((selectedMonth + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(selectedDay.toString(), '0', 2, true),
            };
            if (yearCount === selectedYear) {
                yearClass += ' selected';
            }
            row.push(
                <td class={yearClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarMonthYearItemClick(
                                component,
                                dataIndex['data-index']
                            );
                        }}
                    >
                        {yearCount}
                    </span>
                </td>
            );
            yearCount++;
        }
        if (row.length > 0) {
            tbody.push(<tr>{row}</tr>);
            row = [];
        }
    }

    return (
        <table class="calendar">
            <tbody>{tbody}</tbody>
        </table>
    );
}

function getDaysOfWeekAsStringByLocale(firstDayIndex?: number): string[] {
    const thisWeekDays: { startDate: Date; endDate: Date } =
        thisWeek(firstDayIndex);
    const monday: Date = thisWeekDays.startDate;
    const days: string[] = [];
    for (var i = 0; i < 7; i++) {
        var date: Date = new Date(monday.toISOString());
        date.setDate(date.getDate() + i);
        days[i] = getDayAsStringByLocale(date);
    }
    return days;
}

function thisWeek(firstDayIndex?: number): { startDate: Date; endDate: Date } {
    const firstDay = firstDayThisWeek(firstDayIndex);
    return {
        startDate: firstDay,
        endDate: offsetDate(firstDay, 6),
    };
}

function firstDayThisWeek(firstDayIndex?: number): Date {
    const d = new Date();
    const day = d.getDay();
    // dayIndex0
    d.setDate(d.getDate() - day);
    // dayIndexX
    d.setDate(d.getDate() + firstDayIndex);
    return d;
}

const offsetDate = (base: Date, count: number): Date => {
    const date = new Date(base);
    date.setDate(base.getDate() + count);
    return date;
};

function getDayAsStringByLocale(date: Date): string {
    if (date == null) {
        return '';
    }
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'narrow',
        /** weekday: 'narrow' 'short' 'long' */
    };
    const dateTimeFormat = new Intl.DateTimeFormat(
        dom.ketchup.dates.getLocale(),
        options
    );
    return dateTimeFormat.format(date);
}

function fillString(
    stringIn: string,
    stringForFill: string,
    finalLen: number,
    addBefore: boolean
): string {
    const initSize = stringIn.length;
    let stringOut: string = '';
    for (let i: number = initSize; i < finalLen; i += stringForFill.length) {
        stringOut += stringForFill;
    }
    if (addBefore) {
        return stringOut + stringIn;
    } else {
        return stringIn + stringOut;
    }
}

function prevPage(component: KupCard) {
    let mm: number = getMonth(component);
    let yy: number = getYear(component);

    if (getView(component) == SourceEvent.DATE) {
        if (mm < 1) {
            mm = 11;
            yy--;
        } else {
            mm--;
        }
    }
    if (getView(component) == SourceEvent.MONTH) {
        yy--;
    }
    if (getView(component) == SourceEvent.YEAR) {
        let yearRange = getInitEndYear(yy);
        yy = yearRange.initYear - 1;
    }
    setDay(component, null);
    setMonth(component, mm);
    setYear(component, yy);
    refresh(component);
}

function nextPage(component: KupCard) {
    let mm: number = getMonth(component);
    let yy: number = getYear(component);

    if (getView(component) == SourceEvent.DATE) {
        if (mm > 10) {
            mm = 0;
            yy++;
        } else {
            mm++;
        }
    }
    if (getView(component) == SourceEvent.MONTH) {
        yy++;
    }
    if (getView(component) == SourceEvent.YEAR) {
        const yearRange = getInitEndYear(yy);
        yy = yearRange.endYear + 1;
    }

    setDay(component, null);
    setMonth(component, mm);
    setYear(component, yy);
    refresh(component);
}

function getInitEndYear(curYear: number): {
    initYear: number;
    endYear: number;
} {
    const initYear: number = curYear - (curYear % 10);
    const endYear: number = initYear + 16 - 1;

    return { initYear: initYear, endYear: endYear };
}

function changeView(component: KupCard) {
    setDay(component, null);
    switch (getView(component)) {
        case SourceEvent.DATE: {
            setView(component, SourceEvent.MONTH);
            break;
        }
        case SourceEvent.MONTH: {
            setView(component, SourceEvent.YEAR);
            break;
        }
        case SourceEvent.YEAR: {
            setView(component, SourceEvent.DATE);
            break;
        }
    }
    refresh(component);
}

function refresh(component: KupCard) {
    component.refresh();
}

function onCalendarMonthYearItemClick(component: KupCard, value: string) {
    let d: Date;
    if (dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)) {
        d = new Date(value);
    } else {
        d = new Date();
    }
    setMonth(component, d.getMonth());
    setYear(component, d.getFullYear());

    switch (getView(component)) {
        case SourceEvent.MONTH: {
            setView(component, SourceEvent.DATE);
            break;
        }
        case SourceEvent.YEAR: {
            setView(component, SourceEvent.MONTH);
            break;
        }
    }

    refresh(component);
}

function onCalendarItemClick(component: KupCard, value: string) {
    let d: Date;
    if (dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)) {
        d = new Date(value);
    } else {
        d = new Date();
    }
    setValue(component, d);
    component.onKupClick(component.rootElement.id, value);
    refresh(component);
}

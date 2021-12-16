import { h, forceUpdate } from '@stencil/core';
import internal from 'stream';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupDatesFormats } from '../../../utils/kup-dates/kup-dates-declarations';
import { KupDom } from '../../../utils/kup-manager/kup-manager-declarations';
import {
    DateTimeFormatOptionsMonth,
    getMonthsAsStringByLocale,
} from '../../../utils/utils';
import { SourceEvent } from '../../kup-date-picker/kup-date-picker-declarations';
import { KupCard } from '../kup-card';

const dom: KupDom = document.documentElement as KupDom;
let calendarView: SourceEvent = SourceEvent.DATE;
const firstDayIndex = 1;
let dateRef = new Date();
let componentRef: KupCard;

export function prepareCalendar(component: KupCard) {
    componentRef = component;
    const date: Date = dateRef;
    const months = getMonthsAsStringByLocale();
    const curYear: number = date.getFullYear();
    const yearRange = getInitEndYear(curYear);
    const initYear: number = yearRange.initYear;
    const endYear: number = yearRange.endYear;

    let changeViewButtonLabel: string = 'not-set';
    switch (calendarView) {
        case SourceEvent.DATE: {
            changeViewButtonLabel =
                months[date.getMonth()] + ', ' + curYear.toString();
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

    const prevButtonComp = (
        <kup-button
            id="prev-page"
            icon="chevron_left"
            onkup-button-click={() => prevPage()}
        ></kup-button>
    );
    const nextButtonComp = (
        <kup-button
            id="next-page"
            icon="chevron_right"
            onkup-button-click={() => nextPage()}
        ></kup-button>
    );

    return (
        <div id={componentRef.rootElement.id + '_calendar'}>
            <div class="section-1">
                <div class="sub-1 nav">
                    {prevButtonComp}
                    <kup-button
                        customStyle="#kup-component button {text-transform:capitalize}"
                        id="change-view-button"
                        styling={FButtonStyling.FLAT}
                        label={changeViewButtonLabel}
                        onkup-button-click={() => changeView()}
                    ></kup-button>
                    {nextButtonComp}
                </div>
            </div>
            <div class="section-2">{createCalendar()}</div>
        </div>
    );
}

function createCalendar() {
    switch (calendarView) {
        case SourceEvent.DATE: {
            return createDaysCalendar();
        }
        case SourceEvent.MONTH: {
            return createMonthsCalendar();
        }
        case SourceEvent.YEAR: {
            return createYearsCalendar();
        }
    }
}

function createDaysCalendar() {
    const days = getDaysOfWeekAsStringByLocale(firstDayIndex);

    const date: Date = dateRef;
    const selecteDate: Date = new Date(date);

    const thead = [];
    const tbody = [];
    for (let index = 0; index < days.length; index++) {
        thead.push(
            <th>
                <span class="item-text">{days[index]}</span>
            </th>
        );
    }

    const firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const finish: boolean = false;
    let currentDayIndex = firstDayIndex;
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
                    date.getFullYear().toString() +
                    '-' +
                    fillString((date.getMonth() + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(dayCount.toString(), '0', 2, true),
            };
            if (
                dayCount === selecteDate.getDate() &&
                date.getMonth() === selecteDate.getMonth() &&
                date.getFullYear() === selecteDate.getFullYear()
            ) {
                dayClass += ' selected';
            }
            row.push(
                <td class={dayClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarItemClick(dataIndex['data-index']);
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
        <table id="calendar">
            <thead>{thead}</thead>
            <tbody>{tbody}</tbody>
        </table>
    );
}

function createMonthsCalendar() {
    const months = getMonthsAsStringByLocale(DateTimeFormatOptionsMonth.SHORT);

    const date: Date = dateRef;
    const selecteDate: Date = date;
    const tbody = [];
    let row = [];
    let monthCount = 0;
    while (monthCount < 12) {
        for (let i = 0; i < 4; i++) {
            let monthClass = 'item';
            const dataIndex = {
                'data-index':
                    date.getFullYear().toString() +
                    '-' +
                    fillString((monthCount + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(date.getDate().toString(), '0', 2, true),
            };
            if (
                monthCount === selecteDate.getMonth() &&
                date.getFullYear() == selecteDate.getFullYear()
            ) {
                monthClass += ' selected';
            }
            row.push(
                <td class={monthClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarMonthYearItemClick(
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
        <table id="calendar">
            <tbody>{tbody}</tbody>
        </table>
    );
}

function createYearsCalendar() {
    const date: Date = dateRef;
    const curYear: number = date.getFullYear();
    const yearRange = getInitEndYear(curYear);
    const initYear: number = yearRange.initYear;
    const endYear: number = yearRange.endYear;

    const selecteDate: Date = date;
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
                    fillString((date.getMonth() + 1).toString(), '0', 2, true) +
                    '-' +
                    fillString(date.getDate().toString(), '0', 2, true),
            };
            if (yearCount === selecteDate.getFullYear()) {
                yearClass += ' selected';
            }
            row.push(
                <td class={yearClass}>
                    <span
                        {...dataIndex}
                        class="item-number"
                        onClick={() => {
                            onCalendarMonthYearItemClick(
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
        <table id="calendar">
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

function prevPage() {
    const date: Date = dateRef;
    let yy: number = date.getFullYear();
    let mm: number = date.getMonth();

    if (calendarView == SourceEvent.DATE) {
        if (mm < 1) {
            mm = 11;
            yy--;
        } else {
            mm--;
        }
    }
    if (calendarView == SourceEvent.MONTH) {
        yy--;
    }
    if (calendarView == SourceEvent.YEAR) {
        let yearRange = getInitEndYear(yy);
        yy = yearRange.initYear - 1;
    }
    date.setFullYear(yy);
    date.setMonth(mm);
    dateRef = date;
    refresh();
}

function nextPage() {
    const date: Date = dateRef;
    let yy: number = date.getFullYear();
    let mm: number = date.getMonth();
    if (calendarView == SourceEvent.DATE) {
        if (mm > 10) {
            mm = 0;
            yy++;
        } else {
            mm++;
        }
    }
    if (calendarView == SourceEvent.MONTH) {
        yy++;
    }
    if (calendarView == SourceEvent.YEAR) {
        const yearRange = getInitEndYear(yy);
        yy = yearRange.endYear + 1;
    }
    date.setFullYear(yy);
    date.setMonth(mm);
    dateRef = date;
    refresh();
}

function getInitEndYear(curYear: number): {
    initYear: number;
    endYear: number;
} {
    const initYear: number = curYear - (curYear % 10);
    const endYear: number = initYear + 16 - 1;

    return { initYear: initYear, endYear: endYear };
}

function changeView() {
    switch (calendarView) {
        case SourceEvent.DATE: {
            calendarView = SourceEvent.MONTH;
            break;
        }
        case SourceEvent.MONTH: {
            calendarView = SourceEvent.YEAR;
            break;
        }
        case SourceEvent.YEAR: {
            calendarView = SourceEvent.DATE;
        }
    }
    refresh();
}

function refresh() {
    forceUpdate(componentRef);
}

function refreshComponentValue(value: string) {
    let d: Date;
    if (dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)) {
        d = new Date(value);
    } else {
        d = new Date();
    }
    dateRef = d;
    refresh();
}

function onCalendarMonthYearItemClick(value: string) {
    switch (calendarView) {
        case SourceEvent.MONTH: {
            calendarView = SourceEvent.DATE;
            break;
        }
        case SourceEvent.YEAR: {
            calendarView = SourceEvent.MONTH;
            break;
        }
    }
    refreshComponentValue(value);
}

function onCalendarItemClick(value: string) {
    let d: Date;
    if (dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)) {
        d = new Date(value);
    } else {
        d = new Date();
    }
    dateRef = d;
    componentRef.onKupClick(componentRef.rootElement.id, value);
    refresh();
}

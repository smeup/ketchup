import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Listen,
    Method,
    Watch,
} from '@stencil/core';

import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

import {
    formattedStringToDefaultUnformattedStringDate,
    isValidFormattedStringDate,
    unformattedStringToFormattedStringDate,
    getMonthsAsStringByLocale,
    getDaysOfWeekAsStringByLocale,
    ISO_DEFAULT_DATE_FORMAT,
    fillString,
} from '../../utils/utils';
import {
    PICKER_COMPONENT_INFO,
    PICKER_SOURCE_EVENT,
    PICKER_STATUS,
} from './kup-date-picker-declarations';
import moment from 'moment';

@Component({
    tag: 'kup-date-picker',
    styleUrl: 'kup-date-picker.scss',
    shadow: true,
})
export class KupDatePicker {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() stateSwitcher: boolean = false;
    @State() value: string = '';

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Props of the sub-components.
     */
    @Prop() data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * First day number (0 - sunday, 1 - monday, ...)
     */
    @Prop() firstDayIndex: number = 1;
    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';

    private calendarView: PICKER_SOURCE_EVENT = PICKER_SOURCE_EVENT.DATE;
    private status: PICKER_STATUS = {};

    //---- Events ----

    @Event({
        eventName: 'kupDatePickerBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Event({
        eventName: 'kupDatePickerTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        value: any;
        source: PICKER_SOURCE_EVENT;
    }>;

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        let source: PICKER_SOURCE_EVENT = this.getSourceEvent();
        if (this.isPickerOpened(source)) {
            if (e.key === 'Escape') {
                this.closePicker(source);
            }
            if (e.key === 'Enter') {
                e.stopPropagation();
                this.setPickerValueSelected(source);
            }
        }
    }

    onKupDatePickerItemClick(value: string) {
        let source = PICKER_SOURCE_EVENT.DATE;
        this.setPickerValueSelected(source, value);

        this.kupChange.emit({
            value: this.value,
            source: source,
        });

        this.kupItemClick.emit({
            value: this.value,
            source: source,
        });
    }

    onKupDatePickerMonthYearItemClick(value: string) {
        let source = PICKER_SOURCE_EVENT.DATE;
        switch (this.calendarView) {
            case PICKER_SOURCE_EVENT.MONTH: {
                this.calendarView = PICKER_SOURCE_EVENT.DATE;
                break;
            }
            case PICKER_SOURCE_EVENT.YEAR: {
                this.calendarView = PICKER_SOURCE_EVENT.MONTH;
                break;
            }
        }
        this.refreshPickerComponentValue(source, value);
    }

    @Watch('firstDayIndex')
    watchFirstDayIndex() {
        if (this.firstDayIndex > 6 || this.firstDayIndex < 0) {
            logMessage(
                this,
                'property first-day-index=[' +
                    this.firstDayIndex +
                    '] not allowed: it must be >= 0 and <= 6',
                'warning'
            );
            this.firstDayIndex = 1;
        }
    }

    //---- Methods ----

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async setFocus() {
        this.status[this.getSourceEvent()].textfieldEl.setFocus();
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        this.status[this.getSourceEvent()].textfieldEl.setValue(value);
    }

    private onTextFieldRendered({ detail }, doIt: boolean) {
        if (detail.field != null && doIt == true) {
            detail.field.setFocus();
        }
    }

    onKupBlur(e: UIEvent, source: PICKER_SOURCE_EVENT) {
        e.stopPropagation();
        this.closePicker(source);
        this.kupBlur.emit({
            value: this.value,
            source: source,
        });
    }

    onKupChange(e: CustomEvent, source: PICKER_SOURCE_EVENT) {
        this.refreshPickerValue(source, e.detail.value, this.kupChange);
    }

    onKupClick(e: UIEvent, source: PICKER_SOURCE_EVENT) {
        e.stopPropagation();
        this.kupClick.emit({
            value: this.value,
            source: source,
        });
    }

    onKupFocus(e: UIEvent, source: PICKER_SOURCE_EVENT) {
        e.stopPropagation();
        this.kupFocus.emit({
            value: this.value,
            source: source,
        });
    }

    onKupInput(e: CustomEvent, source: PICKER_SOURCE_EVENT) {
        this.refreshPickerValue(source, e.detail.value, this.kupInput, true);
    }

    onKupTextFieldSubmit(e: CustomEvent, source: PICKER_SOURCE_EVENT) {
        this.refreshPickerValue(
            source,
            e.detail.value,
            this.kupTextFieldSubmit
        );
    }

    onKupIconClick(e: UIEvent, source: PICKER_SOURCE_EVENT) {
        e.stopPropagation();
        if (this.isPickerOpened(source)) {
            this.closePicker(source);
        } else {
            this.openPicker(source);
        }
        this.kupIconClick.emit({
            value: this.value,
            source: source,
        });
    }

    forceUpdate() {
        this.stateSwitcher = !this.stateSwitcher;
    }

    getSourceEvent(): PICKER_SOURCE_EVENT {
        return PICKER_SOURCE_EVENT.DATE;
    }

    refreshPickerValue(
        source: PICKER_SOURCE_EVENT,
        eventDetailValue: string,
        eventToRaise: EventEmitter,
        isOnInputEvent?: boolean
    ) {
        let newValue = null;
        if (source == PICKER_SOURCE_EVENT.DATE) {
            if (isValidFormattedStringDate(eventDetailValue)) {
                newValue = formattedStringToDefaultUnformattedStringDate(
                    eventDetailValue
                );
                if (isOnInputEvent != true) {
                    this.value = newValue;
                }
            }
        }

        if (newValue != null) {
            this.refreshPickerComponentValue(source, newValue);
            if (eventToRaise != null) {
                eventToRaise.emit({
                    value: newValue,
                    source: source,
                });
            }
        }
    }

    refreshPickerComponentValue(source: PICKER_SOURCE_EVENT, value: string) {
        if (!this.isPickerOpened(source)) {
            return;
        }
        let d: Date;
        let m = moment(value, ISO_DEFAULT_DATE_FORMAT);
        if (m.isValid()) {
            d = new Date(value);
        } else {
            d = new Date();
        }
        this.status[source].pickerEl.value = d.toISOString();
        this.status[source].pickerEl.date = d;
        this.forceUpdate();
    }

    setPickerValueSelected(source: PICKER_SOURCE_EVENT, newValue?: string) {
        if (!this.isPickerOpened(source)) {
            return;
        }
        if (this.disabled == true) {
            return;
        }
        if (newValue == null) {
            newValue = this.getPickerValueSelected(source);
        }
        this.closePicker(source);
        if (newValue == null) {
            return;
        }
        if (source == PICKER_SOURCE_EVENT.DATE) {
            this.value = newValue;
            this.setTextFieldInitalValue(source, this.getDateForOutput());
        }
    }

    getPickerValueSelected(source: PICKER_SOURCE_EVENT): string {
        return this.status[source].pickerEl.value;
    }

    setTextFieldInitalValue(source: PICKER_SOURCE_EVENT, value: string) {
        if (this.status[source].textfieldEl !== undefined) {
            this.status[source].textfieldEl.setValue(value);
        }
    }

    getValueForPickerComponent(source: PICKER_SOURCE_EVENT) {
        if (source == PICKER_SOURCE_EVENT.DATE) {
            return this.value;
        }
        if (source == PICKER_SOURCE_EVENT.MONTH) {
            return this.status[PICKER_SOURCE_EVENT.DATE].pickerEl.value;
        }
        if (source == PICKER_SOURCE_EVENT.YEAR) {
            return this.status[PICKER_SOURCE_EVENT.DATE].pickerEl.value;
        }
        return null;
    }

    openPicker(source: PICKER_SOURCE_EVENT) {
        this.calendarView = PICKER_SOURCE_EVENT.DATE;
        let textfieldEl = this.status[source].textfieldEl;
        let containerEl = this.status[source].pickerContainerEl;
        this.status[source].pickerOpened = true;
        this.refreshPickerComponentValue(
            source,
            this.getValueForPickerComponent(source)
        );

        let textFieldWidth = null;
        if (textfieldEl != null) {
            textFieldWidth = textfieldEl.shadowRoot.querySelector(
                '.mdc-text-field'
            ).clientWidth;
            textfieldEl.classList.add('toggled');
            textfieldEl.emitSubmitEventOnEnter = false;
        }
        if (containerEl != null) {
            containerEl.classList.add('dynamic-position-active');
            containerEl.classList.add('visible');
            let elStyle: any = containerEl.style;
            elStyle.height = 'auto';
            if (textFieldWidth != null) {
                elStyle.minWidth = textFieldWidth + 'px';
            }
        }
    }

    closePicker(source: PICKER_SOURCE_EVENT) {
        if (source == PICKER_SOURCE_EVENT.DATE) {
            this.closePicker(PICKER_SOURCE_EVENT.MONTH);
        }
        let textfieldEl = this.status[source].textfieldEl;
        let containerEl = this.status[source].pickerContainerEl;
        this.status[source].pickerOpened = false;
        if (textfieldEl != null) {
            textfieldEl.classList.remove('toggled');
            textfieldEl.emitSubmitEventOnEnter = true;
        }
        if (containerEl != null) {
            containerEl.classList.remove('dynamic-position-active');
            containerEl.classList.remove('visible');
        }
    }

    isPickerOpened(source: PICKER_SOURCE_EVENT): boolean {
        return this.status[source].pickerOpened;
    }

    getTextFieldId(source: PICKER_SOURCE_EVENT): string {
        return this.status[source].textfieldEl.id;
    }

    prepDateTextfield(): PICKER_COMPONENT_INFO {
        let source = PICKER_SOURCE_EVENT.DATE;
        let ret: PICKER_COMPONENT_INFO = this.prepTextfield(
            source,
            this.getDateForOutput()
        );
        return ret;
    }

    prepTextfield(
        source: PICKER_SOURCE_EVENT,
        initialValue: string
    ): PICKER_COMPONENT_INFO {
        let textfieldData = { ...this.data['kup-text-field'] };

        if (!textfieldData['icon']) {
            textfieldData['icon'] = 'calendar';
        }

        if (textfieldData['icon']) {
            textfieldData['trailingIcon'] = true;
        }

        let ref: PICKER_COMPONENT_INFO = { type: source };

        let comp: HTMLElement = (
            <kup-text-field
                {...textfieldData}
                disabled={this.disabled}
                id={this.rootElement.id + '_text-field'}
                initialValue={initialValue}
                onKupTextFieldChange={(e: any) => this.onKupChange(e, source)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e, source)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e, source)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e, source)}
                onKupTextFieldIconClick={(e: any) =>
                    this.onKupIconClick(e, source)
                }
                onKupTextFieldSubmit={(e: any) =>
                    this.onKupTextFieldSubmit(e, source)
                }
                onKupTextFieldRendered={(event) => {
                    this.onTextFieldRendered(event, true);
                }}
                ref={(el) => (this.status[source].textfieldEl = el as any)}
            ></kup-text-field>
        );

        ref.kupComponent = comp;
        ref.type = source;
        return ref;
    }

    getInitEndYear(curYear: number): { initYear: number; endYear: number } {
        let initYear: number = curYear - (curYear % 10);
        let endYear: number = initYear + 16 - 1;

        return { initYear: initYear, endYear: endYear };
    }

    isRelatedTargetInThisComponent(e: any): boolean {
        if (!e.relatedTarget) {
            return false;
        }
        let id = e.relatedTarget.id;
        if (id == null || id.trim() == '') {
            return false;
        }
        if (id == this.getTextFieldId(PICKER_SOURCE_EVENT.DATE)) {
            return true;
        }

        let idConc =
            '#prev-page#next-page#date-picker-div#change-view-button#calendar#';
        return idConc.indexOf('#' + id + '#') >= 0;
    }

    prepDatePicker() {
        let source = PICKER_SOURCE_EVENT.DATE;
        let date: Date = this.status[source].pickerEl.date;
        let months = getMonthsAsStringByLocale();
        let curYear: number = date.getFullYear();
        let yearRange = this.getInitEndYear(curYear);
        let initYear: number = yearRange.initYear;
        let endYear: number = yearRange.endYear;

        let changeViewButtonLabel: string = 'not-set';
        switch (this.calendarView) {
            case PICKER_SOURCE_EVENT.DATE: {
                changeViewButtonLabel =
                    months[date.getMonth()] + ', ' + curYear.toString();
                break;
            }
            case PICKER_SOURCE_EVENT.MONTH: {
                changeViewButtonLabel = curYear.toString();
                break;
            }
            case PICKER_SOURCE_EVENT.YEAR: {
                changeViewButtonLabel =
                    initYear.toString() + ' - ' + endYear.toString();
                break;
            }
        }

        let prevButtonComp = null;
        let nextButtonComp = null;
        //if (this.calendarView != PICKER_SOURCE_EVENT.MONTH) {
        prevButtonComp = (
            <kup-button
                id="prev-page"
                icon="chevron_left"
                onKupButtonClick={(e) => this.prevPage(e)}
            ></kup-button>
        );
        nextButtonComp = (
            <kup-button
                id="next-page"
                icon="chevron_right"
                onKupButtonClick={(e) => this.nextPage(e)}
            ></kup-button>
        );
        //}

        return (
            <div
                tabindex="0"
                id="date-picker-div"
                ref={(el) =>
                    (this.status[source].pickerContainerEl = el as any)
                }
                onBlur={(e: any) => {
                    e.stopPropagation();
                    if (!this.isRelatedTargetInThisComponent(e)) {
                        this.onKupBlur(e, this.getSourceEvent());
                    }
                }}
            >
                <div class="section-1">
                    <div class="sub-1 nav">
                        {prevButtonComp}
                        <kup-button
                            customStyle="#kup-component button {text-transform:capitalize}"
                            id="change-view-button"
                            styling="flat"
                            label={changeViewButtonLabel}
                            onKupButtonClick={(e) => this.changeView(e)}
                        ></kup-button>
                        {nextButtonComp}
                    </div>
                </div>
                <div class="section-2">{this.createCalendar()}</div>
            </div>
        );
    }

    createCalendar() {
        switch (this.calendarView) {
            case PICKER_SOURCE_EVENT.DATE: {
                return this.createDaysCalendar();
            }
            case PICKER_SOURCE_EVENT.MONTH: {
                return this.createMonthsCalendar();
            }
            case PICKER_SOURCE_EVENT.YEAR: {
                return this.createYearsCalendar();
            }
        }
    }

    private createDaysCalendar() {
        let days = getDaysOfWeekAsStringByLocale(this.firstDayIndex);

        let date: Date = this.status[PICKER_SOURCE_EVENT.DATE].pickerEl.date;
        let selecteDate: Date = new Date(date);
        /*
        if (this.value == null || this.value.trim() == '') {
            selecteDate = new Date();
        } else {
            selecteDate = new Date(this.value);
        }*/

        let thead = [];
        let tbody = [];
        for (let index = 0; index < days.length; index++) {
            thead.push(
                <th>
                    <span class="item-text">{days[index]}</span>
                </th>
            );
        }

        let firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        let finish: boolean = false;
        let currentDayIndex = this.firstDayIndex;
        let firstMonthDayIndex = firstMonthDay.getDay();
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
                        fillString(
                            (date.getMonth() + 1).toString(),
                            '0',
                            2,
                            true
                        ) +
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
                                this.onKupDatePickerItemClick(
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
            <table id="calendar">
                <thead>{thead}</thead>
                <tbody>{tbody}</tbody>
            </table>
        );
    }

    private createMonthsCalendar() {
        let months = getMonthsAsStringByLocale('short');

        let date: Date = this.status[PICKER_SOURCE_EVENT.DATE].pickerEl.date;
        let selecteDate: Date;
        if (this.value == null || this.value.trim() == '') {
            selecteDate = new Date();
        } else {
            selecteDate = new Date(this.value);
        }
        let tbody = [];
        let row = [];
        let monthCount = 0;
        while (monthCount < 12) {
            for (let i = 0; i < 4; i++) {
                let monthClass = 'item';
                let dataIndex = {
                    'data-index':
                        date.getFullYear().toString() +
                        '-' +
                        (monthCount + 1).toString() +
                        '-' +
                        date.getDate(),
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
                                this.onKupDatePickerMonthYearItemClick(
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

    private createYearsCalendar() {
        let source = PICKER_SOURCE_EVENT.DATE;
        let date: Date = this.status[source].pickerEl.date;
        let curYear: number = date.getFullYear();
        let yearRange = this.getInitEndYear(curYear);
        let initYear: number = yearRange.initYear;
        let endYear: number = yearRange.endYear;

        let selecteDate: Date;
        if (this.value == null || this.value.trim() == '') {
            selecteDate = new Date();
        } else {
            selecteDate = new Date(this.value);
        }
        let tbody = [];
        let row = [];
        let yearCount = initYear;
        while (yearCount <= endYear) {
            for (let i = 0; i < 4; i++) {
                let yearClass = 'item';
                let dataIndex = {
                    'data-index':
                        yearCount.toString() +
                        '-' +
                        (date.getMonth() + 1).toString() +
                        '-' +
                        date.getDate(),
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
                                this.onKupDatePickerMonthYearItemClick(
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

    private changeView(e: CustomEvent) {
        e.stopPropagation();
        switch (this.calendarView) {
            case PICKER_SOURCE_EVENT.DATE: {
                this.calendarView = PICKER_SOURCE_EVENT.MONTH;
                break;
            }
            case PICKER_SOURCE_EVENT.MONTH: {
                this.calendarView = PICKER_SOURCE_EVENT.YEAR;
                break;
            }
            case PICKER_SOURCE_EVENT.YEAR: {
                this.calendarView = PICKER_SOURCE_EVENT.DATE;
            }
        }
        this.forceUpdate();
    }

    private prevPage(e: CustomEvent) {
        e.stopPropagation();
        let source = PICKER_SOURCE_EVENT.DATE;
        let date: Date = this.status[source].pickerEl.date;
        let yy: number = date.getFullYear();
        let mm: number = date.getMonth();

        if (this.calendarView == PICKER_SOURCE_EVENT.DATE) {
            if (mm < 1) {
                mm = 11;
                yy--;
            } else {
                mm--;
            }
        }
        if (this.calendarView == PICKER_SOURCE_EVENT.MONTH) {
            yy--;
        }
        if (this.calendarView == PICKER_SOURCE_EVENT.YEAR) {
            let yearRange = this.getInitEndYear(yy);
            yy = yearRange.initYear - 1;
        }
        date.setFullYear(yy);
        date.setMonth(mm);
        this.status[source].pickerEl.value = date.toISOString();
        this.status[source].pickerEl.date = date;
        this.forceUpdate();
    }

    private nextPage(e: CustomEvent) {
        e.stopPropagation();
        let source = PICKER_SOURCE_EVENT.DATE;
        let date: Date = this.status[source].pickerEl.date;
        let yy: number = date.getFullYear();
        let mm: number = date.getMonth();
        if (this.calendarView == PICKER_SOURCE_EVENT.DATE) {
            if (mm > 10) {
                mm = 0;
                yy++;
            } else {
                mm++;
            }
        }
        if (this.calendarView == PICKER_SOURCE_EVENT.MONTH) {
            yy++;
        }
        if (this.calendarView == PICKER_SOURCE_EVENT.YEAR) {
            let yearRange = this.getInitEndYear(yy);
            yy = yearRange.endYear + 1;
        }
        date.setFullYear(yy);
        date.setMonth(mm);
        this.status[source].pickerEl.value = date.toISOString();
        this.status[source].pickerEl.date = date;
        this.forceUpdate();
    }

    getDateForOutput(): string {
        if (this.value == null || this.value.trim() == '') {
            return '';
        }
        let v1 = unformattedStringToFormattedStringDate(this.value);
        return v1;
    }

    recalcPosition(source: PICKER_SOURCE_EVENT) {
        if (
            this.status[source] &&
            this.status[source].pickerContainerEl != null &&
            this.status[source].textfieldEl != null
        ) {
            positionRecalc(
                this.status[source].pickerContainerEl,
                this.status[source].textfieldEl
            );
        }
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.status[PICKER_SOURCE_EVENT.DATE] = {
            pickerOpened: false,
            pickerEl: { value: new Date().toISOString(), date: new Date() },
        };
        this.status[PICKER_SOURCE_EVENT.MONTH] = {
            pickerOpened: false,
            pickerEl: { value: new Date().toISOString(), date: new Date() },
        };
        this.watchFirstDayIndex();
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        let source = PICKER_SOURCE_EVENT.DATE;
        this.recalcPosition(source);
        logRender(this, true);
    }

    render() {
        let dateTextfieldEl: PICKER_COMPONENT_INFO = this.prepDateTextfield();

        let style = null;
        if (dateTextfieldEl != null && dateTextfieldEl.style != null) {
            style = {
                ...dateTextfieldEl.style,
            };
        }

        return (
            <Host
                style={style}
                onBlur={(e) => this.onKupBlur(e, this.getSourceEvent())}
            >
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={style}>
                    {dateTextfieldEl.kupComponent}
                    {this.prepDatePicker()}
                </div>
            </Host>
        );
    }
}

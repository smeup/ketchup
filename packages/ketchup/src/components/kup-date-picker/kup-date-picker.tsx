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
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';

import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { positionRecalc } from '../../utils/recalc-position';
import { KupTheme } from '../../utils/kup-theme/kup-theme';

import {
    formattedStringToDefaultUnformattedStringDate,
    isValidFormattedStringDate,
    isValidStringDate,
    unformattedStringToFormattedStringDate,
    getMonthsAsStringByLocale,
    getDaysOfWeekAsStringByLocale,
    ISO_DEFAULT_DATE_FORMAT,
    fillString,
} from '../../utils/utils';
import { SourceEvent } from './kup-date-picker-declarations';

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
    @Prop() customStyle: string = '';
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

    private calendarView: SourceEvent = SourceEvent.DATE;
    /**
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();
    /**
     * Instance of the KupTheme class.
     */
    private kupTheme: KupTheme = new KupTheme();
    private textfieldEl: any = undefined;
    private pickerContainerEl: HTMLElement = undefined;
    private pickerEl: { value: string; date: Date } = {
        value: new Date().toISOString(),
        date: new Date(),
    };
    private pickerOpened: boolean = false;

    //---- Events ----

    @Event({
        eventName: 'kupDatePickerBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupDatePickerClearIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<{
        id: any;
    }>;

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        if (this.isPickerOpened()) {
            if (e.key === 'Escape') {
                this.closePicker();
            }
            if (e.key === 'Enter') {
                e.stopPropagation();
                this.setPickerValueSelected();
            }
        }
    }

    onKupDatePickerItemClick(e: MouseEvent, value: string) {
        e.stopPropagation();
        this.setPickerValueSelected(value);

        this.kupChange.emit({
            id: this.rootElement.id,
            value: this.value,
        });

        this.kupItemClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupClearIconClick(e: MouseEvent) {
        e.stopPropagation();
        this.setPickerValueSelected('');

        this.kupChange.emit({
            id: this.rootElement.id,
            value: this.value,
        });

        this.kupClearIconClick.emit({
            id: this.rootElement.id,
        });
    }

    onKupDatePickerMonthYearItemClick(e: MouseEvent, value: string) {
        e.stopPropagation();
        switch (this.calendarView) {
            case SourceEvent.MONTH: {
                this.calendarView = SourceEvent.DATE;
                break;
            }
            case SourceEvent.YEAR: {
                this.calendarView = SourceEvent.MONTH;
                break;
            }
        }
        this.refreshPickerComponentValue(value);
    }

    @Watch('firstDayIndex')
    watchFirstDayIndex() {
        if (this.firstDayIndex > 6 || this.firstDayIndex < 0) {
            this.kupDebug.logMessage(
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
        if (this.textfieldEl != null) {
            this.textfieldEl.setFocus();
        }
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        this.setTextFieldInitalValue(this.getDateForOutput());
    }

    onKupBlur(e: UIEvent) {
        e.stopPropagation();
        this.closePicker();
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupChange(e: CustomEvent) {
        e.stopPropagation();
        this.refreshPickerValue(e.detail.value, this.kupChange);
    }

    onKupClick(e: UIEvent) {
        e.stopPropagation();
        this.kupClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus(e: UIEvent) {
        e.stopPropagation();
        this.kupFocus.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupInput(e: CustomEvent) {
        e.stopPropagation();
        this.refreshPickerValue(e.detail.value, this.kupInput, true);
    }

    onKupTextFieldSubmit(e: CustomEvent) {
        e.stopPropagation();
        this.refreshPickerValue(e.detail.value, this.kupTextFieldSubmit);
    }

    onKupIconClick(e: UIEvent) {
        e.stopPropagation();
        if (this.isPickerOpened()) {
            this.closePicker();
        } else {
            this.openPicker();
        }
        this.kupIconClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    forceUpdate() {
        this.stateSwitcher = !this.stateSwitcher;
    }

    refreshPickerValue(
        eventDetailValue: string,
        eventToRaise: EventEmitter,
        isOnInputEvent?: boolean
    ) {
        let newValue = eventDetailValue;
        if (isValidFormattedStringDate(eventDetailValue)) {
            newValue = formattedStringToDefaultUnformattedStringDate(
                eventDetailValue
            );
            this.refreshPickerComponentValue(newValue);
            if (isOnInputEvent != true) {
                this.setValue(newValue);
            }
        }

        if (newValue != null) {
            if (eventToRaise != null) {
                eventToRaise.emit({
                    id: this.rootElement.id,
                    value: newValue,
                });
            }
        }
    }

    refreshPickerComponentValue(value: string) {
        if (!this.isPickerOpened()) {
            return;
        }
        let d: Date;
        if (isValidStringDate(value, ISO_DEFAULT_DATE_FORMAT)) {
            d = new Date(value);
        } else {
            d = new Date();
        }
        this.pickerEl.value = d.toISOString();
        this.pickerEl.date = d;
        this.forceUpdate();
    }

    setPickerValueSelected(newValue?: string) {
        if (this.disabled == true) {
            return;
        }
        if (newValue == null) {
            newValue = this.getPickerValueSelected();
        }
        this.closePicker();
        if (newValue == null) {
            return;
        }
        this.setValue(newValue);
    }

    getPickerValueSelected(): string {
        return this.pickerEl.value;
    }

    setTextFieldInitalValue(value: string) {
        if (this.textfieldEl !== undefined) {
            this.textfieldEl.setValue(value);
        }
    }

    getValueForPickerComponent() {
        return this.value;
    }

    openPicker() {
        this.calendarView = SourceEvent.DATE;
        let textfieldEl = this.textfieldEl;
        let containerEl = this.pickerContainerEl;
        this.pickerOpened = true;
        this.refreshPickerComponentValue(this.getValueForPickerComponent());

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

    closePicker() {
        if (!this.isPickerOpened()) {
            return;
        }
        let textfieldEl = this.textfieldEl;
        let containerEl = this.pickerContainerEl;
        this.pickerOpened = false;
        if (textfieldEl != null) {
            textfieldEl.classList.remove('toggled');
            textfieldEl.emitSubmitEventOnEnter = true;
        }
        if (containerEl != null) {
            containerEl.classList.remove('dynamic-position-active');
            containerEl.classList.remove('visible');
        }
    }

    isPickerOpened(): boolean {
        return this.pickerOpened;
    }

    getTextFieldId(): string {
        return this.textfieldEl.id;
    }

    prepDateTextfield(): any {
        return this.prepTextfield(this.getDateForOutput());
    }

    prepTextfield(initialValue: string): any {
        let textfieldData = { ...this.data['kup-text-field'] };

        if (!textfieldData['icon']) {
            textfieldData['icon'] = 'calendar';
        }

        if (textfieldData['icon']) {
            textfieldData['trailingIcon'] = true;
        }

        let comp: HTMLElement = (
            <kup-text-field
                {...textfieldData}
                disabled={this.disabled}
                id={this.rootElement.id + '_text-field'}
                initialValue={initialValue}
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                onKupTextFieldSubmit={(e: any) => this.onKupTextFieldSubmit(e)}
                onKupTextFieldClearIconClick={(e: any) =>
                    this.onKupClearIconClick(e)
                }
                ref={(el) => (this.textfieldEl = el as any)}
            ></kup-text-field>
        );

        return comp;
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
        if (id == this.getTextFieldId()) {
            return true;
        }

        let idConc =
            '#prev-page#next-page#date-picker-div#change-view-button#calendar#';
        return idConc.indexOf('#' + id + '#') >= 0;
    }

    prepDatePicker() {
        let date: Date = this.pickerEl.date;
        let months = getMonthsAsStringByLocale();
        let curYear: number = date.getFullYear();
        let yearRange = this.getInitEndYear(curYear);
        let initYear: number = yearRange.initYear;
        let endYear: number = yearRange.endYear;

        let changeViewButtonLabel: string = 'not-set';
        switch (this.calendarView) {
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

        let prevButtonComp = null;
        let nextButtonComp = null;
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

        return (
            <div
                tabindex="0"
                id="date-picker-div"
                ref={(el) => (this.pickerContainerEl = el as any)}
                onBlur={(e: any) => {
                    e.stopPropagation();
                    if (!this.isRelatedTargetInThisComponent(e)) {
                        this.onKupBlur(e);
                    }
                }}
            >
                <div class="section-1">
                    <div class="sub-1 nav">
                        {prevButtonComp}
                        <kup-button
                            customStyle="#kup-component button {text-transform:capitalize}"
                            id="change-view-button"
                            styling={FButtonStyling.FLAT}
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
            case SourceEvent.DATE: {
                return this.createDaysCalendar();
            }
            case SourceEvent.MONTH: {
                return this.createMonthsCalendar();
            }
            case SourceEvent.YEAR: {
                return this.createYearsCalendar();
            }
        }
    }

    private createDaysCalendar() {
        let days = getDaysOfWeekAsStringByLocale(this.firstDayIndex);

        let date: Date = this.pickerEl.date;
        let selecteDate: Date = new Date(date);

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
                            onClick={(e) => {
                                this.onKupDatePickerItemClick(
                                    e,
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

        let date: Date = this.pickerEl.date;
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
                            onClick={(e) => {
                                this.onKupDatePickerMonthYearItemClick(
                                    e,
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
        let date: Date = this.pickerEl.date;
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
                        fillString(
                            (date.getMonth() + 1).toString(),
                            '0',
                            2,
                            true
                        ) +
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
                            onClick={(e) => {
                                this.onKupDatePickerMonthYearItemClick(
                                    e,
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
            case SourceEvent.DATE: {
                this.calendarView = SourceEvent.MONTH;
                break;
            }
            case SourceEvent.MONTH: {
                this.calendarView = SourceEvent.YEAR;
                break;
            }
            case SourceEvent.YEAR: {
                this.calendarView = SourceEvent.DATE;
            }
        }
        this.forceUpdate();
    }

    private prevPage(e: CustomEvent) {
        e.stopPropagation();
        let date: Date = this.pickerEl.date;
        let yy: number = date.getFullYear();
        let mm: number = date.getMonth();

        if (this.calendarView == SourceEvent.DATE) {
            if (mm < 1) {
                mm = 11;
                yy--;
            } else {
                mm--;
            }
        }
        if (this.calendarView == SourceEvent.MONTH) {
            yy--;
        }
        if (this.calendarView == SourceEvent.YEAR) {
            let yearRange = this.getInitEndYear(yy);
            yy = yearRange.initYear - 1;
        }
        date.setFullYear(yy);
        date.setMonth(mm);
        this.pickerEl.value = date.toISOString();
        this.pickerEl.date = date;
        this.forceUpdate();
    }

    private nextPage(e: CustomEvent) {
        e.stopPropagation();
        let date: Date = this.pickerEl.date;
        let yy: number = date.getFullYear();
        let mm: number = date.getMonth();
        if (this.calendarView == SourceEvent.DATE) {
            if (mm > 10) {
                mm = 0;
                yy++;
            } else {
                mm++;
            }
        }
        if (this.calendarView == SourceEvent.MONTH) {
            yy++;
        }
        if (this.calendarView == SourceEvent.YEAR) {
            let yearRange = this.getInitEndYear(yy);
            yy = yearRange.endYear + 1;
        }
        date.setFullYear(yy);
        date.setMonth(mm);
        this.pickerEl.value = date.toISOString();
        this.pickerEl.date = date;
        this.forceUpdate();
    }

    getDateForOutput(): string {
        if (this.value == null || this.value.trim() == '') {
            return '';
        }
        let v1 = unformattedStringToFormattedStringDate(this.value);
        return v1;
    }

    recalcPosition() {
        if (this.pickerContainerEl != null && this.textfieldEl != null) {
            positionRecalc(this.pickerContainerEl, this.textfieldEl);
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
        this.kupTheme.setThemeCustomStyle(this);
        this.watchFirstDayIndex();
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
    }

    componentDidRender() {
        this.recalcPosition();
        this.kupDebug.logRender(this, true);
    }

    render() {
        let hostClass: Record<string, boolean> = {};

        if (
            this.data &&
            this.data['kup-text-field'] &&
            this.data['kup-text-field']['className'] &&
            this.data['kup-text-field']['className'].indexOf('full-height') > -1
        ) {
            hostClass['full-height'] = true;
        }

        if (
            this.data &&
            this.data['kup-text-field'] &&
            this.data['kup-text-field']['fullWidth']
        ) {
            hostClass['full-width'] = true;
        }

        return (
            <Host class={hostClass} onBlur={(e) => this.onKupBlur(e)}>
                <style>{this.kupTheme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    {this.prepDateTextfield()}
                    {this.prepDatePicker()}
                </div>
            </Host>
        );
    }
}

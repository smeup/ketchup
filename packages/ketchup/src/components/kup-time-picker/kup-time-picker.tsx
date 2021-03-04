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
    JSX,
} from '@stencil/core';

import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { ComponentListElement } from '../kup-list/kup-list-declarations';

import {
    ISO_DEFAULT_TIME_FORMAT,
    ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS,
    isValidFormattedStringTime,
    formattedStringToCustomUnformattedStringTime,
    unformattedStringToFormattedStringTime,
    unformatDateTime,
    formatTime,
} from '../../utils/utils';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';

@Component({
    tag: 'kup-time-picker',
    styleUrl: 'kup-time-picker.scss',
    shadow: true,
})
export class KupTimePicker {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() stateSwitcher: boolean = false;
    @State() value: string = '';
    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * When set to true, the drop down menu will display a clock.
     */
    @Prop() clockVariant: boolean = true;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Props of the sub-components (time input text field)
     */
    @Prop() data: Object = {};
    /**
     * Manage seconds
     */
    @Prop() manageSeconds: boolean = false;
    /**
     * Minutes step
     */
    @Prop() timeMinutesStep: number = 10;

    private hoursEl: HTMLElement = undefined;
    private minutesEl: HTMLElement = undefined;
    private secondsEl: HTMLElement = undefined;
    private hoursCircleEl: HTMLElement = undefined;
    private minutesCircleEl: HTMLElement = undefined;
    private secondsCircleEl: HTMLElement = undefined;
    private hoursActive: boolean = true;
    private minutesActive: boolean = false;
    private secondsActive: boolean = false;

    private textfieldEl: any = undefined;
    private pickerContainerEl: HTMLElement = undefined;
    private pickerEl: HTMLElement = undefined;
    private pickerOpened: boolean = false;

    //---- Events ----

    @Event({
        eventName: 'kupTimePickerBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        id: any;
        value: any;
    }>;

    @Event({
        eventName: 'kupTimePickerClearIconClick',
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
                this.onKupTimePickerItemClick(null);
            }
        }
    }

    onKupTimePickerItemClick(e: CustomEvent, value?: string) {
        if (e != null) {
            e.stopPropagation();
            if (value == null) {
                value = e.detail.selected.value;
            }
        }
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

    @Watch('timeMinutesStep')
    watchTimeMinutesStep() {
        if (this.clockVariant) {
            return;
        }
        if (this.timeMinutesStep <= 0) {
            logMessage(
                this,
                'property time-minutes-step=[' +
                    this.timeMinutesStep +
                    '] not allowed: it must be > 0 and divisor of 60',
                'warning'
            );
            this.timeMinutesStep = 10;
            return;
        }
        let result: number = 60 % this.timeMinutesStep;

        if (result != 0) {
            logMessage(
                this,
                'property time-minutes-step=[' +
                    this.timeMinutesStep +
                    '] not allowed: it must be > 0 and divisor of 60',
                'warning'
            );
            this.timeMinutesStep = 10;
            return;
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
        this.setTextFieldInitalValue(this.getTimeForOutput());
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
        this.refreshPickerValue(e.detail.value, this.kupInput);
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

    refreshPickerValue(eventDetailValue: string, eventToRaise: EventEmitter) {
        let newValue = null;
        if (isValidFormattedStringTime(eventDetailValue, this.manageSeconds)) {
            newValue = formattedStringToCustomUnformattedStringTime(
                eventDetailValue,
                this.manageSeconds
                    ? ISO_DEFAULT_TIME_FORMAT
                    : ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS,
                this.manageSeconds
            );
            this.value = newValue;
            this.setTextFieldInitalValue(this.getTimeForOutput());
        }

        if (newValue != null) {
            eventToRaise.emit({
                id: this.rootElement.id,
                value: newValue,
            });
        }
    }

    setPickerValueSelected(newValue?: string) {
        if (!this.isPickerOpened()) {
            return;
        }
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
        this.value = newValue;
        this.setTextFieldInitalValue(this.getTimeForOutput());
    }

    getPickerValueSelected(): string {
        return this.value;
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
        let textfieldEl = this.textfieldEl;
        let containerEl = this.pickerContainerEl;
        this.pickerOpened = true;
        this.setClockViewActive(true, false, false);

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
        this.forceUpdate();
    }

    closePicker() {
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

    getPickerElId(): string {
        return this.pickerEl.id;
    }

    prepTimeTextfield(): any {
        return this.prepTextfield(this.getTimeForOutput());
    }

    prepTextfield(initialValue: string): any {
        let textfieldData = { ...this.data['kup-text-field'] };

        if (!textfieldData['icon']) {
            textfieldData['icon'] = 'access_time';
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
        if (id == this.getPickerElId()) {
            return true;
        }

        let idConc = '#time-picker-div#confirm#';
        return idConc.indexOf('#' + id + '#') >= 0;
    }

    private setTimeFromClock(e: CustomEvent) {
        let text: string =
            this.hoursEl.innerText + ':' + this.minutesEl.innerText;
        if (this.manageSeconds) {
            text += ':' + this.secondsEl.innerText;
        }
        this.onKupTimePickerItemClick(e, text);
    }

    private createClock() {
        let selectedTime: Date;
        if (this.value) {
            selectedTime = unformatDateTime(
                this.value,
                this.manageSeconds
                    ? ISO_DEFAULT_TIME_FORMAT
                    : ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS
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
        if (this.manageSeconds) {
            ss = selectedTime.getSeconds().toString();
            if (ss.length === 1) {
                ss = '0' + ss;
            }
        }
        let seconds: HTMLElement;
        let time: JSX.Element[] = [
            <span
                class="h"
                ref={(el) => (this.hoursEl = el as any)}
                onClick={() => {
                    this.setClockViewActive(true, false, false);
                    this.switchView(this.hoursEl, this.hoursCircleEl);
                }}
                innerHTML={hh}
            ></span>,
            ':',
            <span
                class="m"
                ref={(el) => (this.minutesEl = el as any)}
                onClick={() => {
                    this.setClockViewActive(false, true, false);
                    this.switchView(this.minutesEl, this.minutesCircleEl);
                }}
                innerHTML={mm}
            ></span>,
        ];
        if (this.manageSeconds) {
            seconds = (
                <div
                    class="circle seconds"
                    ref={(el) => (this.secondsCircleEl = el as any)}
                >
                    {this.buildClock(60, 101, 115, 115, 'sec unit', 0, 5, ss)}
                    <div class="mid"></div>
                </div>
            );
            time.push(
                ':',
                <span
                    class="s"
                    ref={(el) => (this.secondsEl = el as any)}
                    onClick={() => {
                        this.setClockViewActive(false, false, true);
                        this.switchView(this.secondsEl, this.secondsCircleEl);
                    }}
                    innerHTML={ss}
                ></span>
            );
        }

        return (
            <div
                class="clock"
                id={this.rootElement.id + '_clock'}
                ref={(el) => (this.pickerEl = el as any)}
            >
                <div class="top">{time}</div>
                <div
                    class="circle hours"
                    ref={(el) => (this.hoursCircleEl = el as any)}
                >
                    {this.buildClock(12, 101, 105, 105, 'hour', 0, 1, hh)}
                    {this.buildClock(12, 64, 110, 110, 'hour2', 12, 1, hh)}
                    <div class="mid"></div>
                </div>
                <div
                    class="circle minutes"
                    ref={(el) => (this.minutesCircleEl = el as any)}
                >
                    {this.buildClock(60, 101, 115, 115, 'min unit', 0, 5, mm)}
                    <div class="mid"></div>
                </div>
                {seconds}
                <div class="actions">
                    <kup-button
                        onKupButtonClick={(e: any) => {
                            this.setTimeFromClock(e);
                        }}
                        id="confirm"
                        styling={FButtonStyling.FLAT}
                        label="Ok"
                    ></kup-button>
                </div>
            </div>
        );
    }

    private switchView(el: HTMLElement, elCircle: HTMLElement) {
        this.hoursEl.classList.remove('active');
        this.hoursCircleEl.classList.remove('active');
        this.minutesEl.classList.remove('active');
        this.minutesCircleEl.classList.remove('active');
        if (this.secondsEl) {
            this.secondsEl.classList.remove('active');
            this.secondsCircleEl.classList.remove('active');
        }
        el.classList.add('active');
        elCircle.classList.add('active');
    }

    private setClockViewActive(
        hoursActive: boolean,
        minutesActive: boolean,
        secondsActive: boolean
    ) {
        this.hoursActive = hoursActive;
        this.minutesActive = minutesActive;
        this.secondsActive = secondsActive;
    }

    private buildClock(
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
                    onClick={(e) => this.setClockTime(e)}
                >
                    {text}
                </div>
            );
            divsArray.push(div);
        }

        return divsArray;
    }

    private setClockTime(e) {
        let time = e.target.getAttribute('data-value');
        if (this.hoursActive) {
            this.hoursEl.innerText = time;
            this.hoursCircleEl
                .querySelector('.selected')
                .classList.remove('selected');
            this.setClockViewActive(false, true, false);
            this.switchView(this.minutesEl, this.minutesCircleEl);
        } else if (this.minutesActive) {
            this.minutesEl.innerText = time;
            this.minutesCircleEl
                .querySelector('.selected')
                .classList.remove('selected');
            if (this.manageSeconds) {
                this.setClockViewActive(false, false, true);
                this.switchView(this.secondsEl, this.secondsCircleEl);
            } else {
                this.setTimeFromClock(e);
            }
        } else {
            this.secondsEl.innerText = time;
            this.secondsCircleEl
                .querySelector('.selected')
                .classList.remove('selected');
            this.setTimeFromClock(e);
        }
        e.target.classList.add('selected');
    }

    prepTimePicker() {
        let widget: HTMLElement = undefined;

        if (this.clockVariant) {
            widget = this.createClock();
        } else {
            widget = (
                <kup-list
                    data={this.createTimeListData(this.value)}
                    is-menu
                    menu-visible
                    onKupListClick={(e) =>
                        this.onKupTimePickerItemClick(
                            e,
                            e.detail.selected.value
                        )
                    }
                    id={this.rootElement.id + '_list'}
                    ref={(el) => (this.pickerEl = el as any)}
                ></kup-list>
            );
        }

        return (
            <div
                tabindex="-1"
                id="time-picker-div"
                ref={(el) => (this.pickerContainerEl = el as any)}
                onBlur={(e: any) => {
                    e.stopPropagation();
                    if (!this.isRelatedTargetInThisComponent(e)) {
                        this.onKupBlur(e);
                    }
                }}
            >
                {widget}
            </div>
        );
    }

    private createTimeListData(value: string) {
        let listData: ComponentListElement[] = [];

        let selectedTime: Date;
        if (value == null || value.trim() == '') {
            selectedTime = new Date();
        } else {
            selectedTime = unformatDateTime(
                value,
                this.manageSeconds
                    ? ISO_DEFAULT_TIME_FORMAT
                    : ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS
            );
        }

        let totalDayMinutes: number = 24 * 60;
        let itemsCount = totalDayMinutes / this.timeMinutesStep;

        let date: Date = new Date();
        date.setHours(0, 0, 0);
        for (let i = 0; i < itemsCount; i++) {
            let selected: boolean = false;
            if (
                date.getHours() == selectedTime.getHours() &&
                date.getMinutes() == selectedTime.getMinutes()
            ) {
                selected = true;
            }
            let text: string = formatTime(date, this.manageSeconds);
            let value = formattedStringToCustomUnformattedStringTime(
                text,
                this.manageSeconds
                    ? ISO_DEFAULT_TIME_FORMAT
                    : ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS,
                this.manageSeconds
            );
            let item: ComponentListElement = {
                text: text,
                value: value,
                selected: selected,
            };
            listData[listData.length] = item;
            date.setMinutes(date.getMinutes() + this.timeMinutesStep);
        }

        return listData;
    }

    getTimeForOutput(): string {
        if (this.value == null || this.value.trim() == '') {
            return '';
        }
        let v1 = unformattedStringToFormattedStringTime(
            this.value,
            this.manageSeconds
        );
        return v1;
    }

    recalcPosition() {
        if (this.pickerContainerEl != null && this.textfieldEl != null) {
            positionRecalc(this.pickerContainerEl, this.textfieldEl);
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.watchTimeMinutesStep();
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
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
        if (this.clockVariant) {
            if (this.hoursActive) {
                this.switchView(this.hoursEl, this.hoursCircleEl);
            } else if (this.minutesActive) {
                this.switchView(this.minutesEl, this.minutesCircleEl);
            } else if (this.secondsActive) {
                this.switchView(this.secondsEl, this.secondsCircleEl);
            }
        }
        this.recalcPosition();
        logRender(this, true);
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
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    {this.prepTimeTextfield()}
                    {this.prepTimePicker()}
                </div>
            </Host>
        );
    }
}

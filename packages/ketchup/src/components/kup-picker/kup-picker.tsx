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
} from '@stencil/core';

import { logLoad, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import 'app-datepicker/dist/app-datepicker-dialog';
import {
    formattedStringToDefaultUnformattedStringDate,
    getCurrentLocale,
    unformattedStringToFormattedStringDate,
} from '../../utils/utils';

@Component({
    tag: 'kup-picker',
    styleUrl: 'kup-picker.scss',
    shadow: true,
})
export class KupPicker {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * The minimum value of the picker.
     */
    @Prop() minValue: string = '1970-01-01';
    /**
     * The maximum value of the picker.
     */
    @Prop() maxValue: string = null;
    /**
     * Props of the text field.
     */
    @Prop() textfieldData: Object = {};
    /**
     * The value of the picker.
     */
    @Prop() value: string = '';

    private textfieldEl: any = undefined;
    private pickerContainerEl: any = undefined;
    private pickerEl: any = undefined;
    private elStyle: any = undefined;
    private pickerOpened = false;

    //---- Events ----

    @Event({
        eventName: 'kupPickerBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupPickerItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        value: any;
    }>;

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        if (this.isPickerOpened()) {
            if (e.key === 'Escape') {
                this.closePicker();
            }
            if (e.key === 'Enter') {
                this.setPickerValueSelected();
            }
        }
    }

    @Listen('picker-value-updated', { target: 'document' })
    onKupItemClick(e: CustomEvent) {
        this.setPickerValueSelected(e.detail.value);

        this.kupChange.emit({
            value: this.value,
        });

        this.kupItemClick.emit({
            value: this.value,
        });
    }

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.closePicker();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: CustomEvent) {
        this.value = formattedStringToDefaultUnformattedStringDate(
            e.detail.value
        );
        this.refreshPickerValue();
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupInput(e: CustomEvent) {
        this.value = formattedStringToDefaultUnformattedStringDate(
            e.detail.value
        );
        this.refreshPickerValue();
        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.isPickerOpened()) {
            this.closePicker();
        } else {
            this.openPicker();
        }
        this.kupIconClick.emit({
            value: target.value,
        });
    }

    refreshPickerValue() {
        if (!this.isPickerOpened()) {
            return;
        }
        this.pickerEl.value = this.value;
    }

    setPickerValueSelected(newValue?: string) {
        if (!this.isPickerOpened()) {
            return;
        }
        if (newValue == null) {
            newValue = this.pickerEl.value;
        }
        this.closePicker();
        if (newValue == null) {
            return;
        }
        console.log('setPickerValueSelected() newValue=' + newValue);
        this.value = newValue;
        //this.textfieldEl.initialValue = this.value;
        this.textfieldEl.initialValue = this.getDateForOutput();
    }

    openPicker(): boolean {
        this.pickerOpened = true;
        this.refreshPickerValue();
        let textFieldWidth = this.textfieldEl.shadowRoot.querySelector(
            '.mdc-text-field'
        ).clientWidth;
        this.textfieldEl.classList.add('toggled');
        this.textfieldEl.emitSubmitEventOnEnter = false;
        this.pickerContainerEl.classList.add('dynamic-position-active');
        this.pickerContainerEl.classList.add('visible');
        let elStyle: any = this.pickerContainerEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = textFieldWidth + 'px';
        return true;
    }

    closePicker() {
        this.pickerOpened = false;
        this.textfieldEl.classList.remove('toggled');
        this.textfieldEl.emitSubmitEventOnEnter = true;
        this.pickerContainerEl.classList.remove('dynamic-position-active');
        this.pickerContainerEl.classList.remove('visible');
    }

    isPickerOpened(): boolean {
        return this.pickerOpened;
    }

    prepTextfield() {
        if (this.textfieldData['fullWidth']) {
            this.elStyle = {
                ...this.elStyle,
                width: '100%',
            };
        }

        if (this.textfieldData['fullHeight']) {
            this.elStyle = {
                ...this.elStyle,
                height: '100%',
            };
        }

        if (!this.textfieldData['icon']) {
            this.textfieldData['icon'] = 'date_range';
        }

        if (this.textfieldData['icon']) {
            this.textfieldData['trailingIcon'] = true;
        }

        let comp: HTMLElement = (
            <kup-text-field
                {...this.textfieldData}
                style={this.elStyle}
                initial-value={this.getDateForOutput()}
                id={this.rootElement.id + '_text-field'}
                /* onKupTextFieldBlur={(e: any) => this.onKupBlur(e)} */
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                ref={(el) => (this.textfieldEl = el as any)}
            ></kup-text-field>
        );

        return comp;
    }

    prepPicker() {
        let comp: any = (
            <div
                id="app-date-picker-div"
                ref={(el) => (this.pickerContainerEl = el as any)}
            >
                <app-datepicker
                    firstdayofweek="1"
                    min={this.minValue}
                    max={this.maxValue}
                    startview="calendar"
                    value=""
                    locale={getCurrentLocale()}
                    dragratio="0.15"
                    inline="true"
                    ref={(el) => (this.pickerEl = el as any)}
                ></app-datepicker>
            </div>
        );
        return comp;
    }

    getDateForOutput(): string {
        if (this.value == null || this.value.trim() == '') {
            return '';
        }
        console.log('getDateForOutput() this.value=' + this.value);

        let v1 = unformattedStringToFormattedStringDate(this.value);
        console.log('getDateForOutput() v1=' + v1);
        return v1;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        positionRecalc(this.pickerContainerEl, this.textfieldEl);
        logRender(this, true);
    }

    render() {
        let textfieldEl = this.prepTextfield();
        let datePickerContainerEl = this.prepPicker();

        return (
            <Host onBlur={(e: any) => this.onKupBlur(e)} style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={this.elStyle}>
                    {textfieldEl}
                    {datePickerContainerEl}
                </div>
            </Host>
        );
    }
}

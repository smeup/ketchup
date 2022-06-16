import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupListNode } from '../kup-list/kup-list-declarations';
import {
    isValidFormattedStringTime,
    formattedStringToCustomUnformattedStringTime,
    unformattedStringToFormattedStringTime,
    formatTime,
    getProps,
    setProps,
} from '../../utils/utils';
import {
    KupTimePickerEventPayload,
    KupTimePickerProps,
} from './kup-time-picker-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import {
    KupCardClickPayload,
    KupCardData,
    KupCardFamily,
} from '../kup-card/kup-card-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
@Component({
    tag: 'kup-time-picker',
    styleUrl: 'kup-time-picker.scss',
    shadow: true,
})
export class KupTimePicker {
    /**
     * References the root HTML element of the component (<kup-time-picker>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When set to true, the drop down menu will display a clock.
     * @default true
     */
    @Prop() clockVariant: boolean = true;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components (time input text field)
     * @default {}
     */
    @Prop() data: Object = {};
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets the initial value of the component.
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * Manage seconds.
     * @default false
     */
    @Prop() manageSeconds: boolean = false;
    /**
     * Minutes step.
     * @default 10
     */
    @Prop() timeMinutesStep: number = 10;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private hoursActive: boolean = true;
    private minutesActive: boolean = false;
    private secondsActive: boolean = false;
    private textFieldContainerEl: HTMLElement = undefined;
    private textfieldEl: HTMLInputElement = undefined;
    private pickerKupEl: HTMLKupListElement | HTMLKupCardElement = undefined;
    private clickCb: KupManagerClickCb = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-timepicker-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-textfieldsubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<KupTimePickerEventPayload>;

    @Event({
        eventName: 'kup-timepicker-cleariconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<KupEventPayload>;

    onKupTimePickerItemClick(e: CustomEvent, value?: string) {
        if (e != null) {
            if (value == null) {
                value = e.detail.selected.id;
            }
        }
        this.setPickerValueSelected(value);

        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });

        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });

        this.setFocus();
    }

    onKupClearIconClick() {
        this.setPickerValueSelected('');

        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });

        this.kupClearIconClick.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupBlur() {
        this.closePicker();
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupChange(e: InputEvent) {
        this.refreshPickerValue(
            (e.target as HTMLInputElement).value,
            this.kupChange
        );
    }

    onKupClick() {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupInput(e: InputEvent) {
        this.refreshPickerValue(
            (e.target as HTMLInputElement).value,
            this.kupInput
        );
    }

    onKupTextFieldSubmit(e: KeyboardEvent) {
        this.refreshPickerValue(
            (e.target as HTMLInputElement).value,
            this.kupTextFieldSubmit
        );
    }

    onKupIconClick() {
        if (this.isPickerOpened()) {
            this.closePicker();
        } else {
            this.openPicker();
        }
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        if (this.isPickerOpened()) {
            if (e.key === 'Escape') {
                this.closePicker();
            }
            if (e.key === 'Enter') {
                this.onKupTimePickerItemClick(null);
            }
        }
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('timeMinutesStep')
    watchTimeMinutesStep() {
        if (this.clockVariant) {
            return;
        }
        if (this.timeMinutesStep <= 0) {
            this.kupManager.debug.logMessage(
                this,
                'property time-minutes-step=[' +
                    this.timeMinutesStep +
                    '] not allowed: it must be > 0 and divisor of 60',
                KupDebugCategory.WARNING
            );
            this.timeMinutesStep = 10;
            return;
        }
        let result: number = 60 % this.timeMinutesStep;

        if (result != 0) {
            this.kupManager.debug.logMessage(
                this,
                'property time-minutes-step=[' +
                    this.timeMinutesStep +
                    '] not allowed: it must be > 0 and divisor of 60',
                KupDebugCategory.WARNING
            );
            this.timeMinutesStep = 10;
            return;
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupTimePickerProps, descriptions);
    }
    /**
     * Returns the component's internal value.
     */
    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Focuses the input element.
     */
    @Method()
    async setFocus() {
        if (this.textfieldEl != null) {
            this.textfieldEl.focus();
        }
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupTimePickerProps, props);
    }
    /**
     * Sets the internal value of the component.
     */
    @Method()
    async setValue(value: string) {
        this.value = value;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    getFormattedValue(value: string): string {
        return formattedStringToCustomUnformattedStringTime(
            value,
            this.manageSeconds
                ? KupDatesFormats.ISO_TIME
                : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
            this.manageSeconds
        );
    }

    refreshPickerValue(eventDetailValue: string, eventToRaise: EventEmitter) {
        let newValue = null;
        if (isValidFormattedStringTime(eventDetailValue, this.manageSeconds)) {
            this.value = eventDetailValue;
            newValue = this.value;
        }

        if (newValue != null) {
            eventToRaise.emit({
                comp: this,
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
    }

    getPickerValueSelected(): string {
        return this.value;
    }

    getValueForPickerComponent() {
        return this.value;
    }

    openPicker() {
        const elStyle = this.pickerKupEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textFieldContainerEl.clientWidth + 'px';
        this.pickerKupEl.menuVisible = true;
        if (this.textfieldEl != null) {
            this.textfieldEl.classList.add('toggled');
        }
        if (this.kupManager.dynamicPosition.isRegistered(this.pickerKupEl)) {
            this.kupManager.dynamicPosition.changeAnchor(
                this.pickerKupEl,
                this.textFieldContainerEl
            );
        } else {
            this.kupManager.dynamicPosition.register(
                this.pickerKupEl,
                this.textFieldContainerEl,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
        }
        this.kupManager.dynamicPosition.start(this.pickerKupEl);
        if (!this.clickCb) {
            this.clickCb = {
                cb: () => {
                    this.closePicker();
                },
                el: this.pickerKupEl,
            };
        }
        this.kupManager.addClickCallback(this.clickCb, true);
    }

    closePicker() {
        this.pickerKupEl.menuVisible = false;
        this.kupManager.removeClickCallback(this.clickCb);
        let textfieldEl = this.textfieldEl;
        if (textfieldEl != null) {
            textfieldEl.classList.remove('toggled');
        }
        this.pickerKupEl.menuVisible = false;
        this.kupManager.dynamicPosition.stop(this.pickerKupEl);
        this.kupManager.removeClickCallback(this.clickCb);
    }

    isPickerOpened(): boolean {
        return this.pickerKupEl.menuVisible == true;
    }

    getTextFieldId(): string {
        return this.textfieldEl.id;
    }

    getPickerElId(): string {
        return this.pickerKupEl.id;
    }

    prepTextfield(initialValue: string): any {
        const fullHeight =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth = this.rootElement.classList.contains('kup-full-width');
        const textfieldData: FTextFieldProps = {
            ...this.data['kup-text-field'],
        };
        if (!textfieldData.icon) {
            textfieldData.icon = 'access_time';
        }
        if (textfieldData.icon) {
            textfieldData.trailingIcon = true;
        }
        let comp: HTMLElement = (
            <FTextField
                {...textfieldData}
                disabled={this.disabled}
                fullHeight={fullHeight}
                fullWidth={fullWidth}
                id={this.rootElement.id + '_text-field'}
                value={initialValue}
                onChange={(e: InputEvent) => this.onKupChange(e)}
                onClick={() => this.onKupClick()}
                onFocus={() => this.onKupFocus()}
                onInput={(e: InputEvent) => this.onKupInput(e)}
                onIconClick={() => this.onKupIconClick()}
                onKeyDown={(e: KeyboardEvent) => this.onKupTextFieldSubmit(e)}
                onClearIconClick={() => this.onKupClearIconClick()}
            >
                {this.prepTimePicker()}
            </FTextField>
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

    prepTimePicker() {
        if (this.clockVariant) {
            const data: KupCardData = {
                options: {
                    initialValue: this.value,
                    manageSeconds: this.manageSeconds,
                    hoursActive: this.hoursActive,
                    minutesActive: this.minutesActive,
                    secondsActive: this.secondsActive,
                },
            };

            return (
                <kup-card
                    ref={(el) => (this.pickerKupEl = el)}
                    data={data}
                    layoutFamily={KupCardFamily.BUILT_IN}
                    layoutNumber={2}
                    sizeX="300px"
                    sizeY="450px"
                    isMenu
                    onkup-card-click={(
                        ev: CustomEvent<KupCardClickPayload>
                    ) => {
                        if (ev.detail.value != null && ev.detail.value != '')
                            this.onKupTimePickerItemClick(ev, ev.detail.value);
                    }}
                ></kup-card>
            );
        } else {
            return (
                <kup-list
                    ref={(el) => (this.pickerKupEl = el)}
                    data={this.createTimeListData(this.value)}
                    is-menu
                    onkup-list-click={(e) =>
                        this.onKupTimePickerItemClick(e, e.detail.selected.id)
                    }
                    id={this.rootElement.id + '_list'}
                ></kup-list>
            );
        }
    }

    private createTimeListData(value: string) {
        const date: Date = new Date();
        const listData: KupListNode[] = [];
        const totalDayMinutes: number = 24 * 60;
        const itemsCount = totalDayMinutes / this.timeMinutesStep;

        let selectedTime: Date;
        if (value == null || value.trim() == '') {
            selectedTime = new Date();
        } else {
            selectedTime = this.kupManager.dates.toDate(
                value,
                this.manageSeconds
                    ? KupDatesFormats.ISO_TIME
                    : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
            );
        }

        date.setHours(0, 0, 0);
        for (let i = 0; i < itemsCount; i++) {
            let selected: boolean = false;
            if (
                date.getHours() == selectedTime.getHours() &&
                date.getMinutes() == selectedTime.getMinutes()
            ) {
                selected = true;
            }
            const value: string = formatTime(date, this.manageSeconds);
            const id = formattedStringToCustomUnformattedStringTime(
                value,
                this.manageSeconds
                    ? KupDatesFormats.ISO_TIME
                    : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                this.manageSeconds
            );
            let item: KupListNode = {
                id: id,
                selected: selected,
                value: value,
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

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
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
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field');
            if (f) {
                this.textFieldContainerEl = f;
                this.textfieldEl = f.querySelector('input');
                FTextFieldMDC(f);
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.prepTextfield(this.getTimeForOutput())}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.dates.unregister(this);
        this.kupManager.theme.unregister(this);
        if (this.pickerKupEl) {
            this.pickerKupEl.remove();
        }
    }
}

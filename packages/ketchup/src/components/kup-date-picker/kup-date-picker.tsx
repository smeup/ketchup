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
    VNode,
    Watch,
} from '@stencil/core';
import {
    GenericObject,
    KupComponent,
    KupComponentSizing,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupDatePickerEventPayload,
    KupDatePickerProps,
} from './kup-date-picker-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import {
    KupCardClickPayload,
    KupCardData,
    KupCardFamily,
} from '../kup-card/kup-card-declarations';
import { getProps } from '../../utils/utils';

@Component({
    tag: 'kup-date-picker',
    styleUrl: 'kup-date-picker.scss',
    shadow: true,
})
export class KupDatePicker {
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() stateSwitcher: boolean = false;
    @State() ISOvalue: string = '';
    @State() notISOvalue: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default null
     */
    @Prop({ mutable: true }) data: Object = null;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * First day number (0 - sunday, 1 - monday, ...)
     * TODO: manage with kupDates.locale, remove prop
     * @default 1
     */
    @Prop() firstDayIndex: number = 1;
    /**
     * Sets the initial value of the component
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * When set to true, the component will be rendered as an outlined field.
     * @default false
     */
    @Prop() outlined: boolean = false;
    /**
     * Sets the sizing of the textfield of the datepicker
     * @default KupComponentSizing.SMALL
     */
    @Prop() sizing: KupComponentSizing = KupComponentSizing.SMALL;
    /**
     * Sets the sizing of the textfield of the datepicker
     * @default true
     */
    @Prop() showIcon: boolean = true;
    /**
     * Sets show previous/next month days in calendar
     * @default true
     */
    @Prop() showPreviousNextMonthDays: boolean = true;
    /**
     * Set error message
     * @default '''
     */
    @Prop() error: string = '';
    /**
     * When true shows a small marker on the component.
     * @default false
     */
    @Prop() showMarker: boolean = false;
    /**
     * When enabled, font will be set to monospace and sizing will be extra-small .
     * @default false
     */
    @Prop() legacyLook: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private textfieldEl: HTMLInputElement = null;
    private pickerContainerEl: HTMLKupCardElement = null;
    private pickerEl: { value: string; date: Date } = {
        value: new Date().toISOString(),
        date: new Date(),
    };
    private clickCb: KupManagerClickCb = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-datepicker-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-textfieldsubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<KupDatePickerEventPayload>;

    @Event({
        eventName: 'kup-datepicker-cleariconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<KupEventPayload>;

    async onKupDatePickerItemClick(value: string) {
        this.setPickerValueSelected(value);

        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });

        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });

        this.setFocus();
    }

    async onKupClearIconClick() {
        this.setPickerValueSelected('');

        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });

        this.kupClearIconClick.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    async onKupBlur() {
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: await this.getValue(),
            comp: this,
        });
    }

    onKupChange(e: InputEvent) {
        this.refreshPickerValue(
            (e.target as HTMLInputElement).value,
            this.kupChange
        );
    }

    async onKupClick() {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });
    }

    async onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });
    }

    onKupInput(e: InputEvent) {
        this.refreshPickerValue(
            (e.target as HTMLInputElement).value,
            this.kupInput,
            true
        );
    }

    onKupTextFieldSubmit(e: KeyboardEvent) {
        if (e.key === 'Enter' || /^F[1-9]|F1[0-2]$/.test(e.key)) {
            this.refreshPickerValue(
                (e.target as HTMLInputElement).value,
                this.kupTextFieldSubmit
            );
        }
    }

    async onKupIconClick() {
        if (this.isPickerOpened()) {
            this.closePicker();
        } else {
            this.openPicker();
        }
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: await this.getValue(),
        });
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keyup')
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

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('firstDayIndex')
    watchFirstDayIndex() {
        if (this.firstDayIndex > 6 || this.firstDayIndex < 0) {
            this.kupManager.debug.logMessage(
                this,
                'property first-day-index=[' +
                    this.firstDayIndex +
                    '] not allowed: it must be >= 0 and <= 6',
                KupDebugCategory.WARNING
            );
            this.firstDayIndex = 1;
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Retrieves the component's value.
     * @returns {string} Value of the component.
     */
    @Method()
    async getValue(): Promise<string> {
        if (this.ISOvalue) {
            return this.ISOvalue;
        }
        return this.notISOvalue;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupDatePickerProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the focus to the component.
     */
    @Method()
    async setFocus() {
        if (this.textfieldEl != null) {
            this.textfieldEl.focus();
        }
    }
    /**
     * Sets the component's value.
     * @param {string} value - Value to be set.
     */
    @Method()
    async setValue(value: string) {
        this.refreshPickerValue(value, undefined);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    refreshPickerValue(
        eventDetailValue: string,
        eventToRaise: EventEmitter,
        isOnInputEvent?: boolean
    ) {
        let newValue = eventDetailValue;
        this.ISOvalue = '';
        this.notISOvalue = newValue;
        // check if input contains special codes
        if (!eventDetailValue) {
            /** donothing */
        } else if (this.kupManager.dates.isIsoDate(eventDetailValue)) {
            if (isOnInputEvent != true) {
                this.ISOvalue = eventDetailValue;
                this.notISOvalue = '';
            }
        } else if (this.isAlphanumeric(eventDetailValue)) {
            /** donothing */
        } else if (
            this.kupManager.dates.isValidFormattedStringDate(eventDetailValue)
        ) {
            newValue = this.kupManager.dates.format(
                this.kupManager.dates.normalize(eventDetailValue),
                KupDatesFormats.ISO_DATE
            );
            this.refreshPickerComponentValue(newValue);
            if (isOnInputEvent != true) {
                this.ISOvalue = newValue;
                this.notISOvalue = '';
            }
        } else {
            /** donothing */
        }

        if (newValue != null && eventToRaise) {
            eventToRaise.emit({
                id: this.rootElement.id,
                value: newValue,
            });
        }
    }

    refreshPickerComponentValue(value: string) {
        if (!this.isPickerOpened()) {
            return;
        }
        let d: Date;
        if (this.kupManager.dates.isIsoDate(value)) {
            d = new Date(value);
        } else {
            d = new Date();
        }
        this.pickerEl.value = d.toISOString();
        this.pickerEl.date = d;
        this.refresh();
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

    getValueForPickerComponent() {
        return this.ISOvalue;
    }

    openPicker() {
        const textfieldEl = this.textfieldEl;
        this.pickerContainerEl.menuVisible = true;
        const elStyle = this.pickerContainerEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textfieldEl.parentElement.clientWidth + 'px';
        this.refreshPickerComponentValue(this.getValueForPickerComponent());
        if (textfieldEl != null) {
            textfieldEl.classList.add('toggled');
        }
        if (
            this.kupManager.dynamicPosition.isRegistered(this.pickerContainerEl)
        ) {
            this.kupManager.dynamicPosition.changeAnchor(
                this.pickerContainerEl,
                this.textfieldEl.parentElement
            );
        } else {
            this.kupManager.dynamicPosition.register(
                this.pickerContainerEl,
                this.textfieldEl.parentElement,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
        }
        this.kupManager.dynamicPosition.start(this.pickerContainerEl);
        if (!this.clickCb) {
            this.clickCb = {
                cb: () => {
                    this.closePicker();
                },
                el: this.pickerContainerEl,
            };
        }
        this.kupManager.addClickCallback(this.clickCb, true);
    }

    closePicker() {
        this.kupManager.removeClickCallback(this.clickCb);
        if (!this.isPickerOpened()) {
            return;
        }
        let textfieldEl = this.textfieldEl;
        if (textfieldEl != null) {
            textfieldEl.classList.remove('toggled');
        }
        this.pickerContainerEl.menuVisible = false;
        this.kupManager.dynamicPosition.stop(this.pickerContainerEl);
    }

    isPickerOpened(): boolean {
        return this.pickerContainerEl?.menuVisible == true;
    }

    getTextFieldId(): string {
        return this.textfieldEl.id;
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

    getDateForOutput(): string {
        if (this.notISOvalue) {
            return this.notISOvalue;
        }
        if (this.ISOvalue) {
            return this.kupManager.dates.format(this.ISOvalue);
        }
        return '';
    }

    isAlphanumeric(value: string): boolean {
        const regex = /[A-Za-z]/;
        return regex.test(value);
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.watchFirstDayIndex();
        this.setValue(this.initialValue);
        if (!this.data) {
            this.data = {
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
                this.textfieldEl = f.querySelector('input');
                FTextFieldMDC(f);
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const fullHeight =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth = this.rootElement.classList.contains('kup-full-width');
        const textfieldData: FTextFieldProps = {
            ...this.data['kup-text-field'],
            sizing: this.sizing,
            outlined: this.outlined,
            showIcon: this.showIcon,
            legacyLook: this.legacyLook,
            error: this.error,
            showMarker: this.showMarker,
        };
        if (!textfieldData.icon && this.showIcon) {
            textfieldData.icon = 'calendar';
        }
        if (textfieldData.icon) {
            textfieldData.trailingIcon = true;
        }

        const cardData: KupCardData = {
            options: {
                initialValue: this.ISOvalue,
                firstDayIndex: this.firstDayIndex,
                resetStatus: true,
                showPreviousNextMonthDays: this.showPreviousNextMonthDays,
            },
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FTextField
                        {...textfieldData}
                        disabled={this.disabled}
                        fullHeight={fullHeight}
                        fullWidth={fullWidth}
                        maxLength={10}
                        id={this.rootElement.id + '_text-field'}
                        value={this.getDateForOutput()}
                        onBlur={() => this.onKupBlur()}
                        onChange={(e: InputEvent) => this.onKupChange(e)}
                        onClearIconClick={() => this.onKupClearIconClick()}
                        onClick={() => this.onKupClick()}
                        onFocus={() => this.onKupFocus()}
                        onIconClick={() => this.onKupIconClick()}
                        onKeyDown={(e: KeyboardEvent) =>
                            this.onKupTextFieldSubmit(e)
                        }
                        onInput={(e: InputEvent) => this.onKupInput(e)}
                    >
                        <kup-card
                            ref={(el) => (this.pickerContainerEl = el)}
                            data={cardData}
                            layoutFamily={KupCardFamily.BUILT_IN}
                            sizeX="300px"
                            sizeY="auto"
                            id={this.rootElement.id + '_card'}
                            isMenu
                            onkup-card-click={(
                                ev: CustomEvent<KupCardClickPayload>
                            ) => {
                                if (
                                    ev.detail.value != null &&
                                    ev.detail.value != ''
                                )
                                    this.onKupDatePickerItemClick(
                                        ev.detail.value
                                    );
                            }}
                        ></kup-card>
                    </FTextField>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.dates.unregister(this);
        this.kupManager.theme.unregister(this);
        if (this.pickerContainerEl) {
            this.pickerContainerEl.remove();
        }
    }
}

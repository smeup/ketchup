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
} from '@stencil/core';
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupNumericPickerEventPayload,
    KupNumericPickerProps,
} from './kup-numeric-picker-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
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
@Component({
    tag: 'kup-numeric-picker',
    styleUrl: 'kup-numeric-picker.scss',
    shadow: true,
})
export class KupNumericPicker {
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() stateSwitcher: boolean = false;
    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default null
     */
    @Prop({ mutable: true }) data: Object = null;
    /**
     * Defaults at false. When set to true, the component has decimals.
     * @default false
     */
    @Prop() decimals: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets the initial value of the component
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * when set, the component allows you to enter decimals with a maximum of characters.
     * @default null
     */
    @Prop({ mutable: true }) maxDecimals: number = null;
    /**
     * When set, the component allows you to enter integer numbers with a maximum of characters.
     * @default null
     */
    @Prop({ mutable: true }) maxIntegers: number = null;
    /**
     * When set, the component allows you to enter numbers with a maximum of characters, including decimals.
     * @default null
     */
    @Prop() maxLength: number = null;
    /**
     * Defaults at false. When set to true, the component has negative number.
     * @default false
     */
    @Prop() negative: boolean = false;

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
        eventName: 'kup-numericpicker-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-textfieldsubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<KupNumericPickerEventPayload>;

    @Event({
        eventName: 'kup-numericpicker-cleariconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<KupEventPayload>;

    onKupPickerItemClick(value: string) {
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
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: this.value,
            comp: this,
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
            this.kupInput,
            true
        );
    }

    onkupTextFieldSubmit(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.refreshPickerValue(
                (e.target as HTMLInputElement).value,
                this.kupTextFieldSubmit
            );
        }
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
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Retrieves the component's value.
     * @returns {string} Value of the component.
     */
    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        let props: GenericObject = {};
        if (descriptions) {
            props = KupNumericPickerProps;
        } else {
            for (const key in KupNumericPickerProps) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        KupNumericPickerProps,
                        key
                    )
                ) {
                    props[key] = this[key];
                }
            }
        }
        return props;
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
        this.value = value;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    refreshPickerValue(
        eventDetailValue: string,
        eventToRaise: EventEmitter,
        isOnInputEvent?: boolean
    ) {
        let newValue = this.kupManager.math.numberify(eventDetailValue, true);
        if (newValue) {
            let str = newValue.toString();
            // here we check the input digits and fix with numeric picker rules.
            const idx = str.indexOf('.');
            let int = idx > -1 ? str.substring(0, idx) : str;
            let dec = idx > -1 ? str.substring(idx + 1) : '';

            if (this.maxIntegers && int.length > this.maxIntegers)
                int = int.substring(int.length - this.maxIntegers);
            if (this.maxDecimals && dec.length > this.maxDecimals)
                dec = dec.substring(0, this.maxDecimals);
            while (this.maxLength && int.length + dec.length > this.maxLength) {
                if (dec.length > 1) dec = dec.substring(0, dec.length - 1);
                else if (int.length > 1) int = int.substring(1);
            }

            str = idx > -1 ? `${int}.${dec}` : int;

            if (isOnInputEvent != true) {
                this.setValue(str);
            }
            if (eventToRaise != null) {
                eventToRaise.emit({
                    id: this.rootElement.id,
                    value: str,
                });
            }
        }
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
        return this.value;
    }

    openPicker() {
        const textfieldEl = this.textfieldEl;
        this.pickerContainerEl.menuVisible = true;
        const elStyle = this.pickerContainerEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textfieldEl.parentElement.clientWidth + 'px';
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
        return this.pickerContainerEl.menuVisible == true;
    }

    getTextFieldId(): string {
        return this.textfieldEl.id;
    }

    prepTextfield(): VNode {
        if (!this.decimals && !this.maxIntegers) this.maxIntegers = 17;
        if (this.decimals && !this.maxIntegers && !this.maxDecimals) {
            this.maxIntegers = 15;
            this.maxDecimals = 2;
        }
        const fullHeight =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth = this.rootElement.classList.contains('kup-full-width');
        const textfieldData: FTextFieldProps = {
            ...this.data['kup-text-field'],
        };
        if (!textfieldData.icon) {
            textfieldData.icon = 'calculator';
        }
        if (textfieldData.icon) {
            textfieldData.trailingIcon = true;
        }
        return (
            <FTextField
                {...textfieldData}
                disabled={this.disabled}
                fullHeight={fullHeight}
                fullWidth={fullWidth}
                id={this.rootElement.id + '_text-field'}
                value={this.kupManager.math.numbers.toLocaleString(this.value)}
                onBlur={() => this.onKupBlur()}
                onChange={(e: InputEvent) => this.onKupChange(e)}
                onClearIconClick={() => this.onKupClearIconClick()}
                onClick={() => this.onKupClick()}
                onFocus={() => this.onKupFocus()}
                onIconClick={() => this.onKupIconClick()}
                onKeyDown={(e: KeyboardEvent) => this.onkupTextFieldSubmit(e)}
                onInput={(e: InputEvent) => this.onKupInput(e)}
            >
                {this.prepPicker()}
            </FTextField>
        );
    }

    prepPicker() {
        const data: KupCardData = {
            options: {
                decimals: this.decimals,
                initialValue: this.value,
                maxDecimals: this.maxDecimals,
                maxIntegers: this.maxIntegers,
                maxLength: this.maxLength,
                negative: this.negative,
                resetStatus: true,
            },
        };

        return (
            <kup-card
                ref={(el) => (this.pickerContainerEl = el)}
                data={data}
                layoutFamily={KupCardFamily.BUILT_IN}
                layoutNumber={5}
                sizeX="300px"
                sizeY="auto"
                isMenu
                onkup-card-click={(ev: CustomEvent<KupCardClickPayload>) => {
                    if (ev.detail.value != null)
                        this.onKupPickerItemClick(ev.detail.value);
                }}
            ></kup-card>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.value = this.initialValue;
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
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{this.prepTextfield()}</div>
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

import {
    Component,
    Element,
    State,
    Event,
    Prop,
    h,
    Host,
    Method,
    EventEmitter,
    Watch,
} from '@stencil/core';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import {
    setThemeCustomStyle,
    setCustomStyle,
    colorCheck,
} from '../../utils/theme-manager';
import Picker from 'vanilla-picker';
import { positionRecalc } from '../../utils/recalc-position';

@Component({
    tag: 'kup-color-picker',
    styleUrl: 'kup-color-picker.scss',
    shadow: true,
})
export class KupColorPicker {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() hexValue: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Props of the text field.
     */
    @Prop() data: {} = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * When true, the component's text field will be replaced by a swatch.
     */
    @Prop() swatchOnly: boolean = false;
    /**
     * The html color, can be css color name, hex code or rgb code (sample: "red" or rgb(255, 0, 0) or "#FF0000" )
     */
    @Prop() value: string;

    private anchorEl: HTMLElement = undefined;
    private picker: Picker = undefined;

    @Event({
        eventName: 'kupColorPickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Watch('value')
    setHexValue() {
        if (this.value) {
            this.hexValue = colorCheck(this.value).hexColor;
            console.log('ews');
            if (
                this.picker &&
                this.hexValue &&
                this.hexValue.indexOf('#') > -1 &&
                this.hexValue.length === 7
            ) {
                this.picker.setColour(this.hexValue, true);
            }
        }
    }

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    private prepTextField() {
        let initialValue = undefined;
        let textfieldData = { ...this.data['text-field'] };
        let customStyle: string = ` #kup-component .icon-container{background-color:${this.hexValue}}`;
        if (!textfieldData['icon']) {
            textfieldData['icon'] = 'color_lens';
        }
        if (!textfieldData['customStyle']) {
            textfieldData['customStyle'] = customStyle;
        } else {
            textfieldData['customStyle'] += customStyle;
        }
        if (textfieldData['trailingIcon'] === undefined) {
            textfieldData['trailingIcon'] = true;
        }
        if (!this.hexValue) {
            let message = 'Invalid color: ' + this.value;
            logMessage(this, message, 'warning');
            initialValue = message;
            textfieldData['icon'] = 'warning';
        } else {
            initialValue = this.hexValue;
        }
        return (
            <kup-text-field
                {...textfieldData}
                initial-value={initialValue}
                disabled={this.disabled}
            ></kup-text-field>
        );
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.setHexValue();
        if (!this.data) {
            this.data = {
                'text-field': {},
            };
        }
    }

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root) {
            if (this.hexValue) {
                this.picker = new Picker({
                    alpha: false,
                    color: this.hexValue,
                    parent: this.anchorEl,
                });
                this.picker['kupColorPicker'] = this;
                this.picker['onChange'] = function (color) {
                    let colorPicker = this['kupColorPicker'];
                    colorPicker.hexValue = color.hex.substr(0, 7);

                    colorPicker.kupChange.emit({
                        value: colorPicker.hexValue,
                    });
                };
                this.picker['onClose'] = function (color) {
                    let colorPicker = this['kupColorPicker'];
                    colorPicker.hexValue = color.hex.substr(0, 7);
                    colorPicker.dropdownEl.classList.remove(
                        'dynamic-position-active'
                    );

                    colorPicker.kupChange.emit({
                        value: colorPicker.hexValue,
                    });
                };
                this.picker['onOpen'] = function () {
                    let colorPicker = this['kupColorPicker'];
                    if (!colorPicker.dropdownEl) {
                        colorPicker.dropdownEl = this[
                            'kupColorPicker'
                        ].rootElement.shadowRoot.querySelector(
                            '.picker_wrapper'
                        );
                        positionRecalc(
                            colorPicker.dropdownEl,
                            colorPicker.anchorEl
                        );
                    }
                    if (!colorPicker.disabled) {
                        colorPicker.dropdownEl.classList.add(
                            'dynamic-position-active'
                        );
                    }
                };
            }
        }
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        let widget: HTMLElement = undefined;
        if (this.swatchOnly) {
            widget = (
                <button
                    type="button"
                    disabled={this.disabled}
                    class="color-picker"
                    style={{
                        backgroundColor: this.hexValue,
                    }}
                />
            );
        } else {
            widget = this.prepTextField();
        }
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div
                    id="kup-component"
                    ref={(el) => (this.anchorEl = el as any)}
                >
                    {widget}
                </div>
            </Host>
        );
    }
}

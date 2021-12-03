import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import Picker from 'vanilla-picker';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupColorPickerEventPayload,
    KupColorPickerProps,
} from './kup-color-picker-declarations';
import { KupLanguageGeneric } from '../../utils/kup-language/kup-language-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupManagerClickCb } from '../../utils/kup-manager/kup-manager-declarations';

@Component({
    tag: 'kup-color-picker',
    styleUrl: 'kup-color-picker.scss',
    shadow: true,
})
export class KupColorPicker {
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * State of the component.
     * @default null
     */
    @State() value: string = null;

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
     * Props of the text field.
     * @default null
     */
    @Prop({ mutable: true }) data: Object = null;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets the initial value of the component. Can be css color name, hex code or rgb code (sample: "red" or rgb(255, 0, 0) or "#FF0000" ).
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * When true, the component's text field will be replaced by a swatch.
     * @default false
     */
    @Prop() swatchOnly: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    kupManager: KupManager = kupManagerInstance();
    private anchorEl: HTMLElement;
    private picker: Picker;
    private textfieldEl: HTMLElement;
    private clickCb: KupManagerClickCb = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-colorpicker-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupColorPickerEventPayload>;

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
        return getProps(this, KupColorPickerProps, descriptions);
    }
    /**
     * Retrieves the component's value.
     * @returns {string} Value of the component.
     */
    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }
    /**
     * Sets the focus to the component.
     */
    @Method()
    async setFocus(): Promise<void> {
        this.textfieldEl.querySelector('input').focus();
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupColorPickerProps, props);
    }
    /**
     * Sets the component's value.
     * @param {string} value - Value to be set.
     */
    @Method()
    async setValue(value: string): Promise<void> {
        this.value = value;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private setHexValue(): void {
        if (this.value) {
            if (this.value.indexOf('#') < 0) {
                this.value = this.kupManager.theme.colorCheck(
                    this.value
                ).hexColor;
            }
            if (
                this.picker &&
                this.value &&
                this.value.indexOf('#') > -1 &&
                this.value.length === 7
            ) {
                this.picker.setColour(this.value, true);
            }
        }
    }

    private prepTextField(): VNode {
        let value: string = null;
        let textfieldProps: FTextFieldProps = {
            ...this.data['kup-text-field'],
        };
        if (!textfieldProps.icon) {
            textfieldProps.icon = 'brightness-1';
        }
        if (textfieldProps.trailingIcon === undefined) {
            textfieldProps.trailingIcon = true;
        }

        if (this.value === '') {
            value = this.value;
            textfieldProps.icon = '';
        } else if (!this.value) {
            const message: string =
                this.kupManager.language.translate(
                    KupLanguageGeneric.INVALID_COLOR
                ) +
                ': ' +
                this.value;
            value = message;
            textfieldProps.icon = 'warning';
            textfieldProps.title = message;
        } else {
            value = this.value;
        }

        return (
            <FTextField
                {...textfieldProps}
                disabled={this.disabled}
                fullHeight={
                    this.rootElement.classList.contains('kup-full-height')
                        ? true
                        : false
                }
                fullWidth={
                    this.rootElement.classList.contains('kup-full-width')
                        ? true
                        : false
                }
                readOnly={true}
                value={value}
                wrapperClass={
                    textfieldProps.icon === 'brightness-1' ? 'thumb-icon' : ''
                }
            />
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.value = this.initialValue;
        this.setHexValue();
        if (!this.data) {
            this.data = {
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const that = this;
            this.picker = new Picker({
                alpha: false,
                color: this.value,
                parent: this.anchorEl,
            });
            this.picker['onClose'] = function (color) {
                that.setValue(color.hex.substr(0, 7));
                that.kupChange.emit({
                    comp: that,
                    id: that.rootElement.id,
                    value: that.value,
                });
            };
            this.picker['onOpen'] = function () {
                if (that.disabled) {
                    that.picker.closeHandler(null);
                } else {
                    that.rootElement.style.setProperty(
                        '--kup_colorpicker_picker_width',
                        that.textfieldEl.clientWidth + 'px'
                    );
                    if (!that.clickCb) {
                        that.clickCb = {
                            cb: () => {
                                that.picker.closeHandler(null);
                                that.kupManager.removeClickCallback(
                                    that.clickCb
                                );
                            },
                            el: that.picker['domElement'],
                        };
                    }
                    that.kupManager.addClickCallback(this.clickCb, true);
                }
            };
        }
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillUpdate() {
        this.setHexValue();
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            this.textfieldEl = root.querySelector('.f-text-field--wrapper');
            if (this.textfieldEl) {
                FTextFieldMDC(this.textfieldEl);
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        let widget: VNode = null;
        if (this.swatchOnly) {
            widget = (
                <button
                    type="button"
                    disabled={this.disabled}
                    class="color-picker"
                    style={{
                        backgroundColor: this.value,
                    }}
                />
            );
        } else {
            widget = this.prepTextField();
        }

        const style: GenericObject = {
            ['--kup_colorpicker_thumb_color']: this.value ? this.value : '',
        };

        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host style={style}>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id={componentWrapperId} ref={(el) => (this.anchorEl = el)}>
                    {widget}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}

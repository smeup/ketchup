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
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupColorPickerEventPayload,
    KupColorPickerProps,
} from './kup-color-picker-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import {
    KupCardColorPickerOptions,
    KupCardData,
    KupCardFamily,
} from '../kup-card/kup-card-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import Picker from 'vanilla-picker';

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
    private card: HTMLKupCardElement;
    private clickCb: KupManagerClickCb = null;
    private picker: Picker;
    private textfieldEl: HTMLElement;

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
        if (this.picker && !this.isPickerOpened()) {
            this.picker.setColor(value, true);
        }
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
        }
    }

    private createCard(): HTMLKupCardElement {
        const card = document.createElement('kup-card');
        const cardData: KupCardData = {
            options: {
                initialValue: this.value,
                changeCb: (color: any) => {
                    this.setValue(color.hex.substring(0, 7));
                    this.kupChange.emit({
                        comp: this,
                        id: this.rootElement.id,
                        value: this.value,
                    });
                },
                creationCb: (picker: Picker) => {
                    this.picker = picker;
                },
            } as KupCardColorPickerOptions,
        };
        card.data = cardData;
        card.isMenu = true;
        card.layoutFamily = KupCardFamily.BUILT_IN;
        card.layoutNumber = 4;
        return card;
    }

    private openPicker(): void {
        if (!this.card) {
            this.card = this.createCard();
        }
        const textfieldEl = this.textfieldEl;
        this.card.menuVisible = true;
        this.card.sizeX = this.textfieldEl.parentElement.clientWidth + 'px';
        this.card.sizeY = 'auto';
        if (textfieldEl != null) {
            textfieldEl.classList.add('toggled');
        }
        if (this.kupManager.dynamicPosition.isRegistered(this.card)) {
            this.kupManager.dynamicPosition.changeAnchor(
                this.card,
                this.textfieldEl.parentElement
            );
        } else {
            this.kupManager.dynamicPosition.register(
                this.card,
                this.textfieldEl.parentElement,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
        }
        this.kupManager.dynamicPosition.start(this.card);
        if (!this.clickCb) {
            this.clickCb = {
                cb: () => {
                    this.closePicker();
                },
                el: this.card,
            };
        }
        this.kupManager.addClickCallback(this.clickCb, true);
    }

    closePicker(): void {
        this.kupManager.removeClickCallback(this.clickCb);
        const textfieldEl = this.textfieldEl;
        if (textfieldEl) {
            textfieldEl.classList.remove('toggled');
        }
        this.card.menuVisible = false;
        this.kupManager.dynamicPosition.stop(this.card);
    }

    isPickerOpened(): boolean {
        return this.card && this.card.menuVisible ? true : false;
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
                onClick={() => {
                    if (this.isPickerOpened()) {
                        this.closePicker();
                    } else {
                        this.openPicker();
                    }
                }}
                onIconClick={() => {
                    if (this.isPickerOpened()) {
                        this.closePicker();
                    } else {
                        this.openPicker();
                    }
                }}
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
            this.textfieldEl = root.querySelector('.f-text-field');
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
                    disabled={this.disabled}
                    class="color-picker"
                    onClick={() => this.openPicker()}
                    style={{
                        backgroundColor: this.value,
                    }}
                    type="button"
                />
            );
        } else {
            widget = this.prepTextField();
        }

        const style: GenericObject = {
            ['--kup_colorpicker_thumb_color']: this.value ? this.value : '',
        };

        return (
            <Host style={style}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{widget}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.card) {
            this.kupManager.dynamicPosition.unregister([this.card]);
            this.card.remove();
        }
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}

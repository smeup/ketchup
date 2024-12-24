import {
    Component,
    Event,
    EventEmitter,
    Element,
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
    GenericObject,
    KupComponent,
    KupComponentSizing,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    ItemsDisplayMode,
    KupListEventPayload,
    ValueDisplayedValue,
} from '../kup-list/kup-list-declarations';
import {
    consistencyCheck,
    getIdOfItemByDisplayMode,
} from '../kup-list/kup-list-helper';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import {
    KupComboboxEventPayload,
    KupComboboxIconClickEventPayload,
    KupComboboxProps,
} from './kup-combobox-declarations';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';

@Component({
    tag: 'kup-combobox',
    styleUrl: 'kup-combobox.scss',
    shadow: true,
})
export class KupCombobox {
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() displayedValue: string = undefined;
    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Set alert message
     * @default '''
     */
    @Prop() alert: string = '';
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components (date input text field).
     */
    @Prop() data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how to show the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Set error message
     * @default '''
     */
    @Prop() error: string = '';
    /**
     * When set, the text-field will show this icon.
     * @default null
     */
    @Prop() icon: string = null;
    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';
    /**
     * Sets the initial value decode of the component
     */
    @Prop() initialValueDecode: string = '';
    /**
     * Enables a clear trailing icon.
     * @default false
     */
    @Prop() isClearable: boolean = false;
    /**
     * Lets the combobox behave as a select element, making the textfield readable only but interactable.
     */
    @Prop({ reflect: true }) isSelect: boolean = true;
    /**
     * When set, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When set to true, the label will be on the left of the component.
     * @default false
     */
    @Prop() leadingLabel: boolean = false;
    /**
     * Sets the component to read only state, making it not editable, but interactable. Used in combobox component when it behaves as a select.
     * @default false
     */
    @Prop() readOnly: boolean = false;

    /**
     * Sets how to return the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * When true shows the drop-down icon, for open list.
     */
    @Prop() showDropDownIcon: boolean = true;
    /**
     * Sets the type of the button
     * @default KupComponentSizing.SMALL
     */
    @Prop() sizing: KupComponentSizing = KupComponentSizing.SMALL;
    /**
     * When set, the icon will be shown after the text.
     * @default false
     */
    @Prop() trailingIcon: boolean = false;
    /**
     * When true shows a small marker on the component.
     * @default false
     */
    @Prop() showMarker: boolean = false;

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();
    #elStyle: any = undefined;
    #listEl: HTMLKupListElement = undefined;
    #textfieldWrapper: HTMLElement = undefined;
    #textfieldEl: HTMLInputElement | HTMLTextAreaElement = undefined;
    #clickCb: KupManagerClickCb = null;
    #componentTriggered: boolean = false;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-combobox-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupComboboxEventPayload>;

    @Event({
        eventName: 'kup-combobox-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupComboboxEventPayload>;

    @Event({
        eventName: 'kup-combobox-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupComboboxEventPayload>;

    @Event({
        eventName: 'kup-combobox-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupComboboxEventPayload>;

    @Event({
        eventName: 'kup-combobox-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupComboboxEventPayload>;

    @Event({
        eventName: 'kup-combobox-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupComboboxIconClickEventPayload>;

    @Event({
        eventName: 'kup-combobox-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupComboboxEventPayload>;

    onKupBlur() {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
    }

    onKupChange(value: string) {
        let ret = this.#consistencyCheck(value, undefined, true);
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
            node: ret.node,
        });
    }

    onKupClick() {
        if (this.isSelect) {
            if (this.#textfieldWrapper.classList.contains('toggled')) {
                this.#closeList();
            } else {
                this.#openList();
                if (this.#componentTriggered == false) {
                    this.#componentTriggered = true;
                    this.kupClick.emit({
                        comp: this,
                        id: this.rootElement.id,
                        value: this.value,
                        inputValue: this.#textfieldEl.value,
                    });

                    this.kupIconClick.emit({
                        comp: this,
                        id: this.rootElement.id,
                        value: this.value,
                        inputValue: this.#textfieldEl.value,
                        open: this.#textfieldWrapper.classList.contains(
                            'toggled'
                        ),
                    });
                }
            }
        } else {
            if (this.#componentTriggered == false) {
                this.#componentTriggered = true;
                this.kupClick.emit({
                    comp: this,
                    id: this.rootElement.id,
                    value: this.value,
                    inputValue: this.#textfieldEl.value,
                });
            }
        }
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
    }

    onKupInput() {
        let ret = this.#consistencyCheck(
            this.#textfieldEl.value,
            undefined,
            false
        );
        this.#openList();
        this.kupInput.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
            node: ret.node,
        });
    }

    onKupIconClick() {
        if (this.#textfieldWrapper.classList.contains('toggled')) {
            this.#closeList();
        } else {
            this.#openList();
            if (this.#componentTriggered == false) {
                this.#componentTriggered = true;
                this.kupIconClick.emit({
                    comp: this,
                    id: this.rootElement.id,
                    value: this.value,
                    inputValue: this.#textfieldEl.value,
                    open: this.#textfieldWrapper.classList.contains('toggled'),
                });
            }
        }
    }

    onKupItemClick(e: CustomEvent<KupListEventPayload>) {
        this.onKupChange(e.detail.selected.id);
        this.#closeList();
        if (this.#textfieldEl) {
            this.#textfieldEl.focus();
        }
        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            node: e.detail.selected,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('initialValue')
    initialValueChange(newValue: string) {
        this.initialValueDecode = undefined;
        this.setValue(newValue, undefined);
    }

    @Watch('initialValueDecode')
    initialValueDecodeChange(newValue: string) {
        this.setValue(this.initialValue, newValue);
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.#isListOpened()) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#listEl.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#listEl.select().then(() => {
                        this.#closeList();
                        this.#textfieldEl.focus();
                    });
                    break;
                case 'Escape':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#closeList();
                    break;
            }
        } else {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#openList();
                    this.#listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#openList();
                    this.#listEl.focusPrevious();
                    break;
            }
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
        return getProps(this, KupComboboxProps, descriptions);
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
        this.#textfieldEl.focus();
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupComboboxProps, props);
    }
    /**
     * Sets the component's value.
     * @param {string} value - Value to be set.
     */
    @Method()
    async setValue(value: string, valueDecode?: string) {
        this.#consistencyCheck(value, valueDecode, true);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #openList() {
        if (this.#isListOpened()) {
            return;
        }
        // Manage list open while helperline is displayed
        const hasError = this.error?.trim().length > 0;
        const hasAlert = this.alert?.trim().length > 0;
        const topOffset = hasError || hasAlert ? -20 : 0;
        this.#textfieldWrapper.classList.add('toggled');
        this.#listEl.menuVisible = true;
        this.#listEl.filter = '';
        const elStyle = this.#listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.#textfieldWrapper.clientWidth + 'px';
        if (this.#kupManager.dynamicPosition.isRegistered(this.#listEl)) {
            this.#kupManager.dynamicPosition.changeAnchor(
                this.#listEl,
                this.#textfieldWrapper
            );
        } else {
            this.#kupManager.dynamicPosition.register(
                this.#listEl,
                this.#textfieldWrapper,
                topOffset,
                KupDynamicPositionPlacement.AUTO,
                true
            );
        }
        this.#kupManager.dynamicPosition.start(this.#listEl);
        if (!this.#clickCb) {
            this.#clickCb = {
                cb: () => {
                    this.#closeList();
                },
                el: this.#listEl,
            };
        }
        this.#kupManager.addClickCallback(this.#clickCb, true);
    }

    #closeList() {
        this.#textfieldWrapper.classList.remove('toggled');
        this.#listEl.menuVisible = false;
        this.#kupManager.dynamicPosition.stop(this.#listEl);
        this.#kupManager.removeClickCallback(this.#clickCb);
    }

    #isListOpened(): boolean {
        return this.#listEl.menuVisible == true;
    }

    #consistencyCheck(
        idIn: string,
        idInDecode: string,
        setValue: boolean
    ): ValueDisplayedValue {
        let ret = consistencyCheck(
            idIn,
            this.data['kup-list'],
            this.#listEl,
            this.selectMode,
            this.displayMode
        );

        if (ret.exists) {
            if (setValue) {
                this.value = ret.value;
                this.displayedValue = ret.displayedValue;
            }
            if (this.#listEl != null) {
                this.#listEl.filter = ret.value;
            }
        } else {
            this.value = idIn;
            if (setValue) {
                this.displayedValue = getIdOfItemByDisplayMode(
                    { id: idIn, value: idInDecode ?? idIn },
                    this.displayMode,
                    ' - '
                );
            } else {
                this.displayedValue = idIn;
            }
            if (this.#listEl != null) {
                this.#listEl.filter = ret.value;
            }
        }

        return ret;
    }

    #prepList() {
        return (
            <kup-list
                {...this.data['kup-list']}
                displayMode={this.displayMode}
                is-menu
                showFilter={
                    this.data['kup-list']?.data?.length >= 10 ? true : false
                }
                onkup-list-click={(e: CustomEvent<KupListEventPayload>) =>
                    this.onKupItemClick(e)
                }
                ref={(el) => (this.#listEl = el)}
            ></kup-list>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        this.#consistencyCheck(this.value, this.initialValueDecode, true);
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field');
            if (f) {
                this.#textfieldWrapper = f;
                this.#textfieldEl = f.querySelector('input');
                FTextFieldMDC(f);
            }
        }
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FTextFieldProps = {
            alert: this.alert,
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            disabled: this.disabled,
            error: this.error,
            icon: this.icon,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            isClearable: this.isClearable,
            label: this.label,
            leadingLabel: this.leadingLabel,
            readOnly: this.readOnly,
            isSelect: this.isSelect,
            sizing: this.sizing,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            value: this.value,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            showMarker: this.showMarker,
        };
        const fullHeight: boolean =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth: boolean =
            this.rootElement.classList.contains('kup-full-width');
        return (
            <Host
                class={`${fullHeight ? 'kup-full-height' : ''} ${
                    fullWidth ? 'kup-full-width' : ''
                }`}
                style={this.#elStyle}
            >
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId} style={this.#elStyle}>
                    <FTextField
                        {...props}
                        {...this.data['kup-text-field']}
                        disabled={this.disabled}
                        fullHeight={fullHeight}
                        fullWidth={fullWidth}
                        trailingIcon={true}
                        icon={
                            this.showDropDownIcon
                                ? KupThemeIconValues.DROPDOWN
                                : null
                        }
                        value={this.displayedValue}
                        onBlur={() => this.onKupBlur()}
                        onClick={() => this.onKupClick()}
                        onChange={(e: UIEvent & { target: HTMLInputElement }) =>
                            this.onKupChange(e.target.value)
                        }
                        onFocus={() => this.onKupFocus()}
                        onInput={() => this.onKupInput()}
                        onIconClick={() => this.onKupIconClick()}
                    ></FTextField>
                </div>
                {this.#prepList()}
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.#listEl) {
            this.#kupManager.dynamicPosition.unregister([this.#listEl]);
            this.#listEl.remove();
        }
        this.#kupManager.theme.unregister(this);
    }
}

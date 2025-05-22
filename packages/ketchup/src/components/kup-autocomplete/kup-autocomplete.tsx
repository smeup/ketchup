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
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import {
    GenericObject,
    KupComponent,
    KupComponentSizing,
} from '../../types/GenericTypes';
import {
    KupAutocompleteEventPayload,
    KupAutocompleteIconClickEventPayload,
    KupAutocompleteProps,
} from './kup-autocomplete-declarations';
import {
    ItemsDisplayMode,
    KupListEventPayload,
    ValueDisplayedValue,
} from '../kup-list/kup-list-declarations';
import {
    consistencyCheck,
    getIdOfItemByDisplayMode,
} from '../kup-list/kup-list-helper';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import { getSizeOfInputElement } from '../../utils/cell-utils';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';

@Component({
    tag: 'kup-autocomplete',
    styleUrl: 'kup-autocomplete.scss',
    shadow: true,
})
export class KupAutocomplete {
    /**
     * References the root HTML element of the component (<kup-autocomplete>).
     */
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
     * When true, the autocomplete fires the change event even when the value typed isn't included in the autocomplete list.
     * @default false
     */
    @Prop() allowInconsistentValues: boolean = true;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default undefined
     */
    @Prop({ mutable: true }) data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how to show the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".
     * @default ItemsDisplayMode.DESCRIPTION
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Sets how to show the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".
     */
    @Prop() listDisplayMode: ItemsDisplayMode = ItemsDisplayMode.CODE_AND_DESC;
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
     * Sets the initial value of the component.
     * @default ""
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
     * Input event emission delay in milliseconds.
     * @default 300
     */
    @Prop() inputDelay: number = 300;
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
     * The minimum number of chars to trigger the autocomplete
     * @default 3
     */
    @Prop() minimumChars: number = 3;
    /**
     * Sets the component to read only state, making it not editable, but interactable. Used in combobox component when it behaves as a select.
     * @default false
     */
    @Prop() readOnly: boolean = false;
    /**
     * Sets how to return the selected item value. Suported values: "CodeOnly", "DescOnly", "Both" or "CodeAndDesc" and "DescAndCode".
     * @default ItemsDisplayMode.CODE
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * When true, the items filter is managed server side, otherwise items filter is done client side.
     * @default false
     */
    @Prop({ reflect: true }) serverHandledFilter: boolean = true;
    /**
     * When true shows the drop-down icon, for open list.
     * @default true
     */
    @Prop() showDropDownIcon: boolean = true;
    /**
     * When true shows a small marker on the component.
     * @default false
     */
    @Prop() showMarker: boolean = false;
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
     * Set custom placeholder / watermark for text field, if not set the default one will be taken on component load.
     * @default 'Type code or description'
     */
    @Prop() placeholder: string = null;
    /**
     * Allows legacyLook in ACP
     * @default false
     */
    @Prop() legacyLook: boolean = false;
    /**
     * Sets the size of the input element
     */
    @Prop() size: number;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #elStyle: any = undefined;
    #listEl: HTMLKupListElement = null;
    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();
    #textfieldWrapper: HTMLElement = undefined;
    #textfieldEl: HTMLInputElement | HTMLTextAreaElement = undefined;
    #clickCb: KupManagerClickCb = null;
    #inputTimeout: number;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-autocomplete-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-submit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSubmit: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupAutocompleteIconClickEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupAutocompleteEventPayload>;

    onKupBlur() {
        if (!this.#isListOpened()) {
            this.kupBlur.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
                inputValue: this.#textfieldEl.value,
            });
        }
    }

    onKupChangeSubmit(value: string, eventToEmit: EventEmitter) {
        if (value) {
            const ret = this.#consistencyCheck(value, undefined, true);
            if (ret.exists || this.allowInconsistentValues) {
                eventToEmit.emit({
                    comp: this,
                    id: this.rootElement.id,
                    value: this.value,
                    inputValue: this.#textfieldEl.value,
                    node: ret.node,
                });
            }
        } else {
            this.value = '';
            this.displayedValue = '';
            eventToEmit.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
                inputValue: this.#textfieldEl.value,
                node: { value: '' },
            });
        }
    }

    onKupClick() {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
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
        const ret = this.#consistencyCheck(
            this.#textfieldEl.value,
            undefined,
            false
        );
        setTimeout(() => {
            this.#openList(false);
            if (this.#textfieldEl.value.length >= this.minimumChars) {
                this.kupInput.emit({
                    comp: this,
                    id: this.rootElement.id,
                    value: this.value,
                    inputValue: this.#textfieldEl.value,
                    node: ret.node,
                });
            }
        }, 400);
    }

    onKupIconClick() {
        if (this.#textfieldWrapper.classList.contains('toggled')) {
            this.#closeList();
        } else {
            if (this.showDropDownIcon) {
                this.#openList(true);
            }
        }
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
            open: this.#textfieldWrapper.classList.contains('toggled'),
        });
    }

    onKupItemClick(e: CustomEvent<KupListEventPayload>) {
        this.onKupChangeSubmit(e.detail.selected.id, this.kupChange);
        this.#closeList();
        if (this.#textfieldEl) {
            this.#textfieldEl.focus();
        }
        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
            node: e.detail.selected,
        });
    }

    onKupClearIconClick() {
        this.value = '';
        this.displayedValue = '';
        this.#textfieldEl.value = '';
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
            node: { value: '' },
        });
        this.#closeList();
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
                    this.#openList(true);
                    this.#listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#openList(false);
                    this.#listEl.focusPrevious();
                    break;
                case 'Enter':
                    this.onKupChangeSubmit(
                        this.#textfieldEl.value,
                        this.kupSubmit
                    );
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
        return getProps(this, KupAutocompleteProps, descriptions);
    }
    /**
     * Used to retrieve the value of the component.
     * @returns {Promise<string>} Value of the component.
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
        setProps(this, KupAutocompleteProps, props);
    }
    /**
     * Sets the value of the component.
     * @param {string} value - Value of the component.
     */
    @Method()
    async setValue(value: string, valueDecode?: string) {
        this.#consistencyCheck(value, valueDecode, true);
    }
    /**
     * Calls closeList method (acts like a reset).
     * @param {string} value - Value to be set.
     */
    @Method()
    async reset() {
        this.#closeList();
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #openList(forceOpen: boolean): boolean {
        if (
            forceOpen != true &&
            this.#textfieldEl.value.length < this.minimumChars
        ) {
            this.#closeList();
            return false;
        }

        if (forceOpen && !this.data['kup-list']?.data?.length) {
            this.kupIconClick.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
                inputValue: this.#textfieldEl.value,
                open: true,
            });
        }

        const hasError = this.error?.trim().length > 0;
        const hasAlert = this.alert?.trim().length > 0;
        const topOffset = hasError || hasAlert ? -20 : 0;
        this.#textfieldWrapper.classList.add('toggled');
        this.#listEl.menuVisible = true;
        this.#listEl.setFocusOnFirstEl();
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
        return true;
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
        eventShouldSetValue: boolean
    ): ValueDisplayedValue {
        if (idIn && idInDecode) {
            this.displayedValue = getIdOfItemByDisplayMode(
                { id: idIn, value: idInDecode },
                this.displayMode,
                ' - '
            );
        } else {
            const ret = consistencyCheck(
                idIn,
                this.data['kup-list'],
                this.#listEl,
                this.selectMode,
                this.displayMode
            );
            if (
                (ret.exists || this.allowInconsistentValues) &&
                eventShouldSetValue
            ) {
                this.value = ret.value;
                this.displayedValue = ret.displayedValue;
            } else {
                this.displayedValue = idIn;
            }

            if (this.#listEl != null && !this.serverHandledFilter) {
                this.#listEl.filter = ret.value;
            }
            return ret;
        }
    }

    #prepList() {
        return (
            <kup-list
                displayMode={this.listDisplayMode}
                {...this.data['kup-list']}
                isMenu={true}
                onkup-list-click={(e: CustomEvent<KupListEventPayload>) =>
                    this.onKupItemClick(e)
                }
                ref={(el) => (this.#listEl = el as any)}
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

        this.placeholder ||= this.#kupManager.language.translate(
            KupLanguageGeneric.TYPE_CODE_OR_DESCR
        );
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
            placeholder: this.placeholder,
            readOnly: this.readOnly,
            sizing: this.sizing,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            value: this.value,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            showMarker: this.showMarker,
            legacyLook: this.legacyLook,
            size: getSizeOfInputElement(this.data, this.displayMode, this.size),
            title: this.displayedValue ?? '',
        };
        const fullHeight =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth = this.rootElement.classList.contains('kup-full-width');

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
                        icon={
                            this.showDropDownIcon
                                ? KupThemeIconValues.SEARCH
                                : null
                        }
                        trailingIcon={true}
                        {...this.data['kup-text-field']}
                        disabled={this.disabled}
                        fullHeight={fullHeight}
                        fullWidth={fullWidth}
                        value={this.displayedValue}
                        onBlur={() => this.onKupBlur()}
                        onClick={() => this.onKupClick()}
                        onChange={(e: UIEvent & { target: HTMLInputElement }) =>
                            this.onKupChangeSubmit(
                                e.target.value,
                                this.kupChange
                            )
                        }
                        onFocus={() => this.onKupFocus()}
                        onInput={() => {
                            window.clearTimeout(this.#inputTimeout);
                            this.#inputTimeout = window.setTimeout(
                                () => this.onKupInput(),
                                this.inputDelay
                            );
                        }}
                        onIconClick={() => this.onKupIconClick()}
                        onClearIconClick={() => this.onKupClearIconClick()}
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

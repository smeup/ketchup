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
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
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
import { consistencyCheck } from '../kup-list/kup-list-helper';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';

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
     * When true, the autocomplete fires the change event even when the value typed isn't included in the autocomplete list.
     * @default false
     */
    @Prop() allowInconsistentValues: boolean = false;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
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
     * Sets how to show the selected item value. Suported values: "code", "description", "both".
     * @default ItemsDisplayMode.DESCRIPTION
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Sets the initial value of the component.
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * Input event emission delay in milliseconds.
     * @default 300
     */
    @Prop() inputDelay: number = 300;
    /**
     * The minimum number of chars to trigger the autocomplete
     * @default 1
     */
    @Prop() minimumChars: number = 1;
    /**
     * Sets how to return the selected item value. Suported values: "code", "description", "both".
     * @default ItemsDisplayMode.CODE
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * When true, the items filter is managed server side, otherwise items filter is done client side.
     * @default false
     */
    @Prop({ reflect: true }) serverHandledFilter: boolean = false;
    /**
     * When true shows the drop-down icon, for open list.
     * @default true
     */
    @Prop() showDropDownIcon: boolean = true;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #doConsistencyCheck: boolean = true;
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
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
    }

    onKupChange(value: string) {
        this.#doConsistencyCheck = true;
        const ret = this.#consistencyCheck(value, true);
        if (ret.exists || this.allowInconsistentValues) {
            this.kupChange.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
                inputValue: this.#textfieldEl.value,
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
        this.#doConsistencyCheck = true;
        this.#consistencyCheck(this.#textfieldEl.value, false);
        this.#openList(false);
        if (this.#textfieldEl.value.length >= this.minimumChars) {
            this.kupInput.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
                inputValue: this.#textfieldEl.value,
            });
        }
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
        this.onKupChange(e.detail.selected.id);
        this.#closeList();
        if (this.#textfieldEl) {
            this.#textfieldEl.focus();
        }
        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            inputValue: this.#textfieldEl.value,
        });
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
                    this.#openList(false);
                    this.#listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#openList(false);
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
    async setValue(value: string) {
        this.#doConsistencyCheck = true;
        this.#consistencyCheck(value, true);
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
        this.#textfieldWrapper.classList.add('toggled');
        this.#listEl.menuVisible = true;
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
                0,
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

    #consistencyCheck(idIn: string, setValue: boolean): ValueDisplayedValue {
        if (!this.#doConsistencyCheck) {
            return;
        }
        this.#doConsistencyCheck = false;
        const ret = consistencyCheck(
            idIn,
            this.data['kup-list'],
            this.#listEl,
            this.selectMode,
            this.displayMode
        );
        if (ret.exists || this.allowInconsistentValues) {
            if (setValue) {
                this.value = ret.value;
                this.displayedValue = ret.displayedValue;
            }
            if (this.#listEl != null && !this.serverHandledFilter) {
                this.#listEl.filter = ret.value;
            }
        } else {
            this.displayedValue = idIn;
            if (this.#listEl != null && !this.serverHandledFilter) {
                this.#listEl.filter = ret.value;
            }
        }

        return ret;
    }

    #prepList() {
        return (
            <kup-list
                displayMode={this.displayMode}
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
        this.#doConsistencyCheck = true;
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        this.#consistencyCheck(this.value, true);
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
                        icon={
                            this.showDropDownIcon
                                ? KupThemeIconValues.DROPDOWN
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
                            this.onKupChange(e.target.value)
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

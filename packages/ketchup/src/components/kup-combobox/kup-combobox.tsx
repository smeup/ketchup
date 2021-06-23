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
} from '@stencil/core';

import {
    kupDynamicPositionAttribute,
    KupDynamicPositionElement,
} from '../../utils/kup-dynamic-position/kup-dynamic-position-declarations';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import {
    ItemsDisplayMode,
    consistencyCheck,
} from '../kup-list/kup-list-declarations';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupComboboxProps } from './kup-combobox-declarations';

@Component({
    tag: 'kup-combobox',
    styleUrl: 'kup-combobox.scss',
    shadow: true,
})
export class KupCombobox {
    @Element() rootElement: HTMLElement;
    @State() displayedValue: string = undefined;
    @State() value: string = '';

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
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
     * Sets how to show the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';
    /**
     * Lets the combobox behave as a select element.
     */
    @Prop() isSelect: boolean = false;
    /**
     * Sets how to return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private elStyle: any = undefined;
    private listEl: any = undefined;
    private textfieldWrapper: HTMLElement = undefined;
    private textfieldEl: HTMLInputElement | HTMLTextAreaElement = undefined;

    /**
     * Event example.
     */

    @Event({
        eventName: 'kupComboboxBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: string;
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        id: string;
        value: any;
    }>;

    @Event({
        eventName: 'kupComboboxTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        value: any;
    }>;

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        if (this.isListOpened()) {
            if (e.key === 'Escape') {
                this.closeList();
            }
            if (e.key === 'Enter') {
                this.closeList();
            }
            if (e.key === 'ArrowDown') {
                this.listEl.arrowDown = true;
            }
            if (e.key === 'ArrowUp') {
                this.listEl.arrowUp = true;
            }
        }
    }

    //---- Methods ----

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    @Method()
    async setFocus() {
        this.textfieldEl.focus();
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        this.consistencyCheck(undefined, value);
    }

    onKupBlur() {
        this.closeList();
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        this.consistencyCheck(null, e.target.value);
        this.kupChange.emit({
            value: this.value,
        });
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
            props = KupComboboxProps;
        } else {
            for (const key in KupComboboxProps) {
                if (
                    Object.prototype.hasOwnProperty.call(KupComboboxProps, key)
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

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;

        if (this.isSelect) {
            if (this.textfieldEl.classList.contains('toggled')) {
                this.closeList();
            } else {
                this.openList();
            }
        }

        this.kupClick.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupInput(e: UIEvent & { target: HTMLInputElement }) {
        this.consistencyCheck(null, e.target.value);
        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.textfieldWrapper.classList.contains('toggled')) {
            this.closeList();
        } else {
            this.openList();
        }
        this.kupIconClick.emit({
            value: target.value,
        });
    }

    onKupItemClick(e: CustomEvent) {
        this.consistencyCheck(e);
        this.closeList();

        this.kupChange.emit({
            value: this.value,
        });

        this.kupItemClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    openList() {
        this.textfieldWrapper.classList.add('toggled');
        this.listEl.menuVisible = true;
        this.kupManager.dynamicPosition.start(
            this.listEl as KupDynamicPositionElement
        );
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textfieldWrapper.clientWidth + 'px';
    }

    closeList() {
        this.textfieldWrapper.classList.remove('toggled');
        this.listEl.menuVisible = false;
        this.kupManager.dynamicPosition.stop(
            this.listEl as KupDynamicPositionElement
        );
    }

    isListOpened(): boolean {
        return this.listEl.menuVisible == true;
    }

    consistencyCheck(e?: CustomEvent, valueIn?: string) {
        let ret = consistencyCheck(
            valueIn,
            this.data['kup-list'],
            this.listEl,
            this.selectMode,
            this.displayMode,
            e
        );
        this.value = ret.value;
        this.displayedValue = ret.displayedValue;
    }

    prepList() {
        return (
            <kup-list
                {...this.data['kup-list']}
                displayMode={this.displayMode}
                is-menu
                onKupListClick={(e) => this.onKupItemClick(e)}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );
    }

    private setEvents() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field--wrapper');
            if (f) {
                const inputEl: HTMLInputElement | HTMLTextAreaElement =
                    root.querySelector('.mdc-text-field__input');
                const icon: HTMLElement = root.querySelector(
                    '.mdc-text-field__icon'
                );
                if (inputEl) {
                    inputEl.onchange = (
                        e: UIEvent & { target: HTMLInputElement }
                    ) => this.onKupChange(e);
                    inputEl.onclick = (
                        e: MouseEvent & { target: HTMLInputElement }
                    ) => this.onKupClick(e);
                    inputEl.onfocus = (
                        e: FocusEvent & { target: HTMLInputElement }
                    ) => this.onKupFocus(e);
                    inputEl.oninput = (
                        e: UIEvent & { target: HTMLInputElement }
                    ) => this.onKupInput(e);
                    this.textfieldWrapper = inputEl.closest(
                        '.f-text-field--wrapper'
                    );
                    this.textfieldEl = inputEl;
                }
                if (icon) {
                    icon.onclick = (
                        e: MouseEvent & { target: HTMLInputElement }
                    ) => this.onKupIconClick(e);
                }
                FTextFieldMDC(f);
            }
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
                'kup-text-field': {},
            };
        }
    }

    componentDidLoad() {
        this.consistencyCheck(undefined, this.value);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.setEvents();
        this.kupManager.dynamicPosition.register(
            this.listEl,
            this.textfieldWrapper
        );
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const fullHeight: boolean =
            this.rootElement.classList.contains('kup-full-height');
        const fullWidth: boolean =
            this.rootElement.classList.contains('kup-full-width');

        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host
                class={`${fullHeight ? 'kup-full-height' : ''} ${
                    fullWidth ? 'kup-full-width' : ''
                }`}
                onBlur={() => this.onKupBlur()}
                style={this.elStyle}
            >
                {customStyle ? <style>{customStyle}</style> : null}
                <div id="kup-component" style={this.elStyle}>
                    <FTextField
                        {...this.data['kup-text-field']}
                        disabled={this.disabled}
                        fullHeight={fullHeight}
                        fullWidth={fullWidth}
                        icon="--kup-expanded-icon"
                        trailingIcon={true}
                        value={this.displayedValue}
                    />
                    {this.prepList()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
        const dynamicPositionElements: NodeListOf<KupDynamicPositionElement> =
            this.rootElement.shadowRoot.querySelectorAll(
                '[' + kupDynamicPositionAttribute + ']'
            );
        if (dynamicPositionElements.length > 0) {
            this.kupManager.dynamicPosition.unregister(
                Array.prototype.slice.call(dynamicPositionElements)
            );
        }
    }
}

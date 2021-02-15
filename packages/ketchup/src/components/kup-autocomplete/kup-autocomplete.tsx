import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Listen,
    Method,
    Watch,
} from '@stencil/core';

import { MDCTextField } from '@material/textfield';
import { MDCFormField } from '@material/form-field';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import {
    ItemsDisplayMode,
    consistencyCheck,
} from '../kup-list/kup-list-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';

@Component({
    tag: 'kup-autocomplete',
    styleUrl: 'kup-autocomplete.scss',
    shadow: true,
})
export class KupAutocomplete {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() displayedValue: string = undefined;
    @State() value: string = '';

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Props of the sub-components.
     */
    @Prop() data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how the show the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Sets the initial value of the component.
     */
    @Prop() initialValue: string = '';
    /**
     * The minimum number of chars to trigger the autocomplete
     */
    @Prop() minimumChars: number = 1;
    /**
     * Sets how the return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;

    private doConsistencyCheck: boolean = true;
    private elStyle: any = undefined;
    private listEl: any = undefined;
    private textfieldWrapper: HTMLElement = undefined;
    private textfieldEl: HTMLInputElement | HTMLTextAreaElement = undefined;

    /**
     * Event example.
     */

    @Event({
        eventName: 'kupAutocompleteBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupAutocompleteFilterChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFilterChanged: EventEmitter<{
        filter: string;
        matchesMinimumCharsRequired: boolean;
    }>;

    @Event({
        eventName: 'kupAutocompleteTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        value: any;
    }>;

    /**
     * Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.
     */
    @Prop() callBackOnFilterUpdate: (detail: {
        filter: string;
        matchesMinimumCharsRequired: boolean;
        el: EventTarget;
    }) => Promise<any[]> | undefined = undefined;

    /**
     * When true, it will emit events to inform the listener of the change of the current filter value.
     * Also the component builtin filter will be disabled.
     */
    @Prop({ reflect: true }) serverHandledFilter: boolean = false;

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
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async setFocus() {
        this.textfieldEl.focus();
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        this.doConsistencyCheck = true;
        this.consistencyCheck(undefined, value);
    }

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.closeList();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        this.doConsistencyCheck = true;
        this.consistencyCheck(undefined, e.target.value);
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
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
        this.doConsistencyCheck = true;
        this.consistencyCheck(undefined, e.target.value);
        if (this.openList(false)) {
            this.handleFilterChange(this.displayedValue, e.target);
        }

        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.textfieldWrapper.classList.contains('toggled')) {
            this.closeList();
        } else {
            this.openList(true);
        }
        this.kupIconClick.emit({
            value: target.value,
        });
    }

    onKupItemClick(e: CustomEvent) {
        this.doConsistencyCheck = true;
        this.consistencyCheck(e);
        this.closeList();

        this.kupChange.emit({
            value: this.value,
        });

        this.kupItemClick.emit({
            value: this.value,
        });
    }

    private handleFilterChange(newFilter: string, eventTarget: EventTarget) {
        let detail = {
            filter: newFilter,
            matchesMinimumCharsRequired:
                newFilter && newFilter.length >= this.minimumChars,
            el: eventTarget,
        };
        if (this.serverHandledFilter && this.callBackOnFilterUpdate) {
            this.callBackOnFilterUpdate(detail)
                .then((items) => {
                    this.data['kup-list']['data'] = [...items];
                    this.kupFilterChanged.emit(detail);
                })
                .catch((err) => {
                    logMessage(this, 'Executing callback error', 'error');
                    logMessage(this, err, 'error');
                });
        } else {
            this.listEl.resetFilter(newFilter);
            this.kupFilterChanged.emit(detail);
        }
    }

    private openList(forceOpen: boolean): boolean {
        if (forceOpen != true && this.value.length < this.minimumChars) {
            return false;
        }
        this.textfieldWrapper.classList.add('toggled');
        this.listEl.menuVisible = true;
        this.listEl.classList.add('dynamic-position-active');
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textfieldWrapper.clientWidth + 'px';
        return true;
    }

    private closeList() {
        this.textfieldWrapper.classList.remove('toggled');
        this.listEl.menuVisible = false;
        this.listEl.classList.remove('dynamic-position-active');
    }

    private isListOpened(): boolean {
        return this.listEl.menuVisible == true;
    }

    private consistencyCheck(e?: CustomEvent, valueIn?: string) {
        if (!this.doConsistencyCheck) {
            return;
        }
        this.doConsistencyCheck = false;
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

        if (this.listEl != null) {
            this.listEl.resetFilter(this.displayedValue);
        }
    }

    private prepList() {
        return (
            <kup-list
                {...this.data['kup-list']}
                displayMode={this.displayMode}
                isMenu={true}
                onKupListClick={(e) => this.onKupItemClick(e)}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );
    }

    private setEvents(root: ShadowRoot) {
        let inputEl:
            | HTMLInputElement
            | HTMLTextAreaElement = root.querySelector(
            '.mdc-text-field__input'
        );
        if (inputEl) {
            inputEl.onblur = (e: FocusEvent & { target: HTMLInputElement }) =>
                this.onKupBlur(e);
            inputEl.onchange = (e: UIEvent & { target: HTMLInputElement }) =>
                this.onKupChange(e);
            inputEl.onclick = (e: MouseEvent & { target: HTMLInputElement }) =>
                this.onKupClick(e);
            inputEl.onfocus = (e: FocusEvent & { target: HTMLInputElement }) =>
                this.onKupFocus(e);
            inputEl.oninput = (e: UIEvent & { target: HTMLInputElement }) =>
                this.onKupInput(e);
            this.textfieldWrapper = inputEl.closest('.f-text-field--wrapper');
            this.textfieldEl = inputEl;
        }
        let icon: HTMLElement = root.querySelector('.mdc-text-field__icon');
        if (icon) {
            icon.onclick = (e: MouseEvent & { target: HTMLInputElement }) =>
                this.onKupIconClick(e);
        }
    }

    private setMDC(root: ShadowRoot) {
        const component = new MDCTextField(
            root.querySelector('.mdc-text-field')
        );
        if (root.querySelector('.mdc-form-field')) {
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field')
            );
            formField.input = component;
        }
        if (root.querySelector('.mdc-text-field-helper-text')) {
            new MDCTextFieldHelperText(
                document.querySelector('.mdc-text-field-helper-text')
            );
        }
        if (root.querySelector('.mdc-text-field-character-counter')) {
            new MDCTextFieldCharacterCounter(
                document.querySelector('.mdc-text-field-character-counter')
            );
        }
        if (root.querySelector('.mdc-text-field-icon')) {
            new MDCTextFieldIcon(
                document.querySelector('.mdc-text-field-icon')
            );
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.doConsistencyCheck = true;
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
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            this.setEvents(root);
            this.setMDC(root);
        }
        positionRecalc(this.listEl, this.textfieldWrapper);
        logRender(this, true);
    }

    render() {
        let hostClass: Record<string, boolean> = {};

        if (
            this.data &&
            this.data['kup-text-field'] &&
            this.data['kup-text-field']['className'] &&
            this.data['kup-text-field']['className'].indexOf('full-height') > -1
        ) {
            hostClass['full-height'] = true;
        }

        if (
            this.data &&
            this.data['kup-text-field'] &&
            this.data['kup-text-field']['fullWidth']
        ) {
            hostClass['full-width'] = true;
        }

        return (
            <Host
                class={hostClass}
                onBlur={(e: any) => this.onKupBlur(e)}
                style={this.elStyle}
            >
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={this.elStyle}>
                    <FTextField
                        {...this.data['kup-text-field']}
                        disabled={this.disabled}
                        icon="--kup-expanded-icon"
                        trailingIcon={true}
                        value={this.displayedValue}
                    />
                    {this.prepList()}
                </div>
            </Host>
        );
    }
}

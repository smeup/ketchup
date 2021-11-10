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
import { KupDebugCategory } from '../../utils/kup-debug/kup-debug-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupAutocompleteEventPayload,
    kupAutocompleteFilterChangedEventPayload,
    KupAutocompleteProps,
} from './kup-autocomplete-declarations';
import { ItemsDisplayMode } from '../kup-list/kup-list-declarations';
import { consistencyCheck } from '../kup-list/kup-list-helper';
import { KupThemeIconValues } from '../../utils/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

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
     * Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.
     */
    @Prop() callBackOnFilterUpdate: (detail: {
        filter: string;
        matchesMinimumCharsRequired: boolean;
        el: EventTarget;
    }) => Promise<any[]> | undefined = undefined;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     */
    @Prop({ mutable: true }) data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how to show the selected item value. Suported values: "code", "description", "both".
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
     * Sets how to return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * When true, it will emit events to inform the listener of the change of the current filter value.
     * Also the component builtin filter will be disabled.
     */
    @Prop({ reflect: true }) serverHandledFilter: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private doConsistencyCheck: boolean = true;
    private elStyle: any = undefined;
    private listEl: any = undefined;
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private textfieldWrapper: HTMLElement = undefined;
    private textfieldEl: HTMLInputElement | HTMLTextAreaElement = undefined;

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
    kupIconClick: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupAutocompleteEventPayload>;

    @Event({
        eventName: 'kup-autocomplete-filterchanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFilterChanged: EventEmitter<kupAutocompleteFilterChangedEventPayload>;

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        this.doConsistencyCheck = true;
        this.consistencyCheck(undefined, e.target.value);
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupClick(e: MouseEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
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
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupIconClick(event: MouseEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.textfieldWrapper.classList.contains('toggled')) {
            this.closeList();
        } else {
            this.openList(true);
        }
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupItemClick(e: CustomEvent) {
        this.doConsistencyCheck = true;
        this.consistencyCheck(e);
        this.closeList();
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
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.isListOpened()) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.select().then(() => {
                        this.closeList();
                        this.textfieldEl.focus();
                    });
                    break;
                case 'Escape':
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeList();
                    break;
            }
        } else {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.openList(false);
                    this.listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.openList(false);
                    this.listEl.focusPrevious();
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
        this.textfieldEl.focus();
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
        this.value = value;
        this.doConsistencyCheck = true;
        this.consistencyCheck(undefined, value);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private handleFilterChange(newFilter: string, eventTarget: EventTarget) {
        let detail = {
            comp: this,
            id: this.rootElement.id,
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
                    this.kupManager.debug.logMessage(
                        this,
                        'Executing callback error',
                        KupDebugCategory.ERROR
                    );
                    this.kupManager.debug.logMessage(
                        this,
                        err,
                        KupDebugCategory.ERROR
                    );
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
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = this.textfieldWrapper.clientWidth + 'px';
        this.listEl.focus();
        return true;
    }

    private closeList() {
        this.textfieldWrapper.classList.remove('toggled');
        this.listEl.menuVisible = false;
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
                onBlur={() => this.closeList()}
                onkup-list-click={(e) => this.onKupItemClick(e)}
                ref={(el) => (this.listEl = el as any)}
                tabindex={-1}
            ></kup-list>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
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
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field--wrapper');
            if (f) {
                this.textfieldWrapper = f;
                this.textfieldEl = f.querySelector('input');
                FTextFieldMDC(f);
            }
        }
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
                style={this.elStyle}
            >
                {customStyle ? <style>{customStyle}</style> : null}
                <div id={componentWrapperId} style={this.elStyle}>
                    <FTextField
                        {...this.data['kup-text-field']}
                        disabled={this.disabled}
                        fullHeight={fullHeight}
                        fullWidth={fullWidth}
                        icon={KupThemeIconValues.DROPDOWN}
                        trailingIcon={true}
                        value={this.displayedValue}
                        onBlur={(e: any) => this.onKupBlur(e)}
                        onClick={(
                            e: MouseEvent & { target: HTMLInputElement }
                        ) => this.onKupClick(e)}
                        onChange={(e: UIEvent & { target: HTMLInputElement }) =>
                            this.onKupChange(e)
                        }
                        onFocus={(
                            e: FocusEvent & { target: HTMLInputElement }
                        ) => this.onKupFocus(e)}
                        onInput={(e: UIEvent & { target: HTMLInputElement }) =>
                            this.onKupInput(e)
                        }
                        onIconClick={(
                            e: MouseEvent & { target: HTMLInputElement }
                        ) => this.onKupIconClick(e)}
                    >
                        {this.prepList()}
                    </FTextField>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

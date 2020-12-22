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

import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import {
    ItemsDisplayMode,
    consistencyCheck,
} from '../kup-list/kup-list-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

@Component({
    tag: 'kup-autocomplete',
    styleUrl: 'kup-autocomplete.scss',
    shadow: true,
})
export class KupAutocomplete {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() value: string = '';

    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Props of the sub-components (date input text field).
     */
    @Prop() data: Object = {};
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * The minimum number of chars to trigger the autocomplete
     */
    @Prop() minimumChars: number = 1;
    /**
     * Sets how the return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * Sets how the show the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;

    private textfieldEl: any = undefined;
    private listEl: any = undefined;
    private displayedValue: string = undefined;
    private elStyle: any = undefined;

    private doConsistencyCheck = true;

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

    @Watch('data')
    watchInitialValue() {
        this.value = this.getTextFieldData().initialValue;
        if (this.initialValue != '') {
            this.value = this.initialValue;
        }
    }

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async setFocus() {
        this.textfieldEl.setFocus();
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        if (this.textfieldEl !== undefined) {
            this.textfieldEl.setValue(this.value);
        }
    }

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    private onTextFieldRendered({ detail }, doIt: boolean) {
        if (detail.field != null && doIt == true) {
            detail.field.setFocus();
        }
    }

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.closeList();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: CustomEvent) {
        //this.value = e.detail.value;
        this.doConsistencyCheck = true;
        this.consistencyCheck(null, e.detail.value);
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

    onKupInput(e: CustomEvent) {
        //this.value = e.detail.value;
        this.doConsistencyCheck = true;
        this.consistencyCheck(null, e.detail.value);
        if (this.openList(false)) {
            this.handleFilterChange(this.displayedValue, e.target);
        }

        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.textfieldEl.classList.contains('toggled')) {
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

    /*
    onKupFilterChanged(e: CustomEvent) {
        this.handleFilterChange(e.detail.value, e.target);
    }*/

    handleFilterChange(newFilter: string, eventTarget: EventTarget) {
        let detail = {
            filter: newFilter,
            matchesMinimumCharsRequired:
                newFilter && newFilter.length >= this.minimumChars,
            el: eventTarget,
        };
        if (this.serverHandledFilter && this.callBackOnFilterUpdate) {
            this.callBackOnFilterUpdate(detail)
                .then((items) => {
                    this.getListData()['data'] = [...items];
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

    onKupTextFieldSubmit(event: CustomEvent) {
        this.kupChange.emit({
            value: event.detail.value,
        });
        this.kupTextFieldSubmit.emit({
            value: event.detail.value,
        });
    }

    getTextFieldData() {
        if (this.data['text-field'] == null) {
            this.data['text-field'] = {};
        }
        return this.data['text-field'];
    }

    getListData() {
        if (this.data['list'] == null) {
            this.data['list'] = {};
        }
        return this.data['list'];
    }

    private setListData(listData) {
        this.data['list'] = listData;
    }

    openList(forceOpen: boolean): boolean {
        if (forceOpen != true && this.value.length < this.minimumChars) {
            return false;
        }
        let textFieldWidth = this.textfieldEl.shadowRoot.querySelector(
            '.mdc-text-field'
        ).clientWidth;
        this.textfieldEl.classList.add('toggled');
        if (this.textfieldEl['icon']) {
            this.textfieldEl['icon'] = 'arrow_drop_up';
        }
        this.textfieldEl.emitSubmitEventOnEnter = false;
        this.listEl.menuVisible = true;
        this.listEl.classList.add('dynamic-position-active');
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = textFieldWidth + 'px';
        return true;
    }

    closeList() {
        this.textfieldEl.classList.remove('toggled');
        if (this.textfieldEl['icon']) {
            this.textfieldEl['icon'] = 'arrow_drop_down';
        }
        this.textfieldEl.emitSubmitEventOnEnter = true;
        this.listEl.menuVisible = false;
        this.listEl.classList.remove('dynamic-position-active');
    }

    isListOpened(): boolean {
        return this.listEl.menuVisible == true;
    }

    consistencyCheck(e?: CustomEvent, valueIn?: string) {
        if (this.doConsistencyCheck == false) {
            return;
        }
        this.doConsistencyCheck = false;
        let ret = consistencyCheck(
            valueIn,
            this.getListData(),
            this.textfieldEl,
            this.listEl,
            this.selectMode,
            this.displayMode,
            e
        );
        this.value = ret.value;
        this.displayedValue = ret.displayedValue;

        if (this.listEl != null) {
            //this.listEl.resetFilter(valueIn);
            this.listEl.resetFilter(this.displayedValue);
        }
    }

    prepTextfield() {
        let textfieldData = this.getTextFieldData();
        if (textfieldData['fullWidth']) {
            this.elStyle = {
                ...this.elStyle,
                width: '100%',
            };
        }

        if (textfieldData['fullHeight']) {
            this.elStyle = {
                ...this.elStyle,
                height: '100%',
            };
        }
        textfieldData['initialValue'] = this.displayedValue;
        textfieldData['disabled'] = this.disabled;

        let comp: HTMLElement = (
            <kup-text-field
                {...textfieldData}
                style={this.elStyle}
                id={this.rootElement.id + '_text-field'}
                /* onKupTextFieldBlur={(e: any) => this.onKupBlur(e)} */
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                onKupTextFieldSubmit={(e: any) => this.onKupTextFieldSubmit(e)}
                onKupTextFieldRendered={(event) => {
                    this.onTextFieldRendered(event, true);
                }}
                ref={(el) => (this.textfieldEl = el as any)}
            ></kup-text-field>
        );

        return comp;
    }

    prepList() {
        let comp: HTMLElement = (
            <kup-list
                {...this.getListData()}
                displayMode={this.displayMode}
                is-menu
                onKupListClick={(e) => this.onKupItemClick(e)}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );

        return comp;
    }

    //---- Lifecycle hooks ----
    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.watchInitialValue();
        this.doConsistencyCheck = true;
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        this.consistencyCheck();
        logRender(this, false);
    }

    componentDidRender() {
        positionRecalc(this.listEl, this.textfieldEl);
        logRender(this, true);
    }

    render() {
        let textfieldEl = this.prepTextfield();
        let listEl = this.prepList();

        return (
            <Host onBlur={(e: any) => this.onKupBlur(e)} style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={this.elStyle}>
                    {textfieldEl}
                    {listEl}
                </div>
            </Host>
        );
    }
}

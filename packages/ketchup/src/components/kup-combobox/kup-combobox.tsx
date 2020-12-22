import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Listen,
    Method,
    Watch,
} from '@stencil/core';

import { positionRecalc } from '../../utils/recalc-position';
import {
    ItemsDisplayMode,
    consistencyCheck,
} from '../kup-list/kup-list-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';

@Component({
    tag: 'kup-combobox',
    styleUrl: 'kup-combobox.scss',
    shadow: true,
})
export class KupCombobox {
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
     * Lets the combobox behave as a select element.
     */
    @Prop() isSelect: boolean = false;
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

    onKupBlur() {
        this.closeList();
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange(e: CustomEvent) {
        //this.value = e.detail.value;
        this.consistencyCheck(null, e.detail.value);
        this.kupChange.emit({
            value: this.value,
        });
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
        this.consistencyCheck(null, e.detail.value);
        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;

        if (this.textfieldEl.classList.contains('toggled')) {
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
            value: this.value,
        });
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

    openList() {
        let textFieldWidth = this.textfieldEl.shadowRoot.querySelector(
            '.mdc-text-field'
        ).clientWidth;
        this.textfieldEl.classList.add('toggled');
        this.textfieldEl['icon'] = 'arrow_drop_up';
        this.textfieldEl.emitSubmitEventOnEnter = false;
        this.listEl.menuVisible = true;
        this.listEl.classList.add('dynamic-position-active');
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = textFieldWidth + 'px';
    }

    closeList() {
        this.textfieldEl.classList.remove('toggled');
        this.textfieldEl['icon'] = 'arrow_drop_down';
        this.textfieldEl.emitSubmitEventOnEnter = true;
        this.listEl.menuVisible = false;
        this.listEl.classList.remove('dynamic-position-active');
    }

    isListOpened(): boolean {
        return this.listEl.menuVisible == true;
    }

    consistencyCheck(e?: CustomEvent, valueIn?: string) {
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

        if (!textfieldData['icon']) {
            textfieldData['icon'] = 'arrow_drop_down';
        }

        if (this.isSelect == true) {
            textfieldData['readOnly'] = true;
        }
        textfieldData['initialValue'] = this.value;
        textfieldData['disabled'] = this.disabled;

        let comp: HTMLElement = (
            <kup-text-field
                {...textfieldData}
                style={this.elStyle}
                initial-value={this.displayedValue}
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
            <Host onBlur={() => this.onKupBlur()} style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={this.elStyle}>
                    {textfieldEl}
                    {listEl}
                </div>
            </Host>
        );
    }
}

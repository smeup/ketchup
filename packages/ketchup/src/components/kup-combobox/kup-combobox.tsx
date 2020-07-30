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
} from '@stencil/core';

import { positionRecalc } from '../../utils/recalc-position';
import {
    ItemsDisplayMode,
    consistencyCheck,
} from '../kup-list/kup-list-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theming';

@Component({
    tag: 'kup-combobox',
    styleUrl: 'kup-combobox.scss',
    shadow: true,
})
export class KupCombobox {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Lets the combobox behave as a select element.
     */
    @Prop({ reflect: true }) isSelect: boolean = false;
    /**
     * Props of the list.
     */
    @Prop() listData: Object = {};
    /**
     * Sets how the return the elected item value. Suported values: "code", "description", "both".
     */
    @Prop({ reflect: true }) selectMode: ItemsDisplayMode =
        ItemsDisplayMode.DESCRIPTION;
    /**
     * Props of the text field.
     */
    @Prop() textfieldData: Object = {};

    private textfieldEl: any = undefined;
    private listEl: any = undefined;
    private value: string = undefined;
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

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.closeList();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: CustomEvent) {
        this.value = e.detail.value;

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
        this.value = e.detail.value;

        this.kupChange.emit({
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

    onKupItemClick() {
        this.consistencyCheck();
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

    consistencyCheck() {
        this.value = consistencyCheck(
            this.value,
            this.listData,
            this.textfieldEl,
            this.selectMode
        );
    }

    prepTextfield() {
        if (this.textfieldData['fullWidth']) {
            this.elStyle = {
                ...this.elStyle,
                width: '100%',
            };
        }

        if (this.textfieldData['fullHeight']) {
            this.elStyle = {
                ...this.elStyle,
                height: '100%',
            };
        }

        if (!this.textfieldData['icon']) {
            this.textfieldData['icon'] = 'arrow_drop_down';
        }

        if (this.isSelect == true) {
            this.textfieldData['readOnly'] = true;
        }
        let comp: HTMLElement = (
            <kup-text-field
                {...this.textfieldData}
                style={this.elStyle}
                initial-value={this.value}
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                onKupTextFieldSubmit={(e: any) => this.onKupTextFieldSubmit(e)}
                ref={(el) => (this.textfieldEl = el as any)}
            ></kup-text-field>
        );

        return comp;
    }

    prepList() {
        let comp: HTMLElement = (
            <kup-list
                {...this.listData}
                is-menu
                onKupListClick={() => this.onKupItemClick()}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );

        return comp;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    componentDidRender() {
        positionRecalc(this.listEl, this.textfieldEl);
    }

    render() {
        this.consistencyCheck();
        let textfieldEl = this.prepTextfield();
        let listEl = this.prepList();

        return (
            <Host
                class="handles-custom-style"
                onBlur={(e: any) => this.onKupBlur(e)}
                style={this.elStyle}
            >
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" style={this.elStyle}>
                    {textfieldEl}
                    {listEl}
                </div>
            </Host>
        );
    }
}

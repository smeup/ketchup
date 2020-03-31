import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';

import { errorLogging } from '../../utils/error-logging';
import { positionRecalc } from '../../utils/recalc-position';

@Component({
    tag: 'kup-autocomplete',
    styleUrl: 'kup-autocomplete.scss',
    shadow: true,
})
export class KupAutocomplete {
    @Element() rootElement: HTMLElement;

    @Prop({ reflect: true }) fieldId: string = 'autocomplete-id';
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Sets if the autocomplete should be enabled or not
     */
    @Prop({ reflect: true }) disabled: boolean = false;

    /**
     * The minimum number of chars to trigger the autocomplete
     */
    @Prop({ reflect: true }) minimumChars: number = 3;

    /**
     * Props of the list.
     */
    @Prop() listData: Object = {};

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
        eventName: 'kupFilterChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFilterChanged: EventEmitter<{
        filter: string;
        matchesMinimumCharsRequired: boolean;
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

    /**
     * --- Methods ----
     */

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.log('onKupBlur', '');
        this.closeList();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: CustomEvent) {
        this.log('onKupChange', 'e.detail.value: ' + e.detail.value);
        this.value = e.detail.value;
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        this.log('onKupClick', '');
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        this.log('onKupFocus', '');
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupInput(e: CustomEvent) {
        this.log('onKupInput', '');
        this.value = e.detail.value;

        if (this.openList()) {
            this.handleFilterChange(this.value, e.target);
        }

        this.kupInput.emit({
            value: this.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        this.log('onKupIconClick', '');
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
        this.log('onKupItemClick', '');
        this.consistencyCheck();
        this.closeList();

        this.kupChange.emit({
            value: this.value,
        });

        this.kupItemClick.emit({
            value: this.value,
        });
    }

    handleFilterChange(newFilter: string, eventTarget: EventTarget) {
        this.log('handleFilterChange', 'newFilter: ' + newFilter);
        let detail = {
            filter: newFilter,
            matchesMinimumCharsRequired:
                newFilter && newFilter.length >= this.minimumChars,
            el: eventTarget,
        };
        if (this.serverHandledFilter && this.callBackOnFilterUpdate) {
            this.log(
                'handleFilterChange',
                'Executing callback on filter update'
            );
            this.callBackOnFilterUpdate(detail)
                .then((items) => {
                    this.listData['data'] = [...items];
                    this.kupFilterChanged.emit(detail);
                })
                .catch((err) => {
                    errorLogging('kup-list', 'Executing callback error');
                    errorLogging('kup-list', err);
                });
        } else {
            this.listEl.filter = newFilter;
            this.kupFilterChanged.emit(detail);
        }
    }

    openList(): boolean {
        if (this.value.length < this.minimumChars) {
            return false;
        }
        let textFieldWidth = this.textfieldEl.shadowRoot.querySelector(
            '.mdc-text-field'
        ).clientWidth;
        this.textfieldEl.classList.add('toggled');
        if (this.textfieldEl['icon']) {
            this.textfieldEl['icon'] = 'arrow_drop_up';
        }
        this.listEl.classList.add('visible');
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
        this.listEl.classList.remove('visible');
    }

    consistencyCheck() {
        this.log(
            'consistencyCheck',
            'data: ' + JSON.stringify(this.listData['data'])
        );
        var firstSelectedFound = false;

        if (this.listData['data']) {
            for (let i = 0; i < this.listData['data'].length; i++) {
                if (this.listData['data'][i].selected && firstSelectedFound) {
                    this.listData['data'][i].selected = false;
                    let message =
                        'Found occurence of data(' +
                        i +
                        ") to be set on 'selected' when another one was found before! Overriding to false because only 1 'selected' is allowed in this menu.";

                    errorLogging('kup-autocomplete', message);
                }
                if (this.listData['data'][i].selected && !firstSelectedFound) {
                    firstSelectedFound = true;
                    this.value = this.listData['data'][i].text;
                    this.log(
                        'consistencyCheck',
                        'selectedValue: ' +
                            this.value +
                            ' this.textfieldEl: ' +
                            JSON.stringify(this.textfieldEl)
                    );
                    if (this.textfieldEl) {
                        this.textfieldEl.initialValue = this.value;
                    }
                }
            }
        }
    }

    log(methodName: string, msg: string) {
        console.log(
            'kup-autocomplete.' +
                methodName +
                '() ' +
                this.fieldId +
                ' - ' +
                msg
        );
    }
    //---- Lifecycle hooks ----

    componentDidRender() {
        positionRecalc(this.listEl, this.textfieldEl);
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

        //if (!this.textfieldData['icon']) {
        //    this.textfieldData['icon'] = 'arrow_drop_down';
        //}

        let comp: HTMLElement = (
            <kup-text-field
                {...this.textfieldData}
                style={this.elStyle}
                initial-value={this.value}
                field-id={this.fieldId + '.text-field'}
                onKupTextFieldBlur={(e: any) => this.onKupBlur(e)}
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                ref={(el) => (this.textfieldEl = el as any)}
            ></kup-text-field>
        );

        return comp;
    }

    prepList() {
        let comp: HTMLElement = (
            <kup-list
                {...this.listData}
                class="mdc-menu mdc-menu-surface"
                onKupListClick={() => this.onKupItemClick()}
                field-id={this.fieldId + '.list'}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );

        return comp;
    }

    render() {
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        this.consistencyCheck();
        let textfieldEl = this.prepTextfield();
        let listEl = this.prepList();

        return (
            <Host onBlur={(e: any) => this.onKupBlur(e)} style={this.elStyle}>
                {customStyle}
                <div id="kup-component" style={this.elStyle}>
                    {textfieldEl}
                    {listEl}
                </div>
            </Host>
        );
    }
}

import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
} from '@stencil/core';

import { ComponentListElement } from '../wup-list/wup-list-declarations';
import { errorLogging } from '../../utils/error-logging';
import { positionRecalc } from '../../utils/recalc-position';
import { WupList } from '../wup-list/wup-list';

@Component({
    tag: 'wup-combobox',
    styleUrl: 'wup-combobox.scss',
    shadow: true,
})
export class WupSelect {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    /**
     * The data of the component.
     */
    @Prop() data: ComponentListElement[] = [];

    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;

    /**
     * Text of the text field.
     */
    @State() initialValue: string;

    private textfieldEl: HTMLElement;
    private listEl: any;

    /**
     * Event example.
     */

    @Event({
        eventName: 'kupSelectBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    /**
     * --- Methods ----
     */

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        this.closeList();
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupChange.emit({
            value: target.value,
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
        const { target } = e;
        this.kupInput.emit({
            value: target.value,
        });
    }

    handleValue() {
        let newData = [...this.listEl.data];
        this.data = newData;
        this.closeList();
    }

    handleList() {
        if (this.textfieldEl.classList.contains('toggled')) {
            this.closeList();
        } else {
            this.openList();
        }
    }

    openList() {
        let textFieldWidth = this.textfieldEl.shadowRoot.querySelector(
            '.mdc-text-field'
        ).clientWidth;
        this.textfieldEl.classList.add('toggled');
        this.textfieldEl['icon'] = 'arrow_drop_up';
        this.listEl.classList.add('visible');
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = textFieldWidth + 'px';
    }

    closeList() {
        this.textfieldEl.classList.remove('toggled');
        this.textfieldEl['icon'] = 'arrow_drop_down';
        this.listEl.classList.remove('visible');
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        var firstSelectedFound = false;
        for (let j = 0; j < this.data.length; j++) {
            if (this.data[j].selected && firstSelectedFound) {
                this.data[j].selected = false;
                let message =
                    'Found occurence of data(' +
                    j +
                    ") to be set on 'selected' when another one was found before! Overriding to false because only 1 'selected' is allowed in this menu.";

                errorLogging('wup-combobox', message);
            }
            if (this.data[j].selected && !firstSelectedFound) {
                firstSelectedFound = true;
                this.initialValue = this.data[j].text;
            }
        }
    }

    componentDidRender() {
        positionRecalc(this.listEl, this.textfieldEl);
    }

    render() {
        return (
            <Host onBlur={(e: any) => this.onKupBlur(e)}>
                <div id="kup-component">
                    <wup-text-field
                        trailing-icon
                        disabled={this.disabled}
                        icon="arrow_drop_down"
                        initial-value={this.initialValue}
                        ref={(el) => (this.textfieldEl = el as any)}
                        onKupTextFieldIconClick={() => this.handleList()}
                    ></wup-text-field>
                    <wup-list
                        class="mdc-menu mdc-menu-surface"
                        data={this.data}
                        selectable={WupList.SELECTABLE_ONE_SELECT}
                        listId={'List-NoNeedForIDImho'}
                        ref={(el) => (this.listEl = el as any)}
                        onKupListClick={() => this.handleValue()}
                    ></wup-list>
                </div>
            </Host>
        );
    }
}

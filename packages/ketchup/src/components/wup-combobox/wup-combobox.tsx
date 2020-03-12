import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';

import { ComponentProps } from '../wup-combobox/wup-combobox-declarations';
import { errorLogging } from '../../utils/error-logging';
import { positionRecalc } from '../../utils/recalc-position';

@Component({
    tag: 'wup-combobox',
    styleUrl: 'wup-combobox.scss',
    shadow: true,
})
export class WupCombobox {
    @Element() rootElement: HTMLElement;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * Props of the list.
     */
    @Prop() listData: ComponentProps[] = [];

    /**
     * Props of the text field.
     */
    @Prop() textfieldData: ComponentProps[] = [];

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
        this.value = target.value;

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
        this.value = target.value;

        this.kupInput.emit({
            value: target.value,
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

        this.kupItemClick.emit({
            value: this.value,
        });
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

    consistencyCheck() {
        var firstSelectedFound = false;

        if (this.listData) {
            for (let j = 0; j < this.listData.length; j++) {
                if (this.listData[j].prop === 'data') {
                    var currentProp = this.listData[j].value;
                    for (let i = 0; i < currentProp.length; i++) {
                        if (currentProp[i].selected && firstSelectedFound) {
                            currentProp[i].selected = false;
                            let message =
                                'Found occurence of data(' +
                                j +
                                ") to be set on 'selected' when another one was found before! Overriding to false because only 1 'selected' is allowed in this menu.";

                            errorLogging('wup-combobox', message);
                        }
                        if (currentProp[i].selected && !firstSelectedFound) {
                            firstSelectedFound = true;
                            this.value = currentProp[i].text;
                            if (this.textfieldEl) {
                                this.textfieldEl.initialValue = this.value;
                            }
                        }
                    }
                }
            }
        }
    }

    //---- Lifecycle hooks ----

    componentDidRender() {
        positionRecalc(this.listEl, this.textfieldEl);
    }

    prepTextfield() {
        let propList = undefined;

        for (let j = 0; j < this.textfieldData.length; j++) {
            let newProp = this.textfieldData[j].prop;
            let newValue = this.textfieldData[j].value;
            if (propList) {
                propList = { ...propList, [newProp]: newValue };
            } else {
                propList = { [newProp]: newValue };
            }

            if (this.textfieldData[j].prop === 'fullWidth') {
                this.elStyle = {
                    ...this.elStyle,
                    width: '100%',
                };
            }

            if (this.textfieldData[j].prop === 'fullHeight') {
                this.elStyle = {
                    ...this.elStyle,
                    height: '100%',
                };
            }
        }

        let comp: HTMLElement = (
            <wup-text-field
                {...propList}
                style={this.elStyle}
                initial-value={this.value}
                onKupTextFieldBlur={(e: any) => this.onKupBlur(e)}
                onKupTextFieldChange={(e: any) => this.onKupChange(e)}
                onKupTextFieldClick={(e: any) => this.onKupClick(e)}
                onKupTextFieldFocus={(e: any) => this.onKupFocus(e)}
                onKupTextFieldInput={(e: any) => this.onKupInput(e)}
                onKupTextFieldIconClick={(e: any) => this.onKupIconClick(e)}
                ref={(el) => (this.textfieldEl = el as any)}
            ></wup-text-field>
        );

        return comp;
    }

    prepList() {
        let propList = undefined;
        for (let j = 0; j < this.listData.length; j++) {
            let newProp = this.listData[j].prop;
            let newValue = this.listData[j].value;
            if (propList) {
                propList = { ...propList, [newProp]: newValue };
            } else {
                propList = { [newProp]: newValue };
            }
        }

        let comp: HTMLElement = (
            <wup-list
                {...propList}
                class="mdc-menu mdc-menu-surface"
                onKupListClick={() => this.onKupItemClick()}
                ref={(el) => (this.listEl = el as any)}
            ></wup-list>
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

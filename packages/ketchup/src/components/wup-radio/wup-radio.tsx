import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';
import { MDCRadio } from '@material/radio';
import { MDCFormField } from '@material/form-field';
import { ComponentRadioElement } from './wup-radio-declarations';

@Component({
    tag: 'wup-radio',
    styleUrl: 'wup-radio.scss',
    shadow: true,
})
export class WupRadio {
    @Element() rootElement: HTMLElement;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentRadioElement[] = [];
    /**
     * Defaults at null. It's the name that binds the radio buttons together.
     */
    @Prop({ reflect: true }) name: string = 'radio-list';
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop({ reflect: true }) leadingLabel: boolean = false;

    @Event({
        eventName: 'kupRadioBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    //---- Methods ----

    onKupBlur(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupChange(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupChange.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupFocus(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupInput(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupInput.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    //---- Lifecycle hooks ----

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            let formFields: any = root.querySelectorAll('.mdc-form-field');
            for (let i = 0; i < formFields.length; i++) {
                let component = MDCRadio.attachTo(
                    formFields[i].querySelector('.mdc-radio')
                );
                let formField = MDCFormField.attachTo(formFields[i]);
                formField.input = component;
            }
        }
    }

    render() {
        let formClass: string = 'mdc-form-field';
        let componentClass: string = 'mdc-radio';
        let componentLabel: string = '';
        let radioList: Array<HTMLElement> = [];
        let radioEl: HTMLElement;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.disabled) {
            componentClass += ' mdc-radio--disabled';
        }

        if (this.leadingLabel) {
            formClass += ' mdc-form-field--align-end';
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].checked) {
                componentClass += ' mdc-radio--checked';
            }
            componentLabel = this.data[i].label;
            let radioId = this.name + i;

            radioEl = (
                <div class={formClass}>
                    <div class={componentClass}>
                        <input
                            class="mdc-radio__native-control"
                            type="radio"
                            id={radioId}
                            name={this.name}
                            value={this.data[i].value}
                            checked={this.data[i].checked}
                            disabled={this.disabled}
                            onBlur={(e: any) => this.onKupBlur(e)}
                            onChange={(e: any) => this.onKupChange(e)}
                            onClick={(e: any) => this.onKupClick(e)}
                            onFocus={(e: any) => this.onKupFocus(e)}
                            onInput={(e: any) => this.onKupInput(e)}
                        ></input>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label htmlFor={this.name}>{componentLabel}</label>
                </div>
            );
            radioList.push(radioEl);
        }

        return (
            <Host>
                {customStyle}
                <div id="kup-component">{radioList}</div>
            </Host>
        );
    }
}

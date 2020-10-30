import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCRadio } from '@material/radio';
import { MDCFormField } from '@material/form-field';
import { ComponentRadioElement } from './kup-radio-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-radio',
    styleUrl: 'kup-radio.scss',
    shadow: true,
})
export class KupRadio {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Number of columns. When undefined, radio fields will be displayed inline.
     */
    @Prop() columns: number = undefined;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentRadioElement[] = [];
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop() leadingLabel: boolean = false;
    /**
     * Defaults at null. It's the name that binds the radio buttons together.
     */
    @Prop() name: string = 'radio-list';

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

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

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

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

    componentWillLoad() {
        this.startTime = performance.now();
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root && !this.disabled) {
            let formFields: any = root.querySelectorAll('.mdc-form-field');
            for (let i = 0; i < formFields.length; i++) {
                let component = MDCRadio.attachTo(
                    formFields[i].querySelector('.mdc-radio')
                );
                let formField = MDCFormField.attachTo(formFields[i]);
                formField.input = component;
            }
        }
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        let hostStyle: {} = undefined;
        let formClass: string = 'mdc-form-field';
        let wrapperClass: string = 'radio-wrapper';
        let componentClass: string = 'mdc-radio';
        let componentLabel: string = '';
        let radioList: Array<HTMLElement> = [];
        let radioEl: HTMLElement;

        if (this.columns) {
            wrapperClass += ' is-grid';
            hostStyle = {
                '--grid-columns': `repeat(${this.columns}, 1fr)`,
            };
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
            <Host style={hostStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class={wrapperClass}>{radioList}</div>
                </div>
            </Host>
        );
    }
}

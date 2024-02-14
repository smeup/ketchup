import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupRadioChangeEventPayload,
    KupRadioProps,
} from './kup-radio-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FRadio } from '../../f-components/f-radio/f-radio';
import {
    FRadioData,
    FRadioProps,
} from '../../f-components/f-radio/f-radio-declarations';

@Component({
    tag: 'kup-radio',
    styleUrl: 'kup-radio.scss',
    shadow: true,
})
export class KupRadio {
    /**
     * References the root HTML element of the component (<kup-radio>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */
    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Number of columns. When null, radio fields will be displayed inline.
     * @default null
     */
    @Prop() columns: number = null;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * List of elements.
     * @default null
     */
    @Prop() data: FRadioData[] = null;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component is horizontal.
     * @default false
     */
    @Prop() horizontal: boolean = false;
    /**
     * When set, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = '';
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     * @default false
     */
    @Prop() leadingLabel: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the input element loses focus.
     */
    @Event({
        eventName: 'kup-radio-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the input element's value changes.
     */
    @Event({
        eventName: 'kup-radio-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupRadioChangeEventPayload>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kup-radio-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupEventPayload>;

    onKupBlur() {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKupChange(i: number) {
        this.value = this.data[i].value;
        for (let index = 0; index < this.data.length; index++) {
            const radio: FRadioData = this.data[index];
            if (index === i) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        }
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
        this.refresh();
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
        });
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
        return getProps(this, KupRadioProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupRadioProps, props);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data || this.data.length === 0) {
            return;
        }

        const props: FRadioProps = {
            columns: this.columns,
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            data: this.data,
            disabled: this.disabled,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            horizontal: this.rootElement.classList.contains('kup-horizontal')
                ? true
                : false,
            leadingLabel: this.leadingLabel,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            onBlur: () => this.onKupBlur(),
            onChange: (i) => this.onKupChange(i),
            onFocus: () => this.onKupFocus(),
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId} class="kup-radio-wrapper">
                    {this.label && (
                        <label class="kup-radio-group-label">
                            {this.label}
                        </label>
                    )}
                    <FRadio {...props}></FRadio>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

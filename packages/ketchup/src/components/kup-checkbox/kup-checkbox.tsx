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
import { HTMLStencilElement } from '@stencil/core/internal';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxMDC } from '../../f-components/f-checkbox/f-checkbox-mdc';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';
import { GenericObject } from '../../types/GenericTypes';
import { KupCheckboxProps } from './kup-checkbox-declarations';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    /**
     * References the root HTML element of the component (<kup-checkbox>).
     */
    @Element() rootElement: HTMLStencilElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */
    @State() value: string = '';
    /**
     * The component-specific CSS set by the current Ketch.UP theme.
     * @default ""
     */
    @State() customStyleTheme: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     * @default false
     */
    @Prop() checked: boolean = false;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * When set to true, the component will be set to 'indeterminate'.
     * @default false
     */
    @Prop() indeterminate: boolean = false;
    /**
     * When specified, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When set to true, the label will be on the left of the component.
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
        eventName: 'kupCheckboxBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: string;
        checked: boolean;
        value: string;
    }>;
    /**
     * Triggered when the input element's value changes.
     */
    @Event({
        eventName: 'kupCheckboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        id: string;
        checked: boolean;
        value: string;
    }>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kupCheckboxFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: string;
        checked: boolean;
        value: string;
    }>;

    onKupBlur() {
        this.kupBlur.emit({
            checked: this.checked == true ? true : false,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupChange() {
        if (this.indeterminate) {
            this.checked = true;
            this.indeterminate = false;
            this.value = 'indeterminate';
        } else if (this.checked) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            checked: this.checked,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            checked: this.checked == true ? true : false,
            id: this.rootElement.id,
            value: this.value,
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
        let props: GenericObject = {};
        if (descriptions) {
            props = KupCheckboxProps;
        } else {
            for (const key in KupCheckboxProps) {
                if (
                    Object.prototype.hasOwnProperty.call(KupCheckboxProps, key)
                ) {
                    props[key] = this[key];
                }
            }
        }
        return props;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method is invoked by the theme manager.
     * Whenever the current Ketch.UP theme changes, every component must be re-rendered with the new component-specific customStyle.
     * @param customStyleTheme - Contains current theme's component-specific CSS.
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     * @see https://ketchup.smeup.com/ketchup-showcase/#/theming
     */
    @Method()
    async themeChangeCallback(customStyleTheme: string): Promise<void> {
        this.customStyleTheme = customStyleTheme;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Set the events of the component and instantiates Material Design.
     */
    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-checkbox--wrapper');
            if (f) {
                const inputEl: HTMLInputElement = f.querySelector('input');
                const labelEl: HTMLElement = f.querySelector('label');
                if (inputEl) {
                    inputEl.onblur = () => this.onKupBlur();
                    inputEl.onchange = () => this.onKupChange();
                    inputEl.onfocus = () => this.onKupFocus();
                }
                if (labelEl) {
                    labelEl.onclick = () => this.onKupChange();
                }
                FCheckboxMDC(f);
            }
        }
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
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
        this.setEvents();
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        let props: FCheckboxProps = {
            checked: this.checked,
            disabled: this.disabled,
            indeterminate: this.indeterminate,
            label: this.label,
            leadingLabel: this.leadingLabel,
        };
        return (
            <Host>
                <style>{this.kupManager.theme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FCheckbox {...props} />
                </div>
            </Host>
        );
    }

    componentDidUnload() {
        this.kupManager.theme.unregister(this);
    }
}

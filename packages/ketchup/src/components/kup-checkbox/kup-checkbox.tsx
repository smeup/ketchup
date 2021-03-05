import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Method,
} from '@stencil/core';
import { KupTheme } from '../../utils/kup-theme/kup-theme';
import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxMDC } from '../../f-components/f-checkbox/f-checkbox-mdc';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    /**
     * References the root HTML element of the component (<kup-checkbox>).
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
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();
    /**
     * Instance of the KupTheme class.
     */
    private kupTheme: KupTheme = new KupTheme();

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
     * This method is invoked by the theme manager.
     * Whenever the current Ketch.UP theme changes, every component must be re-rendered with the new component-specific customStyle.
     * @param customStyleTheme - Contains current theme's component-specific CSS.
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     * @see https://ketchup.smeup.com/ketchup-showcase/#/theming
     */
    @Method()
    async refreshCustomStyle(customStyleTheme: string): Promise<void> {
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
        this.kupDebug.logLoad(this, false);
        this.kupTheme.setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
        this.setEvents();
        this.kupDebug.logRender(this, true);
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
                <style>{this.kupTheme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FCheckbox {...props} />
                </div>
            </Host>
        );
    }
}

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
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { FSwitch } from '../../f-components/f-switch/f-switch';
import { FSwitchMDC } from '../../f-components/f-switch/f-switch-mdc';
import { FSwitchProps } from '../../f-components/f-switch/f-switch-declarations';

@Component({
    tag: 'kup-switch',
    styleUrl: 'kup-switch.scss',
    shadow: true,
})
export class KupSwitch {
    /**
     * References the root HTML element of the component (<kup-image>).
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
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at null. When specified, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = null;
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
        eventName: 'kupSwitchBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
    }>;
    /**
     * Triggered when the input element's value changes.
     */
    @Event({
        eventName: 'kupSwitchChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
    }>;
    /**
     * Triggered when the input element is clicked.
     */
    @Event({
        eventName: 'kupSwitchClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
    }>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kupSwitchFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
    }>;

    onKupBlur() {
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange() {
        if (this.checked) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupClick() {
        this.kupClick.emit({
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
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
            const f: HTMLElement = root.querySelector('.f-switch--wrapper');
            if (f) {
                const inputEl: HTMLInputElement = f.querySelector('input');
                const labelEl: HTMLElement = f.querySelector('label');
                if (inputEl) {
                    inputEl.onblur = () => this.onKupBlur();
                    inputEl.onchange = () => this.onKupChange();
                    inputEl.onclick = () => this.onKupClick();
                    inputEl.onfocus = () => this.onKupFocus();
                }
                if (labelEl) {
                    labelEl.onclick = () => this.onKupClick();
                }
                FSwitchMDC(f);
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
        let props: FSwitchProps = {
            checked: this.checked,
            disabled: this.disabled,
            label: this.label,
            leadingLabel: this.leadingLabel,
        };

        return (
            <Host>
                <style>{this.kupManager.theme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FSwitch {...props} />
                </div>
            </Host>
        );
    }

    componentDidUnload() {
        this.kupManager.theme.unregister(this);
    }
}

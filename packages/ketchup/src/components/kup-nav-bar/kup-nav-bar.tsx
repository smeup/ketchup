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
} from '@stencil/core';
import { KupNavBarStyling, KupNavBarProps } from './kup-nav-bar-declarations';
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { KupThemeColorValues } from '../../utils/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';

@Component({
    tag: 'kup-nav-bar',
    styleUrl: 'kup-nav-bar.scss',
    shadow: true,
})
export class KupNavBar {
    /**
     * References the root HTML element of the component (<kup-nav-bar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Image displayed by the nav bar.
     * @default null
     */
    @Prop() image: string = null;
    /**
     * Text displayed by the nav bar.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When true, displays the menu button.
     * @default null
     */
    @Prop() showMenuButton: boolean = true;
    /**
     * Defines how the bar will be displayed.
     * @default KupNavBarMode.FIXED
     */
    @Prop({ reflect: true }) styling: KupNavBarStyling = KupNavBarStyling.FIXED;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Text color of the title, which is set automatically depending on the contrast with the background.
     */
    private textColor: string = 'white';

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the menu button is clicked.
     */
    @Event({
        eventName: 'kup-navbar-menuclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarMenuClick: EventEmitter<KupEventPayload>;

    onKupNavbarMenuToggle() {
        this.kupNavbarMenuClick.emit({
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
        return getProps(this, KupNavBarProps, descriptions);
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
        setProps(this, KupNavBarProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private fetchThemeColors() {
        let color =
            this.kupManager.theme.cssVars[
                KupThemeColorValues.NAV_BAR_BACKGROUND
            ];
        this.textColor = this.kupManager.theme.colorContrast(color);
    }

    private rightComponents() {}

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        this.fetchThemeColors();
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const style: GenericObject = { '--title-color': this.textColor };

        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id={componentWrapperId} style={style}>
                    <header
                        class={`nav-bar nav-bar--${this.styling.toLowerCase()} `}
                    >
                        <div class="nav-bar__row">
                            <section class="nav-bar__section nav-bar__section--align-start">
                                {this.showMenuButton ? (
                                    <FButton icon="menu" />
                                ) : null}
                                {this.label ? (
                                    <span class="nav-bar__title">
                                        {this.label}
                                    </span>
                                ) : null}
                            </section>
                            <section
                                class="nav-bar__section nav-bar__section--align-end"
                                role="toolbar"
                            >
                                {this.rightComponents()}
                            </section>
                        </div>
                    </header>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}

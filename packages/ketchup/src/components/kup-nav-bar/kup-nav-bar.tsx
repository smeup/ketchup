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
    VNode,
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
import { FImage } from '../../f-components/f-image/f-image';
import { FImageProps } from '../../f-components/f-image/f-image-declarations';

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
     * Image displayed by the nav bar, uses the kup-image component's props.
     * @default null
     */
    @Prop() image: FImageProps = null;
    /**
     * Text displayed by the nav bar.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When true, the menu button will be displayed on the left of the nav bar.
     * @default null
     */
    @Prop() showMenuButton: boolean = true;
    /**
     * Defines the style of the nav bar.
     * @default KupNavBarMode.STANDARD
     */
    @Prop({ reflect: true }) styling: KupNavBarStyling =
        KupNavBarStyling.STANDARD;

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
    /**
     * Text color of the title in RGB values.
     */
    private textColorRGB: string = '255,255,255';

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

    onKupNavbarMenuClick() {
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

    private components(): VNode[] {
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        const components: VNode[] = [];
        for (let index = 0; index < slots.length; index++) {
            const slot: HTMLElement = slots[index] as HTMLElement;
            components.push(<slot></slot>);
        }
        return components;
    }

    /**
     * Sets the dynamic colors depending on the nav bar background.
     */
    private fetchThemeColors(): void {
        const color: string =
            this.kupManager.theme.cssVars[
                KupThemeColorValues.NAV_BAR_BACKGROUND
            ];
        this.textColor = this.kupManager.theme.colorContrast(color);
        this.textColorRGB = this.kupManager.theme.colorCheck(
            this.textColor
        ).rgbValues;
    }

    /**
     * Set the events of the component.
     */
    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.nav-bar__menu-toggler');
            if (f) {
                const buttonEl: HTMLButtonElement = f.querySelector('button');
                if (buttonEl) {
                    buttonEl.onclick = () => this.onKupNavbarMenuClick();
                }
            }
        }
    }

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
        this.setEvents();
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const showImage: boolean =
            this.image && this.styling.toLowerCase() !== KupNavBarStyling.SHORT;
        const showLabel: boolean =
            this.label && this.styling.toLowerCase() !== KupNavBarStyling.SHORT;
        const style: GenericObject = {
            '--dyn-color': this.textColor,
            '--dyn-color-rgb': this.textColorRGB,
        };

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
                                    <FButton
                                        icon="menu"
                                        wrapperClass="nav-bar__menu-toggler"
                                    />
                                ) : null}
                                {showImage ? (
                                    <span class="nav-bar__image">
                                        <FImage
                                            sizeX="auto"
                                            sizeY={
                                                this.styling.toLowerCase() ===
                                                KupNavBarStyling.DENSE
                                                    ? '36px'
                                                    : '48px'
                                            }
                                            {...this.image}
                                        />
                                    </span>
                                ) : null}
                                {showLabel ? (
                                    <span class="nav-bar__title">
                                        {this.label}
                                    </span>
                                ) : null}
                            </section>
                            <section
                                class="nav-bar__section nav-bar__section--align-end"
                                role="toolbar"
                            >
                                {this.components()}
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

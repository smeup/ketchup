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
import {
    KupNavBarStyling,
    KupNavBarProps,
    navbarClass,
} from './kup-nav-bar-declarations';
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
     * @default KupNavBarStyling.STANDARD
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
     * Used to prevent too many resizes callbacks at once.
     */
    private resizeTimeout: number;
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
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-navbar-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarReady: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the component is resize.
     */
    @Event({
        eventName: 'kup-navbar-resize',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarResize: EventEmitter<KupEventPayload>;
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
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(() => {
            this.kupNavbarResize.emit({
                comp: this,
                id: this.rootElement.id,
            });
        }, 300);
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

    /**
     * Reads the slots returning them as an array of virtual nodes.
     */
    private content(): VNode[] {
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        const content: VNode[] = [];
        for (let index = 0; index < slots.length; index++) {
            content.push(<slot></slot>);
        }
        return content;
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
        this.kupNavbarReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.kupManager.resize.observe(this.rootElement);
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
            <Host class="header">
                {customStyle ? <style>{customStyle}</style> : null}
                <div id={componentWrapperId} style={style}>
                    <header
                        class={`${navbarClass} ${navbarClass}--${this.styling.toLowerCase()} `}
                    >
                        <div class={`${navbarClass}__row`}>
                            <section
                                class={`${navbarClass}__section ${navbarClass}__section--align-start`}
                            >
                                {this.showMenuButton ? (
                                    <FButton
                                        icon="menu"
                                        wrapperClass={`${navbarClass}__menu-toggler`}
                                    />
                                ) : null}
                                {showImage ? (
                                    <span class={`${navbarClass}__image`}>
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
                                    <span class={`${navbarClass}__title`}>
                                        {this.label}
                                    </span>
                                ) : null}
                            </section>
                            <section
                                class={`${navbarClass}__section ${navbarClass}__section--align-end`}
                                role="toolbar"
                            >
                                {this.content()}
                            </section>
                        </div>
                    </header>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
    }
}

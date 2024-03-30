import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Method,
    Prop,
    VNode,
} from '@stencil/core';
import type {
    GenericMap,
    GenericObject,
    KulComponent,
    KulEventPayload,
} from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KulImageEvents, KulImageProps } from './kul-image-declarations';
import { KulThemeColorValues } from '../../managers/kul-theme/kul-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import {
    CSS_VAR_PREFIX,
    KUL_WRAPPER_ID,
} from '../../variables/GenericVariables';
import { KulBadgePropsInterface } from '../kul-badge/kul-badge-declarations';
import { KulDebugCategory } from '../../managers/kul-debug/kul-debug-declarations';

@Component({
    tag: 'kul-image',
    assetsDirs: ['assets/svg'],
    styleUrl: 'kul-image.scss',
    shadow: true,
})
export class KulImage {
    /**
     * References the root HTML element of the component (<kul-image>).
     */
    @Element() rootElement: HTMLKulImageElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * This property is used to attach a badge to the component.
     * @default null
     */
    @Prop({ mutable: true }) kulBadgeProps: KulBadgePropsInterface = null;
    /**
     * Specifies the color of the icon using a CSS variable. This property is used to set the color of the component's icon.
     * @default KulThemeColorValues.ICON
     *
     * @see KulThemeColorValues - For a list of available CSS variable names for color.
     */
    @Prop({ mutable: true, reflect: true })
    kulColor = `var(${KulThemeColorValues.ICON})`;
    /**
     * Controls the display of a loading indicator. When enabled, a spinner is shown until the image finishes loading. This property is not compatible with SVG images.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulShowSpinner = false;
    /**
     * Sets the width of the icon. This property accepts any valid CSS measurement value (e.g., px, %, vh, etc.) and defaults to 100%.
     * @default '100%'
     */
    @Prop({ mutable: true, reflect: true }) kulSizeX = '100%';
    /**
     * Sets the height of the icon. This property accepts any valid CSS measurement value (e.g., px, %, vh, etc.) and defaults to 100%.
     * @default '100%'
     */
    @Prop({ mutable: true, reflect: true }) kulSizeY = '100%';
    /**
     * Customizes the style of the component. This property allows you to apply a custom CSS style to the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Defines the source URL of the image. This property is used to set the image resource that the component should display.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulValue = '';

    /*-------------------------------------------------*/
    /*        I n t e r n a l   V a r i a b l e s      */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted for various button interactions like click, load.
     */
    @Event({
        eventName: 'kul-image-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event, eventType: KulImageEvents) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
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
        return getProps(this, KulImageProps, descriptions);
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
        setProps(this, KulImageProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    createIcon(): VNode {
        const classObj: GenericObject<boolean> = {
            image__icon: true,
        };
        const style: GenericMap = {
            background: this.kulColor
                ? this.kulColor
                : `var(${KulThemeColorValues.ICON})`,
        };

        if (this.kulValue.indexOf(CSS_VAR_PREFIX) > -1) {
            let themeIcon = this.kulValue.replace('--', '');
            classObj['kup-icon'] = true;
            classObj[themeIcon] = true;
        } else {
            const path = getAssetPath(`./assets/svg/${this.kulValue}.svg`);
            style.mask = `url('${path}') no-repeat center`;
            style.webkitMask = `url('${path}') no-repeat center`;
        }

        return <div class={classObj} style={style}></div>;
    }

    createImage(): VNode {
        return (
            <img
                onLoad={(e) => {
                    this.onKulEvent(e, 'load');
                }}
                src={this.kulValue}
            ></img>
        );
    }

    isResourceUrl(): boolean {
        return !!(
            this.kulValue &&
            (this.kulValue.indexOf('.') > -1 ||
                this.kulValue.indexOf('/') > -1 ||
                this.kulValue.indexOf('\\') > -1)
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.debug.logLoad(this, false);
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kulManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kulManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kulManager.debug.logRender(this, true);
    }

    render() {
        if (!this.kulValue) {
            this.#kulManager.debug.logMessage(
                this,
                'Empty image.',
                KulDebugCategory.WARNING
            );
            return;
        }

        let el: VNode;
        let feedback: HTMLElement;
        const isUrl = this.isResourceUrl();
        let spinnerLayout: number;
        let style: {
            '--kup_image_height': string;
            '--kup_image_width': string;
        };

        if (isUrl) {
            style = {
                '--kup_image_height': this.kulSizeY ? this.kulSizeY : 'auto',
                '--kup_image_width': this.kulSizeX ? this.kulSizeX : '100%',
            };
            el = this.createImage();
        } else {
            style = {
                '--kup_image_height': this.kulSizeY ? this.kulSizeY : '100%',
                '--kup_image_width': this.kulSizeX ? this.kulSizeX : '100%',
            };
            el = this.createIcon();
        }

        if (this.kulShowSpinner && isUrl) {
            spinnerLayout = 14;
            feedback = (
                <div class="spinner" title="Image not loaded yet...">
                    <kul-spinner
                        active
                        dimensions="3px"
                        layout={spinnerLayout}
                    ></kul-spinner>
                </div>
            );
        }

        return (
            <Host>
                <style>
                    {this.#kulManager.theme.setKulStyle(
                        this.rootElement as KulComponent
                    )}
                </style>
                {feedback}
                <div id={KUL_WRAPPER_ID}>
                    <div
                        class="image"
                        style={style}
                        onClick={(e) => {
                            this.onKulEvent(e, 'click');
                        }}
                    >
                        {el}
                        {this.kulBadgeProps ? (
                            <kul-badge {...this.kulBadgeProps}></kul-badge>
                        ) : undefined}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}

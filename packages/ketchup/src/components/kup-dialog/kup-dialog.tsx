import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
} from '@stencil/core';
import { FImage } from '../../f-components/f-image/f-image';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupDialogHeader, KupDialogProps } from './kup-dialog-declarations';

@Component({
    tag: 'kup-dialog',
    styleUrl: 'kup-dialog.scss',
    shadow: true,
})
export class KupDialog {
    /**
     * References the root HTML element of the component (<kup-dialog>).
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
     * Header options.
     * @default "{ icons: { close: true } }"
     */
    @Prop() header: KupDialogHeader = { icons: { close: true } };
    /**
     * The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "auto"
     */
    @Prop() sizeX: string = 'auto';
    /**
     * The height of the card, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "auto"
     */
    @Prop() sizeY: string = 'auto';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager = kupManagerInstance();

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
        return getProps(this, KupDialogProps, descriptions);
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
        setProps(this, KupDialogProps, props);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const style = {
            '--kup_card_height': this.sizeY ? this.sizeY : 'auto',
            '--kup_card_width': this.sizeX ? this.sizeX : 'auto',
        };

        return (
            <Host style={style}>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.header ? (
                        <div class="header">
                            {this.header.title ? (
                                <div class="header__title">
                                    {this.header.title}
                                </div>
                            ) : null}
                            {this.header.icons?.close ? (
                                <FImage
                                    sizeX="1.25em"
                                    sizeY="100%"
                                    resource="clear"
                                    wrapperClass="header__close"
                                ></FImage>
                            ) : null}
                        </div>
                    ) : null}
                    <slot></slot>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}

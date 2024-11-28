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
import { FImage } from '../../f-components/f-image/f-image';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupDialogAutoCenter,
    KupDialogHeader,
    KupDialogModal,
    KupDialogProps,
} from './kup-dialog-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';

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
     * Auto centers the dialog relatively to the viewport.
     * @default "{ onReady: true }"
     */
    @Prop() autoCenter: KupDialogAutoCenter = { onReady: true };
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle = '';
    /**
     * Header options.
     * @default "{ icons: { close: true } }"
     */
    @Prop() header: KupDialogHeader = { icons: { close: true } };
    /**
     * Set of options to display the dialog as a modal.
     * @default "{ closeOnBackdropClick: true }"
     */
    @Prop() modal: KupDialogModal = { closeOnBackdropClick: true };
    /**
     * Sets whether the dialog is resizable or not.
     * @default "true"
     */
    @Prop() resizable = true;
    /**
     * The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "auto"
     */
    @Prop() sizeX = 'auto';
    /**
     * The height of the card, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "auto"
     */
    @Prop() sizeY = 'auto';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #header: HTMLElement = null;
    #kupManager = kupManagerInstance();
    #recalcSafeguard = 0;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-dialog-close',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClose: EventEmitter<KupEventPayload>;

    @Event({
        eventName: 'kup-dialog-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Closes the dialog detaching it from the DOM.
     */
    @Method()
    async close(): Promise<void> {
        this.kupClose.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.rootElement.remove();
    }
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
     * Places the dialog at the center of the screen.
     */
    @Method()
    async recalcPosition(): Promise<void> {
        const rect = this.rootElement.getBoundingClientRect();
        if (!rect.x && !rect.y && !rect.height && !rect.width) {
            this.#kupManager.debug.logMessage(
                this,
                `recalcPosition() ran before the component finished being drawn. Running again (attempt #${
                    this.#recalcSafeguard
                }).`,
                KupDebugCategory.INFO
            );
            if (this.#recalcSafeguard < 50) {
                this.#recalcSafeguard++;
                setTimeout(async () => this.recalcPosition(), 50);
                return;
            } else {
                this.#kupManager.debug.logMessage(
                    this,
                    `Too many attempts centering the dialog.`,
                    KupDebugCategory.WARNING
                );
            }
        }
        this.#recalcSafeguard = 0;
        this.rootElement.style.left = '0';
        this.rootElement.style.bottom = '0';
        this.rootElement.style.right = '0';
        this.rootElement.style.top = '0';
        this.rootElement.removeAttribute('fade-in');
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
        this.#kupManager.interact.dialogify(
            this.rootElement,
            this.#header ? this.#header : null,
            !this.resizable
        );
        if (this.autoCenter?.onReady) {
            this.recalcPosition();
        } else {
            this.rootElement.removeAttribute('fade-in');
        }
        if (this.modal) {
            this.#kupManager.interact.showModalBackdrop(
                this.modal.closeOnBackdropClick
                    ? () => {
                          this.close();
                      }
                    : null
            );
        }
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
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
            '--kup_dialog_height': this.sizeY ? this.sizeY : 'auto',
            '--kup_dialog_width': this.sizeX ? this.sizeX : 'auto',
        };

        const headerSlot = this.rootElement.querySelector('[slot="header"]');
        if (headerSlot) {
            this.#header = headerSlot as HTMLElement;
        }

        return (
            <Host fade-in style={style}>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.header ? (
                        <div class="header" ref={(el) => (this.#header = el)}>
                            {this.header.title ? (
                                <div class="header__title">
                                    {this.header.title}
                                </div>
                            ) : null}
                            {this.header.icons?.close ? (
                                <FImage
                                    onClick={() => this.close()}
                                    sizeX="1.25em"
                                    sizeY="100%"
                                    resource="clear"
                                    wrapperClass="header__close"
                                ></FImage>
                            ) : null}
                        </div>
                    ) : headerSlot ? (
                        <slot name="header"></slot>
                    ) : null}
                    <div class="content">
                        <slot name="content"></slot>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.modal) {
            this.#kupManager.interact.hideModalBackdrop();
        }
        this.#kupManager.theme.unregister(this);
    }
}

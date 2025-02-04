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
import type { EdgeOptions } from '@interactjs/types/index';
import { ResizeEvent } from '@interactjs/types';

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
     * Sets anchor position ("none", "left", "top", "right", "bottom").
     * @default "none"
     */
    @Prop() anchor: 'none' | 'left' | 'top' | 'right' | 'bottom' = 'none';
    /**
     * The min width of the dialog.
     * @default "auto"
     */
    @Prop() minSizeX = '10dvw';
    /**
     * The min height of the dialog.
     * @default "auto"
     */
    @Prop() minSizeY = '20dvh';
    /**
     * The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).
     * @default "auto"
     */
    @Prop() sizeX = 'auto';
    /**
     * The height of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).
     * @default "auto"
     */
    @Prop() sizeY = 'auto';
    /**
     * The max width of the dialog, defaults to 90dvw.
     * @default "auto"
     */
    @Prop() maxSizeX = '90dvw';
    /**
     * The max height of the dialog, defaults to 90dvh.
     * @default "auto"
     */
    @Prop() maxSizeY = '90dvh';

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
        if (!this.rootElement?.isConnected) {
            this.#kupManager.debug.logMessage(
                this,
                'recalcPosition() ran after the component was disconnected. Aborting.',
                KupDebugCategory.WARNING
            );
            this.#disconnectedCallback();
            return;
        }
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
    /*          P r i v a t e   M e t h o d s          */
    /*-------------------------------------------------*/
    #disconnectedCallback() {
        if (this.modal) {
            this.#kupManager.interact.hideModalBackdrop();
        }
        this.#kupManager.theme.unregister(this);
    }

    #getMinMaxDimensions(element: Element): {
        min: { width: number; height: number };
        max: { width: number; height: number };
    } {
        const minWidth = getComputedStyle(element).minWidth.replace('px', '');
        const minHeight = getComputedStyle(element).minHeight.replace('px', '');
        const maxWidth = getComputedStyle(element).maxWidth.replace('px', '');
        const maxHeight = getComputedStyle(element).maxHeight.replace('px', '');

        return {
            min: {
                width: parseFloat(minWidth),
                height: parseFloat(minHeight),
            },
            max: {
                width: parseFloat(maxWidth),
                height: parseFloat(maxHeight),
            },
        };
    }

    #onResize(e: ResizeEvent) {
        let { width, height } = e.rect;
        const target = e.target;

        const dim = this.#getMinMaxDimensions(this.rootElement);
        const isDetatched = this.anchor == 'none';

        const isHorizontalShiftAllowed =
            width >= dim.min.width - 1 &&
            width <= dim.max.width + 1 &&
            isDetatched;
        const isVerticalShiftAllowed =
            height >= dim.min.height - 1 &&
            height <= dim.max.height + 1 &&
            isDetatched;

        if (e.edges.left && isHorizontalShiftAllowed) {
            target.style.left = `${
                parseFloat(target.style.left || '0') + e.deltaRect.left
            }px`;
        }

        if (e.edges.top && isVerticalShiftAllowed) {
            target.style.top = `${
                parseFloat(target.style.top || '0') + e.deltaRect.top
            }px`;
        }

        if (e.edges.right && isHorizontalShiftAllowed) {
            target.style.right = `${
                parseFloat(target.style.right || '0') - e.deltaRect.right
            }px`;
        }

        if (e.edges.bottom && isVerticalShiftAllowed) {
            target.style.bottom = `${
                parseFloat(target.style.bottom || '0') - e.deltaRect.bottom
            }px`;
        }
    }

    #dialogify() {
        const isDetatched = this.anchor == 'none';
        this.#kupManager.interact.dialogify(
            this.rootElement,
            this.#header ? this.#header : null,
            {
                isResizable: this.resizable || !isDetatched,
                isDraggable: isDetatched,
                onResize: this.#onResize.bind(this),
                resizeConstraints: this.#getMinMaxDimensions(this.rootElement),
                edges: this.#getEdgeOptions(),
            }
        );
    }

    #undialogify() {
        this.#kupManager.interact.undialogify(this.rootElement);
    }

    #getEdgeOptions(): EdgeOptions {
        switch (this.anchor) {
            case 'none':
                return { left: true, top: true, right: true, bottom: true };
            case 'left':
                return { left: false, top: false, right: true, bottom: false };
            case 'top':
                return { left: false, top: false, right: false, bottom: true };
            case 'right':
                return { left: true, top: false, right: false, bottom: false };
            case 'bottom':
                return { left: false, top: true, right: false, bottom: false };
        }
    }

    #getStyles(): { [k: string]: string } {
        const minHeight = '--kup_dialog_min_height';
        const minWidth = '--kup_dialog_min_width';
        const height = '--kup_dialog_height';
        const width = '--kup_dialog_width';
        const maxHeight = '--kup_dialog_max_height';
        const maxWidth = '--kup_dialog_max_width';

        const styles = {};
        if (this.anchor == 'none') {
            styles[minHeight] = this.minSizeY ? this.minSizeY : 'auto';
            styles[minWidth] = this.minSizeX ? this.minSizeX : 'auto';

            styles[height] = this.sizeY ? this.sizeY : 'auto';
            styles[width] = this.sizeX ? this.sizeX : 'auto';

            styles[maxHeight] = this.maxSizeY ? this.maxSizeY : '90dvh';
            styles[maxWidth] = this.maxSizeX ? this.maxSizeX : '90dvw';
        }
        if (this.anchor == 'left' || this.anchor == 'right') {
            styles[minHeight] = '100dvh';
            styles[minWidth] = this.minSizeX ? this.minSizeX : '10dvw';

            styles[maxHeight] = this.maxSizeY ? this.maxSizeY : '100dvh';
            styles[maxWidth] = this.maxSizeX ? this.maxSizeX : '80dvw';
        }
        if (this.anchor == 'top' || this.anchor == 'bottom') {
            styles[minHeight] = this.minSizeY ? this.minSizeY : '10dvh';
            styles[minWidth] = '100dvw';

            styles[maxHeight] = this.maxSizeY ? this.maxSizeY : '80dvh';
            styles[maxWidth] = this.maxSizeX ? this.maxSizeX : '100dvw';
        }
        return styles;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#dialogify();

        if (this.autoCenter?.onReady && this.anchor == 'none') {
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

    componentDidUpdate() {
        // unregister dialog
        this.#undialogify();

        // register it again
        this.#dialogify();
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        let style: { [k: string]: string } = this.#getStyles();

        const headerSlot = this.rootElement.querySelector('[slot="header"]');
        if (headerSlot) {
            this.#header = headerSlot as HTMLElement;
        }

        return (
            <Host
                fade-in
                style={style}
                data-anchor={this.anchor?.toString() || 'none'}
            >
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
        this.#disconnectedCallback();
    }
}

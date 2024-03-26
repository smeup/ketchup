import { Component, Element, h, Host, Prop } from '@stencil/core';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupDataMessage,
    KupDataMessageGravity,
    KupDataMessageMode,
} from '../../managers/kup-data/kup-data-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { notificationClass } from './kup-notification-declaration';

@Component({
    tag: 'kup-notification',
    styleUrl: 'kup-notification.scss',
    shadow: true,
})
export class KupNotification {
    /**
     * References the root HTML element of the component (<kup-notification>).
     */
    @Element() rootElement: HTMLElement;

    //#region STATE
    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    //#endregion

    //#region PROPS
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * List of notifications to display.
     * @default null
     */
    @Prop() data: KupDataMessage[] = [];

    /**
     * When true, the component is displayed.
     */
    @Prop() enabled: boolean = true;

    //#endregion

    //#region INTERNAL VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    //#endregion

    //#region EVENTS
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    //#endregion

    //#region PUBLIC METHODS
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Return the notification element based on the given data.
     * @param gravity
     * @param title
     * @param message
     * @returns
     */
    buildNotification(
        gravity: KupDataMessageGravity,
        title: string,
        message: string
    ): HTMLDivElement {
        return (
            <div class={`notification__item ${gravity}`}>
                <div class="notification__title">{title}</div>
                <div class="notification__message">{message}</div>
            </div>
        );
    }

    //#endregion

    //#region LIFECYCLE HOOKS
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
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const notifications: HTMLDivElement[] = [];

        if (this.data) {
            for (let i = 0; i < this.data.length; i++) {
                const notification = this.data[i];
                switch (notification.mode) {
                    case KupDataMessageMode.PN:
                        notifications.push(
                            this.buildNotification(
                                notification.gravity,
                                notification.title,
                                notification.message
                            )
                        );
                        break;
                }
            }
        }

        return (
            <Host kup-visible={this.enabled}>
                <div id={componentWrapperId}>
                    <div class={notificationClass}>
                        <div class={`${notificationClass}__area`}>
                            {notifications}
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }

    //#endregion
}

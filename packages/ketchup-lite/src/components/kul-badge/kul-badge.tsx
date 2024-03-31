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
import { KulBadgeEvents, KulBadgeProps } from './kul-badge-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';
import {
    GenericObject,
    KulComponent,
    KulEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { KulThemeColorValues } from '../../managers/kul-theme/kul-theme-declarations';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';

@Component({
    tag: 'kul-badge',
    styleUrl: 'kul-badge.scss',
    shadow: true,
})
export class KulBadge {
    /**
     * References the root HTML element of the component (<kul-badge>).
     */
    @Element() rootElement: HTMLKulBadgeElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * The props of the image displayed inside the badge.
     * @default null
     */
    @Prop({ mutable: true }) kulImageProps: KulImagePropsInterface = null;
    /**
     * The text displayed inside the badge.
     * @default ""
     */
    @Prop({ mutable: true, reflect: false }) kulLabel = '';
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted for various button interactions like click.
     */
    @Event({
        eventName: 'kul-badge-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event, eventType: KulBadgeEvents) {
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
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
        return getProps(this, KulBadgeProps, descriptions);
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
        setProps(this, KulBadgeProps, props);
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
        let imageEl: HTMLElement = null;
        if (!this.kulLabel && this.kulImageProps) {
            if (!this.kulImageProps.kulColor) {
                this.kulImageProps.kulColor = `var(${KulThemeColorValues.TEXT_ON_PRIMARY})`;
            }
            imageEl = <kul-image {...this.kulImageProps}></kul-image>;
        }

        return (
            <Host>
                <style>
                    {this.#kulManager.theme.setKulStyle(
                        this.rootElement as KulComponent
                    )}
                </style>
                <div
                    id={KUL_WRAPPER_ID}
                    onClick={(e) => this.onKulEvent(e, 'click')}
                >
                    {this.kulLabel}
                    {imageEl}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}

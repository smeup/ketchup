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
    State,
} from '@stencil/core';
import { KulBadgeEvents, KulBadgeProps } from './kul-badge-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';
import { getProps, setProps } from '../../utils/componentUtils';
import { KulThemeColorValues } from '../../managers/kul-theme/kul-theme-declarations';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';

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
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Debug information.
     */
    @State() debugInfo: KulDebugComponentInfo = {
        endTime: 0,
        renderCount: 0,
        renderEnd: 0,
        renderStart: 0,
        startTime: performance.now(),
    };

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
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-badge-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulBadgeEvents) {
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
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
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
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
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
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
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

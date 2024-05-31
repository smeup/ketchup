import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Prop,
    State,
} from '@stencil/core';
import { Method } from '@stencil/core/internal';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulLazyEvent,
    KulLazyProps,
    KulLazyRenderMode,
} from './kul-lazy-declarations';
import { KulDebugComponentInfo } from '../../components';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';

@Component({
    tag: 'kul-lazy',
    styleUrl: 'kul-lazy.scss',
    shadow: true,
})
export class KulLazy {
    /**
     * References the root HTML element of the component (<kul-lazy>).
     */
    @Element() rootElement: HTMLKulLazyElement;

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
    /**
     * Sets whether the lazy entered the viewport or not.
     */
    @State() isInViewport = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the tag name of the component to be lazy loaded.
     * @default ""
     */
    @Prop({ mutable: false }) kulComponentName = '';
    /**
     * Sets the data of the component to be lazy loaded.
     * @default null
     */
    @Prop({ mutable: false }) kulComponentProps: unknown = null;
    /**
     * Decides when the sub-component should be rendered.
     * By default when both the component props exist and the component is in the viewport.
     * @default "both"
     */
    @Prop({ mutable: false }) kulRenderMode: KulLazyRenderMode = 'both';
    /**
     * Displays an animated SVG placeholder until the component is loaded.
     * @default true
     */
    @Prop({ mutable: false }) kulShowPlaceholder = true;
    /**
     * Customizes the style of the component. This property allows you to apply a custom CSS style to the component.
     * @default ""
     */
    @Prop() kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();
    #intObserver: IntersectionObserver = null;
    #lazyComponent: HTMLElement = null;
    #lazyComponentLoaded = false;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes the component's events.
     */
    @Event({
        eventName: 'kul-lazy-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulLazyEvent) {
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
     * Returns the HTMLElement of the component to lazy load.
     * @returns {HTMLElement} Lazy loaded component.
     */
    @Method()
    async getComponent(): Promise<HTMLElement> {
        return this.#lazyComponent;
    }
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
        return getProps(this, KulLazyProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #setObserver(): void {
        const callback: IntersectionObserverCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.#kulManager.debug.logMessage(
                        this,
                        'kul-lazy entering the viewport, rendering ' +
                            this.kulComponentName +
                            '.'
                    );
                    this.isInViewport = true;
                    this.#intObserver.unobserve(this.rootElement);
                }
            });
        };
        const options: IntersectionObserverInit = {
            threshold: 0.25,
        };
        this.#intObserver = new IntersectionObserver(callback, options);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.rootElement.addEventListener(
            `${this.kulComponentName}-event`,
            (e) => {
                this.onKulEvent(e, 'kul-event');
            }
        );
        this.#kulManager.theme.register(this);
        this.#setObserver();
    }

    componentDidLoad() {
        this.#intObserver.observe(this.rootElement);
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        if (this.#lazyComponent && !this.#lazyComponentLoaded) {
            this.#lazyComponentLoaded = true;
            this.onKulEvent(new CustomEvent('load'), 'load');
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        let content: HTMLElement;
        let resource: HTMLElement;
        let className = this.kulComponentName;
        switch (this.kulComponentName) {
            case 'kul-button':
                //call_to_action.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 48"
                    >
                        <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 32H6v-6h36v6z" />
                    </svg>
                );
                break;
            case 'kul-card':
                //art_track.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 48"
                    >
                        <path d="M44 26H28v-4h16v4zm0-12H28v4h16v-4zM28 34h16v-4H28v4zm-4-16v12c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4zm-3 12l-4.5-6-3.5 4.51-2.5-3.01L7 30h14z" />
                    </svg>
                );
                break;
            case 'kul-checkbox':
                //check_box_outline_blank.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 48"
                    >
                        <path d="M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z" />
                    </svg>
                );
                break;
            case 'kul-chart':
                //chart-bar.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
                    </svg>
                );
                break;
            case 'kul-image':
                //photo.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 48"
                    >
                        <path d="M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z" />
                    </svg>
                );
                break;
            default:
                //art_track.svg
                resource = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 48"
                    >
                        <path d="M44 26H28v-4h16v4zm0-12H28v4h16v-4zM28 34h16v-4H28v4zm-4-16v12c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4zm-3 12l-4.5-6-3.5 4.51-2.5-3.01L7 30h14z" />
                    </svg>
                );
                break;
        }
        if (
            (this.kulRenderMode === 'viewport' && this.isInViewport) ||
            (this.kulRenderMode === 'props' && this.kulComponentProps) ||
            (this.kulRenderMode === 'both' &&
                this.kulComponentProps &&
                this.isInViewport)
        ) {
            const Tag = this.kulComponentName;
            content = (
                <Tag
                    {...(this.kulComponentProps as GenericObject)}
                    ref={(el: HTMLElement) => (this.#lazyComponent = el)}
                ></Tag>
            );
            className += ' kul-loaded';
        } else if (this.kulShowPlaceholder) {
            content = resource;
            className += ' kul-to-be-loaded';
        }

        return (
            <Host class={className}>
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div id={KUL_WRAPPER_ID}>{content}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
        this.#intObserver?.unobserve(this.rootElement);
    }
}

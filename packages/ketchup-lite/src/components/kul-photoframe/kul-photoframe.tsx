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
import { GenericObject } from '../../types/GenericTypes';
import {
    KulPhotoframeEventPayload,
    KulPhotoframeEvent,
    KulPhotoframeProps,
} from './kul-photoframe-declarations';
import { KulDebugComponentInfo } from '../../components';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { getProps } from '../../utils/componentUtils';

@Component({
    tag: 'kul-photoframe',
    styleUrl: 'kul-photoframe.scss',
    shadow: true,
})
export class KulPhotoframe {
    /**
     * References the root HTML element of the component (<kul-photoframe>).
     */
    @Element() rootElement: HTMLKulPhotoframeElement;

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
     * A boolean that flags when the component enters the viewport for the first time to trigger a new render.
     * @default false
     */
    @State() isInViewport = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Html attributes of the picture before the component enters the viewport.
     * @default null
     */
    @Prop() kulPlaceholder: GenericObject = null;
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Percentage of the component dimensions entering the viewport (0.1 => 1).
     * @default 0.25
     */
    @Prop() kulThreshold = 0.25;
    /**
     * Html attributes of the picture after the component enters the viewport.
     * @default null
     */
    @Prop() kulValue: GenericObject = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #intObserver: IntersectionObserver;
    #kulManager = kulManagerInstance();
    #placeholderEl: HTMLImageElement;
    #valueEl: HTMLImageElement;
    #renderValue = false;
    #wrapperEl: HTMLElement;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-photoframe-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulPhotoframeEventPayload>;

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulPhotoframeEvent,
        isPlaceholder = false
    ) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
            isPlaceholder,
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
        return getProps(this, KulPhotoframeProps, descriptions);
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
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.isInViewport = true;
                    this.#intObserver.unobserve(this.rootElement);
                }
            });
        };
        const options: IntersectionObserverInit = {
            threshold: this.kulThreshold,
        };
        this.#intObserver = new IntersectionObserver(callback, options);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
        this.#setObserver();
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
        if (this.isInViewport && !this.#renderValue) {
            this.#renderValue = true;
        }
        return (
            <Host>
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div
                    id={KUL_WRAPPER_ID}
                    ref={(el) => {
                        this.#wrapperEl = el;
                    }}
                >
                    <img
                        {...this.kulPlaceholder}
                        class="placeholder"
                        ref={(el) => (this.#placeholderEl = el)}
                        onLoad={(e) => {
                            if (
                                this.#placeholderEl.naturalWidth >
                                this.#placeholderEl.naturalHeight
                            ) {
                                this.#wrapperEl.classList.add('horizontal');
                            } else {
                                this.#wrapperEl.classList.add('vertical');
                            }
                            this.#intObserver.observe(this.rootElement);
                            this.#placeholderEl.classList.add(
                                'placeholder--loaded'
                            );
                            this.onKulEvent(e, 'load', true);
                        }}
                    ></img>
                    {this.#renderValue ? (
                        <img
                            {...this.kulValue}
                            class="value"
                            ref={(el) => (this.#valueEl = el)}
                            onLoad={(e) => {
                                this.#placeholderEl.classList.add(
                                    'placeholder--fade-out'
                                );
                                this.#valueEl.classList.add('value--fade-in');
                                this.onKulEvent(e, 'load');
                            }}
                        ></img>
                    ) : null}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
        this.#intObserver?.unobserve(this.rootElement);
    }
}

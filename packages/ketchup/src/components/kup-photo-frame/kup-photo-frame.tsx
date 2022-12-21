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
import { Method, VNode } from '@stencil/core/internal';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupPhotoFrameProps } from './kup-photo-frame-declarations';

@Component({
    tag: 'kup-photo-frame',
    styleUrl: 'kup-photo-frame.scss',
    shadow: true,
})
export class KupPhotoFrame {
    /**
     * References the root HTML element of the component (<kup-photo-frame>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() isInViewport: boolean = false;

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
     * Html attributes of the picture before the component enters the viewport.
     * @default {}
     */
    @Prop() placeholderAttrs: GenericObject = {};
    /**
     * Html attributes of the picture after the component enters the viewport.
     * @default {}
     */
    @Prop() resourceAttrs: GenericObject = {};
    /**
     * Percentage of the component dimensions entering the viewport (0.1 => 1).
     * @default 0.25
     */
    @Prop() threshold: number = 0.25;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #intObserver: IntersectionObserver = null;
    #kupManager = kupManagerInstance();
    #placeholderEl: HTMLImageElement = null;
    #resourceEl: HTMLImageElement = null;
    #renderResource = false;
    #wrapperEl: HTMLElement = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the placeholder is loaded.
     */
    @Event({
        eventName: 'kup-photoframe-placeholderload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupPhotoFramePlaceholderLoad: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the resource is loaded.
     */
    @Event({
        eventName: 'kup-photoframe-resourceload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupPhotoFrameResourceLoad: EventEmitter<KupEventPayload>;

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
        return getProps(this, KupPhotoFrameProps, descriptions);
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
        setProps(this, KupPhotoFrameProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    setObserver(): void {
        let callback: IntersectionObserverCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.isInViewport = true;
                    this.#intObserver.unobserve(this.rootElement);
                }
            });
        };
        let options: IntersectionObserverInit = {
            threshold: this.threshold,
        };
        this.#intObserver = new IntersectionObserver(callback, options);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        this.setObserver();
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
        if (this.isInViewport && !this.#renderResource) {
            this.#renderResource = true;
        }
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    ref={(el) => {
                        this.#wrapperEl = el;
                    }}
                >
                    <img
                        {...this.placeholderAttrs}
                        class="placeholder"
                        ref={(el) => (this.#placeholderEl = el)}
                        onLoad={() => {
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
                            this.kupPhotoFramePlaceholderLoad.emit({
                                comp: this,
                                id: this.rootElement.id,
                            });
                        }}
                    ></img>
                    {this.#renderResource ? (
                        <img
                            {...this.resourceAttrs}
                            class="resource"
                            ref={(el) => (this.#resourceEl = el)}
                            onLoad={() => {
                                this.#placeholderEl.classList.add(
                                    'placeholder--fade-out'
                                );
                                this.#resourceEl.classList.add(
                                    'resource--fade-in'
                                );
                                this.kupPhotoFrameResourceLoad.emit({
                                    comp: this,
                                    id: this.rootElement.id,
                                });
                            }}
                        ></img>
                    ) : null}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
        this.#intObserver?.unobserve(this.rootElement);
    }
}

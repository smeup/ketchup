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
    VNode,
} from '@stencil/core';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps } from '../../utils/componentUtils';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulShowcaseEvents,
    KulShowcaseProps,
    KulShowcaseTitle,
} from './kul-showcase-declarations';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import {
    KUL_SHOWCASE_COMPONENTS,
    KUL_SHOWCASE_FRAMEWORK,
    KUL_SHOWCASE_LAYOUT,
    KUL_SHOWCASE_UTILITIES,
} from './kul-showcase-data';
import { KulCardCustomEvent, KulDataDataset } from '../../components';

@Component({
    assetsDirs: ['assets/media'],
    tag: 'kul-showcase',
    styleUrl: 'kul-showcase.scss',
    shadow: true,
})
export class KulShowcase {
    /**
     * References the root HTML element of the component (<kul-showcase>).
     */
    @Element() rootElement: HTMLKulShowcaseElement;

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
     * String keeping track of the current component being navigated by the user.
     * @default ""
     */
    @State() currentComponent = '';
    /**
     * String keeping track of the current framework being navigated by the user.
     * @default ""
     */
    @State() currentFramework = '';
    /**
     * String keeping track of the current layout component being navigated by the user.
     * @default ""
     */
    @State() currentLayout = '';
    /**
     * String keeping track of the current utility being accessed by the user.
     * @default ""
     */
    @State() currentUtility = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

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
        eventName: 'kul-showcase-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulShowcaseEvents) {
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
        return getProps(this, KulShowcaseProps, descriptions);
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

    #comps(type: KulShowcaseTitle): VNode {
        const switchType = () => {
            switch (type) {
                case 'Components':
                    return this.currentComponent.toLowerCase();
                case 'Framework':
                    return this.currentFramework.toLowerCase();
                case 'Layout':
                    return this.currentLayout.toLowerCase();
                case 'Utilities':
                    return this.currentUtility.toLowerCase();
            }
        };
        const Tag = 'kul-showcase-' + switchType();
        return Tag ? <Tag /> : null;
    }

    #cards(type: KulShowcaseTitle) {
        const cards: VNode[] = [];
        const dataset =
            type === 'Components'
                ? KUL_SHOWCASE_COMPONENTS
                : type === 'Framework'
                  ? KUL_SHOWCASE_FRAMEWORK
                  : type === 'Layout'
                    ? KUL_SHOWCASE_LAYOUT
                    : KUL_SHOWCASE_UTILITIES;

        dataset.nodes.forEach((node) => {
            const kulData: KulDataDataset = {
                nodes: [
                    {
                        cells: {
                            icon: { shape: 'image', value: node.icon },
                            text1: { value: node.value },
                            text2: { value: '' },
                            text3: { value: node.description },
                        },
                        id: node.id,
                    },
                ],
            };
            const onEvent: (
                event: KulCardCustomEvent<KulEventPayload>
            ) => void = (e) => {
                if (e.detail.eventType === 'click') {
                    switch (type) {
                        case 'Components':
                            this.currentComponent = node.id;
                            console.log(
                                `Selected component: `,
                                this.currentComponent
                            );
                            break;

                        case 'Framework':
                            this.currentFramework = node.id;
                            console.log(
                                `Selected framework: `,
                                this.currentFramework
                            );
                            break;
                        case 'Layout':
                            this.currentLayout = node.id;
                            console.log(
                                `Selected layout: `,
                                this.currentLayout
                            );
                            break;
                        case 'Utilities':
                            this.currentUtility = node.id;
                            console.log(
                                `Selected utility: `,
                                this.currentUtility
                            );
                            break;
                    }
                }
            };
            cards.push(
                <kul-card
                    id={node.id}
                    kulData={kulData}
                    kulSizeX="300px"
                    kulSizeY="300px"
                    onKul-card-event={onEvent}
                ></kul-card>
            );
        });
        return cards;
    }

    #prepHeader(title: KulShowcaseTitle): VNode {
        const current =
            title === 'Components'
                ? this.currentComponent
                : title === 'Layout'
                  ? this.currentLayout
                  : title === 'Utilities'
                    ? this.currentUtility
                    : this.currentFramework;
        return (
            <div class="header">
                <h2>{current ? current : title}</h2>
                <div class={`navigation ${current ? 'active' : ''}`}>
                    <kul-button
                        class={'kul-full-height kul-full-width'}
                        kulIcon="home"
                        onClick={() => {
                            switch (title) {
                                case 'Components':
                                    this.currentComponent = '';
                                    break;
                                case 'Layout':
                                    this.currentLayout = '';
                                    break;
                                case 'Framework':
                                    this.currentFramework = '';
                                    break;
                                case 'Utilities':
                                    this.currentUtility = '';
                                    break;
                            }
                        }}
                    ></kul-button>
                </div>
            </div>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        return (
            <Host>
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div
                    id={KUL_WRAPPER_ID}
                    onClick={(e) => this.onKulEvent(e, 'click')}
                >
                    <div class="showcase">
                        <div class="section">
                            {this.#prepHeader('Components')}
                            <div class="flex-wrapper flex-wrapper--responsive">
                                {this.currentComponent
                                    ? this.#comps('Components')
                                    : this.#cards('Components')}
                            </div>
                        </div>
                        <div class="section">
                            {this.#prepHeader('Layout')}
                            <div class="flex-wrapper flex-wrapper--responsive">
                                {this.currentLayout
                                    ? this.#comps('Layout')
                                    : this.#cards('Layout')}
                            </div>
                        </div>
                        <div class="section">
                            {this.#prepHeader('Framework')}
                            <div class="flex-wrapper flex-wrapper--responsive">
                                {this.currentFramework
                                    ? this.#comps('Framework')
                                    : this.#cards('Framework')}
                            </div>
                        </div>
                        <div class="section">
                            {this.#prepHeader('Utilities')}
                            <div class="flex-wrapper flex-wrapper--responsive">
                                {this.currentUtility
                                    ? this.#comps('Utilities')
                                    : this.#cards('Utilities')}
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}

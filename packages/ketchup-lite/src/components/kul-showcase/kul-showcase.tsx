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
import { getProps, setProps } from '../../utils/componentUtils';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulShowcaseEvents,
    KulShowcaseProps,
} from './kul-showcase-declarations';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KUL_SHOWCASE_COMPONENTS } from './kul-showcase-data';
import { KulCardCustomEvent, KulDataDataset } from '../../components';

@Component({
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
     * Array of strings keeping track of user navigation.
     * @default ""
     */
    @State() history: string[] = [];

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
     * Describes event emitted for various button interactions like click.
     */
    @Event({
        eventName: 'kul-showcase-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event, eventType: KulShowcaseEvents) {
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
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KulShowcaseProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #compCards(): VNode[] {
        const cards: VNode[] = [];
        KUL_SHOWCASE_COMPONENTS.nodes.forEach((node) => {
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
                    this.history.push(node.id);
                    console.log('History changed.', this.history);
                }
            };
            cards.push(
                <kul-card
                    kulData={kulData}
                    kulSizeX="300px"
                    kulSizeY="300px"
                    onKul-card-event={onEvent}
                ></kul-card>
            );
        });
        return cards;
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
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div
                    id={KUL_WRAPPER_ID}
                    onClick={(e) => this.onKulEvent(e, 'click')}
                >
                    <div class="section--wrapper">
                        <div class="section">
                            <h2>Utilities</h2>
                            <div class="flex-wrapper flex-wrapper--responsive">
                                <kul-card
                                    data-description="Environment to test a single component's behavior. IMPORTANT: do not commit any change on this page!"
                                    data-href="pages/debug.html"
                                    data-icon="bug"
                                    data-title="Debug"
                                    id="debug"
                                ></kul-card>
                                <kul-card
                                    data-description="Environment for performance testing through kul-probe."
                                    data-href="pages/probe.html"
                                    data-icon="timer"
                                    data-title="Probe"
                                    id="probe"
                                ></kul-card>
                            </div>
                        </div>
                        <div class="section">
                            <h2>Components</h2>
                            <div class="flex-wrapper flex-wrapper--responsive">
                                {this.#compCards()}
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

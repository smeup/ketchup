import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Fragment,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import {
    KulArticleDataset,
    KulArticleEvents,
    KulArticleNode,
    KulArticleProps,
} from './kul-article-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps, setProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';

@Component({
    tag: 'kul-article',
    styleUrl: 'kul-article.scss',
    shadow: true,
})
export class KulArticle {
    /**
     * References the root HTML element of the component (<kul-article>).
     */
    @Element() rootElement: HTMLKulArticleElement;

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
     * The actual data of the article.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulArticleDataset = null;
    /**
     * Enables customization of the component's style.
     * @default "" - No custom style applied by default.
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
        eventName: 'kul-article-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event, eventType: KulArticleEvents) {
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
     * Retrieves the debug information reflecting the current state of the component.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves to a KulDebugComponentInfo object containing debug information.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Retrieves the properties of the component, with optional descriptions.
     * @param {boolean} descriptions - If true, returns properties with descriptions; otherwise, returns properties only.
     * @returns {Promise<GenericObject>} A promise that resolves to an object where each key is a property name, optionally with its description.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulArticleProps, descriptions);
    }
    /**
     * Triggers a re-render of the component to reflect any state changes.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Assigns a set of properties to the component, triggering updates if necessary.
     * @param {GenericObject} props - An object containing properties to be set on the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KulArticleProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #recursive(node: KulArticleNode, depth: number) {
        switch (depth) {
            case 0:
                return this.#articleTemplate(node, depth);
            case 1:
                return this.#sectionTemplate(node, depth);
            case 2:
                return this.#paragraphTemplate(node, depth);
            default:
                return node.children?.length
                    ? this.#paragraphTemplate(node, depth)
                    : this.#contentTemplate(node, depth);
        }
    }

    #articleTemplate(node: KulArticleNode, depth: number): VNode {
        return (
            <Fragment>
                <article class="article" data-depth={depth.toString()}>
                    {node.value ? <h1>{node.value}</h1> : undefined}
                    {node.children
                        ? node.children.map((child) =>
                              this.#recursive(child, depth + 1)
                          )
                        : null}
                </article>
            </Fragment>
        );
    }

    #sectionTemplate(node: KulArticleNode, depth: number): VNode {
        return (
            <Fragment>
                <section class="section" data-depth={depth.toString()}>
                    {node.value ? <h2>{node.value}</h2> : undefined}
                    {node.children
                        ? node.children.map((child) =>
                              this.#recursive(child, depth + 1)
                          )
                        : null}
                </section>
            </Fragment>
        );
    }

    #paragraphTemplate(node: KulArticleNode, depth: number): VNode {
        return (
            <Fragment>
                <p class="paragraph" data-depth={depth.toString()}>
                    {node.value ? <h3>{node.value}</h3> : undefined}
                    {node.children
                        ? node.children.map((child) =>
                              this.#recursive(child, depth + 1)
                          )
                        : null}
                </p>
            </Fragment>
        );
    }

    #contentTemplate(node: KulArticleNode, depth: number): VNode {
        const ComponentTag = node.tagName || 'span';
        return (
            <ComponentTag
                class={`content content--${ComponentTag}`}
                data-depth={depth.toString()}
            >
                {node.value}
            </ComponentTag>
        );
    }

    #prepArticle(): VNode[] {
        const elements: VNode[] = [];
        const nodes = this.kulData.nodes;
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            elements.push(this.#recursive(node, 0));
        }
        return <Fragment>{elements}</Fragment>;
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
        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>{this.#prepArticle()}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}

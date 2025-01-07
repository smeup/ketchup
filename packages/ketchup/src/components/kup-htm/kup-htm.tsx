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
    Fragment,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupDataCell } from '../../managers/kup-data/kup-data-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { KupHTMProps } from './kup-htm-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';

@Component({
    tag: 'kup-htm',
    styleUrl: 'kup-htm.scss',
    shadow: true,
})
export class KupHTM {
    /**
     * References the root HTML element of the component (<kup-htm>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     *  Data containing the url or html.
     * @default null
     */
    @Prop() data: KupDataCell;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-htm-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

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
        return getProps(this, KupHTMProps, descriptions);
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
        setProps(this, KupHTMProps, props);
    }

    /*-------------------------------------------------*/
    /*          P r i v a t e    M e t h o d s         */
    /*-------------------------------------------------*/

    #isObjectCompatibleWithHTM(object: KupObj): boolean {
        return (
            this.#kupManager.objects.isLink(object) ||
            this.#kupManager.objects.isJ1Pathfile(object)
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        this.#kupManager.language.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const isLink = this.#isObjectCompatibleWithHTM(this?.data?.obj);

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class={`kup-htm ${isLink ? 'is-link' : ''}`}>
                        {isLink ? (
                            <Fragment>
                                <a
                                    href={this.data.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {this.#kupManager.language.translate(
                                        KupLanguageGeneric.OPEN_IN_NEW_TAB
                                    )}
                                </a>
                                <iframe
                                    src={this.data.value}
                                    frameBorder="0"
                                ></iframe>
                            </Fragment>
                        ) : (
                            <div innerHTML={this.data.value} />
                        )}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
        this.#kupManager.language.unregister(this);
    }
}

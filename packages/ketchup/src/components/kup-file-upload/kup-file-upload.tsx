import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Host,
    Method,
    Prop,
    Watch,
    h,
    State,
} from '@stencil/core';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import {
    KupDom,
    KupManager,
} from '../../managers/kup-manager/kup-manager-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps } from '../../utils/utils';
import { KupFileUploadProps } from './kup-file-upload-declaration';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';

@Component({
    tag: 'kup-file-upload',
    // styleUrl: 'kup-file-upload.scss',
    shadow: true,
})
export class KupFileUpload {
    /**
     * References the root HTML element of the component (<kup-file-upload>).
     */
    @Element() rootElement: HTMLElement;

    //#region PROPS
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';

    /**
     * Actual data of the input field.
     * @default null
     */
    // TODO: TYPING
    @Prop() data = null;
    //#endregion

    //#region STATES
    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() inputRef?: HTMLInputElement;
    @State() inputFileName = '';

    //#endregion

    //#region VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
        console.log(this.data);
    }
    //#endregion

    //#region PUBLIC METHODS
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
        return getProps(this, KupFileUploadProps, descriptions);
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
        // setProps(this, KupFileUploadProps, props);
    }
    //#endregion

    //#region EVENTS
    /*-------------------------------------------------*/
    /*           Events                                */
    /*-------------------------------------------------*/

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kup-file-upload-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/
    #handleClick() {
        this.inputRef.click();
    }

    #handleFileChange(event: Event) {
        this.inputFileName = (event.target as HTMLInputElement).files[0].name;
    }
    //#endregion

    //#region LIFECYCLE HOOKS
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({ comp: this, id: this.rootElement.id });

        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div
                        style={{
                            display: 'flex',
                            'flex-direction': 'column',
                            gap: '1em',
                        }}
                    >
                        <input
                            type="file"
                            ref={(el) => (this.inputRef = el)}
                            onChange={this.#handleFileChange.bind(this)}
                            hidden
                        ></input>
                        <FButton
                            icon="upload"
                            buttonType="file"
                            label={this.#kupManager.language.translate(
                                KupLanguageGeneric.UPLOAD
                            )}
                            onClick={this.#handleClick.bind(this)}
                        ></FButton>
                        <span>{this.inputFileName}</span>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
    //#endregion
}

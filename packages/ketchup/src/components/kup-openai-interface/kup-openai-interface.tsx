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
import type {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { KupOpenAiInterfaceProps } from './kup-openai-interface-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { KupDataTableDataset } from '../kup-data-table/kup-data-table-declarations';

@Component({
    tag: 'kup-openai-interface',
    styleUrl: 'kup-openai-interface.scss',
    shadow: true,
})
export class KupOpenAiInterface {
    /**
     * References the root HTML element of the component (<kup-openai-interface>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

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
     * Sets the data that will be used for OpenAI comunication.
     * @default null
     */
    @Prop({ mutable: true }) data: KupDataDataset = null;
    /**
     * Sets the dialog title
     * @default "Open AI integration"
     */
    @Prop() dialogTitle: string = 'Open AI integration';
    /**
     * Sets the text area label
     * @default "Insert natural language request..."
     */
    @Prop() label: string = 'Insert natural language request...';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private dragHandler: HTMLElement = null;
    private kupManager = kupManagerInstance();
    private textArea: HTMLKupTextFieldElement = null;
    private dataTable: HTMLKupDataTableElement = null;
    private button: HTMLKupButtonElement = null;
    private messages: string[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-openai-interface-ready',
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
        return getProps(this, KupOpenAiInterfaceProps, descriptions);
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
        setProps(this, KupOpenAiInterfaceProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    async #openAiInteract() {
        this.button.showSpinner = true;
        this.messages = await this.kupManager.interactOpenAI(
            await this.textArea.getValue()
        );
        this.dataTable.data = this.#dataTableData();
        this.button.showSpinner = false;
    }

    #dataTableData(): KupDataTableDataset {
        const data: KupDataTableDataset = {};
        data.columns = [{ name: 'mess', title: 'Message' }];
        data.rows = [];
        if (this.messages) {
            for (let i = 0; i < this.messages.length; i++) {
                const mess = this.messages[i];
                if (mess) {
                    data.rows.push({
                        unselectable: true,
                        cells: { mess: { value: mess } },
                    });
                }
            }
        }
        return data;
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.dragHandler =
            this.rootElement.shadowRoot.querySelector('#drag-handle');
        this.kupManager.interact.dialogify(this.rootElement, this.dragHandler);
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const dataTableProps: GenericObject = {};
        dataTableProps.data = this.#dataTableData();
        const textAreaProps: GenericObject = {};
        textAreaProps.textArea = true;
        textAreaProps.label = this.label;
        const buttonProps: GenericObject = {};
        buttonProps.label = 'Confirm';
        buttonProps.icon = 'check';
        buttonProps.showSpinner = false;
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="openai-interface-wrapper">
                        <div class="actions" id="drag-handle">
                            <div class="header">
                                {this.dialogTitle ? (
                                    <div class="header__title">
                                        {this.dialogTitle}
                                    </div>
                                ) : null}
                                <FImage
                                    onClick={() => this.kupManager.hideOpenAI()}
                                    sizeX="1.25em"
                                    sizeY="1.25em"
                                    resource="clear"
                                    wrapperClass="header__close"
                                ></FImage>
                            </div>

                            <kup-text-field
                                {...textAreaProps}
                                ref={(el) => (this.textArea = el)}
                            ></kup-text-field>
                            <kup-button
                                {...buttonProps}
                                ref={(el) => (this.button = el)}
                                onKup-button-click={() =>
                                    this.#openAiInteract()
                                }
                            ></kup-button>
                            <kup-data-table
                                {...dataTableProps}
                                ref={(el) => (this.dataTable = el)}
                            ></kup-data-table>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}

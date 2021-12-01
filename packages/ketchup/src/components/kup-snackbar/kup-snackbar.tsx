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
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { KupEventPayload } from '../../types/GenericTypes';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupSnackbarProps } from './kup-snackbar-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';

@Component({
    tag: 'kup-snackbar',
    styleUrl: 'kup-snackbar.scss',
    shadow: true,
})
export class KupSnackbar {
    /**
     * References the root HTML element of the component (<kup-snackbar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default false
     */
    @State() visible: boolean = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * Default at 0. Gets/sets the automatic dismiss timeout in milliseconds.
     * @default null
     */
    @Prop() timeout: number = null;
    /**
     * Gets/sets the textContent of the label element.
     * @default ''
     */
    @Prop() text: string = '';
    /**
     * If true the close button appears
     * @default false
     */
    @Prop() closeAction: boolean = false;
    /**
     * If true the action button appears
     * @default false
     */
    @Prop() actionButton: boolean = false;
    /**
     * Set text of the action button
     * @default 'Action'
     */
    @Prop() buttonText: string = 'Action';
    /**
     * Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.
     * @default FButtonStyling.RAISED
     */
    @Prop({ mutable: false }) styling: FButtonStyling = FButtonStyling.RAISED;
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when close or action button are clicked.
     */
    @Event({
        eventName: 'kup-snackbar-actionclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupActionClick: EventEmitter<KupEventPayload>;

    onKupActionLabelClick() {
        this.hide();
        this.kupActionClick.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

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
        return getProps(this, KupSnackbarProps, descriptions);
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
        setProps(this, KupSnackbarProps, props);
    }
    /**
     * Method to open the snackbar
     */
    @Method()
    async show(): Promise<void> {
        this.visible = true;
    }
    /**
     * Method to close the snackbar
     */
    @Method()
    async hide(): Promise<void> {
        this.visible = false;
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const labelProp: FButtonProps = {
            label: this.buttonText,
            styling: this.styling,
            onClick: () => this.onKupActionLabelClick(),
        };
        const actionProp: FButtonProps = {
            icon: 'close',
            onClick: () => this.hide(),
        };
        if (this.visible) {
            return (
                <Host
                    kup-opened={
                        this.timeout == null
                            ? true
                            : setTimeout(() => {
                                  this.hide();
                              }, this.timeout)
                    }
                >
                    <div id={componentWrapperId}>
                        <div class="snackbar-container">
                            <div class="snackbar-text">{this.text}</div>
                            <div class="snackbar-action">
                                {this.actionButton ? (
                                    <div class="snackbar-button action-label">
                                        <FButton {...labelProp} />
                                    </div>
                                ) : null}
                                {this.closeAction ? (
                                    <div class="snackbar-button close-action">
                                        <FButton {...actionProp} />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Host>
            );
        } else {
            return null;
        }
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

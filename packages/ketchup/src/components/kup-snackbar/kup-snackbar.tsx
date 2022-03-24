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
} from '../../managers/kup-manager/kup-manager';
import { KupEventPayload } from '../../types/GenericTypes';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupSnackbarProps, snackbarClass } from './kup-snackbar-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonProps } from '../../f-components/f-button/f-button-declarations';

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
     * Set of FButton props to set the action button.
     * @default null
     */
    @Prop() actionButton: FButtonProps = null;
    /**
     * When true, the hide button will be displayed.
     * @default true
     */
    @Prop() closeButton: boolean = true;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Sets the textual content of the snackbar.
     * @default ''
     */
    @Prop() text: string = '';
    /**
     * Defaults at null, when set the snackbar will automatically disappear after the specified amount of milliseconds.
     * @default null
     */
    @Prop() timeout: number = null;

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
     * Triggered when action button is clicked.
     */
    @Event({
        eventName: 'kup-snackbar-actionclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupActionClick: EventEmitter<KupEventPayload>;

    onKupActionClick() {
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
     * Hides the snackbar.
     */
    @Method()
    async hide(): Promise<void> {
        this.visible = false;
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
     * Displays the snackbar.
     */
    @Method()
    async show(): Promise<void> {
        this.visible = true;
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
        if (this.timeout && this.visible) {
            setTimeout(() => {
                this.hide();
            }, this.timeout);
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host kup-visible={this.visible}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class={snackbarClass}>
                        <div class={`${snackbarClass}__text`}>{this.text}</div>
                        {this.actionButton || this.closeButton ? (
                            <div class={`${snackbarClass}__buttons`}>
                                {this.actionButton ? (
                                    <div class={`${snackbarClass}__action`}>
                                        <FButton
                                            {...this.actionButton}
                                            onClick={() =>
                                                this.onKupActionClick()
                                            }
                                        />
                                    </div>
                                ) : null}
                                {this.closeButton ? (
                                    <div class={`${snackbarClass}__close`}>
                                        <FButton
                                            icon="close"
                                            onClick={() => this.hide()}
                                        />
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

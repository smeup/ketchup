import {
    Component,
    Event,
    Element,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
} from '@stencil/core';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupRatingClickEventPayload,
    KupRatingProps,
} from './kup-rating-declarations';
import { FRating } from '../../f-components/f-rating/f-rating';
import { FRatingProps } from '../../f-components/f-rating/f-rating-declarations';

@Component({
    tag: 'kup-rating',
    styleUrl: 'kup-rating.scss',
    shadow: true,
})
export class KupRating {
    /**
     * References the root HTML element of the component (<kup-rating>).
     */
    @Element() rootElement: HTMLElement;

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
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Max number of stars (default 5).
     * @default 5
     */
    @Prop() maxValue: number = 5;
    /**
     * Rated stars.
     * @default 0
     */
    @Prop() value: number = 0;

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

    @Event({
        eventName: 'kup-rating-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupRatingClickEventPayload>;

    onKupClick(newValue: number) {
        if (!this.disabled) {
            this.value = newValue;
            this.kupClick.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
            });
            this.refresh();
        }
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
        return getProps(this, KupRatingProps, descriptions);
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
        setProps(this, KupRatingProps, props);
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
        const props: FRatingProps = {
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            disabled: this.disabled,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            maxValue: this.maxValue,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            value: this.value,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            onClick: (i) => this.onKupClick(i),
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FRating {...props}></FRating>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

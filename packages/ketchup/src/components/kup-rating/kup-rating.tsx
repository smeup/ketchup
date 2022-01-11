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
    State,
    Watch,
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
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() stars: Array<object> = [];

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
    kupRatingClick: EventEmitter<KupRatingClickEventPayload>;

    onStarClick(newValue: number) {
        if (!this.disabled) {
            this.value = newValue;
            this.buildStars(this.value);
            this.kupRatingClick.emit({
                comp: this,
                id: this.rootElement.id,
                value: this.value,
            });
        }
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('value')
    @Watch('maxValue')
    private onValueChanged() {
        this.buildStars(this.value);
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
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    onMouseOver(newValue: number) {
        if (!this.disabled) {
            this.buildStars(newValue);
        }
    }

    onMouseOut() {
        if (!this.disabled) {
            this.buildStars(this.value);
        }
    }

    buildStars(numberOfStars: number) {
        let stars = [];

        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                stars.push(
                    <span
                        class="rating"
                        onMouseOver={() => this.onMouseOver(i)}
                        onMouseOut={() => this.onMouseOut()}
                        onClick={() => this.onStarClick(i)}
                    >
                        &#x2605;
                    </span>
                );
            } else {
                stars.push(
                    <span
                        class="rating"
                        onMouseOver={() => this.onMouseOver(i)}
                        onMouseOut={() => this.onMouseOut()}
                        onClick={() => this.onStarClick(i)}
                    >
                        &#x2606;
                    </span>
                );
            }
        }

        this.stars = stars;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.onValueChanged();
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
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div>{this.stars}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}

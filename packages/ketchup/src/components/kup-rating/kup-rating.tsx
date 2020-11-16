import {
    Component,
    Prop,
    Event,
    Element,
    Host,
    EventEmitter,
    State,
    Watch,
    h,
    Method,
} from '@stencil/core';
import { logLoad, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

@Component({
    tag: 'kup-rating',
    styleUrl: 'kup-rating.scss',
    shadow: true,
})
export class KupRating {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() stars: Array<object> = [];

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Max number of stars (default 5)
     */
    @Prop() maxValue: number = 5;
    /**
     * Rated stars
     */
    @Prop() value: number = 0;

    @Event() kupRatingClicked: EventEmitter;

    @Watch('value')
    @Watch('maxValue')
    private onValueChanged() {
        this.buildStars(this.value);
    }

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onStarClicked(newValue: number) {
        if (!this.disabled) {
            this.value = newValue;
            this.buildStars(this.value);
            this.kupRatingClicked.emit({ value: this.value });
        }
    }

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
                        onClick={() => this.onStarClicked(i)}
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
                        onClick={() => this.onStarClicked(i)}
                    >
                        &#x2606;
                    </span>
                );
            }
        }

        this.stars = stars;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.onValueChanged();
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div>{this.stars}</div>
                </div>
            </Host>
        );
    }
}

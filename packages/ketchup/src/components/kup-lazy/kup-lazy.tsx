import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { EventListenerCallback, Method } from '@stencil/core/internal';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theming';

@Component({
    tag: 'kup-lazy',
    styleUrl: 'kup-lazy.scss',
    shadow: true,
})
export class KupLazy {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() isInViewport: boolean = false;

    /**
     * Sets the tag name of the component to be lazy loaded.
     */
    @Prop({ reflect: true }) componentName: string = undefined;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Sets the data of the component to be lazy loaded.
     */
    @Prop() data: {} = undefined;
    /**
     * Displays an animated SVG placeholder until the component is loaded.
     */

    @Prop() showPlaceholder: boolean = true;

    private viewportCheck: EventListenerCallback = () => {
        this.isInViewport = this.isElementPartiallyInViewport();
    };

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    isElementPartiallyInViewport() {
        var rect = this.rootElement.getBoundingClientRect();

        if (
            rect.top === 0 &&
            rect.left === 0 &&
            rect.right === 0 &&
            rect.bottom === 0 &&
            rect.height === 0 &&
            rect.width === 0 &&
            rect.x === 0 &&
            rect.y === 0
        ) {
            return false;
        }

        var windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        var windowWidth =
            window.innerWidth || document.documentElement.clientWidth;

        var vertInView =
            rect.top <= windowHeight && rect.top + rect.height >= 0;
        var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

        return vertInView && horInView;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.isInViewport = this.isElementPartiallyInViewport();
        if (!this.isInViewport) {
            document.addEventListener('DOMContentLoaded', this.viewportCheck);
            document.addEventListener('resize', this.viewportCheck);
            document.addEventListener('scroll', this.viewportCheck);
        }
    }

    componentWillUpdate() {
        if (this.isInViewport) {
            document.removeEventListener(
                'DOMContentLoaded',
                this.viewportCheck
            );
            document.removeEventListener('resize', this.viewportCheck);
            document.removeEventListener('scroll', this.viewportCheck);
        }
    }

    render() {
        let content: HTMLElement;
        if (this.isInViewport) {
            let Tag = this.componentName;
            content = <Tag {...this.data}></Tag>;
        } else if (this.showPlaceholder) {
            content = (
                <kup-image
                    customStyle="#kup-component { animation: shine ease 2s infinite; } 
            @keyframes shine {
              0% {
                opacity: 0.4;
              }
              50% {
                opacity: 0.8;
              }
              100% {
                opacity: 0.4;
              }
            }"
                    resource="lazy"
                ></kup-image>
            );
        }
        return (
            <Host class="handles-custom-style">
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">{content}</div>
            </Host>
        );
    }
}

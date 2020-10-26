import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
    getAssetPath,
} from '@stencil/core';

import { MDCTabBar } from '@material/tab-bar';
import { ComponentTabBarElement } from './kup-tab-bar-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-tab-bar',
    styleUrl: 'kup-tab-bar.scss',
    shadow: true,
})
export class KupTabBar {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentTabBarElement[] = [];

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    @Event({
        eventName: 'kupTabBarBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupTabBarClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupTabBarFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur(i: number, e: Event) {
        this.kupBlur.emit({
            index: i,
            el: e.target,
        });
    }

    onKupClick(i: number, e: Event) {
        this.kupClick.emit({
            index: i,
            el: e.target,
        });
    }

    onKupFocus(i: number, e: Event) {
        this.kupFocus.emit({
            index: i,
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root) {
            MDCTabBar.attachTo(root.querySelector('.mdc-tab-bar'));
        }
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        let tabBar: Array<HTMLElement> = [];
        let tabEl: HTMLElement;
        let componentClass: string = 'mdc-tab-bar';

        for (let i = 0; i < this.data.length; i++) {
            let tabClass: string = 'mdc-tab';
            let indicatorClass: string = 'mdc-tab-indicator';
            let iconEl: HTMLElement = null;

            if (this.data[i].active === true) {
                tabClass += ' mdc-tab--active';
                indicatorClass += ' mdc-tab-indicator--active';
            }

            if (this.data[i].icon !== '') {
                let svg: string = `url('${getAssetPath(
                    `./assets/svg/${this.data[i].icon}.svg`
                )}') no-repeat center`;
                let iconStyle = {
                    mask: svg,
                    webkitMask: svg,
                };
                iconEl = (
                    <span
                        style={iconStyle}
                        class="mdc-tab__icon material-icons icon-container"
                    ></span>
                );
            }

            tabEl = (
                <button
                    class={tabClass}
                    role="tab"
                    aria-selected="true"
                    tabindex={i}
                    onBlur={(e) => this.onKupBlur(i, e)}
                    onClick={(e) => this.onKupClick(i, e)}
                    onFocus={(e) => this.onKupFocus(i, e)}
                >
                    <span class="mdc-tab__content">
                        {iconEl}
                        <span class="mdc-tab__text-label">
                            {this.data[i].text}
                        </span>
                    </span>
                    <span class={indicatorClass}>
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                </button>
            );
            tabBar.push(tabEl);
        }

        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class={componentClass} role="tablist">
                        <div class="mdc-tab-scroller">
                            <div class="mdc-tab-scroller__scroll-area">
                                <div class="mdc-tab-scroller__scroll-content">
                                    {tabBar}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}

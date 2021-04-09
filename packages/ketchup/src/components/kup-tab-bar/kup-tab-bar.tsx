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
import {
    ComponentTabBarElement,
    KupTabBarProps,
} from './kup-tab-bar-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { GenericObject } from '../../types/GenericTypes';
import { KupDebugCategory } from '../../utils/kup-debug/kup-debug-declarations';

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
    @Prop() customStyle: string = '';
    /**
     * List of elements.
     */
    @Prop() data: ComponentTabBarElement[] = [];

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

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
    async themeChangeCallback(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        let props: GenericObject = {};
        if (descriptions) {
            props = KupTabBarProps;
        } else {
            for (const key in KupTabBarProps) {
                if (Object.prototype.hasOwnProperty.call(KupTabBarProps, key)) {
                    props[key] = this[key];
                }
            }
        }
        return props;
    }

    onKupBlur(i: number, e: Event) {
        this.kupBlur.emit({
            index: i,
            el: e.target,
        });
    }

    onKupClick(i: number, e: Event) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i].active = false;
        }
        this.data[i].active = true;

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

    private consistencyCheck() {
        let activeTabs: number = 0;
        let lastActiveOccurrence: number = 0;
        if (this.data) {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].active) {
                    activeTabs++;
                    lastActiveOccurrence = i;
                }
                this.data[i].active = false;
            }
            if (activeTabs > 1) {
                this.data[lastActiveOccurrence].active = true;
                this.kupManager.debug.logMessage(
                    this,
                    'Too many active tabs, forcing last one.',
                    KupDebugCategory.WARNING
                );
            } else if (activeTabs === 0) {
                this.data[0].active = true;
                this.kupManager.debug.logMessage(
                    this,
                    'No active tabs detected, forcing first one.'
                );
            } else {
                this.data[lastActiveOccurrence].active = true;
            }
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.consistencyCheck();
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root) {
            MDCTabBar.attachTo(root.querySelector('.mdc-tab-bar'));
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data || this.data.length === 0) {
            this.kupManager.debug.logMessage(
                this,
                'Empty data.',
                KupDebugCategory.WARNING
            );
        }
        let tabBar: Array<HTMLElement> = [];
        let tabEl: HTMLElement;
        let title: string = '';
        let componentClass: string = 'mdc-tab-bar';

        for (let i = 0; i < this.data.length; i++) {
            let tabClass: string = 'mdc-tab';
            let indicatorClass: string = 'mdc-tab-indicator';
            let iconEl: HTMLElement = null;

            if (this.data[i].active) {
                tabClass += ' mdc-tab--active';
                indicatorClass += ' mdc-tab-indicator--active';
            }

            if (this.data[i].icon) {
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

            if (this.data[i].title) {
                title = this.data[i].title;
            }

            tabEl = (
                <button
                    class={tabClass}
                    role="tab"
                    aria-selected="true"
                    tabindex={i}
                    title={title}
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
                <style>{this.kupManager.theme.setCustomStyle(this)}</style>
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

    componentDidUnload() {
        this.kupManager.theme.unregister(this);
    }
}

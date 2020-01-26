import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    State,
    Host,
    h,
} from '@stencil/core';

import { MDCTabBar } from '@material/tab-bar';
import { WidgetTabBarElement } from './wup-tab-bar-declarations';

@Component({
    tag: 'wup-tab-bar',
    styleUrl: 'wup-tab-bar.scss',
    shadow: true,
})
export class WupTabBar {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * List of elements.
     */
    @Prop() items: WidgetTabBarElement[] = [];

    @Event({
        eventName: 'kupTabBarBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupTabBarChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupTabBarClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupTabBarFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupTabBarInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupChange.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupInput(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupInput.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            MDCTabBar.attachTo(root.querySelector('.mdc-tab-bar'));
        }
    }

    render() {
        let tabBar: Array<HTMLElement> = [];
        let tabEl: HTMLElement;
        let widgetClass: string = 'mdc-tab-bar';

        if (this.custom) {
            widgetClass += ' custom';
        }

        for (let i = 0; i < this.items.length; i++) {
            let tabClass: string = 'mdc-tab';
            let indicatorClass: string = 'mdc-tab-indicator';
            let iconEl: HTMLElement = null;

            if (this.items[i].status === 'Active') {
                tabClass += ' mdc-tab--active';
                indicatorClass += ' mdc-tab-indicator--active';
            }

            if (this.items[i].icon !== '') {
                iconEl = (
                    <span
                        class="mdc-tab__icon material-icons"
                        aria-hidden="true"
                    >
                        {this.items[i].icon}
                    </span>
                );
            }

            tabEl = (
                <button
                    class={tabClass}
                    role="tab"
                    aria-selected="true"
                    tabindex={i}
                    value={this.items[i].text}
                    onBlur={this.onKupBlur.bind(this)}
                    onChange={this.onKupChange.bind(this)}
                    onClick={this.onKupClick.bind(this)}
                    onFocus={this.onKupFocus.bind(this)}
                    onInput={this.onKupInput.bind(this)}
                >
                    <span class="mdc-tab__content">
                        {iconEl}
                        <span class="mdc-tab__text-label">
                            {this.items[i].text}
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
                <div id="kup-component">
                    <div class={widgetClass} role="tablist">
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

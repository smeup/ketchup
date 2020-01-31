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
import { ComponentTabBarElement } from './wup-tab-bar-declarations';

@Component({
    tag: 'wup-tab-bar',
    styleUrl: 'wup-tab-bar.scss',
    shadow: true,
})
export class WupTabBar {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * List of elements.
     */
    @Prop() items: ComponentTabBarElement[] = [];

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
        eventName: 'kupTabBarChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
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

    @Event({
        eventName: 'kupTabBarInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    //---- Methods ----

    onKupBlur(i: number, e: Event) {
        this.kupBlur.emit({
            index: i,
            el: e.target,
        });
    }

    onKupChange(i: number, e: Event) {
        this.kupChange.emit({
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

    onKupInput(i: number, e: Event) {
        this.kupInput.emit({
            index: i,
            el: e.target,
        });
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
                    onBlur={(e) => this.onKupBlur(i, e)}
                    onChange={(e) => this.onKupChange(i, e)}
                    onClick={(e) => this.onKupClick(i, e)}
                    onFocus={(e) => this.onKupFocus(i, e)}
                    onInput={(e) => this.onKupInput(i, e)}
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

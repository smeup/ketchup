import { Component, Prop, Element, Host, h } from '@stencil/core';

import { MDCTabBar } from '@material/tab-bar';
import { WidgetTabBarElement } from './wup-tab-bar-declarations';

@Component({
    tag: 'wup-tab-bar',
    styleUrl: 'wup-tab-bar.scss',
    shadow: true,
})
export class WupTabBar {
    /**
     * List of elements.
     */
    @Prop() items: WidgetTabBarElement[] = [];

    @Element() rootElement: HTMLElement;

    //---- Methods ----

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            MDCTabBar.attachTo(root.querySelector('.mdc-tab-bar'));
        }
    }

    //---- Rendering ----

    render() {
        let tabBar: Array<HTMLElement> = [];
        let tabEl: HTMLElement;

        for (let i = 0; i < this.items.length; i++) {
            let componentClass: string = 'mdc-tab';
            let indicatorClass: string = 'mdc-tab-indicator';

            if (this.items[i].status === 'Active') {
                componentClass += ' mdc-tab--active';
                indicatorClass += ' mdc-tab-indicator--active';
            }

            tabEl = (
                <button
                    class={componentClass}
                    role="tab"
                    aria-selected="true"
                    tabindex={i}
                >
                    <span class="mdc-tab__content">
                        <span
                            class="mdc-tab__icon material-icons"
                            aria-hidden="true"
                        >
                            {this.items[i].icon}
                        </span>
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
                <div class="mdc-tab-bar" role="tablist">
                    <div class="mdc-tab-scroller">
                        <div class="mdc-tab-scroller__scroll-area">
                            <div class="mdc-tab-scroller__scroll-content">
                                {tabBar}
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}

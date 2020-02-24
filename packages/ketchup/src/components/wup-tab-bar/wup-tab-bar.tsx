import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
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
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentTabBarElement[] = [];

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

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            MDCTabBar.attachTo(root.querySelector('.mdc-tab-bar'));
        }
    }

    render() {
        let tabBar: Array<HTMLElement> = [];
        let tabEl: HTMLElement;
        let componentClass: string = 'mdc-tab-bar';
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        for (let i = 0; i < this.data.length; i++) {
            let tabClass: string = 'mdc-tab';
            let indicatorClass: string = 'mdc-tab-indicator';
            let iconEl: HTMLElement = null;

            if (this.data[i].active === true) {
                tabClass += ' mdc-tab--active';
                indicatorClass += ' mdc-tab-indicator--active';
            }

            if (this.data[i].icon !== '') {
                iconEl = (
                    <wup-icon
                        color="var(--kup-main-color)"
                        class="mdc-tab__icon material-icons"
                        dimensions="24px"
                        name={this.data[i].icon}
                    ></wup-icon>
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
                {customStyle}
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

import { Component, Element, Host, State, h } from '@stencil/core';
import { EventListenerCallback } from '@stencil/core/internal';

@Component({
    tag: 'kup-lazy',
    styleUrl: 'kup-lazy.scss',
    shadow: true,
})
export class KupLazy {
    @Element() rootElement: HTMLElement;
    @State() isInViewport: boolean = false;

    private viewportCheck: EventListenerCallback = () => {
        this.isInViewport = this.isElementPartiallyInViewport();
    };

    //---- Methods ----

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
        let content;
        if (this.isInViewport) {
            content = <slot name="element" />;
        } else {
            content = [
                <div class="shine"></div>,
                <kup-image resource="short_text"></kup-image>,
            ];
        }
        return (
            <Host>
                <div id="kup-component">{content}</div>
            </Host>
        );
    }
}

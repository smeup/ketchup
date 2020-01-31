// >   R  E  A  D  M  E <
//
// --> M A T E R I A L    D E S I G N    W I D G E T   T E M P L A T E
//

// Getting Started:
// npm install @material/<componentyouneed> --save
// ( https://material.io/develop/web/components/ )

import {
    Component,
    Event,
    EventEmitter,
    Element,
    Host,
    h,
} from '@stencil/core';

// Import MDC module you need!!
// https://material-components.github.io/material-components-web-catalog/#/
// Example: https://material.io/develop/web/components/buttons/
import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
//import { ComponentListElement } from './wup-list-declarations';

@Component({
    tag: 'wup-list',
    styleUrl: 'wup-list.scss',
    shadow: true,
})
export class WupList {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    /**
     * Event example.
     */

    @Event({
        eventName: 'kupListBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupListChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupListClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupListFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupListInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    /**
     * --- Methods ----
     * What you want and what you need
     */

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupChange.emit({
            value: target.value,
        });
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupInput(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupInput.emit({
            value: target.value,
        });
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            // Material design javascript initialization
            // Refer to: https://material.io/develop/web/components and choose your component
            const component = MDCList.attachTo(
                root.querySelector('.mdc-list') // Use your widget selector
            );

            component.listElements.map(
                (listItemEl: any) => new MDCRipple(listItemEl)
            );
        }
    }

    render() {
        //---- Rendering ----
        let componentClass: string = 'mdc-list';

        // Host refers to container DOM element - wup-template
        // Copy your material design markup from https://material.io/develop/web/components/
        return (
            <Host>
                <div id="kup-component">
                    <ul class={componentClass}>
                        <li class="mdc-list-item" tabindex="0">
                            <span class="mdc-list-item__text">
                                Single-line item
                            </span>
                        </li>
                        <li class="mdc-list-item">
                            <span class="mdc-list-item__text">
                                Single-line item
                            </span>
                        </li>
                        <li class="mdc-list-item">
                            <span class="mdc-list-item__text">
                                Single-line item
                            </span>
                        </li>
                    </ul>
                </div>
            </Host>
        );
    }
}

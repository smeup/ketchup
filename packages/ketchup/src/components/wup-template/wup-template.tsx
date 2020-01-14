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
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';

// Import MDC module you need!! 
// https://material-components.github.io/material-components-web-catalog/#/
// Example: https://material.io/develop/web/components/buttons/
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-template',
    styleUrl: 'wup-template.scss',
    shadow: true,
})
export class WupTemplate {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;

    /**
     * Event example.
     */
    @Event({
        eventName: 'wupClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    widgetClick: EventEmitter<{
        payload: any;
    }>;

    /**
     * --- Methods ----
     * What you want and what you need
     */
    
    onWidgetClick() {
        // Do what you want
        this.widgetClick.emit({
            payload:{// .. your payload object
                    }
        });
    }
    
     //---- Lifecycle hooks ----
    connectedCallback() {
        // Called every time the component is connected to the DOM. 
        // When the component is first connected, 
        // this method is called before componentWillLoad.
        // It's important to note that this method can be called more than once, 
        // everytime, the element is attached or moved in the DOM.
    }


    disconnectedCallback() {
        // Called every time the component is disconnected from the DOM, ie, 
        // it call be dispatched more than once, 
        // DO not confuse with a "onDestroy" kind of event.
        // This lifecycle hook follows the same semantics as 
        // the one described by the Custom Elements Spec.
    }

    componentWillLoad() {
        // Called once just after the component is first connected to the DOM. 
        // A promise can be returned, that can be used to wait for the first render.
    }

    componentDidLoad() {
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            // Material design javascript initialization 
            // Refer to: https://material.io/develop/web/components and choose your component
            const component = MDCCheckbox.attachTo(
                root.querySelector('.mdc-checkbox') // Use your widget selector
            );
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field') // If your widget is attached to a form
            );
            formField.input = component;
        }
    }

    componentWillRender() {
        // Called before every render().
        // A promise can be returned, that can be used to wait for the upcoming render.
    }

    componentDidRender() {
        // Called after every render().
    }

    componentWillUpdate() {        
        // Called when the component is about to be updated because some Prop() or State() changed. 
        // It's never called during the first render().
        // A promise can be returned, that can be used to wait for the next render.
    }

    componentDidUpdate() {
        // Called just after the component updates. It's never called during the first render().
    }

    render() {
        //---- Rendering ----
        let formClass: string = 'mdc-form-field';
        let widgetClass: string = 'mdc-checkbox';

        if (this.custom) {
            widgetClass += ' custom';
        }

        if (this.disabled) {
            widgetClass += ' mdc-checkbox--disabled';
        }
        // Host refer to container DOM element - wup-template
        // Copy your material design markup from https://material.io/develop/web/components/
        return (
            <Host> 
                <div class={formClass}>
                    <div class={widgetClass}>
                        ... your template here ..
                     </div>   
                </div>
            </Host>
        );
    }
}

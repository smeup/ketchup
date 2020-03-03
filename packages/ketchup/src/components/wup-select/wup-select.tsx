import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
} from '@stencil/core';

import { MDCSelect, MDCSelectFoundation } from '@material/select';
import { ComponentListElement } from '../wup-list/wup-list-declarations';
import { WupList } from '../wup-list/wup-list';
//import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-select',
    styleUrl: 'wup-select.scss',
    shadow: true,
})
export class WupSelect {
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    @Prop() data: ComponentListElement[] = [];

    /**
     * Marks the list as filterable, allowing an input text to filter the options
     */
    @Prop({ reflect: true }) isFilterable: boolean = false;

    //---- Internal state ----
    // Keeps string for filtering elements when filter mode is active
    @State() filter: string = '';

    // no-select - items non selezionabili
    // one-select - un solo item selezionabile alla volta
    // multi-select - più di un item selezionabile alla volta
    @Prop({ reflect: true }) selectable: string = WupList.SELECTABLE_ONE_SELECT;

    @Prop({ reflect: true }) selectId: string = 'WupSelect-myId';

    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;

    selectComponent: MDCSelect = null;

    /**
     * Event example.
     */

    @Event({
        eventName: 'kupSelectBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSelectInput',
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
        //this.value = target.value;
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupChange.emit({
            value: target.value,
        });
        //this.value = target.value;
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
        //this.value = target.value;
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
        //this.value = target.value;
    }

    onKupInput(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupInput.emit({
            value: target.value,
        });
        //this.value = target.value;
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        // Called once just after the component fully loaded and the first render() occurs.
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            // Material design javascript initialization
            this.selectComponent = MDCSelect.attachTo(
                root.querySelector('.' + MDCSelectFoundation.cssClasses.ROOT)
            );
            /*
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field') // If your widget is attached to a form
            );
            formField.input = component;
            */
        }
    }

    render() {
        //---- Rendering ----
        //let formClass: string = 'mdc-form-field';
        let componentClass: string =
            MDCSelectFoundation.cssClasses.ROOT + ' mdc-select--no-label';

        if (this.disabled) {
            componentClass += ' ' + MDCSelectFoundation.cssClasses.DISABLED;
        }
        return (
            <Host>
                <div id="kup-component">
                    <div class={componentClass}>
                        <div class="mdc-select__anchor demo-width-class">
                            <i class="mdc-select__dropdown-icon"></i>
                            <div class="mdc-select__selected-text"></div>
                            <div class="mdc-line-ripple"></div>
                        </div>

                        <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                            <wup-list
                                data={this.data}
                                selectable={WupList.SELECTABLE_ONE_SELECT}
                                listId={this.selectId + 'List'}
                                onKupListClick={(e: CustomEvent) =>
                                    this.onAAA(e)
                                }
                            ></wup-list>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    onAAA(e: CustomEvent) {
        console.log('e.detail: ' + JSON.stringify(e.detail));
        console.log('e.detail.selected.value: ' + e.detail.selected.value);
    }
}

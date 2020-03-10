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

import { MDCSelect } from '@material/select';
import { ComponentListElement } from '../wup-list/wup-list-declarations';
import { errorLogging } from '../../utils/error-logging';

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

    // false - not selectable items
    // true  - selectable items
    @Prop({ reflect: true }) selectable: boolean = true;

    @Prop({ reflect: true }) selectId: string = 'WupSelect-myId';

    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;

    private textElement: HTMLDivElement = null;

    private value: string = '';
    private text: string = '';

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
            MDCSelect.attachTo(root.querySelector('.mdc-select'));
            this.textElement = root.querySelector('.mdc-select__selected-text');
        }
    }

    render() {
        //---- Rendering ----
        let componentClass: string = 'mdc-select mdc-select--no-label';

        if (this.disabled) {
            componentClass += ' mdc-select--disabled';
        }
        this.checkDataInputForRender();
        console.log(
            'wup-select.render() -id: ' +
                this.selectId +
                ' -data: ' +
                JSON.stringify(this.data)
        );
        return (
            <Host>
                <div id="kup-component">
                    <div class={componentClass}>
                        <div class="mdc-select__anchor demo-width-class">
                            <i class="mdc-select__dropdown-icon"></i>
                            <div class="mdc-select__selected-text">
                                {this.text}
                            </div>
                            <div class="mdc-line-ripple"></div>
                        </div>

                        <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                            <wup-list
                                data={this.data}
                                selectable={this.selectable}
                                listId={this.selectId + 'List'}
                                onKupListClick={(e: CustomEvent) =>
                                    this.setSelectedItem(e)
                                }
                            ></wup-list>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    setSelectedItem(e: CustomEvent) {
        console.log('e.detail: ' + JSON.stringify(e.detail));
        console.log('e.detail.selected.value: ' + e.detail.selected.value);
        this.text = e.detail.selected.text;
        this.value = e.detail.selected.value;
        this.updateVisualization();
    }

    checkDataInputForRender() {
        this.text = '';
        this.value = '';

        let found = false;
        this.data.forEach((i) => {
            if (!i.isSeparator) {
                if (i.selected) {
                    this.text = i.text;
                    this.value = i.value;
                    if (found) {
                        this.logError(
                            'Found list item selected, more than once at a time; first [' +
                                this.value +
                                '] current [' +
                                i.value +
                                ']'
                        );
                    }
                    found = true;
                }
            }
        });
    }

    updateVisualization() {
        this.textElement.innerText = this.text;
    }

    logError(msg: string) {
        errorLogging('wup-select', msg);
    }
}

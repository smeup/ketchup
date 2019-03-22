import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core'
import { ComboItem, ComboPosition } from './ketchup-combo-declarations';
import { eventFromElement } from "../../utils/utils";

/*
 * TODO: Control if there can be issues with z-index and elements not correctly triggering the functions to close the combo box list
 * See this article here to use the method to get the current position and avoid opening the menu in the wrong direction
 * https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
 */

@Component({
    tag: 'ketchup-combo',
    styleUrl: 'ketchup-combo.scss',
    shadow: true
})
export class KetchupCombo {
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() displayedField: string = 'id';
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() valueField: string = 'id';
    /**
     * Allows to pass an initial selected item for the combobox
     */
    @Prop() initialValue: any= '';
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() isClearable: boolean = false;
    /**
     * Items which can be selected
     */
    @Prop() items: ComboItem[] = [];
    /**
     * Label to describe the radio group
     */
    @Prop() label: string = '';

    //-- Validating props --


    //---- Internal state ----
    @State() value: string = '';
    @State() filter: string = '';
    @State() isOpen: boolean = false;

    //-- Not reactive state --
    @Element() comboEl: HTMLElement;
    selected: ComboItem;
    /**
     * Creates a variable with an instance of the handler for the click event and binds this instance of the combo box to it.
     * This is used to add and more importantly remove events listeners attached to the body.
     * Sets listener on document to check if a click originated elsewhere
     * In that case closes the combo
     */
    clickFunction = this.onDocumentClick.bind(this);
    // Holds reference to the comboText
    comboText!: HTMLInputElement;
    // Determines the position on which the menu will be open
    comboPosition: ComboPosition = {
        isRight: false,
        isTop: false
    };

    //-- Constants --
    baseClass = 'ketchup-combo';

    //---- Lifecycle Hooks  ----
    componentWillLoad() {
        this.reflectInitialValue(this.initialValue);
    }

    componentDidLoad() {
        // When component is created, then the listener is set. @See clickFunction for more details
        document.addEventListener('click', this.clickFunction);
    }

    componentDidUnload() {
        // When component is destroyed, then the listener is removed. @See clickFunction for more details
        document.removeEventListener('click', this.clickFunction);
    }

    //---- Public Methods ----
    /**
     * Programmatically close the combo box
     * @method closeCombo
     */
    @Method()
    closeCombo() {
        this.isOpen = false;
    }

    /**
     * Programmatically opens the combo box
     * @method openCombo
     */
    @Method()
    openCombo() {
        this.comboPosition = this.calcBoxPosition();
        this.isOpen = true;
    }

    //---- Private methods ----
    // Always reflect changes of initialValue to value element
    @Watch('initialValue')
    reflectInitialValue(newValue: ComboItem) {
        this.value = newValue[this.valueField];
        this.selected = newValue;
    }

    // When valueField changes, then reflects the changes also inside the value prop
    @Watch('valueField')
    reflectValueField(newValue: string) {
        this.value = this.selected ? this.selected[newValue] : '';
    }

    // Calculates where the box must be positioned according to the position the text input is placed
    calcBoxPosition() {
        const windowX = window.innerWidth;
        const windowY = window.innerHeight;
        const {height, left, top, width} = this.comboText.getBoundingClientRect();
        return {
            isRight: left + width / 2 > windowX / 2,
            isTop: top + height / 2 > windowY / 2
        };
    }

    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     * @method onClearClick
     */
    onClearClick() {
        this.value = '';
        this.selected = null;
        this.onComboSelected(null);
    }

    /**
     * Opens the combo box when clicked
     * @method onComboClick
     */
    onComboClick() {
        this.openCombo();
    }

    /**
     * Function to trigger when document is clicked.
     * If the event does not come from within the element, then the list is closed.
     *
     * To check when the event comes from this element, you can't rely on event.target.
     * That's because, as stated by ShadowDOM specs, event targets gets rewritten.
     * @see https://polymer-library.polymer-project.org/3.0/docs/devguide/shadow-dom
     * The event.path property is for Chrome only (maybe also Opera) and it is not standard.
     *
     * The specs also specify that the correct way to get from which element the event was effectively originated,
     * the correct and standard method to use is event.composedPath(), which return an array of the elements the event has traversed.
     * In this way, you can correctly detect when to close the menu or not.
     *
     * However, composed path is not supported by all browser, especially those which do not support ShadowDOM.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
     * But in that case you can traverse the DOM starting from the target element and going up.
     */
    onDocumentClick(event: UIEvent) {
        try {
            if (event.composedPath().indexOf(this.comboEl) < 0) {
                this.closeCombo();
            }
        } catch(e) {
            const ele = event.target as HTMLElement;
            if (!eventFromElement(this.comboEl, ele)) {
                this.closeCombo();
            }
        }
    }

    /**
     * Function which gets triggered when filter changes
     * @param event
     */
    onFilterUpdate(event: CustomEvent) {
        this.filter = event.detail.newValue.toLowerCase();
    }

    /**
     * When an item gets selected
     * @param item
     */
    onItemSelected(item: ComboItem) {
        if (item[this.valueField] !== this.value) {
            this.onComboSelected(item);
            this.selected = item;
            this.value = item[this.valueField];
        }
        this.closeCombo();
    }

    //-- Emitted --
    // When an element has been selected
    @Event({
        eventName: 'ketchupComboSelected',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupComboSelected: EventEmitter<{
        value: object;
    }>;

    onComboSelected(item: ComboItem | null) {
        this.ketchupComboSelected.emit({
            value: item,
        });
    }

    //---- Rendering functions ----
    render() {
        const containerClass = this.baseClass + '__container';

        return ([
            <div class={containerClass + (this.isClearable ? ' ' + containerClass + '--clearable' : '')}
                ref={(el) => this.comboText = el as HTMLInputElement}>
                <span
                    class={this.baseClass + '__current-value'}
                    onClick={this.onComboClick.bind(this)}
                >
                    {this.selected[this.displayedField]}
                    <svg
                        class={this.baseClass + '__icon ' + this.baseClass + '__chevron' + (this.isOpen ? ' ' + this.baseClass + '__chevron--open' : '')}
                        viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </span>
                {this.isClearable ?
                    <button
                        aria-label="Close"
                        class={this.baseClass + '__clear'}
                        role="button"
                        onClick={this.onClearClick.bind(this)}>
                        <svg class={this.baseClass + '__icon'}
                            viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>:
                    null
                }
            </div>,

            <div class={this.baseClass + '__menu' + (this.isOpen ? ' is-open' : '') +
                (this.comboPosition.isRight ? ' is-right' : '') + (this.comboPosition.isTop ? ' is-top' : '')}>
                <div>
                    <ketchup-text-input onKetchupTextInputUpdated={this.onFilterUpdate.bind(this)}/>
                </div>
                <ul class={this.baseClass + '__list'}>
                    {this.items.filter(item => !this.filter || item[this.displayedField].toLowerCase().indexOf(this.filter) >= 0)
                        .map(item =>
                            <li onClick={() => this.onItemSelected(item) }>
                                <span>{item[this.displayedField]}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        ]);
    }
}

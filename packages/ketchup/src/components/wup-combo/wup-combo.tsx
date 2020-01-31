import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
    Watch,
    h,
} from '@stencil/core';
import {
    ComboItem,
    ComboPosition,
    KetchupComboEvent,
} from './wup-combo-declarations';
import { eventFromElement } from '../../utils/utils';
import { getElementOffset } from '../../utils/offset';
import { GenericObject } from '../../types/GenericTypes';

/*
 * TODO: Control if there can be issues with z-index and elements not correctly triggering the functions to close the combo box list
 * See this article here to use the method to get the current position and avoid opening the menu in the wrong direction
 * https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
 */

@Component({
    tag: 'wup-combo',
    styleUrl: 'kup-combo.scss',
    shadow: true,
})
export class WupCombo {
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() displayedField: string = 'id';
    /**
     * Allows to pass an initial selected item for the combobox
     */
    @Prop() initialValue: ComboItem | null = null;
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() isClearable: boolean = false;
    /**
     * Marks the field as filterable, allowing an input text to filter the options
     */
    @Prop({ reflect: true }) isFilterable: boolean = true;
    /**
     * Items which can be selected
     */
    @Prop() items: ComboItem[] = [];
    /**
     * Label to describe the radio group
     */
    @Prop() label: string = '';
    /**
     * An arbitrary object object which can be passed to the component.
     * It will be returned when ketchupComboSelected event is fired, inside detail.info.obj
     */
    @Prop() obj?: GenericObject;
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() valueField: string = 'id';
    /**
     * If true, the combobox uses a Stencil portal to create the menu.
     * Please use this feature carefully, only if needed.
     * @see kup-portal readme for more details.
     */
    @Prop() usePortal: boolean = false;

    //-- Validating props --

    //---- Internal state ----
    // Keeps current value based on selectedElement -> shortcut for some controls
    @State() value: string = '';
    // Keeps string for filtering elements when filter mode is active
    @State() filter: string = '';
    // Keeps track when the combobox menu is open or closed
    @State() isOpen: boolean = false;

    //-- Not reactive state --
    @Element() comboEl: HTMLElement;
    selected: ComboItem | null = null;
    portalRef?: HTMLKupPortalElement = null;
    isOnComboClick = false;
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
        isTop: false,
    };
    // Variable to hold Constructed Style Sheet
    // TODO check if there is a better typing.
    constructedStyleSheet: any = null;

    // For CSS vars
    internalCssVars = [
        '--cmb_font-size',
        '--cmb_border-color',
        '--cmb_border-color--selected',
        '--cmb_tr-duration',
        '--cmb_icon-color',
        '--cmb_icon-color--hover',
        '--cmb_menu-background',
        '--cmb_menu-background--hover',
        '--kup-combo_menu_text',
        '--kup-combo_menu_text--hover',
        '--cmb_background-color',
        '--cmb_background-color--hover',
        '--cmb_text-color',
        '--cmb_text-color--hover',
        '--cmb_border-radius',
        '--cmb_box-shadow',
    ];

    //-- Constants --
    baseClass = 'kup-combo';

    //---- Lifecycle Hooks ----
    componentWillLoad() {
        // When the component is going to be loaded, if there is an initial value set, we can reflect it to internal state
        // This is used because when component is instantiated it does NOT run watchers.
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
    async closeCombo() {
        this.isOpen = false;
    }

    /**
     * Programmatically opens the combo box
     * @method openCombo
     */
    @Method()
    async openCombo() {
        this.comboPosition = this.calcBoxPosition();
        this.isOpen = true;
    }

    //---- Private methods ----
    // Always reflect changes of initialValue to value element
    @Watch('initialValue')
    reflectInitialValue(newValue: ComboItem | null, oldValue?: ComboItem) {
        // When a new initial value is passed, we control that the new item is different from the old one before updating the state
        if (
            !oldValue ||
            newValue[this.valueField] !== oldValue[this.valueField]
        ) {
            this.onComboSelected(newValue, oldValue);
        }
    }

    // When valueField changes, then reflects the changes also inside the value prop
    @Watch('valueField')
    reflectValueField(newValue: string) {
        this.value = this.selected ? this.selected[newValue] : '';
    }

    // Calculates where the box must be positioned according to the position the text input is placed
    calcBoxPosition() {
        const windowX = document.documentElement.clientWidth;
        const windowY = document.documentElement.clientHeight;
        const {
            height,
            left,
            top,
            width,
        } = this.comboText.getBoundingClientRect();
        return {
            isRight: left + width / 2 > windowX / 2,
            isTop: top + height / 2 > windowY / 2,
        };
    }

    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     * @method onClearClick
     */
    onClearClick() {
        this.onComboSelected(null, this.selected);
    }

    /**
     * Opens the combo box when clicked
     * @method onComboClick
     */
    onComboClick() {
        this.isOnComboClick = true;
        this.openCombo();
    }

    /**
     * When combo is focused
     */
    @Event({
        eventName: 'ketchupComboFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupComboFocused: EventEmitter<KetchupComboEvent>;

    /**
     * OnFocus method
     * @method onFocus
     */
    onFocus() {
        this.ketchupComboFocused.emit({
            value: this.selected,
            oldValue: this.selected,
            info: {
                obj: this.obj,
            },
        });
    }

    /**
     * When combo is blurred
     */
    @Event({
        eventName: 'ketchupComboBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupComboBlurred: EventEmitter<KetchupComboEvent>;

    /**
     *OnBlur method
     * @method onBlur
     */
    onBlur() {
        if (!this.isOnComboClick) {
            this.ketchupComboBlurred.emit({
                value: this.selected,
                oldValue: this.selected,
                info: {
                    obj: this.obj,
                },
            });
        }
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
    async onDocumentClick(event: UIEvent) {
        let response = null;
        if (this.usePortal) {
            response = await this.portalRef.getPortalInstance();
        }
        try {
            if (
                event.composedPath().indexOf(this.comboEl) < 0 &&
                event.composedPath().indexOf(response) < 0
            ) {
                this.closeCombo();
            }
        } catch (e) {
            const ele = event.target as HTMLElement;
            if (
                !eventFromElement(this.comboEl, ele) &&
                !eventFromElement(response, ele)
            ) {
                this.closeCombo();
            }
        }
    }

    /**
     * Function which gets triggered when filter changes
     * @param event
     */
    onFilterUpdate(event: CustomEvent) {
        this.filter = event.detail.value.toLowerCase();
    }

    /**
     * When an item gets selected
     * @param item
     */
    onItemSelected(item: ComboItem) {
        if (item[this.valueField] !== this.value) {
            this.onComboSelected(item, this.selected);
        }
        this.closeCombo();
        this.isOnComboClick = false;
        this.onBlur();
    }

    //-- Emitted --
    // When an element has been selected
    /**
     * When an element has been selected
     */
    @Event({
        eventName: 'ketchupComboSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupComboSelected: EventEmitter<KetchupComboEvent>;

    onComboSelected(item: ComboItem | null, oldItem: ComboItem | null) {
        this.ketchupComboSelected.emit({
            value: item,
            oldValue: oldItem,
            info: {
                obj: this.obj,
            },
        });
        // Updates corresponding fields
        this.selected = item;
        this.value = item ? item[this.valueField] : null;
    }

    //---- Rendering functions ----

    composeList() {
        let itemSelectedClassSuffix = '--selected';
        let itemClass = 'mdc-list-item';
        return [
            <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                <ul class="mdc-list">
                    {this.items
                        .filter(
                            (item) =>
                                !this.filter ||
                                item[this.displayedField]
                                    .toLowerCase()
                                    .indexOf(this.filter) >= 0
                        )
                        .map((item) => (
                            <li
                                class={
                                    itemClass +
                                    (item[this.valueField] == this.value)
                                        ? itemSelectedClassSuffix
                                        : ''
                                }
                                data-value="{item[this.valueField]}"
                                onClick={() => this.onItemSelected(item)}
                            >
                                <span>{item[this.displayedField]}</span>
                            </li>
                        ))}
                </ul>
            </div>,
        ];
    }

    render() {
        return [
            <div class="mdc-select">
                <div class="mdc-select__anchor demo-width-class">
                    <i class="mdc-select__dropdown-icon"></i>
                    <div class="mdc-select__selected-text"></div>
                    <span class="mdc-floating-label">Pick a Food Group</span>
                    <div class="mdc-line-ripple"></div>
                </div>

                {this.composeList()}
            </div>,
        ];
    }

    // Creates the menu and its items
    __composeList() {
        let filter = null;
        if (this.isFilterable) {
            filter = (
                <div class={this.baseClass + '__filter'}>
                    <kup-text-input
                        onKetchupTextInputUpdated={this.onFilterUpdate.bind(
                            this
                        )}
                    />
                </div>
            );
        }

        return (
            <div
                class={
                    this.baseClass +
                    '__menu' +
                    (this.isOpen ? ' is-open' : '') +
                    (this.comboPosition.isRight ? ' is-right' : '') +
                    (this.comboPosition.isTop ? ' is-top' : '') +
                    (this.usePortal ? ' is-using-portal' : '')
                }
            >
                {filter}
                <ul class={this.baseClass + '__list'}>
                    {this.items
                        .filter(
                            (item) =>
                                !this.filter ||
                                item[this.displayedField]
                                    .toLowerCase()
                                    .indexOf(this.filter) >= 0
                        )
                        .map((item) => (
                            <li onClick={() => this.onItemSelected(item)}>
                                <span>{item[this.displayedField]}</span>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }

    __render() {
        const containerClass = this.baseClass + '__container';

        return [
            <div
                class={
                    containerClass +
                    (this.isClearable
                        ? ' ' + containerClass + '--clearable'
                        : '')
                }
                ref={(el) => (this.comboText = el as HTMLInputElement)}
            >
                <span
                    tabindex="0"
                    class={this.baseClass + '__current-value'}
                    onClick={this.onComboClick.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                >
                    <span class="value-text">
                        {this.selected
                            ? this.selected[this.displayedField]
                            : ''}
                    </span>
                    <svg
                        class={
                            this.baseClass +
                            '__icon ' +
                            this.baseClass +
                            '__chevron' +
                            (this.isOpen
                                ? ' ' + this.baseClass + '__chevron--open'
                                : '')
                        }
                        version="1.1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7,10L12,15L17,10H7Z" />
                    </svg>
                </span>
                {this.isClearable ? (
                    <button
                        aria-label="Close"
                        class={this.baseClass + '__clear'}
                        role="button"
                        onClick={this.onClearClick.bind(this)}
                    >
                        <svg
                            class={this.baseClass + '__icon'}
                            viewBox="0 0 24 24"
                        >
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>
                ) : null}
            </div>,

            this.usePortal ? (
                <kup-portal
                    isVisible={this.isOpen}
                    mirroredCssVars={this.internalCssVars}
                    nodes={this.composeList()}
                    portalParentRef={this.comboEl}
                    ref={(el) => (this.portalRef = el as HTMLKupPortalElement)}
                    // Notice that the portal offset MUST be calculated considering the menu button, not the whole web component
                    refOffset={getElementOffset(
                        this.comboText,
                        this.comboPosition
                    )}
                    styleNode={this.comboEl.shadowRoot.querySelector('style')}
                />
            ) : (
                this.composeList()
            ),
        ];
    }
}

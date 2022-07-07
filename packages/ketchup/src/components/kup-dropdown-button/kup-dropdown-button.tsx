import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { ItemsDisplayMode } from '../kup-list/kup-list-declarations';
import { consistencyCheck } from '../kup-list/kup-list-helper';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupDropdownButtonEventPayload,
    KupDropdownButtonProps,
} from './kup-dropdown-button-declarations';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';

@Component({
    tag: 'kup-dropdown-button',
    styleUrl: 'kup-dropdown-button.scss',
    shadow: true,
})
export class KupDropdownButton {
    /**
     * References the root HTML element of the component (<kup-dropdown-button>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() id: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default null
     */
    @Prop() data: Object = null;
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how to show the selected item value. Suported values: "code", "description", "both".
     * @default ItemsDisplayMode.DESCRIPTION
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Default value is false. When set to true, the arrow dropdown button is the only button displayed.
     * @default false
     */
    @Prop() dropdownOnly: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     * @default icon
     */
    @Prop() icon: string = null;
    /**
     * Sets the initial value of the component.
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * Defaults at null. When set, the button will show this text.
     * @default ""
     */
    @Prop() label: string = null;
    /**
     * Sets how to return the selected item value. Suported values: "code", "description", "both".
     * @default ItemsDisplayMode.CODE
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.
     * @default FButtonStyling.RAISED
     */
    @Prop() styling: FButtonStyling = FButtonStyling.RAISED;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     * @default false
     */
    @Prop() trailingIcon: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Primary button element.
     */
    private buttonEl: HTMLButtonElement = null;
    /**
     * Dropdown button element.
     */
    private dropdownEl: HTMLButtonElement = null;
    /**
     * List element (dropdown menu).
     */
    private listEl: HTMLKupListElement = null;
    private clickCb: KupManagerClickCb = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the primary button loses focus.
     */
    @Event({
        eventName: 'kup-dropdownbutton-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupDropdownButtonEventPayload>;
    /**
     * Triggered when the primary button is clicked.
     */
    @Event({
        eventName: 'kup-dropdownbutton-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupDropdownButtonEventPayload>;
    /**
     * Triggered when the primary button is focused.
     */
    @Event({
        eventName: 'kup-dropdownbutton-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupDropdownButtonEventPayload>;
    /**
     * Triggered when a list item changes.
     */
    @Event({
        eventName: 'kup-dropdownbutton-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupDropdownButtonEventPayload>;
    /**
     * Triggered when a list item is clicked.
     */
    @Event({
        eventName: 'kup-dropdownbutton-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupDropdownButtonEventPayload>;
    /**
     * Handles the navigation of the dropdown menu with the keyboard.
     */
    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.isListOpened()) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.listEl.select().then(() => {
                        this.closeList();
                    });
                    this.dropdownEl.focus();
                    break;
                case 'Escape':
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeList();
                    break;
            }
        } else {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.openList();
                    this.listEl.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.openList();
                    this.listEl.focusPrevious();
                    break;
            }
        }
    }

    onKupBlur() {
        this.closeList();
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.id,
        });
    }

    onKupClick() {
        this.closeList();
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.id,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.id,
        });
    }

    onDropDownClick() {
        if (this.isListOpened()) {
            this.closeList();
        } else {
            this.openList();
        }
    }

    onKupItemClick(e: CustomEvent) {
        this.consistencyCheck(e);
        this.closeList();

        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.id,
        });

        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.id,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupDropdownButtonProps, descriptions);
    }
    /**
     * Returns the component's internal value.
     */
    @Method()
    async getValue(): Promise<string> {
        return this.id;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupDropdownButtonProps, props);
    }
    /**
     * Sets the internal value of the component.
     */
    @Method()
    async setValue(value: string): Promise<void> {
        this.id = value;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Checks whether the dropdown menu is opened or not.
     * @returns {boolean} True when the list is opened.
     */
    private isListOpened(): boolean {
        if (this.listEl == null) {
            return false;
        }
        return this.listEl.menuVisible == true;
    }
    /**
     * Opens the dropdown menu.
     */
    private openList(): void {
        const buttonWidth: number =
            (this.buttonEl ? this.buttonEl.clientWidth : 0) +
            this.dropdownEl.clientWidth;
        this.buttonEl?.classList.add('toggled');
        this.dropdownEl.classList.add('toggled');
        this.listEl.menuVisible = true;
        const elStyle = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = buttonWidth + 'px';
        if (this.kupManager.dynamicPosition.isRegistered(this.listEl)) {
            this.kupManager.dynamicPosition.changeAnchor(
                this.listEl,
                this.buttonEl ? this.buttonEl : this.dropdownEl
            );
        } else {
            this.kupManager.dynamicPosition.register(
                this.listEl,
                this.buttonEl ? this.buttonEl : this.dropdownEl,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
        }
        this.kupManager.dynamicPosition.start(this.listEl);
        if (!this.clickCb) {
            this.clickCb = {
                cb: () => {
                    this.closeList();
                },
                el: this.listEl,
            };
        }
        this.kupManager.addClickCallback(this.clickCb, true);
    }
    /**
     * Closes the dropdown menu.
     */
    private closeList(): void {
        this.buttonEl?.classList.remove('toggled');
        this.dropdownEl.classList.remove('toggled');
        this.listEl.menuVisible = false;
        this.kupManager.dynamicPosition.stop(this.listEl);
        this.kupManager.removeClickCallback(this.clickCb);
    }
    /**
     * Checks the consistency of the list.
     */
    private consistencyCheck(e?: CustomEvent, idIn?: string): void {
        const ret = consistencyCheck(
            idIn,
            this.data['kup-list'],
            this.listEl,
            this.selectMode,
            this.displayMode,
            e
        );
        this.id = ret.value;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.id = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
            };
        }
    }

    componentDidLoad() {
        this.consistencyCheck(undefined, this.id);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root && (!this.buttonEl || !this.dropdownEl)) {
            this.buttonEl = root.querySelector(
                '.dropdown-button__primary-action'
            );
            this.dropdownEl = root.querySelector(
                '.dropdown-button__dropdown-action'
            );
        }
        this.kupManager.debug.logRender(this, true);
    }

    private renderButtons() {
        const buttons: VNode[] = [];
        const props: FButtonProps = {
            disabled: this.disabled ? true : false,
            large: this.rootElement.classList.contains('kup-large')
                ? true
                : false,
            pulsating: this.rootElement.classList.contains('kup-pulsating')
                ? true
                : false,
            slim: this.rootElement.classList.contains('kup-slim')
                ? true
                : false,
            styling: this.styling ? this.styling : FButtonStyling.RAISED,
            title: this.rootElement.title,
        };

        if (!this.dropdownOnly) {
            buttons.push(
                <FButton
                    {...props}
                    icon={this.icon ? this.icon : null}
                    label={this.label ? this.label : null}
                    trailingIcon={this.trailingIcon ? true : false}
                    wrapperClass="dropdown-button__primary-action"
                    onClick={() => this.onKupClick()}
                    onBlur={() => this.onKupBlur()}
                    onFocus={() => this.onKupFocus()}
                />
            );
        }
        buttons.push(
            <FButton
                {...props}
                disabled={this.disabled ? true : false}
                icon={
                    this.dropdownOnly && this.icon && this.icon !== ''
                        ? this.icon
                        : 'arrow_drop_down'
                }
                label=" "
                wrapperClass={
                    'dropdown-button__dropdown-action' +
                    (this.dropdownOnly ? ' dropdown-only' : '')
                }
                onClick={() => this.onDropDownClick()}
            />
        );
        return buttons;
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="dropdown-button--wrapper">
                        {this.renderButtons()}
                    </div>
                    <kup-list
                        {...this.data['kup-list']}
                        displayMode={this.displayMode}
                        isMenu={true}
                        onkup-list-click={(e) => this.onKupItemClick(e)}
                        id={this.rootElement.id + '_list'}
                        ref={(el) => (this.listEl = el)}
                    ></kup-list>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.listEl) {
            this.kupManager.dynamicPosition.unregister([this.listEl]);
            this.listEl.remove();
        }
        this.kupManager.theme.unregister(this);
    }
}

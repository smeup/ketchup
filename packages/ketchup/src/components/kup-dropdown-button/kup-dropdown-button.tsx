import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
} from '@stencil/core';

import { MDCRipple } from '@material/ripple';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import {
    consistencyCheck,
    ItemsDisplayMode,
} from '../kup-list/kup-list-declarations';
import {
    kupDynamicPositionAttribute,
    KupDynamicPositionElement,
} from '../../utils/kup-dynamic-position/kup-dynamic-position-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDropdownButtonProps } from './kup-dropdown-button-declarations';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';

@Component({
    tag: 'kup-dropdown-button',
    styleUrl: 'kup-dropdown-button.scss',
    shadow: true,
})
export class KupDropdownButton {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     */
    @Prop() data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how to show the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() displayMode: ItemsDisplayMode = ItemsDisplayMode.DESCRIPTION;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Sets the initial value of the component.
     */
    @Prop() initialValue: string = '';
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop() label: string = null;
    /**
     * Sets how to return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.
     * @default FButtonStyling.RAISED
     */
    @Prop() styling: FButtonStyling = FButtonStyling.RAISED;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingIcon: boolean = false;

    private buttonEl: any;
    private dropdownButtonEl: any;
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private listEl: any;
    private wrapperEl: HTMLElement;

    @Event({
        eventName: 'kupDropdownButtonBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: string;
        value: string;
    }>;

    @Event({
        eventName: 'kupDropdownButtonClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: string;
        value: string;
    }>;

    @Event({
        eventName: 'kupDropdownButtonFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: string;
        value: string;
    }>;

    @Event({
        eventName: 'kupDropdownSelectionChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupDropdownSelectionItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        let props: GenericObject = {};
        if (descriptions) {
            props = KupDropdownButtonProps;
        } else {
            for (const key in KupDropdownButtonProps) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        KupDropdownButtonProps,
                        key
                    )
                ) {
                    props[key] = this[key];
                }
            }
        }
        return props;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    @Listen('keyup', { target: 'document' })
    listenKeyup(e: KeyboardEvent) {
        if (this.isListOpened()) {
            if (e.key === 'Escape') {
                this.closeList();
            }
            if (e.key === 'Enter') {
                this.closeList();
            }
            if (e.key === 'ArrowDown') {
                this.listEl.arrowDown = true;
            }
            if (e.key === 'ArrowUp') {
                this.listEl.arrowUp = true;
            }
        }
    }

    onKupBlur() {
        this.closeList();
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupClick() {
        this.closeList();
        this.kupClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onDropDownClick() {
        if (this.isListOpened()) {
            this.closeList();
        } else {
            this.openList();
        }
    }

    private isListOpened(): boolean {
        if (this.listEl == null) {
            return false;
        }
        return this.listEl.menuVisible == true;
    }

    private openList(): boolean {
        let buttonWidth =
            this.buttonEl.clientWidth + this.dropdownButtonEl.clientWidth;
        this.buttonEl.classList.add('toggled');
        this.dropdownButtonEl.classList.add('toggled');
        this.listEl.menuVisible = true;
        this.kupManager.dynamicPosition.start(
            this.listEl as KupDynamicPositionElement
        );
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = buttonWidth + 'px';
        return true;
    }

    private closeList() {
        this.buttonEl.classList.remove('toggled');
        this.dropdownButtonEl.classList.remove('toggled');
        this.listEl.menuVisible = false;
        this.kupManager.dynamicPosition.stop(
            this.listEl as KupDynamicPositionElement
        );
    }

    onKupItemClick(e: CustomEvent) {
        this.consistencyCheck(e);
        this.closeList();

        this.kupChange.emit({
            value: this.value,
        });

        this.kupItemClick.emit({
            value: this.value,
        });
    }

    private consistencyCheck(e?: CustomEvent, valueIn?: string) {
        let ret = consistencyCheck(
            valueIn,
            this.data['kup-list'],
            this.listEl,
            this.selectMode,
            this.displayMode,
            e
        );
        this.value = ret.value;
    }

    private createRippleElement() {
        if (this.disabled) {
            return undefined;
        }
        return <div class="mdc-button__ripple"></div>;
    }

    private createLabelElement() {
        if (!this.label) {
            return undefined;
        }
        return <span class="mdc-button__label">{this.label}</span>;
    }

    private createIconElement(CSSClass: string, icon: string) {
        if (!icon) {
            return undefined;
        }

        if (
            icon.indexOf('.') > -1 ||
            icon.indexOf('/') > -1 ||
            icon.indexOf('\\') > -1
        ) {
            return (
                <span class={CSSClass}>
                    <img src={icon}></img>
                </span>
            );
        } else {
            let svg: string = `url('${getAssetPath(
                `./assets/svg/${icon}.svg`
            )}') no-repeat center`;
            CSSClass += ' icon-container material-icons';
            let iconStyle = {
                mask: svg,
                webkitMask: svg,
            };
            return <span style={iconStyle} class={CSSClass}></span>;
        }
    }

    private prepList() {
        return (
            <kup-list
                {...this.data['kup-list']}
                displayMode={this.displayMode}
                isMenu={true}
                onKupListClick={(e) => this.onKupItemClick(e)}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.listEl = el as any)}
            ></kup-list>
        );
    }

    private renderButton() {
        let componentClass: string = 'mdc-button';
        let leadingEl: HTMLElement = undefined;
        let trailingEl: HTMLElement = undefined;
        let dropdownEl: HTMLElement = undefined;

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
        }

        if (this.styling === FButtonStyling.OUTLINED) {
            componentClass += ' mdc-button--outlined';
        } else if (this.styling !== FButtonStyling.FLAT) {
            componentClass += ' mdc-button--raised';
        }

        let iconEl: HTMLElement = this.createIconElement(
            'mdc-button__icon',
            this.icon
        );
        let labelEl: HTMLElement = this.createLabelElement();

        if (this.trailingIcon && this.icon) {
            leadingEl = labelEl;
            trailingEl = iconEl;
        } else {
            leadingEl = iconEl;
            trailingEl = labelEl;
        }

        dropdownEl = this.createIconElement(
            'mdc-button__icon',
            'arrow_drop_down'
        );
        return [
            <button
                type="button"
                class={componentClass + ' action'}
                disabled={this.disabled}
                onClick={() => this.onKupClick()}
                onFocus={() => this.onKupFocus()}
                ref={(el) => (this.buttonEl = el as any)}
            >
                {this.createRippleElement()}
                {leadingEl}
                {trailingEl}
            </button>,
            <button
                type="button"
                class={componentClass + ' dropdown'}
                disabled={this.disabled}
                onClick={() => this.onDropDownClick()}
                onFocus={() => this.onKupFocus()}
                ref={(el) => (this.dropdownButtonEl = el as any)}
            >
                {this.createRippleElement()}
                {dropdownEl}
            </button>,
        ];
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
            };
        }
    }

    componentDidLoad() {
        this.consistencyCheck(undefined, this.value);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root && !this.disabled) {
            root.querySelectorAll('button').forEach((element) => {
                if (element != undefined) {
                    MDCRipple.attachTo(element);
                }
            });
        }
        this.kupManager.dynamicPosition.register(this.listEl, this.wrapperEl);
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host onBlur={() => this.onKupBlur()}>
                {customStyle ? <style>{customStyle}</style> : null}
                <div
                    id="kup-component"
                    ref={(el) => (this.wrapperEl = el as any)}
                >
                    {this.renderButton()}
                    {this.prepList()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
        const dynamicPositionElements: NodeListOf<KupDynamicPositionElement> =
            this.rootElement.shadowRoot.querySelectorAll(
                '[' + kupDynamicPositionAttribute + ']'
            );
        if (dynamicPositionElements.length > 0) {
            this.kupManager.dynamicPosition.unregister(
                Array.prototype.slice.call(dynamicPositionElements)
            );
        }
    }
}

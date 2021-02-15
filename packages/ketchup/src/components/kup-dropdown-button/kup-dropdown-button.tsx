import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    getAssetPath,
    EventEmitter,
    State,
    h,
    Method,
    Listen,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logRender } from '../../utils/debug-manager';
import { positionRecalc } from '../../utils/recalc-position';
import {
    consistencyCheck,
    ItemsDisplayMode,
} from '../kup-list/kup-list-declarations';

@Component({
    tag: 'kup-dropdown-button',
    styleUrl: 'kup-dropdown-button.scss',
    shadow: true,
})
export class KupDropdownButton {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State() value: string = '';

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Props of the sub-components.
     */
    @Prop() data: Object = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets how the show the selected item value. Suported values: "code", "description", "both".
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
     * Sets how the return the selected item value. Suported values: "code", "description", "both".
     */
    @Prop() selectMode: ItemsDisplayMode = ItemsDisplayMode.CODE;
    /**
     * Defines the style of the button. Available styles are "flat" and "outlined", "raised" is the default.
     */
    @Prop({ reflect: true }) styling: string = '';
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingIcon: boolean = false;

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

    private listEl: any = undefined;
    private buttonEl: any = undefined;
    private wrapperEl: HTMLElement = undefined;
    private dropdownButtonEl: any = undefined;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
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
        return this.listEl.menuVisible == true;
    }

    private openList(): boolean {
        let buttonWidth =
            this.buttonEl.clientWidth + this.dropdownButtonEl.clientWidth;
        this.buttonEl.classList.add('toggled');
        this.dropdownButtonEl.classList.add('toggled');
        this.listEl.menuVisible = true;
        this.listEl.classList.add('dynamic-position-active');
        let elStyle: any = this.listEl.style;
        elStyle.height = 'auto';
        elStyle.minWidth = buttonWidth + 'px';
        return true;
    }

    private closeList() {
        this.buttonEl.classList.remove('toggled');
        this.dropdownButtonEl.classList.remove('toggled');
        this.listEl.menuVisible = false;
        this.listEl.classList.remove('dynamic-position-active');
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

        if (this.styling === 'outlined') {
            componentClass += ' mdc-button--outlined';
        } else if (this.styling !== 'flat') {
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
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.value = this.initialValue;
        if (!this.data) {
            this.data = {
                'kup-list': {},
            };
        }
    }

    componentDidLoad() {
        this.consistencyCheck(undefined, this.value);
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
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

        positionRecalc(this.listEl, this.wrapperEl);
        logRender(this, true);
    }

    render() {
        return (
            <Host onBlur={() => this.onKupBlur()}>
                <style>{setCustomStyle(this)}</style>
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
}

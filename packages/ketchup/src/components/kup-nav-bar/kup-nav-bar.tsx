import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Listen,
    Method,
} from '@stencil/core';
import {
    ComponentNavBarData,
    ComponentNavBarElement,
    getClassNameByComponentMode,
    ComponentNavBarMode,
} from './kup-nav-bar-declarations';
import { MDCTopAppBar } from '@material/top-app-bar';
import { ComponentListElement } from '../kup-list/kup-list-declarations';
import { positionRecalc } from '../../utils/recalc-position';
import {
    setThemeCustomStyle,
    setCustomStyle,
    dynColorContrast,
} from '../../utils/theming';

@Component({
    tag: 'kup-nav-bar',
    styleUrl: 'kup-nav-bar.scss',
    shadow: true,
})
export class KupNavBar {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The actual data of the nav bar.
     */
    @Prop() data: ComponentNavBarData = {
        title: 'default title',
    };
    /**
     * Defines how the bar will be displayed.
     */
    @Prop({ reflect: true }) mode: ComponentNavBarMode =
        ComponentNavBarMode.DEFAULT;

    private optionsButtonEl: any = undefined;
    private optionsListEl: any = undefined;
    private menuButtonEl: any = undefined;
    private menuListEl: any = undefined;
    private dynColor: string = 'white';

    @Listen('click', { target: 'document' })
    listenClick() {
        this.closeList();
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
                this.arrowDownList();
            }
            if (e.key === 'ArrowUp') {
                this.arrowUpList();
            }
        }
    }

    @Event({
        eventName: 'kupNavbarMenuItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarMenuItemClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupNavbarOptionItemClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupNavbarOptionItemClick: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupNavbarMenuItemClick(e: CustomEvent) {
        let selectedValue: string = e.detail.selected.value;
        this.closeList();
        this.kupNavbarMenuItemClick.emit({
            value: selectedValue,
        });
    }

    onKupNavbarMenuButtonClick(value: string) {
        let selectedValue: string = value;
        this.kupNavbarMenuItemClick.emit({
            value: selectedValue,
        });
    }

    onKupNavbarOptionItemClick(e: CustomEvent) {
        let selectedValue: string = e.detail.selected.value;
        this.closeList();
        this.kupNavbarOptionItemClick.emit({
            value: selectedValue,
        });
    }

    onKupOptionButtonClick(value: string) {
        let selectedValue: string = value;
        this.kupNavbarOptionItemClick.emit({
            value: selectedValue,
        });
    }

    arrowDownList() {
        if (this.isThisListOpened(this.optionsListEl)) {
            this.optionsListEl.arrowDown = true;
        }
        if (this.isThisListOpened(this.menuListEl)) {
            this.menuListEl.arrowDown = true;
        }
    }

    arrowUpList() {
        if (this.isThisListOpened(this.optionsListEl)) {
            this.optionsListEl.arrowUp = true;
        }
        if (this.isThisListOpened(this.menuListEl)) {
            this.menuListEl.arrowUp = true;
        }
    }

    openList(listEl): boolean {
        this.closeList();
        if (listEl == null) {
            return false;
        }
        listEl.menuVisible = true;
        listEl.classList.add('dynamic-position-active');
        let elStyle: any = listEl.style;
        elStyle.height = 'auto';
        return true;
    }

    closeList() {
        if (this.isThisListOpened(this.optionsListEl)) {
            this.closeThisList(this.optionsListEl);
        }
        if (this.isThisListOpened(this.menuListEl)) {
            this.closeThisList(this.menuListEl);
        }
    }

    closeThisList(listEl) {
        if (listEl == null) {
            return;
        }
        listEl.menuVisible = false;
        listEl.classList.remove('dynamic-position-active');
    }

    isListOpened(): boolean {
        return (
            this.isThisListOpened(this.optionsListEl) ||
            this.isThisListOpened(this.menuListEl)
        );
    }

    isThisListOpened(listEl): boolean {
        if (listEl == null) {
            return false;
        }
        return listEl.menuVisible == true;
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root != null) {
            const topAppBarElement = root.querySelector('.mdc-top-app-bar');
            //MDCTopAppBar.attachTo(topAppBarElement);
            new MDCTopAppBar(topAppBarElement);
        }
        if (this.menuListEl != null) {
            positionRecalc(this.menuListEl, this.menuButtonEl);
        }
        if (this.optionsListEl != null) {
            positionRecalc(this.optionsListEl, this.optionsButtonEl);
        }
        const header = this.rootElement.shadowRoot.querySelector('header');
        dynColorContrast(this, window.getComputedStyle(header).backgroundColor);
    }

    prepMenuList(listData: ComponentListElement[]): HTMLElement {
        this.menuListEl = null;
        if (listData.length == 0) {
            return null;
        }
        let comp: HTMLElement = (
            <kup-list
                data={...listData}
                is-menu
                show-icons
                onKupListClick={(e) => this.onKupNavbarMenuItemClick(e)}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.menuListEl = el as any)}
            ></kup-list>
        );

        return comp;
    }

    prepOptionsList(listData: ComponentListElement[]): HTMLElement {
        this.optionsListEl = null;
        if (listData.length == 0) {
            return null;
        }
        let comp: HTMLElement = (
            <kup-list
                data={...listData}
                is-menu
                show-icons
                onKupListClick={(e) => this.onKupNavbarOptionItemClick(e)}
                id={this.rootElement.id + '_list'}
                ref={(el) => (this.optionsListEl = el as any)}
            ></kup-list>
        );

        return comp;
    }

    render() {
        let wrapperClass = undefined;

        let visibleButtons: Array<HTMLElement> = [];
        let optionsButtons: ComponentListElement[] = [];
        let menuButtons: ComponentListElement[] = [];

        if (this.data.optionActions != null) {
            for (let i = 0; i < this.data.optionActions.length; i++) {
                let action: ComponentNavBarElement = this.data.optionActions[i];
                if (action.visible == true) {
                    let button = (
                        <kup-button
                            customStyle={`:host{ --kup-main-color: ${this.dynColor}; }`}
                            icon={action.icon}
                            iconColor={this.dynColor}
                            tooltip={action.tooltip}
                            onKupButtonClick={() =>
                                this.onKupOptionButtonClick(action.value)
                            }
                        ></kup-button>
                    );
                    visibleButtons.push(button);
                } else {
                    let listItem: ComponentListElement = {
                        text: action.text,
                        value: action.value,
                        icon: action.icon,
                    };
                    optionsButtons.push(listItem);
                }
            }
        }

        if (optionsButtons.length > 0) {
            let button = (
                <kup-button
                    customStyle={`:host{ --kup-main-color: ${this.dynColor}; }`}
                    icon="more_vert"
                    iconColor={this.dynColor}
                    tooltip="Options"
                    onKupButtonClick={() => this.openList(this.optionsListEl)}
                    onClick={(e) => e.stopPropagation()}
                    ref={(el) => (this.optionsButtonEl = el as any)}
                ></kup-button>
            );
            visibleButtons.push(button);
        }

        let menuButton = null;
        if (this.data.menuAction != null) {
            let action = this.data.menuAction;
            menuButton = (
                <kup-button
                    customStyle={`:host{ --kup-main-color: ${this.dynColor}; }`}
                    icon={action.icon}
                    iconColor={this.dynColor}
                    tooltip={action.tooltip}
                    onKupButtonClick={() =>
                        this.onKupNavbarMenuButtonClick(action.value)
                    }
                ></kup-button>
            );
        } else if (this.data.menuActions != null) {
            for (let i = 0; i < this.data.menuActions.length; i++) {
                let action: ComponentNavBarElement = this.data.menuActions[i];
                let listItem: ComponentListElement = {
                    text: action.text,
                    value: action.value,
                    icon: action.icon,
                };
                menuButtons.push(listItem);
            }
            menuButton = (
                <kup-button
                    customStyle={`:host{ --kup-main-color: ${this.dynColor}; }`}
                    icon="menu"
                    iconColor={this.dynColor}
                    tooltip="Open navigation menu"
                    disabled={menuButtons.length == 0}
                    onKupButtonClick={() => this.openList(this.menuListEl)}
                    onClick={(e) => e.stopPropagation()}
                    ref={(el) => (this.menuButtonEl = el as any)}
                ></kup-button>
            );
        }

        let headerClassName =
            'mdc-top-app-bar ' + getClassNameByComponentMode(this.mode);
        let titleStyle = { color: this.dynColor };
        return (
            <Host class="handles-custom-style">
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" class={wrapperClass}>
                    <header class={headerClassName}>
                        <div class="mdc-top-app-bar__row">
                            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                                {menuButton}
                                {this.prepMenuList(menuButtons)}
                                <span
                                    class="mdc-top-app-bar__title"
                                    style={titleStyle}
                                >
                                    {this.data.title}
                                </span>
                            </section>
                            <section
                                class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                                role="toolbar"
                            >
                                {visibleButtons}
                                {this.prepOptionsList(optionsButtons)}
                            </section>
                        </div>
                    </header>
                </div>
            </Host>
        );
    }
}

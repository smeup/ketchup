import {
    Component,
    h,
    Prop,
    Method,
    Event,
    EventEmitter,
    Host,
    Element,
    State,
} from '@stencil/core';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

@Component({
    tag: 'kup-drawer',
    styleUrl: 'kup-drawer.scss',
    shadow: true,
})
export class KupDrawer {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the drawer appears.
     */
    @Prop({ reflect: true, mutable: true }) opened = false;

    //---- Events ----

    @Event() kupDrawerClose: EventEmitter;
    @Event() kupDrawerOpen: EventEmitter;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async open() {
        this.onOpenDrawer();
    }

    @Method()
    async close() {
        this.onCloseDrawer();
    }

    @Method()
    async toggle() {
        if (this.opened == true) {
            this.onCloseDrawer();
        } else if (this.opened == false) {
            this.onOpenDrawer();
        }
    }

    onCloseDrawer(): void {
        this.opened = false;
        this.kupDrawerClose.emit();
    }

    onOpenDrawer(): void {
        this.opened = true;
        this.kupDrawerOpen.emit();
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        let mainContent = <slot name="main-content" />;
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div
                        class="backdrop"
                        onClick={() => this.onCloseDrawer()}
                    />
                    <aside>
                        <div class="header">
                            <div class="title">
                                <slot name="title" />
                            </div>
                            <div class="subtitle">
                                <slot name="subtitle" />
                            </div>
                        </div>
                        <main>{mainContent}</main>
                    </aside>
                </div>
            </Host>
        );
    }
}

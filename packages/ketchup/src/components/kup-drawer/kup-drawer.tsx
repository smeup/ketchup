import {
    Component,
    h,
    Prop,
    Method,
    Host,
    Element,
    State,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core';
import { KupDebug } from '../../utils/kup-debug/kup-debug';
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
    @Prop({ reflect: true, mutable: true }) opened: boolean = false;

    /**
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();

    //---- Watches ----

    @Watch('opened')
    onOpenedChange(newValue: boolean) {
        if (newValue) {
            this.kupDrawerOpen.emit();
        } else {
            this.kupDrawerClose.emit();
        }
    }

    //---- Events ----

    @Event() kupDrawerClose: EventEmitter;
    @Event() kupDrawerOpen: EventEmitter;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async toggle() {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    @Method()
    async close() {
        this.opened = false;
    }

    @Method()
    async open() {
        this.opened = true;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
    }

    componentDidRender() {
        this.kupDebug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class="backdrop" onClick={() => this.close()} />
                    <aside>
                        <div class="header">
                            <div class="title">
                                <slot name="title" />
                            </div>
                            <div class="subtitle">
                                <slot name="subtitle" />
                            </div>
                        </div>
                        <main>
                            <slot name="main-content" />
                        </main>
                    </aside>
                </div>
            </Host>
        );
    }
}

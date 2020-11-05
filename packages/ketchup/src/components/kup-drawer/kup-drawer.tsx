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
import { logMessage } from '../../utils/debug-manager';
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

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

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
        this.startTime = performance.now();
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        let mainContent = <slot name="main-component" />;
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

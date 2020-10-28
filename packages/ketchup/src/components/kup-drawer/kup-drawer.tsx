import {
    Component,
    h,
    Prop,
    Method,
    Event,
    EventEmitter,
    Host,
    Element,
} from '@stencil/core';

@Component({
    tag: 'kup-drawer',
    styleUrl: 'kup-drawer.css',
    shadow: true,
})
export class KupDrawer {
    @Element() rootElement: HTMLElement;

    // add permormance e customStyle

    /**
     * Defaults at false. When set to true, the drawer appears.
     */
    @Prop({ reflect: true, mutable: true }) opened = false;
    /**
     * Defaults at false. When set to true, the drawer appears on the right.
     */
    // TODO remove. Fare con le classi
    @Prop({ reflect: true, mutable: true }) right = false;
    /**
     * Defaults at false. When set to true, the drawer remains permanent on the screen.
     */
    @Prop({ reflect: true, mutable: true }) permanent = false;

    //---- Events ----
    @Event() kupDrawerClose: EventEmitter;
    @Event() kupDrawerOpen: EventEmitter;

    onCloseDrawer(): void {
        this.opened = false;
        this.kupDrawerClose.emit();
    }

    onOpenDrawer(): void {
        this.opened = true;
        this.kupDrawerOpen.emit();
    }

    //---- Methods ----
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

    getClass() {
        let drawerClass = 'aside ';

        return drawerClass;
    }

    render() {
        let mainContent = <slot name="MainContent" />;
        let drawerClass = this.getClass();
        // TODO remove
        console.log('drawerClass', drawerClass);
        return [
            <Host>
                <div id="kup-component">
                    <div
                        class="backdrop"
                        onClick={() => this.onCloseDrawer()}
                    />
                    ,
                    <aside class={drawerClass}>
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
            </Host>,
        ];
    }
}

import {
    Component,
    h,
    Prop,
    Method,
    Host,
    Element,
    State,
} from '@stencil/core';
import { logLoad, logRender } from '../../utils/debug-manager';
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

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    private closeDrawer() {
        this.rootElement.classList.remove('visible');
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
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class="backdrop" onClick={() => this.closeDrawer()} />
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

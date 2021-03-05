import {
    Component,
    Prop,
    Element,
    Host,
    State,
    h,
    JSX,
    Method,
} from '@stencil/core';
import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { KupTheme } from '../../utils/kup-theme/kup-theme';

@Component({
    tag: 'kup-grid',
    styleUrl: 'kup-grid.scss',
    shadow: true,
})
export class KupGrid {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * The number of columns displayed by the grid, the default behavior is 12.
     */
    @Prop() columns: number = 12;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * When set to true, forces the content on a single line.
     */
    @Prop() singleLine: boolean = false;

    private elStyle = undefined;
    /**
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();
    /**
     * Instance of the KupTheme class.
     */
    private kupTheme: KupTheme = new KupTheme();

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
        this.kupTheme.setThemeCustomStyle(this);
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
        let slots = this.rootElement.children;
        if (!slots || slots.length === 0) {
            let message = 'Missing slots, not rendering!';
            this.kupDebug.logMessage(this, message, 'warning');
            return;
        }

        let componentClass = '';
        let contentClass = '';
        if (this.singleLine) {
            componentClass = 'flex-layout';
            contentClass = 'flex-layout__inner';
        } else {
            componentClass = 'mdc-layout-grid';
            contentClass = 'mdc-layout-grid__inner';
        }

        this.elStyle = undefined;
        if (this.columns !== 12) {
            contentClass += ' custom-grid';
            this.elStyle = {
                ['--columns-number']: this.columns,
            };
        }

        let el: JSX.Element[] = [];

        for (let i = 0; i < slots.length; i++) {
            let content = undefined;

            if (this.singleLine) {
                content = <slot name={`${i}`}></slot>;
            } else {
                let span: number = 1;
                let spanClass: string = 'mdc-layout-grid__cell';
                if (slots[i]['span']) {
                    span = slots[i]['span'];
                }
                spanClass += ' mdc-layout-grid__cell--span-' + span;
                content = (
                    <div class={spanClass}>
                        <slot name={`${i}`}></slot>
                    </div>
                );
            }
            el.push(content);
        }

        return (
            <Host style={this.elStyle}>
                <style>{this.kupTheme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class={componentClass}>
                        <div class={contentClass}>{el}</div>
                    </div>
                </div>
            </Host>
        );
    }
}

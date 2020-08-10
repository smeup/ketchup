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
import { ComponentGridElement } from './kup-grid-declarations';
import { errorLogging } from '../../utils/error-logging';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theming';

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
    @Prop({ reflect: true }) columns: number = 12;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The actual data of the grid.
     */
    @Prop() data: ComponentGridElement[] = undefined;
    /**
     * When set to true, forces the width to 100% for the single line layout.
     */
    @Prop({ reflect: true }) fullWidth: boolean = false;
    /**
     * When set to true, forces the content on a single line.
     */
    @Prop({ reflect: true }) singleLine: boolean = false;

    private elStyle = undefined;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    render() {
        if (!this.data || this.data.length === 0) {
            let message = 'Missing data, not rendering!';
            errorLogging(this.rootElement.tagName, message);
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

        if (this.fullWidth) {
            contentClass += ' full-width';
        }

        this.elStyle = undefined;
        if (this.columns !== 12) {
            contentClass += ' custom-grid';
            this.elStyle = {
                ['--columns-number']: this.columns,
            };
        }

        let el: JSX.Element[] = [];

        for (let i = 0; i < this.data.length; i++) {
            let Tag = this.data[i].tagName;
            let content = undefined;

            if (this.singleLine) {
                content = (
                    <Tag {...this.data[i].props}>{this.data[i].content}</Tag>
                );
            } else {
                let span: number = 1;
                let spanClass: string = 'mdc-layout-grid__cell';
                if (this.data[i].span) {
                    span = this.data[i].span;
                }
                spanClass += ' mdc-layout-grid__cell--span-' + span;
                content = (
                    <div class={spanClass}>
                        <Tag
                            {...this.data[i].props}
                            innerHTML={this.data[i].content}
                        ></Tag>
                    </div>
                );
            }
            el.push(content);
        }

        return (
            <Host class="handles-custom-style" style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class={componentClass}>
                        <div class={contentClass}>{el}</div>
                    </div>
                </div>
            </Host>
        );
    }
}

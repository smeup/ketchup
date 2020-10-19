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
import { logMessage } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

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
     * The actual data of the grid.
     */
    @Prop() data: ComponentGridElement[] = undefined;
    /**
     * When set to true, forces the content on a single line.
     */
    @Prop() singleLine: boolean = false;

    private elStyle = undefined;
    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
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
        if (!this.data || this.data.length === 0) {
            let message = 'Missing data, not rendering!';
            logMessage(this, message, 'warning');
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

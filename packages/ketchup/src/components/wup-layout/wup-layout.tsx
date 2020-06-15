import { Component, Host, Prop, JSX, Element, h } from '@stencil/core';
import { ComponentLayoutElement } from './wup-layout-declarations';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'wup-layout',
    styleUrl: 'wup-layout.scss',
    shadow: true,
})
export class WupLayout {
    @Element() rootElement: HTMLElement;
    /**
     * The actual data of the layout, the default behavior is 12.
     */
    @Prop({ reflect: true }) columns: number = 12;
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The actual data of the layout.
     */
    @Prop() data: ComponentLayoutElement[] = undefined;
    /**
     * When set to true forces the width to 100% for the single line layout.
     */
    @Prop({ reflect: true }) fullWidth: boolean = false;
    /**
     * When set to true forces the content on a single line.
     */
    @Prop({ reflect: true }) singleLine: boolean = false;

    private elStyle = undefined;

    render() {
        if (!this.data || this.data.length === 0) {
            let message = 'Missing data, not rendering!';
            errorLogging(this.rootElement.tagName, message);
            return;
        }

        let customStyle: string = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
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
                content = (
                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1">
                        <Tag {...this.data[i].props}>
                            {this.data[i].content}
                        </Tag>
                    </div>
                );
            }
            el.push(content);
        }

        return (
            <Host style={this.elStyle}>
                {customStyle}
                <div id="kup-component">
                    <div class={componentClass}>
                        <div class={contentClass}>{el}</div>
                    </div>
                </div>
            </Host>
        );
    }
}

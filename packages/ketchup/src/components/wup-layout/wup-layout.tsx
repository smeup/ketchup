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
     * The actual data of the layout.
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
     * When set to true forces an horizontal layout.
     */
    @Prop({ reflect: true }) horizontal: boolean = false;

    private elStyle = undefined;

    render() {
        if (!this.data || this.data.length === 0) {
            let message = 'Missing data, not rendering!';
            errorLogging(this.rootElement.tagName, message);
            return;
        }

        let componentClass = '';
        let contentClass = '';
        if (!this.horizontal) {
            componentClass = 'mdc-layout-grid';
            contentClass = 'mdc-layout-grid__inner';
        } else {
            componentClass = 'flex-layout';
            contentClass = 'flex-layout__inner';
        }

        this.elStyle = undefined;
        if (this.columns !== 12) {
            contentClass += ' custom-grid';
            this.elStyle = {
                ['--columns-number']: this.columns,
            };
        }

        let customStyle: string = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        let el: JSX.Element[] = [];

        for (let i = 0; i < this.data.length; i++) {
            let Tag = this.data[i].tagName;
            let elClass = '';
            if (!this.horizontal) {
                elClass = 'mdc-layout-grid__cell mdc-layout-grid__cell--span-1';
            } else {
                elClass = 'flex-layout__cell';
            }
            let content = (
                <div class={elClass}>
                    <Tag
                        innerHtml={this.data[i].content}
                        {...this.data[i].props}
                    ></Tag>
                </div>
            );
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

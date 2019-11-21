import { Component, Element, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-icon',
    styleUrl: 'kup-icon.scss',
    shadow: true,
})
export class KupIcon {
    public static readonly DEFAULT_ICON_URL =
        'https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css';

    @Element() ketchupIconEl: HTMLElement;
    @Prop() iconClass: string;
    @Prop() iconStylesheets = [KupIcon.DEFAULT_ICON_URL];
    @Prop() iconStyle: {};
    @Prop() imageSrc: string;

    render() {
        let styleSheets = null;
        if (this.iconStylesheets && this.iconStylesheets.length > 0) {
            styleSheets = this.iconStylesheets.map((iconStylesheet) => {
                return [
                    <link
                        href={iconStylesheet}
                        rel="stylesheet"
                        type="text/css"
                    />,
                ];
            });
        }

        let iconClass = this.iconClass;
        let wrapperStyle = this.iconStyle || {};

        if (this.imageSrc) {
            iconClass = iconClass + ' with-image';
            wrapperStyle['background-image'] = `url("${this.imageSrc}")`;
        }

        return [
            styleSheets,
            <span class={`icon ${iconClass}`} style={wrapperStyle}></span>,
        ];
    }
}

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'kup-text',
    styleUrl: 'kup-text.scss',
    shadow: true,
})
export class KupText {
    /**
     * References the root HTML element of the component (<kup-text>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the texxt.
     * @default []
     */
    @Prop({ mutable: false }) data: string = '';

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Host>
                <span class="wrapperClass">{this.data}</span>
            </Host>
        );
    }
}

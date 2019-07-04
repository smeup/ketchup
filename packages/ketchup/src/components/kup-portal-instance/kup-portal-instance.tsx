import {
    Component,
    Element,
    Prop,
  JSX
} from '@stencil/core';

@Component({
    tag: 'kup-portal-instance',
    styleUrl: 'kup-portal-instance.scss',
    shadow: true
})
export class KupPortalInstance {

    @Prop() additionalAdoptedStyleSheets: CSSStyleSheet[] = [];
    /**
     * Specifies if the current portal instance should be displayed or not.
     */
    @Prop({ reflectToAttr: true }) isVisible: boolean = false;
    /**
     * A style node to be copied into the KetchupPortalInstance
     */
    @Prop() styleNode: HTMLStyleElement;
    /**
     * Virtual node list the KetchupPortalInstance must render
     */
    @Prop() vNodes?: JSX.Element[] | JSX.Element = null;

    //---- Internal state ----
    @Element() port: HTMLElement;
    initialStyleSheets: CSSStyleSheet[] = [];

    //---- Life cycle ----
    componentWillRender() {
        // Avoid an error when there is no given style node
        if (!this.port.shadowRoot.querySelector('style[data-portal-style]') && this.styleNode) {
            this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector('style'))
        }
    }

    componentDidUpdate() {
        // If there are adopted style sheets to be added to the portal instance, we set those after the rendering
        // This is because if set before the render there is no already set portal-instance style sheet.
        if (this.additionalAdoptedStyleSheets && this.additionalAdoptedStyleSheets.length) {
            // The first style sheet is always the one of the portal itself so it must be preserved.
            this.port.shadowRoot.adoptedStyleSheets = [this.port.shadowRoot.adoptedStyleSheets[0], ...this.additionalAdoptedStyleSheets];
        }
    }

    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() {
        return this.vNodes;
    }
}
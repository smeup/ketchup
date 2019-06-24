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

    //---- Life cycle ----
    componentWillUpdate() {
        // Avoid an error when there is no given style node
        if (!this.port.shadowRoot.querySelector('style[data-portal-style]') && this.styleNode) {
            this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector('style'))
        }
    }

    //---- Internal state ----
    @Element() port: HTMLElement;

    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() {
        return this.vNodes;
    }
}
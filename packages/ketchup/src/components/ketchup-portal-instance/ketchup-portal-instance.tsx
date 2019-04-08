import {
    Component,
    Element,
    //Event,
    // EventEmitter,
    Prop,
} from '@stencil/core';

@Component({
    tag: 'ketchup-portal-instance',
    styleUrl: 'ketchup-portal-instance.scss',
    shadow: true
})
export class KetchupPortalInstance {
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
        if (!this.port.shadowRoot.querySelector('style[data-portal-style]')) {
            this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector('style'))
        }
    }

    //---- Internal state ----
    @Element() port: HTMLElement;

    /**
     * When loading the frame has thrown an error

    @Event({
        eventName: 'ketchupHtmlError',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupHtmlError: EventEmitter;

    onFrameError() {
        this.ketchupHtmlError.emit();
    }*/

    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() {
        console.log("portal instance",this.vNodes);
        return this.vNodes;
    }
}
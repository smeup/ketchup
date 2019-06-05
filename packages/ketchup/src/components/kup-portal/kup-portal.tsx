import {
    Component,
    Event,
    EventEmitter, Method,
    Prop, Watch,
} from '@stencil/core';
import { ElementOffset, setElementOffset } from "../../utils/offset";

@Component({
    tag: 'kup-portal',
    shadow: true
})
export class KupPortal {
    /**
     * Reference to the html element from which CSS Custom Properties must be derived
     */
    @Prop() cssVarsRef: HTMLElement;
    /**
     * Tells the portal instance if it can be visible or not
     */
    @Prop() isVisible: boolean = false;
    /**
     * Array of custom css vars which needs to be mirrored. Their value is computed from cssVarsRef
     */
    @Prop() mirroredCssVars: string[] = [];
    /**
     * Virtual node list the KetchupPortalInstance must render
     */
    @Prop() nodes: JSX.Element[] | JSX.Element;
    /**
     * Calculated offset of where the portal must be positioned
     */
    @Prop() refOffset: ElementOffset = {};
    /**
     * The HTML element on which the virtual node must be appended
     */
    @Prop() portalRootNode: HTMLElement = document.body;
    /**
     * A style node to be copied into the KetchupPortalInstance
     */
    @Prop() styleNode: HTMLStyleElement;

    //---- Internal state ----
    instance = document.createElement('kup-portal-instance');

    //---- Lifecycle ----
    // Initial operations
    componentWillLoad() {
        // Attach the created element to the designed father
        this.portalRootNode.appendChild(this.instance);
    }

    // Actual operations on the elements
    componentWillUpdate() {
        // Updates tree node
        this.instance.vNodes = this.nodes;
        // Creates style node
        const styleNode = this.styleNode.cloneNode(true) as HTMLStyleElement;
        styleNode.setAttribute('data-portal-style', 'true');
        this.instance.styleNode = styleNode;
        // Sets new position
        setElementOffset(this.instance, this.refOffset);
        // Sets visibility
        this.instance.isVisible = this.isVisible;
    }

    // Before being unmounted
    componentDidUnload() {
        this.portalRootNode.removeChild(this.instance);
    }

    //---- Watchers ----
    @Watch('portalRootNode')
    onPortalRootNodeChange(newValue) {
        newValue.appendChild(this.instance);
    }

    //---- Methods ----
    computeCssVars(el: HTMLElement, props: string[]) {
        if (window) {
            const computed = window.getComputedStyle(el);
            props.forEach(prop => {
                this.instance.style.setProperty(prop, computed.getPropertyValue(prop));
            });
        }
    }

    /**
     * Returns the root node instance of the KetchupPortalInstance element
     */
    @Method()
    async getPortalInstance() {
        return this.instance;
    }

    //-- Emitted --

    /**
     * When loading the frame has thrown an error
     */
    @Event({
        eventName: 'ketchupHtmlError',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupHtmlError: EventEmitter;

    onFrameError() {
        this.ketchupHtmlError.emit();
    }

    /**
     * When the iframe has been loaded
     */
    @Event({
        eventName: 'ketchupHtmlLoaded',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupHtmlLoaded: EventEmitter;

    onFrameLoaded() {
        this.ketchupHtmlLoaded.emit();
    }

    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() { return null;}
}
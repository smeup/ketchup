import {
    Component,
    Method,
    Prop,
    Watch,
    JSX
} from '@stencil/core';
import { ElementOffset, setElementOffset } from "../../utils/offset";

@Component({
    tag: 'kup-portal',
    shadow: true
})
export class KupPortal {
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
     * Reference to the html element which is using the portal.
     * It must be a root of a web component.
     */
    @Prop() portalParentRef: HTMLElement;
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
    @Prop() styleNode: HTMLStyleElement | null;

    //---- Internal state ----
    instance = document.createElement('kup-portal-instance');

    //---- Lifecycle ----
    // Initial operations
    componentWillLoad() {
        // Attach the created element to the designed father
        this.portalRootNode.appendChild(this.instance);
    }

    // Actual operations on the elements
    // Migrated this hook from componentWillUpdate to componentWillRender
    // https://stenciljs.com/docs/component-lifecycle#componentwillrender-
    // Used this hook because props will held the new value
    // While componentWillUpdate does not have the correct value inside the props.
    componentWillRender() {
        // Updates tree node
        this.instance.vNodes = this.nodes;
        // Creates style node
        console.log("the style node",this.styleNode)
        if (this.styleNode) {
            const styleNode = this.styleNode.cloneNode(true) as HTMLStyleElement;
            styleNode.setAttribute('data-portal-style', 'true');
            this.instance.styleNode = styleNode;
        } else if (this.portalParentRef && this.portalParentRef.shadowRoot.adoptedStyleSheets.length) {
            console.log("la instance", this.instance);
            this.instance.shadowRoot.adoptedStyleSheets = this.instance.shadowRoot.adoptedStyleSheets.concat(this.portalParentRef.shadowRoot.adoptedStyleSheets.slice());
        }
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

    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() { return null;}
}
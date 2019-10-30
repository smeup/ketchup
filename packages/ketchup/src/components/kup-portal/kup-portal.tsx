import {
  Component,
  Method,
  Prop,
  Watch,
  JSX
} from '@stencil/core';
import {ElementOffset, setElementOffset} from "../../utils/offset";

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
  supportsShadowRoot: boolean = false;
  supportsAdoptedStyle: boolean = false;

  //---- Lifecycle ----
  // Initial operations
  componentWillLoad() {
    // Attach the created element to the designed father
    this.portalRootNode.appendChild(this.instance);

    // Controls if the browsers supports shadow root
    // https://wicg.github.io/construct-stylesheets/
    if (this.instance.shadowRoot) {
      // If it is supported, then stores the portal initial stylesheet
      this.supportsShadowRoot = true;
      // and Construtable Stylesheet Objects
      if ('adoptedStyleSheets' in this.instance.shadowRoot) {
        this.supportsAdoptedStyle = true;
      }
    }
  }

  // Migrated this hook from componentWillUpdate to componentDidUpdate with the addition of componentDidLoad
  // https://stenciljs.com/docs/component-lifecycle#componentwillrender-
  // Used this hooks because during their execution props will held the new value
  // While componentWillUpdate does not have the correct value inside the props.
  // In addition both of these life cycles are necessary to allow Firefox to correctly set the style node even on the
  // first render of the component inside the portal.
  componentDidUpdate() {
    this.updatePortalInstance();
  }

  componentDidLoad() {
    this.updatePortalInstance();
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
  private computeCssVars(el: HTMLElement, props: string[]) {
    if (window) {
      const computed = window.getComputedStyle(el);
      props.forEach(prop => {
        this.instance.style.setProperty(prop, computed.getPropertyValue(prop));
      });
    }
  }

  /**
   * Actual operations on the elements to update the portal instance
   */
  private updatePortalInstance() {
    // Updates tree node
    this.instance.vNodes = this.nodes;
    // Creates style node
    if (this.styleNode) {
      const styleNode = this.styleNode.cloneNode(true) as HTMLStyleElement;
      styleNode.setAttribute('data-portal-style', 'true');
      this.instance.styleNode = styleNode;
    } else if (this.portalParentRef && this.supportsAdoptedStyle) {
      this.instance.additionalAdoptedStyleSheets = this.portalParentRef.shadowRoot.adoptedStyleSheets.slice();
    }
    // Sets new position
    setElementOffset(this.instance, this.refOffset);
    // Sets visibility
    this.instance.isVisible = this.isVisible;
    this.computeCssVars(this.portalParentRef, this.mirroredCssVars);
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
  render() {
    return null;
  }
}

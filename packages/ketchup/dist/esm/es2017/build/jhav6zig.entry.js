import { h } from '../mycomponent.core.js';

import { b as setElementOffset } from './chunk-b401efdc.js';

class KetchupPortal {
    constructor() {
        this.isVisible = false;
        this.mirroredCssVars = [];
        this.refOffset = {};
        this.portalRootNode = document.body;
        this.instance = document.createElement('ketchup-portal-instance');
    }
    componentWillLoad() {
        this.portalRootNode.appendChild(this.instance);
    }
    componentWillUpdate() {
        this.instance.vNodes = this.nodes;
        const styleNode = this.styleNode.cloneNode(true);
        styleNode.setAttribute('data-portal-style', 'true');
        this.instance.styleNode = styleNode;
        setElementOffset(this.instance, this.refOffset);
        this.instance.isVisible = this.isVisible;
    }
    componentDidUnload() {
        this.portalRootNode.removeChild(this.instance);
    }
    onPortalRootNodeChange(newValue) {
        newValue.appendChild(this.instance);
    }
    computeCssVars(el, props) {
        if (window) {
            const computed = window.getComputedStyle(el);
            props.forEach(prop => {
                this.instance.style.setProperty(prop, computed.getPropertyValue(prop));
            });
        }
    }
    async getPortalInstance() {
        return this.instance;
    }
    onFrameError() {
        this.ketchupHtmlError.emit();
    }
    onFrameLoaded() {
        this.ketchupHtmlLoaded.emit();
    }
    render() { return null; }
    static get is() { return "ketchup-portal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cssVarsRef": {
            "type": "Any",
            "attr": "css-vars-ref"
        },
        "getPortalInstance": {
            "method": true
        },
        "isVisible": {
            "type": Boolean,
            "attr": "is-visible"
        },
        "mirroredCssVars": {
            "type": "Any",
            "attr": "mirrored-css-vars"
        },
        "nodes": {
            "type": "Any",
            "attr": "nodes"
        },
        "portalRootNode": {
            "type": "Any",
            "attr": "portal-root-node",
            "watchCallbacks": ["onPortalRootNodeChange"]
        },
        "refOffset": {
            "type": "Any",
            "attr": "ref-offset"
        },
        "styleNode": {
            "type": "Any",
            "attr": "style-node"
        }
    }; }
    static get events() { return [{
            "name": "ketchupHtmlError",
            "method": "ketchupHtmlError",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupHtmlLoaded",
            "method": "ketchupHtmlLoaded",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
}

class KetchupPortalInstance {
    constructor() {
        this.isVisible = false;
        this.vNodes = null;
    }
    componentWillUpdate() {
        if (!this.port.shadowRoot.querySelector('style[data-portal-style]')) {
            this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector('style'));
        }
    }
    render() {
        console.log("portal instance", this.vNodes);
        return this.vNodes;
    }
    static get is() { return "ketchup-portal-instance"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "isVisible": {
            "type": Boolean,
            "attr": "is-visible",
            "reflectToAttr": true
        },
        "port": {
            "elementRef": true
        },
        "styleNode": {
            "type": "Any",
            "attr": "style-node"
        },
        "vNodes": {
            "type": "Any",
            "attr": "v-nodes"
        }
    }; }
    static get style() { return ":host{display:none!important;position:absolute!important;z-index:99999!important}:host([is-visible]){display:inline-block!important}"; }
}

export { KetchupPortal, KetchupPortalInstance };

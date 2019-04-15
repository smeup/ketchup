export class KetchupPortalInstance {
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
    static get style() { return "/**style-placeholder:ketchup-portal-instance:**/"; }
}

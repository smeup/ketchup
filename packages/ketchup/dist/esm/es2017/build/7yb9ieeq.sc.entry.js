import { h } from '../mycomponent.core.js';

import { b as generateUniqueId } from './chunk-31f65c6e.js';

class KetchupFld {
    constructor() {
        this.config = '';
        this.showSubmit = false;
        this.submitLabel = '';
        this.submitPos = 'right';
        this.label = '';
        this.labelPos = 'left';
        this.propagate = {};
        this.extensions = {};
        this.radioGeneratedName = generateUniqueId('value');
        this.currentValue = null;
        this.onChangeInstance = this.onChange.bind(this);
        this.onSubmitInstance = this.onSubmit.bind(this);
    }
    updateInternalState() {
        let currentData;
        if (typeof this.config === 'string' && this.config) {
            currentData = JSON.parse(this.config);
        }
        else {
            currentData = this.config;
        }
        const keys = Object.keys(currentData);
        let propagate = {};
        keys.forEach(key => {
            if (key in this) {
                this[key] = currentData[key];
            }
            else {
                propagate[key] = currentData[key];
            }
        });
        this.propagate = propagate;
    }
    componentWillLoad() {
        this.updateInternalState();
    }
    onChange(event) {
        const { value } = event.detail;
        this.ketchupFldChanged.emit({
            originalEvent: event,
            oldValue: this.currentValue,
            value
        });
        this.currentValue = value;
    }
    onSubmit(event) {
        this.ketchupFldSubmit.emit({
            originalEvent: event,
            value: this.currentValue,
        });
    }
    async getCurrentValue() {
        return this.currentValue;
    }
    render() {
        let toRender = [];
        const baseClass = 'ketchup-fld';
        let label = null;
        let submit = null;
        if (this.label.trim().length) {
            label =
                h("label", { class: baseClass + '__label' + ' ' + baseClass + '--' + this.labelPos }, this.label);
        }
        if (this.showSubmit) {
            submit =
                h("ketchup-button", { class: baseClass + '__submit' + ' ' + baseClass + '--' + this.submitPos, label: this.submitLabel, onKetchupButtonClicked: this.onSubmitInstance });
        }
        const labelIsTop = this.labelPos === 'top';
        const submitIsTop = this.submitPos === 'top';
        if (labelIsTop || submitIsTop) {
            toRender.push(h("div", { class: baseClass + '__top-container' },
                labelIsTop && label ? label : null,
                submitIsTop && submit ? submit : null));
        }
        if (!labelIsTop && label) {
            toRender.push(label);
        }
        let type = '';
        let confObj = {};
        switch (this.type) {
            case 'cmb':
                confObj.displayedField = 'value';
                confObj.valueField = 'value';
                confObj.onKetchupComboSelected = this.onChangeInstance;
                type = 'combo';
                break;
            case 'rad':
                confObj.valueField = 'obj';
                confObj.radioName = this.radioGeneratedName;
                confObj.onKetchupRadioChanged = this.onChangeInstance;
                type = 'radio';
                break;
            case 'itx':
            case 'Itx':
                confObj.onKetchupTextInputUpdated = this.onChangeInstance;
                confObj.onKetchupTextInputSubmit = this.onSubmitInstance;
                type = 'text-input';
                break;
        }
        const $DynamicComponent = ('ketchup-' + type);
        toRender.push(h($DynamicComponent, Object.assign({ class: baseClass + '__component', items: this.data }, confObj, this.propagate)));
        if (!submitIsTop && submit) {
            toRender.push(submit);
        }
        return toRender;
    }
    static get is() { return "ketchup-fld"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "config": {
            "type": String,
            "attr": "config",
            "watchCallbacks": ["updateInternalState"]
        },
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "extensions": {
            "state": true
        },
        "getCurrentValue": {
            "method": true
        },
        "label": {
            "state": true
        },
        "labelPos": {
            "state": true
        },
        "propagate": {
            "state": true
        },
        "showSubmit": {
            "state": true
        },
        "submitLabel": {
            "state": true
        },
        "submitPos": {
            "state": true
        },
        "type": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ketchupFldChanged",
            "method": "ketchupFldChanged",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupFldSubmit",
            "method": "ketchupFldSubmit",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return ".sc-ketchup-fld-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;--fld_comp-margin:var(--kup-fld_component-margin,8px)}.ketchup-fld__top-container.sc-ketchup-fld{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-order:0;order:0;width:100%}.ketchup-fld__label.sc-ketchup-fld{margin:var(--fld_comp-margin);-ms-flex-order:1;order:1}.ketchup-fld__label.ketchup-fld--right.sc-ketchup-fld{-ms-flex-order:4;order:4}.ketchup-fld__component.sc-ketchup-fld{margin:var(--fld_comp-margin);-ms-flex-order:3;order:3}.ketchup-fld__submit.sc-ketchup-fld{margin:var(--fld_comp-margin);-ms-flex-order:2;order:2}.ketchup-fld__submit.ketchup-fld--right.sc-ketchup-fld{-ms-flex-order:5;order:5}"; }
}

export { KetchupFld };

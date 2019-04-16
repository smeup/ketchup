import { h } from '../mycomponent.core.js';

import { a as eventFromElement } from './chunk-31f65c6e.js';
import { a as getElementOffset } from './chunk-b401efdc.js';

class KetchupCombo {
    constructor() {
        this.displayedField = 'id';
        this.valueField = 'id';
        this.initialValue = {};
        this.isClearable = false;
        this.items = [];
        this.label = '';
        this.usePortal = false;
        this.value = '';
        this.filter = '';
        this.isOpen = false;
        this.portalRef = null;
        this.clickFunction = this.onDocumentClick.bind(this);
        this.comboPosition = {
            isRight: false,
            isTop: false
        };
        this.baseClass = 'ketchup-combo';
    }
    componentWillLoad() {
        this.reflectInitialValue(this.initialValue);
    }
    componentDidLoad() {
        document.addEventListener('click', this.clickFunction);
    }
    componentDidUnload() {
        document.removeEventListener('click', this.clickFunction);
    }
    closeCombo() {
        this.isOpen = false;
    }
    openCombo() {
        this.comboPosition = this.calcBoxPosition();
        this.isOpen = true;
    }
    reflectInitialValue(newValue, oldValue) {
        if (!oldValue || newValue[this.valueField] !== oldValue[this.valueField]) {
            this.value = newValue[this.valueField];
            this.selected = newValue;
            this.onComboSelected(newValue);
        }
    }
    reflectValueField(newValue) {
        this.value = this.selected ? this.selected[newValue] : '';
    }
    calcBoxPosition() {
        const windowX = document.documentElement.clientWidth;
        const windowY = document.documentElement.clientHeight;
        const { height, left, top, width } = this.comboText.getBoundingClientRect();
        return {
            isRight: left + width / 2 > windowX / 2,
            isTop: top + height / 2 > windowY / 2
        };
    }
    onClearClick() {
        this.value = '';
        this.selected = null;
        this.onComboSelected(null);
    }
    onComboClick() {
        this.openCombo();
    }
    async onDocumentClick(event) {
        let response = null;
        if (this.usePortal) {
            response = await this.portalRef.getPortalInstance();
        }
        try {
            if (event.composedPath().indexOf(this.comboEl) < 0 && event.composedPath().indexOf(response) < 0) {
                this.closeCombo();
            }
        }
        catch (e) {
            const ele = event.target;
            if (!eventFromElement(this.comboEl, ele) && !eventFromElement(response, ele)) {
                this.closeCombo();
            }
        }
    }
    onFilterUpdate(event) {
        console.log(event);
        this.filter = event.detail.value.toLowerCase();
    }
    onItemSelected(item) {
        if (item[this.valueField] !== this.value) {
            this.onComboSelected(item);
            this.selected = item;
            this.value = item[this.valueField];
        }
        this.closeCombo();
    }
    onComboSelected(item) {
        this.ketchupComboSelected.emit({
            value: item,
        });
    }
    composeList() {
        return h("div", { class: this.baseClass + '__menu' + (this.isOpen ? ' is-open' : '') +
                (this.comboPosition.isRight ? ' is-right' : '') + (this.comboPosition.isTop ? ' is-top' : '')
                + (this.usePortal ? ' is-using-portal' : '') },
            h("div", { class: this.baseClass + '__filter' },
                h("ketchup-text-input", { onKetchupTextInputUpdated: this.onFilterUpdate.bind(this) })),
            h("ul", { class: this.baseClass + '__list' }, this.items.filter(item => !this.filter || item[this.displayedField].toLowerCase().indexOf(this.filter) >= 0)
                .map(item => h("li", { onClick: () => this.onItemSelected(item) },
                h("span", null, item[this.displayedField])))));
    }
    render() {
        const containerClass = this.baseClass + '__container';
        return ([
            h("div", { class: containerClass + (this.isClearable ? ' ' + containerClass + '--clearable' : ''), ref: (el) => this.comboText = el },
                h("span", { class: this.baseClass + '__current-value', onClick: this.onComboClick.bind(this) },
                    this.selected[this.displayedField],
                    h("svg", { class: this.baseClass + '__icon ' + this.baseClass + '__chevron' + (this.isOpen ? ' ' + this.baseClass + '__chevron--open' : ''), viewBox: "0 0 24 24" },
                        h("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))),
                this.isClearable ?
                    h("button", { "aria-label": "Close", class: this.baseClass + '__clear', role: "button", onClick: this.onClearClick.bind(this) },
                        h("svg", { class: this.baseClass + '__icon', viewBox: "0 0 24 24" },
                            h("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }))) :
                    null),
            this.usePortal ?
                h("ketchup-portal", { cssVarsRef: this.comboEl, isVisible: this.isOpen, mirroredCssVars: ['--cmb_menu-background', '--cmb_tr-duration'], nodes: this.composeList(), ref: el => this.portalRef = el, refOffset: getElementOffset(this.comboEl, this.comboPosition), styleNode: this.comboEl.shadowRoot.querySelector('style') })
                :
                    this.composeList()
        ]);
    }
    static get is() { return "ketchup-combo"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closeCombo": {
            "method": true
        },
        "comboEl": {
            "elementRef": true
        },
        "displayedField": {
            "type": String,
            "attr": "displayed-field"
        },
        "filter": {
            "state": true
        },
        "initialValue": {
            "type": "Any",
            "attr": "initial-value",
            "watchCallbacks": ["reflectInitialValue"]
        },
        "isClearable": {
            "type": Boolean,
            "attr": "is-clearable"
        },
        "isOpen": {
            "state": true
        },
        "items": {
            "type": "Any",
            "attr": "items"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "openCombo": {
            "method": true
        },
        "usePortal": {
            "type": Boolean,
            "attr": "use-portal"
        },
        "value": {
            "state": true
        },
        "valueField": {
            "type": String,
            "attr": "value-field",
            "watchCallbacks": ["reflectValueField"]
        }
    }; }
    static get events() { return [{
            "name": "ketchupComboSelected",
            "method": "ketchupComboSelected",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return ".sc-ketchup-combo-h{--cmb_font-size:var(--kup-combo_input_font-size,14px);--cmb_border-color:var(--kup-combo_input_border-color,grey);--cmb_border-color--selected:var(--kup-combo_input_border-color,#676767);--cmb_tr-duration:var(--kup-combo_input_transition-duration,0.6s);--cmb_icon-color:var(--kup-combo_icon_color,grey);--cmb_icon-color--hover:var(--kup-combo_icon_color--hover,#676767);--cmb_menu-background:var(--kup-combo_menu_background,#fff);display:inline-block;position:relative;z-index:1}.ketchup-combo__container.sc-ketchup-combo{background-color:#fff;border:1px solid var(--cmb_border-color);border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;outline:none}.ketchup-combo__container.sc-ketchup-combo:focus, .ketchup-combo__container.sc-ketchup-combo:hover{border-color:var(--cmb_border-color--selected)}.ketchup-combo__icon.sc-ketchup-combo{fill:var(--cmb_icon-color);height:var(--cmb_font-size);-webkit-transition:fill var(--cmb_tr-duration),-webkit-transform var(--cmb_tr-duration);transition:fill var(--cmb_tr-duration),-webkit-transform var(--cmb_tr-duration);transition:fill var(--cmb_tr-duration),transform var(--cmb_tr-duration);transition:fill var(--cmb_tr-duration),transform var(--cmb_tr-duration),-webkit-transform var(--cmb_tr-duration);width:var(--cmb_font-size)}.ketchup-combo__current-value.sc-ketchup-combo{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;font-size:var(--cmb_font-size);-ms-flex-pack:center;justify-content:center;padding:4px 6px}.ketchup-combo__chevron.sc-ketchup-combo{margin-left:16px}.ketchup-combo__chevron--open.sc-ketchup-combo{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ketchup-combo__clear.sc-ketchup-combo{-ms-flex-align:center;align-items:center;background-color:transparent;border:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;margin:0;outline:none;padding:4px}.ketchup-combo__clear.sc-ketchup-combo:hover > svg.sc-ketchup-combo{fill:var(--cmb_icon-color--hover)}.ketchup-combo__menu.sc-ketchup-combo{background-color:var(--cmb_menu-background);border-radius:2px;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.5);box-shadow:0 1px 5px rgba(0,0,0,.5);display:inline-block;left:0;opacity:0;position:absolute;-webkit-transition:opacity var(--cmb_tr-duration);transition:opacity var(--cmb_tr-duration);top:100%;visibility:hidden;z-index:1}.ketchup-combo__menu.is-open.sc-ketchup-combo{opacity:1;visibility:visible}.ketchup-combo__menu.is-top.sc-ketchup-combo{bottom:100%;top:auto}.ketchup-combo__menu.is-right.sc-ketchup-combo{left:auto;right:0}.ketchup-combo__menu.is-using-portal.sc-ketchup-combo{position:relative}.ketchup-combo__filter.sc-ketchup-combo{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:4px}.ketchup-combo__list.sc-ketchup-combo{display:block;list-style-type:none;padding:0;max-height:400px;margin:0;overflow:auto}.ketchup-combo__list.sc-ketchup-combo > li.sc-ketchup-combo{border-bottom:1px solid #e8eae9;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;padding:6px 8px 5px}.ketchup-combo__list.sc-ketchup-combo > li.is-selected.sc-ketchup-combo, .ketchup-combo__list.sc-ketchup-combo > li.sc-ketchup-combo:hover{background-color:#f0f0f0}.ketchup-combo__list.sc-ketchup-combo > li.sc-ketchup-combo:last-of-type{border-bottom:none}"; }
}

class KetchupTextInput {
    constructor() {
        this.initialValue = '';
        this.isClearable = false;
        this.label = '';
        this.maxLength = 524288;
        this.value = '';
        this.classInputText = 'ketchup-input-text';
    }
    componentWillLoad() {
        this.value = this.initialValue;
    }
    triggerFocus() {
        this.inputEl.focus();
        this.textInput.focus();
    }
    onClearClick() {
        this.value = '';
        setTimeout(() => this.triggerFocus(), 10);
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.ketchupTextInputSubmit.emit({
                value: this.value
            });
        }
    }
    onInputBlurred(event) {
        const { target } = event;
        this.inputBlur.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    onInputFocused(event) {
        const { target } = event;
        this.inputFocused.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    onInputUpdated(event) {
        const { target } = event;
        this.ketchupTextInputUpdated.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    render() {
        const containerClass = this.classInputText + '__container';
        return (h("div", { class: containerClass + (this.isClearable ? ' ' + containerClass + '--clearable' : '') },
            h("input", { class: this.classInputText + (this.isClearable ? ' ' + this.classInputText + '--clearable' : ''), maxlength: this.maxLength, ref: (el) => this.textInput = el, tabindex: "0", value: this.value, onBlur: this.onInputBlurred.bind(this), onInput: this.onInputUpdated.bind(this), onFocus: this.onInputFocused.bind(this), onKeyDown: this.onKeyDown.bind(this) }),
            this.isClearable ?
                h("button", { "aria-label": "Close", class: this.classInputText + '__clear', role: "button", onClick: this.onClearClick.bind(this) },
                    h("svg", { viewBox: "0 0 24 24" },
                        h("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }))) :
                null));
    }
    static get is() { return "ketchup-text-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "initialValue": {
            "type": String,
            "attr": "initial-value"
        },
        "inputEl": {
            "elementRef": true
        },
        "isClearable": {
            "type": Boolean,
            "attr": "is-clearable"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "triggerFocus": {
            "method": true
        },
        "value": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ketchupTextInputBlurred",
            "method": "inputBlur",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputFocused",
            "method": "inputFocused",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputSubmit",
            "method": "ketchupTextInputSubmit",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputUpdated",
            "method": "ketchupTextInputUpdated",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return ".sc-ketchup-text-input-h{--int_font-size:var(--kup-text-input_font-size,14px);--int_border-color:var(--kup-text-input_border-color,grey);--int_border-color--selected:var(--kup-text-input_border-color--selected,#4e908f);--int_tr-duration:var(--kup-text-input_transition-duration,0.6s);--int_icon-color:var(--kup-text-input_icon-color,grey);--int_icon-color--hover:var(--kup-text-input_icon-color--hover,#676767);display:inline-block}.ketchup-input-text.sc-ketchup-text-input{background-color:#fff;border:1px solid var(--int_border-color);border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;padding:4px 6px;position:relative;-webkit-transition:background-color var(--int_tr-duration);transition:background-color var(--int_tr-duration);z-index:0}.ketchup-input-text__container.sc-ketchup-text-input{display:inline-block;position:relative;z-index:0}.ketchup-input-text.sc-ketchup-text-input:focus, .ketchup-input-text.sc-ketchup-text-input:hover{border-color:var(--int_border-color--selected)}.ketchup-input-text--clearable.sc-ketchup-text-input{padding-right:calc(6px + 4px * 2 + var(--int_font-size))}.ketchup-input-text__clear.sc-ketchup-text-input{-ms-flex-align:center;align-items:center;background-color:transparent;border:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;margin:0;outline:none;padding:4px;position:absolute;right:6px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.ketchup-input-text__clear.sc-ketchup-text-input > svg.sc-ketchup-text-input{fill:var(--int_icon-color);height:var(--int_font-size);-webkit-transition:fill var(--int_tr-duration);transition:fill var(--int_tr-duration);width:var(--int_font-size)}.ketchup-input-text__clear.sc-ketchup-text-input:hover > svg.sc-ketchup-text-input{fill:var(--int_icon-color--hover)}"; }
}

export { KetchupCombo, KetchupTextInput };

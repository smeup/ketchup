import { h } from '../mycomponent.core.js';

class KetchupButton {
    constructor() {
        this.flat = false;
        this.fillspace = false;
        this.showtext = true;
        this.showicon = true;
        this.rounded = false;
        this.transparent = false;
        this.iconUrl = 'https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css';
    }
    onBtnClickedHandler() {
        this.ketchupButtonClicked.emit({ id: this.ketchupButtonEl.dataset.id });
    }
    _isHint() {
        return 'Hint' === this.textmode;
    }
    render() {
        let btnLabel = null;
        if ((!this._isHint() || (this._isHint() && this.flat)) &&
            this.showtext &&
            this.label) {
            btnLabel = h("span", { class: "button-text" }, this.label);
        }
        let icon = null;
        if (this.showicon && this.iconClass) {
            icon = h("span", { class: 'button-icon ' + this.iconClass });
        }
        let btnClass = '';
        if (this.flat) {
            btnClass = 'flat-btn';
        }
        else {
            if (this.buttonClass) {
                btnClass += this.buttonClass;
            }
            if (this.rounded) {
                btnClass += ' rounded';
            }
            if (this.transparent) {
                btnClass += ' transparent';
            }
        }
        if (this.fillspace) {
            btnClass += ' fillspace';
        }
        if (this.align) {
            if ('right' === this.align) {
                btnClass += ' align-right';
            }
            else if ('left' === this.align) {
                btnClass += ' align-left';
            }
        }
        btnClass = btnClass.trim();
        let title = '';
        if (this._isHint()) {
            title = this.label;
        }
        return [
            h("link", { href: this.iconUrl, rel: "stylesheet", type: "text/css" }),
            h("button", { class: btnClass, title: title, onClick: () => this.onBtnClickedHandler() },
                icon,
                btnLabel),
        ];
    }
    static get is() { return "ketchup-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align"
        },
        "buttonClass": {
            "type": String,
            "attr": "button-class"
        },
        "fillspace": {
            "type": Boolean,
            "attr": "fillspace"
        },
        "flat": {
            "type": Boolean,
            "attr": "flat"
        },
        "iconClass": {
            "type": String,
            "attr": "icon-class"
        },
        "iconUrl": {
            "type": String,
            "attr": "icon-url"
        },
        "ketchupButtonEl": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded"
        },
        "showicon": {
            "type": Boolean,
            "attr": "showicon"
        },
        "showtext": {
            "type": Boolean,
            "attr": "showtext"
        },
        "textmode": {
            "type": String,
            "attr": "textmode"
        },
        "transparent": {
            "type": Boolean,
            "attr": "transparent"
        }
    }; }
    static get events() { return [{
            "name": "ketchupButtonClicked",
            "method": "ketchupButtonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{--btn_font-style:var(--kup-button_font-style,\"normal\");--btn_font-size:var(--kup-button_font-size,14px);--btn_font-weight:var(--kup-button_font-weight,400);--btn_font-family:var(--kup-button_font-family,inherit);--btn_icon-size:var(--kup-button_icon-size,18px);--btn_main-color:var(--kup-button_main-color,#4e908f);--btn_text-color:var(--kup-button_text-color,#fff);--btn_text-color--transparent:var(--kup-button_text-color--transparent,grey);--btn_text-decoration:var(--kup-button_text-decoration,\"none\");--btn_icon-color:var(--kup-button_icon-color,#fff);--btn_icon--transparent:var(--kup-button_icon-color--transparent,grey);--btn_animation-duration:var(--kup-button_animation-duration,0.3s);--btn_border-color:var(--kup-button_border-color,#4e908f);--btn_color-info:var(--kup-color-info,#6a8fd1);--btn_color-danger:var(--kup-danger-danger,#f0423c);--btn_color-danger--hover:var(--kup-danger-color--hover,#d91e18);--btn_color-warning:var(--kup-info-color,#ffd454);--btn_color-selected:var(--kup-info-color,#ffc107)}:host(.fillspace) button{width:100%}button{background:var(--btn_main-color);border-radius:2px;border:none;-webkit-box-shadow:none;box-shadow:none;color:var(--btn_text-color);cursor:pointer;font-family:var(--btn_font-family);font-size:var(--btn_font-size);font-weight:var(--btn_font-weight);line-height:30px;padding:0 8px;text-align:center;-webkit-transition:-webkit-box-shadow var(--btn_animation-duration);transition:-webkit-box-shadow var(--btn_animation-duration);transition:box-shadow var(--btn_animation-duration);transition:box-shadow var(--btn_animation-duration),-webkit-box-shadow var(--btn_animation-duration);white-space:nowrap}button:hover{-webkit-box-shadow:2px 2px 5px 1px hsla(0,0%,39.2%,.7);box-shadow:2px 2px 5px 1px hsla(0,0%,39.2%,.7)}button>.button-icon{display:block;color:var(--btn_icon-color);fill:var(--btn_icon-color);float:left;width:var(--btn_icon-size)}button>.button-text{font-style:var(--btn_font-style);-webkit-text-decoration:var(--btn_text-decoration);text-decoration:var(--btn_text-decoration)}button.rounded{border-radius:15px}button.transparent{background-color:transparent;border:1px solid var(--btn_border-color);color:var(--btn_text-color--transparent)}button.transparent>.button-icon{color:var(--btn_icon-color--transparent);fill:var(--btn_icon-color--transparent)}button.btn-info{background:var(--btn_color-info)}button.btn-danger{background:var(--btn_color-danger)}button.btn-danger:hover{background:var(--btn_color-danger--hover)}button.btn-warning{background:var(--btn_color-warning)}button.btn-selected{background:var(--btn_color-selected)}button.flat-btn{background:none;border:none;color:var(--btn_main-color)}button.flat-btn:hover{-webkit-box-shadow:none;box-shadow:none}button.flat-btn .button-text{text-decoration:underline}button.flat-btn>.button-icon{color:var(--btn_main-color);fill:var(--btn_main-color)}button.align-right{text-align:right}button.align-right>.button-icon{float:right}button.align-left{text-align:left}button.fillspace{width:100%}"; }
}

export { KetchupButton };

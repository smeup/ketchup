"use strict";
// mycomponent: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("./mycomponent.core.js");
var mycomponent_components_js_1 = require("./mycomponent.components.js");
function defineCustomElements(win, opts) {
    return mycomponent_core_js_1.defineCustomElement(win, mycomponent_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;

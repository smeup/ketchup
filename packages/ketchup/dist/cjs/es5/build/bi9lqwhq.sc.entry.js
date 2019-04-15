"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mycomponent_core_js_1 = require("../mycomponent.core.js");
var chunk_31f65c6e_js_1 = require("./chunk-31f65c6e.js");
var MyComponent = function () { function e() { } return e.prototype.getText = function () { return chunk_31f65c6e_js_1.c(this.first, this.middle, this.last); }, e.prototype.render = function () { return mycomponent_core_js_1.h("div", null, "Hello, World! I'm ", this.getText()); }, Object.defineProperty(e, "is", { get: function () { return "my-component"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { first: { type: String, attr: "first" }, last: { type: String, attr: "last" }, middle: { type: String, attr: "middle" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ""; }, enumerable: !0, configurable: !0 }), e; }();
exports.MyComponent = MyComponent;

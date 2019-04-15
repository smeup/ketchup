"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(e, n, t) { return (e || "") + (n ? " " + n : "") + (t ? " " + t : ""); }
exports.c = format;
function generateUniqueId(e) { return (new Date).getTime() + e.trim().replace(/\s/g, "_"); }
exports.b = generateUniqueId;
function eventFromElement(e, n) { for (; n;) {
    if (console.log(n), n === e)
        return !0;
    n = n.parentElement;
} return !1; }
exports.a = eventFromElement;

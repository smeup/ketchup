// This shim is used to inform the TS compiler of the presence of the adoptedStyleSheets object on the shadow root object.
declare interface ShadowRoot {
    adoptedStyleSheets: CSSStyleSheet[];
}
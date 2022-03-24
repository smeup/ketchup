export interface KupTooltipAnchor extends HTMLElement {
    kupTooltipEnterCb: (e?: PointerEvent) => void;
    kupTooltipOverCb: (e?: PointerEvent) => void;
    kupTooltipLeaveCb: (e?: PointerEvent) => void;
}

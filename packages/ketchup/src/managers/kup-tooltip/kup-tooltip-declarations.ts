export interface KupTooltipAnchor extends HTMLElement {
    kupTooltip: KupTooltipCallbacks;
}

export interface KupTooltipCallbacks {
    enter: (e?: PointerEvent) => void;
    over: (e?: PointerEvent) => void;
    leave: (e?: PointerEvent) => void;
}

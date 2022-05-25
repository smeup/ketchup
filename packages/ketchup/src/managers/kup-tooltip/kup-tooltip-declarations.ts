export interface KupTooltipAnchor extends HTMLElement {
    kupTooltip: KupTooltipCallbacks;
}

export interface KupTooltipCallbacks {
    enter?: (e?: PointerEvent, anchor?: HTMLElement) => void;
    over?: (e?: PointerEvent, anchor?: HTMLElement) => void;
    leave?: (e?: PointerEvent, anchor?: HTMLElement) => void;
}

export interface KetchupFldSubmitEvent {
    originalEvent: CustomEvent;
    value: object | string;
}

export interface KetchupFldChangeEvent {
    originalEvent: CustomEvent<any>;
    oldValue: object | string;
    value: object | string;
}
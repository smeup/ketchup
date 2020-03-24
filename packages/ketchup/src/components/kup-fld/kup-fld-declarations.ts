import { KupPayloadEvent } from '../../types/EventInterfaces';

export interface KupFldSubmitEvent extends KupPayloadEvent<any, object> {
    originalEvent: CustomEvent;
}

export interface KupFldChangeEvent extends KupPayloadEvent<any, object> {
    originalEvent: CustomEvent<any>;
}

export interface ComponentProps {
    prop: string;
    value: any;
}

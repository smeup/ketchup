import { KupPayloadEvent } from "../../types/EventInterfaces";

export interface KetchupFldSubmitEvent extends KupPayloadEvent<any, object> {
    originalEvent: CustomEvent;
}

export interface KetchupFldChangeEvent extends KupPayloadEvent<any, object> {
    originalEvent: CustomEvent<any>;
}

import {KupPayloadEvent} from "../../types/EventInterfaces";
import {GenericObject} from "../../types/GenericTypes";

export interface KetchupRadioElement {
    label: string;
    value: string;
}

export type KetchupRadioChangeEvent = KupPayloadEvent<any,GenericObject>;

/**
 * Factory function for KetchupRadioElement
 * @constructor
 */
export function KetchupRadioElementFactory(): KetchupRadioElement {
    return {
        label: '',
        value: ''
    };
}

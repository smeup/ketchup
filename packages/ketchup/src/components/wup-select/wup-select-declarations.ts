import { KupPayloadEvent } from '../../types/EventInterfaces';
import { GenericObject } from '../../types/GenericTypes';

export interface SelectItem {
    [key: string]: any;
}

export interface SelectPosition {
    isRight: boolean;
    isTop: boolean;
}

export type KetchupSelectEvent = KupPayloadEvent<SelectItem, GenericObject>;

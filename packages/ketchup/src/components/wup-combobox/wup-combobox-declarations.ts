import { KupPayloadEvent } from '../../types/EventInterfaces';
import { GenericObject } from '../../types/GenericTypes';

export interface ComboboxItem {
    [key: string]: any;
}

export interface ComboboxPosition {
    isRight: boolean;
    isTop: boolean;
}

export type KetchupComboboxEvent = KupPayloadEvent<ComboboxItem, GenericObject>;

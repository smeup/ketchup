import { KupPayloadEvent } from '../../types/EventInterfaces';
import { GenericObject } from '../../types/GenericTypes';

export interface ComboItem {
    [key: string]: any;
}

export interface ComboPosition {
    isRight: boolean;
    isTop: boolean;
}

export type KetchupComboEvent = KupPayloadEvent<ComboItem, GenericObject>;

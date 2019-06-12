import { GenericObject } from "../../types/GenericTypes";
import { KupPayloadEvent } from "../../types/EventInterfaces";

export type KetchupTextInputEvent = KupPayloadEvent<string | undefined,GenericObject>;
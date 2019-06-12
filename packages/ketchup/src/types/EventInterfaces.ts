export interface KupPayloadEvent<KupPayloadEventData, KupPayloadEventInfo> {
  value: KupPayloadEventData;
  oldValue: KupPayloadEventData;
  info: KupPayloadEventInfo;
}

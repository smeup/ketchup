export const searchStartEvent = 'kup-search-start';
/**
 * Payload of the event fired when a search is launched without props.
 */
export interface KupSearchEventPayload {
    card: HTMLKupCardElement;
}

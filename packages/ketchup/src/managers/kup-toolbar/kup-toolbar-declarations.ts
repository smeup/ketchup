import { KupEventPayload, KupListNode } from '../../components';

/**
 * Modifiers to listen to in Keyboard Event in order to trigger the toolbars.
 */
export enum KupToolbarModifierKeys {
    ALT = 'altKey',
    CTRL = 'ctrlKey', // Automatically tests for metaKey as well (iOS compatibility)
    SHIFT = 'shiftKey',
}

export interface KupToolbarItemClickEventPayload extends KupEventPayload {
    value?: string;
    node?: KupListNode;
}

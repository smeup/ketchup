/**
 * Modifiers to listen to in Keyboard Event in order to trigger the toolbars.
 */
export enum KupToolbarModifierKeys {
    ALT = 'altKey',
    CTRL = 'ctrlKey', // Automatically tests for metaKey as well (iOS compatibility)
    SHIFT = 'shiftKey',
}

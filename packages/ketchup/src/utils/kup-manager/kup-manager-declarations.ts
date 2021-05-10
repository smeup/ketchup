import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupDialog } from '../kup-dialog/kup-dialog';
import type { KupDynamicPosition } from '../kup-dynamic-position/kup-dynamic-position';
import type { KupLanguage } from '../kup-language/kup-language';
import type { KupObjects } from '../kup-objects/kup-objects';
import type { KupScrollOnHover } from '../kup-scroll-on-hover/kup-scroll-on-hover';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { KupToolbar } from '../kup-toolbar/kup-toolbar';
import type { ResizeObserver } from 'resize-observer';
/**
 * Interface used to define the HTML element with Ketch.UP specific properties.
 */
export interface KupDom extends HTMLHtmlElement {
    ketchup: KupManager;
    ketchupInit: KupManagerInitialization;
}
/**
 * Interface for the KupManager class
 */
export interface KupManager {
    debug: KupDebug;
    dialog: KupDialog;
    dynamicPosition: KupDynamicPosition;
    language: KupLanguage;
    magicBox: HTMLKupMagicBoxElement;
    objects: KupObjects;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KupScrollOnHover;
    theme: KupTheme;
    toolbar: KupToolbar;
    showMagicBox: () => void;
    hideMagicBox: () => void;
    toggleMagicBox: () => void;
}
/**
 * Interface for the KupManager override settings.
 */
export interface KupManagerInitialization {
    debug: { active: boolean; autoPrint: boolean; logLimit: number };
    dialog: { zIndex: number };
    language: { list: JSON; name: string };
    obj: { list: JSON };
    scrollOnHover: { delay: number; step: number };
    theme: { list: JSON; name: string };
}

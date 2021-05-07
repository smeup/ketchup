import type { DynamicPosition } from '../dynamic-position/dynamic-position';
import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupDialog } from '../kup-dialog/kup-dialog';
import type { KupToolbar } from '../kup-toolbar/kup-toolbar';
import type { KupLanguage } from '../kup-language/kup-language';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { ResizeObserver } from 'resize-observer';
import type { ScrollOnHover } from '../scroll-on-hover/scroll-on-hover';
import { KupObj } from '../kup-obj/kup-obj';
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
    dynamicPosition: DynamicPosition;
    language: KupLanguage;
    magicBox: HTMLKupMagicBoxElement;
    obj: KupObj;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: ScrollOnHover;
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

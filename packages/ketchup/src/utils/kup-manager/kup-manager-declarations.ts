import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { ResizeObserver } from 'resize-observer';
import type { DynamicPosition } from '../dynamic-position/dynamic-position';
import type { ScrollOnHover } from '../scroll-on-hover/scroll-on-hover';
import type { MoveOnDrag } from '../move-on-drag/move-on-drag';
import type { KupToolbar } from '../kup-toolbar/kup-toolbar';
import type { ResizeOnDrag } from '../resize-on-drag/resize-on-drag';
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
    dynamicPosition: DynamicPosition;
    magicBox: HTMLKupMagicBoxElement;
    moveOnDrag: MoveOnDrag;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    resizeOnDrag: ResizeOnDrag;
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
    scrollOnHover: { delay: number; step: number };
    theme: { list: JSON; name: string };
}

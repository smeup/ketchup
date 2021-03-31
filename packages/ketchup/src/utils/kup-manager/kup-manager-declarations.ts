import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { ResizeObserver } from 'resize-observer';
import type { DynamicPosition } from '../dynamic-position/dynamic-position';
import type { ScrollOnHover } from '../scroll-on-hover/scroll-on-hover';
import { MoveOnDrag } from '../move-on-drag/move-on-drag';
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
    moveOnDrag: MoveOnDrag;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: ScrollOnHover;
    theme: KupTheme;
}
/**
 * Interface for the KupManager override settings.
 */
export interface KupManagerInitialization {
    debug: { active: boolean; logLimit: number };
    scrollOnHover: { delay: number; step: number };
    theme: { list: JSON; name: string };
}

import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupTheme } from '../kup-theme/kup-theme';
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
    theme: KupTheme;
    resize: ResizeObserver;
    overrides?: KupManagerInitialization;
}
/**
 * Interface for the KupManager override settings.
 */
export interface KupManagerInitialization {
    debug: { active: boolean; logLimit: number };
    theme: { name: string; list: JSON };
}

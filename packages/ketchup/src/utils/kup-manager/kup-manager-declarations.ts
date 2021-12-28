import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type { RectResolvable } from '@interactjs/types/index';
import type { KupDates } from '../kup-dates/kup-dates';
import type { KupDatesLocales } from '../kup-dates/kup-dates-declarations';
import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupDynamicPosition } from '../kup-dynamic-position/kup-dynamic-position';
import type { KupInteract } from '../kup-interact/kup-interact';
import type { KupLanguage } from '../kup-language/kup-language';
import type { KupLanguageJSON } from '../kup-language/kup-language-declarations';
import type { KupObjects } from '../kup-objects/kup-objects';
import type { KupObjectsJSON } from '../kup-objects/kup-objects-declarations';
import type { KupScrollOnHover } from '../kup-scroll-on-hover/kup-scroll-on-hover';
import type { KupSearch } from '../kup-search/kup-search';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { KupThemeJSON } from '../kup-theme/kup-theme-declarations';
import type { KupToolbar } from '../kup-toolbar/kup-toolbar';
import type { ResizeObserver } from 'resize-observer';
/**
 * Interface used to define the HTML element with Ketchup specific properties.
 */
export interface KupDom extends HTMLHtmlElement {
    ketchup: KupManager;
    ketchupInit: KupManagerInitialization;
}
/**
 * Interface for the KupManager class
 */
export interface KupManager {
    dates: KupDates;
    debug: KupDebug;
    dynamicPosition: KupDynamicPosition;
    interact: KupInteract;
    language: KupLanguage;
    magicBox: HTMLKupMagicBoxElement;
    objects: KupObjects;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KupScrollOnHover;
    search: KupSearch;
    theme: KupTheme;
    toolbar: KupToolbar;
    utilities: KupManagerUtilities;
    showMagicBox: () => void;
    hideMagicBox: () => void;
    toggleMagicBox: () => void;
    setLibraryLocalization: (locale: KupDatesLocales) => void;
    addClickCallback: (cb: KupManagerClickCb, async?: boolean) => void;
    removeClickCallback: (cb: KupManagerClickCb) => void;
}
/**
 * Interface for the KupManager utilities.
 */
export interface KupManagerUtilities {
    clickCallbacks?: Set<KupManagerClickCb>;
    lastPointerDownString?: string;
}
/**
 * Interface to declare callbacks automatically invoked on pointer down events.
 */
export interface KupManagerClickCb {
    cb: () => unknown;
    el?: HTMLElement;
}
/**
 * Interface for the KupManager override settings.
 */
export interface KupManagerInitialization {
    dates?: KupManagerDatesSettings;
    debug?: KupManagerDebugSettings;
    interact?: KupManagerInteractSettings;
    language?: KupManagerLanguageSettings;
    objects?: KupManagerObjectsSettings;
    scrollOnHover?: KupManagerScrollOnHoverSettings;
    theme?: KupManagerThemeSettings;
}
/**
 * KupDates initialization settings.
 */
export interface KupManagerDatesSettings {
    locale?: KupDatesLocales;
}
/**
 * KupDebug initialization settings.
 */
export interface KupManagerDebugSettings {
    active?: boolean;
    autoPrint?: boolean;
    logLimit?: number;
}
/**
 * KupDialog initialization settings.
 */
export interface KupManagerInteractSettings {
    restrictContainer?: RectResolvable<
        [number, number, Interaction<keyof ActionMap>]
    >;
    zIndex?: number;
}
/**
 * KupLanguage initialization settings.
 */
export interface KupManagerLanguageSettings {
    list?: KupLanguageJSON;
    name?: string;
}
/**
 * KupObjects initialization settings.
 */
export interface KupManagerObjectsSettings {
    list?: KupObjectsJSON;
}
/**
 * KupScrollOnHover initialization settings.
 */
export interface KupManagerScrollOnHoverSettings {
    delay?: number;
    step?: number;
}
/**
 * KupTheme initialization settings.
 */
export interface KupManagerThemeSettings {
    list?: KupThemeJSON;
    name?: string;
}
/**
 * KupTheme initialization settings.
 */
export interface KupManagerStringFinderPayload {
    string: string;
}

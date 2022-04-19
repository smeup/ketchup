import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type { RectResolvable } from '@interactjs/types/index';
import type { KupData } from '../kup-data/kup-data';
import type { KupDates } from '../kup-dates/kup-dates';
import type { KupDatesLocales } from '../kup-dates/kup-dates-declarations';
import type { KupDebug } from '../kup-debug/kup-debug';
import type { KupDynamicPosition } from '../kup-dynamic-position/kup-dynamic-position';
import type { KupInteract } from '../kup-interact/kup-interact';
import type { KupLanguage } from '../kup-language/kup-language';
import type { KupLanguageJSON } from '../kup-language/kup-language-declarations';
import type { KupMath } from '../kup-math/kup-math';
import type { KupObjects } from '../kup-objects/kup-objects';
import type { KupObjectsJSON } from '../kup-objects/kup-objects-declarations';
import type { KupScrollOnHover } from '../kup-scroll-on-hover/kup-scroll-on-hover';
import type { KupSearch } from '../kup-search/kup-search';
import type { KupTheme } from '../kup-theme/kup-theme';
import type { KupThemeJSON } from '../kup-theme/kup-theme-declarations';
import type { KupToolbar } from '../kup-toolbar/kup-toolbar';
import type { KupTooltip } from '../kup-tooltip/kup-tooltip';
import type { ResizeObserver } from 'resize-observer';
import { KupMathLocales } from '../kup-math/kup-math-declarations';
import { KupTooltipCallbacks } from '../kup-tooltip/kup-tooltip-declarations';
import { Options } from 'html2canvas';
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
    data: KupData;
    dates: KupDates;
    debug: KupDebug;
    dynamicPosition: KupDynamicPosition;
    interact: KupInteract;
    language: KupLanguage;
    magicBox: HTMLKupMagicBoxElement;
    math: KupMath;
    objects: KupObjects;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KupScrollOnHover;
    search: KupSearch;
    theme: KupTheme;
    toolbar: KupToolbar;
    tooltip: KupTooltip;
    utilities: KupManagerUtilities;
    showMagicBox: () => void;
    hideMagicBox: () => void;
    toggleMagicBox: () => void;
    setLibraryLocalization: (locale: KupDatesLocales) => void;
    addClickCallback: (cb: KupManagerClickCb, async?: boolean) => void;
    removeClickCallback: (cb: KupManagerClickCb) => void;
    rasterize: (
        el: HTMLElement,
        options?: Partial<Options>
    ) => Promise<HTMLCanvasElement>;
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
    assetsPath?: string;
    autoSetLocalization?: boolean;
    dates?: KupManagerDatesSettings;
    debug?: KupManagerDebugSettings;
    interact?: KupManagerInteractSettings;
    language?: KupManagerLanguageSettings;
    math?: KupManagerMathSettings;
    objects?: KupManagerObjectsSettings;
    scrollOnHover?: KupManagerScrollOnHoverSettings;
    theme?: KupManagerThemeSettings;
    tooltip?: KupManagerTooltipSettings;
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
 * KupMath initialization settings.
 */
export interface KupManagerMathSettings {
    locale?: KupMathLocales;
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
 * KupDates initialization settings.
 */
export interface KupManagerTooltipSettings {
    fCellCallbacks?: KupTooltipCallbacks;
    delay?: number;
}
/**
 * KupTheme initialization settings.
 */
export interface KupManagerStringFinderPayload {
    string: string;
}

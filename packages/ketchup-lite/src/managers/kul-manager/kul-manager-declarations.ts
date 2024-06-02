import type { KulData } from '../kul-data/kul-data';
import type { KulDates } from '../kul-dates/kul-dates';
import type { KulDatesLocales } from '../kul-dates/kul-dates-declarations';
import type { KulDebug } from '../kul-debug/kul-debug';
import type { KulDynamicPosition } from '../kul-dynamic-position/kul-dynamic-position';
import type { KulLanguage } from '../kul-language/kul-language';
import type { KulLanguageJSON } from '../kul-language/kul-language-declarations';
import type { KulMath } from '../kul-math/kul-math';
import type { KulMathLocales } from '../kul-math/kul-math-declarations';
import type { KulScrollOnHover } from '../kul-scroll-on-hover/kul-scroll-on-hover';
import type { KulTheme } from '../kul-theme/kul-theme';
import type { KulThemeJSON } from '../kul-theme/kul-theme-declarations';
import type { Options } from 'html2canvas';

export interface KulDom extends HTMLHtmlElement {
    ketchupLite: KulManager;
    ketchupLiteInit: KulManagerInitialization;
}
export interface KulManager {
    data: KulData;
    dates: KulDates;
    debug: KulDebug;
    dynamicPosition: KulDynamicPosition;
    language: KulLanguage;
    math: KulMath;
    overrides?: KulManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KulScrollOnHover;
    theme: KulTheme;
    utilities: KulManagerUtilities;
    setLibraryLocalization: (locale: KulDatesLocales) => void;
    addClickCallback: (cb: KulManagerClickCb, async?: boolean) => void;
    getEventPath: (
        currentEl: unknown,
        rootElement: HTMLElement
    ) => HTMLElement[];
    removeClickCallback: (cb: KulManagerClickCb) => void;
    rasterize: (
        el: HTMLElement,
        options?: Partial<Options>
    ) => Promise<HTMLCanvasElement>;
}
export interface KulManagerUtilities {
    clickCallbacks?: Set<KulManagerClickCb>;
    lastPointerDownString?: string;
}
export interface KulManagerClickCb {
    cb: () => unknown;
    el?: HTMLElement;
}
export interface KulManagerInitialization {
    assetsPath?: string;
    autoSetLocalization?: boolean;
    dates?: KulManagerDatesSettings;
    debug?: KulManagerDebugSettings;
    language?: KulManagerLanguageSettings;
    math?: KulManagerMathSettings;
    scrollOnHover?: KulManagerScrollOnHoverSettings;
    theme?: KulManagerThemeSettings;
}
export interface KulManagerDatesSettings {
    locale?: KulDatesLocales;
}
export interface KulManagerDebugSettings {
    active?: boolean;
    autoPrint?: boolean;
    logLimit?: number;
}
export interface KulManagerLanguageSettings {
    list?: KulLanguageJSON;
    name?: string;
}
export interface KulManagerMathSettings {
    locale?: KulMathLocales;
}
export interface KulManagerScrollOnHoverSettings {
    delay?: number;
    step?: number;
}
export interface KulManagerStringFinderPayload {
    string: string;
}
export interface KulManagerThemeSettings {
    list?: KulThemeJSON;
    name?: string;
}

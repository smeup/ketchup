import html2canvas, { Options } from 'html2canvas';
import { KulData } from '../kul-data/kul-data';
import { KulDates } from '../kul-dates/kul-dates';
import { KulDatesLocales } from '../kul-dates/kul-dates-declarations';
import { KulDebug } from '../kul-debug/kul-debug';
import { KulDynamicPosition } from '../kul-dynamic-position/kul-dynamic-position';
import { KulDynamicPositionElement } from '../kul-dynamic-position/kul-dynamic-position-declarations';
import { KulLanguage } from '../kul-language/kul-language';
import {
    KulLanguageDefaults,
    KulLanguageJSON,
} from '../kul-language/kul-language-declarations';
import { KulMath } from '../kul-math/kul-math';
import { KulMathLocales } from '../kul-math/kul-math-declarations';
import { KulScrollOnHover } from '../kul-scroll-on-hover/kul-scroll-on-hover';
import { KulTheme } from '../kul-theme/kul-theme';
import { KulThemeJSON } from '../kul-theme/kul-theme-declarations';
import { setAssetPath } from '@stencil/core';
import type {
    KulDom,
    KulManagerClickCb,
    KulManagerInitialization,
    KulManagerStringFinderPayload,
    KulManagerUtilities,
} from './kul-manager-declarations';

const dom: KulDom = document.documentElement as KulDom;

/**
 * This class controls every other Ketchup utility suite.
 * @module KulManager
 */
export class KulManager {
    data: KulData;
    dates: KulDates;
    debug: KulDebug;
    dynamicPosition: KulDynamicPosition;
    enableExperimentalFeatures: boolean;
    language: KulLanguage;
    math: KulMath;
    overrides?: KulManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KulScrollOnHover;
    utilities: KulManagerUtilities;
    theme: KulTheme;
    /**
     * Initializes KulManager.
     */
    constructor(overrides?: KulManagerInitialization) {
        let datesLocale: KulDatesLocales = null,
            debugActive: boolean = null,
            debugAutoprint: boolean = null,
            debugLogLimit: number = null,
            languageList: KulLanguageJSON = null,
            languageName: string = null,
            scrollOnHoverDelay: number = null,
            scrollOnHoverStep: number = null,
            themeList: KulThemeJSON = null,
            themeName: string = null;

        this.enableExperimentalFeatures = false;

        if (overrides) {
            const assetsPath = overrides.assetsPath;
            const dates = overrides.dates;
            const debug = overrides.debug;
            const enableExperimentalFeatures =
                overrides.enableExperimentalFeatures;
            const language = overrides.language;
            const scrollOnHover = overrides.scrollOnHover;
            const theme = overrides.theme;
            if (assetsPath) {
                setAssetPath(assetsPath);
            }
            if (dates) {
                datesLocale = dates.locale ? dates.locale : null;
            }
            if (debug) {
                debugActive = debug.active ? debug.active : null;
                debugAutoprint = debug.autoPrint ? debug.autoPrint : null;
                debugLogLimit = debug.logLimit ? debug.logLimit : null;
            }
            if (enableExperimentalFeatures) {
                this.enableExperimentalFeatures = enableExperimentalFeatures;
            }
            if (language) {
                languageList = language.list ? language.list : null;
                languageName = language.name ? language.name : null;
            }
            if (scrollOnHover) {
                scrollOnHoverDelay = scrollOnHover.delay
                    ? scrollOnHover.delay
                    : null;
                scrollOnHoverStep = scrollOnHover.step
                    ? scrollOnHover.step
                    : null;
            }
            if (theme) {
                themeList = theme.list ? theme.list : null;
                themeName = theme.name ? theme.name : null;
            }
        }
        this.data = new KulData();
        this.dates = new KulDates(datesLocale);
        this.debug = new KulDebug(debugActive, debugAutoprint, debugLogLimit);
        this.dynamicPosition = new KulDynamicPosition();
        this.language = new KulLanguage(languageList, languageName);
        this.math = new KulMath();
        this.overrides = overrides ? overrides : null;
        /*this.resize = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.contentRect.height && entry.contentRect.width) {
                    (entry.target as ResizableKulComponent).resizeCallback();
                    this.debug.logMessage(
                        'kul-manager (' +
                            entry.target.tagName +
                            '#' +
                            entry.target.id +
                            ')',
                        'Size changed to x: ' +
                            entry.contentRect.width +
                            ', y: ' +
                            entry.contentRect.height +
                            '.'
                    );
                }
            });
        });*/
        this.scrollOnHover = new KulScrollOnHover(
            scrollOnHoverDelay,
            scrollOnHoverStep
        );
        this.utilities = {
            clickCallbacks: new Set(),
            lastPointerDownString: null,
        };
        this.theme = new KulTheme(themeList, themeName);
        document.addEventListener('pointerdown', (e) => {
            const paths = e.composedPath() as HTMLElement[];
            const lastString =
                paths[0].innerText || (paths[0] as HTMLInputElement).value;
            this.utilities.lastPointerDownString = lastString;
            if (lastString) {
                const e = new CustomEvent<KulManagerStringFinderPayload>(
                    'kul-manager-stringfinder',
                    {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            string: lastString,
                        },
                    }
                );
                document.dispatchEvent(e);
            }
        });
        document.addEventListener('click', (e) => {
            const paths = e.composedPath() as HTMLElement[];
            this.utilities.clickCallbacks.forEach((obj) => {
                if (
                    obj &&
                    obj.el &&
                    obj.el.isConnected &&
                    !paths.includes(obj.el)
                ) {
                    const elAsDynamicPos = obj.el as KulDynamicPositionElement;
                    let found = false;
                    if (
                        elAsDynamicPos.kulDynamicPosition &&
                        elAsDynamicPos.kulDynamicPosition.detach
                    ) {
                        for (let index = 0; index < paths.length; index++) {
                            const pathEl = paths[index];
                            const pathElAsDynamicPos =
                                pathEl as KulDynamicPositionElement;
                            if (
                                pathElAsDynamicPos.kulDynamicPosition &&
                                pathElAsDynamicPos.kulDynamicPosition.detach
                            ) {
                                const originalPath =
                                    pathElAsDynamicPos.kulDynamicPosition
                                        .originalPath;
                                if (originalPath.includes(obj.el)) {
                                    found = true;
                                }
                            }
                        }
                        if (!found) {
                            obj.cb();
                        }
                    } else {
                        obj.cb();
                    }
                }
            });
        });
    }
    /**
     * Sets both locale and language library-wide.
     * @param {KulDatesLocales} locale - The supported locale.
     */
    setLibraryLocalization(locale: KulDatesLocales): void {
        if (!Object.values(KulDatesLocales).includes(locale)) {
            this.debug.logMessage(
                'kul-manager',
                'Missing locale (' + locale + ')!',
                'error'
            );
            return;
        }
        if (!KulLanguageDefaults[locale]) {
            this.debug.logMessage(
                'kul-manager',
                'Missing language for locale (' + locale + ')!',
                'error'
            );
            return;
        }
        this.dates.setLocale(locale);
        this.language.set(KulLanguageDefaults[locale]);
        this.math.setLocale(KulMathLocales[locale]);
    }
    /**
     * Adds a new click callback.
     * @param {KulManagerClickCb} cb - The callback to add.
     * @param {boolean} async - When true, the callback will be added asynchrounously to prevent instant firing if it was added through a click event.
     */
    addClickCallback(cb: KulManagerClickCb, async?: boolean): void {
        if (async) {
            setTimeout(() => {
                this.utilities.clickCallbacks.add(cb);
            }, 0);
        } else {
            this.utilities.clickCallbacks.add(cb);
        }
    }

    /**
     * Retrives event path from event.target
     * @param currentEl event.target
     * @param rootElement rootElement of component
     * @returns
     */
    getEventPath(currentEl: unknown, rootElement: HTMLElement): HTMLElement[] {
        const path: HTMLElement[] = [];

        while (
            currentEl &&
            currentEl !== rootElement &&
            currentEl !== document.body
        ) {
            path.push(currentEl as HTMLElement);
            currentEl = (currentEl as HTMLElement).parentNode
                ? (currentEl as HTMLElement).parentNode
                : (currentEl as ShadowRoot).host;
        }

        return path;
    }
    /**
     * Rasterizes an HTMLElement, transforming into a canvas.
     * @param {HTMLElement} el - Element to rasterize.
     * @returns {HTMLCanvasElement} - Canvas created from the HTMLElement.
     *
     * CSS Mask is not supported:
     * @see https://github.com/niklasvh/html2canvas/issues/2814
     * Warning in console about sourcemap, claimed to be solved here but...:
     * @see https://github.com/niklasvh/html2canvas/pull/2787/files
     */
    async rasterize(
        el: HTMLElement,
        options?: Partial<Options>
    ): Promise<HTMLCanvasElement> {
        return html2canvas(el, options).then((canvas) => {
            return canvas;
        });
    }
    /**
     * Removes the given click callback.
     * @param {KulManagerClickCb} cb - The callback to remove.
     */
    removeClickCallback(cb: KulManagerClickCb): void {
        this.utilities.clickCallbacks.delete(cb);
    }
}
/**
 * Called by the Ketchup components to retrieve the instance of KulManager (or creating a new one when missing).
 * @returns {KulManager} KulManager instance.
 */
export function kulManagerInstance(): KulManager {
    if (!dom.ketchupLite) {
        const overrides: KulManagerInitialization = dom.ketchupLiteInit ?? null;
        dom.ketchupLite = new KulManager(overrides);
        dom.ketchupLite.theme.set();
        /* if (dom.ketchupLite.debug.active) {
            dom.ketchupLite.debug.toggle(dom.ketchupLite.debug.active);
        }*/
        globalThis.kulManager = dom.ketchupLite;
        if (overrides?.autoSetLocalization) {
            const locale = dom.ketchupLite.dates.locale;
            if (!overrides.language || !overrides.language.name) {
                dom.ketchupLite.language.set(KulLanguageDefaults[locale]);
            }
            if (!overrides.math || !overrides.math.locale) {
                dom.ketchupLite.math.setLocale(KulMathLocales[locale]);
            }
        }
        document.dispatchEvent(new CustomEvent('kul-manager-ready'));
    }
    return dom.ketchupLite;
}

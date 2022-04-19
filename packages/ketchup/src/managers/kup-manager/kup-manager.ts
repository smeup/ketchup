import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type { RectResolvable } from '@interactjs/types/index';
import type {
    KupDom,
    KupManagerClickCb,
    KupManagerInitialization,
    KupManagerStringFinderPayload,
    KupManagerUtilities,
} from './kup-manager-declarations';
import type { ResizableKupComponent } from '../../types/GenericTypes';
import type { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import { KupDebug } from '../kup-debug/kup-debug';
import { KupDynamicPosition } from '../kup-dynamic-position/kup-dynamic-position';
import { KupInteract } from '../kup-interact/kup-interact';
import { KupLanguage } from '../kup-language/kup-language';
import { KupObjects } from '../kup-objects/kup-objects';
import { KupScrollOnHover } from '../kup-scroll-on-hover/kup-scroll-on-hover';
import { KupTheme } from '../kup-theme/kup-theme';
import { KupToolbar } from '../kup-toolbar/kup-toolbar';
import { ResizeObserver } from 'resize-observer';
import {
    KupLanguageDefaults,
    KupLanguageJSON,
} from '../kup-language/kup-language-declarations';
import { KupObjectsJSON } from '../kup-objects/kup-objects-declarations';
import { KupThemeJSON } from '../kup-theme/kup-theme-declarations';
import { KupData } from '../kup-data/kup-data';
import { KupDates } from '../kup-dates/kup-dates';
import { KupDatesLocales } from '../kup-dates/kup-dates-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupSearch } from '../kup-search/kup-search';
import { KupDynamicPositionElement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { KupMathLocales } from '../kup-math/kup-math-declarations';
import { KupMath } from '../kup-math/kup-math';
import { KupTooltip } from '../kup-tooltip/kup-tooltip';
import { setAssetPath } from '@stencil/core';
import { KupTooltipCallbacks } from '../kup-tooltip/kup-tooltip-declarations';
import html2canvas, { Options } from 'html2canvas';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class controls every other Ketchup utility suite.
 * @module KupManager
 */
export class KupManager {
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
    utilities: KupManagerUtilities;
    theme: KupTheme;
    toolbar: KupToolbar;
    tooltip: KupTooltip;
    /**
     * Initializes KupManager.
     */
    constructor(overrides?: KupManagerInitialization) {
        let datesLocale: KupDatesLocales = null,
            debugActive: boolean = null,
            debugAutoprint: boolean = null,
            debugLogLimit: number = null,
            dialogRestrictContainer: RectResolvable<
                [number, number, Interaction<keyof ActionMap>]
            > = null,
            dialogZIndex: number = null,
            languageList: KupLanguageJSON = null,
            languageName: string = null,
            objectsList: KupObjectsJSON = null,
            scrollOnHoverDelay: number = null,
            scrollOnHoverStep: number = null,
            themeList: KupThemeJSON = null,
            themeName: string = null,
            tooltipDelay: number = null,
            tooltipFCellCallbacks: KupTooltipCallbacks = null;
        if (overrides) {
            const assetsPath = overrides.assetsPath;
            const dates = overrides.dates;
            const debug = overrides.debug;
            const interact = overrides.interact;
            const language = overrides.language;
            const objects = overrides.objects;
            const scrollOnHover = overrides.scrollOnHover;
            const theme = overrides.theme;
            const tooltip = overrides.tooltip;
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
            if (interact) {
                dialogRestrictContainer = interact.restrictContainer
                    ? dialogRestrictContainer
                    : null;
                dialogZIndex = interact.zIndex ? interact.zIndex : null;
            }
            if (language) {
                languageList = language.list ? language.list : null;
                languageName = language.name ? language.name : null;
            }
            if (objects) {
                objectsList = objects.list ? objects.list : null;
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
            if (tooltip) {
                tooltipDelay = tooltip.delay ? tooltip.delay : null;
                tooltipFCellCallbacks = tooltip.fCellCallbacks
                    ? tooltip.fCellCallbacks
                    : null;
            }
        }
        this.data = new KupData();
        this.dates = new KupDates(datesLocale);
        this.debug = new KupDebug(debugActive, debugAutoprint, debugLogLimit);
        this.dynamicPosition = new KupDynamicPosition();
        this.interact = new KupInteract(dialogZIndex, dialogRestrictContainer);
        this.language = new KupLanguage(languageList, languageName);
        this.magicBox = null;
        this.math = new KupMath();
        this.overrides = overrides ? overrides : null;
        this.objects = new KupObjects(objectsList);
        this.resize = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.contentRect.height && entry.contentRect.width) {
                    (entry.target as ResizableKupComponent).resizeCallback();
                    this.debug.logMessage(
                        'kup-manager (' +
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
        });
        this.scrollOnHover = new KupScrollOnHover(
            scrollOnHoverDelay,
            scrollOnHoverStep
        );
        this.search = new KupSearch();
        this.utilities = {
            clickCallbacks: new Set(),
            lastPointerDownString: null,
        };
        this.theme = new KupTheme(themeList, themeName);
        this.toolbar = new KupToolbar();
        this.tooltip = new KupTooltip(tooltipDelay, tooltipFCellCallbacks);
        document.addEventListener('pointerdown', (e) => {
            const paths = e.composedPath() as HTMLElement[];
            const lastString =
                paths[0].innerText || (paths[0] as HTMLInputElement).value;
            this.utilities.lastPointerDownString = lastString;
            if (lastString) {
                const e = new CustomEvent<KupManagerStringFinderPayload>(
                    'kup-manager-stringfinder',
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
                    const elAsDynamicPos = obj.el as KupDynamicPositionElement;
                    let found = false;
                    if (
                        elAsDynamicPos.kupDynamicPosition &&
                        elAsDynamicPos.kupDynamicPosition.detach
                    ) {
                        for (let index = 0; index < paths.length; index++) {
                            const pathEl = paths[index];
                            const pathElAsDynamicPos =
                                pathEl as KupDynamicPositionElement;
                            if (
                                pathElAsDynamicPos.kupDynamicPosition &&
                                pathElAsDynamicPos.kupDynamicPosition.detach
                            ) {
                                const originalPath =
                                    pathElAsDynamicPos.kupDynamicPosition
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
     * Creates kup-magic-box component.
     */
    showMagicBox(): void {
        if (this.magicBox) {
            return;
        }
        this.magicBox = document.createElement('kup-magic-box');
        this.magicBox.id = 'kup-magic-box';
        this.magicBox.style.position = 'fixed';
        this.magicBox.style.left = 'calc(50% - 350px)';
        this.magicBox.style.top = 'calc(50% - 150px)';
        document.body.append(this.magicBox);
    }
    /**
     * Removes kup-magic-box component.
     */
    hideMagicBox(): void {
        if (!this.magicBox) {
            return;
        }
        this.magicBox.remove();
        this.magicBox = null;
    }
    /**
     * Creates or removes kup-magic-box component depending on its existence.
     */
    toggleMagicBox(): void {
        if (!this.magicBox) {
            this.showMagicBox();
        } else {
            this.hideMagicBox();
        }
    }
    /**
     * Sets both locale and language library-wide.
     * @param {KupDatesLocales} locale - The supported locale.
     */
    setLibraryLocalization(locale: KupDatesLocales): void {
        if (!Object.values(KupDatesLocales).includes(locale)) {
            this.debug.logMessage(
                'kup-manager',
                'Missing locale (' + locale + ')!',
                KupDebugCategory.ERROR
            );
            return;
        }
        if (!KupLanguageDefaults[locale]) {
            this.debug.logMessage(
                'kup-manager',
                'Missing language for locale (' + locale + ')!',
                KupDebugCategory.ERROR
            );
            return;
        }
        this.dates.setLocale(locale);
        this.language.set(KupLanguageDefaults[locale]);
        this.math.setLocale(KupMathLocales[locale]);
    }
    /**
     * Adds a new click callback.
     * @param {KupManagerClickCb} cb - The callback to add.
     * @param {boolean} async - When true, the callback will be added asynchrounously to prevent instant firing if it was added through a click event.
     */
    addClickCallback(cb: KupManagerClickCb, async?: boolean): void {
        if (async) {
            setTimeout(() => {
                this.utilities.clickCallbacks.add(cb);
            }, 0);
        } else {
            this.utilities.clickCallbacks.add(cb);
        }
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
     * @param {KupManagerClickCb} cb - The callback to remove.
     */
    removeClickCallback(cb: KupManagerClickCb): void {
        this.utilities.clickCallbacks.delete(cb);
    }
}
/**
 * Called by the Ketchup components to retrieve the instance of KupManager (or creating a new one when missing).
 * @returns {KupManager} KupManager instance.
 */
export function kupManagerInstance(): KupManager {
    if (!dom.ketchup) {
        const overrides: KupManagerInitialization = dom.ketchupInit
            ? dom.ketchupInit
            : null;
        dom.ketchup = new KupManager(overrides);
        dom.ketchup.theme.set();
        if (dom.ketchup.debug.active) {
            dom.ketchup.debug.toggle(dom.ketchup.debug.active);
        }
        globalThis.kupManager = dom.ketchup;
        if (overrides && overrides.autoSetLocalization) {
            const locale = dom.ketchup.dates.locale;
            if (!overrides.language || !overrides.language.name) {
                dom.ketchup.language.set(KupLanguageDefaults[locale]);
            }
            if (!overrides.math || !overrides.math.locale) {
                dom.ketchup.math.setLocale(KupMathLocales[locale]);
            }
        }
        document.dispatchEvent(new CustomEvent('kup-manager-ready'));
    }
    return dom.ketchup;
}

import type {
    KupDom,
    KupManagerInitialization,
    KupManagerUtilities,
} from './kup-manager-declarations';
import type { ResizableKupComponent } from '../../types/GenericTypes';
import type { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import { KupDebug } from '../kup-debug/kup-debug';
import { KupDialog } from '../kup-dialog/kup-dialog';
import { KupDynamicPosition } from '../kup-dynamic-position/kup-dynamic-position';
import { KupLanguage } from '../kup-language/kup-language';
import { KupObjects } from '../kup-objects/kup-objects';
import { KupScrollOnHover } from '../kup-scroll-on-hover/kup-scroll-on-hover';
import { KupTheme } from '../kup-theme/kup-theme';
import { KupToolbar } from '../kup-toolbar/kup-toolbar';
import { ResizeObserver } from 'resize-observer';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class controls every other Ketch.UP utility suite.
 * @module KupManager
 */
export class KupManager {
    debug: KupDebug;
    dialog: KupDialog;
    dynamicPosition: KupDynamicPosition;
    language: KupLanguage;
    magicBox: HTMLKupMagicBoxElement;
    objects: KupObjects;
    overrides?: KupManagerInitialization;
    resize: ResizeObserver;
    scrollOnHover: KupScrollOnHover;
    utilities: KupManagerUtilities;
    theme: KupTheme;
    toolbar: KupToolbar;
    /**
     * Initializes KupManager.
     */
    constructor() {
        this.debug = new KupDebug();
        this.dialog = new KupDialog();
        this.dynamicPosition = new KupDynamicPosition();
        this.language = new KupLanguage();
        this.magicBox = null;
        this.objects = new KupObjects();
        this.overrides = dom.ketchupInit ? dom.ketchupInit : null;
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
        this.scrollOnHover = new KupScrollOnHover();
        this.utilities = { lastMouseDownPath: null };
        this.theme = new KupTheme();
        this.toolbar = new KupToolbar();
        document.addEventListener('mousedown', (e) => {
            this.utilities.lastMouseDownPath = e.composedPath();
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
}
/**
 * Called by the Ketch.UP components to retrieve the instance of KupManager (or creating a new one when missing).
 * @returns {KupManager} KupManager instance.
 */
export function kupManagerInstance(): KupManager {
    if (!dom.ketchup) {
        dom.ketchup = new KupManager();
        dom.ketchup.theme.set();
        if (
            dom.ketchupInit &&
            dom.ketchupInit.debug &&
            dom.ketchupInit.debug.active
        ) {
            dom.ketchup.debug.toggle(dom.ketchupInit.debug.active);
        }
        document.dispatchEvent(new CustomEvent('kupManagerReady'));
    }
    return dom.ketchup;
}

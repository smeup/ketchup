import type {
    KupDom,
    KupManagerInitialization,
} from './kup-manager-declarations';
import { KupDebug } from '../kup-debug/kup-debug';
import { KupTheme } from '../kup-theme/kup-theme';
import { ResizeObserver } from 'resize-observer';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class controls every other Ketch.UP utility suite.
 * @module KupManager
 */
export class KupManager {
    debug: KupDebug = new KupDebug();
    theme: KupTheme = new KupTheme();
    resize: ResizeObserver = new ResizeObserver(() => {});
    overrides?: KupManagerInitialization = dom.ketchupInit
        ? dom.ketchupInit
        : null;
    /**
     * Initializes KupManager.
     *
     * */
    initialize(): void {
        const themesOverrides: boolean = !!(
            this.overrides && this.overrides.theme
        );
        if (themesOverrides) {
            this.debug.logMessage(
                'kup-manager',
                'Override settings detected, applying.'
            );
        }
        this.theme.initialize(
            themesOverrides && this.overrides.theme.current
                ? this.overrides.theme.current
                : null,
            themesOverrides && this.overrides.theme.list
                ? this.overrides.theme.list
                : null
        );
        this.debug.logMessage('kup-manager', 'Initialization complete.');
    }
}
/**
 * Called by the Ketch.UP components to retrieve the instance of KupManager (or creating a new one when missing).
 * *
 * @returns {KupManager} KupManager instance.
 */
export function kupManagerInstance(): KupManager {
    if (!dom.ketchup) {
        dom.ketchup = new KupManager();
        dom.ketchup.initialize();
    }
    return dom.ketchup;
}

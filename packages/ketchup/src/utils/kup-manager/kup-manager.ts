import type {
    KupDom,
    KupManagerInitialization,
} from './kup-manager-declarations';
import type { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import type { ResizableKupComponent } from '../../types/GenericTypes';
import { KupDebug } from '../kup-debug/kup-debug';
import { KupTheme } from '../kup-theme/kup-theme';
import { ResizeObserver } from 'resize-observer';
import { DynamicPosition } from '../dynamic-position/dynamic-position';
import { ScrollOnHover } from '../scroll-on-hover/scroll-on-hover';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class controls every other Ketch.UP utility suite.
 * @module KupManager
 */
export class KupManager {
    debug: KupDebug = new KupDebug();
    dynamicPosition: DynamicPosition = new DynamicPosition();
    scrollOnHover: ScrollOnHover = new ScrollOnHover();
    resize: ResizeObserver = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => {
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
        }
    );
    overrides?: KupManagerInitialization = dom.ketchupInit
        ? dom.ketchupInit
        : null;
    theme: KupTheme = new KupTheme();
}
/**
 * Called by the Ketch.UP components to retrieve the instance of KupManager (or creating a new one when missing).
 * *
 * @returns {KupManager} KupManager instance.
 */
export function kupManagerInstance(): KupManager {
    if (!dom.ketchup) {
        dom.ketchup = new KupManager();
        dom.ketchup.theme.set();
    }
    return dom.ketchup;
}

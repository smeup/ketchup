import type { KupDom } from '../kup-manager/kup-manager-declarations';
import * as objJson from './obj.json';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles the translation to different languages.
 * @module KupObj
 */
export class KupObj {
    list: JSON =
        dom.ketchupInit && dom.ketchupInit.obj && dom.ketchupInit.obj.list
            ? dom.ketchupInit.obj.list
            : objJson['default'];
}

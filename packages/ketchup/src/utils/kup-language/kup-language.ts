import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import * as languagesJson from './languages.json';
import { KupLanguageCodes } from './kup-language-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles the translation to different languages.
 * @module KupLanguage
 */
export class KupLanguage {
    list: JSON =
        dom.ketchupInit &&
        dom.ketchupInit.language &&
        dom.ketchupInit.language.list
            ? dom.ketchupInit.language.list
            : languagesJson['default'];
    name: string =
        dom.ketchupInit &&
        dom.ketchupInit.language &&
        dom.ketchupInit.language.name
            ? dom.ketchupInit.language.name
            : 'english';
    /**
     * Translates the string to the given language.
     * When translation fails, the key will be displayed in place of the string - this way it will be easier to correct missing string <-> key bounds.
     * @param {KupLanguageCodes} key - Key of a string to be translated.
     * @param {string} language - Language to translate the string to. When not provided, KupLanguage current language will be used.
     * @returns {string} Translated string or initial string (when translation failed).
     */
    translate(key: KupLanguageCodes, language?: string): string {
        const name: string = language ? language : this.name;
        try {
            const translatedString: string = this.list[name][key];
            return translatedString;
        } catch (error) {
            return key;
        }
    }
}

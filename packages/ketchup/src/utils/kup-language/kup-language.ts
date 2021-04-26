import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import * as languagesJson from './languages.json';

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
     * Translates the given string to the given language.
     * @param {string} string - String to be translated.
     * @param {string} language - Language to translate the string to. When not provided, KupLanguage current language will be used.
     */
    translate(string: string, language?: string): string {
        const translatedString: string = this.list[
            language ? language : this.name
        ][string];
        if (!translatedString) {
            dom.ketchup.debug.logMessage(
                'kup-language',
                "Couldn't convert string (" +
                    string +
                    ') to language (' +
                    language +
                    ')!',
                KupDebugCategory.WARNING
            );
            return string;
        } else {
            return translatedString;
        }
    }
}

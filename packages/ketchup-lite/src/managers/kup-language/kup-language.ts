import type { KupDom } from '../kup-manager/kup-manager-declarations';
import * as languagesJson from './languages.json';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import {
    KupLanguageDecode,
    KupLanguageDefaults,
    KupLanguageElement,
    KupLanguageJSON,
    KupLanguageKey,
} from './kup-language-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles the translation to different languages.
 * @module KupLanguage
 */
export class KupLanguage {
    list: KupLanguageJSON;
    managedComponents: Set<KupComponent>;
    name: string;
    /**
     * Initializes KupLanguage.
     * @param {KupLanguageJSON} list - Overrides the default languages.json.
     * @param {string} name - Starting language. Can be a combination of language and variant (separated by "_").
     */
    constructor(list?: KupLanguageJSON, name?: string) {
        this.list = list ? list : languagesJson['default'];
        this.managedComponents = new Set();
        this.name = name ? name : KupLanguageDefaults.en;
    }
    /**
     * Translates the string to the given language.
     * When translation fails, the key will be displayed in place of the string - this way it will be easier to correct missing string <-> key bounds.
     * @param {KupLanguageKey} key - Key of a string to be translated.
     * @param {string} language - Language to translate the string to. When not provided, KupLanguage current language will be used.
     * @returns {string} Translated string or initial string (when translation failed).
     */
    translate(key: KupLanguageKey, language?: string): string {
        const decodedLanguage: KupLanguageDecode = this.decodeLanguage(
            language ? language : this.name
        );
        const name: string = decodedLanguage.language;
        const variantName: string = decodedLanguage.variant;
        try {
            let translatedString: string = null;
            if (variantName) {
                const variants: GenericObject = this.list[name].variants;
                if (
                    variants &&
                    variants[variantName] &&
                    variants[variantName].keys[key]
                ) {
                    translatedString = variants[variantName].keys[key];
                } else {
                    translatedString = this.list[name].keys[key];
                }
            } else {
                translatedString = this.list[name].keys[key];
            }
            if (translatedString) {
                return translatedString;
            } else {
                return invalidKey(key);
            }
        } catch (error) {
            return invalidKey(key);
        }
        function invalidKey(key: KupLanguageKey) {
            dom.ketchup.debug.logMessage(
                'kup-language',
                'Invalid translation for key (' + key + ')!',
                KupDebugCategory.WARNING
            );
            return key;
        }
    }
    /**
     * Changes the current Ketchup language to the one provided. If the language argument contains a "_", a combo of language and variant will be assumed.
     * @param {string} language - The new language. If not present in this.list, this function will keep the previous language.
     */
    set(language: string): void {
        if (language && typeof language === 'string') {
            language = language.toLowerCase();
        } else {
            dom.ketchup.debug.logMessage(
                'kup-language',
                "Couldn't set language, invalid string received (" +
                    language +
                    ')!',
                KupDebugCategory.WARNING
            );
            return;
        }
        const decodedLanguage: KupLanguageDecode =
            this.decodeLanguage(language);
        const dLanguage: string = decodedLanguage.language;
        const dVariant: string = decodedLanguage.variant;
        if (this.list[dLanguage]) {
            if (dVariant && !this.list[dLanguage].variants[dVariant]) {
                dom.ketchup.debug.logMessage(
                    'kup-language',
                    'Variant not found (' + dVariant + ')!',
                    KupDebugCategory.WARNING
                );
                return;
            }
        } else {
            dom.ketchup.debug.logMessage(
                'kup-language',
                'Language not found (' + dLanguage + ')!',
                KupDebugCategory.WARNING
            );
            return;
        }
        this.name = language;
        this.managedComponents.forEach(function (comp) {
            if (comp.isConnected) {
                comp.refresh();
            }
        });
        document.dispatchEvent(new CustomEvent('kup-language-change'));
    }
    /**
     * Checks whether the language is a combination of main language and variant (separated by "_"), returning them splitted in an object.
     * @param {string} language - Language to check.
     * @returns {KupLanguageDecode} Object containing language and variant.
     */
    decodeLanguage(language: string): KupLanguageDecode {
        const result: KupLanguageDecode = {
            language: null,
            variant: null,
        };
        const separator: number = language.indexOf('_');
        if (separator > -1) {
            result.variant = language.substring(separator + 1);
            result.language = language.substring(0, separator);
        } else {
            result.language = language;
        }
        return result;
    }
    /**
     * Gets the name of available languages and variants.
     * @returns {Array<string>} Array of languages' names.
     */
    getLanguages(): Array<string> {
        const languages: Array<string> = [];
        for (var key in this.list) {
            if (this.list.hasOwnProperty(key)) {
                const language: KupLanguageElement = this.list[key];
                languages.push(key);
                for (const variantKey in language.variants) {
                    languages.push(key + '_' + variantKey);
                }
            }
        }
        return languages;
    }
    /**
     * Registers a KupComponent in KupLanguage, in order to be automatically refreshed whenever the language changes.
     * @param {any} component - The component calling this function.
     */
    register(component: any): void {
        this.managedComponents.add(
            component.rootElement ? component.rootElement : component
        );
    }
    /**
     * Unregisters a KupComponent, so it won't be refreshed when the language changes.
     *
     * @param {any} component - The component calling this function.
     */
    unregister(component: any): void {
        if (this.managedComponents) {
            this.managedComponents.delete(
                component.rootElement ? component.rootElement : component
            );
        }
    }
}

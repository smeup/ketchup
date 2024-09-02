import type { KulDom } from '../kul-manager/kul-manager-declarations';
import { KulComponent } from '../../types/GenericTypes';
import { KulDebugCategory } from '../kul-debug/kul-debug-declarations';
import {
    KulLanguageDecode,
    KulLanguageDefaults,
    KulLanguageElement,
    KulLanguageJSON,
    KulLanguageKey,
    KulLanguageKeys,
} from './kul-language-declarations';
import { languagesJson } from './kul-language-values';

const dom: KulDom = document.documentElement as KulDom;

/**
 * Handles the translation to different languages.
 * @module KulLanguage
 */
export class KulLanguage {
    list: KulLanguageJSON;
    managedComponents: Set<KulComponent>;
    name: string;
    /**
     * Initializes KulLanguage.
     * @param {KulLanguageJSON} list - Overrides the default languages.json.
     * @param {string} name - Starting language. Can be a combination of language and variant (separated by "_").
     */
    constructor(list?: KulLanguageJSON, name?: string) {
        this.list = list ? list : languagesJson;
        this.managedComponents = new Set();
        this.name = name ? name : KulLanguageDefaults.en;
    }
    /**
     * Translates the string to the given language.
     * When translation fails, the key will be displayed in place of the string - this way it will be easier to correct missing string <-> key bounds.
     * @param {KulLanguageKey} key - Key of a string to be translated.
     * @param {string} language - Language to translate the string to. When not provided, KulLanguage current language will be used.
     * @returns {string} Translated string or initial string (when translation failed).
     */
    translate(key: KulLanguageKey, language?: string): string {
        const decodedLanguage: KulLanguageDecode = this.decodeLanguage(
            language ? language : this.name
        );
        const name: string = decodedLanguage.language;
        const variantName: string = decodedLanguage.variant;
        try {
            let translatedString: string = null;
            if (variantName) {
                const variants: { [key: string]: KulLanguageKeys } =
                    this.list[name].variants;
                if (
                    variants &&
                    variants[variantName] &&
                    variants[variantName].keys[key]
                ) {
                    translatedString = variants[variantName].keys[key];
                } else {
                    translatedString = this.list[name].keys[key] as string;
                }
            } else {
                translatedString = this.list[name].keys[key] as string;
            }
            if (translatedString) {
                return translatedString;
            } else {
                return invalidKey(key);
            }
        } catch (error) {
            return invalidKey(key);
        }
        function invalidKey(key: KulLanguageKey) {
            dom.ketchupLite.debug.logMessage(
                'kul-language',
                'Invalid translation for key (' + key + ')!',
                'warning'
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
            dom.ketchupLite.debug.logMessage(
                'kul-language',
                "Couldn't set language, invalid string received (" +
                    language +
                    ')!',
                'warning'
            );
            return;
        }
        const decodedLanguage: KulLanguageDecode =
            this.decodeLanguage(language);
        const dLanguage: string = decodedLanguage.language;
        const dVariant: string = decodedLanguage.variant;
        if (this.list[dLanguage]) {
            if (dVariant && !this.list[dLanguage].variants[dVariant]) {
                dom.ketchupLite.debug.logMessage(
                    'kul-language',
                    'Variant not found (' + dVariant + ')!',
                    'warning'
                );
                return;
            }
        } else {
            dom.ketchupLite.debug.logMessage(
                'kul-language',
                'Language not found (' + dLanguage + ')!',
                'warning'
            );
            return;
        }
        this.name = language;
        this.managedComponents.forEach(function (comp) {
            if (comp.isConnected) {
                comp.refresh();
            }
        });
        document.dispatchEvent(new CustomEvent('kul-language-change'));
    }
    /**
     * Checks whether the language is a combination of main language and variant (separated by "_"), returning them splitted in an object.
     * @param {string} language - Language to check.
     * @returns {KulLanguageDecode} Object containing language and variant.
     */
    decodeLanguage(language: string): KulLanguageDecode {
        const result: KulLanguageDecode = {
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
     * Gets the BCP47 language code of the specified language.
     * @param {string} language - Language to check.
     * @returns {string} BCP47 code
     */
    getBCP47(language: string = this.name?.split('_')[0]): string {
        const bcp47Map: Record<KulLanguageDefaults, string> = {
            chinese: 'zh-CN',
            english: 'en-US',
            spanish: 'es-ES',
            italian: 'it-IT',
            french: 'fr-FR',
            polish: 'pl-PL',
            russian: 'ru-RU',
        };
        return bcp47Map[language];
    }
    /**
     * Gets the name of available languages and variants.
     * @returns {Array<string>} Array of languages' names.
     */
    getLanguages(): Array<string> {
        const languages: Array<string> = [];
        for (var key in this.list) {
            if (this.list.hasOwnProperty(key)) {
                const language: KulLanguageElement = this.list[key];
                languages.push(key);
                for (const variantKey in language.variants) {
                    languages.push(key + '_' + variantKey);
                }
            }
        }
        return languages;
    }
    /**
     * Registers a KulComponent in KulLanguage, in order to be automatically refreshed whenever the language changes.
     * @param {any} component - The component calling this function.
     */
    register(component: any): void {
        this.managedComponents.add(
            component.rootElement ? component.rootElement : component
        );
    }
    /**
     * Unregisters a KulComponent, so it won't be refreshed when the language changes.
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

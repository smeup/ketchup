import { KupLanguageKey } from '../../../../src/managers/kup-language/kup-language-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import customLanguage from '../../../resources/mock/kup-language-custom-language.json';

const language = 'elvish';
const translationKey = 'pagePage' as KupLanguageKey;
const translationResult = 'Palt';
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({
    language: { list: customLanguage, name: language },
});

describe('Test KupLanguage initialization', () => {
    it('KupLanguage custom json is initialized', () => {
        expect(dom.ketchup.language.list).toBe(customLanguage);
    });

    it('KupLanguage name is initialized', () => {
        expect(dom.ketchup.language.name).toBe(language);
    });

    it('KupLanguage translates using custom json and initialized language', () => {
        expect(dom.ketchup.language.translate(translationKey)).toBe(
            translationResult
        );
    });
});

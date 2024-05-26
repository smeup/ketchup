import {
    KulCodeProps,
    KulCodePropsInterface,
} from '../../../src/components/kul-code/kul-code-declarations';
import { CODE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/code/kul-showcase-code-declarations';

const code = 'code';
const codeCapitalized = code.charAt(0).toUpperCase() + code.slice(1);
const codeTag = 'kul-' + code;

describe(codeTag, () => {
    beforeEach(() => {
        cy.navigate(code);
    });

    it(`common: should check that all <${codeTag}> exist`, () => {
        cy.checkComponentExamples(codeTag, new Set(CODE_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${codeTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(CODE_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(codeTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${codeCapitalized}Props enum`, () => {
        cy.checkProps(codeTag, KulCodeProps);
    });

    it(`common: should call getProps and check keys against Kul${codeCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(codeTag, {
            kulLanguage: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulCodePropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(codeTag);
    });
});

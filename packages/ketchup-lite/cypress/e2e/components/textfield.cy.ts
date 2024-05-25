import {
    KulTextfieldProps,
    KulTextfieldPropsInterface,
} from '../../../src/components/kul-textfield/kul-textfield-declarations';
import { TEXTFIELD_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/textfield/kul-showcase-textfield-declarations';

const textfield = 'textfield';
const textfieldCapitalized =
    textfield.charAt(0).toUpperCase() + textfield.slice(1);
const textfieldTag = 'kul-' + textfield;

describe(textfieldTag, () => {
    beforeEach(() => {
        cy.navigate(textfield);
    });

    it(`common: should select all <${textfieldTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(new Set(TEXTFIELD_CATEGORIES_KEYS));
    });

    it(`common: should check that all categories have at least 1 <${textfieldTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(textfieldTag);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(textfieldTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${textfieldCapitalized}Props enum`, () => {
        cy.checkProps(textfieldTag, KulTextfieldProps);
    });

    it(`common: should call getProps and check keys against Kul${textfieldCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(textfieldTag, {
            kulDisabled: null,
            kulFullWidth: null,
            kulHelper: null,
            kulHtmlAttributes: null,
            kulIcon: null,
            kulLabel: null,
            kulStyle: null,
            kulStyling: null,
            kulTrailingIcon: null,
            kulValue: null,
        } as Required<KulTextfieldPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(textfieldTag);
    });
});

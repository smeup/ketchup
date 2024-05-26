import {
    KulSpinnerProps,
    KulSpinnerPropsInterface,
} from '../../../src/components/kul-spinner/kul-spinner-declarations';
import { SPINNER_EXAMPLES_CATEGORIES } from '../../../src/components/kul-showcase/components/spinner/kul-showcase-spinner-declarations';

const spinner = 'spinner';
const spinnerCapitalized = spinner.charAt(0).toUpperCase() + spinner.slice(1);
const spinnerTag = 'kul-' + spinner;

describe(spinnerTag, () => {
    beforeEach(() => {
        cy.navigate(spinner);
    });

    it(`common: should select all <${spinnerTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(
            new Set(SPINNER_EXAMPLES_CATEGORIES)
        );
    });

    it(`common: should check that all categories have at least 1 <${spinnerTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(spinnerTag);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(spinnerTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${spinnerCapitalized}Props enum`, () => {
        cy.checkProps(spinnerTag, KulSpinnerProps);
    });

    it(`common: should call getProps and check keys against Kul${spinnerCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(spinnerTag, {
            kulActive: null,
            kulBarVariant: null,
            kulDimensions: null,
            kulFader: null,
            kulFaderTimeout: null,
            kulFullScreen: null,
            kulLayout: null,
            kulStyle: null,
        } as Required<KulSpinnerPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(spinnerTag);
    });
});

import {
    KulAccordionProps,
    KulAccordionPropsInterface,
} from '../../../src/components/kul-accordion/kul-accordion-declarations';
import { ACCORDION_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/accordion/kul-showcase-accordion-declarations';

const accordion = 'accordion';
const accordionCapitalized =
    accordion.charAt(0).toUpperCase() + accordion.slice(1);
const accordionTag = 'kul-' + accordion;

describe(accordionTag, () => {
    beforeEach(() => {
        cy.navigate(accordion);
    });

    it(`common: should check that all <${accordionTag}> exist`, () => {
        cy.checkComponentExamples(
            accordionTag,
            new Set(ACCORDION_EXAMPLES_KEYS)
        );
    });

    it(`common: should check that the number of <${accordionTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(ACCORDION_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(accordionTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${accordionCapitalized}Props enum`, () => {
        cy.checkProps(accordionTag, KulAccordionProps);
    });

    it(`common: should call getProps and check keys against Kul${accordionCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(accordionTag, {
            kulData: null,
            kulRipple: null,
            kulStyle: null,
        } as Required<KulAccordionPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(accordionTag);
    });
});

import {
    KulLazyProps,
    KulLazyPropsInterface,
} from '../../../src/components/kul-lazy/kul-lazy-declarations';
import { LAZY_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/lazy/kul-showcase-lazy-declarations';

const lazy = 'lazy';
const lazyCapitalized = lazy.charAt(0).toUpperCase() + lazy.slice(1);
const lazyTag = 'kul-' + lazy;

describe(lazyTag, () => {
    beforeEach(() => {
        cy.navigate(lazy);
    });

    it(`common: should check that all <${lazyTag}> exist`, () => {
        cy.checkComponentExamples(lazyTag, new Set(LAZY_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${lazyTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(LAZY_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(lazyTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${lazyCapitalized}Props enum`, () => {
        cy.checkProps(lazyTag, KulLazyProps);
    });

    it(`common: should call getProps and check keys against Kul${lazyCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(lazyTag, {
            kulComponentName: null,
            kulComponentProps: null,
            kulRenderMode: null,
            kulShowPlaceholder: null,
            kulStyle: null,
        } as Required<KulLazyPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(lazyTag);
    });
});

import {
    KulLazyEvent,
    KulLazyProps,
    KulLazyPropsInterface,
} from '../../../src/components/kul-lazy/kul-lazy-declarations';
import { LAZY_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/lazy/kul-showcase-lazy-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const lazy = 'lazy';
const lazyCapitalized = lazy.charAt(0).toUpperCase() + lazy.slice(1);
const lazyTag = 'kul-' + lazy;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(lazy);
    });

    it(`Should check that all <${lazyTag}> exist.`, () => {
        cy.checkComponentExamples(lazyTag, new Set(LAZY_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${lazyTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(LAZY_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`kul-event`, () => {
        cy.navigate(lazy);
        const eventType: KulLazyEvent = 'kul-event';
        cy.checkEvent(lazy, eventType);
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`load`, () => {
        const eventType: KulLazyEvent = 'load';
        cy.checkReadyEvent(lazy, eventType);
    });

    it(`ready`, () => {
        cy.checkReadyEvent(lazy);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(lazy);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(lazyTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(lazyTag);
    });

    it(`getProps: check keys against Kul${lazyCapitalized}Props enum.`, () => {
        cy.checkProps(lazyTag, KulLazyProps);
    });

    it(`getProps: check keys against Kul${lazyCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(lazyTag, {
            kulComponentName: null,
            kulComponentProps: null,
            kulRenderMode: null,
            kulShowPlaceholder: null,
            kulStyle: null,
        } as Required<KulLazyPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(lazy);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

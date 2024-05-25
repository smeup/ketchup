import {
    KulListProps,
    KulListPropsInterface,
} from '../../../src/components/kul-list/kul-list-declarations';
import { LAZY_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/lazy/kul-showcase-lazy-declarations';

const list = 'list';
const listCapitalized = list.charAt(0).toUpperCase() + list.slice(1);
const listTag = 'kul-' + list;

describe(listTag, () => {
    beforeEach(() => {
        cy.navigate(list);
    });

    it(`common: should check that all <${listTag}> exist`, () => {
        cy.checkComponentExamples(listTag, new Set(LAZY_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${listTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(LAZY_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(listTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${listCapitalized}Props enum`, () => {
        cy.checkProps(listTag, KulListProps);
    });

    it(`common: should call getProps and check keys against Kul${listCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(listTag, {
            kulData: null,
            kulNavigation: null,
            kulRipple: null,
            kulSelectable: null,
            kulStyle: null,
        } as Required<KulListPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(listTag);
    });
});

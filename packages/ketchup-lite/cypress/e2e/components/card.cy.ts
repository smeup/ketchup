import {
    KulCardProps,
    KulCardPropsInterface,
} from '../../../src/components/kul-card/kul-card-declarations';
import { CARD_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/card/kul-showcase-card-declarations';

const card = 'card';
const cardCapitalized = card.charAt(0).toUpperCase() + card.slice(1);
const cardTag = 'kul-' + card;

describe(cardTag, () => {
    beforeEach(() => {
        cy.navigate(card);
    });

    it(`common: should select all <${cardTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(new Set(CARD_CATEGORIES_KEYS));
    });

    it(`common: should check that all categories have at least 1 <${cardTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(cardTag);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(cardTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${cardCapitalized}Props enum`, () => {
        cy.checkProps(cardTag, KulCardProps);
    });

    it(`common: should call getProps and check keys against Kul${cardCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(cardTag, {
            kulData: null,
            kulLayoutNumber: null,
            kulSizeX: null,
            kulSizeY: null,
            kulStyle: null,
        } as Required<KulCardPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(cardTag);
    });
});

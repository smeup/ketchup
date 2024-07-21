import {
    KulCardEvent,
    KulCardProps,
    KulCardPropsInterface,
} from '../../../src/components/kul-card/kul-card-declarations';
import { CARD_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/card/kul-showcase-card-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const card = 'card';
const cardCapitalized = card.charAt(0).toUpperCase() + card.slice(1);
const cardTag = 'kul-' + card;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(card);
    });

    it(`Should select all <${cardTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(new Set(CARD_CATEGORIES_KEYS));
    });

    it(`Should check that all categories have at least 1 <${cardTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(cardTag);
    });
});

describe('Events', () => {
    it(`click`, () => {
        cy.navigate(card);
        const eventType: KulCardEvent = 'click';
        cy.checkEvent(card, eventType);
        cy.get('@eventElement').click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`kul-event`, () => {
        cy.navigate(card);
        const eventType: KulCardEvent = 'kul-event';
        cy.checkEvent(card, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.SHAPE)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`pointerdown`, () => {
        cy.navigate(card);
        const eventType: KulCardEvent = 'pointerdown';
        cy.checkEvent(card, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.RIPPLE)
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(card);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(card);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(cardTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(cardTag);
    });

    it(`getProps: check keys against Kul${cardCapitalized}Props enum.`, () => {
        cy.checkProps(cardTag, KulCardProps);
    });

    it(`getProps: check keys against Kul${cardCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(cardTag, {
            kulData: null,
            kulLayoutNumber: null,
            kulSizeX: null,
            kulSizeY: null,
            kulStyle: null,
        } as Required<KulCardPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(card);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

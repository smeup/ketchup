import {
    KulTabbarEvent,
    KulTabbarProps,
    KulTabbarPropsInterface,
} from '../../../src/components/kul-tabbar/kul-tabbar-declarations';
import { TABBAR_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/tabbar/kul-showcase-tabbar-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const tabbar = 'tabbar';
const tabbarCapitalized = tabbar.charAt(0).toUpperCase() + tabbar.slice(1);
const tabbarTag = 'kul-' + tabbar;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(tabbar);
    });

    it(`Should check that all <${tabbarTag}> exist.`, () => {
        cy.checkComponentExamples(tabbarTag, new Set(TABBAR_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${tabbarTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(TABBAR_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`click`, () => {
        cy.navigate(tabbar);
        const eventType: KulTabbarEvent = 'click';
        cy.checkEvent(tabbar, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.BUTTON)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`pointerdown`, () => {
        cy.navigate(tabbar);
        const eventType: KulTabbarEvent = 'pointerdown';
        cy.checkEvent(tabbar, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.BUTTON)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(tabbar);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(tabbar);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(tabbarTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(tabbarTag);
    });

    it(`getProps: check keys against Kul${tabbarCapitalized}Props enum.`, () => {
        cy.checkProps(tabbarTag, KulTabbarProps);
    });

    it(`getProps: check keys against Kul${tabbarCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(tabbarTag, {
            kulData: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulTabbarPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(tabbar);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

import {
    KulTextfieldEvent,
    KulTextfieldProps,
    KulTextfieldPropsInterface,
} from '../../../src/components/kul-textfield/kul-textfield-declarations';
import { TEXTFIELD_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/textfield/kul-showcase-textfield-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const textfield = 'textfield';
const textfieldCapitalized =
    textfield.charAt(0).toUpperCase() + textfield.slice(1);
const textfieldTag = 'kul-' + textfield;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(textfield);
    });

    it(`Should select all <${textfieldTag}> elements matching the composed ID.`, () => {
        cy.checkComponentExamplesByCategory(new Set(TEXTFIELD_CATEGORIES_KEYS));
    });

    it(`Should check that all categories have at least 1 <${textfieldTag}>.`, () => {
        cy.checkComponentExamplesByCategoryNumber(textfieldTag);
    });
});

describe('Events', () => {
    it(`blur`, () => {
        cy.navigate(textfield);
        const eventType: KulTextfieldEvent = 'blur';
        cy.checkEvent(textfield, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus()
            .blur();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`change`, () => {
        cy.navigate(textfield);
        const eventType: KulTextfieldEvent = 'change';
        cy.checkEvent(textfield, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus()
            .type('Test{enter}')
            .blur();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`click`, () => {
        cy.navigate(textfield);
        const eventType: KulTextfieldEvent = 'click';
        cy.checkEvent(textfield, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`focus`, () => {
        cy.navigate(textfield);
        const eventType: KulTextfieldEvent = 'focus';
        cy.checkEvent(textfield, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`input`, () => {
        cy.navigate(textfield);
        const eventType: KulTextfieldEvent = 'input';
        cy.checkEvent(textfield, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .type('Test');
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(textfield);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(textfield);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(textfieldTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(textfieldTag);
    });

    it(`getProps: check keys against Kul${textfieldCapitalized}Props enum.`, () => {
        cy.checkProps(textfieldTag, KulTextfieldProps);
    });

    it(`getProps: check keys against Kul${textfieldCapitalized}PropsInterface.`, () => {
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
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(textfield);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

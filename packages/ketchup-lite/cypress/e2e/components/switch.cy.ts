import {
    KulSwitchEvent,
    KulSwitchProps,
    KulSwitchPropsInterface,
} from '../../../src/components/kul-switch/kul-switch-declarations';
import { SWITCH_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/switch/kul-showcase-switch-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const switchComponent = 'switch';
const switchCapitalized =
    switchComponent.charAt(0).toUpperCase() + switchComponent.slice(1);
const switchTag = 'kul-' + switchComponent;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(switchComponent);
    });

    it(`Should check that all <${switchTag}> exist.`, () => {
        cy.checkComponentExamples(switchTag, new Set(SWITCH_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${switchTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(SWITCH_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`blur`, () => {
        cy.navigate(switchComponent);
        const eventType: KulSwitchEvent = 'blur';
        cy.checkEvent(switchComponent, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus()
            .blur();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`change`, () => {
        cy.navigate(switchComponent);
        const eventType: KulSwitchEvent = 'change';
        cy.checkEvent(switchComponent, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`focus`, () => {
        cy.navigate(switchComponent);
        const eventType: KulSwitchEvent = 'focus';
        cy.checkEvent(switchComponent, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`pointerdown`, () => {
        cy.navigate(switchComponent);
        const eventType: KulSwitchEvent = 'pointerdown';
        cy.checkEvent(switchComponent, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .click({ force: true });
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(switchComponent);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(switchComponent);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(switchTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(switchTag);
    });

    it(`getProps: check keys against Kul${switchCapitalized}Props enum.`, () => {
        cy.checkProps(switchTag, KulSwitchProps);
    });

    it(`getProps: check keys against Kul${switchCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(switchTag, {
            kulDisabled: null,
            kulLabel: null,
            kulLeadingLabel: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulSwitchPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(switchComponent);
    });

    it('kulStyle: hould check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

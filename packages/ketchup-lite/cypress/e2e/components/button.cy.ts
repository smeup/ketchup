import {
    KulButtonEvent,
    KulButtonProps,
    KulButtonPropsInterface,
    KulButtonState,
} from '../../../src/components/kul-button/kul-button-declarations';
import { BUTTON_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/button/kul-showcase-button-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';
import { KUL_DROPDOWN_CLASS_VISIBLE } from '../../../src/variables/GenericVariables';

const button = 'button';
const buttonCapitalized = button.charAt(0).toUpperCase() + button.slice(1);
const buttonTag = 'kul-' + button;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(button);
    });

    it(`Should select all <${buttonTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(new Set(BUTTON_CATEGORIES_KEYS));
    });

    it(`Should check that all categories have at least 1 <${buttonTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(buttonTag);
    });
});

describe('Events', () => {
    it(`blur`, () => {
        cy.navigate(button);
        const eventType: KulButtonEvent = 'blur';
        cy.checkEvent(button, eventType);
        cy.get('@eventElement').find('button').focus().blur();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`click`, () => {
        cy.navigate(button);
        const eventType: KulButtonEvent = 'click';
        cy.checkEvent(button, eventType);
        cy.get('@eventElement').find('button').click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`kul-event`, () => {
        cy.navigate(button);
        const eventType: KulButtonEvent = 'kul-event';
        cy.checkEvent(button, eventType);
        cy.get('#flat-dropdown')
            .findCyElement(KulDataCyAttributes.DROPDOWN_BUTTON)
            .click();
        cy.getCyElement(KulDataCyAttributes.DROPDOWN_MENU)
            .should('be.visible')
            .should('have.class', KUL_DROPDOWN_CLASS_VISIBLE);
        cy.getCyElement(KulDataCyAttributes.NODE).first().click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`pointerdown`, () => {
        cy.navigate(button);
        const eventType: KulButtonEvent = 'pointerdown';
        cy.checkEvent(button, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.RIPPLE)
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(button);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(button);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(buttonTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(buttonTag);
    });

    it(`getProps: check keys against Kul${buttonCapitalized}Props enum.`, () => {
        cy.checkProps(buttonTag, KulButtonProps);
    });

    it(`getProps: check keys against Kul${buttonCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(buttonTag, {
            kulData: null,
            kulDisabled: null,
            kulIcon: null,
            kulIconOff: null,
            kulLabel: null,
            kulRipple: null,
            kulShowSpinner: null,
            kulStyle: null,
            kulStyling: null,
            kulToggable: null,
            kulTrailingIcon: null,
            kulType: null,
            kulValue: null,
        } as Required<KulButtonPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(button);
    });

    it('kulStyle: Should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });

    it('kulToggable: should toggle the value setting it to true.', () => {
        let initialValue: string;

        cy.get('@kulComponentShowcase')
            .find('kul-button[id*="pulsating"]')
            .first()
            .then(($button) => {
                const kulButtonElement = $button[0] as HTMLKulButtonElement;
                return kulButtonElement.getValue();
            })
            .then((value) => {
                initialValue = value;
                const newValue: KulButtonState = value === 'on' ? 'off' : 'on';
                return cy.wrap({ initialValue, newValue });
            })
            .then(({ newValue }) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-button[id*="pulsating"]')
                    .first()
                    .then(($button) => {
                        const kulButtonElement =
                            $button[0] as HTMLKulButtonElement;
                        return kulButtonElement.setValue(newValue);
                    })
                    .then(() => {
                        return cy.wrap(newValue);
                    })
                    .then((newValue) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-button[id*="pulsating"]')
                            .first()
                            .then(($button) => {
                                const kulButtonElement =
                                    $button[0] as HTMLKulButtonElement;
                                return kulButtonElement.getValue();
                            })
                            .then((currentValue) => {
                                expect(currentValue).to.equal(newValue);
                            });
                    });
            });
    });
});

import {
    KulButtonProps,
    KulButtonPropsInterface,
    KulButtonState,
} from '../../../src/components/kul-button/kul-button-declarations';
import { BUTTON_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/button/kul-showcase-button-declarations';

const button = 'button';
const buttonCapitalized = button.charAt(0).toUpperCase() + button.slice(1);
const buttonTag = 'kul-' + button;

describe(buttonTag, () => {
    beforeEach(() => {
        cy.navigate(button);
    });

    it(`common: should select all <${buttonTag}> elements matching the composed ID`, () => {
        cy.checkComponentExamplesByCategory(new Set(BUTTON_CATEGORIES_KEYS));
    });

    it(`common: should check that all categories have at least 1 <${buttonTag}>`, () => {
        cy.checkComponentExamplesByCategoryNumber(buttonTag);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(buttonTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${buttonCapitalized}Props enum`, () => {
        cy.checkProps(buttonTag, KulButtonProps);
    });

    it(`common: should call getProps and check keys against Kul${buttonCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(buttonTag, {
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

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(buttonTag);
    });

    it('#pulsating: should toggle the value of a kul-button with kulToggable set to true', () => {
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

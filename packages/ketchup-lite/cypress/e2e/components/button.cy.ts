import {
    KulButtonProps,
    KulButtonPropsInterface,
    KulButtonStates,
} from '../../../src/components/kul-button/kul-button-declarations';
import { BUTTON_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/button/kul-showcase-button-declarations';

describe('kul-button', () => {
    beforeEach(() => {
        cy.navigate('button');
    });

    it('common: should check that all categories have at least 1 <kul-button>', () => {
        cy.get('@kulComponentShowcase')
            .find('.grid-container')
            .each((category) => {
                cy.wrap(category)
                    .find('kul-button')
                    .its('length')
                    .should('be.gte', 1);
            });
    });

    it('common: should call getProps() and check keys against KulButtonProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-button')
            .first()
            .then(($button) => {
                $button[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulButtonProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should select all <kul-button> elements matching the composed ID', () => {
        BUTTON_CATEGORIES_KEYS.forEach((categoryKey) => {
            const composedId = `#${categoryKey}-style`;
            cy.get('@kulComponentShowcase').find(composedId).should('exist');
        });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-button')
            .first()
            .then(($button) => {
                const kulButtonElement = $button[0] as HTMLKulButtonElement;
                kulButtonElement.getDebugInfo().then((debugInfo) => {
                    expect(debugInfo)
                        .to.have.property('endTime')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderCount')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderEnd')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderStart')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('startTime')
                        .that.is.a('number');
                });
            });
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        let initialRenderCount: number;

        cy.get('@kulComponentShowcase')
            .find('kul-button')
            .first()
            .then(($button) => {
                const kulButtonElement = $button[0] as HTMLKulButtonElement;
                return kulButtonElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-button')
                    .first()
                    .then(($button) => {
                        const kulButtonElement =
                            $button[0] as HTMLKulButtonElement;
                        return kulButtonElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-button')
                            .first()
                            .then(($button) => {
                                const kulButtonElement =
                                    $button[0] as HTMLKulButtonElement;
                                return kulButtonElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulButtonPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-button')
            .first()
            .then(($button) => {
                const kulButtonElement = $button[0] as HTMLKulButtonElement;
                return kulButtonElement.getProps();
            })
            .then((props) => {
                const dummy: KulButtonPropsInterface = {
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
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
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
                const newValue: KulButtonStates = value === 'on' ? 'off' : 'on';
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

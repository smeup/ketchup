import {
    KulCardProps,
    KulCardPropsInterface,
} from '../../../src/components/kul-card/kul-card-declarations';
import { CARD_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/card/kul-showcase-card-declarations';

describe('kul-card', () => {
    beforeEach(() => {
        cy.navigate('card');
    });

    it('common: should check that all categories have at least 1 <kul-card>', () => {
        cy.get('@kulComponentShowcase')
            .find('.grid-container')
            .each((category) => {
                cy.wrap(category)
                    .find('kul-card')
                    .its('length')
                    .should('be.gte', 1);
            });
    });

    it('common: should call getProps() and check keys against KulCardProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-card')
            .first()
            .then(($card) => {
                $card[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulCardProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should select all <kul-card> elements matching the composed ID', () => {
        CARD_CATEGORIES_KEYS.forEach((categoryKey) => {
            const composedId = `#${categoryKey}-style`;
            cy.get('@kulComponentShowcase').find(composedId).should('exist');
        });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-card')
            .first()
            .then(($card) => {
                const kulCardElement = $card[0] as HTMLKulCardElement;
                kulCardElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-card')
            .first()
            .then(($card) => {
                const kulCardElement = $card[0] as HTMLKulCardElement;
                return kulCardElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-card')
                    .first()
                    .then(($card) => {
                        const kulCardElement = $card[0] as HTMLKulCardElement;
                        return kulCardElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-card')
                            .first()
                            .then(($card) => {
                                const kulCardElement =
                                    $card[0] as HTMLKulCardElement;
                                return kulCardElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                cy.wait(100);
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulCardPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-card')
            .first()
            .then(($card) => {
                const kulCardElement = $card[0] as HTMLKulCardElement;
                return kulCardElement.getProps();
            })
            .then((props) => {
                const dummy: KulCardPropsInterface = {
                    kulData: null,
                    kulLayoutNumber: null,
                    kulSizeX: null,
                    kulSizeY: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

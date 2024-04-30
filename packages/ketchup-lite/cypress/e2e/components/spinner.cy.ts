import {
    KulSpinnerProps,
    KulSpinnerPropsInterface,
} from '../../../src/components/kul-spinner/kul-spinner-declarations';

describe('kul-spinner', () => {
    beforeEach(() => {
        cy.navigate('spinner');
    });

    it('common: should call getProps() and check keys against KulSpinnerProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-spinner')
            .first()
            .then(($spinner) => {
                $spinner[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulSpinnerProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-spinner')
            .first()
            .then(($spinner) => {
                const kulSpinnerElement = $spinner[0] as HTMLKulSpinnerElement;
                kulSpinnerElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-spinner')
            .first()
            .then(($spinner) => {
                const kulSpinnerElement = $spinner[0] as HTMLKulSpinnerElement;
                return kulSpinnerElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-spinner')
                    .first()
                    .then(($spinner) => {
                        const kulSpinnerElement =
                            $spinner[0] as HTMLKulSpinnerElement;
                        return kulSpinnerElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-spinner')
                            .first()
                            .then(($spinner) => {
                                const kulSpinnerElement =
                                    $spinner[0] as HTMLKulSpinnerElement;
                                return kulSpinnerElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulSpinnerPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-spinner')
            .first()
            .then(($spinner) => {
                const kulSpinnerElement = $spinner[0] as HTMLKulSpinnerElement;
                return kulSpinnerElement.getProps();
            })
            .then((props) => {
                const dummy: KulSpinnerPropsInterface = {
                    kulActive: null,
                    kulBarVariant: null,
                    kulDimensions: null,
                    kulFader: null,
                    kulFaderTimeout: null,
                    kulFullScreen: null,
                    kulLayout: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

import {
    KulLazyProps,
    KulLazyPropsInterface,
} from '../../../src/components/kul-lazy/kul-lazy-declarations';

describe('kul-lazy', () => {
    beforeEach(() => {
        cy.navigate('lazy');
    });

    it('common: should call getProps() and check keys against KulLazyProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-lazy')
            .first()
            .then(($lazy) => {
                $lazy[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulLazyProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-lazy')
            .first()
            .then(($lazy) => {
                const kulLazyElement = $lazy[0] as HTMLKulLazyElement;
                kulLazyElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-lazy')
            .first()
            .then(($lazy) => {
                const kulLazyElement = $lazy[0] as HTMLKulLazyElement;
                return kulLazyElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-lazy')
                    .first()
                    .then(($lazy) => {
                        const kulLazyElement = $lazy[0] as HTMLKulLazyElement;
                        return kulLazyElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-lazy')
                            .first()
                            .then(($lazy) => {
                                const kulLazyElement =
                                    $lazy[0] as HTMLKulLazyElement;
                                return kulLazyElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulLazyPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-lazy')
            .first()
            .then(($lazy) => {
                const kulLazyElement = $lazy[0] as HTMLKulLazyElement;
                return kulLazyElement.getProps();
            })
            .then((props) => {
                const dummy: KulLazyPropsInterface = {
                    kulComponentName: null,
                    kulComponentProps: null,
                    kulRenderMode: null,
                    kulShowPlaceholder: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

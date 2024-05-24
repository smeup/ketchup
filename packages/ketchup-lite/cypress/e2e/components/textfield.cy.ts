import {
    KulTextfieldProps,
    KulTextfieldPropsInterface,
} from '../../../src/components/kul-textfield/kul-textfield-declarations';

describe('kul-textfield', () => {
    beforeEach(() => {
        cy.navigate('textfield');
    });

    it('common: should call getProps() and check keys against KulTextfieldProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-textfield')
            .first()
            .then(($textfield) => {
                $textfield[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulTextfieldProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-textfield')
            .first()
            .then(($textfield) => {
                const kulTextfieldElement =
                    $textfield[0] as HTMLKulTextfieldElement;
                kulTextfieldElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-textfield')
            .first()
            .then(($textfield) => {
                const kulTextfieldElement =
                    $textfield[0] as HTMLKulTextfieldElement;
                return kulTextfieldElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-textfield')
                    .first()
                    .then(($textfield) => {
                        const kulTextfieldElement =
                            $textfield[0] as HTMLKulTextfieldElement;
                        return kulTextfieldElement.refresh();
                    })
                    .then(() => {
                        cy.wait(250);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-textfield')
                            .first()
                            .then(($textfield) => {
                                const kulTextfieldElement =
                                    $textfield[0] as HTMLKulTextfieldElement;
                                return kulTextfieldElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                cy.wait(250);
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulTextfieldPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-textfield')
            .first()
            .then(($textfield) => {
                const kulTextfieldElement =
                    $textfield[0] as HTMLKulTextfieldElement;
                return kulTextfieldElement.getProps();
            })
            .then((props) => {
                const dummy: KulTextfieldPropsInterface = {
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
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

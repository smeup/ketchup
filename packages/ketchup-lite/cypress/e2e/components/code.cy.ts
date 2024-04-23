import {
    KulCodeProps,
    KulCodePropsInterface,
} from '../../../src/components/kul-code/kul-code-declarations';
import { CODE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/code/kul-showcase-code-declarations';

describe('kul-code', () => {
    beforeEach(() => {
        cy.navigate('code');
    });

    it('common: should check that all <kul-code> exist', () => {
        cy.get('@kulComponentShowcase')
            .wrap(CODE_EXAMPLES_KEYS)
            .each((codeId) => {
                cy.get(`#${codeId}`).should('exist');
            });
    });

    it('common: should call getProps() and check keys against KulCodeProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-code')
            .first()
            .then(($code) => {
                $code[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulCodeProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should check that the number of <kul-code> elements matches the number of CODE_EXAMPLES', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-code')
            .should('have.length', CODE_EXAMPLES_KEYS.length);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-code')
            .first()
            .then(($code) => {
                const kulCodeElement = $code[0] as HTMLKulCodeElement;
                kulCodeElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-code')
            .first()
            .then(($code) => {
                const kulCodeElement = $code[0] as HTMLKulCodeElement;
                return kulCodeElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-code')
                    .first()
                    .then(($code) => {
                        const kulCodeElement = $code[0] as HTMLKulCodeElement;
                        return kulCodeElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-code')
                            .first()
                            .then(($code) => {
                                const kulCodeElement =
                                    $code[0] as HTMLKulCodeElement;
                                return kulCodeElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulCodePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-code')
            .first()
            .then(($code) => {
                const kulCodeElement = $code[0] as HTMLKulCodeElement;
                return kulCodeElement.getProps();
            })
            .then((props) => {
                const dummy: KulCodePropsInterface = {
                    kulLanguage: null,
                    kulStyle: null,
                    kulValue: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

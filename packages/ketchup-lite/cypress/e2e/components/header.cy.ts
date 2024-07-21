import { KulDebugComponentInfo } from '../../../src/managers/kul-debug/kul-debug-declarations';

const header = 'header';

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(header);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.get('iframe').then(($iframe) => {
            const iframeDocument = $iframe.contents();
            iframeDocument.find(header).each(($el) => {
                cy.wrap($el).then(($el) => {
                    const kulHeaderElement: HTMLKulHeaderElement = $el[0];
                    kulHeaderElement
                        .getDebugInfo()
                        .then((debugInfo: KulDebugComponentInfo) => {
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
        });
    });
});

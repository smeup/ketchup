import { KulDebugComponentInfo } from '../../../src/managers/kul-debug/kul-debug-declarations';

const drawer = 'drawer';

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(drawer);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.get('iframe').then(($iframe) => {
            const iframeDocument = $iframe.contents();
            iframeDocument.find(drawer).each(($el) => {
                cy.wrap($el).then(($el) => {
                    const kulDrawerElement: HTMLKulDrawerElement = $el[0];
                    kulDrawerElement
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

import {
    KulUploadProps,
    KulUploadPropsInterface,
} from '../../../src/components/kul-upload/kul-upload-declarations';
import { UPLOAD_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/upload/kul-showcase-upload-declarations';

describe('kul-upload', () => {
    beforeEach(() => {
        cy.navigate('upload');
    });

    it('common: should check that all <kul-upload> exist', () => {
        cy.get('@kulComponentShowcase')
            .wrap(UPLOAD_EXAMPLES_KEYS)
            .each((uploadId) => {
                cy.get('@kulComponentShowcase')
                    .find(`#${uploadId}`)
                    .should('exist');
            });
    });

    it('common: should call getProps() and check keys against KulUploadProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-upload')
            .first()
            .then(($upload) => {
                $upload[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulUploadProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should check that the number of <kul-upload> elements matches the number of UPLOAD_EXAMPLES', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-upload')
            .should('have.length', UPLOAD_EXAMPLES_KEYS.length);
    });

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-upload')
            .first()
            .then(($upload) => {
                const kulUploadElement = $upload[0] as HTMLKulUploadElement;
                kulUploadElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-upload')
            .first()
            .then(($upload) => {
                const kulUploadElement = $upload[0] as HTMLKulUploadElement;
                return kulUploadElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-upload')
                    .first()
                    .then(($upload) => {
                        const kulUploadElement =
                            $upload[0] as HTMLKulUploadElement;
                        return kulUploadElement.refresh();
                    })
                    .then(() => {
                        cy.wait(250);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-upload')
                            .first()
                            .then(($upload) => {
                                const kulUploadElement =
                                    $upload[0] as HTMLKulUploadElement;
                                return kulUploadElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulCodePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-upload')
            .first()
            .then(($upload) => {
                const kulUploadElement = $upload[0] as HTMLKulUploadElement;
                return kulUploadElement.getProps();
            })
            .then((props) => {
                const dummy: KulUploadPropsInterface = {
                    kulLabel: null,
                    kulRipple: null,
                    kulStyle: null,
                    kulValue: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

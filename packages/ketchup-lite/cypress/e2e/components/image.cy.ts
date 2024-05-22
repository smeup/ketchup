import {
    KulImageProps,
    KulImagePropsInterface,
} from '../../../src/components/kul-image/kul-image-declarations';
import { IMAGE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/image/kul-showcase-image-declarations';

describe('kul-image', () => {
    beforeEach(() => {
        cy.navigate('image');
    });

    it('common: should check that all <kul-image> exist', () => {
        cy.get('@kulComponentShowcase')
            .wrap(IMAGE_EXAMPLES_KEYS)
            .each((imageId) => {
                cy.get('@kulComponentShowcase')
                    .find(`#${imageId}`)
                    .should('exist');
            });
    });

    it('common: should call getProps() and check keys against KulImageProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-image')
            .first()
            .then(($image) => {
                $image[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulImageProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should check that the number of <kul-image> elements matches the number of IMAGE_EXAMPLES', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-image')
            .should('have.length', IMAGE_EXAMPLES_KEYS.length);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-image')
            .first()
            .then(($code) => {
                const kulImageElement = $code[0] as HTMLKulImageElement;
                kulImageElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-image')
            .first()
            .then(($image) => {
                const kulImageElement = $image[0] as HTMLKulImageElement;
                return kulImageElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-image')
                    .first()
                    .then(($image) => {
                        const kulImageElement =
                            $image[0] as HTMLKulImageElement;
                        return kulImageElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-image')
                            .first()
                            .then(($image) => {
                                const kulImageElement =
                                    $image[0] as HTMLKulImageElement;
                                return kulImageElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulCodePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-image')
            .first()
            .then(($image) => {
                const kulImageElement = $image[0] as HTMLKulImageElement;
                return kulImageElement.getProps();
            })
            .then((props) => {
                const dummy: KulImagePropsInterface = {
                    kulBadgeProps: null,
                    kulColor: null,
                    kulShowSpinner: null,
                    kulSizeX: null,
                    kulSizeY: null,
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

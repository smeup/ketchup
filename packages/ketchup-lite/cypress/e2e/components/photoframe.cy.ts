import {
    KulPhotoframeProps,
    KulPhotoframePropsInterface,
} from '../../../src/components/kul-photoframe/kul-photoframe-declarations';

describe('kul-photoframe', () => {
    beforeEach(() => {
        cy.navigate('photoframe');
    });

    it('common: should call getProps() and check keys against KulPhotoframeProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-photoframe')
            .first()
            .then(($photoframe) => {
                $photoframe[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulPhotoframeProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-photoframe')
            .first()
            .then(($photoframe) => {
                const kulPhotoframeElement =
                    $photoframe[0] as HTMLKulPhotoframeElement;
                kulPhotoframeElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-photoframe')
            .first()
            .then(($photoframe) => {
                const kulPhotoframeElement =
                    $photoframe[0] as HTMLKulPhotoframeElement;
                return kulPhotoframeElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-photoframe')
                    .first()
                    .then(($photoframe) => {
                        const kulPhotoframeElement =
                            $photoframe[0] as HTMLKulPhotoframeElement;
                        return kulPhotoframeElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-photoframe')
                            .first()
                            .then(($photoframe) => {
                                const kulPhotoframeElement =
                                    $photoframe[0] as HTMLKulPhotoframeElement;
                                return kulPhotoframeElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulPhotoframePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-photoframe')
            .first()
            .then(($photoframe) => {
                const kulPhotoframeElement =
                    $photoframe[0] as HTMLKulPhotoframeElement;
                return kulPhotoframeElement.getProps();
            })
            .then((props) => {
                const dummy: KulPhotoframePropsInterface = {
                    kulPlaceholder: null,
                    kulStyle: null,
                    kulThreshold: null,
                    kulValue: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

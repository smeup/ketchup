import {
    KulSplashProps,
    KulSplashPropsInterface,
} from '../../../src/components/kul-splash/kul-splash-declarations';
import { SPLASH_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/splash/kul-showcase-splash-declarations';

describe('kul-splash', () => {
    beforeEach(() => {
        cy.navigate('splash');
    });

    it('common: should check that all <kul-splash> elements are correctly added to the DOM', () => {
        SPLASH_EXAMPLES_KEYS.forEach((key) => {
            const triggerId = `${key}-trigger`;
            cy.get('@kulComponentShowcase').get(`#${triggerId}`).click();
            cy.get(`kul-splash#${key}`).should('exist').click();
        });
    });

    it('common: should call getProps() and check keys against KulSplashProps enum', () => {
        cy.get('@kulComponentShowcase').get('#style-trigger').click();
        cy.get('kul-splash')
            .first()
            .then(($splash) => {
                $splash[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulSplashProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should check that the number of <kul-splash> elements matches the number of splashExamples', () => {
        let counter = 0;
        SPLASH_EXAMPLES_KEYS.forEach((key) => {
            const triggerId = `${key}-trigger`;
            cy.get('@kulComponentShowcase').get(`#${triggerId}`).click();
            cy.get(`kul-splash#${key}`).should('exist').click();
            counter++;
        });
        expect(counter).equals(SPLASH_EXAMPLES_KEYS.length);
    });

    it('#label: should check that the label is different from the default (Loading...)', () => {
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get(`kul-splash#label`)
            .shadow()
            .find('.label')
            .should('not.have.text', 'Loading...');
    });

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase').get('#style-trigger').click();
        cy.get(`kul-splash#style`)
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get('kul-splash').then(($splash) => {
            const kulSplashElement = $splash[0] as HTMLKulSplashElement;
            kulSplashElement.getDebugInfo().then((debugInfo) => {
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

        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get('kul-splash')
            .then(($splash) => {
                const kulSplashElement = $splash[0] as HTMLKulSplashElement;
                return kulSplashElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('kul-splash')
                    .first()
                    .then(($splash) => {
                        const kulSplashElement =
                            $splash[0] as HTMLKulSplashElement;
                        return kulSplashElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('kul-splash')
                            .first()
                            .then(($splash) => {
                                const kulSplashElement =
                                    $splash[0] as HTMLKulSplashElement;
                                return kulSplashElement.getDebugInfo();
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
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get('kul-splash')
            .then(($splash) => {
                const kulSplashElement = $splash[0] as HTMLKulSplashElement;
                return kulSplashElement.getProps();
            })
            .then((props) => {
                const dummy: KulSplashPropsInterface = {
                    kulLabel: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});

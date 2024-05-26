import {
    KulSplashProps,
    KulSplashPropsInterface,
} from '../../../src/components/kul-splash/kul-splash-declarations';
import { SPLASH_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/splash/kul-showcase-splash-declarations';

const splash = 'splash';
const splashCapitalized = splash.charAt(0).toUpperCase() + splash.slice(1);
const splashTag = 'kul-' + splash;

describe(splashTag, () => {
    beforeEach(() => {
        cy.navigate(splash);
    });

    it(`common: should check that all <${splashTag}> elements are correctly added to the DOM`, () => {
        SPLASH_EXAMPLES_KEYS.forEach((key) => {
            const triggerId = `${key}-trigger`;
            cy.get('@kulComponentShowcase').get(`#${triggerId}`).click();
            cy.get(`${splashTag}#${key}`).should('exist').click();
        });
    });

    it(`common: should call getProps() and check keys against Kul${splashCapitalized}Props enum`, () => {
        cy.get('@kulComponentShowcase').get('#style-trigger').click();
        cy.get(splashTag)
            .first()
            .then(($splash) => {
                ($splash[0] as HTMLKulSplashElement)
                    .getProps()
                    .then((props) => {
                        const enumKeys = Object.keys(KulSplashProps);
                        expect(Object.keys(props)).to.deep.equal(enumKeys);
                    });
            });
    });

    it(`common: should check that the number of <${splashTag}> elements matches the number of examples`, () => {
        let counter = 0;
        SPLASH_EXAMPLES_KEYS.forEach((key) => {
            const triggerId = `${key}-trigger`;
            cy.get('@kulComponentShowcase').get(`#${triggerId}`).click();
            cy.get(`${splashTag}#${key}`).should('exist').click();
            counter++;
        });
        expect(counter).equals(SPLASH_EXAMPLES_KEYS.length);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get(splashTag).then(($splash) => {
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
        cy.get(splashTag)
            .then(($splash) => {
                const kulSplashElement = $splash[0] as HTMLKulSplashElement;
                return kulSplashElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get(splashTag)
                    .first()
                    .then(($splash) => {
                        const kulSplashElement =
                            $splash[0] as HTMLKulSplashElement;
                        return kulSplashElement.refresh();
                    })
                    .then(() => {
                        cy.wait(250);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get(splashTag)
                            .first()
                            .then(($splash) => {
                                const kulSplashElement =
                                    $splash[0] as HTMLKulSplashElement;
                                return kulSplashElement.getDebugInfo();
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

    it(`common: should call getProps and check keys against Kul${splashCapitalized}PropsInterface`, () => {
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get(splashTag)
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

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.get('@kulComponentShowcase').get('#style-trigger').click();
        cy.get(`${splashTag}#style`)
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });

    it('#label: should check that the label is different from the default (Loading...)', () => {
        cy.get('@kulComponentShowcase').get('#label-trigger').click();
        cy.get(`${splashTag}#label`)
            .shadow()
            .find('.label')
            .should('not.have.text', 'Loading...');
    });
});

import { KulSplashProps } from '../../../src/components/kul-splash/kul-splash-declarations';
import { SPLASH_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/splash/kul-showcase-splash-declarations';

describe('kul-splash', () => {
    beforeEach(() => {
        cy.navigate('splash');
    });

    it('common: should check that all <kul-splash> elements are correctly added to the DOM', () => {
        SPLASH_EXAMPLES_KEYS.forEach((key) => {
            const triggerId = `${key}-trigger`;
            cy.get(`#${triggerId}`).click();
            cy.get(`kul-splash#${key}`).should('exist').click();
        });
    });

    it('common: should call getProps() and check keys against KulSplashProps enum', () => {
        cy.get('#style-trigger').click();
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
            cy.get(`#${triggerId}`).click();
            cy.get(`kul-splash#${key}`).should('exist').click();
            counter++;
        });
        expect(counter).equals(SPLASH_EXAMPLES_KEYS.length);
    });

    it('#label: should check that the label is different from the default (Loading...)', () => {
        cy.get('#label-trigger').click();
        cy.get(`kul-splash#label`)
            .shadow()
            .find('.label')
            .should('not.have.text', 'Loading...');
    });

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('#style-trigger').click();
        cy.get(`kul-splash#style`)
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

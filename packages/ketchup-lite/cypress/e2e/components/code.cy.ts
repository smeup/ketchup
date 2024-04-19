import { KulCodeProps } from '../../../src/components/kul-code/kul-code-declarations';
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

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

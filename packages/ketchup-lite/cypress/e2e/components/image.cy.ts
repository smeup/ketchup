import { KulImageProps } from '../../../src/components/kul-image/kul-image-declarations';
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

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

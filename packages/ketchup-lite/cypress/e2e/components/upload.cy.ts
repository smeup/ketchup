import { KulUploadProps } from '../../../src/components/kul-upload/kul-upload-declarations';
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
});

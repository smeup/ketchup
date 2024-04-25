import { KulHeaderPropsInterface } from '../../../src/components/kul-header/kul-header-declarations';

describe('kul-header', () => {
    beforeEach(() => {
        cy.navigate('header');
    });

    it('common: should call getProps and check keys against KulHeaderPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('iframe')
            .first()
            .then(($iframe) => {
                const iframeDocument = $iframe.contents();
                const $header = iframeDocument.find('kul-header');
                cy.wrap($header)
                    .wait(500)
                    .then(($header) => {
                        const headerElement =
                            $header[0] as unknown as HTMLKulHeaderElement;
                        console.log(headerElement);
                        console.log(typeof headerElement.getProps);

                        return headerElement.getProps();
                    })
                    .then((props) => {
                        const dummy: KulHeaderPropsInterface = {
                            kulStyle: null,
                        };
                        const expectedKeys = Object.keys(dummy);
                        expect(Object.keys(props)).to.deep.equal(expectedKeys);
                    });
            });
    });
});

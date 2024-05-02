import { KulDrawerPropsInterface } from '../../../src/components/kul-drawer/kul-drawer-declarations';

describe('kul-drawer', () => {
    beforeEach(() => {
        cy.navigate('drawer');
    });

    it('common: should call getProps and check keys against KulDrawerPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .scrollTo('bottom')
            .find('iframe')
            .first()
            .then(($iframe) => {
                const iframeDocument = $iframe.contents();
                const $drawer = iframeDocument.find('kul-drawer');
                cy.wrap($drawer)
                    .wait(2000)
                    .then(($drawer) => {
                        const drawerElement =
                            $drawer[0] as unknown as HTMLKulDrawerElement;

                        return drawerElement.getProps();
                    })
                    .then((props) => {
                        const dummy: KulDrawerPropsInterface = {
                            kulStyle: null,
                        };
                        const expectedKeys = Object.keys(dummy);
                        expect(Object.keys(props)).to.deep.equal(expectedKeys);
                    });
            });
    });
});

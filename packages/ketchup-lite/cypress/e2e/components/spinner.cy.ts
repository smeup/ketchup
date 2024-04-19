import { KulSpinnerProps } from '../../../src/components/kul-spinner/kul-spinner-declarations';

describe('kul-spinner', () => {
    beforeEach(() => {
        cy.navigate('spinner');
    });

    it('common: should call getProps() and check keys against KulSpinnerProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-spinner')
            .first()
            .then(($spinner) => {
                $spinner[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulSpinnerProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });
});

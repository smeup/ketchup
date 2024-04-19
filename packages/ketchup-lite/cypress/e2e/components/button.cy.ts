import { KulButtonProps } from '../../../src/components/kul-button/kul-button-declarations';
import { BUTTON_CATEGORIES_KEYS } from '../../../src/components/kul-showcase/components/button/kul-showcase-button-declarations';

describe('kul-button', () => {
    beforeEach(() => {
        cy.navigate('button');
    });

    it('common: should check that all categories have at least 1 <kul-button>', () => {
        cy.get('@kulComponentShowcase')
            .find('.grid-container')
            .each((category) => {
                cy.wrap(category)
                    .find('kul-button')
                    .its('length')
                    .should('be.gte', 1);
            });
    });

    it('common: should call getProps() and check keys against KulButtonProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-button')
            .first()
            .then(($button) => {
                $button[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulButtonProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('should select all <kul-button> elements matching the composed ID', () => {
        BUTTON_CATEGORIES_KEYS.forEach((categoryKey) => {
            const composedId = `#${categoryKey}-style`;
            cy.get('@kulComponentShowcase').find(composedId).should('exist');
        });
    });
});

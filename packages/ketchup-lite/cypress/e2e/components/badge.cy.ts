import { KUL_WRAPPER_ID } from '../../../src/variables/GenericVariables';
import { KulBadgeProps } from '../../../src/components/kul-badge/kul-badge-declarations';
import { DynamicExampleManager } from '../../../src/components/kul-showcase/kul-showcase-utils';
import { KulImagePropsInterface } from '../../../src/components';

const badgeExamples = [
    'colors',
    'empty',
    'icon',
    'image',
    'label',
    'position',
    'style',
];

describe('kul-badge', () => {
    beforeEach(() => {
        cy.navigate('badge');
    });

    it('generic: should check that all badges exist', () => {
        cy.wrap(badgeExamples).each((badgeId) => {
            cy.get(`#${badgeId}`).should('exist');
        });
    });

    it('generic: should call getProps() and check keys against KulBadgeProps enum', () => {
        cy.get('kul-badge')
            .first()
            .then(($badge) => {
                $badge[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulBadgeProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('generic: should check that the number of <kul-badge> elements matches the number of badgeExamples', () => {
        cy.get('kul-badge').should('have.length', badgeExamples.length);
    });

    it('#colors: should check that the <kul-badge> with status colors has a correct state class and the matching status color', () => {
        cy.get('kul-badge#colors')
            .wait(Math.floor(Math.random() * (2500 - 500 + 1) + 750)) // Every 500ms the class changes randomically through DynamicExampleManager
            .then(($badge) => {
                const prefix = 'hydrated ';
                const badgeClass = $badge
                    .attr('class')
                    .substring(prefix.length);
                const dynManager = new DynamicExampleManager();
                const stateColors = dynManager.styles['state-colors'];
                expect(stateColors).to.include(badgeClass);

                cy.window().then((win) => {
                    const cssVariable = `--${badgeClass}-color`;
                    const computedStyles = win.getComputedStyle(
                        $badge[0].shadowRoot.querySelector('#' + KUL_WRAPPER_ID)
                    );
                    const badgeColor = computedStyles.backgroundColor;
                    cy.getKulManager().then((kulManager) => {
                        const themeName = kulManager.theme.name;
                        const themeColor =
                            kulManager.theme.list[themeName].cssVariables[
                                cssVariable
                            ];
                        const hexBadgeColor =
                            kulManager.theme.colorCheck(themeColor).hexColor;
                        const hexThemeColor =
                            kulManager.theme.colorCheck(badgeColor).hexColor;
                        expect(hexBadgeColor).to.eq(hexThemeColor);
                    });
                });
            });
    });

    it('#empty: should check that the #kul-component inside the empty <kul-badge> is actually empty', () => {
        cy.get('kul-badge#empty')
            .shadow()
            .find('#kul-component')
            .should('be.empty');
    });

    it('#icon: should check for the presence of the correct <kul-image> as an icon inside <kul-badge>', () => {
        cy.get('kul-badge#icon')
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('kul-badge#icon')
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('.image__icon')
                    .should('exist');
            });
    });

    it('#image: should check for the presence of the correct <kul-image> as an image inside <kul-badge>', () => {
        cy.get('kul-badge#image')
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('kul-badge#image')
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('img')
                    .should('exist');
            });
    });

    it('#label: should check that the #kul-component inside the <kul-badge> is not empty', () => {
        cy.get('kul-badge#label')
            .shadow()
            .find('#kul-component')
            .should('not.be.empty');
    });

    it('#position: should check that the <kul-badge> with status colors has a correct state class and the matching status color', () => {
        cy.get('kul-badge#position')
            .wait(Math.floor(Math.random() * (2500 - 500 + 1) + 750)) // Every 500ms the class changes randomically through DynamicExampleManager
            .then(($badge) => {
                const prefix = 'hydrated ';
                const badgeClass = $badge
                    .attr('class')
                    .substring(prefix.length);
                const dynManager = new DynamicExampleManager();
                const positions = dynManager.styles.positions;
                expect(positions).to.include(badgeClass);

                cy.window().then((win) => {
                    const computedStyles = win.getComputedStyle($badge[0]);
                    expect(computedStyles.position).equals('absolute');
                    switch (badgeClass) {
                        case 'kul-top-right':
                            expect(computedStyles.right).equals('0px');
                            expect(computedStyles.top).equals('0px');
                            break;
                        case 'kul-bottom-left':
                            expect(computedStyles.bottom).equals('0px');
                            expect(computedStyles.left).equals('0px');
                            break;
                        case 'kul-bottom-right':
                            expect(computedStyles.bottom).equals('0px');
                            expect(computedStyles.right).equals('0px');
                            break;
                        default:
                            expect(computedStyles.left).equals('0px');
                            expect(computedStyles.top).equals('0px');
                            break;
                    }
                });
            });
    });

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .find('#style')
            .shadow()
            .find('style')
            .should('have.length.at.least', 2);
    });
});

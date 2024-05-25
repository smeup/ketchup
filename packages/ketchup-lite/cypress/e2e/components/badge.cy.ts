import { KUL_WRAPPER_ID } from '../../../src/variables/GenericVariables';
import {
    KulBadgeProps,
    KulBadgePropsInterface,
} from '../../../src/components/kul-badge/kul-badge-declarations';
import { DynamicExampleManager } from '../../../src/components/kul-showcase/kul-showcase-utils';
import { KulImagePropsInterface } from '../../../src/components';
import { BADGE_EXAMPLES_KEYS } from './../../../src/components/kul-showcase/components/badge/kul-showcase-badge-declarations';

const badge = 'badge';
const badgeCapitalized = badge.charAt(0).toUpperCase() + badge.slice(1);
const badgeTag = 'kul-' + badge;

describe(badgeTag, () => {
    beforeEach(() => {
        cy.navigate(badge);
    });

    it(`common: should check that all <${badgeTag}> exist`, () => {
        cy.checkComponentExamples(badgeTag, new Set(BADGE_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${badgeTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(BADGE_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(badgeTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${badgeCapitalized}Props enum`, () => {
        cy.checkProps(badgeTag, KulBadgeProps);
    });

    it(`common: should call getProps and check keys against Kul${badgeCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(badgeTag, {
            kulImageProps: null,
            kulLabel: null,
            kulStyle: null,
        } as Required<KulBadgePropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(badgeTag);
    });

    it(`#colors: should check that the <${badgeTag}> with status colors has a correct state class and the matching status color`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#colors`)
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

    it(`#empty: should check that the #kul-component inside the empty <${badgeTag}> is actually empty`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#empty`)
            .shadow()
            .find('#kul-component')
            .should('be.empty');
    });

    it(`#icon: should check for the presence of the correct <kul-image> as an icon inside <${badgeTag}>`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#icon`)
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('@kulComponentShowcase')
                    .get(`${badgeTag}#icon`)
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('.image__icon')
                    .should('exist');
            });
    });

    it(`#image: should check for the presence of the correct <kul-image> as an image inside <${badgeTag}>`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#image`)
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('@kulComponentShowcase')
                    .find(`${badgeTag}#image`)
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('img')
                    .should('exist');
            });
    });

    it(`#label: should check that the #kul-component inside the <${badgeTag}> is not empty`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#label`)
            .shadow()
            .find('#kul-component')
            .should('not.be.empty');
    });

    it(`#position: should check that the <${badgeTag}> with status colors has a correct state class and the matching status color`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${badgeTag}#position`)
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
});

import { KUL_WRAPPER_ID } from '../../../src/variables/GenericVariables';
import {
    KulBadgeProps,
    KulBadgePropsInterface,
} from '../../../src/components/kul-badge/kul-badge-declarations';
import { DynamicExampleManager } from '../../../src/components/kul-showcase/kul-showcase-utils';
import { KulImagePropsInterface } from '../../../src/components';
import { BADGE_EXAMPLES_KEYS } from './../../../src/components/kul-showcase/components/badge/kul-showcase-badge-declarations';

describe('kul-badge', () => {
    beforeEach(() => {
        cy.navigate('badge');
    });

    it('common: should check that all <kul-badge> exist', () => {
        cy.get('@kulComponentShowcase')
            .wrap(BADGE_EXAMPLES_KEYS)
            .each((badgeId) => {
                cy.get(`#${badgeId}`).should('exist');
            });
    });

    it('common: should call getProps() and check keys against KulBadgeProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge')
            .first()
            .then(($badge) => {
                $badge[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulBadgeProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should check that the number of <kul-badge> elements matches the number of BADGE_EXAMPLES', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge')
            .should('have.length', BADGE_EXAMPLES_KEYS.length);
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge')
            .first()
            .then(($badge) => {
                const kulBadgeElement = $badge[0] as HTMLKulBadgeElement;
                kulBadgeElement.getDebugInfo().then((debugInfo) => {
                    expect(debugInfo)
                        .to.have.property('endTime')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderCount')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderEnd')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderStart')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('startTime')
                        .that.is.a('number');
                });
            });
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        let initialRenderCount: number;

        cy.get('@kulComponentShowcase')
            .find('kul-badge')
            .first()
            .then(($badge) => {
                const kulBadgeElement = $badge[0] as HTMLKulBadgeElement;
                return kulBadgeElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-badge')
                    .first()
                    .then(($badge) => {
                        const kulBadgeElement =
                            $badge[0] as HTMLKulBadgeElement;
                        return kulBadgeElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-badge')
                            .first()
                            .then(($badge) => {
                                const kulBadgeElement =
                                    $badge[0] as HTMLKulBadgeElement;
                                return kulBadgeElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                cy.wait(100);
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulBadgePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge')
            .first()
            .then(($badge) => {
                const kulBadgeElement = $badge[0] as HTMLKulBadgeElement;
                return kulBadgeElement.getProps();
            })
            .then((props) => {
                const dummy: KulBadgePropsInterface = {
                    kulImageProps: null,
                    kulLabel: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });

    it('#colors: should check that the <kul-badge> with status colors has a correct state class and the matching status color', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge#colors')
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
        cy.get('@kulComponentShowcase')
            .find('kul-badge#empty')
            .shadow()
            .find('#kul-component')
            .should('be.empty');
    });

    it('#icon: should check for the presence of the correct <kul-image> as an icon inside <kul-badge>', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge#icon')
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('@kulComponentShowcase')
                    .get('kul-badge#icon')
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('.image__icon')
                    .should('exist');
            });
    });

    it('#image: should check for the presence of the correct <kul-image> as an image inside <kul-badge>', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge#image')
            .invoke('prop', 'kulImageProps')
            .then((kulImageProps: KulImagePropsInterface) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-badge#image')
                    .shadow()
                    .find('kul-image')
                    .should('have.prop', 'kulValue', kulImageProps.kulValue)
                    .shadow()
                    .find('img')
                    .should('exist');
            });
    });

    it('#label: should check that the #kul-component inside the <kul-badge> is not empty', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge#label')
            .shadow()
            .find('#kul-component')
            .should('not.be.empty');
    });

    it('#position: should check that the <kul-badge> with status colors has a correct state class and the matching status color', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-badge#position')
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
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

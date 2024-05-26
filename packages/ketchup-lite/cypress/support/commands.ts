/// <reference types="cypress" />

import {
    KulDom,
    KulManager,
} from '../../src/managers/kul-manager/kul-manager-declarations';
import {
    GenericMap,
    KulComponent,
    KulEventPayload,
} from '../../src/types/GenericTypes';
export {};

declare global {
    namespace Cypress {
        interface Chainable {
            checkComponentExamples(
                component: string,
                componentExamples: Set<string>
            ): Chainable;
            checkComponentExamplesByCategory(category: Set<string>): Chainable;
            checkComponentExamplesByCategoryNumber(
                component: string
            ): Chainable;
            checkComponentExamplesNumber(
                componentExamples: Array<string>
            ): Chainable;
            checkDebugInfo(component: string): Chainable;
            checkProps(
                component: string,
                componentProps: GenericMap
            ): Chainable;
            checkPropsInterface(
                component: string,
                componentProps: { [key: string]: any }
            ): Chainable;
            checkRenderCountIncrease(
                component: string,
                attempts?: number
            ): Chainable;
            checkKulStyle(): Chainable;
            getKulManager(): Chainable<KulManager>;
            navigate(component: string): Chainable;
        }
    }
}

Cypress.Commands.add(
    'checkComponentExamples',
    (component, componentExamples) => {
        cy.get('@kulComponentShowcase')
            .find(component)
            .should('have.length', componentExamples.size);
    }
);

Cypress.Commands.add('checkComponentExamplesNumber', (componentExamples) => {
    cy.get('@kulComponentShowcase')
        .wrap(componentExamples)
        .each((id) => {
            cy.get(`#${id}`).should('exist');
        });
});

Cypress.Commands.add('checkComponentExamplesByCategory', (categories) => {
    categories.forEach((categoryKey) => {
        const composedId = `#${categoryKey}-style`;
        cy.get('@kulComponentShowcase').find(composedId).should('exist');
    });
});

Cypress.Commands.add('checkComponentExamplesByCategoryNumber', (component) => {
    cy.get('@kulComponentShowcase')
        .find('.grid-container')
        .each((category) => {
            cy.wrap(category).find(component).its('length').should('be.gte', 1);
        });
});

Cypress.Commands.add('checkDebugInfo', (component) => {
    cy.get('@kulComponentShowcase')
        .find(component)
        .first()
        .then(($article) => {
            const kulArticleElement = $article[0] as HTMLKulArticleElement;
            kulArticleElement.getDebugInfo().then((debugInfo) => {
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

Cypress.Commands.add('checkKulStyle', () => {
    function checkStyles(attempts = 0) {
        cy.get('@kulComponentShowcase')
            .find('style#kul-style')
            .then(($style) => {
                if ($style.length && $style.text().trim() && attempts < 10) {
                    cy.wait(200);
                    checkStyles(attempts + 1);
                } else {
                    cy.wrap($style).should('not.be.empty');
                }
            });
    }
    checkStyles();
});

Cypress.Commands.add('checkProps', (component, componentProps) => {
    cy.get('@kulComponentShowcase')
        .find(component)
        .first()
        .then(($comp) => {
            ($comp[0] as Partial<KulComponent>).getProps().then((props) => {
                const enumKeys = Object.keys(componentProps);
                expect(Object.keys(props)).to.deep.equal(enumKeys);
            });
        });
});

Cypress.Commands.add('checkPropsInterface', (component, componentProps) => {
    cy.get('@kulComponentShowcase')
        .find(component)
        .first()
        .then(($comp) => {
            const kulArticleElement = $comp[0] as Partial<KulComponent>;
            return kulArticleElement.getProps();
        })
        .then((props) => {
            const expectedKeys = Object.keys(componentProps);
            expect(Object.keys(props)).to.deep.equal(expectedKeys);
        });
});

Cypress.Commands.add(
    'checkRenderCountIncrease',
    (component, maxAttempts = 10) => {
        let initialRenderCount: number;
        cy.get(component)
            .first()
            .then(($component) => {
                const componentElement: Partial<KulComponent> = $component[0];
                return componentElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
            });
        cy.get(component)
            .first()
            .then(($component) => {
                const componentElement: Partial<KulComponent> = $component[0];
                return componentElement.refresh();
            });
        function checkForRenderCountIncrease(attempts = 0) {
            cy.get(component)
                .first()
                .then(($component) => {
                    const componentElement: Partial<KulComponent> =
                        $component[0];
                    return componentElement.getDebugInfo();
                })
                .then((debugInfo) => {
                    if (
                        debugInfo.renderCount <= initialRenderCount &&
                        attempts < maxAttempts
                    ) {
                        cy.wait(100);
                        checkForRenderCountIncrease(attempts + 1);
                    } else if (debugInfo.renderCount > initialRenderCount) {
                        expect(debugInfo.renderCount).to.be.greaterThan(
                            initialRenderCount
                        );
                    } else {
                        throw new Error(
                            'Max attempts reached without detecting a render.'
                        );
                    }
                });
        }
        checkForRenderCountIncrease();
    }
);

Cypress.Commands.add('navigate', (component) => {
    // Visit the page
    cy.visit('http://localhost:3333');

    // Wait for the "kul-splash-event" with the correct payload
    cy.window().then((win) => {
        return new Cypress.Promise((resolve) => {
            const checkEvent = (event: CustomEvent<KulEventPayload>) => {
                if (
                    event.type === 'kul-splash-event' &&
                    event.detail.eventType === 'unmount'
                ) {
                    resolve(); // Resolve the promise when the correct event is received
                    win.removeEventListener('kul-splash-event', checkEvent); // Remove the event listener
                }
            };

            win.addEventListener('kul-splash-event', checkEvent); // Add the event listener
        });
    });

    // Continue with the rest of the navigation steps
    cy.get('kul-showcase').should('exist').as('kulShowcase');
    cy.get('@kulShowcase')
        .shadow()
        .find('#' + component.charAt(0).toUpperCase() + component.slice(1))
        .should('exist')
        .click();
    cy.get('@kulShowcase')
        .shadow()
        .find('kul-showcase-' + component)
        .should('exist')
        .get('[data-cy="wrapper"]')
        .as('kulComponentShowcase');
});

Cypress.Commands.add('getKulManager', () => {
    cy.window().then((win) => {
        const dom = win.document.documentElement as KulDom;
        return dom.ketchupLite;
    });
});

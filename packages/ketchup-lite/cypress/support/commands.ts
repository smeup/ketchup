/// <reference types="cypress" />

import {
    KulDom,
    KulManager,
} from '../../src/managers/kul-manager/kul-manager-declarations';
export {};

declare global {
    namespace Cypress {
        interface Chainable {
            getKulManager(): Chainable<KulManager>;
            navigate(component: string): Chainable;
        }
    }
}

Cypress.Commands.add('navigate', (component) => {
    // Navigate to the application's homepage before each test
    cy.visit('http://localhost:3333');
    // Verify the presence of the kul-showcase component
    cy.get('kul-showcase').should('exist').as('kulShowcase');
    // Click on the article within the kul-showcase to navigate to the *component* page
    cy.get('@kulShowcase')
        .shadow()
        .find('#' + component.charAt(0).toUpperCase() + component.slice(1))
        .should('exist')
        .click();
    // Verify the presence of the kul-showcase-*component*
    cy.get('@kulShowcase')
        .shadow()
        .find('kul-showcase-' + component)
        .should('exist')
        .as('kulComponentShowcase');
});

Cypress.Commands.add('getKulManager', () => {
    cy.window().then((win) => {
        const dom = win.document.documentElement as KulDom;
        return dom.ketchupLite;
    });
});

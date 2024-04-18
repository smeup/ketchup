/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// cypress/support/commands.js or cypress/support/commands.ts

export {};

declare global {
    namespace Cypress {
        interface Chainable {
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
        .as('kulArticleShowcase');
});

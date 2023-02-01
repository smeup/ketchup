describe('Showcase e2e - sample test 1', () => {
  it.skip('Visits the app root url 1', () => {
    cy.visit('/');
    cy.get('#content')
      .children()
      .first()
      .should('contain', 'Test');
  });
  it.skip('Visits the app root url 1b', () => {
    cy.visit('/');
    cy.get('#content')
      .children()
      .first()
      .should('contain', 'Test');
  });
});

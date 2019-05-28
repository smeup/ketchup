context('Data table without configuration', () => {
  // beforeEach(() => {

  //
  // });

  it.skip('test tables', () => {
    cy.visit('http://localhost:4000/#/dataTable/basic');

    cy.get('kup-data-table table').should('have.length', 4);
  });
});

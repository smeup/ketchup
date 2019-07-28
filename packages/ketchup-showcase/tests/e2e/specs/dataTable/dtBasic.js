context('Data table without configuration', () => {
  // beforeEach(() => {

  //
  // });

  it('test first table', () => {
    cy.visit('http://localhost:4000/#/dataTable/basic');

    cy.shadowGet('kup-data-table')
      .shadowFind('table')
      .shadowFind('tr')
      .its('length')
      .should('eq', 4);

    cy.shadowGet('kup-data-table')
      .shadowFind('kup-paginator')
      .shadowFind('.nextPageGroup')
      .shadowEq(0)
      .shadowContains('Numero risultati: 3');

    cy.shadowGet('kup-data-table')
      .shadowFind('.density-medium')
      .its('length')
      .should('eq', 1);

    cy.shadowGet('kup-data-table')
      .shadowFind('kup-button')
      .shadowFind('button')
      .shadowTrigger('click');

    // cy.shadowFind don't seem to be repeated until a timeout like cy.get...  -> actually used a manual wait!
    cy.wait(500);

    cy.shadowGet('kup-data-table')
      .shadowFind('.density-small')
      .its('length')
      .should('eq', 1);
  });
});

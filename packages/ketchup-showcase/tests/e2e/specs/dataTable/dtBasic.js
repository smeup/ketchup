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
      .shadowFind('#top-paginator')
      .shadowFind('.nextPageGroup')
      .shadowEq(0)
      .shadowContains('3');

    cy.shadowGet('kup-data-table')
      .shadowFind('.density-medium')
      .its('length')
      .should('eq', 1);

    cy.shadowGet('kup-data-table')
      .shadowFind('.above-wrapper')
      .shadowFind('.density-panel')
      .shadowFind('div[role="button"]')
      .shadowTrigger('click');

    cy.shadowGet('kup-data-table')
      .shadowFind('.above-wrapper')
      .shadowFind('.density-panel')
      .shadowFind('.density-panel-overlay')
      .shadowFind('.wrapper')
      .shadowTrigger('click');

    // cy.shadowFind don't seem to be repeated until a timeout like cy.get...  -> actually used a manual wait!
    cy.wait(500);

    cy.shadowGet('kup-data-table')
      .shadowFind('.density-big')
      .its('length')
      .should('eq', 1);
  });
});

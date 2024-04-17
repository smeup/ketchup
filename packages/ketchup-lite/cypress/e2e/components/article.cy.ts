describe('kul-article', () => {
    beforeEach(() => {
        // Navigate to the application's homepage before each test
        cy.visit('http://localhost:3333');
        // Verify the presence of the kul-showcase component
        cy.get('kul-showcase').should('exist').as('kulShowcase');
        // Click on the article within the kul-showcase to navigate to the article page
        cy.get('@kulShowcase')
            .shadow()
            .find('#Article')
            .should('exist')
            .click();
        // Verify the presence of the kul-showcase-article component
        cy.get('@kulShowcase')
            .shadow()
            .find('kul-showcase-article')
            .should('exist')
            .as('kulArticleShowcase');
    });

    it('Ensure there are exactly 2 kul-article components within the kul-showcase-article', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .find('kul-article')
            .should('have.length', 2);
    });

    it('Verify the presence of at least 2 <style> elements within the shadow DOM of #articleStyle', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .find('#articleStyle')
            .shadow()
            .find('style')
            .should('have.length.at.least', 2);
    });

    it('Test whether all kul-article elements on the page have a number of <section> elements equal to the number of children of the first node of the kulData property', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .get('kul-article')
            .first()
            .invoke('prop', 'kulData')
            .then((kulData) => {
                const expectedSectionCount = kulData.nodes[0].children.length;
                cy.get('kul-article').each(($article) => {
                    cy.wrap($article)
                        .shadow()
                        .find('section')
                        .then(($sections) => {
                            expect($sections.length).to.equal(
                                expectedSectionCount
                            );
                        });
                });
            });
    });

    it('Test whether all kul-article elements on the page have a number of <section> elements equal to the number of children of the first node of the kulData property and their content matches', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .get('kul-article')
            .first()
            .invoke('prop', 'kulData')
            .then((kulData) => {
                const expectedSectionCount = kulData.nodes[0].children.length;
                cy.get('kul-article').each(($article) => {
                    cy.wrap($article)
                        .shadow()
                        .find('section')
                        .then(($sections) => {
                            expect($sections.length).to.equal(
                                expectedSectionCount
                            );
                            $sections.each((index, section) => {
                                const h2Content = Cypress.$(section)
                                    .find('h2')
                                    .text();
                                const expectedValue =
                                    kulData.nodes[0].children[index].value;
                                expect(h2Content).to.equal(expectedValue);
                            });
                        });
                });
            });
    });
});

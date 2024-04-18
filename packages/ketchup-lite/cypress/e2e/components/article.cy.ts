const articleExamples = ['articleSimple', 'articleStyle'];

describe('kul-article', () => {
    beforeEach(() => {
        cy.navigate('article');
    });

    articleExamples.forEach((compId) => {
        it(`should check if the article with ID ${compId} exists`, () => {
            cy.get(`#${compId}`).should('exist');
        });
    });

    it('should check that the number of kul-article elements matches the number of articleExamples', () => {
        cy.get('kul-article').should('have.length', articleExamples.length);
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

    it('Test the presence of shapes', () => {
        cy.get('@kulArticleShowcase')
            .shadow()
            .get('kul-article')
            .first()
            .invoke('prop', 'kulData')
            .then((kulData) => {
                const firstNodeChildren = kulData.nodes[0].children;
                cy.get('kul-article').each(($article) => {
                    cy.wrap($article)
                        .shadow()
                        .find('section')
                        .each(($section, sectionIndex) => {
                            const child = firstNodeChildren[sectionIndex];
                            if (
                                child.cells &&
                                child.cells[1].shape === 'image'
                            ) {
                                cy.wrap($section).find('img').should('exist');
                            } else if (
                                child.cells &&
                                child.cells[1].shape === 'code'
                            ) {
                                cy.wrap($section).find('code').should('exist');
                            }
                        });
                });
            });
    });
});

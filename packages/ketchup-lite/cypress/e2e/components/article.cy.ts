import {
    KulArticleDataset,
    KulArticleProps,
    KulArticlePropsInterface,
} from './../../../src/components/kul-article/kul-article-declarations';
import { ARTICLE_EXAMPLES_KEYS } from './../../../src/components/kul-showcase/components/article/kul-showcase-article-declarations';

describe('kul-article', () => {
    beforeEach(() => {
        cy.navigate('article');
    });

    it('common: should check that all <kul-article> exist', () => {
        cy.get('@kulComponentShowcase')
            .wrap(ARTICLE_EXAMPLES_KEYS)
            .each((articleId) => {
                cy.get(`#${articleId}`).should('exist');
            });
    });

    it('common: should check that the number of <kul-article> elements matches the number of examples', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article')
            .should('have.length', ARTICLE_EXAMPLES_KEYS.length);
    });

    it('common: should call getProps and check keys against KulArticleProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article')
            .first()
            .then(($article) => {
                $article[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulArticleProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article')
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

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        let initialRenderCount: number;

        cy.get('@kulComponentShowcase')
            .find('kul-article')
            .first()
            .then(($article) => {
                const kulArticleElement = $article[0] as HTMLKulArticleElement;
                return kulArticleElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-article')
                    .first()
                    .then(($article) => {
                        const kulArticleElement =
                            $article[0] as HTMLKulArticleElement;
                        return kulArticleElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-article')
                            .first()
                            .then(($article) => {
                                const kulArticleElement =
                                    $article[0] as HTMLKulArticleElement;
                                return kulArticleElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulArticlePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article')
            .first()
            .then(($article) => {
                const kulArticleElement = $article[0] as HTMLKulArticleElement;
                return kulArticleElement.getProps();
            })
            .then((props) => {
                const dummy: KulArticlePropsInterface = {
                    kulData: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });

    it('#simple: should check for the presence of a <h1> tag inside <article> if the first node has a truthy value', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article#simple')
            .then(($article) => {
                const kulArticleElement = $article[0] as HTMLKulArticleElement;
                const firstNodeValue = kulArticleElement.kulData.nodes[0];
                if (firstNodeValue) {
                    cy.wrap($article)
                        .shadow()
                        .find('article')
                        .find('h1')
                        .should('exist');
                } else {
                    cy.log(
                        'First node value is falsy, skipping <h1> tag presence check'
                    );
                }
            });
    });

    it('#simple: should check whether all <kul-article> elements in the page have a number of <section> elements equal to the number of children of the first node of the kulData property and their content matches', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article')
            .each(($article) => {
                const kulData: KulArticleDataset = $article.prop('kulData');
                const expectedSectionCount =
                    kulData.nodes[0]?.children?.length || 0;
                if (expectedSectionCount > 0) {
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
                                    kulData.nodes[0]?.children?.[index].value ||
                                    0;
                                expect(h2Content).to.equal(expectedValue);
                            });
                        });
                }
            });
    });

    it('#simple: should check the presence of shapes', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-article#simple')
            .invoke('prop', 'kulData')
            .then((kulData: KulArticleDataset) => {
                const firstNodeChildren = kulData.nodes[0].children;
                cy.get('kul-article#simple')
                    .shadow()
                    .find('section')
                    .each(($section, sectionIndex) => {
                        const child = firstNodeChildren[sectionIndex];
                        if (child.cells && child.cells[1].shape === 'image') {
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

    it('#style: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.get('@kulComponentShowcase')
            .find('#style')
            .shadow()
            .find('style')
            .eq(1)
            .should('not.be.empty');
    });
});

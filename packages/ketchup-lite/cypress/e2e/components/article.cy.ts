import { KulEventPayload } from '../../../src/components';
import {
    KulArticleDataset,
    KulArticleProps,
    KulArticlePropsInterface,
} from './../../../src/components/kul-article/kul-article-declarations';
import { ARTICLE_EXAMPLES_KEYS } from './../../../src/components/kul-showcase/components/article/kul-showcase-article-declarations';

const article = 'article';
const articleCapitalized = article.charAt(0).toUpperCase() + article.slice(1);
const articleTag = 'kul-' + article;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(article);
    });

    it(`Should check that all <${articleTag}> exist.`, () => {
        cy.checkComponentExamples(articleTag, new Set(ARTICLE_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${articleTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(ARTICLE_EXAMPLES_KEYS));
    });
});

describe('Data', () => {
    beforeEach(() => {
        cy.navigate(article);
    });

    it(`Should check whether all <${articleTag}> elements in the page have a number of <section> elements equal to the number of children of the first node of the kulData property and their content matches.`, () => {
        cy.get('@kulComponentShowcase')
            .find(articleTag)
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

    it('Should check for the presence of shapes.', () => {
        cy.get('@kulComponentShowcase')
            .find(`${articleTag}#simple`)
            .invoke('prop', 'kulData')
            .then((kulData: KulArticleDataset) => {
                const firstNodeChildren = kulData.nodes[0].children;
                cy.get(`${articleTag}#simple`)
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

    it('Should check for the presence of a <h1> tag inside <article> if the first node has a truthy value.', () => {
        cy.get('@kulComponentShowcase')
            .find(`${articleTag}#simple`)
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
});

describe('Events', () => {
    it(`ready: emission`, () => {
        cy.checkReadyEvent(article);
        cy.get('#ready-check').should('exist');
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(article);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(articleTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(articleTag);
    });

    it(`getProps: check keys against Kul${articleCapitalized}Props enum.`, () => {
        cy.checkProps(articleTag, KulArticleProps);
    });

    it(`getProps: check keys against Kul${articleCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(articleTag, {
            kulData: null,
            kulStyle: null,
        } as Required<KulArticlePropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(article);
    });

    it('Should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});

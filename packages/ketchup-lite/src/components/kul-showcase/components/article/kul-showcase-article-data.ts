import {
    KulArticleDataset,
    KulArticlePropsInterface,
} from '../../../kul-article/kul-article-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface ArticleExample extends KulArticlePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface ArticleData {
    [index: string]: Partial<ArticleExample>;
}

const kulData: KulArticleDataset = {
    nodes: [
        {
            id: 'root',
            value: 'Article',
            children: [
                {
                    id: 'Section1',
                    value: 'Section 1',
                    children: [
                        {
                            children: [
                                {
                                    id: 'content1',
                                    value: 'Textual content 1',
                                },
                                {
                                    id: 'content2',
                                    value: 'Textual content 2 as a span.',
                                },
                                {
                                    id: 'content2',
                                    tagName: 'br',
                                    value: '',
                                },
                                {
                                    id: 'content3',
                                    tagName: 'strong',
                                    value: 'Textual content 3 as a strong tag.',
                                },
                            ],
                            id: 'Paragraph1',
                            value: 'Paragraph 1',
                        },
                        {
                            id: 'Paragraph2',
                            value: 'Paragraph 2',
                        },
                        {
                            id: 'Paragraph3',
                            value: 'Paragraph 3',
                        },
                    ],
                },
                {
                    id: 'Section2',
                    value: 'Section 2',
                    children: [
                        {
                            id: 'Paragraph 1',
                            value: 'Paragraph 1',
                        },
                        {
                            id: 'Paragraph 2',
                            value: 'Paragraph 2',
                        },
                        {
                            id: 'Paragraph 3',
                            value: 'Paragraph 3',
                        },
                    ],
                },
            ],
        },
    ],
};

export const ARTICLE_EXAMPLES: ArticleData = {
    articleSimple: {
        ['data-description']: 'Simple article',
        kulData,
    },
    articleStyle: {
        ['data-description']: 'Article with custom style',
        'data-dynamic': 'custom',
        kulData,
    },
};

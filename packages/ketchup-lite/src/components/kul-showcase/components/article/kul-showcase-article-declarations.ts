import { KulArticlePropsInterface } from '../../../kul-article/kul-article-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const ARTICLE_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface ArticleExample extends KulArticlePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ArticleData = {
    [K in (typeof ARTICLE_EXAMPLES_KEYS)[number]]: ArticleExample;
};

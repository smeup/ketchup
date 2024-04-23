import { KulCardPropsInterface } from '../../../kul-card/kul-card-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const CARD_CATEGORIES_KEYS = ['a'] as const;

export const CARD_EXAMPLES_KEYS = ['image', 'style'] as const;

export interface CardExample extends KulCardPropsInterface {
    className: string;
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type CardData = {
    [K in (typeof CARD_CATEGORIES_KEYS)[number]]: {
        [K in (typeof CARD_EXAMPLES_KEYS)[number]]?: Partial<CardExample>;
    };
};

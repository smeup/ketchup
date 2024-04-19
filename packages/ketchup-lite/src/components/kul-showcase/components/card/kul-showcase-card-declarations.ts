import { KulCardPropsInterface } from '../../../kul-card/kul-card-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const CARD_EXAMPLES_KEYS = ['standard'] as const;

export interface CardExample extends KulCardPropsInterface {
    className: string;
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type CardData = {
    [K in (typeof CARD_EXAMPLES_KEYS)[number]]: {
        [index: string]: Partial<CardExample>;
    };
};

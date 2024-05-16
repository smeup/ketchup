import { KulLazyPropsInterface } from '../../../kul-lazy/kul-lazy-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const LAZY_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface LazyExample extends KulLazyPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type LazyData = {
    [K in (typeof LAZY_EXAMPLES_KEYS)[number]]: LazyExample;
};

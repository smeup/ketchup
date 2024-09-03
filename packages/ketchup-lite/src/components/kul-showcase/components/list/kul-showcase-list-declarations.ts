import { KulListPropsInterface } from '../../../kul-list/kul-list-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const LIST_EXAMPLES_KEYS = [
    'enableDeletion',
    'simple',
    'style',
] as const;

export interface ListExample extends KulListPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ListData = {
    [K in (typeof LIST_EXAMPLES_KEYS)[number]]: ListExample;
};

import { KulBadgePropsInterface } from '../../../kul-badge/kul-badge-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const BADGE_EXAMPLES_KEYS = [
    'colors',
    'empty',
    'icon',
    'image',
    'label',
    'position',
    'style',
] as const;

export interface BadgeExample extends KulBadgePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type BadgeData = {
    [K in (typeof BADGE_EXAMPLES_KEYS)[number]]: BadgeExample;
};

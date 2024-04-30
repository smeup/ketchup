import { KulTabbarPropsInterface } from '../../../kul-tabbar/kul-tabbar-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const TABBAR_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface TabbarExample extends KulTabbarPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type TabbarData = {
    [K in (typeof TABBAR_EXAMPLES_KEYS)[number]]: TabbarExample;
};

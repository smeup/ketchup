import { KulSplashPropsInterface } from '../../../kul-splash/kul-splash-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const SPLASH_EXAMPLES_KEYS = ['label', 'style'] as const;

export interface SplashExample extends KulSplashPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type SplashData = {
    [K in (typeof SPLASH_EXAMPLES_KEYS)[number]]: Partial<SplashExample>;
};

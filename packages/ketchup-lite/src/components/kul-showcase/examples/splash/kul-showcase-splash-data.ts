import { KulSplashPropsInterface } from '../../../kul-splash/kul-splash-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface SplashExample extends KulSplashPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface SplashData {
    [index: string]: Partial<SplashExample>;
}

export const SPLASH_EXAMPLES: SplashData = {
    splashTrigger: {
        ['data-description']:
            'Click the button to trigger the splash component',
    },
};

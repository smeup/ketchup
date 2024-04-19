import { SplashData } from './kul-showcase-splash-declarations';

export const SPLASH_EXAMPLES: SplashData = {
    label: {
        ['data-description']: 'Splash with custom label',
        kulLabel: 'This is a custom label!',
    },
    style: {
        ['data-description']: 'Splash with custom style',
        kulStyle: `.wrapper { animation: pulse 1.275s infinite; } @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.25; } 100% { opacity: 1; } }`,
    },
};

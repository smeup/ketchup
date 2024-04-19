import { KulBadgePropsInterface } from '../../../kul-badge/kul-badge-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { random2digitsNumber } from '../../kul-showcase-utils';

interface BadgeExample extends KulBadgePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface BadgeData {
    [index: string]: Partial<BadgeExample>;
}

export const BADGE_EXAMPLES: BadgeData = {
    colors: {
        ['data-description']: 'Badge states colors',
        ['data-dynamic']: 'state-colors',
    },
    empty: {
        ['data-description']: 'Empty badge',
    },
    icon: {
        ['data-description']: 'Badge with icon',
        kulImageProps: {
            kulValue: 'notifications',
        },
    },
    image: {
        ['data-description']: 'Badge with image',
        kulImageProps: {
            kulValue: 'https://avatars.githubusercontent.com/u/45429703?v=4',
        },
    },
    label: {
        ['data-description']: 'Badge with text',
        kulLabel: random2digitsNumber().toString(),
    },
    position: {
        ['data-description']: 'Badge positions',
        ['data-dynamic']: 'positions',
    },
    style: {
        ['data-description']: 'Badge with custom style',
        ['data-dynamic']: 'custom',
    },
};

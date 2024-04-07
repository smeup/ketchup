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
    badgeColors: {
        ['data-description']: 'Badge states colors',
        ['data-dynamic']: 'state-colors',
    },
    badgeEmpty: {
        ['data-description']: 'Empty badge',
    },
    badgeIcon: {
        ['data-description']: 'Badge with icon',
        kulImageProps: {
            kulValue: 'notifications',
        },
    },
    badgeImage: {
        ['data-description']: 'Badge with image',
        kulImageProps: {
            kulValue: 'https://avatars.githubusercontent.com/u/45429703?v=4',
        },
    },
    badgeLabel: {
        ['data-description']: 'Badge with text',
        kulLabel: random2digitsNumber().toString(),
    },
    badgePosition: {
        ['data-description']: 'Badge positions',
        ['data-dynamic']: 'positions',
    },
    badgeStyle: {
        ['data-description']: 'Badge with custom style',
        ['data-dynamic']: 'custom',
    },
};

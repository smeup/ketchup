import { KulButtonPropsInterface } from '../../../kul-button/kul-button-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface ButtonExample extends KulButtonPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface ButtonData {
    [index: string]: { [index: string]: Partial<ButtonExample> };
}

export const BUTTON_EXAMPLES: ButtonData = {
    flat: {
        buttonColors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
            kulStyling: 'flat',
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulStyling: 'flat',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'bug',
            kulStyling: 'flat',
        },
        buttonLabel: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
            kulStyling: 'flat',
        },
        buttonLabelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
            kulStyling: 'flat',
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
            kulStyling: 'flat',
        },
    },
    floating: {
        buttonColors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
            kulStyling: 'floating',
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulStyling: 'floating',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'bug',
            kulStyling: 'floating',
        },
        buttonLabel: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
            kulStyling: 'floating',
        },
        buttonLabelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
            kulStyling: 'floating',
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
            kulStyling: 'floating',
        },
    },
    outlined: {
        buttonColors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
            kulStyling: 'outlined',
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulStyling: 'outlined',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'bug',
            kulStyling: 'outlined',
        },
        buttonLabel: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
            kulStyling: 'outlined',
        },
        buttonLabelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
            kulStyling: 'outlined',
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
            kulStyling: 'outlined',
        },
    },
    raised: {
        buttonColors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'bug',
        },
        buttonLabel: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
        },
        buttonLabelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
    },
};

import { KulButtonPropsInterface } from '../../../kul-button/kul-button-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface ButtonExample extends KulButtonPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    className: string;
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
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
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
        buttonLarge: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        buttonShaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        buttonSlim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        buttonSpinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        buttonTrailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
    floating: {
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
            kulIcon: 'widgets',
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
        buttonLarge: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        buttonShaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        buttonSlim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        buttonSpinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        buttonTrailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
    icon: {
        buttonColors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulIcon: 'widgets',
        },
        buttonDisabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulIcon: 'widgets',
        },
        buttonIcon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        buttonLarge: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulIcon: 'widgets',
        },
        buttonPulsating: {
            className: 'kul-pulsating',
            ['data-description']:
                'Toggable button with pulsating and kulIconOff',
            kulIcon: 'remove_red_eye',
            kulIconOff: 'eye-off',
            kulToggable: true,
            kulValue: true,
        },
        buttonSpinner: {
            ['data-description']: 'Button with spinner',
            kulIcon: 'widgets',
            kulShowSpinner: true,
        },
        buttonSlim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulIcon: 'widgets',
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulIcon: 'widgets',
        },
    },
    outlined: {
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
            kulIcon: 'widgets',
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
        buttonLarge: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        buttonShaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        buttonSlim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        buttonSpinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        buttonTrailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
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
            kulIcon: 'widgets',
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
        buttonLarge: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        buttonShaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        buttonSlim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        buttonSpinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        buttonStyle: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        buttonTrailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
};

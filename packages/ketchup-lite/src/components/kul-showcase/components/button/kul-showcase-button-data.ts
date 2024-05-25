import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';
import { ButtonData } from './kul-showcase-button-declarations';

const component = 'button';

export const BUTTON_EXAMPLES: ButtonData = {
    flat: {
        colors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
        },
        disabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        icon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
        },
        labelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
        },
        large: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        shaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        slim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        spinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        style: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        trailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
    floating: {
        colors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
        },
        disabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        icon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
        },
        labelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
        },
        large: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        shaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        slim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        spinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        style: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        trailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
    icon: {
        colors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulIcon: 'widgets',
        },
        disabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulIcon: 'widgets',
        },
        icon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        large: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulIcon: 'widgets',
        },
        pulsating: {
            className: 'kul-pulsating',
            ['data-description']:
                'Toggable button with pulsating and kulIconOff',
            kulIcon: 'remove_red_eye',
            kulIconOff: 'eye-off',
            kulToggable: true,
            kulValue: true,
        },
        spinner: {
            ['data-description']: 'Button with spinner',
            kulIcon: 'widgets',
            kulShowSpinner: true,
        },
        slim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulIcon: 'widgets',
        },
        style: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulIcon: 'widgets',
        },
    },
    outlined: {
        colors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
        },
        disabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        icon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
        },
        labelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
        },
        large: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        shaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        slim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        spinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        style: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        trailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
    raised: {
        colors: {
            ['data-description']: 'Button states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'States colors',
        },
        disabled: {
            ['data-description']: 'Disabled button',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        icon: {
            ['data-description']: 'Icon button',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'With label',
            kulLabel: 'With label',
        },
        labelIcon: {
            ['data-description']: 'With label and icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and icon',
        },
        large: {
            className: 'kul-large',
            ['data-description']: 'Large button',
            kulLabel: 'Large',
        },
        shaped: {
            className: 'kul-shaped',
            ['data-description']: 'Shaped button',
            kulLabel: 'Shaped',
        },
        slim: {
            className: 'kul-slim',
            ['data-description']: 'Slim button',
            kulLabel: 'Slim',
        },
        spinner: {
            ['data-description']: 'Button with spinner',
            kulLabel: 'With spinner',
            kulShowSpinner: true,
        },
        style: {
            ['data-description']: 'Button with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'With custom style',
        },
        trailingIcon: {
            ['data-description']: 'With label and trailing icon',
            kulIcon: 'widgets',
            kulLabel: 'With label and trailing icon',
            kulTrailingIcon: true,
        },
    },
};

export const BUTTON_DOC: KulArticleDataset = {
    nodes: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.0.0.0.0',
                                            value: 'The ',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            tagName: 'strong',
                                            value: 'KulButton',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render buttons.',
                                        },
                                    ],
                                    id: '0.0.0.0',
                                },
                            ],
                            id: '0.0.0',
                        },
                    ],
                    id: '0.0',
                    value: 'Overview',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.2.0.0.0',
                                            value: 'To use the ',
                                        },
                                        {
                                            id: '0.2.0.0.1',
                                            tagName: 'strong',
                                            value: 'KulButton',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the relevant props.',
                                        },
                                    ],
                                    id: '0.2.0.0',
                                },
                                {
                                    children: [
                                        {
                                            cells: {
                                                kulCode: {
                                                    shape: 'code',
                                                    kulLanguage: 'markup',
                                                    value: '<kul-button kul-label="Click me"></kul-button>',
                                                },
                                            },
                                            id: '0.2.0.1.0',
                                            value: '',
                                        },
                                    ],
                                    id: '0.2.0.1',
                                },
                            ],
                            id: '0.2.0',
                            value: 'Basic Usage',
                        },
                    ],
                    id: '0.2',
                    value: 'Usage',
                },
                {
                    children: SHOWCASE_DOC.get.props(component),
                    id: '0.3',
                    value: 'Properties',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.4.0.0',
                                    value: 'This event is emitted during various button interactions. It carries a payload of type ',
                                },
                                {
                                    id: '0.4.0.1',
                                    value: 'KulButtonEventPayload',
                                },
                                {
                                    id: '0.4.0.2',
                                    value: ', which includes information about the component and the event type.',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.0.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'blur',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.0.1',
                                                                    value: ': emitted when the component loses focus.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.1.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'click',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.1.1',
                                                                    value: ': emitted when the component is clicked.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.1',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.2.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'focus',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.2.1',
                                                                    value: ': emitted when the component is focused.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.2',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.3.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'pointerdown',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.3.1',
                                                                    value: ': emitted when as soon as the component is touched/clicked (before the click event).',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.3',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.4.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.4.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.4',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                    ],
                                                    id: '0.4.0.3.0.0',
                                                    value: '',
                                                },
                                            ],
                                            id: '0.4.0.3.0',
                                            value: '',
                                        },
                                    ],
                                    id: '0.4.0.3',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.0',
                            tagName: 'strong',
                            value: 'kul-button-event',
                        },
                    ],
                    id: '0.4',
                    value: 'Events',
                },
                {
                    children: SHOWCASE_DOC.get.methods(component),
                    id: '0.5',
                    value: 'Methods',
                },
                {
                    children: SHOWCASE_DOC.get.styles(component),
                    id: '0.7',
                    value: 'Styling',
                },
            ],
            id: '0',
            value: 'KulButton',
        },
    ],
};

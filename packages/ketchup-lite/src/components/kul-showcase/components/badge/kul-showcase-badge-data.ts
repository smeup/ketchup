import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { random2digitsNumber } from '../../kul-showcase-utils';
import { BadgeData } from './kul-showcase-badge-declarations';

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

export const BADGE_DOC: KulArticleDataset = {
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
                                            value: 'KulBadge',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a customizable and reusable web component designed to display badges.',
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
                                            children: [
                                                {
                                                    id: '0.1.0.0.0.0',
                                                    tagName: 'strong',
                                                    value: 'Customizable Content',
                                                },
                                                {
                                                    id: '0.1.0.0.0.1',
                                                    value: ': The component allows for the display of text and images within the badge, offering flexibility in content presentation.',
                                                },
                                            ],
                                            id: '0.1.0.0.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.1.0.0',
                                                    tagName: 'strong',
                                                    value: 'Customizable Styling',
                                                },
                                                {
                                                    id: '0.1.0.1.0.1',
                                                    value: ": Offers the ability to customize the component's style through the ",
                                                },
                                                {
                                                    id: '0.1.0.1.0.2',
                                                    tagName: 'strong',
                                                    value: '<kulStyle>',
                                                },
                                                {
                                                    id: '0.1.0.1.0.3',
                                                    value: ' property.',
                                                },
                                            ],
                                            id: '0.1.0.1.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.2.0.0',
                                                    tagName: 'strong',
                                                    value: 'Debug Information',
                                                },
                                                {
                                                    id: '0.1.0.2.0.1',
                                                    value: ": Provides debug information about the component's rendering process, useful for development and debugging purposes.",
                                                },
                                            ],
                                            id: '0.1.0.2.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.2',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.3.0.0',
                                                    tagName: 'strong',
                                                    value: 'Event handling',
                                                },
                                                {
                                                    id: '0.1.0.3.0.1',
                                                    value: ': Emits custom events for various lifecycle stages, allowing for integration with other components or frameworks.',
                                                },
                                            ],
                                            id: '0.1.0.3.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.3',
                                    value: '',
                                },
                            ],
                            id: '0.1.0',
                            value: '',
                        },
                    ],
                    id: '0.1',
                    value: 'Features',
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
                                            value: 'KulBadge',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and optionally provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulLabel',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' and ',
                                        },
                                        {
                                            id: '0.2.0.0.5',
                                            tagName: 'strong',
                                            value: 'kulImageProps',
                                        },
                                        {
                                            id: '0.2.0.0.6',
                                            value: " properties to customize the badge's content.",
                                        },
                                    ],
                                    id: '0.2.0.0',
                                },
                                {
                                    children: [
                                        {
                                            cells: {
                                                code: {
                                                    shape: 'code',
                                                    shapeProps: {
                                                        kulLanguage: 'markup',
                                                    },
                                                    value: '<kul-badge></kul-badge>',
                                                },
                                            },
                                            id: '0.2.0.1.0',
                                            value: '',
                                        },
                                        {
                                            cells: {
                                                code: {
                                                    shape: 'code',
                                                    shapeProps: {
                                                        kulLanguage: 'json',
                                                    },
                                                    value: '{ "kulImageProps": { "kulValue": "notifications" } }',
                                                },
                                            },
                                            id: '0.2.0.1.1',
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
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.0.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.0.0.1',
                                            tagName: 'strong',
                                            value: 'KulImagePropsInterface',
                                        },
                                    ],
                                    id: '0.3.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.0.1.0',
                                            value: 'The props of the image displayed inside the badge.',
                                        },
                                    ],
                                    id: '0.3.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.0',
                            value: 'kulImageProps',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.1.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.1.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.1.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.1.1.0',
                                            value: 'The text displayed inside the badge.',
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.1',
                            value: 'kulLabel',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.2.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.2.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.2.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.2.1.0',
                                            value: "Enables customization of the component's style. This property accepts a string of CSS styles that will be applied to the component.",
                                        },
                                    ],
                                    id: '0.3.2.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.2',
                            value: 'kulStyle',
                        },
                    ],
                    id: '0.3',
                    value: 'Properties',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.4.0.0',
                                    value: 'This event is emitted during various lifecycle stages of the component. It carries a payload of type ',
                                },
                                {
                                    id: '0.4.0.1',
                                    tagName: 'strong',
                                    value: 'KulEventPayload',
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
                                                                    id: '0.1.0.2.0.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'click',
                                                                },
                                                                {
                                                                    id: '0.1.0.2.0.1',
                                                                    value: ': emitted when the component is clicked.',
                                                                },
                                                            ],
                                                            id: '0.1.0.2.0',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.1.0.2.0.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.1.0.2.0.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.1.0.2.0',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                    ],
                                                    id: '0.1.0.2',
                                                    value: '',
                                                },
                                            ],
                                            id: '0.1.0',
                                            value: '',
                                        },
                                    ],
                                    id: '',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.0',
                            tagName: 'strong',
                            value: 'kul-badge-event',
                        },
                    ],
                    id: '0.4',
                    value: 'Events',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.5.0.0',
                                    value: 'Returns a promise that resolves to a ',
                                },
                                {
                                    tagName: 'strong',
                                    id: '0.5.0.1',
                                    value: 'KulDebugComponentInfo',
                                },
                                {
                                    id: '0.5.0.2',
                                    value: " object containing debug information about the component's rendering process.",
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'getDebugInfo()',
                        },
                        {
                            children: [
                                {
                                    id: '0.5.1.0',
                                    value: 'Returns a promise that resolves to an object where each key is a property name, optionally with its description.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.1',
                            tagName: 'strong',
                            value: 'getProps(descriptions?: boolean)',
                        },
                        {
                            children: [
                                {
                                    id: '0.5.2.0',
                                    value: 'Triggers a re-render of the component to reflect any state changes.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.2',
                            tagName: 'strong',
                            value: 'refresh()',
                        },
                    ],
                    id: '0.5',
                    value: 'Methods',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.6.0.0',
                                    value: 'The component utilizes various lifecycle hooks to manage its state and behavior. These include ',
                                },
                                {
                                    id: '0.6.0.1',
                                    tagName: 'strong',
                                    value: 'componentWillLoad',
                                },
                                {
                                    id: '0.6.0.2',
                                    value: ',',
                                },
                                {
                                    id: '0.6.0.3',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.6.0.4',
                                    value: ',',
                                },
                                {
                                    id: '0.6.0.5',
                                    tagName: 'strong',
                                    value: 'componentWillRender',
                                },
                                {
                                    id: '0.6.0.6',
                                    value: ' and ',
                                },
                                {
                                    id: '0.6.0.7',
                                    tagName: 'strong',
                                    value: 'componentDidRender',
                                },
                            ],
                            id: '0.6.0',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.6',
                    value: 'Lifecycle Hooks',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.7.0.0',
                                    value: 'The component uses Shadow DOM for encapsulation, ensuring that its styles do not leak into the global scope. However, custom styles can be applied using the ',
                                },
                                {
                                    tagName: 'strong',
                                    id: '0.7.0.1',
                                    value: 'kulStyle',
                                },
                                {
                                    id: '0.7.0.2',
                                    value: ' property.',
                                },
                                {
                                    cells: {
                                        code: {
                                            shape: 'code',
                                            shapeProps: {
                                                kulLanguage: 'markup',
                                            },
                                            value: '<kul-badge kul-style="#kul-component { opacity: 0.5; }"></kul-badge>',
                                        },
                                    },
                                    id: '0.2.1.1.0',
                                    value: '',
                                },
                            ],
                            id: '0.7.0',
                            tagName: 'strong',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.0.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-border-radius',
                                                },
                                                {
                                                    id: '0.7.1.0.0.1',
                                                    value: ': Sets the border radius of the badge.  Defaults to 30px.',
                                                },
                                            ],
                                            id: '0.7.1.0.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.1.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-font-family',
                                                },
                                                {
                                                    id: '0.7.1.0.1.1',
                                                    value: ': Sets the font size of the badge. Defaults to var(--kul-font-size).',
                                                },
                                            ],
                                            id: '0.7.1.0.1',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.2.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-font-size',
                                                },
                                                {
                                                    id: '0.7.1.0.2.1',
                                                    value: ': Sets the font size of the badge.  Defaults to var(--kul-font-size).',
                                                },
                                            ],
                                            id: '0.7.1.0.2',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.3.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-min-size',
                                                },
                                                {
                                                    id: '0.7.1.0.3.1',
                                                    value: ': Sets the minimum size of the badge. Defaults to 1.5em.',
                                                },
                                            ],
                                            id: '0.7.1.0.3',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.4.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-padding',
                                                },
                                                {
                                                    id: '0.7.1.0.4.1',
                                                    value: ': Sets the padding of the badge. Defaults to 0.25em.',
                                                },
                                            ],
                                            id: '0.7.1.0.4',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.5.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-primary-color',
                                                },
                                                {
                                                    id: '0.7.1.0.5.1',
                                                    value: ': Sets the primary color of the badge. Defaults to var(--kul-primary-color).',
                                                },
                                            ],
                                            id: '0.7.1.0.5',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.6.0',
                                                    tagName: 'strong',
                                                    value: '--kul-badge-text-on-primary-color',
                                                },
                                                {
                                                    id: '0.7.1.0.6.1',
                                                    value: ': Sets the text color on the primary color of the badge. Defaults to var(--kul-text-on-primary-color).',
                                                },
                                            ],
                                            id: '0.7.1.0.6',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    value: 'Additionally, the following CSS variables can be used to customize the appearance of the component:',
                                },
                            ],
                            id: '0.7.1',
                            value: 'CSS Variables',
                        },
                    ],
                    id: '0.7',
                    value: 'Styling',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.8.0.0',
                                    value: 'The ',
                                },
                                {
                                    id: '0.8.0.1',
                                    tagName: 'strong',
                                    value: 'KulBadge',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' component is a versatile tool for displaying badges with customizable content and styling. Its event handling capabilities and debug information make it a powerful choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
                                },
                            ],
                            id: '0.8.0',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.8',
                    value: 'Conclusion',
                },
            ],
            id: '0',
            value: 'KulBadge',
        },
    ],
};

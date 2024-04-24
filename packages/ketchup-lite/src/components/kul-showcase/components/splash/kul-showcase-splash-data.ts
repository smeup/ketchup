import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
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

export const SPLASH_DOC: KulArticleDataset = {
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
                                            value: 'KulSplash',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render splash screens based on a JSON structure. ',
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
                                                    value: 'Dynamic Content Rendering',
                                                },
                                                {
                                                    id: '0.1.0.0.0.1',
                                                    value: ': The component dynamically generates a ',
                                                },
                                                {
                                                    id: '0.1.0.0.0.2',
                                                    tagName: 'strong',
                                                    value: '<div>',
                                                },
                                                {
                                                    id: '0.1.0.0.0.3',
                                                    value: '. This allows for a flexible and customizable splash screen.',
                                                },
                                            ],
                                            id: '0.1.0.0.0',
                                            tagName: 'li',
                                            value: '',
                                        },
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
                                                    value: ' property. This allows for a consistent look and feel across different splash screens.',
                                                },
                                            ],
                                            id: '0.1.0.1.0',
                                            tagName: 'li',
                                            value: '',
                                        },
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
                                    id: '0.1.0.0',
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
                                            value: 'KulSplash',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: " component, include it in your HTML. Keep in mind that it's a component designed to cover the whole page.",
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
                                                    value: '<kul-splash></kul-splash>',
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
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.0.1.0',
                                            value: 'This prop sets the label displayed in the splash screen.',
                                        },
                                    ],
                                    id: '0.3.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.0',
                            value: 'kulLabel',
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
                                            value: "Enables customization of the component's style. This property accepts a string of CSS styles that will be applied to the component.",
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.1',
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
                                                            id: '0.1.0.2.0.0',
                                                            tagName: 'strong',
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
                                                {
                                                    children: [
                                                        {
                                                            id: '0.1.0.2.0.0',
                                                            tagName: 'strong',
                                                            value: 'unmount',
                                                        },
                                                        {
                                                            id: '0.1.0.2.0.1',
                                                            value: ': emitted when the component is removed from the DOM.',
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
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.0',
                            tagName: 'strong',
                            value: 'kul-splash-event',
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
                                    id: '0.5.0.1',
                                    tagName: 'strong',
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
                                    value: ', ',
                                },
                                {
                                    id: '0.6.0.3',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.6.0.4',
                                    value: ', ',
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
                                    id: '0.7.0.1',
                                    tagName: 'strong',
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
                                            value: '<kul-splash kul-style="#kul-component { opacity: 0.5; }"></kul-splash>',
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
                                                    value: '--kul-splash-background-color',
                                                },
                                                {
                                                    id: '0.7.1.0.0.1',
                                                    value: ': Sets the color of the spinner.  Defaults to the value of --kul-background-color.',
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
                                                    value: '--kul-splash-font-family',
                                                },
                                                {
                                                    id: '0.7.1.0.1.1',
                                                    value: ":  Sets the label's font family.  Defaults to the value of --kul-font-family.",
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
                                                    value: '--kul-splash-font-size',
                                                },
                                                {
                                                    id: '0.7.1.0.2.1',
                                                    value: ": Sets the label's font size. Defaults to the value of --kul-font-size.",
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
                                                    id: '0.7.1.0.0.0',
                                                    tagName: 'strong',
                                                    value: '--kul-splash-label-color',
                                                },
                                                {
                                                    id: '0.7.1.0.0.1',
                                                    value: ': Sets the color of the label. Defaults to the value of --kul-text-color.',
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
                                                    value: '--kul-splash-widget-color',
                                                },
                                                {
                                                    id: '0.7.1.0.1.1',
                                                    value: ': Sets the color of the widget. Defaults to the value of --kul-primary-color.',
                                                },
                                            ],
                                            id: '0.7.1.0.1',
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
                                    value: 'KulSplash',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' is designed for landing pages, to hide content until the document is ready.',
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
            value: 'KulSplash',
        },
    ],
};

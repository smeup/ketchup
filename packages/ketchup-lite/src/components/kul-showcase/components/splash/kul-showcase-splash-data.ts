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
                                            id: '0.1.1.1.1',
                                            value: 'The ',
                                        },
                                        {
                                            id: '0.1.1.2',
                                            tagName: 'strong',
                                            value: 'kul-showcase-splash',
                                        },
                                        {
                                            id: '0.1.1.3',
                                            value: ' component is a versatile and customizable web component designed to showcase various examples of components within the Ketchup Lite library.',
                                        },
                                    ],
                                    id: '0.1.1.1',
                                    value: 'Overview',
                                },
                            ],
                            id: '0.1.1',
                            value: 'Overview',
                        },
                    ],
                    id: '0.1',
                    value: 'Introduction',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.1.1.1',
                                    tagName: 'strong',
                                    value: 'Dynamic Content Rendering',
                                },
                                {
                                    id: '0.1.1.2',
                                    value: ': The component dynamically generates a splash screen with examples based on the JSON structure provided. Each example includes a description and a button to trigger the example component.',
                                },
                            ],
                            id: '0.1.1',
                            tagName: 'li',
                            value: 'Features',
                        },
                        {
                            children: [
                                {
                                    id: '0.1.1.1',
                                    tagName: 'strong',
                                    value: 'Customizable Styling',
                                },
                                {
                                    id: '0.1.1.2',
                                    value: ": Offers the ability to customize the component's style through the CSS classes applied to the elements.",
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
                            value: 'Features',
                        },
                        {
                            children: [
                                {
                                    id: '0.1.2.1',
                                    tagName: 'strong',
                                    value: 'Event Handling',
                                },
                                {
                                    id: '0.1.2.2',
                                    value: ': Emits custom events for various user interactions, allowing for integration with other components or frameworks.',
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
                            value: 'Features',
                        },
                    ],
                    id: '0.2',
                    value: 'Features',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.1.1.1',
                                            value: 'To use the ',
                                        },
                                        {
                                            id: '0.3.1.1.2',
                                            tagName: 'strong',
                                            value: 'kul-showcase-splash',
                                        },
                                        {
                                            id: '0.3.1.1.3',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.3.1.1.4',
                                            tagName: 'strong',
                                            value: 'SPLASH_EXAMPLES',
                                        },
                                        {
                                            id: '0.3.1.1.5',
                                            value: ' property with the JSON structure representing the examples to be showcased.',
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: 'Basic Usage',
                                },
                            ],
                            id: '0.3.1',
                            value: 'Basic Usage',
                        },
                    ],
                    id: '0.3',
                    value: 'Usage',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.1.2.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.1.1.1',
                                            tagName: 'strong',
                                            value: 'SplashExample[]',
                                        },
                                    ],
                                    id: '0.4.1.1',
                                    value: 'SPLASH_EXAMPLES',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.1',
                            value: 'SPLASH_EXAMPLES',
                        },
                    ],
                    id: '0.4',
                    value: 'Properties',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.5.1.1',
                                    value: 'This event is emitted when a user clicks on an example button. It carries a payload of type ',
                                },
                                {
                                    id: '0.5.1.2',
                                    value: 'SplashExampleClickEvent',
                                    tagName: 'strong',
                                },
                                {
                                    id: '0.5.1.3',
                                    value: ', which includes information about the clicked example.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.1',
                            tagName: 'strong',
                            value: 'splash-example-click',
                        },
                    ],
                    id: '0.5',
                    value: 'Events',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.6.1.1',
                                    value: "Returns a promise that resolves to an object containing debug information about the component's rendering process.",
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.1',
                            tagName: 'strong',
                            value: 'getDebugInfo()',
                        },
                    ],
                    id: '0.6',
                    value: 'Methods',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.7.1.1',
                                    value: 'The component utilizes various lifecycle hooks to manage its state and behavior. These include ',
                                },
                                {
                                    id: '0.7.1.2',
                                    tagName: 'strong',
                                    value: 'componentWillLoad',
                                },
                                {
                                    id: '0.7.1.3',
                                    value: ', ',
                                },
                                {
                                    id: '0.7.1.4',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.7.1.5',
                                    value: ', ',
                                },
                                {
                                    id: '0.7.1.6',
                                    tagName: 'strong',
                                    value: 'componentWillRender',
                                },
                                {
                                    id: '0.7.1.7',
                                    value: ' and ',
                                },
                                {
                                    id: '0.7.1.8',
                                    tagName: 'strong',
                                    value: 'componentDidRender',
                                },
                            ],
                            id: '0.7.1',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.7',
                    value: 'Lifecycle Hooks',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.8.1.1',
                                    value: 'The component uses Shadow DOM for encapsulation, ensuring that its styles do not leak into the global scope. However, custom styles can be applied using the ',
                                },
                                {
                                    id: '0.8.1.2',
                                    tagName: 'strong',
                                    value: 'styleUrl',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' property.',
                                },
                            ],
                            id: '0.8.1',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.8',
                    value: 'Styling',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.8.1.1',
                                    value: 'The ',
                                },
                                {
                                    id: '0.8.1.2',
                                    tagName: 'strong',
                                    value: 'kul-showcase-splash',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' component is a powerful tool for showcasing various examples of components within the Ketchup Lite library. Its dynamic content rendering and customizable styling make it a versatile choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
                                },
                            ],
                            id: '0.8.1',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.9',
                    value: 'Conclusion',
                },
            ],
            id: '0',
            value: 'kul-showcase-splash',
        },
    ],
};

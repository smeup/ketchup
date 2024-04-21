import { getAssetPath } from '@stencil/core';
import { KulCardPropsInterface } from '../../../kul-card/kul-card-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';

interface CardExample extends KulCardPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface CardData {
    [index: string]: {
        [index: number]: { [index: string]: Partial<CardExample> };
    };
}

export const CARD_EXAMPLES: CardData = {
    standard: {
        1: {
            image: {
                ['data-description']: 'Card with custom style',
                kulSizeX: '320px',
                kulSizeY: '320px',
                kulData: {
                    nodes: [
                        {
                            cells: {
                                1: { value: 'Title' },
                                2: { value: 'Subtitle' },
                                3: { value: 'Description' },
                                4: {
                                    shape: 'image',
                                    value: getAssetPath(
                                        `./assets/media/morana.png`
                                    ),
                                },
                            },
                            id: '1',
                        },
                    ],
                },
            },
            style: {
                ['data-description']: 'Card with custom style',
                ['data-dynamic']: 'custom',
                kulSizeX: '320px',
                kulSizeY: '320px',
                kulData: {
                    nodes: [
                        {
                            cells: {
                                1: { value: 'Title' },
                                2: { value: 'Subtitle' },
                                3: { value: 'Description' },
                                4: {
                                    shape: 'image',
                                    value: 'widgets',
                                },
                            },
                            id: '1',
                        },
                    ],
                },
            },
        },
    },
};

export const CARD_DOC: KulArticleDataset = {
    nodes: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        { id: '0.1.1.1.1', value: 'The ' },
                                        {
                                            id: '0.1.1.2',
                                            tagName: 'strong',
                                            value: 'KulShowcaseCard',
                                        },
                                        {
                                            id: '0.1.1.3',
                                            value: ' component is a part of the Ketchup Lite library, designed to showcase various card examples in a dynamic and interactive manner. It leverages Stencil for building web components, ensuring compatibility across different frameworks and platforms.',
                                        },
                                    ],
                                    id: '0.1.1.1',
                                },
                            ],
                            id: '0.1.1',
                        },
                    ],
                    id: '0.1',
                    value: 'Overview',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.1.1.1',
                                    tagName: 'strong',
                                    value: 'Dynamic Card Rendering',
                                },
                                {
                                    id: '0.1.1.2',
                                    value: ': The component dynamically generates card examples based on the provided data structure, allowing for a wide range of card layouts and styles.',
                                },
                            ],
                            id: '0.1.1',
                            tagName: 'li',
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
                                    value: ": Offers the ability to customize the component's style through the use of CSS classes and properties.",
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
                        },
                        {
                            children: [
                                {
                                    id: '0.1.2.1',
                                    tagName: 'strong',
                                    value: 'Event handling',
                                },
                                {
                                    id: '0.1.2.2',
                                    value: ': Emits custom events for various lifecycle stages, allowing for integration with other components or frameworks.',
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
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
                                            value: 'KulShowcaseCard',
                                        },
                                        {
                                            id: '0.3.1.1.3',
                                            value: ' component, include it in your HTML. The component will automatically render the card examples based on the internal data structure.',
                                        },
                                    ],
                                    id: '0.3.1.1',
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
                                        { id: '0.4.1.2.1', value: 'Type:' },
                                        {
                                            id: '0.4.1.1.1',
                                            tagName: 'strong',
                                            value: 'HTMLKulCardElement[]',
                                        },
                                    ],
                                    id: '0.4.1.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.1.2.1',
                                            value: 'An array of HTML elements representing the dynamic card examples.',
                                        },
                                    ],
                                    id: '0.4.1.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.1',
                            value: '#dynamicExamples',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        { id: '0.4.2.1.1', value: 'Type:' },
                                        {
                                            id: '0.4.2.1.1',
                                            tagName: 'strong',
                                            value: 'DynamicExampleManager',
                                        },
                                    ],
                                    id: '0.4.2.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.2.2.1',
                                            value: 'Manages the dynamic behavior of the card examples, including updating styles dynamically.',
                                        },
                                    ],
                                    id: '0.4.2.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.2',
                            value: '#dynamicExampleManager',
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
                                    value: 'This event is emitted during various lifecycle stages of the component. It carries a payload of type ',
                                },
                                {
                                    id: '0.5.1.2',
                                    value: 'KulEventPayload',
                                },
                                {
                                    id: '0.5.1.3',
                                    value: ', which includes information about the component and the event type.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.1',
                            tagName: 'strong',
                            value: 'kul-showcase-card-event',
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
                                    value: 'Returns a promise that resolves to a ',
                                },
                                {
                                    id: '0.6.1.2',
                                    tagName: 'strong',
                                    value: 'KulDebugComponentInfo',
                                },
                                {
                                    id: '0.6.1.3',
                                    value: " object containing debug information about the component's rendering process.",
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
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.7.1.3',
                                    value: ', ',
                                },
                                {
                                    id: '0.7.1.4',
                                    tagName: 'strong',
                                    value: 'disconnectedCallback',
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
                                    value: 'The ',
                                },
                                {
                                    id: '0.8.1.2',
                                    tagName: 'strong',
                                    value: 'KulShowcaseCard',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' component uses Shadow DOM for encapsulation, ensuring that its styles do not leak into the global scope. However, custom styles can be applied using the appropriate CSS classes and properties.',
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
                                    value: 'KulShowcaseCard',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' component is a powerful tool for showcasing card examples in a dynamic and interactive manner. Its ability to render various card layouts and styles, combined with customizable styling and event handling capabilities, makes it a versatile choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
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
            value: 'KulShowcaseCard',
        },
    ],
};

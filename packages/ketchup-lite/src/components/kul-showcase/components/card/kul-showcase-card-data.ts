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
                                        {
                                            id: '0.0.0.0.0',
                                            value: 'The ',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            tagName: 'strong',
                                            value: 'KulCard',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render cards based on a JSON structure. ',
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
                                                    value: '<card>',
                                                },
                                                {
                                                    id: '0.1.0.0.0.3',
                                                    value: ' element based on the JSON structure provided. ',
                                                },
                                            ],
                                            id: '0.1.0.0.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.0.1.0.0',
                                                    tagName: 'strong',
                                                    value: 'Customizable Styling',
                                                },
                                                {
                                                    id: '0.1.0.0.1.0.1',
                                                    value: ": Offers the ability to customize the component's style through the ",
                                                },
                                                {
                                                    id: '0.1.0.0.1.0.2',
                                                    tagName: 'strong',
                                                    value: '<kulStyle>',
                                                },
                                                {
                                                    id: '0.1.0.0.1.0.3',
                                                    value: ' property. ',
                                                },
                                            ],
                                            id: '0.1.0.0.1.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.0.2.0.0',
                                                    tagName: 'strong',
                                                    value: 'Debug Information',
                                                },
                                                {
                                                    id: '0.1.0.0.2.0.1',
                                                    value: ": Provides debug information about the component's rendering process, useful for development and debugging purposes. ",
                                                },
                                            ],
                                            id: '0.1.0.0.2.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.0.3.0.0',
                                                    tagName: 'strong',
                                                    value: 'Event handling',
                                                },
                                                {
                                                    id: '0.1.0.0.3.0.1',
                                                    value: ': Emits custom events for various lifecycle stages, allowing for integration with other components or frameworks. ',
                                                },
                                            ],
                                            id: '0.1.0.0.3.0',
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
                                            value: 'KulCard',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulData',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' property with the JSON structure representing the card. ',
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
                                                    value: '<kul-card></kul-card>',
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
                                                    value: `{ "nodes": [ { "cells": { "icon": { "shape": "image", "value": "widgets" }, "text1": { "value": "Title" }, "text2": { "value": "Subtitle"            }, "text3": { "value": "Description." } }, "id": "card" } ] }`,
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
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.2.1.0.0',
                                            value: "You can customize the component's style by setting the ",
                                        },
                                        {
                                            id: '0.2.1.0.1',
                                            tagName: 'strong',
                                            value: 'kulStyle',
                                        },
                                        {
                                            id: '0.2.1.0.2',
                                            value: ' property. ',
                                        },
                                    ],
                                    id: '0.2.1.0',
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
                                                    value: '<kul-card kul-style="#kul-component card { max-height: 20vh; }"></kul-card>',
                                                },
                                            },
                                            id: '0.2.1.1.0',
                                            value: '',
                                        },
                                    ],
                                    id: '0.2.1.1',
                                },
                            ],
                            id: '0.2.1',
                            value: 'Custom Styling',
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
                                    id: '0.6.4.1',
                                    value: 'The actual data of the card.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.1',
                            tagName: 'strong',
                            value: 'kulData',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.2',
                                    value: 'Sets the type of the card.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.2',
                            tagName: 'strong',
                            value: 'kulLayoutFamily',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.3',
                                    value: 'Sets the number of the layout.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.3',
                            tagName: 'strong',
                            value: 'kulLayoutNumber',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.4',
                                    value: 'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.4',
                            tagName: 'strong',
                            value: 'kulSizeX',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.5',
                                    value: 'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.5',
                            tagName: 'strong',
                            value: 'kulSizeY',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.6',
                                    value: 'Custom style of the component.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4.6',
                            tagName: 'strong',
                            value: 'kulStyle',
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
                        {
                            children: [
                                {
                                    id: '0.6.2.1',
                                    value: 'Returns a promise that resolves to an object where each key is a property name, optionally with its description.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.2',
                            tagName: 'strong',
                            value: 'getProps(descriptions?: boolean)',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.3.1',
                                    value: 'Triggers a re-render of the component to reflect any state changes.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.3',
                            tagName: 'strong',
                            value: 'refresh()',
                        },
                        {
                            children: [
                                {
                                    id: '0.6.4.1',
                                    value: 'Assigns a set of properties to the component, triggering updates if necessary.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.4',
                            tagName: 'strong',
                            value: 'setProps(props: GenericObject)',
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
                                    value: ',',
                                },
                                {
                                    id: '0.7.1.4',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.7.1.5',
                                    value: ',',
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
                                                    value: '--kul-card-backdrop',
                                                },
                                                {
                                                    id: '0.7.1.0.0.1',
                                                    value: ': Sets the backdrop color of the component when visible. Defaults to rgba(0, 0, 0, 0.32).',
                                                },
                                            ],
                                            id: '0.7.1.0.0',
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
            value: 'KulCard',
        },
    ],
};

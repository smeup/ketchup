import { getAssetPath } from '@stencil/core';
import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { CardData } from './kul-showcase-card-declarations';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'card';

export const CARD_EXAMPLES: CardData = {
    a: {
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
                                    `./assets/media/color_splash.jpg`
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
                                                    value: '{ "nodes": [ { "cells": { "icon": { "shape": "image", "value": "widgets" }, "text1": { "value": "Title" }, "text2": { "value": "Subtitle"            }, "text3": { "value": "Description." } }, "id": "card" } ] }',
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
                                    value: 'This event is emitted during various lifecycle stages of the component. It carries a payload of type ',
                                },
                                {
                                    id: '0.4.0.1',
                                    value: 'KulEventPayload',
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
                                                                    id: '0.4.0.2.0.0.0.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'click',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.0.1',
                                                                    value: ': emitted when the component is clicked.',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.0',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.2.0.0.1.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'kul-event',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.1.1',
                                                                    value: ': emitted by other kul-components wrapped inside the card.',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.1',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.2.0.0.2.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'pointerdown',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.2.1',
                                                                    value: ': emitted when as soon as the component is touched/clicked (before the click event).',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.2',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.2.0.0.3.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.3.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.3',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                    ],
                                                    id: '0.4.0.2.0.0',
                                                    value: '',
                                                },
                                            ],
                                            id: '0.4.0.2.0',
                                            value: '',
                                        },
                                    ],
                                    id: '0.4.0.2',
                                    value: ', which includes information about the component and the event type.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.0',
                            tagName: 'strong',
                            value: 'kul-showcase-card-event',
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
            value: 'KulCard',
        },
    ],
};

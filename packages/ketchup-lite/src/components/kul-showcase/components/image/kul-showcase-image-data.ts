import { getAssetPath } from '@stencil/core';
import { SHOWCASE_DOC, random2digitsNumber } from '../../kul-showcase-utils';
import { ImageData } from './kul-showcase-image-declarations';
import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';

const component = 'image';
const image = getAssetPath(`./assets/media/color_splash.jpg`);

export const IMAGE_EXAMPLES: ImageData = {
    badge: {
        ['data-description']: 'Image with badge',
        kulBadgeProps: { kulLabel: random2digitsNumber().toString() },
        kulSizeX: '128px',
        kulSizeY: '128px',
        kulValue: image,
    },
    cover: {
        ['data-description']: 'Image set as cover of a container',
        className: 'kul-cover',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    fit: {
        ['data-description']: 'Image fitting a container',
        className: 'kul-fit',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    icon: {
        ['data-description']: 'Icon',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
    image: {
        ['data-description']: 'Image',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: image,
    },
    style: {
        ['data-description']: 'Icon with custom style',
        ['data-dynamic']: 'custom',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
};

export const IMAGE_DOC: KulArticleDataset = {
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
                                            value: 'KulImage',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render images or icons based on a provided source or CSS variable.',
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
                                            value: 'KulImage',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulValue',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' property with the source URL of the image or the CSS variable for the icon.',
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
                                                    value: '<kul-image></kul-image>',
                                                },
                                            },
                                            id: '0.2.0.1.0',
                                            value: '',
                                        },
                                        {
                                            cells: {
                                                kulCode: {
                                                    shape: 'code',
                                                    kulLanguage: 'json',
                                                    value: '{ "kulValue": "path/to/image.jpg" }',
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
                                                                    value: 'load',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.1.1',
                                                                    value: ": emitted when the image is loaded (unless it's an icon).",
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
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.2.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.2',
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
                            value: 'kul-image-event',
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
            value: 'KulImage',
        },
    ],
};

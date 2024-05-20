import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { PhotoframeData } from './kul-showcase-photoframe-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { getAssetPath } from '@stencil/core';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'photoframe';

const placeholder = getAssetPath(`./assets/media/blur_color_splash.jpg`);
const value = getAssetPath(`./assets/media/color_splash.jpg`);
const kulPlaceholder = {
    alt: null,
    src: placeholder,
};
const kulValue = {
    alt: null,
    src: value,
};

export const PHOTOFRAME_EXAMPLES: PhotoframeData = {
    simple: {
        ['data-description']: 'Simple photoframe',
        kulPlaceholder,
        kulValue,
    },
    style: {
        ['data-description']: 'Photoframe with custom style',
        'data-dynamic': 'custom',
        kulPlaceholder,
        kulValue,
    },
};

export const PHOTOFRAME_DOC: KulArticleDataset = {
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
                                            value: 'KulPhotoframe',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: " component's function is to display a photo only when it enters the viewport. Until then, a placeholder is displayed.",
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
                                            value: 'KulPhotoframe',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulPlaceholder',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            value: ' and ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulValue',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' properties, which should contain respectively the placeholder image and the actual image you want to display.',
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
                                                    value: '<kul-photoframe></kul-photoframe>',
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
                                    value: 'This event is emitted during various lifecycle stages of the component. It carries a payload of type ',
                                },
                                {
                                    id: '0.4.0.1',
                                    value: 'KulPhotoframeEventPayload',
                                },
                                {
                                    id: '0.4.0.2',
                                    value: ', which includes information about the component, its state and the event type.',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'strong',
                                                            value: 'load',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.1',
                                                            value: ': emitted when either the placeholder or the image are loaded. The difference is made by the ',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'strong',
                                                            value: 'isPlaceholder',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            value: ' boolean flag inside the ',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'strong',
                                                            value: 'detail',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            value: ' of the event.',
                                                        },
                                                    ],
                                                    id: '0.4.0.3.0.0',
                                                    tagName: 'li',
                                                    value: '',
                                                },
                                                {
                                                    children: [
                                                        {
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'strong',
                                                            value: 'ready',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.1',
                                                            value: ': emitted when the component completes its first complete lifecycle.',
                                                        },
                                                    ],
                                                    id: '0.4.0.3.0.0',
                                                    tagName: 'li',
                                                    value: '',
                                                },
                                            ],
                                            id: '0.4.0.3.0',
                                            value: '',
                                        },
                                    ],
                                    id: '0.4.0.3',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.0',
                            tagName: 'strong',
                            value: 'kul-photoframe-event',
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
            value: 'KulPhotoframe',
        },
    ],
};

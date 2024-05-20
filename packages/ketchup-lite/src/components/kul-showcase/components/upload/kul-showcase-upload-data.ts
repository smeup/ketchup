import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';
import { UploadData } from './kul-showcase-upload-declarations';

const component = 'upload';

export const UPLOAD_EXAMPLES: UploadData = {
    simple: {
        ['data-description']: 'Simple upload component',
    },
    style: {
        ['data-description']: 'Upload component with custom style',
        ['data-dynamic']: 'custom',
    },
};

export const UPLOAD_DOC: KulArticleDataset = {
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
                                            value: 'KulUpload',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a customizable and reusable web component designed to handle file uploads.',
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
                                            value: 'KulUpload',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and optionally set the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulLabel',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: " property to customize the button's label.",
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
                                                    value: '<kul-upload></kul-upload>',
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
                                    value: 'KulUploadEventPayload',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.4.0.2.0.0',
                                                    tagName: 'strong',
                                                    value: 'pointerdown',
                                                },
                                                {
                                                    id: '0.4.0.2.0.1',
                                                    value: ': emitted when as soon as the component is touched/clicked (before the click event).',
                                                },
                                            ],
                                            id: '0.4.0.2.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.4.0.2.1.0',
                                                    tagName: 'strong',
                                                    value: 'ready',
                                                },
                                                {
                                                    id: '0.4.0.2.1.1',
                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                },
                                            ],
                                            id: '0.4.0.2.1',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.4.0.2.2.0',
                                                    tagName: 'strong',
                                                    value: 'upload',
                                                },
                                                {
                                                    id: '0.4.0.2.2.1',
                                                    value: ': emitted when new files are uploaded.',
                                                },
                                            ],
                                            id: '0.4.0.2.2',
                                            tagName: 'li',
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
                            value: 'kul-upload-event',
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
            value: 'KulUpload',
        },
    ],
};

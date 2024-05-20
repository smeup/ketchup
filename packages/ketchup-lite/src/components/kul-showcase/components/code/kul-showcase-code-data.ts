import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';
import { CodeData } from './kul-showcase-code-declarations';

const component = 'code';

export const CODE_EXAMPLES: CodeData = {
    simple: {
        ['data-description']: 'Simple code component',
        kulValue:
            "const dom = document.documentElement;\ndom.ketchupLiteInit = {\n   theme: { name: 'night' },\n};",
    },
    style: {
        ['data-description']: 'Code with custom style',
        ['data-dynamic']: 'custom',
    },
};

export const CODE_DOC: KulArticleDataset = {
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
                                            value: 'KulCode',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a customizable web component designed to display code snippets with syntax highlighting.',
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
                                            value: 'KulCode',
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
                                            value: ' property with the code snippet you wish to display.',
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
                                                    value: '<kul-code kul-value="console.log(\'Hello, World!\');"></kul-code>',
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
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.4.0.2.0.0.0.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.4.0.2.0.0.0',
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
                            value: 'kul-code-event',
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
            value: 'KulCode',
        },
    ],
};

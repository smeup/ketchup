import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulDataDataset } from '../../../../components';
import { TreeData } from './kul-showcase-tree-declarations';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'tree';

const kulData: KulDataDataset = {
    nodes: [
        {
            id: '0001',
            value: 'Depth 0 (0)',
            icon: 'filter_1',
            children: [
                {
                    id: '0002',
                    value: 'Depth 1 (0)',
                    icon: 'filter_2',
                    children: [
                        {
                            id: '00021',
                            value: 'Depth 2 (0)',
                            icon: 'filter_3',
                            children: [
                                {
                                    id: '000211',
                                    value: 'Depth 3 (0)',
                                    icon: 'filter_4',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '00022',
            value: 'Depth 0 (1)',
            icon: 'filter_2',
            children: [
                {
                    id: '000221',
                    value: 'Depth 1 (0)',
                    icon: 'filter_3',
                    children: [
                        {
                            id: '000222',
                            value: 'Depth 2 (0)',
                            icon: 'filter_4',
                        },
                    ],
                },
            ],
        },
        {
            id: '0003',
            value: 'Depth 0 (2)',
            icon: 'filter_2',
            children: [
                {
                    id: '00031',
                    value: 'Depth 1 (0)',
                    icon: 'filter_3',
                },
            ],
        },
        {
            id: '0004',
            value: 'Depth 0 (3)',
            icon: 'filter_2',
            children: [
                {
                    id: '00041',
                    value: 'Depth 1 (0)',
                    icon: 'filter_3',
                    children: [
                        {
                            id: '000411',
                            value: 'Depth 2 (0)',
                            icon: 'filter_4',
                            children: [
                                {
                                    id: '0004111',
                                    value: 'Depth 3 (0)',
                                    icon: 'filter_5',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export const TREE_EXAMPLES: TreeData = {
    simple: {
        ['data-description']: 'Simple tree',
        kulData,
    },
    style: {
        ['data-description']: 'Tree with custom style',
        ['data-dynamic']: 'custom',
        kulData,
    },
};

export const TREE_DOC: KulArticleDataset = {
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
                                            value: 'KulTree',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render a tree based on a JSON structure. ',
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
                                            value: 'KulTree',
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
                                            value: ' property with the JSON structure representing the tree.',
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
                                                    value: '<kul-tree></kul-tree>',
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
                                                    value: '{ "nodes": [{"value": "Node 1", "id": "0"}, {"value": "Node 2", "id": "1"}]}',
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
                                    value: 'KulTreeEventPayload',
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
                                                            value: 'click',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.1',
                                                            value: ': emitted when a node is clicked.',
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
                                                            value: 'pointerdown',
                                                        },
                                                        {
                                                            id: '0.4.0.3.0.0.1',
                                                            value: ': emitted when as soon as a node is touched/clicked (before the click event).',
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
                            value: 'kul-tree-event',
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
            value: 'KulTree',
        },
    ],
};

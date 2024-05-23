import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { TabbarData } from './kul-showcase-tabbar-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulDataDataset } from '../../../../components';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'tabbar';

const kulData: KulDataDataset = {
    nodes: [
        { id: '0', value: 'First tab' },
        {
            description: 'Second tab (title)',
            id: '1',
            value: 'Second tab (title)',
        },
        { icon: 'widgets', id: '1', value: 'Third tab (icon)' },
    ],
};

export const TABBAR_EXAMPLES: TabbarData = {
    simple: {
        ['data-description']: 'Simple tab bar',
        kulData,
    },
    style: {
        ['data-description']: 'Tab bar with custom style',
        'data-dynamic': 'custom',
        kulData,
    },
};

export const TABBAR_DOC: KulArticleDataset = {
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
                                            value: 'KulTabbar',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render tab bars based on a JSON structure. ',
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
                                            value: 'KulTabbar',
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
                                            value: ' property with the JSON structure representing the tab bar.',
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
                                                    value: '<kul-tabbar></kul-tabbar>',
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
                                                    value: '{ "nodes": [{"value": "Tab 1", "id": "0"}, {"value": "Tab 2", "id": "1"}]}',
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
                                    value: 'KulTabbarEventPayload',
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
                                                            value: ': emitted when a tab is clicked.',
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
                                                            value: ': emitted when as soon as the component is touched/clicked (before the click event).',
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
                            value: 'kul-tabbar-event',
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
            value: 'KulTabbar',
        },
    ],
};

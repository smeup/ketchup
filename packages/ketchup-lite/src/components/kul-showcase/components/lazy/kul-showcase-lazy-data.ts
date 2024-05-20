import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { LazyData } from './kul-showcase-lazy-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulButtonPropsInterface } from '../../../kul-button/kul-button-declarations';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'lazy';

export const LAZY_EXAMPLES: LazyData = {
    simple: {
        ['data-description']: 'Simple tab bar',
        kulComponentName: 'kul-button',
        kulComponentProps: { kulLabel: 'Button' } as KulButtonPropsInterface,
    },
    style: {
        ['data-description']: 'Tab bar with custom style',
        'data-dynamic': 'custom',
        kulComponentName: 'kul-button',
        kulComponentProps: { kulLabel: 'Button' } as KulButtonPropsInterface,
    },
};

export const LAZY_DOC: KulArticleDataset = {
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
                                            value: 'KulLazy',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: " component's main purpose is to prevent long page loading times, displaying a placeholder until it's relevant to switch to the actual component.",
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
                                            value: 'KulLazy',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the name of the inner component through the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulComponentName',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' property and its related properties through ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulComponentProps',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: '.',
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
                                                    value: '<kul-lazy></kul-lazy>',
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
                                    value: 'KulLazyEventPayload',
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
                                                            value: ': emitted when the inner component is loaded.',
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
                            value: 'kul-lazy-event',
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
            value: 'KulLazy',
        },
    ],
};

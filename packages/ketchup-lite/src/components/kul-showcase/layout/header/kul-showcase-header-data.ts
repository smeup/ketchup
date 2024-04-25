import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import {
    HEADER_IFRAME_MOCK,
    HEADER_IFRAME_MOCK_STYLE,
} from '../../assets/mock-ups/header';
import { DOC_STYLES } from '../../kul-showcase-data';
import { HeaderData } from './kul-showcase-header-declarations';

export const HEADER_EXAMPLES: HeaderData = {
    simple: {
        ['data-description']: 'Simple header component',
        iframeProps: {
            height: '100%',
            srcDoc: HEADER_IFRAME_MOCK,
            width: '100%',
        },
    },
    style: {
        ['data-description']: 'Header with custom style',
        ['data-dynamic']: 'custom',
        iframeProps: {
            height: '100%',
            srcDoc: HEADER_IFRAME_MOCK_STYLE,
            width: '100%',
        },
    },
};

export const HEADER_DOC: KulArticleDataset = {
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
                                            value: 'KulHeader',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a simple element with a header styling which receives a .',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            tagName: 'strong',
                                            value: 'slot',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            value: '.',
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
                                    id: '0.1.1.0',
                                    tagName: 'strong',
                                    value: 'Customizable Styling',
                                },
                                {
                                    id: '0.1.1.1',
                                    value: ": Offers the ability to customize the component's style through the ",
                                },
                                {
                                    id: '0.1.1.2',
                                    tagName: 'strong',
                                    value: 'kulStyle',
                                },
                                {
                                    id: '0.1.1.3',
                                    value: ' property.',
                                },
                            ],
                            id: '0.1.1',
                            tagName: 'li',
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
                                            value: 'KulHeader',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'slot',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' that must be displayed inside it.',
                                        },
                                    ],
                                    id: '0.2.0.0',
                                },
                                {
                                    children: [
                                        {
                                            cells: {
                                                header: {
                                                    shape: 'code',
                                                    shapeProps: {
                                                        kulLanguage: 'markup',
                                                    },
                                                    value: '<kul-header>\n   <div class="slot">\n      <kul-button kul-icon="menu" kul-styling="icon"></kul-button>\n   </div>\n</kul-header>',
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
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.1.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.1.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.1.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.1.1.0',
                                            value: "Enables customization of the component's style. This property accepts a string of CSS styles that will be applied to the component.",
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.1',
                            value: 'kulStyle',
                        },
                    ],
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
                            value: 'kul-header-event',
                        },
                    ],
                    id: '0.4',
                    value: 'Events',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.5.0.0',
                                    value: 'Returns a promise that resolves to a ',
                                },
                                {
                                    id: '0.5.0.1',
                                    tagName: 'strong',
                                    value: 'KulDebugComponentInfo',
                                },
                                {
                                    id: '0.5.0.2',
                                    value: " object containing debug information about the component's rendering process.",
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'getDebugInfo()',
                        },
                        {
                            children: [
                                {
                                    id: '0.5.1.0',
                                    value: 'Returns a promise that resolves to an object where each key is a property name, optionally with its description.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.1',
                            tagName: 'strong',
                            value: 'getProps(descriptions?: boolean)',
                        },
                        {
                            children: [
                                {
                                    id: '0.5.2.0',
                                    value: 'Triggers a re-render of the component to reflect any state changes.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.2',
                            tagName: 'strong',
                            value: 'refresh()',
                        },
                    ],
                    id: '0.5',
                    value: 'Methods',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.6.0.0',
                                    value: 'The component utilizes various lifecycle hooks to manage its state and behavior. These include ',
                                },
                                {
                                    id: '0.6.0.1',
                                    tagName: 'strong',
                                    value: 'componentWillLoad',
                                },
                                {
                                    id: '0.6.0.2',
                                    value: ', ',
                                },
                                {
                                    id: '0.6.0.3',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.6.0.4',
                                    value: ', ',
                                },
                                {
                                    id: '0.6.0.5',
                                    tagName: 'strong',
                                    value: 'componentWillRender',
                                },
                                {
                                    id: '0.6.0.6',
                                    value: ' and ',
                                },
                                {
                                    id: '0.6.0.7',
                                    tagName: 'strong',
                                    value: 'componentDidRender',
                                },
                            ],
                            id: '0.6.0',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.6',
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
                                {
                                    cells: {
                                        header: {
                                            shape: 'code',
                                            shapeProps: {
                                                kulLanguage: 'markup',
                                            },
                                            value: '<kul-header kul-style="#kul-component { opacity: 0.5; }"></kul-header>',
                                        },
                                    },
                                    id: '0.7.0.3',
                                    value: '',
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
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-header-box-shadow',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Box shadow of the component. Defaults to 0 2px 4px -1px rgba(128, 128, 128, 0.2), 0 4px 5px 0 rgba(128, 128, 128, 0.14), 0 1px 10px 0 rgba(128, 128, 128, 0.12).',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-header-padding',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Padding of the component. Defaults to 8px 12px.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-header-position',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': CSS positioning of the component. Defaults to fixed.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-header-transition',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Transition time of the component. Defaults to 250ms.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-header-width',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Width of the component. Defaults to 100%.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
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
                                    id: '0.8.0.0',
                                    value: 'The ',
                                },
                                {
                                    id: '0.8.0.1',
                                    tagName: 'strong',
                                    value: 'KulHeader',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: " component is a simple yet useful layouting tool to wrap your app's header content.",
                                },
                            ],
                            id: '0.8.0',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.8',
                    value: 'Conclusion',
                },
            ],
            id: '0',
            value: 'KulHeader',
        },
    ],
};

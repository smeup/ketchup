import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { CodeData } from './kul-showcase-code-declarations';

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
                                        { id: '0.1.1.1.1', value: 'The ' },
                                        {
                                            id: '0.1.1.2',
                                            tagName: 'strong',
                                            value: 'KulCode',
                                        },
                                        {
                                            id: '0.1.1.3',
                                            value: ' component is a customizable web component designed to display code snippets with syntax highlighting. It is part of the Ketchup Lite library, a collection of reusable web components aimed at enhancing web development with encapsulated UI elements. This component is built using Stencil, a compiler that generates Web Components, and is designed to work seamlessly across different frameworks and platforms.',
                                        },
                                    ],
                                    id: '0.1.1.1',
                                },
                            ],
                            id: '0.1.1',
                        },
                    ],
                    id: '0.1',
                    value: 'Overview',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '0.1.1.1',
                                    tagName: 'strong',
                                    value: 'Syntax Highlighting',
                                },
                                {
                                    id: '0.1.1.2',
                                    value: ': Utilizes Prism.js for syntax highlighting, supporting various programming languages.',
                                },
                            ],
                            id: '0.1.1',
                            tagName: 'li',
                        },
                        {
                            children: [
                                {
                                    id: '0.1.1.1',
                                    tagName: 'strong',
                                    value: 'Customizable Styling',
                                },
                                {
                                    id: '0.1.1.2',
                                    value: ": Offers the ability to customize the component's style through the ",
                                },
                                {
                                    id: '0.1.1.3',
                                    tagName: 'strong',
                                    value: 'kulStyle',
                                },
                                {
                                    id: '0.1.1.4',
                                    value: ' property.',
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
                        },
                        {
                            children: [
                                {
                                    id: '0.1.2.1',
                                    tagName: 'strong',
                                    value: 'Copy to Clipboard',
                                },
                                {
                                    id: '0.1.2.2',
                                    value: ': Includes a button to copy the displayed code snippet to the clipboard.',
                                },
                            ],
                            id: '0.2.1',
                            tagName: 'li',
                        },
                    ],
                    id: '0.2',
                    value: 'Features',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.1.1.1',
                                            value: 'To use the ',
                                        },
                                        {
                                            id: '0.3.1.1.2',
                                            tagName: 'strong',
                                            value: 'KulCode',
                                        },
                                        {
                                            id: '0.3.1.1.3',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.3.1.1.4',
                                            tagName: 'strong',
                                            value: 'kulValue',
                                        },
                                        {
                                            id: '0.3.1.1.5',
                                            value: ' property with the code snippet you wish to display.',
                                        },
                                    ],
                                    id: '0.3.1.1',
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
                                            id: '0.3.1.2.1',
                                            value: '',
                                        },
                                    ],
                                    id: '0.3.1.2',
                                },
                            ],
                            id: '0.3.1',
                            value: 'Basic Usage',
                        },
                    ],
                    id: '0.3',
                    value: 'Usage',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        { id: '0.4.1.2.1', value: 'Type:' },
                                        {
                                            id: '0.4.1.1.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.4.1.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.1.2.1',
                                            value: 'The code snippet to be displayed. This property accepts a string of code.',
                                        },
                                    ],
                                    id: '0.4.1.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.1',
                            value: 'kulValue',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        { id: '0.4.2.1.1', value: 'Type:' },
                                        {
                                            id: '0.4.2.1.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.4.2.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.2.2.1',
                                            value: "Enables customization of the component's style. This property accepts a string of CSS styles that will be applied to the component.",
                                        },
                                    ],
                                    id: '0.4.2.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.2',
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
                            value: 'kul-code-event',
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
                                    value: ', ',
                                },
                                {
                                    id: '0.7.1.4',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.7.1.5',
                                    value: ', ',
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
                                    id: '0.8.1.1',
                                    value: 'The ',
                                },
                                {
                                    id: '0.8.1.2',
                                    tagName: 'strong',
                                    value: 'KulCode',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' component is a powerful tool for displaying code snippets with syntax highlighting. Its customizable styling and event handling capabilities make it a versatile choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
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
            value: 'KulCode',
        },
    ],
};

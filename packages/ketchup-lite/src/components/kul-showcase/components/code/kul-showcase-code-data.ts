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
                                    id: '0.1.0.0',
                                    tagName: 'strong',
                                    value: 'Syntax Highlighting',
                                },
                                {
                                    id: '0.1.0.1',
                                    value: ': Utilizes Prism.js for syntax highlighting, supporting various programming languages.',
                                },
                            ],
                            id: '0.1.0',
                            tagName: 'li',
                        },
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
                        {
                            children: [
                                {
                                    id: '0.1.2.0',
                                    tagName: 'strong',
                                    value: 'Copy to Clipboard',
                                },
                                {
                                    id: '0.1.2.1',
                                    value: ': Includes a button to copy the displayed code snippet to the clipboard.',
                                },
                            ],
                            id: '0.1.2',
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
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.0.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.0.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.0.1.0',
                                            value: 'The code snippet to be displayed. This property accepts a string of code.',
                                        },
                                    ],
                                    id: '0.3.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.0',
                            value: 'kulValue',
                        },
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
                            value: 'kul-code-event',
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
                                        code: {
                                            shape: 'code',
                                            shapeProps: {
                                                kulLanguage: 'markup',
                                            },
                                            value: '<kul-code kul-style="#kul-component { opacity: 0.5; }"></kul-code>',
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
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-code-background-color',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Sets the background color of the component. Defaults to rgba(var(--kul-background-color-rgb) 0.275).',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.1.0',
                                            tagName: 'strong',
                                            value: '--kul-code-font-family',
                                        },
                                        {
                                            id: '0.7.1.1.1',
                                            value: ': Sets the font family of the component. Defaults to var(--kul-font-family-monospace).',
                                        },
                                    ],
                                    id: '0.7.1.1',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.2.0',
                                            tagName: 'strong',
                                            value: '--kul-code-header-background-color',
                                        },
                                        {
                                            id: '0.7.1.2.1',
                                            value: ': Sets the background color of the header. Defaults to var(--kul-title-background-color).',
                                        },
                                    ],
                                    id: '0.7.1.2',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.3.0',
                                            tagName: 'strong',
                                            value: '--kul-code-header-color',
                                        },
                                        {
                                            id: '0.7.1.3.1',
                                            value: ': Sets the color of the header. Defaults to var(--kul-title-color).',
                                        },
                                    ],
                                    id: '0.7.1.3',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.4.0',
                                            tagName: 'strong',
                                            value: '--kul-code-selection-background-color',
                                        },
                                        {
                                            id: '0.7.1.4.1',
                                            value: ': Sets the background color of selected text. Defaults to rgba(var(--kul-border-color-rgb, 0.275)).',
                                        },
                                    ],
                                    id: '0.7.1.4',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.5.0',
                                            tagName: 'strong',
                                            value: '--kul-code-text-color',
                                        },
                                        {
                                            id: '0.7.1.5.1',
                                            value: ': Sets the color of the text. Defaults to var(--kul-text-color).',
                                        },
                                    ],
                                    id: '0.7.1.5',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.6.0',
                                            tagName: 'strong',
                                            value: '--kul-code-token-color-1',
                                        },
                                        {
                                            id: '0.7.1.6.1',
                                            value: ': Sets the background color of: boolean, constant, deleted, number, property, symbol, tag. Defaults to rgb(231, 0, 127).',
                                        },
                                    ],
                                    id: '0.7.1.6',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.7.0',
                                            tagName: 'strong',
                                            value: '--kul-code-token-color-2',
                                        },
                                        {
                                            id: '0.7.1.7.1',
                                            value: ': Sets the background color of: attr-name, builtin, char, inserted, selector, string. Defaults to rgb(146, 219, 0).',
                                        },
                                    ],
                                    id: '0.7.1.7',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.8.0',
                                            tagName: 'strong',
                                            value: '--kul-code-token-color-3',
                                        },
                                        {
                                            id: '0.7.1.8.1',
                                            value: ': Sets the background color of: atrule, attr-value, keyword. Defaults to rgb(0, 165, 236).',
                                        },
                                    ],
                                    id: '0.7.1.8',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.9.0',
                                            tagName: 'strong',
                                            value: '--kul-code-token-color-4',
                                        },
                                        {
                                            id: '0.7.1.9.1',
                                            value: ': Sets the background color of: class-name, function. Defaults to #ff6363.',
                                        },
                                    ],
                                    id: '0.7.1.9',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: {
                                                '--kul_article_content_color':
                                                    'var(--kul-primary-color)',
                                                '--kul_article_content_font_family':
                                                    'var(--kul-font-family-monospace)',
                                            },
                                            id: '0.7.1.10.0',
                                            tagName: 'strong',
                                            value: '--kul-code-token-color-5',
                                        },
                                        {
                                            id: '0.7.1.10.1',
                                            value: ': Sets the background color of: important, regex, variable. Defaults to rgb(255, 196, 86).',
                                        },
                                    ],
                                    id: '0.7.1.10',
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
                                    value: 'KulCode',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' component is a powerful tool for displaying code snippets with syntax highlighting. Its customizable styling and event handling capabilities make it a versatile choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
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
            value: 'KulCode',
        },
    ],
};

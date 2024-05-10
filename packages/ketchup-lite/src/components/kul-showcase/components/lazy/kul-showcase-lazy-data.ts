import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { LazyData } from './kul-showcase-lazy-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulButtonPropsInterface } from '../../../kul-button/kul-button-declarations';

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
                                            children: [
                                                {
                                                    id: '0.1.0.1.0.0',
                                                    tagName: 'strong',
                                                    value: 'Customizable Styling',
                                                },
                                                {
                                                    id: '0.1.0.1.0.1',
                                                    value: ": Offers the ability to customize the component's style through the ",
                                                },
                                                {
                                                    id: '0.1.0.1.0.2',
                                                    tagName: 'strong',
                                                    value: 'kulStyle',
                                                },
                                                {
                                                    id: '0.1.0.1.0.3',
                                                    value: ' property.',
                                                },
                                            ],
                                            id: '0.1.0.1.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.2.0.0',
                                                    tagName: 'strong',
                                                    value: 'Debug Information',
                                                },
                                                {
                                                    id: '0.1.0.2.0.1',
                                                    value: ": Provides debug information about the component's rendering process, useful for development and debugging purposes.",
                                                },
                                            ],
                                            id: '0.1.0.2.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.2',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    id: '0.1.0.3.0.0',
                                                    tagName: 'strong',
                                                    value: 'Event handling',
                                                },
                                                {
                                                    id: '0.1.0.3.0.1',
                                                    value: ': Emits custom events for various lifecycle stages, allowing for integration with other components or frameworks.',
                                                },
                                            ],
                                            id: '0.1.0.3.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.3',
                                    value: '',
                                },
                            ],
                            id: '0.1.0',
                            value: '',
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
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.0.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.0.0.1',
                                            tagName: 'strong',
                                            value: 'String',
                                        },
                                    ],
                                    id: '0.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.0.1.0',
                                            value: 'The tag name of the component to be lazy loaded.',
                                        },
                                        {
                                            id: '0.0.1.1',
                                            tagName: 'strong',
                                            value: 'kulComponentName',
                                        },
                                    ],
                                    id: '0.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.0',
                            value: 'kulComponentName',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.1.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.1.0.1',
                                            tagName: 'strong',
                                            value: 'Object',
                                        },
                                    ],
                                    id: '0.1.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.1.1.0',
                                            value: 'The data of the component to be lazy loaded.',
                                        },
                                        {
                                            id: '0.1.1.1',
                                            tagName: 'strong',
                                            value: 'kulComponentProps',
                                        },
                                    ],
                                    id: '0.1.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.1',
                            value: 'kulComponentProps',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.2.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.2.0.1',
                                            tagName: 'strong',
                                            value: 'String',
                                        },
                                    ],
                                    id: '0.2.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.2.1.0',
                                            value: 'Decides when the sub-component should be rendered.',
                                        },
                                        {
                                            id: '0.2.1.1',
                                            tagName: 'strong',
                                            value: 'kulRenderMode',
                                        },
                                    ],
                                    id: '0.2.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.2',
                            value: 'kulRenderMode',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.0.1',
                                            tagName: 'strong',
                                            value: 'Boolean',
                                        },
                                    ],
                                    id: '0.3.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.1.0',
                                            value: 'Displays an animated SVG placeholder until the component is loaded.',
                                        },
                                        {
                                            id: '0.3.1.1',
                                            tagName: 'strong',
                                            value: 'kulShowPlaceholder',
                                        },
                                    ],
                                    id: '0.3.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3',
                            value: 'kulShowPlaceholder',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.0.1',
                                            tagName: 'strong',
                                            value: 'String',
                                        },
                                    ],
                                    id: '0.4.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.1.0',
                                            value: 'Customizes the style of the component.',
                                        },
                                        {
                                            id: '0.4.1.1',
                                            tagName: 'strong',
                                            value: 'kulStyle',
                                        },
                                    ],
                                    id: '0.4.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4',
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
                    children: [
                        {
                            children: [
                                {
                                    id: '0.5.0.0',
                                    value: 'Returns a promise resolving to the inner component.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'getComponent()',
                        },
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
                                            value: '<kul-lazy kul-style="#kul-component { max-width: 20vw; }"></kul-lazy>',
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
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-animation-time',
                                                },
                                                {
                                                    id: '0.7.1.0.12.1',
                                                    value: ': Sets the duration of the animation. Defaults to 2s.',
                                                },
                                            ],
                                            id: '0.7.1.0.12',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.1.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-height',
                                                },
                                                {
                                                    id: '0.7.1.0.12.2',
                                                    value: ': Sets the height of the component and subcomponent. Defaults to 100%.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.2.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-hor-alignment',
                                                },
                                                {
                                                    id: '0.7.1.0.12.3',
                                                    value: ': Sets the horizontal alignment of the subcomponent. Defaults to center.',
                                                },
                                            ],
                                            id: '0.7.1.0.14',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.3.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-placeholder-color',
                                                },
                                                {
                                                    id: '0.7.1.0.12.4',
                                                    value: ': Sets the color of the placeholder icon. Defaults to var(--kul-icon-color).',
                                                },
                                            ],
                                            id: '0.7.1.0.15',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.4.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-ver-alignment',
                                                },
                                                {
                                                    id: '0.7.1.0.12.5',
                                                    value: ': Sets the vertical alignment of the subcomponent. Defaults to center.',
                                                },
                                            ],
                                            id: '0.7.1.0.16',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.5.0',
                                                    tagName: 'strong',
                                                    value: '--kul-lazy-width',
                                                },
                                                {
                                                    id: '0.7.1.0.12.6',
                                                    value: ': Sets the width of the component and subcomponent. Defaults to 100%.',
                                                },
                                            ],
                                            id: '0.7.1.0.17',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.7.1.0',
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
                                    value: 'KulLazy',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' is a useful component which serves as a placeholder until it enters the viewport.',
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
            value: 'KulLazy',
        },
    ],
};

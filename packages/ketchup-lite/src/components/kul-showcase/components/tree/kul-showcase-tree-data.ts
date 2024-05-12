import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulDataDataset } from '../../../../components';
import { TreeData } from './kul-showcase-tree-declarations';

const kulData: KulDataDataset = {
    nodes: [
        {
            children: [
                {
                    children: [],
                    id: '00100',
                    value: 'First node',
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [],
                                    icon: 'account',
                                    id: '0010300',
                                    value: 'FIOGIA30',
                                },
                            ],
                            icon: 'favorite',
                            id: '001201',
                            value: 'Second node item',
                        },
                    ],
                    icon: 'filter_2',
                    id: '00111',
                    value: 'Second node',
                },
            ],
            icon: 'widgets',
            id: '0005',
            value: 'Demo',
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
        'data-dynamic': 'custom',
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
                                            children: [
                                                {
                                                    id: '0.1.0.0.0.0',
                                                    tagName: 'strong',
                                                    value: 'Dynamic Content Rendering',
                                                },
                                                {
                                                    id: '0.1.0.0.0.1',
                                                    value: ': The component dynamically generates a ',
                                                },
                                                {
                                                    id: '0.1.0.0.0.2',
                                                    tagName: 'strong',
                                                    value: '<kul-tree>',
                                                },
                                                {
                                                    id: '0.1.0.0.0.3',
                                                    value: ' element based on the JSON structure provided.',
                                                },
                                            ],
                                            id: '0.1.0.0.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.1.0.0',
                                    value: '',
                                },
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
                                            value: ' property with the JSON structure representing the tab bar.',
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
                                                    value: '<kul-tree></kul-tree>',
                                                },
                                            },
                                            id: '0.2.0.1.0',
                                            value: '',
                                        },
                                        {
                                            cells: {
                                                code: {
                                                    shape: 'code',
                                                    shapeProps: {
                                                        kulLanguage: 'json',
                                                    },
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
                                            value: 'KulTreeDataset',
                                        },
                                    ],
                                    id: '0.3.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.0.1.0',
                                            value: 'The actual data of the tab bar. This property should be an object that matches the ',
                                        },
                                        {
                                            id: '0.3.0.1.1',
                                            tagName: 'strong',
                                            value: 'KulTreeDataset',
                                        },
                                        {
                                            id: '0.3.0.1.2',
                                            value: ' interface, which includes a ',
                                        },
                                        {
                                            id: '0.3.0.1.3',
                                            tagName: 'strong',
                                            value: 'nodes',
                                        },
                                        {
                                            id: '0.3.0.1.4',
                                            value: ' array representing the structure of the tab bar.',
                                        },
                                    ],
                                    id: '0.3.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.0',
                            value: 'kulData',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.4.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.4.0.1',
                                            tagName: 'strong',
                                            value: 'boolean',
                                        },
                                    ],
                                    id: '0.3.4.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.4.1.0',
                                            value: 'When set to true, the pointerdown event will trigger a ripple effect.',
                                        },
                                    ],
                                    id: '0.3.4.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.4',
                            value: 'kulRipple',
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
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.2.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.2.0.1',
                                            tagName: 'strong',
                                            value: 'number',
                                        },
                                    ],
                                    id: '0.3.2.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.2.1.0',
                                            value: "Sets the initially selected node's index.",
                                        },
                                    ],
                                    id: '0.3.2.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.2',
                            value: 'kulValue',
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
                            value: 'kul-tree-event',
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
                                    value: ' Returns the selected node and its index.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.2',
                            tagName: 'strong',
                            value: 'getValue()',
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
                        {
                            children: [
                                {
                                    id: '0.5.2.0',
                                    value: ' Sets the value of the component based on the provided argument.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.2',
                            tagName: 'strong',
                            value: 'setValue(value: number | string)',
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
                                            value: '<kul-tree kul-style="#kul-component { max-width: 20vw; }"></kul-tree>',
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
                                                    id: '0.7.1.0.9.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-backdrop-filter',
                                                },
                                                {
                                                    id: '0.7.1.0.9.1',
                                                    value: ': Sets the backdrop filter of tabs. Defaults to blur(3.5px).',
                                                },
                                            ],
                                            id: '0.7.1.0.9',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.10.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-backdrop-filter-hover',
                                                },
                                                {
                                                    id: '0.7.1.0.10.1',
                                                    value: ': Sets the backdrop filter of tabs when hovering. Defaults to blur(5px).',
                                                },
                                            ],
                                            id: '0.7.1.0.10',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.11.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-font-size',
                                                },
                                                {
                                                    id: '0.7.1.0.11.1',
                                                    value: ': Sets the font size of the tab bar. Defaults to the value of --kul-font-size.',
                                                },
                                            ],
                                            id: '0.7.1.0.11',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.12.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-font-weight',
                                                },
                                                {
                                                    id: '0.7.1.0.12.1',
                                                    value: ': Sets the font weight of the tab bar. Defaults to 500.',
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
                                                    id: '0.7.1.0.13.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-height',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the height of the tab bar. Defaults to 36px.',
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
                                                    id: '0.7.1.0.14.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-primary-color-rgb',
                                                },
                                                {
                                                    id: '0.7.1.0.14.1',
                                                    value: ': Sets the primary color of the tab bar in RGB format. Defaults to the value of --kul-primary-color-rgb.',
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
                                                    id: '0.7.1.0.15.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-primary-color',
                                                },
                                                {
                                                    id: '0.7.1.0.15.1',
                                                    value: ': Sets the primary color of the tab bar. Defaults to the value of --kul-primary-color.',
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
                                                    id: '0.7.1.0.16.0',
                                                    tagName: 'strong',
                                                    value: '--kul-tree-tab-padding',
                                                },
                                                {
                                                    id: '0.7.1.0.16.1',
                                                    value: ': Sets the padding of the tabs in the tab bar. Defaults to 0 24px.',
                                                },
                                            ],
                                            id: '0.7.1.0.16',
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
                                    value: 'KulTree',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' component is mostly used when there are multiple views, to easily switch between them.',
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
            value: 'KulTree',
        },
    ],
};

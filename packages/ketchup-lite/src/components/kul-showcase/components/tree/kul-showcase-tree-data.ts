import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulDataDataset } from '../../../../components';
import { TreeData } from './kul-showcase-tree-declarations';

const kulData: KulDataDataset = {
    nodes: [
        {
            id: '0001',
            value: 'Root Node',
            icon: 'filter_1',
            children: [
                {
                    id: '0002',
                    value: 'Child Node 1',
                    icon: 'filter_2',
                    children: [
                        {
                            id: '00021',
                            value: 'Grandchild Node 1',
                            icon: 'filter_3',
                            children: [
                                {
                                    id: '000211',
                                    value: 'Great-Grandchild Node 1',
                                    icon: 'filter_4',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: '00022',
                    value: 'Child Node 2',
                    icon: 'filter_2',
                    children: [
                        {
                            id: '000221',
                            value: 'Grandchild Node 2',
                            icon: 'filter_3',
                            children: [
                                {
                                    id: '000222',
                                    value: 'Great-Great-Grandchild Node 2',
                                    icon: 'filter_4',
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
                                            value: ' property with the JSON structure representing the tree.',
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
                                            value: 'Boolean',
                                        },
                                    ],
                                    id: '0.3.0.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.0.1.0',
                                            value: 'Sets whether the first level of depth will create an accordion-style appearance for nodes.',
                                        },
                                    ],
                                    id: '0.3.0.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.0',
                            value: 'kulAccordionLayout',
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
                                            value: 'KulDataDataset',
                                        },
                                    ],
                                    id: '0.3.1.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.1.1.0',
                                            value: 'The actual data of the tree. This property should be an object that matches the ',
                                        },
                                        {
                                            id: '0.3.1.1.1',
                                            tagName: 'strong',
                                            value: 'KulDataDataset',
                                        },
                                        {
                                            id: '0.3.1.1.2',
                                            value: ' interface, which includes a ',
                                        },
                                        {
                                            id: '0.3.1.1.3',
                                            tagName: 'strong',
                                            value: 'nodes',
                                        },
                                        {
                                            id: '0.3.1.1.4',
                                            value: ' array representing the structure of the tree.',
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.1',
                            value: 'kulData',
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
                                            value: 'Number',
                                        },
                                    ],
                                    id: '0.3.2.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.2.1.0',
                                            value: 'Sets the initial expanded nodes based on the specified depth.',
                                        },
                                    ],
                                    id: '0.3.2.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.2',
                            value: 'kulInitialExpandedDepth',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.3.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.3.0.1',
                                            tagName: 'strong',
                                            value: 'Boolean',
                                        },
                                    ],
                                    id: '0.3.3.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.3.1.0',
                                            value: 'When set to true, the pointerdown event will trigger a ripple effect.',
                                        },
                                    ],
                                    id: '0.3.3.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.3',
                            value: 'kulRipple',
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
                                            value: 'Boolean',
                                        },
                                    ],
                                    id: '0.3.4.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.4.1.0',
                                            value: 'When true, nodes can be selected.',
                                        },
                                    ],
                                    id: '0.3.4.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.4',
                            value: 'kulSelectable',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.5.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.5.0.1',
                                            tagName: 'strong',
                                            value: 'String',
                                        },
                                    ],
                                    id: '0.3.5.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.5.1.0',
                                            value: "Enables customization of the component's style.",
                                        },
                                    ],
                                    id: '0.3.5.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.5',
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
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-background-color',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the background color for top-level nodes (data-depth="0") when kul-accordion-layout is applied. Defaults to #ffffff.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.14.0',
                                                    value: '--kul-tree-accordion-border-radius',
                                                },
                                                {
                                                    id: '0.7.1.0.14.1',
                                                    value: ': Sets the border radius for top-level nodes (data-depth="0") when kul-accordion-layout is applied. Defaults to 4px.',
                                                },
                                            ],
                                            id: '0.7.1.0.14',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-color',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the text color for top-level nodes (data-depth="0") when kul-accordion-layout is applied. Defaults to #000000.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-font-size',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the font size for top-level nodes (data-depth="0") when kul-accordion-layout is applied. Defaults to 1.125em.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-hover-background-color',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the background color for top-level nodes (data-depth="0") on hover when kul-accordion-layout is applied. Defaults to var(--kul-primary-color).',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-hover-color',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the text color for top-level nodes (data-depth="0") on hover when kul-accordion-layout is applied. Defaults to var(--kul-text-on-primary-color).',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-accordion-node-height',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the height of top-level nodes (data-depth="0") when the tree has an accordion layout. Defaults to 4em.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-node-height',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the height for all nodes. Replaces the static value previously used. Defaults to 2em.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-backdrop-filter',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the backdrop filter of the tree. Defaults to blur(3.5px).',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-node-background-color-hover',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the background color when hovering a node. Defaults to rgba(var(--kul-primary-color-rgb), 0.175).',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-node-background-color-selected',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the background color of the selected node. Defaults to rgba(var(--kul-primary-color-rgb), 0.375).',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-node-padding',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the padding of nodes. Defaults to 0 1em.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    id: '0.7.1.0.13.0',
                                                    value: '--kul-tree-padding',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the padding of the tree. Defaults to 0.',
                                                },
                                            ],
                                            id: '0.7.1.0.13',
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
                                    value: ' component is a powerful webcomponent that visually represents a tree-like structure in JSON format.',
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

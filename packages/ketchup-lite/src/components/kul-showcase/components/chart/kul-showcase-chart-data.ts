import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { ChartData } from './kul-showcase-chart-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { KulDataDataset } from '../../../../components';

const kulData: KulDataDataset = {
    columns: [
        {
            id: 'Axis',
            title: 'Department',
            type: 'text',
        },
        {
            id: 'Series_1',
            title: 'Current Budget',
            type: 'text',
        },
        {
            id: 'Series_2',
            title: 'Projected Budget',
            type: 'text',
        },
        {
            id: 'Series_3',
            title: 'Allocated Budget',
            type: 'text',
        },
        {
            id: 'Series_4',
            title: 'Expenditures',
            type: 'text',
        },
        {
            id: 'Series_5',
            title: 'Savings',
            type: 'text',
        },
    ],
    nodes: [
        {
            cells: {
                Axis: {
                    value: 'Digital Marketing',
                },
                Series_1: {
                    value: '15000',
                },
                Series_2: {
                    value: '16000',
                },
                Series_3: {
                    value: '15500',
                },
                Series_4: {
                    value: '14500',
                },
                Series_5: {
                    value: '500',
                },
            },
            id: '0',
        },
        {
            cells: {
                Axis: {
                    value: 'E-commerce Sales',
                },
                Series_1: {
                    value: '8000',
                },
                Series_2: {
                    value: '9000',
                },
                Series_3: {
                    value: '8500',
                },
                Series_4: {
                    value: '7500',
                },
                Series_5: {
                    value: '1000',
                },
            },
            id: '1',
        },
        {
            cells: {
                Axis: {
                    value: 'Administrative Services',
                },
                Series_1: {
                    value: '6000',
                },
                Series_2: {
                    value: '6500',
                },
                Series_3: {
                    value: '6250',
                },
                Series_4: {
                    value: '6000',
                },
                Series_5: {
                    value: '250',
                },
            },
            id: '2',
        },
        {
            cells: {
                Axis: {
                    value: 'Product Development',
                },
                Series_1: {
                    value: '20000',
                },
                Series_2: {
                    value: '22000',
                },
                Series_3: {
                    value: '21000',
                },
                Series_4: {
                    value: '20500',
                },
                Series_5: {
                    value: '9500',
                },
            },
            id: '3',
        },
        {
            cells: {
                Axis: {
                    value: 'Customer Support',
                },
                Series_1: {
                    value: '10000',
                },
                Series_2: {
                    value: '11000',
                },
                Series_3: {
                    value: '10500',
                },
                Series_4: {
                    value: '10000',
                },
                Series_5: {
                    value: '500',
                },
            },
            id: '4',
        },
    ],
};

export const CHART_EXAMPLES: ChartData = {
    simple: {
        ['data-description']: 'Line',
        kulAxis: 'Axis',
        kulData,
        kulSizeY: '300px',
    },
    style: {
        ['data-description']: 'Bar',
        kulAxis: 'Axis',
        kulData,
        kulSeries: ['Series_1'],
        kulSizeY: '300px',
        kulTypes: ['bar'],
    },
};

export const CHART_DOC: KulArticleDataset = {
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
                                            value: 'KulChart',
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
                                                    value: '<kul-chart>',
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
                                            value: 'KulChart',
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
                                                    value: '<kul-chart></kul-chart>',
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
                                                    value: JSON.stringify(
                                                        kulData
                                                    ),
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
                                            id: '0.3.2.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.2.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.2.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.2.1.0',
                                            value: 'Sets the axis of the chart. Default is an empty string.',
                                        },
                                    ],
                                    id: '0.3.2.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.2',
                            value: 'kulAxis',
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
                                            value: 'string[]',
                                        },
                                    ],
                                    id: '0.3.3.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.3.1.0',
                                            value: "Overrides theme's colors. Default is an empty array.",
                                        },
                                    ],
                                    id: '0.3.3.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.3',
                            value: 'kulColors',
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
                                            value: 'KulDataDataset',
                                        },
                                    ],
                                    id: '0.3.4.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.4.1.0',
                                            value: 'The actual data of the chart. Default is null.',
                                        },
                                    ],
                                    id: '0.3.4.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.4',
                            value: 'kulData',
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
                                            value: 'KulChartLegendPlacement',
                                        },
                                    ],
                                    id: '0.3.5.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.5.1.0',
                                            value: "Sets the position of the legend. Supported values: bottom, left, right, top, hidden. Default is 'bottom'.",
                                        },
                                    ],
                                    id: '0.3.5.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.5',
                            value: 'kulLegend',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.6.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.6.0.1',
                                            tagName: 'strong',
                                            value: 'string[]',
                                        },
                                    ],
                                    id: '0.3.6.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.6.1.0',
                                            value: 'The data series to be displayed. They must be of the same type. Default is an empty array.',
                                        },
                                    ],
                                    id: '0.3.6.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.6',
                            value: 'kulSeries',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.7.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.7.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.7.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.7.1.0',
                                            value: 'The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
                                        },
                                    ],
                                    id: '0.3.7.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.7',
                            value: 'kulSizeX',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.8.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.8.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.8.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.8.1.0',
                                            value: 'The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
                                        },
                                    ],
                                    id: '0.3.8.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.8',
                            value: 'kulSizeY',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.9.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.9.0.1',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.3.9.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.9.1.0',
                                            value: 'Custom style of the component. Default is an empty string.',
                                        },
                                    ],
                                    id: '0.3.9.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.9',
                            value: 'kulStyle',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.10.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.10.0.1',
                                            tagName: 'strong',
                                            value: 'KulChartType[]',
                                        },
                                    ],
                                    id: '0.3.10.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.10.1.0',
                                            value: "The type of the chart. Supported formats: Bar, Gaussian, Line, Pie, Map and Scatter. Default is ['line'].",
                                        },
                                    ],
                                    id: '0.3.10.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.10',
                            value: 'kulTypes',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.11.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.11.0.1',
                                            tagName: 'strong',
                                            value: 'XAXisComponentOption',
                                        },
                                    ],
                                    id: '0.3.11.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.11.1.0',
                                            value: 'Customization options for the x Axis. Default is null.',
                                        },
                                    ],
                                    id: '0.3.11.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.11',
                            value: 'kulXAxis',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.3.12.0.0',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.3.12.0.1',
                                            tagName: 'strong',
                                            value: 'YAXisComponentOption',
                                        },
                                    ],
                                    id: '0.3.12.0',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.3.12.1.0',
                                            value: 'Customization options for the y Axis. Default is null.',
                                        },
                                    ],
                                    id: '0.3.12.1',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.3.12',
                            value: 'kulYAxis',
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
                                    value: 'KulChartEventPayload',
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
                                                            value: ': emitted when the chart is clicked',
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
                            value: 'kul-chart-event',
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
                                            value: '<kul-chart kul-style="#kul-component { max-width: 20vw; }"></kul-chart>',
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
                                    value: 'KulChart',
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
            value: 'KulChart',
        },
    ],
};

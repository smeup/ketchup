import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';
import {
    SpinnerData,
    SPINNER_EXAMPLES_KEYS,
} from './kul-showcase-spinner-declarations';

const component = 'spinner';

function createSpinnerData(
    barLayouts: number,
    widgetsLayouts: number
): SpinnerData {
    const spinnerData: SpinnerData = {
        bar: {},
        widget: {},
    };

    for (let i = 1; i <= barLayouts; i++) {
        SPINNER_EXAMPLES_KEYS.forEach((exampleType) => {
            if (!spinnerData.bar[i]) {
                spinnerData.bar[i] = {};
            }
            switch (exampleType) {
                case 'spinner':
                    spinnerData.bar[i][exampleType] = {
                        ['data-description']: 'Inactive',
                        kulActive: false,
                        kulBarVariant: true,
                        kulLayout: i,
                    };
                    break;
                case 'spinnerActive':
                    spinnerData.bar[i][exampleType] = {
                        ['data-description']: 'Active',
                        kulActive: true,
                        kulBarVariant: true,
                        kulLayout: i,
                    };
                    break;
                case 'style':
                    spinnerData.bar[i][exampleType] = {
                        'data-description': 'Custom style',
                        'data-dynamic': 'custom',
                        kulActive: true,
                        kulBarVariant: true,
                        kulLayout: i,
                    };
                    break;
            }
        });
    }

    for (let i = 1; i <= widgetsLayouts; i++) {
        SPINNER_EXAMPLES_KEYS.forEach((exampleType) => {
            if (!spinnerData.widget[i]) {
                spinnerData.widget[i] = {};
            }
            switch (exampleType) {
                case 'spinner':
                    spinnerData.widget[i][exampleType] = {
                        ['data-description']: 'Inactive',
                        kulActive: false,
                        kulLayout: i,
                    };
                    break;
                case 'spinnerActive':
                    spinnerData.widget[i][exampleType] = {
                        ['data-description']: 'Active',
                        kulActive: true,
                        kulLayout: i,
                    };
                    break;
                case 'style':
                    spinnerData.widget[i][exampleType] = {
                        'data-description': 'Custom style',
                        'data-dynamic': 'custom',
                        kulActive: true,
                        kulLayout: i,
                    };
                    break;
            }
        });
    }

    return spinnerData;
}

export const SPINNER_EXAMPLES = createSpinnerData(2, 14);

export const SPINNER_DOC: KulArticleDataset = {
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
                                            value: 'KulSpinner',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render spinners based on a JSON structure.',
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
                                            value: 'KulSpinner',
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
                                            value: ' property with the JSON structure representing the spinner.',
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
                                                    value: '<kul-spinner></kul-spinner>',
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
                                                    value: '{ "nodes": [{"value": "Spinner Title", "id": "0", "children": [{"value": "Section Title", "id": "0.1", "children": [{"value": "Paragraph title", "id": "0.1.1", "children": [{"value": "Text", "id": "0.1.1.1"}, {"value": "Strong text", "id": "0.1.1.2", "tagName": "strong"}]}]}]}]}',
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
                                    value: 'KulEventPayload',
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            id: '0.4.0.2.0.0.0',
                                                            tagName: 'strong',
                                                            value: 'ready',
                                                        },
                                                        {
                                                            id: '0.4.0.2.0.0.1',
                                                            value: ': emitted when the component completes its first complete lifecycle.',
                                                        },
                                                    ],
                                                    id: '0.4.0.2.0.0',
                                                    tagName: 'li',
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
                            value: 'kul-spinner-event',
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
            value: 'KulSpinner',
        },
    ],
};

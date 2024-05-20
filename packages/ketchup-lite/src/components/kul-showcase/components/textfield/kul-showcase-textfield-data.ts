import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';
import { TextfieldData } from './kul-showcase-textfield-declarations';

const component = 'textfield';

export const TEXTFIELD_EXAMPLES: TextfieldData = {
    flat: {
        colors: {
            ['data-description']: 'Textfield states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'State colors',
            kulValue: 'Value',
        },
        disabled: {
            ['data-description']: 'Disabled textfield',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        disabledIcon: {
            ['data-description']: 'Disabled textfield with icon',
            kulDisabled: true,
            kulIcon: 'widgets',
            kulLabel: 'Disabled',
        },
        disabledValue: {
            ['data-description']: 'Disabled textfield with value',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulValue: 'Value',
        },
        disabledFullWidthLabel: {
            ['data-description']: 'Full width textfield with label',
            kulDisabled: true,
            kulFullWidth: true,
            kulLabel: 'Full width label (disabled)',
        },
        disabledFullWidthValue: {
            ['data-description']: 'Full width textfield with value',
            kulDisabled: true,
            kulFullWidth: true,
            kulValue: 'Full width value (disabled)',
        },
        fullWidthLabel: {
            ['data-description']: 'Full width textfield with label',
            kulFullWidth: true,
            kulLabel: 'Full width label',
        },
        fullWidthIcon: {
            ['data-description']: 'Full width textfield with icon',
            kulFullWidth: true,
            kulIcon: 'widgets',
            kulLabel: 'Full width with icon',
        },
        fullWidthValue: {
            ['data-description']: 'Full width textfield with value',
            kulFullWidth: true,
            kulValue: 'Value',
        },
        icon: {
            ['data-description']: 'Textfield with icon',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'Textfield with label',
            kulLabel: 'Textfield with label',
        },
        labelIcon: {
            ['data-description']: 'Textfield with label and icon',
            kulIcon: 'widgets',
            kulLabel: 'Textfield with label and icon',
        },
        style: {
            ['data-description']: 'Textfield with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'Textfield with custom style',
        },
    },
    outlined: {
        colors: {
            ['data-description']: 'Textfield states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'State colors',
            kulValue: 'Value',
        },
        disabled: {
            ['data-description']: 'Disabled textfield',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        disabledIcon: {
            ['data-description']: 'Disabled textfield with icon',
            kulDisabled: true,
            kulIcon: 'widgets',
            kulLabel: 'Disabled',
        },
        disabledValue: {
            ['data-description']: 'Disabled textfield with value',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulValue: 'Value',
        },
        icon: {
            ['data-description']: 'Textfield with icon',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'Textfield with label',
            kulLabel: 'Textfield with label',
        },
        labelIcon: {
            ['data-description']: 'Textfield with label and icon',
            kulIcon: 'widgets',
            kulLabel: 'Textfield with label and icon',
        },
        style: {
            ['data-description']: 'Textfield with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'Textfield with custom style',
        },
    },
    raised: {
        colors: {
            ['data-description']: 'Textfield states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'State colors',
            kulValue: 'Value',
        },
        disabled: {
            ['data-description']: 'Disabled textfield',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        disabledIcon: {
            ['data-description']: 'Disabled textfield with icon',
            kulDisabled: true,
            kulIcon: 'widgets',
            kulLabel: 'Disabled',
        },
        disabledValue: {
            ['data-description']: 'Disabled textfield with value',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulValue: 'Value',
        },
        disabledFullWidthLabel: {
            ['data-description']: 'Full width textfield with label',
            kulDisabled: true,
            kulFullWidth: true,
            kulLabel: 'Full width label (disabled)',
        },
        disabledFullWidthValue: {
            ['data-description']: 'Full width textfield with value',
            kulDisabled: true,
            kulFullWidth: true,
            kulValue: 'Full width value (disabled)',
        },
        fullWidthLabel: {
            ['data-description']: 'Full width textfield with label',
            kulFullWidth: true,
            kulLabel: 'Full width label',
        },
        fullWidthIcon: {
            ['data-description']: 'Full width textfield with icon',
            kulFullWidth: true,
            kulIcon: 'widgets',
            kulLabel: 'Full width with icon',
        },
        fullWidthValue: {
            ['data-description']: 'Full width textfield with value',
            kulFullWidth: true,
            kulValue: 'Value',
        },
        icon: {
            ['data-description']: 'Textfield with icon',
            kulIcon: 'widgets',
        },
        label: {
            ['data-description']: 'Textfield with label',
            kulLabel: 'Textfield with label',
        },
        labelIcon: {
            ['data-description']: 'Textfield with label and icon',
            kulIcon: 'widgets',
            kulLabel: 'Textfield with label and icon',
        },
        style: {
            ['data-description']: 'Textfield with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'Textfield with custom style',
        },
    },
    textarea: {
        colors: {
            ['data-description']: 'Textfield states colors',
            ['data-dynamic']: 'state-colors',
            kulLabel: 'State colors',
            kulValue: 'Value',
        },
        disabled: {
            ['data-description']: 'Disabled textfield',
            kulDisabled: true,
            kulLabel: 'Disabled',
        },
        disabledValue: {
            ['data-description']: 'Disabled textfield with value',
            kulDisabled: true,
            kulLabel: 'Disabled',
            kulValue: 'Value',
        },
        label: {
            ['data-description']: 'Textfield with label',
            kulLabel: 'Textfield with label',
        },
        style: {
            ['data-description']: 'Textfield with custom style',
            ['data-dynamic']: 'custom',
            kulLabel: 'Textfield with custom style',
        },
    },
};

export const TEXTFIELD_DOC: KulArticleDataset = {
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
                                            value: 'KulTextfield',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a customizable and reusable web component to input text.',
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
                                            value: 'KulTextfield',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and optionally provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'kulLabel',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' and ',
                                        },
                                        {
                                            id: '0.2.0.0.5',
                                            tagName: 'strong',
                                            value: 'kulImageProps',
                                        },
                                        {
                                            id: '0.2.0.0.6',
                                            value: " properties to customize the textfield's content.",
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
                                                    value: '<kul-textfield></kul-textfield>',
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
                                    tagName: 'strong',
                                    value: 'KulEventPayload',
                                },
                                {
                                    id: '0.4.0.2',
                                    value: ', which includes information about the component and the event type.',
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
                                                                    id: '0.4.0.3.0.0.0.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'click',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.0.1',
                                                                    value: ': emitted when the component is clicked.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.0',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                        {
                                                            children: [
                                                                {
                                                                    id: '0.4.0.3.0.0.1.0',
                                                                    tagName:
                                                                        'strong',
                                                                    value: 'ready',
                                                                },
                                                                {
                                                                    id: '0.4.0.3.0.0.1.1',
                                                                    value: ': emitted when the component completes its first complete lifecycle.',
                                                                },
                                                            ],
                                                            id: '0.4.0.3.0.0.1',
                                                            tagName: 'li',
                                                            value: '',
                                                        },
                                                    ],
                                                    id: '0.4.0.3.0.0',
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
                            value: 'kul-textfield-event',
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
            value: 'KulTextfield',
        },
    ],
};

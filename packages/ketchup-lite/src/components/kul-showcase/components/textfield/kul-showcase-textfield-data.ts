import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { genProps } from '../../kul-showcase-utils';
import { TextfieldData } from './kul-showcase-textfield-declarations';

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
                                            children: [
                                                {
                                                    id: '0.1.0.0.0.0',
                                                    tagName: 'strong',
                                                    value: 'Customizable Content',
                                                },
                                                {
                                                    id: '0.1.0.0.0.1',
                                                    value: ': The component allows for the display of text and images within the textfield, offering flexibility in content presentation.',
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
                                                    value: '<kulStyle>',
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
                    children: genProps('kul-textfield'),
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
                    children: [
                        {
                            children: [
                                {
                                    id: '0.5.0.0',
                                    value: 'Returns a promise that resolves to a ',
                                },
                                {
                                    tagName: 'strong',
                                    id: '0.5.0.1',
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
                                    value: ',',
                                },
                                {
                                    id: '0.6.0.3',
                                    tagName: 'strong',
                                    value: 'componentDidLoad',
                                },
                                {
                                    id: '0.6.0.4',
                                    value: ',',
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
                                    tagName: 'strong',
                                    id: '0.7.0.1',
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
                                            value: '<kul-textfield kul-style="#kul-component { opacity: 0.5; }"></kul-textfield>',
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
                                                    id: '0.7.1.0.4.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_backdrop_filter',
                                                },
                                                {
                                                    id: '0.7.1.0.4.1',
                                                    value: ': Sets the backdrop filter of the text field. Defaults to blur(3.5px).',
                                                },
                                            ],
                                            id: '0.7.1.0.4',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.5.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_backdrop_filter_hover',
                                                },
                                                {
                                                    id: '0.7.1.0.5.1',
                                                    value: ': Sets the backdrop filter of the text field when hovering. Defaults to blur(5px).',
                                                },
                                            ],
                                            id: '0.7.1.0.5',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.6.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_background_color',
                                                },
                                                {
                                                    id: '0.7.1.0.6.1',
                                                    value: ': Sets the background color of the text field. Defaults to rgba(var(--kul-text-color-rgb), 0.125).',
                                                },
                                            ],
                                            id: '0.7.1.0.6',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.7.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_background_color_hover',
                                                },
                                                {
                                                    id: '0.7.1.0.7.1',
                                                    value: ': Sets the background color of the text field when hovering. Defaults to rgba(var(--kul-text-color-rgb), 0.175).',
                                                },
                                            ],
                                            id: '0.7.1.0.7',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.8.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_input_color',
                                                },
                                                {
                                                    id: '0.7.1.0.8.1',
                                                    value: ": Sets the color of the text field's input text. Defaults to var(--kul-text-color).",
                                                },
                                            ],
                                            id: '0.7.1.0.8',
                                            tagName: 'li',
                                            value: '',
                                        },
                                        {
                                            children: [
                                                {
                                                    cssStyle:
                                                        DOC_STYLES.monoPrimaryContent,
                                                    id: '0.7.1.0.9.0',
                                                    tagName: 'strong',
                                                    value: '--kul_textfield_input_color_rgb',
                                                },
                                                {
                                                    id: '0.7.1.0.9.1',
                                                    value: ": Sets the rgb color of the text field's input text. Defaults to var(--kul-text-color-rgb).",
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
                                                    value: '--kul_textfield_input_font_size',
                                                },
                                                {
                                                    id: '0.7.1.0.10.1',
                                                    value: ": Sets the font size of the text field's value. Defaults to var(--kul-font-size).",
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
                                                    value: '--kul_textfield_input_font_weight',
                                                },
                                                {
                                                    id: '0.7.1.0.11.1',
                                                    value: ": Sets the font weight of the text field's input. Defaults to 400.",
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
                                                    value: '--kul_textfield_label_color',
                                                },
                                                {
                                                    id: '0.7.1.0.12.1',
                                                    value: ": Sets the color of the text field's label. Defaults to rgba(var(--kul-text-color-rgb), 0.875).",
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
                                                    value: '--kul_textfield_label_font_size',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ": Sets the font size of the text field's label. Defaults to var(--kul-font-size).",
                                                },
                                            ],
                                            id: '0.7.1.0.14.0',
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
                                                    value: '--kul_textfield_label_font_weight',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ": Sets the font weight of the text field's label. Defaults to 400.",
                                                },
                                            ],
                                            id: '0.7.1.0.14.0',
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
                                                    value: '--kul_textfield_padding',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the padding of the text field. Defaults to 0 16px.',
                                                },
                                            ],
                                            id: '0.7.1.0.14.0',
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
                                                    value: '--kul_textfield_padding',
                                                },
                                                {
                                                    id: '0.7.1.0.13.1',
                                                    value: ': Sets the padding of the text field. Defaults to 0 16px.',
                                                },
                                            ],
                                            id: '0.7.1.0.14.0',
                                            tagName: 'li',
                                            value: '',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    value: 'Additionally, the following CSS variables can be used to customize the appearance of the component:',
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
                                    value: 'KulTextfield',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: ' component is a versatile tool for displaying textfields with customizable content and styling. Its event handling capabilities and debug information make it a powerful choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
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
            value: 'KulTextfield',
        },
    ],
};

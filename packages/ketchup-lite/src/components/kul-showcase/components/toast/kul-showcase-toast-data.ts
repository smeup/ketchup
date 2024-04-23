import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { ToastData } from './kul-showcase-toast-declarations';

export const TOAST_EXAMPLES: ToastData = {
    icon: {
        ['data-description']: 'Toast with custom label',
    },
    style: {
        ['data-description']: 'Toast with custom style',
        kulStyle: `.wrapper { animation: pulse 1.275s infinite; } @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.25; } 100% { opacity: 1; } }`,
    },
};

export const TOAST_DOC: KulArticleDataset = {
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
                                            id: '0.1.1.1.1',
                                            value: 'The ',
                                        },
                                        {
                                            id: '0.1.1.2',
                                            tagName: 'strong',
                                            value: 'kul-showcase-toast',
                                        },
                                        {
                                            id: '0.1.1.3',
                                            value: ' component is a customizable web component used to display notifications.',
                                        },
                                    ],
                                    id: '0.1.1.1',
                                    value: 'Overview',
                                },
                            ],
                            id: '0.1.1',
                            value: 'Overview',
                        },
                    ],
                    id: '0.1',
                    value: 'Introduction',
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
                                                    value: ': The component allows for the display of text and images within the badge, offering flexibility in content presentation.',
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
                                            id: '0.3.1.1.1',
                                            value: 'To use the ',
                                        },
                                        {
                                            id: '0.3.1.1.2',
                                            tagName: 'strong',
                                            value: 'kul-showcase-toast',
                                        },
                                        {
                                            id: '0.3.1.1.3',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.3.1.1.4',
                                            tagName: 'strong',
                                            value: 'TOAST_EXAMPLES',
                                        },
                                        {
                                            id: '0.3.1.1.5',
                                            value: ' property with the JSON structure representing the examples to be showcased.',
                                        },
                                    ],
                                    id: '0.3.1.1',
                                    value: 'Basic Usage',
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
                                        {
                                            id: '0.4.2.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.2.1.2',
                                            tagName: 'strong',
                                            value: '() => void',
                                        },
                                    ],
                                    id: '0.4.2.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.2.2.1',
                                            value: 'Callback invoked when the toast is closed. Default is a function that emits a close event and removes the toast element.',
                                        },
                                    ],
                                    id: '0.4.2.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.2',
                            value: 'kulCloseCallback',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.1.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.1.1.2',
                                            tagName: 'strong',
                                            value: 'KulImagePropsInterface',
                                        },
                                    ],
                                    id: '0.4.1.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.1.2.1',
                                            value: "Sets the props of the clickable icon used to close the toast. Default is { kulSizeX: '18px', kulSizeY: '18px', kulValue: 'clear' }.",
                                        },
                                    ],
                                    id: '0.4.1.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.1',
                            value: 'kulCloseIcon',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.3.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.3.1.2',
                                            tagName: 'strong',
                                            value: 'KulImagePropsInterface',
                                        },
                                    ],
                                    id: '0.4.3.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.3.2.1',
                                            value: "Sets the props of an optional icon that will be displayed along with the message. Default is { kulSizeX: '18px', kulSizeY: '18px', kulValue: 'info' }.",
                                        },
                                    ],
                                    id: '0.4.3.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.3',
                            value: 'kulIcon',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.5.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.5.1.2',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.4.5.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.5.2.1',
                                            value: "Sets the message of the toast. Default is 'Wow, such empty.'.",
                                        },
                                    ],
                                    id: '0.4.5.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.5',
                            value: 'kulMessage',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.6.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.6.1.2',
                                            tagName: 'strong',
                                            value: 'string',
                                        },
                                    ],
                                    id: '0.4.6.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.6.2.1',
                                            value: "Enables customization of the component's style. Default is an empty string.",
                                        },
                                    ],
                                    id: '0.4.6.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.6',
                            value: 'kulStyle',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '0.4.4.1.1',
                                            value: 'Type:',
                                        },
                                        {
                                            id: '0.4.4.1.2',
                                            tagName: 'strong',
                                            value: 'number',
                                        },
                                    ],
                                    id: '0.4.4.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.4.4.2.1',
                                            value: 'When kulTimer is set with a number, the toast will close itself after the specified amount of time (in ms). Default is null.',
                                        },
                                    ],
                                    id: '0.4.4.2',
                                    value: '',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.4.4',
                            value: 'kulTimer',
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
                            value: 'kul-toast-event',
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
                                    value: "Returns a promise that resolves to an object containing debug information about the component's rendering process.",
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.6.1',
                            tagName: 'strong',
                            value: 'getDebugInfo()',
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
                                    value: 'The component uses Shadow DOM for encapsulation, ensuring that its styles do not leak into the global scope. However, custom styles can be applied using the ',
                                },
                                {
                                    id: '0.8.1.2',
                                    tagName: 'strong',
                                    value: 'styleUrl',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' property.',
                                },
                            ],
                            id: '0.8.1',
                            tagName: 'strong',
                            value: '',
                        },
                    ],
                    id: '0.8',
                    value: 'Styling',
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
                                    value: 'kul-showcase-toast',
                                },
                                {
                                    id: '0.8.1.3',
                                    value: ' component is a powerful tool for showcasing various examples of components within the Ketchup Lite library. Its dynamic content rendering and customizable styling make it a versatile choice for web developers looking to enhance their applications with dynamic, encapsulated UI elements.',
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
            value: 'KulToast',
        },
    ],
};

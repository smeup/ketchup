import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import {
    DRAWER_IFRAME_MOCK,
    DRAWER_IFRAME_MOCK_STYLE,
} from '../../assets/mock-ups/drawer';
import { DOC_STYLES } from '../../kul-showcase-data';
import { DrawerData } from './kul-showcase-drawer-declarations';

export const DRAWER_EXAMPLES: DrawerData = {
    simple: {
        ['data-description']: 'Simple drawer component',
        iframeProps: {
            height: '100%',
            srcDoc: DRAWER_IFRAME_MOCK,
            width: '100%',
        },
    },
    style: {
        ['data-description']: 'Drawer with custom style',
        ['data-dynamic']: 'custom',
        iframeProps: {
            height: '100%',
            srcDoc: DRAWER_IFRAME_MOCK_STYLE,
            width: '100%',
        },
    },
};

export const DRAWER_DOC: KulArticleDataset = {
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
                                            value: 'KulDrawer',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a simple element designed to be a side menu in an application, it receives a ',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            tagName: 'strong',
                                            value: 'slot',
                                        },
                                        {
                                            id: '0.0.0.0.1',
                                            value: ' and it will display its content.',
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
                                            value: 'KulDrawer',
                                        },
                                        {
                                            id: '0.2.0.0.2',
                                            value: ' component, include it in your HTML and provide the ',
                                        },
                                        {
                                            id: '0.2.0.0.3',
                                            tagName: 'strong',
                                            value: 'slot',
                                        },
                                        {
                                            id: '0.2.0.0.4',
                                            value: ' that must be displayed inside it.',
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
                                                    value: '<kul-drawer>\n   <div class="slot">\n      <div class="title">Simple title</div>\n   </div>\n</kul-drawer>',
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
                            value: 'kul-drawer-event',
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
                                    value: 'Closes the drawer.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'close()',
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
                                    id: '0.5.0.0',
                                    value: 'Returns the state of the drawer.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'isOpened()',
                        },
                        {
                            children: [
                                {
                                    id: '0.5.0.0',
                                    value: 'Opens the drawer.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.0',
                            tagName: 'strong',
                            value: 'open()',
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
                                    value: 'Opens the drawer when closed and vice-versa.',
                                },
                            ],
                            cssStyle: DOC_STYLES.monoPrimaryH3,
                            id: '0.5.2',
                            tagName: 'strong',
                            value: 'toggle()',
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
                                        kulCode: {
                                            shape: 'code',
                                            kulLanguage: 'markup',
                                            value: '<kul-drawer kul-style="#kul-component { opacity: 0.5; }"></kul-drawer>',
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
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-drawer-backdrop',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': sets the backdrop color of the drawer when in slide mode. Defaults to rgba(0, 0, 0, 0.32).',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-drawer-box-shadow',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': sets the box shadow of the drawer when in slide mode.  Defaults to a combination of shadows for depth.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-drawer-permanent-border',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': sets the border of the drawer in permanent mode. Defaults to a 1px solid border with the color defined by --kul-border-color.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-drawer-slide-transition',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Sets the horizontal transition duration when in slide mode. Defaults to 750ms.',
                                        },
                                    ],
                                    id: '0.7.1.0',
                                    tagName: 'li',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            cssStyle: DOC_STYLES.monoPrimaryH3,
                                            id: '0.7.1.0.0',
                                            tagName: 'strong',
                                            value: '--kul-drawer-transition',
                                        },
                                        {
                                            id: '0.7.1.0.1',
                                            value: ': Sets the transition duration for the drawer. Defaults to 250ms.',
                                        },
                                    ],
                                    id: '0.7.1.0',
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
                                    value: 'KulDrawer',
                                },
                                {
                                    id: '0.8.0.2',
                                    value: " component is a simple yet useful layouting tool to wrap your app's drawer content.",
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
            value: 'KulDrawer',
        },
    ],
};

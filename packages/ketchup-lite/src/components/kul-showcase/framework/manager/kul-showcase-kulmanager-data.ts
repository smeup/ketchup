import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';

export const MANAGER_DATA: KulArticleDataset = {
    columns: [{ id: 'shape', type: 'code' }],
    nodes: [
        {
            id: '0',
            value: 'KulManager',
            children: [
                {
                    id: '1',
                    value: 'What is it?',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.1.1',
                                    tagName: 'strong',
                                    value: 'KulManager',
                                },
                                {
                                    id: '1.1.2',
                                    value: ' is a Javascript class which wraps quite a few functionalities and contains other manager classes - such as the theme one.',
                                },
                            ],
                            id: '1.1',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '1.2.1',
                                    tagName: 'strong',
                                    value: 'KulManager',
                                },
                                {
                                    id: '1.2.2',
                                    value: ' is automatically instanced as a singleton by the first component loaded inside the DOM.',
                                },
                            ],
                            id: '1.2',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '1.3.1',
                                    value: "There are a few default behaviors of the library which can be altered. In order to do so, it's possible to define a custom property on the ",
                                },
                                {
                                    id: '1.3.2',
                                    tagName: 'strong',
                                    value: 'documentElement',
                                },
                                {
                                    id: '1.3.3',
                                    value: ' named ',
                                },
                                {
                                    id: '1.3.4',
                                    tagName: 'strong',
                                    value: 'ketchupLiteInit',
                                },
                                {
                                    id: '1.3.5',
                                    value: ' before the body of the document.',
                                },
                            ],
                            id: '1.3',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '1.4.1',
                                    value: "For example, let's say you wish to load Ketchup Lite with the 'Night' theme enabled.",
                                },
                                {
                                    id: '1.4.2',
                                    tagName: 'strong',
                                    value: 'This is all you need to do inside a script tag contained by the head tag:',
                                },
                                {
                                    cells: {
                                        1: {
                                            shape: 'code',
                                            value: "const dom = document.documentElement;\ndom.ketchupLiteInit = {\n   theme: { name: 'night' },\n};",
                                        },
                                    },
                                    id: '1.4.3',
                                },
                            ],
                            id: '1.4',
                            value: '',
                        },
                    ],
                },
                {
                    id: '2',
                    value: 'Initialization Settings',
                    children: [
                        {
                            children: [
                                {
                                    id: '2.1.1',
                                    tagName: 'strong',
                                    value: 'assetsPath (string)',
                                },
                                {
                                    id: '2.1.2',
                                    value: ': sets the URL where static assets used by the library are located, such as SVGs.',
                                },
                            ],
                            id: '2.1',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '2.2.1',
                                    tagName: 'strong',
                                    value: 'autoSetLocalization (boolean)',
                                },
                                {
                                    id: '2.2.2',
                                    value: ':  when true, the library automatically sets KupLanguage and KupMath locales to KupDates.',
                                },
                            ],
                            id: '2.2',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '2.3.1',
                                    value: '- ',
                                },
                                {
                                    id: '2.3.2',
                                    tagName: 'strong',
                                    value: 'locale(string)',
                                },
                                {
                                    id: '2.3.3',
                                    value: ': sets the locale of the library (used by components such as kup-date-picker).',
                                },
                            ],
                            id: '2.3',
                            value: 'dates',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '2.4.1.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.4.1.2',
                                            tagName: 'strong',
                                            value: 'active(boolean)',
                                        },
                                        {
                                            id: '2.4.1.3',
                                            value: ': sets whether the debug is active or not.',
                                        },
                                    ],
                                    id: '2.4.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '2.4.2.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.4.2.2',
                                            tagName: 'strong',
                                            value: 'autoPrint(boolean)',
                                        },
                                        {
                                            id: '2.4.2.3',
                                            value: ': sets whether the debug widget automatically print new logs.',
                                        },
                                    ],
                                    id: '2.4.2',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '2.4.3.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.4.3.2',
                                            tagName: 'strong',
                                            value: 'logLimit(number)',
                                        },
                                        {
                                            id: '2.4.3.3',
                                            value: ': sets the maximum number of debug logs to store.',
                                        },
                                    ],
                                    id: '2.4.3',
                                    value: '',
                                },
                            ],
                            id: '2.4',
                            value: 'debug',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '2.5.1.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.5.1.2',
                                            tagName: 'strong',
                                            value: 'list(JSON)',
                                        },
                                        {
                                            id: '2.5.1.3',
                                            value: ': sets whether the debug widget automatically print new logs.',
                                        },
                                    ],
                                    id: '2.5.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '2.5.2.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.5.2.2',
                                            tagName: 'strong',
                                            value: 'name(string)',
                                        },
                                        {
                                            id: '2.5.2.3',
                                            value: ': sets the maximum number of debug logs to store.',
                                        },
                                    ],
                                    id: '2.5.2',
                                    value: '',
                                },
                            ],
                            id: '2.6',
                            value: 'language',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '2.6.1.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.6.1.2',
                                            tagName: 'strong',
                                            value: 'delay(number)',
                                        },
                                        {
                                            id: '2.6.1.3',
                                            value: ': sets the delay after which the scroll on hover starts.',
                                        },
                                    ],
                                    id: '2.6.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '2.6.2.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.6.2.2',
                                            tagName: 'strong',
                                            value: 'step(number)',
                                        },
                                        {
                                            id: '2.6.2.3',
                                            value: ': sets the step size in pixel of each scroll.',
                                        },
                                    ],
                                    id: '2.6.2',
                                    value: '',
                                },
                            ],
                            id: '2.7',
                            value: 'scrollOnHover',
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            id: '2.7.1.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.7.1.2',
                                            tagName: 'strong',
                                            value: 'list(JSON)',
                                        },
                                        {
                                            id: '2.7.1.3',
                                            value: ': sets a custom list of themes.',
                                        },
                                    ],
                                    id: '2.7.1',
                                    value: '',
                                },
                                {
                                    children: [
                                        {
                                            id: '2.7.2.1',
                                            value: '- ',
                                        },
                                        {
                                            id: '2.7.2.2',
                                            tagName: 'strong',
                                            value: 'name(string)',
                                        },
                                        {
                                            id: '2.7.2.3',
                                            value: ': sets the initial theme of the library.',
                                        },
                                    ],
                                    id: '2.7.2',
                                    value: '',
                                },
                            ],
                            id: '2.8',
                            value: 'theme',
                        },
                    ],
                },
            ],
        },
    ],
};

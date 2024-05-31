import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { KUL_SHOWCASE_COMPONENTS } from '../../kul-showcase-data';

export const DEBUG_DOC: KulArticleDataset = {
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
                                            value: 'This section is used to test a single component with a premade set of props. ',
                                        },
                                    ],
                                    id: '0.0.0.0',
                                },
                                {
                                    children: [
                                        {
                                            id: '0.0.0.0.0',
                                            value: "Select a component through the dropdown button's list, then paste the object containing the components props in the textarea.",
                                        },
                                    ],
                                    id: '0.0.0.1',
                                },
                            ],
                            id: '0.0.0',
                        },
                        {
                            children: [
                                {
                                    cells: {
                                        kulButton: {
                                            kulData: {
                                                nodes: [
                                                    {
                                                        children:
                                                            KUL_SHOWCASE_COMPONENTS.nodes,
                                                        id: 'component',
                                                        value: 'Component',
                                                    },
                                                ],
                                            },
                                            kulStyle: ':host { margin: auto }',
                                            shape: 'button',
                                            value: 'Component',
                                        },
                                    },
                                    id: '0.0.0.0.0',
                                    value: '',
                                },
                            ],
                            id: '0.0.0.1',
                        },
                    ],
                    id: '0.0',
                    value: 'Usage',
                },
            ],
            id: '0',
            value: 'Debug',
        },
    ],
};

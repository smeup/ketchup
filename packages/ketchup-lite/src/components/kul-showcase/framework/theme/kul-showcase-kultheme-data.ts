import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';

export const THEME_DATA: KulArticleDataset = {
    nodes: [
        {
            id: '0',
            value: 'KulTheme',
            children: [
                {
                    id: '1',
                    value: 'Overview',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.1.1',
                                    tagName: 'strong',
                                    value: 'KulTheme',
                                },
                                {
                                    id: '1.1.2',
                                    value: " is a component of the KulManager class and serves as the core of the library's design system.",
                                },
                            ],
                            id: '1.1',
                            value: '',
                        },
                    ],
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '',
                                    cssStyle: DOC_STYLES.underConstruction,
                                    value: 'This page is under construction.',
                                },
                                {
                                    cells: {
                                        kulImage: {
                                            kulSizeX: '128px',
                                            kulSizeY: '128px',
                                            shape: 'image',
                                            value: 'science',
                                        },
                                    },
                                    id: '',
                                    value: '',
                                },
                            ],
                            id: '',
                            value: '',
                        },
                    ],
                    id: '',
                    value: '',
                },
            ],
        },
    ],
};

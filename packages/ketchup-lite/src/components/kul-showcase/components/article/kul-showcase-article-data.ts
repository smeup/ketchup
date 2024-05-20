import { getAssetPath } from '@stencil/core';
import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { ArticleData } from './kul-showcase-article-declarations';
import { DOC_STYLES } from '../../kul-showcase-data';
import { SHOWCASE_DOC } from '../../kul-showcase-utils';

const component = 'article';

const kulData: KulArticleDataset = {
    nodes: [
        {
            id: '0',
            value: 'Artificial Intelligence: A Comprehensive Guide',
            children: [
                {
                    id: '1.1',
                    value: 'Introduction',
                    children: [
                        {
                            children: [
                                {
                                    cells: {
                                        1: {
                                            shape: 'image',
                                            value: getAssetPath(
                                                `./assets/media/color_splash.jpg`
                                            ),
                                        },
                                    },
                                    id: '1.1.1.1',
                                    value: '',
                                },
                            ],
                            id: '1.1.1',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    id: '1.1.2.1',
                                    value: 'Artificial Intelligence (AI) is a rapidly evolving field that has the potential to revolutionize various aspects of our lives. This article aims to provide a comprehensive overview of AI, its applications, and the challenges it faces.',
                                },
                            ],
                            id: '1.1.2',
                            value: '',
                        },
                    ],
                },
                {
                    id: '1.2',
                    value: 'What is Artificial Intelligence?',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.2.1.1',
                                    value: 'Artificial Intelligence is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.',
                                },
                            ],
                            id: '1.2.1',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    cells: {
                                        1: {
                                            shape: 'code',
                                            shapeProps: {
                                                kulLanguage: 'python',
                                            },
                                            value: `def hello_world():\nprint("Hello, world!")`,
                                        },
                                    },
                                    id: '1.2.2.1',
                                    value: 'Artificial Intelligence is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.',
                                },
                            ],
                            id: '1.2.2',
                            value: ``,
                        },
                    ],
                },
                {
                    id: '1.3',
                    value: 'Applications of Artificial Intelligence',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.3.1.1',
                                    value: 'AI has a wide range of applications across various industries, including healthcare, finance, education, and transportation. For example, AI can help diagnose diseases, predict stock market trends, and personalize learning experiences.',
                                },
                            ],
                            id: '1.3.1',
                            value: '',
                        },
                        {
                            children: [
                                {
                                    cells: {
                                        1: {
                                            shape: 'image',
                                            value: getAssetPath(
                                                `./assets/media/color_splash.jpg`
                                            ),
                                        },
                                    },
                                    id: '1.3.2.1',
                                    value: 'AI has a wide range of applications across various industries, including healthcare, finance, education, and transportation. For example, AI can help diagnose diseases, predict stock market trends, and personalize learning experiences.',
                                },
                            ],
                            id: '1.3.2',
                            value: '',
                        },
                    ],
                },
                {
                    id: '1.4',
                    value: 'Challenges and Ethical Considerations',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.4.1.1',
                                    value: 'While AI offers numerous benefits, it also presents several challenges, including privacy concerns, job displacement, and the risk of bias in AI systems. Ethical considerations are crucial in the development and deployment of AI technologies.',
                                },
                            ],
                            id: '1.4.1',
                            value: '',
                        },
                        {
                            id: '1.4.2',
                            value: '',
                        },
                    ],
                },
                {
                    id: '1.5',
                    value: 'Conclusion',
                    children: [
                        {
                            children: [
                                {
                                    value: 'Artificial Intelligence is poised to play a pivotal role in shaping the future of technology and society. As we continue to explore its potential, it is essential to address its challenges and ethical implications to ensure its responsible development and deployment.',
                                    id: '1.5.2.1',
                                },
                            ],
                            id: '1.5.1',
                            value: '',
                        },
                    ],
                },
            ],
        },
    ],
};

export const ARTICLE_EXAMPLES: ArticleData = {
    simple: {
        ['data-description']: 'Simple article',
        kulData,
    },
    style: {
        ['data-description']: 'Article with custom style',
        'data-dynamic': 'custom',
        kulData,
    },
};

export const ARTICLE_DOC: KulArticleDataset = {
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
                                            value: 'KulArticle',
                                        },
                                        {
                                            id: '0.0.0.0.2',
                                            value: ' component is a versatile and customizable web component designed to render articles based on a JSON structure. ',
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
                                            value: 'KulArticle',
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
                                            value: ' property with the JSON structure representing the article.',
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
                                                    value: '<kul-article></kul-article>',
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
                                                    value: '{ "nodes": [{"value": "Article Title", "id": "0", "children": [{"value": "Section Title", "id": "0.1", "children": [{"value": "Paragraph title", "id": "0.1.1", "children": [{"value": "Text", "id": "0.1.1.1"}, {"value": "Strong text", "id": "0.1.1.2", "tagName": "strong"}]}]}]}]}',
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
                            value: 'kul-article-event',
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
            value: 'KulArticle',
        },
    ],
};

import { getAssetPath } from '@stencil/core';
import { KulArticleDataset } from '../../../kul-article/kul-article-declarations';
import { ArticleData } from './kul-showcase-article-declarations';

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
                                                `./assets/media/morana.png`
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
                                                `./assets/media/morana.png`
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

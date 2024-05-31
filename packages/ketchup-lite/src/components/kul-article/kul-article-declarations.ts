import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';

export interface KulArticleDataset extends KulDataDataset {
    nodes: KulArticleNode[];
}

export type KulArticleEvent = 'kul-event' | 'ready';

export interface KulArticleNode extends KulDataNode {
    children?: KulArticleNode[];
    tagName?: 'br' | 'code' | 'li' | 'pre' | 'strong';
}

export enum KulArticleProps {
    kulData = 'Actual data of the article',
    kulStyle = 'Custom style of the component.',
}

export interface KulArticlePropsInterface {
    kulData?: KulArticleDataset;
    kulStyle?: string;
}

import { KulTreePropsInterface } from '../../../kul-tree/kul-tree-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const TREE_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface TreeExample extends KulTreePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type TreeData = {
    [K in (typeof TREE_EXAMPLES_KEYS)[number]]: TreeExample;
};

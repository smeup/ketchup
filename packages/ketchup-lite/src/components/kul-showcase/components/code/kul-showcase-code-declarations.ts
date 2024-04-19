import { KulCodePropsInterface } from '../../../kul-code/kul-code-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const CODE_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface CodeExample extends KulCodePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type CodeData = {
    [K in (typeof CODE_EXAMPLES_KEYS)[number]]: CodeExample;
};

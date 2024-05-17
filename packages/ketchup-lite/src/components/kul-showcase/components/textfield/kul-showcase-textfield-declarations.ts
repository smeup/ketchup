import { KulTextfieldPropsInterface } from '../../../kul-textfield/kul-textfield-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const TEXTFIELD_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface TextfieldExample extends KulTextfieldPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type TextfieldData = {
    [K in (typeof TEXTFIELD_EXAMPLES_KEYS)[number]]: TextfieldExample;
};

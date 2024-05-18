import { KulTextfieldPropsInterface } from '../../../kul-textfield/kul-textfield-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const TEXTFIELD_CATEGORIES_KEYS = [
    'flat',
    'outlined',
    'raised',
    'textarea',
] as const;

export const TEXTFIELD_EXAMPLES_KEYS = [
    'colors',
    'disabled',
    'disabledIcon',
    'disabledValue',
    'disabledFullWidthLabel',
    'disabledFullWidthValue',
    'fullWidthLabel',
    'fullWidthIcon',
    'fullWidthValue',
    'icon',
    'label',
    'labelIcon',
    'large',
    'pulsating',
    'shaped',
    'slim',
    'spinner',
    'style',
    'trailingIcon',
] as const;

export interface TextfieldExample extends KulTextfieldPropsInterface {
    className: string;
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type TextfieldData = {
    [K in (typeof TEXTFIELD_CATEGORIES_KEYS)[number]]: {
        [K in (typeof TEXTFIELD_EXAMPLES_KEYS)[number]]?: Partial<TextfieldExample>;
    };
};

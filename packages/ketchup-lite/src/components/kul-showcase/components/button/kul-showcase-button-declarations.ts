import { KulButtonPropsInterface } from '../../../kul-button/kul-button-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const BUTTON_CATEGORIES_KEYS = [
    'flat',
    'floating',
    'icon',
    'raised',
    'outlined',
] as const;

export const BUTTON_EXAMPLES_KEYS = [
    'colors',
    'disabled',
    'dropdown',
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

export interface ButtonExample extends KulButtonPropsInterface {
    className: string;
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ButtonData = {
    [K in (typeof BUTTON_CATEGORIES_KEYS)[number]]: {
        [K in (typeof BUTTON_EXAMPLES_KEYS)[number]]?: Partial<ButtonExample>;
    };
};

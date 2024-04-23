import { KulToastPropsInterface } from '../../../kul-toast/kul-toast-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const TOAST_EXAMPLES_KEYS = ['icon', 'style'] as const;

export interface ToastExample extends KulToastPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ToastData = {
    [K in (typeof TOAST_EXAMPLES_KEYS)[number]]: Partial<ToastExample>;
};

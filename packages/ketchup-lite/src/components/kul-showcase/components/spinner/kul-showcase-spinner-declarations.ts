import { KulSpinnerPropsInterface } from '../../../kul-spinner/kul-spinner-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const SPINNER_EXAMPLES_CATEGORIES = ['bar', 'widget'] as const;

export const SPINNER_EXAMPLES_KEYS = ['spinner', 'spinnerActive', 'style'];

export interface SpinnerBranch {
    [index: number]: SpinnerLeaf;
}

export interface SpinnerLeaf {
    [index: string]: Partial<SpinnerExample>;
}

export type SpinnerData = {
    [K in (typeof SPINNER_EXAMPLES_CATEGORIES)[number]]: SpinnerBranch;
};

export interface SpinnerExample extends KulSpinnerPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

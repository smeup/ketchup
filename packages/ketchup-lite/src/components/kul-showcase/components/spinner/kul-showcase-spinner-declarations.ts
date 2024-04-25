import { KulSpinnerPropsInterface } from '../../../kul-spinner/kul-spinner-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const SPINNER_EXAMPLES_CATEGORIES = ['bar', 'widget'] as const;

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

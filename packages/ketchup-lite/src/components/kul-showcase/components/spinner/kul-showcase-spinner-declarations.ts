import { KulSpinnerPropsInterface } from '../../../kul-spinner/kul-spinner-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const SPINNER_EXAMPLES_CATEGORIES = ['bar', 'widget'] as const;

interface SpinnerBranch {
    [index: number]: SpinnerLeaf;
}

export type SpinnerData = {
    [K in (typeof SPINNER_EXAMPLES_CATEGORIES)[number]]: SpinnerBranch;
};

interface SpinnerExample extends KulSpinnerPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface SpinnerLeaf {
    [index: string]: Partial<SpinnerExample>;
}

import { KulSwitchPropsInterface } from '../../../kul-switch/kul-switch-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const SWITCH_EXAMPLES_KEYS = [
    'colors',
    'disabled',
    'simple',
    'style',
] as const;

export interface SwitchExample extends KulSwitchPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    className: string;
}

export type SwitchData = {
    [K in (typeof SWITCH_EXAMPLES_KEYS)[number]]: Partial<SwitchExample>;
};

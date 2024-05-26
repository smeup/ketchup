import { GenericObject } from '../../components';

export const COMPONENTS = [
    'article',
    'badge',
    'button',
    'card',
    'chart',
    'code',
    'image',
    'lazy',
    'list',
    'photoframe',
    'splash',
    'spinner',
    'switch',
    'tabbar',
    'textfield',
    'toast',
    'tree',
    'upload',
];

export interface KulShowcaseDocMethod {
    docs: string;
    name: string;
    returns: { docs: string; type: string };
    signature: string;
}
export interface KulShowcaseDocProp {
    docs: string;
    name: string;
    type: string;
}
export interface KulShowcaseDocStyle {
    docs: string;
    name: string;
}

export interface KulShowcaseDoc {
    [index: string]:
        | {
              methods: KulShowcaseDocMethod[];
              props: KulShowcaseDocProp[];
              styles: KulShowcaseDocStyle[];
          }
        | GenericObject;
}

export type KulShowcaseDynamicExampleType =
    | 'custom'
    | 'state-colors'
    | 'positions';

export type KulShowcaseEvents = 'click';

export enum KulShowcaseProps {
    kulStyle = 'Custom style of the component.',
}

export interface KulShowcasePropsInterface {
    kulStyle: string;
}

export type KulShowcaseTitle =
    | 'Components'
    | 'Framework'
    | 'Layout'
    | 'Utilities';

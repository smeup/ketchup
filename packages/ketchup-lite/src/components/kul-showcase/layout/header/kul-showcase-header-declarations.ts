import { GenericObject } from '../../../../components';
import { KulHeaderPropsInterface } from '../../../kul-header/kul-header-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const HEADER_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface HeaderExample extends KulHeaderPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    iframeProps: GenericObject;
}

export type HeaderData = {
    [K in (typeof HEADER_EXAMPLES_KEYS)[number]]: HeaderExample;
};

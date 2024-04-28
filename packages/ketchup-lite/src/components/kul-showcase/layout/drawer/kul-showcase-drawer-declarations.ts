import { GenericObject } from '../../../../components';
import { KulDrawerPropsInterface } from '../../../kul-drawer/kul-drawer-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const DRAWER_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface DrawerExample extends KulDrawerPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    iframeProps: GenericObject;
}

export type DrawerData = {
    [K in (typeof DRAWER_EXAMPLES_KEYS)[number]]: DrawerExample;
};

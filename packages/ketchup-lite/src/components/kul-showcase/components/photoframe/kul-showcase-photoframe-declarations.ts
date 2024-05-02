import { KulPhotoframePropsInterface } from '../../../kul-photo-frame/kul-photoframe-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const PHOTOFRAME_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface PhotoframeExample extends KulPhotoframePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type PhotoframeData = {
    [K in (typeof PHOTOFRAME_EXAMPLES_KEYS)[number]]: PhotoframeExample;
};

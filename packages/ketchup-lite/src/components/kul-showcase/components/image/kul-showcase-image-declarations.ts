import { KulImagePropsInterface } from '../../../kul-image/kul-image-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const IMAGE_EXAMPLES_KEYS = [
    'badge',
    'cover',
    'fit',
    'icon',
    'image',
    'style',
] as const;

export interface ImageExample extends KulImagePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    className: string;
}

export type ImageData = {
    [K in (typeof IMAGE_EXAMPLES_KEYS)[number]]: Partial<ImageExample>;
};

import { getAssetPath } from '@stencil/core';
import { KulImagePropsInterface } from '../../../kul-image/kul-image-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface ImageExample extends KulImagePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface ImageData {
    [index: string]: Partial<ImageExample>;
}

export const IMAGE_EXAMPLES: ImageData = {
    imageIcon: {
        ['data-description']: 'Icon',
        kulSizeX: '200px',
        kulSizeY: '200px',
        kulValue: 'widgets',
    },
    imageImage: {
        ['data-description']: 'Image',
        kulSizeX: '200px',
        kulSizeY: '200px',
        kulValue: getAssetPath(`./assets/media/morana.png`),
    },
};

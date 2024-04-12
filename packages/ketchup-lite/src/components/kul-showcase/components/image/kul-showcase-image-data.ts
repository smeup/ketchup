import { getAssetPath } from '@stencil/core';
import { KulImagePropsInterface } from '../../../kul-image/kul-image-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { random2digitsNumber } from '../../kul-showcase-utils';

interface ImageExample extends KulImagePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
    className: string;
}

interface ImageData {
    [index: string]: Partial<ImageExample>;
}

const image = getAssetPath(`./assets/media/morana.png`);

export const IMAGE_EXAMPLES: ImageData = {
    imageBadge: {
        ['data-description']: 'Image with badge',
        kulBadgeProps: { kulLabel: random2digitsNumber().toString() },
        kulSizeX: '128px',
        kulSizeY: '128px',
        kulValue: image,
    },
    imageCover: {
        ['data-description']: 'Image set as cover of a container',
        className: 'kul-cover',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    imageFit: {
        ['data-description']: 'Image fitting a container',
        className: 'kul-fit',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    imageIcon: {
        ['data-description']: 'Icon',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
    imageImage: {
        ['data-description']: 'Image',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: image,
    },
    badgeStyle: {
        ['data-description']: 'Icon with custom style',
        ['data-dynamic']: 'custom',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
};

import { getAssetPath } from '@stencil/core';
import { random2digitsNumber } from '../../kul-showcase-utils';
import { ImageData } from './kul-showcase-image-declarations';

const image = getAssetPath(`./assets/media/morana.png`);

export const IMAGE_EXAMPLES: ImageData = {
    badge: {
        ['data-description']: 'Image with badge',
        kulBadgeProps: { kulLabel: random2digitsNumber().toString() },
        kulSizeX: '128px',
        kulSizeY: '128px',
        kulValue: image,
    },
    cover: {
        ['data-description']: 'Image set as cover of a container',
        className: 'kul-cover',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    fit: {
        ['data-description']: 'Image fitting a container',
        className: 'kul-fit',
        kulSizeX: '128px',
        kulSizeY: '256px',
        kulValue: image,
    },
    icon: {
        ['data-description']: 'Icon',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
    image: {
        ['data-description']: 'Image',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: image,
    },
    style: {
        ['data-description']: 'Icon with custom style',
        ['data-dynamic']: 'custom',
        kulSizeX: '256px',
        kulSizeY: '256px',
        kulValue: 'widgets',
    },
};

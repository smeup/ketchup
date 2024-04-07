import { getAssetPath } from '@stencil/core';
import { KulCardPropsInterface } from '../../../kul-card/kul-card-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface CardExample extends KulCardPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface CardData {
    [index: string]: {
        [index: number]: { [index: string]: Partial<CardExample> };
    };
}

export const CARD_EXAMPLES: CardData = {
    standard: {
        1: {
            cardStyle: {
                ['data-description']: 'Card with custom style',
                ['data-dynamic']: 'custom',
                kulSizeX: '300px',
                kulSizeY: '300px',
                kulData: {
                    nodes: [
                        {
                            cells: {
                                1: { value: 'Title' },
                                2: { value: 'Subtitle' },
                                3: { value: 'Description' },
                                4: {
                                    shape: 'image',
                                    value: 'widgets',
                                },
                            },
                            id: '1',
                        },
                    ],
                },
            },
            cardImage: {
                ['data-description']: 'Card with custom style',
                kulSizeX: '300px',
                kulSizeY: '300px',
                kulData: {
                    nodes: [
                        {
                            cells: {
                                1: { value: 'Title' },
                                2: { value: 'Subtitle' },
                                3: { value: 'Description' },
                                4: {
                                    shape: 'image',
                                    value: getAssetPath(
                                        `./assets/media/morana.png`
                                    ),
                                },
                            },
                            id: '1',
                        },
                    ],
                },
            },
        },
    },
};

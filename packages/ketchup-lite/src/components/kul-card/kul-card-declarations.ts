import { KulDataDataset } from '../../components';

export enum KulCardCSSClasses {
    HAS_ACTIONS = 'has-actions',
    HAS_CONTENT = 'has-content',
}

export type KulCardEvent = 'click' | 'kul-event' | 'pointerdown' | 'ready';

export enum KulCardProps {
    kulData = 'The actual data of the card.',
    kulLayoutNumber = 'Sets the number of the layout.',
    kulSizeX = 'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    kulSizeY = 'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    kulStyle = 'Custom style of the component.',
}

export interface KulCardPropsInterface {
    kulData?: KulDataDataset;
    kulLayoutNumber?: number;
    kulSizeX?: string;
    kulSizeY?: string;
    kulStyle?: string;
}

export type KulCardLayout = 'a';

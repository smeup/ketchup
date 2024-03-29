import { GenericObject } from '../../types/GenericTypes';

export enum KulCardCSSClasses {
    HAS_ACTIONS = 'has-actions',
    HAS_CONTENT = 'has-content',
}

export type KulCardEvents = 'click' | 'kul-event' | 'ready';

export type KulCardFamily = 'standard';

export enum KulCardProps {
    kulData = 'The actual data of the card.',
    kulLayoutFamily = 'Sets the type of the card.',
    kulLayoutNumber = 'Sets the number of the layout.',
    kulSizeX = 'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    kulSizeY = 'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    kulStyle = 'Custom style of the component.',
}

export interface KulCardPropsInterface {
    kulData?: GenericObject[];
    kulLayoutFamily?: 'standard';
    kulLayoutNumber?: number;
    kulSizeX?: string;
    kulSizeY?: string;
    kulStyle?: string;
}

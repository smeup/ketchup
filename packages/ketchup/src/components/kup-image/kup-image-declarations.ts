import { BadgePosition } from '../kup-badge/kup-badge-declarations';

export interface Badge {
    text?: string;
    imageData?: {};
    position: BadgePosition;
}

export interface CssDraw {
    shape?: string;
    color?: string;
    height?: string;
    width?: string;
}

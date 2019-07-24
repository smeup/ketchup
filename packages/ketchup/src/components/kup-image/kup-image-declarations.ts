import { BadgePosition } from '../kup-badge/kup-badge-declarations';

export interface Badge {
    text?: string;
    icon?: string;
    position: BadgePosition;
}

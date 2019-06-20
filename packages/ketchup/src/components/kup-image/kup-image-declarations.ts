export interface Badge {
    text?: string;
    icon?: string;
    position: BadgePosition;
}

export enum BadgePosition {
    TOP_LEFT = 'TL',
    TOP_RIGHT = 'TR',
    BOTTOM_RIGHT = 'BR',
    BOTTOM_LEFT = 'BL',
}

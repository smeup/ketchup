import { KulDataDataset } from '../../managers/kul-data/kul-data-declarations';

export type KulAccordionEvent = 'click' | 'pointerdown' | 'ready';

export enum KulAccordionProps {
    kulData = 'Actual data of the accordion.',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulStyle = 'Sets a custom CSS style for the component.',
}

export interface KulAccordionPropsInterface {
    kulData?: KulDataDataset;
    kulRipple?: boolean;
    kulStyle?: string;
}

import { KulDataDataset, KulDataNode, KulEventPayload } from '../../components';

export type KulTabbarEvent = 'click' | 'pointerdown' | 'ready';

export interface KulTabbarEventPayload extends KulEventPayload {
    index?: number;
    node?: KulDataNode;
}

export enum KulTabbarProps {
    kulData = 'Actual data of the component.',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulStyle = 'Custom style of the component.',
    kulValue = "Sets the initial selected node's index.",
}

export interface KulTabbarPropsInterface {
    kulData?: KulDataDataset;
    kulRipple?: boolean;
    kulStyle?: string;
    kulValue?: number;
}

export interface KulTabbarState {
    index?: number;
    node?: KulDataNode;
}

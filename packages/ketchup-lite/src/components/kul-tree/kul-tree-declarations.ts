import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';

export interface KulTreeEventArguments {
    expansion?: boolean;
    node?: KulDataNode;
}

export type KulTreeEvent = 'click' | 'pointerdown' | 'ready';

export enum KulTreeProps {
    kulData = 'Actual data of the tree',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulSelectable = 'When true, nodes can be selected.',
    kulStyle = 'Custom style of the component.',
}

export interface KulTreePropsInterface {
    kulData?: KulDataDataset;
    kulRipple?: boolean;
    kulSelectable?: boolean;
    kulStyle?: string;
}

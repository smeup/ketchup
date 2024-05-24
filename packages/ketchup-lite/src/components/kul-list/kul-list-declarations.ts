import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import { KulEventPayload } from '../../types/GenericTypes';

export type KulListEvent = 'blur' | 'click' | 'focus' | 'pointerdown' | 'ready';

export interface KulListEventPayload extends KulEventPayload {
    node: KulDataNode;
}

export enum KulListProps {
    kulData = 'The actual data of the list.',
    kulNavigation = "When true, enables items' navigation through arrow keys.",
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulSelectable = 'Defines whether items are selectable or not.',
    kulStyle = 'Custom style of the component.',
}

export interface KulListPropsInterface {
    kulData?: KulDataDataset;
    kulNavigation?: boolean;
    kulRipple?: boolean;
    kulSelectable?: boolean;
    kulStyle?: string;
}

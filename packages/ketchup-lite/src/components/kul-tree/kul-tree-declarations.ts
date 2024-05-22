import { KulEventPayload } from '../../components';
import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';

export interface KulTreeEventArguments {
    expansion?: boolean;
    node?: KulDataNode;
}

export interface KulTreeEventPayload extends KulEventPayload {
    node?: KulDataNode;
}

export type KulTreeEvent = 'click' | 'kul-event' | 'pointerdown' | 'ready';

export enum KulTreeProps {
    kulAccordionLayout = 'When enabled, the first level of depth will create an accordion-style appearance for nodes.',
    kulData = 'Actual data of the tree.',
    kulFilter = 'When true, displays a text field which enables filtering the dataset of the tree.',
    kulInitialExpansionDepth = 'Sets the initial expanded nodes based on the specified depth. If the property is not provided, all nodes in the tree will be expanded.',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulSelectable = 'When true, nodes can be selected.',
    kulStyle = 'Custom style of the component.',
}

export interface KulTreePropsInterface {
    kulAccordionLayout?: boolean;
    kulData?: KulDataDataset;
    kulFilter?: boolean;
    kulInitialExpansionDepth?: number;
    kulRipple?: boolean;
    kulSelectable?: boolean;
    kulStyle?: string;
}

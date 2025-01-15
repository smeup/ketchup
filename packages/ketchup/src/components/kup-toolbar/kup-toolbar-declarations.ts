import { KupEventPayload, KupTreeNode } from '../../components';

export interface KupToolbarTreeNode extends KupTreeNode {
    componentType?: string;
}

export interface KupToolbarItemClickEventPayload extends KupEventPayload {
    value?: string;
    node?: KupTreeNode;
    index?: number;
}

export interface KupToolbarClickEventPayload extends KupEventPayload {
    selected: KupTreeNode;
    index?: number;
}

/**
 * Styling options for the f-button component.
 * @enum {string}
 * @property {string} PRIMARY - Primary importance : it is evidenced in comparison to the standard toolbar icon.
 * @property {string} STANDARD - Standard toolbar icon.

 */
export enum KupToolbarStyling {
    PRIMARY = 'primary',
    STANDARD = 'standard',
}

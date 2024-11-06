import { KupEventPayload, KupTreeNode } from '../../components';

export interface KupToolbarItemClickEventPayload extends KupEventPayload {
    value?: string;
    node?: KupTreeNode;
    index?: number;
}

export interface KupToolbarClickEventPayload extends KupEventPayload {
    selected: KupTreeNode;
    index?: number;
}

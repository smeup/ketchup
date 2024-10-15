import { KupEventPayload, KupTreeNode } from '../../components';

export interface KupToolbarItemClickEventPayload extends KupEventPayload {
    value?: string;
    node?: KupTreeNode;
    index?: number;
}

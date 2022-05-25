import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-image-list component.
 * Used to export every prop in an object.
 */
export enum KupImageListProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
    ripple = "When enabled displays Material's ripple effect on clicked items.",
}

export interface KupImageListEventPayload extends KupEventPayload {
    node: KupDataNode;
}

import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-bpmn component.
 */
export enum KupBpmnProps {
    asImage = '',
}
/**
 * Generic payload of a kup event.
 */
export interface KupBpmnClickEventPayload extends KupEventPayload {
    value: string;
}

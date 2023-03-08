import { GanttRow } from '@sme.up/gantt-component';
import { KupEventPayload } from '../../components';

/**
 * Props of the kup-gantt component.
 * Used to export every prop in an object.
 */
export enum KupPlannerProps {
    customStyle = 'Custom style of the component.',
}

export interface KupPlannerEventPayload extends KupEventPayload {
    value: GanttRow;
}

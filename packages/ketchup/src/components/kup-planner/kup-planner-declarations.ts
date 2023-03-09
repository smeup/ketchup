import { GanttRowType, GanttTask } from '@sme.up/gantt-component';
import { Phase } from '@sme.up/gantt-component';
import { GanttRow } from '@sme.up/gantt-component';
import { KupEventPayload } from '../../components';

/**
 * Props of the kup-gantt component.
 * Used to export every prop in an object.
 */
export enum KupPlannerProps {
    customStyle = 'Custom style of the component.',
    taskIdCol = 'Unique task identifier',
    taskNameCol = 'Task name displayed',
    taskDates = 'Task duration, from (firstDate) to (secondDate)',
    taskPrevDates = 'Forecast task duration, from (firstDate) to (secondDate)',
    taskColumns = 'Columns containing informations displayed on the left box near the gantt',
    phaseIdCol = 'Unique phase identifier',
    phaseNameCol = 'Phase name displayed',
    phaseDates = 'Phase duration, from (firstDate) to (secondDate)',
    phasePrevDates = 'Forecast phase duration, from (firstDate) to (secondDate)',
    phaseColumns = 'Columns containing informations displayed on the left box near the gantt',
    phaseColorCol = 'Phase color in hex format',
    phaseColParDep = 'Names of the parent phases',
    titleMess = 'Message displayed',
    data = 'Dataset containg the task list',
}

export enum KupPlannerTaskAction {
    onOpening = 'onOpening',
    onClosing = 'onClosing',
}

export interface KupPlannerEventPayload extends KupEventPayload {
    value: GanttRow;
    taskAction?: KupPlannerTaskAction;
}

export interface KupPlannerGanttTask extends GanttTask {
    taskRowId: string;
}

export interface KupPlannerPhase extends Phase {
    taskRowId: string;
    phaseRowId: string;
}

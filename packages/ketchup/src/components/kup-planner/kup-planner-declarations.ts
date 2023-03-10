import { GanttTask } from '@sme.up/gantt-component';
import { Phase } from '@sme.up/gantt-component';
import { GanttRow } from '@sme.up/gantt-component';
import { KupEventPayload } from '../../components';
import { KupDataRow } from '../../managers/kup-data/kup-data-declarations';

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
    listCellWidth = 'Size of the cells inside to the left box near the gantt',
    showSecondaryDates = 'Enable/disable display of secondary dates',
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
    taskRow: KupDataRow;
}

export interface KupPlannerPhase extends Phase {
    taskRowId: string;
    taskRow: KupDataRow;
    phaseRowId: string;
    phaseRow: KupDataRow;
}
export class KupPlannerLastOnChangeReceived {
    private event: GanttRow;
    private dateTime = new Date();
    private threshold;

    constructor(event: GanttRow, threshold: number = 100) {
        this.event = event;
        this.threshold = threshold;
    }

    isEquivalent(newEvent: GanttRow): boolean {
        const intervalTime = new Date().valueOf() - this.dateTime.valueOf();
        const equals = JSON.stringify(this.event) === JSON.stringify(newEvent);
        return equals && intervalTime < this.threshold;
    }

    resetDateTime() {
        this.dateTime = new Date();
    }
}

export const defaultStylingOptions = {
    listCellWidth: '300px',
    rowHeight: 40,
    barFill: 90,
    projectProgressColor: '#CBCBCB',
    projectProgressSelectedColor: '#CBCBCB',
    projectBackgroundColor: '#CBCBCB',
    projectBackgroundSelectedColor: '#CBCBCB',
    barProgressColor: '#A2A415',
    barProgressSelectedColor: '#A2A415',
    barBackgroundColor: '#A2A415',
    barBackgroundSelectedColor: '#A2A415',
};

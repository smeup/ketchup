import { Detail, GanttTask } from '@sme.up/gantt-component';
import { Phase } from '@sme.up/gantt-component';
import { GanttRow } from '@sme.up/gantt-component';
import { KupEventPayload } from '../../components';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDataTableCell } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-gantt component.
 * Used to export every prop in an object.
 */
export enum KupPlannerProps {
    customStyle = 'Custom style of the component.',
    data = 'Dataset containg the tasks list',
    detailData = 'Dataset containg the details list',

    detailColorCol = 'Column containing the detail color, in hex format',
    detailColumns = 'Columns containing informations displayed in the left box, near the gantt of details',
    detailDates = 'Columns containing detail duration, from (firstDate) to (secondDate)',
    detailHeight = 'Height for detail gantt',
    detailIdCol = 'Column containing unique detail identifier',
    detailNameCol = 'Column containing detail name displayed',
    detailPrevDates = 'Columns containing forecast detail duration, from (firstDate) to (secondDate)',

    listCellWidth = 'Total size of the cells inside to the left box, near the gantt',
    maxWidth = 'Max width for component',

    phaseColorCol = 'Column containing the phase color in hex format',
    phaseColumns = 'Columns containing informations displayed in the left box ,near the gantt of phases',
    phaseColParDep = 'Column containing the name of the parent phases',
    phaseDates = 'Columns containing phase duration, from (firstDate) to (secondDate)',
    phaseIdCol = 'Column containing unique phase identifier',
    phaseNameCol = 'Column containing phase name displayed',
    phasePrevDates = 'Columns containing forecast phase duration, from (firstDate) to (secondDate)',

    showSecondaryDates = 'Enable/disable display of secondary dates',

    taskColumns = 'Columns containing informations displayed in the left box, near the gantt',
    taskDates = 'Columns containing task duration, from (firstDate) to (secondDate)',
    taskHeight = 'Height for main gantt',
    taskIdCol = 'Column containing unique task identifier',
    taskNameCol = 'Column containing task name displayed',
    taskPrevDates = 'Columns containing forecast task duration, from (firstDate) to (secondDate)',

    titleMess = 'Message displayed on top',
}

export enum KupPlannerTaskAction {
    onTaskOpening = 'onTaskOpening',
    onTaskClosing = 'onTaskClosing',
    onClick = 'onClick',
    onResize = 'onResize',
    onRightClick = 'onRightClick',
}

export interface KupPlannerEventPayload extends KupEventPayload {
    value: GanttRow;
    taskAction?: KupPlannerTaskAction;
}
export interface KupPlannerClickEventPayload extends KupPlannerEventPayload {
    details: KupPlannerEventHandlerDetails;
}

export interface KupPlannerEventHandlerDetails {
    cell: KupDataTableCell;
    column: KupDataColumn;
    originalEvent: React.MouseEvent<Element, MouseEvent>;
    row: KupDataRow;
}

export enum KupPlannerGanttRowType {
    TASK = 'task',
    PHASE = 'phase',
    DETAIL = 'detail',
}

export interface KupPlannerGanttTask extends GanttTask {
    taskRowId: string;
    taskRow: KupDataRow;
    rowType: KupPlannerGanttRowType;
}
export interface KupPlannerDetail extends Detail {
    rowType: KupPlannerGanttRowType;
    detailRow: KupDataRow;
}

export interface KupPlannerPhase extends Phase {
    taskRowId: string;
    taskRow: KupDataRow;
    phaseRowId: string;
    phaseRow: KupDataRow;
    rowType: KupPlannerGanttRowType;
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

export interface KupPlannerDatesSanitized {
    dateValues: string[];
    secDateValues: string[];
}

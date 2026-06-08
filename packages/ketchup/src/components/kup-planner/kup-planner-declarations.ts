import { KupEventPayload } from '../../components';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDataTableCell } from '../kup-data-table/kup-data-table-declarations';
import { FunctionalComponent } from '@stencil/core';
import {
    TaskListHeaderComponent,
    TaskListTableComponent,
    TooltipContentComponent,
} from './utils/kup-planner-adapted-types';

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
    detailFilter = "Sets the detail's filter.",
    detailHeight = 'Height for detail gantt',
    detailIdCol = 'Column containing unique detail identifier',
    detailNameCol = 'Column containing detail name displayed',
    detailPrevDates = 'Columns containing forecast detail duration, from (firstDate) to (secondDate)',
    detailInitialScrollX = 'Sets the initial scroll X for the detail.',
    detailInitialScrollY = 'Sets the initial scroll Y for the detail.',

    listCellWidth = 'Total size of the cells inside to the left box, near the gantt',
    maxWidth = 'Max width for component',

    phaseColorCol = 'Column containing the phase color in hex format',
    phaseColumns = 'Columns containing informations displayed in the left box ,near the gantt of phases',
    phaseColParDep = 'Column containing the name of the parent phases',
    phaseDates = 'Columns containing phase duration, from (firstDate) to (secondDate)',
    phaseIdCol = 'Column containing unique phase identifier',
    phaseNameCol = 'Column containing phase name displayed',
    phasePrevDates = 'Columns containing forecast phase duration, from (firstDate) to (secondDate)',

    readOnly = 'When true, the two gantts are not interactable.',
    showSecondaryDates = 'Enable/disable display of secondary dates',

    taskColumns = 'Columns containing informations displayed in the left box, near the gantt',
    taskDates = 'Columns containing task duration, from (firstDate) to (secondDate)',
    taskFilter = "Sets the task's filter.",
    taskHeight = 'Height for main gantt',
    taskIdCol = 'Column containing unique task identifier',
    taskNameCol = 'Column containing task name displayed',
    taskPrevDates = 'Columns containing forecast task duration, from (firstDate) to (secondDate)',
    taskInitialScrollX = 'Sets the initial scroll X for the task.',
    taskInitialScrollY = 'Sets the initial scroll Y for the task.',

    titleMess = 'Message displayed on top',
}

export enum KupPlannerTaskAction {
    onTaskOpening = 'onTaskOpening',
    onTaskClosing = 'onTaskClosing',
    onClick = 'onClick',
    onDblClick = 'onDblClick',
    onResize = 'onResize',
    onRightClick = 'onRightClick',
    onPhase = 'onPhase',
    onTask = 'onTask',
}

export interface KupPlannerEventPayload extends KupEventPayload {
    value: KupPlannerGanttRow;
    taskAction?: KupPlannerTaskAction;
}
export interface KupPlannerClickEventPayload extends KupPlannerEventPayload {
    details: KupPlannerEventHandlerDetails;
}
export interface KupPlannerUnloadEventPayload extends KupEventPayload {
    storedSettings: KupPlannerStoredSettings;
}
export interface KupPlannerEventHandlerDetails {
    cell: KupDataTableCell;
    column: KupDataColumn;
    originalEvent: UIEvent;
    row: KupDataRow;
}

export enum KupPlannerGanttRowType {
    TASK = 'task',
    PHASE = 'phase',
    DETAIL = 'detail',
}

export interface KupPlannerGanttTask extends KupPlannerGanttTaskN {
    taskRowId: string;
    taskRow: KupDataRow;
    rowType: KupPlannerGanttRowType;
}
export interface KupPlannerDetail extends KupPlannerItemDetail {
    rowType: KupPlannerGanttRowType;
    detailRow: KupDataRow;
}

export interface KupPlannerPhase extends KupPlannerPhaseGantt {
    taskRowId: string;
    taskRow: KupDataRow;
    phaseRowId: string;
    phaseRow: KupDataRow;
    rowType: KupPlannerGanttRowType;
}

export class KupPlannerLastOnChangeReceived {
    private event: KupPlannerGanttRow;
    private dateTime = new Date();
    private threshold;

    constructor(event: KupPlannerGanttRow, threshold: number = 100) {
        this.event = event;
        this.threshold = threshold;
    }

    isEquivalent(newEvent: KupPlannerGanttRow): boolean {
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
    projectProgressColor: '#C6C6C6',
    projectProgressSelectedColor: '#C6C6C6',
    projectBackgroundColor: '#C6C6C6',
    projectBackgroundSelectedColor: '#C6C6C6',
    barProgressColor: '#A2A415',
    barProgressSelectedColor: '#A2A415',
    barBackgroundColor: '#A2A415',
    barBackgroundSelectedColor: '#A2A415',
    barDropZoneColor: '#4d9f0240',
};

export interface KupPlannerDatesSanitized {
    dateValues: string[];
    secDateValues: string[];
    hourValues: string[];
    secHourValues: string[];
}

export type KupPlannerViewMode = 'hour' | 'day' | 'week' | 'month' | 'year';

export interface KupPlannerStoredSettings {
    showSecondaryDates: boolean;
    detailFilter: string;
    detailInitialScrollX: number;
    detailInitialScrollY: number;
    taskFilter: string;
    taskInitialScrollX: number;
    taskInitialScrollY: number;
    viewMode: KupPlannerViewMode;
}
export type KupPlannerTaskType = 'task' | 'project' | 'timeline';

export interface KupPlannerTaskIcon {
    color: string;
    url: string;
}

export interface KupPlannerGanttRow {
    id: string;
    name: string;
    type: KupPlannerTaskType;
    valuesToShow: string[];
}

/** Commessa */
export interface KupPlannerGanttTaskN extends KupPlannerGanttRow {
    startDate: string;
    endDate: string;
    secondaryStartDate: string;
    secondaryEndDate: string;
    phases?: KupPlannerPhaseGantt[];
    details?: KupPlannerItemDetail[];
    icon?: KupPlannerTaskIcon;
    startHour?: string;
    endHour?: string;
    secondaryStartHour?: string;
    secondaryEndHour?: string;
}

/** Fase */
export interface KupPlannerPhaseGantt extends KupPlannerGanttRow {
    startDate: string;
    endDate: string;
    secondaryStartDate: string;
    secondaryEndDate: string;
    color?: string;
    selectedColor?: string;
    dependencies?: string[];
    icon?: KupPlannerTaskIcon;
    startHour?: string;
    endHour?: string;
    secondaryStartHour?: string;
    secondaryEndHour?: string;
}

/** Risorsa */
export interface KupPlannerItemDetail extends KupPlannerGanttRow {
    schedule: KupPlannerScheduleItem[];
}

export interface KupPlannerScheduleItem {
    startDate: string;
    endDate: string;
    color?: string;
    selectedColor?: string;
    icon?: KupPlannerTaskIcon;
    startHour?: string;
    endHour?: string;
}

/** Dependency between tasks */
export type KupPlannerDependencyType = 'FS' | 'SS' | 'FF' | 'SF';

export interface KupPlannerDependency {
    /** optional unique id for the dependency */
    id?: string;
    /** source task id */
    sourceId: string;
    /** target task id */
    targetId: string;
    /** dependency type: Finish-Start, Start-Start, Finish-Finish, Start-Finish */
    type?: KupPlannerDependencyType;
}

export interface KupPlannerTask {
    id: string;
    type: KupPlannerTaskType;
    name: string;
    valuesToShow: string[];
    start: Date;
    end: Date;
    secondaryStart?: Date;
    secondaryEnd?: Date;
    timeline?: KupPlannerTimeframe[];
    /**
     * From 0 to 100
     */
    progress: number;
    styles?: {
        backgroundColor?: string;
        backgroundSelectedColor?: string;
        progressColor?: string;
        progressSelectedColor?: string;
    };
    isDisabled?: boolean;
    project?: string;
    dependencies?: string[];
    hideChildren?: boolean;
    displayOrder?: number;
    icon?: KupPlannerTaskIcon;
    startHour?: string;
    endHour?: string;
    secondaryStartHour?: string;
    secondaryEndHour?: string;
}

export interface KupPlannerTimeframe {
    start: Date;
    end: Date;
    backgroundColor: string;
    backgroundSelectedColor?: string;
    icon?: KupPlannerTaskIcon;
}

export interface KupPlannerStylingOption {
    headerHeight?: number;
    columnWidth?: number;
    listCellWidth?: string;
    rowHeight?: number;
    ganttHeight?: number;
    barCornerRadius?: number;
    handleWidth?: number;
    fontFamily?: string;
    fontSize?: string;
    barFill?: number;
    projectFill?: number;
    timelineFill?: number;
    barProgressColor?: string;
    barProgressSelectedColor?: string;
    barBackgroundColor?: string;
    barBackgroundSelectedColor?: string;
    projectProgressColor?: string;
    projectProgressSelectedColor?: string;
    projectBackgroundColor?: string;
    projectBackgroundSelectedColor?: string;
    arrowColor?: string;
    arrowIndent?: number;
    todayColor?: string;
    TooltipContent?: (props: {
        task: KupPlannerTask;
        fontSize: string;
        fontFamily: string;
    }) => JSX.Element;
    TaskListHeader?:
        | FunctionalComponent<{
              headerHeight: number;
              rowWidth: string;
              fontFamily: string;
              fontSize: string;
          }>
        | JSX.Element;
    TaskListTable?:
        | FunctionalComponent<{
              rowHeight: number;
              rowWidth: string;
              fontFamily: string;
              fontSize: string;
              locale: string;
              tasks: KupPlannerTask[];
              selectedTaskId: string;
              /**
               * Sets selected task by id
               */
              setSelectedTask: (taskId: string) => void;
              onExpanderClick: (task: KupPlannerTask) => void;
          }>
        | JSX.Element;
}

/**
 * Interface for phase projection
 */
export interface KupPlannerGanttPhaseProjection {
    start: Date;
    end: Date;
    color: string;
}

export interface KupPlannerGanttProps
    extends KupPlannerEventOption,
        KupPlannerDisplayOption,
        KupPlannerStylingOption,
        KupPlannerCustomOptions {
    id: string;
    tasks: KupPlannerTask[];
    /** Structured dependencies to render as arrows */
    dependencies?: KupPlannerDependency[];
    projection?: KupPlannerGanttPhaseProjection;
    filter: HTMLElement;
    initialScrollX?: number;
    initialScrollY?: number;
    readOnly?: boolean;
    viewMode?: KupPlannerViewMode;
}

export interface KupPlannerEventOption {
    /**
     * Time step value for date changes.
     */
    timeStep?: number;
    /**
     * Invokes on bar select on unselect.
     */
    select?: (task: KupPlannerTask, isSelected: boolean) => void;
    /**
     * Invokes on bar double click.
     */
    doubleClick?: (task: KupPlannerTask) => void;
    /**
     * Invokes on bar click.
     */
    barClick?: (task: KupPlannerTask) => void;
    /**
     * Invokes on bar dbl click.
     */
    barDblClick?: (task: KupPlannerTask) => void;
    /**
     * Invokes on bar context menu click.
     */
    barContextMenu?: (event: UIEvent, task: KupPlannerTask) => void;
    /**
     * Invokes on end and start time change. Chart undoes operation if method return false or error.
     */
    dateChange?: (
        task: KupPlannerTask,
        children: KupPlannerTask[]
    ) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on progress change. Chart undoes operation if method return false or error.
     */
    progressChange?: (
        task: KupPlannerTask,
        children: KupPlannerTask[]
    ) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on delete selected task. Chart undoes operation if method return false or error.
     */
    delete?: (
        task: KupPlannerTask
    ) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on expander on task list
     */
    expanderClick?: (task: KupPlannerTask) => void;
    /**
     * Invokes on scroll X
     */
    scrollXChange?: (x: number) => void;
    /**
     * Invokes on scroll Y
     */
    scrollYChange?: (y: number) => void;
    /**
     * Invokes on end and start time change. Chart undoes operation if method return false or error.
     */
    phaseDrop?: (
        originalPhaseData: KupPlannerTask,
        originalTaskData: KupPlannerTask,
        finalPhaseData: KupPlannerTask,
        destinationData: KupPlannerTask
    ) => void | boolean | Promise<void> | Promise<boolean>;
}

export interface KupPlannerDisplayOption {
    viewMode?: KupPlannerViewMode;
    viewDate?: Date;
    preStepsCount?: number;
    /**
     * Specifies the month name language. Able formats: ISO 639-2, Java Locale
     */
    locale?: string;
    rtl?: boolean;
    /** Gantt date range */
    displayedStartDate: Date;
    displayedEndDate: Date;
}

export interface KupPlannerCustomOptions {
    /** Custom formatters for calendar headers */
    dateTimeFormatters?: KupPlannerDateTimeFormatters;
    /** If true, show only one line of text in calendar headers */
    singleLineHeader?: boolean;
    /** If true, hide task labels in the diagram */
    hideLabel?: boolean;
    /** If true, show an additional box in the gantt for the secondary Task dates when available */
    showSecondaryDates?: boolean;
    /** If true, do not show dependency arrows */
    hideDependencies?: boolean;
}
type KupPlannerDateTimeFormatter = (date: Date, locale: string) => string;
export type KupPlannerDateTimeFormatters = {
    /** For top row in ViewMode.Month, bottom row in ViewMode.Year */
    year?: KupPlannerDateTimeFormatter;
    /** For top row in ViewMode.Day, bottom row in ViewMode.Month */
    month?: KupPlannerDateTimeFormatter;
    /** For top row in ViewMode.Week */
    monthAndYear?: KupPlannerDateTimeFormatter;
    /** For bottom row in ViewMode.Week */
    week?: KupPlannerDateTimeFormatter;
    /** For bottom row in ViewMode.Day */
    day?: KupPlannerDateTimeFormatter;
    /** For bottom row in ViewMode.Hour / HalfDay / QuarterDay */
    hour?: KupPlannerDateTimeFormatter;
    /** For top row in ViewMode.Hour / HalfDay / QuarterDay */
    dayAndMonth?: KupPlannerDateTimeFormatter;
};

/**
 * Interface for current date indicator located into gantt content
 */
export interface KupPlannerCurrentDateIndicator {
    color: string;
    x: number;
}

export interface KupPlannerDateSetup {
    dates: Date[];
    viewMode: KupPlannerViewMode;
}

export type KupPlannerCalendarProps = {
    dateSetup: KupPlannerDateSetup;
    locale: string;
    viewMode: KupPlannerViewMode;
    rtl: boolean;
    headerHeight: number;
    columnWidth: number;
    fontFamily: string;
    fontSize: string;
    dateTimeFormatters?: KupPlannerDateTimeFormatters;
    singleLineHeader: boolean;
    currentDateIndicator?: KupPlannerCurrentDateIndicator;
};

export interface KupPlannerBarTask extends KupPlannerTask {
    index: number;
    typeInternal: KupPlannerTaskTypeInternal;
    x1: number;
    x2: number;
    x1secondary?: number;
    x2secondary?: number;
    y: number;
    height: number;
    progressX: number;
    progressWidth: number;
    barCornerRadius: number;
    handleWidth: number;
    barChildren: KupPlannerBarTask[];
    styles: {
        backgroundColor: string;
        backgroundSelectedColor: string;
        progressColor: string;
        progressSelectedColor: string;
    };
    ySecondary?: number;
}

export type KupPlannerTaskTypeInternal = KupPlannerTaskType | 'smalltask';

export type KupPlannerTaskGanttContentProps = {
    dependencies: KupPlannerDependency[];
    tasks: KupPlannerBarTask[];
    dates: Date[];
    ganttEvent: KupPlannerGanttEvent;
    selectedTask: KupPlannerBarTask | undefined;
    rowHeight: number;
    columnWidth: number;
    timeStep: number;
    svg?: SVGSVGElement;
    svgWidth: number;
    taskHeight: number;
    arrowColor: string;
    arrowIndent: number;
    fontSize: string;
    fontFamily: string;
    rtl: boolean;
    ganttHeight: number;
    hideLabel?: boolean;
    showSecondaryDates?: boolean;
    currentDateIndicator?: KupPlannerCurrentDateIndicator;
    projection?: {
        x0: number;
        xf: number;
        color: string;
    };
    readOnly: boolean;
    setGanttEvent: (value: KupPlannerGanttEvent) => void;
    setFailedTask: (value: KupPlannerBarTask | null) => void;
    setSelectedTask: (taskId: string) => void;
} & KupPlannerEventOption;

export type KupPlannerBarMoveAction = 'progress' | 'end' | 'start' | 'move';
export type KupPlannerGanttContentMoveAction =
    | 'mouseenter'
    | 'mouseleave'
    | 'delete'
    | 'dblclick'
    | 'click'
    | 'contextmenu'
    | 'select'
    | ''
    | KupPlannerBarMoveAction;

export type KupPlannerGanttEvent = {
    changedTask?: KupPlannerBarTask;
    originalSelectedTask?: KupPlannerBarTask;
    action: KupPlannerGanttContentMoveAction;
};

export type KupPlannerTaskListProps = {
    headerHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
    rowHeight: number;
    ganttHeight: number;
    scrollY: number;
    locale: string;
    tasks: KupPlannerTask[];
    taskListRef: HTMLDivElement;
    horizontalContainerClass?: string;
    selectedTask: KupPlannerBarTask | undefined;
    setSelectedTask: (task: string) => void;
    expanderClick: (task: KupPlannerTask) => void;
    TaskListHeader:
        | FunctionalComponent<{
              headerHeight: number;
              rowWidth: string;
              fontFamily: string;
              fontSize: string;
          }>
        | JSX.Element;
    TaskListTable:
        | FunctionalComponent<{
              rowHeight: number;
              rowWidth: string;
              fontFamily: string;
              fontSize: string;
              locale: string;
              tasks: KupPlannerTask[];
              selectedTaskId: string;
              setSelectedTask: (taskId: string) => void;
              onExpanderClick: (task: KupPlannerTask) => void;
          }>
        | JSX.Element;
    filter: HTMLElement;
};

export type KupPlannerGridProps = {
    tasks: KupPlannerTask[];
    dates: Date[];
    svgWidth: number;
    rowHeight: number;
    columnWidth: number;
    todayColor: string;
    rtl: boolean;
};

export type KupPlannerTaskGanttProps = {
    gridProps: KupPlannerGridProps;
    calendarProps: KupPlannerCalendarProps;
    barProps: KupPlannerTaskGanttContentProps;
    ganttHeight: number;
    taskGanttRef: HTMLDivElement;
    scrollY: number;
    scrollX: number;
};

export type KupPlannerArrowProps = {
    taskFrom: KupPlannerBarTask;
    taskTo: KupPlannerBarTask;
    rowHeight: number;
    taskHeight: number;
    arrowIndent: number;
    rtl: boolean;
};

export type KupPlannerTaskItemProps = {
    task: KupPlannerBarTask;
    arrowIndent: number;
    taskHeight: number;
    isProgressChangeable: boolean;
    isDateMovable: boolean;
    isDateResizable: boolean;
    isDelete: boolean;
    isSelected: boolean;
    rtl: boolean;
    onEventStart: (
        action: KupPlannerGanttContentMoveAction,
        selectedTask: KupPlannerBarTask,
        event?: MouseEvent | KeyboardEvent
    ) => any;
    hideLabel?: boolean;
    showSecondaryDates?: boolean;
};

export type KupPlannerBarDisplayProps = {
    x: number;
    y: number;
    width: number;
    height: number;
    isSelected: boolean;
    /* progress start point */
    progressX: number;
    progressWidth: number;
    barCornerRadius: number;
    styles: {
        backgroundColor: string;
        backgroundSelectedColor: string;
        progressColor: string;
        progressSelectedColor: string;
    };
    onMouseDown?: (event: MouseEvent) => void;
    xSecondary?: number;
    widthSecondary?: number;
    showSecondaryDates: boolean;
    ySecondary?: number;
};

export type KupPlannerBarDateHandleProps = {
    x: number;
    y: number;
    width: number;
    height: number;
    barCornerRadius: number;
    onMouseDown: (event: MouseEvent) => void;
};

export type KupPlannerBarProgressHandleProps = {
    progressPoint: string;
    onMouseDown: (event: MouseEvent) => void;
};

export interface KupPlannerTaskIconProps {
    color: string;
    url: string;
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
}

export interface GanttSyncScrollEvent {
    componentId: string;
    scrollX: number;
}

export interface KupPlannerSwitcherProps {
    onTimeUnitChange: (timeUnit: KupPlannerViewMode) => void;
}

export interface KupGanttPlannerProps {
    items: KupPlannerGanttTaskN[] | KupPlannerItemDetail[];
    taskListHeaderProject?: TaskListHeaderComponent;
    taskListTableProject?: TaskListTableComponent;
    tooltipContent?: TooltipContentComponent;
    stylingOptions?: KupPlannerStylingOption;
    hideLabel?: boolean;
    showSecondaryDates?: boolean;
    ganttHeight?: number;
    hideDependencies?: boolean;
    /** Structured dependencies to render as arrows */
    dependencies?: KupPlannerDependency[];
    title: string;
    filter: HTMLElement;
    initialScrollX?: number;
    initialScrollY?: number;
    readOnly?: boolean;
    /** Events */
    onDateChange?: (row: KupPlannerGanttRow) => void;
    onClick?: (row: KupPlannerGanttRow) => void;
    onDblClick?: (row: KupPlannerGanttRow) => void;
    onContextMenu?: (event: MouseEvent, row: KupPlannerGanttRow) => void;
    onScrollY?: (y: number) => void;
    onPhaseDrop?: (row: KupPlannerGanttRow) => void;
}

export interface KupGanttPlannerDetailsProps {
    items: KupPlannerItemDetail[];
    taskListHeaderProject?: TaskListHeaderComponent;
    taskListTableProject?: TaskListTableComponent;
    tooltipContent?: TooltipContentComponent;
    stylingOptions?: KupPlannerStylingOption;
    hideLabel?: boolean;
    ganttHeight?: number;
    hideDependencies?: boolean;
    /** Structured dependencies to render as arrows */
    dependencies?: KupPlannerDependency[];
    title: string;
    filter: HTMLElement;
    initialScrollX?: number;
    initialScrollY?: number;
    readOnly?: boolean;

    /** Events */
    onDateChange?: (row: KupPlannerGanttRow) => void;
    onClick?: (row: KupPlannerGanttRow) => void;
    onDblClick?: (row: KupPlannerGanttRow) => void;
    onContextMenu?: (event: MouseEvent, row: KupPlannerGanttRow) => void;
    onScrollY?: (y: number) => void;
}

export interface PlannerProps {
    mainGantt: KupGanttPlannerProps;
    secondaryGantt?: KupGanttPlannerDetailsProps;
    preStepsCount?: number;
    viewMode: KupPlannerViewMode;
    scrollableTaskList?: boolean;
    onSetDoubleView?: (checked: boolean) => void;
    onSetViewMode?: (value: KupPlannerViewMode) => void;
    onScrollX?: (x: number) => void;
}

export const KUP_PLANNER_MAIN_GANTT_ID = 'main';
export const KUP_PLANNER_SECONDARY_GANTT_ID = 'secondary';

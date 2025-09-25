import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupPlannerEventPayload,
    KupPlannerGanttTask,
    KupPlannerLastOnChangeReceived,
    KupPlannerPhase,
    KupPlannerProps,
    KupPlannerTaskAction,
    KupPlannerGanttRowType,
    KupPlannerDetail,
    KupPlannerClickEventPayload,
    KupPlannerViewMode,
    KupPlannerStoredSettings,
    KupPlannerUnloadEventPayload,
    KupPlannerGanttRow,
    KupPlannerDependency,
    PlannerProps,
    KupPlannerTaskType,
    defaultStylingOptions,
} from './kup-planner-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupDataCell,
    KupDataColumn,
    KupDataDataset,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { getCellValueForDisplay } from '../../utils/cell-utils';
import {
    getValuesToShow,
    isAtLeastOneDateValid,
    sanitizeAllDates,
} from './kup-planner-helper';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { KupLanguageSearch } from '../../managers/kup-language/kup-language-declarations';
import { KupPlannerState } from './kup-planner-state';
import { KupStore } from '../kup-state/kup-store';

@Component({
    tag: 'kup-planner',
    styleUrl: 'kup-planner.scss',
    shadow: true,
})
export class KupPlanner {
    @Prop() stateId: string = '';
    @Prop() store: KupStore;

    state: KupPlannerState = new KupPlannerState();

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state = this.store.getState(this.stateId);
            if (state != null) {
                this.#kupManager.debug.logMessage(
                    this,
                    'Initializing stateId ' + this.stateId
                );
                // *** PROPS ***
                this.detailFilter = state.detailFilter;
                this.showSecondaryDates = state.showSecondaryDates;
                this.detailInitialScrollX = state.detailInitialScrollX;
                this.detailInitialScrollY = state.detailInitialScrollY;
                this.taskFilter = state.taskFilter;
                this.taskInitialScrollX = state.taskInitialScrollX;
                this.taskInitialScrollY = state.taskInitialScrollY;
                this.viewMode = state.viewMode;
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = false;
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.detailFilter,
                    this.#storedSettings.detailFilter
                )
            ) {
                this.state.detailFilter = this.#storedSettings.detailFilter;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.showSecondaryDates,
                    this.#storedSettings.showSecondaryDates
                )
            ) {
                this.state.showSecondaryDates =
                    this.#storedSettings.showSecondaryDates;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.detailInitialScrollX,
                    this.#storedSettings.detailInitialScrollX
                )
            ) {
                this.state.detailInitialScrollX =
                    this.#storedSettings.detailInitialScrollX;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.detailInitialScrollY,
                    this.#storedSettings.detailInitialScrollY
                )
            ) {
                this.state.detailInitialScrollY =
                    this.#storedSettings.detailInitialScrollY;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.taskFilter,
                    this.#storedSettings.taskFilter
                )
            ) {
                this.state.taskFilter = this.#storedSettings.taskFilter;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.taskInitialScrollX,
                    this.#storedSettings.taskInitialScrollX
                )
            ) {
                this.state.taskInitialScrollX =
                    this.#storedSettings.taskInitialScrollX;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.taskInitialScrollY,
                    this.#storedSettings.taskInitialScrollY
                )
            ) {
                this.state.taskInitialScrollY =
                    this.#storedSettings.taskInitialScrollY;
                somethingChanged = true;
            }
            if (
                !this.#kupManager.objects.deepEqual(
                    this.state.viewMode,
                    this.#storedSettings.viewMode
                )
            ) {
                this.state.viewMode = this.#storedSettings.viewMode;
                somethingChanged = true;
            }

            if (somethingChanged) {
                this.#kupManager.debug.logMessage(
                    this,
                    'Persisting stateId ' + this.stateId
                );
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

    //////////////////////////////
    // End state stuff
    //////////////////////////////
    plannerRenderer: HTMLKupPlannerRendererElement = undefined;
    /**
     * References the root HTML element of the component (<kup-planner>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop()
    customStyle: string = '';

    /**
     * Dataset containg the tasks list
     * @default null
     */
    @Prop()
    data: KupDataDataset;

    /**
     * Dataset containg the details list
     * @default null
     */
    @Prop()
    detailData: KupDataDataset;

    /**
     * Column containing the detail color, in hex format
     * @default null
     */
    @Prop()
    detailColorCol: string;

    /**
     * Columns containing informations displayed in the left box, near the gantt of details
     * @default null
     */
    @Prop()
    detailColumns: string[];

    /**
     * Columns containing detail duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    detailDates: string[];

    /**
     * Sets the detail's filter.
     * @default undefined
     */
    @Prop()
    detailFilter: string;

    /**
     * Height for detail gantt
     * @default null
     */
    @Prop()
    detailHeight: number;

    /**
     * Columns containing detail hour duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    detailHours: string[] = [];

    /**
     * Column containing icon name to show, for detail
     * @default null
     */
    @Prop()
    detailIconCol: string;

    /**
     * Column containing unique detail identifier
     * @default null
     */
    @Prop()
    detailIdCol: string;

    /**
     * Column containing detail name displayed
     * @default null
     */
    @Prop()
    detailNameCol: string;

    /**
     * Columns containing forecast detail duration, from (firstHour) to (secondHour)
     * @default null
     */
    @Prop()
    detailPrevHours: string[] = [];

    /**
     * Columns containing forecast detail duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    detailPrevDates: string[];

    /**
     * Sets the initial scroll X for the detail.
     * @default undefined
     */
    @Prop()
    detailInitialScrollX: number;

    /**
     * Sets the initial scroll Y for the detail.
     * @default undefined
     */
    @Prop()
    detailInitialScrollY: number;

    /**
     * Total size of the cells inside to the left box, near the gantt
     * @default '300px'
     */
    @Prop()
    listCellWidth: string = '300px';

    /**
     * Max width for component
     * @default '90vw'
     */
    @Prop()
    maxWidth: string = '90vw';

    /**
     * Column containing the phase color in hex format
     * @default null
     */
    @Prop()
    phaseColorCol: string;

    /**
     * Columns containing informations displayed in the left box ,near the gantt of phases
     * @default null
     */
    @Prop()
    phaseColumns: string[];

    /**
     * Column containing the name of the parent phases
     * @default null
     */
    @Prop()
    phaseColParDep: string;

    /**
     * Columns containing phase duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    phaseDates: string[];

    /**
     * Columns containing phase hour duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    phaseHours: string[] = [];

    /**
     * Column containing icon name to show, for phase
     * @default null
     */
    @Prop()
    phaseIconCol: string;

    /**
     * Column containing unique phase identifier
     * @default null
     */
    @Prop()
    phaseIdCol: string;

    /**
     * Column containing phase name displayed
     * @default null
     */
    @Prop()
    phaseNameCol: string;

    /**
     * Columns containing forecast phase duration, from (firstHour) to (secondHour)
     * @default null
     */
    @Prop()
    phasePrevHours: string[] = [];

    /**
     * Columns containing forecast phase duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    phasePrevDates: string[];

    /** Structured dependencies to render as arrows */
    @Prop()
    dependencies: KupPlannerDependency[] = [];

    /**
     * When true, the two gantts are not interactable.
     * @default false
     */
    @Prop()
    readOnly: boolean = false;

    /**
     * Enable/disable display of secondary dates
     * @default false
     */
    @Prop()
    showSecondaryDates: boolean = false;

    /**
     * Columns containing informations displayed in the left box, near the gantt
     * @default null
     */
    @Prop()
    taskColumns: string[];

    /**
     * Columns containing task duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    taskDates: string[];

    /**
     * Sets the task's filter.
     * @default undefined
     */
    @Prop()
    taskFilter: string;

    /**
     * Height for main gantt
     * @default null
     */
    @Prop()
    taskHeight: number;

    /**
     * Columns containing task hours duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    taskHours: string[] = [];

    /**
     * Column containing icon name to show, for task
     * @default null
     */
    @Prop()
    taskIconCol: string;

    /**
     * Column containing unique task identifier
     * @default null
     */
    @Prop()
    taskIdCol: string;

    /**
     * Sets the initial scroll X for the task.
     * @default undefined
     */
    @Prop()
    taskInitialScrollX: number;

    /**
     * Sets the initial scroll Y for the task.
     * @default undefined
     */
    @Prop()
    taskInitialScrollY: number;

    /**
     * Column containing task name displayed
     * @default null
     */
    @Prop()
    taskNameCol: string;

    /**
     * Columns containing forecast task duration, from (firstHour) to (secondHour)
     * @default null
     */
    @Prop()
    taskPrevHours: string[] = [];

    /**
     * Columns containing forecast task duration, from (firstDate) to (secondDate)
     * @default null
     */
    @Prop()
    taskPrevDates: string[];

    /**
     * Message displayed on top
     * @default null
     */
    @Prop()
    titleMess: string;

    /**
     * Sets the view mode.
     * @default 'month'
     */
    @Prop()
    viewMode: KupPlannerViewMode = 'month';

    /**
     * Sets the filter for main gantt.
     * @default undefined
     */
    @Prop()
    mainFilter: HTMLElement;

    /**
     * Sets the filter for secondary gantt.
     * @default undefined
     */
    @Prop()
    secondaryFilter: HTMLElement;

    /**
     * Sets the scroll bar for task list.
     * @default false
     */
    @Prop()
    scrollableTaskList: boolean = false;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */

    @State()
    plannerProps: PlannerProps;

    @Watch('data')
    dataChanged() {
        this.#phases = {};
    }

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #lastOnChangeReceived: KupPlannerLastOnChangeReceived;
    #clickTimeout: ReturnType<typeof setTimeout>[] = [];
    #phases: GenericObject = {};
    // no re-render
    #storedSettings: KupPlannerStoredSettings;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-planner-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupPlannerEventPayload>;

    @Event({
        eventName: 'kup-planner-dblclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDblClick: EventEmitter<KupPlannerEventPayload>;

    @Event({
        eventName: 'kup-planner-datechange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDateChange: EventEmitter<KupPlannerEventPayload>;

    @Event({
        eventName: 'kup-planner-phasedrop',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupPhaseDrop: EventEmitter<KupPlannerEventPayload>;

    @Event({
        eventName: 'kup-planner-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupPlannerEventPayload>;

    /**
     * Generic right click event on planner.
     */
    @Event({
        eventName: 'kup-planner-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupContextMenu: EventEmitter<KupPlannerClickEventPayload>;

    /**
     * When component unload is complete
     */
    @Event({
        eventName: 'kup-planner-didunload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<KupPlannerUnloadEventPayload>;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupPlannerProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
        this.plannerRenderer.refresh();
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupPlannerProps, props);
    }

    /**
     * Add a list of phases to the project
     * @param taskId
     * @param data - Matrix which contains project phases
     */
    @Method()
    async addPhases(taskId: string, data: KupDataDataset) {
        const task = this.#getTask(taskId);
        if (task) {
            this.#phases[taskId] = data;
            task.phases = data.rows
                ?.filter((row) =>
                    isAtLeastOneDateValid(
                        row.cells[this.phaseDates[0]],
                        row.cells[this.phaseDates[1]]
                    )
                )
                .map((row) => {
                    const datesSanitized = sanitizeAllDates(
                        row.cells[this.phaseDates[0]],
                        row.cells[this.phaseDates[1]],
                        row.cells[this.phasePrevDates[0]],
                        row.cells[this.phasePrevDates[1]],
                        row.cells[this.phaseHours[0]],
                        row.cells[this.phaseHours[1]],
                        row.cells[this.phasePrevHours[0]],
                        row.cells[this.phasePrevHours[1]]
                    );
                    const valuesToShow = getValuesToShow(
                        row,
                        this.phaseIdCol,
                        this.phaseNameCol,
                        data.columns,
                        this.phaseColumns,
                        () =>
                            this.phaseColumns.map((col) =>
                                col == this.phaseDates[0]
                                    ? '#START#'
                                    : col == this.phaseDates[1]
                                    ? '#END#'
                                    : getCellValueForDisplay(
                                          data.columns.find(
                                              (kCol) => kCol.name == col
                                          ),
                                          row.cells[col]
                                      )
                            )
                    );
                    let iconUrl = this.#getIconUrl(row, this.phaseIconCol);
                    let iconColor = this.#getIconColor(row, this.phaseIconCol);

                    const _phaseIdRaw =
                        (row.cells[this.phaseIdCol]?.value ?? '') + '';
                    let phase: KupPlannerPhase = {
                        taskRow: task.taskRow,
                        phaseRow: row,
                        // trim the phase id value to avoid padded/trailing spaces
                        id: `${task.id}_${_phaseIdRaw.trim()}`,
                        phaseRowId: row.id,
                        taskRowId: task.taskRowId,
                        name: row.cells[this.phaseNameCol].value,
                        startDate: datesSanitized.dateValues[0],
                        endDate: datesSanitized.dateValues[1],
                        secondaryStartDate: datesSanitized.secDateValues[0],
                        secondaryEndDate: datesSanitized.secDateValues[1],
                        type: 'task' as KupPlannerTaskType,
                        color: row.cells[this.phaseColorCol].value,
                        selectedColor: row.cells[this.phaseColorCol].value,
                        valuesToShow: valuesToShow,
                        rowType: KupPlannerGanttRowType.PHASE,
                        icon: iconUrl
                            ? { url: iconUrl, color: iconColor ?? '#595959' }
                            : undefined,
                        startHour: datesSanitized.hourValues[0],
                        endHour: datesSanitized.hourValues[1],
                        secondaryStartHour: datesSanitized.secHourValues[0],
                        secondaryEndHour: datesSanitized.secHourValues[1],
                    };
                    return phase;
                });
            // Diagnostic: log created phase ids for the task
            try {
                // eslint-disable-next-line no-console
                console.log(
                    'kup-planner: addPhases created phases for',
                    taskId,
                    task.phases ? task.phases.map((p) => p.id) : []
                );
            } catch (e) {
                /* ignore */
            }
        }
        this.plannerProps.mainGantt.initialScrollX =
            this.#storedSettings.taskInitialScrollX;
        this.plannerProps.mainGantt.initialScrollY =
            this.#storedSettings.taskInitialScrollY;
        if (this.plannerProps.secondaryGantt) {
            this.plannerProps.secondaryGantt.initialScrollX =
                this.#storedSettings.detailInitialScrollX;
            this.plannerProps.secondaryGantt.initialScrollX =
                this.#storedSettings.detailInitialScrollY;
        }
        this.plannerProps = { ...this.plannerProps };
        this.refresh();
    }

    #toTasks(data: KupDataDataset): KupPlannerGanttTask[] {
        if (!data || !data.rows) {
            return [];
        }
        let tasks: KupPlannerGanttTask[] = data.rows
            ?.filter((row) =>
                isAtLeastOneDateValid(
                    row.cells[this.taskDates[0]],
                    row.cells[this.taskDates[1]]
                )
            )
            .map((row) => {
                const datesSanitized = sanitizeAllDates(
                    row.cells[this.taskDates[0]],
                    row.cells[this.taskDates[1]],
                    row.cells[this.taskPrevDates[0]],
                    row.cells[this.taskPrevDates[1]],
                    row.cells[this.taskHours[0]],
                    row.cells[this.taskHours[1]],
                    row.cells[this.taskPrevHours[0]],
                    row.cells[this.taskPrevHours[1]]
                );
                const valuesToShow = getValuesToShow(
                    row,
                    this.taskIdCol,
                    this.taskNameCol,
                    data.columns,
                    this.taskColumns,
                    () =>
                        this.taskColumns.map((col) =>
                            col == this.taskDates[0]
                                ? '#START#'
                                : col == this.taskDates[1]
                                ? '#END#'
                                : getCellValueForDisplay(
                                      data.columns.find(
                                          (kCol) => kCol.name == col
                                      ),
                                      row.cells[col]
                                  )
                        )
                );
                let iconUrl = this.#getIconUrl(row, this.taskIconCol);
                let iconColor = this.#getIconColor(row, this.taskIconCol);

                let task: KupPlannerGanttTask = {
                    taskRow: row,
                    taskRowId: row.id,
                    id: row.cells[this.taskIdCol].value,
                    name: row.cells[this.taskNameCol].value,
                    startDate: datesSanitized.dateValues[0],
                    endDate: datesSanitized.dateValues[1],
                    secondaryStartDate: datesSanitized.secDateValues[0],
                    secondaryEndDate: datesSanitized.secDateValues[1],
                    type: 'project' as KupPlannerTaskType,
                    valuesToShow: valuesToShow,
                    rowType: KupPlannerGanttRowType.TASK,
                    icon: iconUrl
                        ? { url: iconUrl, color: iconColor ?? '#595959' }
                        : undefined,
                    startHour: datesSanitized.hourValues[0],
                    endHour: datesSanitized.hourValues[1],
                    secondaryStartHour: datesSanitized.secHourValues[0],
                    secondaryEndHour: datesSanitized.secHourValues[1],
                };
                return task;
            });
        return tasks;
    }

    #toDetails(data: KupDataDataset): KupPlannerDetail[] {
        if (!data || !data.rows) {
            return undefined;
        }
        let details: KupPlannerDetail[] = [];
        data.rows
            .filter((row) =>
                isAtLeastOneDateValid(
                    row.cells[this.detailDates[0]],
                    row.cells[this.detailDates[1]]
                )
            )
            .forEach((row) => {
                const detailId = row.cells[this.detailIdCol].value;
                const detailNameId = row.cells[this.detailNameCol].value;

                const datesSanitized = sanitizeAllDates(
                    row.cells[this.detailDates[0]],
                    row.cells[this.detailDates[1]],
                    undefined,
                    undefined,
                    row.cells[this.detailHours[0]],
                    row.cells[this.detailHours[1]]
                );

                const valuesToShow = getValuesToShow(
                    row,
                    this.detailIdCol,
                    this.detailNameCol,
                    data.columns,
                    this.detailColumns
                );

                let detail: KupPlannerDetail = details.find(
                    (det) => det.id == detailId
                );
                if (!detail) {
                    detail = {
                        id: detailId,
                        name: detailNameId,
                        detailRow: row,
                        type: 'timeline',
                        valuesToShow: valuesToShow,
                        rowType: KupPlannerGanttRowType.DETAIL,
                        schedule: [],
                    };
                    details.push(detail);
                }
                let iconUrl = this.#getIconUrl(row, this.detailIconCol);
                let iconColor = this.#getIconColor(row, this.detailIconCol);

                detail.schedule.push({
                    startDate: datesSanitized.dateValues[0],
                    endDate: datesSanitized.dateValues[1],
                    color: this.detailColorCol
                        ? row.cells[this.detailColorCol].value ?? '#D9D9D8'
                        : '#D9D9D8',
                    selectedColor: this.detailColorCol
                        ? row.cells[this.detailColorCol].value ?? '#D9D9D8'
                        : '#D9D9D8',
                    icon: iconUrl
                        ? { url: iconUrl, color: iconColor ?? '#595959' }
                        : undefined,
                    startHour: datesSanitized.hourValues[0],
                    endHour: datesSanitized.hourValues[1],
                });
            });

        return details;
    }

    #getTask(taskId: string): KupPlannerGanttTask {
        return (
            this.plannerProps.mainGantt.items as KupPlannerGanttTask[]
        ).find((task) => task.id == taskId);
    }

    #removePhases(taskId: string) {
        const task = this.#getTask(taskId);
        if (task) task.phases = undefined;
        this.plannerProps = { ...this.plannerProps };
    }

    /**
     * @param nativeEvent
     * @returns true if caller must call onKupDblClick
     */
    #handleOnDblClickOnTask(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupDblClick
     */
    #handleOnDblClickOnPhase(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupDblClick
     */
    #handleOnDblClickOnDetail(): boolean {
        return true;
    }

    /**
     * @param nativeEvent
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnTask(nativeEvent: KupPlannerGanttRow): boolean {
        const task = this.#getTask(nativeEvent.id);
        if (task?.phases) {
            this.#removePhases(task.id);
        }
        return true;
    }

    /**
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnPhase(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnDetail(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupContextMenu
     */
    #handleOnContextMenuOnTask(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupContextMenu
     */
    #handleOnContextMenuOnPhase(): boolean {
        return true;
    }

    /**
     * @returns true if caller must call onKupContextMenu
     */
    #handleOnContextMenuOnDetail(): boolean {
        return true;
    }

    #emitOnChangeEventsReceived(nativeEvent: KupPlannerGanttRow): boolean {
        let emitEvent: boolean = false;
        if (!this.#lastOnChangeReceived) {
            emitEvent = true;
            this.#lastOnChangeReceived = new KupPlannerLastOnChangeReceived(
                nativeEvent
            );
        } else if (!this.#lastOnChangeReceived.isEquivalent(nativeEvent)) {
            this.#lastOnChangeReceived = new KupPlannerLastOnChangeReceived(
                nativeEvent
            );
            emitEvent = true;
        }
        return emitEvent;
    }

    #onFilter(value: string, isDetail?: boolean) {
        if (isDetail) {
            this.#storedSettings.detailFilter = value;
        } else {
            this.#storedSettings.taskFilter = value;
        }
        const newGantt = isDetail
            ? {
                  secondaryGantt: {
                      ...this.plannerProps.secondaryGantt,
                      items: this.#toDetails(
                          this.#getFilteredRows(value, isDetail)
                      ),
                  },
              }
            : {
                  mainGantt: {
                      ...this.plannerProps.mainGantt,
                      items: this.#toTasks(
                          this.#getFilteredRows(value, isDetail)
                      ),
                  },
              };
        // Diagnostic: inspect whether planner-level `dependencies` prop is set
        try {
            // eslint-disable-next-line no-console
            console.log(
                'kup-planner: componentDidLoad - this.dependencies',
                this.dependencies
            );
        } catch (e) {}

        this.plannerProps = {
            ...this.plannerProps,
            ...newGantt,
        };
        this.persistState();
    }

    #getFilteredRows(value: string, isDetail?: boolean): KupDataDataset {
        const data = isDetail ? this.detailData : this.data;
        if (!data || !data.rows || data.rows.length == 0) {
            return undefined;
        }
        if (!value) {
            return data;
        }
        const tempData: KupDataDataset = {
            columns: this.data.columns,
            rows: [],
        };
        const tempRows: { weight: number; row: KupDataRow }[] = [];
        for (let index = 0; index < data.rows.length; index++) {
            const row = data.rows[index];
            const cells = row.cells;
            for (let index = 0; index < data.columns.length; index++) {
                const column = data.columns[index];
                const cell = cells[column.name];
                if (cell) {
                    const dValue = getCellValueForDisplay(
                        data.columns[index],
                        cell
                    );
                    const found = !!(
                        dValue.toLowerCase().indexOf(value.toLowerCase()) > -1
                    );
                    if (found) {
                        tempRows.push({ row, weight: index });
                        break;
                    }
                }
            }
        }
        tempRows
            .sort((a, b) => a.weight - b.weight)
            .forEach((tempRow) => {
                tempData.rows.push(tempRow.row);
            });
        return tempData;
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
        // *** Store
        this.initWithPersistedState();
        this.#storedSettings = {
            detailFilter: this.detailFilter,
            detailInitialScrollX: this.detailInitialScrollX,
            detailInitialScrollY: this.detailInitialScrollY,
            showSecondaryDates: this.showSecondaryDates,
            taskFilter: this.taskFilter,
            taskInitialScrollX: this.taskInitialScrollX,
            taskInitialScrollY: this.taskInitialScrollY,
            viewMode: this.viewMode,
        };
    }

    componentDidLoad() {
        let details = this.#toDetails(
            this.#getFilteredRows(this.#storedSettings.detailFilter, true)
        );
        const mainFilter: HTMLElement =
            this.rootElement.shadowRoot.querySelector('#main-filter');
        FTextFieldMDC(mainFilter);
        const secondaryFilter: HTMLElement =
            this.rootElement.shadowRoot.querySelector('#secondary-filter');
        if (details) {
            FTextFieldMDC(secondaryFilter);
        }

        // timeout for scroll events
        let scrollXTimeout: number;
        let taskScrollYTimeout: number;
        let detailScrollYTimeout: number;
        const scrollDelay = 500;

        this.plannerProps = {
            mainGantt: {
                title: this.titleMess,
                items: this.#toTasks(
                    this.#getFilteredRows(
                        this.#storedSettings.taskFilter,
                        false
                    )
                ),
                stylingOptions: {
                    ...defaultStylingOptions,
                    listCellWidth: this.listCellWidth,
                },
                filter: mainFilter,
                hideLabel: true,
                ganttHeight: this.taskHeight,
                showSecondaryDates: this.#storedSettings.showSecondaryDates,
                onClick: (nativeEvent: KupPlannerGanttTask | KupPlannerPhase) =>
                    this.handleOnClick(nativeEvent),
                onDblClick: (
                    nativeEvent: KupPlannerGanttTask | KupPlannerPhase
                ) => this.handleOnDblClick(nativeEvent),
                onContextMenu: (
                    event: UIEvent,
                    row: KupPlannerGanttTask | KupPlannerPhase
                ) => this.handleOnContextMenu(event, row),
                onDateChange: (
                    nativeEvent: KupPlannerGanttTask | KupPlannerPhase
                ) => this.handleOnDateChange(nativeEvent),
                initialScrollX: this.taskInitialScrollX,
                initialScrollY: this.taskInitialScrollY,
                readOnly: this.readOnly,
                onScrollY: (y: number) => {
                    window.clearTimeout(taskScrollYTimeout);
                    taskScrollYTimeout = window.setTimeout(
                        () => this.handleTaskGanttScrollY(y),
                        scrollDelay
                    );
                },
                onPhaseDrop: (
                    nativeEvent: KupPlannerGanttTask | KupPlannerPhase
                ) => this.handleOnPhaseDrop(nativeEvent),
                // forward structured dependencies provided at planner level
                dependencies: this.dependencies,
            },
            secondaryGantt: details
                ? {
                      title: '',
                      items: details,
                      stylingOptions: {
                          ...defaultStylingOptions,
                          listCellWidth: this.listCellWidth,
                      },
                      filter: secondaryFilter,
                      hideLabel: true,
                      ganttHeight: this.detailHeight,
                      onClick: (nativeEvent: KupPlannerDetail) =>
                          this.handleOnClick(nativeEvent),
                      onContextMenu: (
                          event: UIEvent,
                          row: KupPlannerGanttTask | KupPlannerPhase
                      ) => this.handleOnContextMenu(event, row),
                      onDateChange: (nativeEvent: KupPlannerDetail) =>
                          this.handleOnDateChange(nativeEvent),
                      initialScrollX: this.detailInitialScrollX,
                      initialScrollY: this.detailInitialScrollY,
                      readOnly: this.readOnly,
                      // forward structured dependencies to secondary gantt as well
                      dependencies: this.dependencies,
                      onScrollY: (y: number) => {
                          window.clearTimeout(detailScrollYTimeout);
                          detailScrollYTimeout = window.setTimeout(
                              () => this.handleDetailGanttScrollY(y),
                              scrollDelay
                          );
                      },
                  }
                : undefined,
            onSetDoubleView: (checked: boolean) =>
                this.handleOnSetDoubleView(checked),
            onSetViewMode: (value: KupPlannerViewMode) =>
                this.handleOnSetViewMode(value),
            viewMode: this.viewMode,
            scrollableTaskList: this.scrollableTaskList,
            onScrollX: (x: number) => {
                window.clearTimeout(scrollXTimeout);
                scrollXTimeout = window.setTimeout(
                    () => this.handleOnScrollX(x),
                    scrollDelay
                );
            },
        };

        // Diagnostic: log what was forwarded into plannerProps.mainGantt.dependencies
        try {
            // eslint-disable-next-line no-console
            console.log(
                'kup-planner: componentDidLoad - plannerProps.mainGantt.dependencies',
                this.plannerProps?.mainGantt?.dependencies
            );
        } catch (e) {}

        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
            value: undefined,
        });

        if (this.taskFilter) {
            this.#onFilter(this.taskFilter);
        }

        if (this.detailFilter) {
            this.#onFilter(this.detailFilter, true);
        }

        this.#kupManager.debug.logLoad(this, true);
    }

    componentDidRender() {
        this.persistState();
        this.#kupManager.debug.logRender(this, true);
    }

    onKupDblClick(
        event: KupPlannerGanttRow,
        taskAction?: KupPlannerTaskAction
    ) {
        this.kupDblClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
            taskAction: taskAction,
        });
    }

    onKupClick(event: KupPlannerGanttRow, taskAction?: KupPlannerTaskAction) {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
            taskAction: taskAction,
        });
    }

    onKupContextMenu(
        event: UIEvent,
        ganttRow: KupPlannerGanttRow,
        taskAction?: KupPlannerTaskAction
    ) {
        let row: KupDataRow;
        let cell: KupDataCell;
        let column: KupDataColumn;
        switch (ganttRow.type) {
            case 'project': {
                row = (ganttRow as KupPlannerGanttTask).taskRow;
                cell = row.cells[this.taskIdCol];
                column = this.data.columns[this.taskIdCol];
                break;
            }
            case 'task': {
                row = (ganttRow as KupPlannerPhase).phaseRow;
                cell = row.cells[this.phaseIdCol];
                //column = this.data.columns[this.taskIdCol];
                break;
            }
            case 'timeline': {
                row = (ganttRow as KupPlannerDetail).detailRow;
                cell = row.cells[this.detailIdCol];
                column = this.data.columns[this.detailIdCol];
                break;
            }
        }
        this.kupContextMenu.emit({
            comp: this,
            id: this.rootElement.id,
            value: ganttRow,
            taskAction: taskAction,
            details: {
                cell: cell,
                column: column,
                originalEvent: event,
                row: row,
            },
        });
    }

    onKupDateChange(
        event: KupPlannerGanttRow,
        taskAction?: KupPlannerTaskAction
    ) {
        this.kupDateChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
            taskAction: taskAction,
        });
    }

    onKupPhaseDrop(
        event: KupPlannerGanttRow,
        taskAction?: KupPlannerTaskAction
    ) {
        this.kupPhaseDrop.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
            taskAction: taskAction,
        });
    }

    handleOnDblClick(
        nativeEvent: KupPlannerGanttTask | KupPlannerPhase | KupPlannerDetail
    ) {
        switch (nativeEvent.rowType) {
            case KupPlannerGanttRowType.TASK:
                if (this.#handleOnDblClickOnTask()) {
                    this.onKupDblClick(
                        nativeEvent,
                        KupPlannerTaskAction.onDblClick
                    );
                }
                break;
            case KupPlannerGanttRowType.PHASE:
                if (this.#handleOnDblClickOnPhase()) {
                    this.onKupDblClick(
                        nativeEvent,
                        KupPlannerTaskAction.onDblClick
                    );
                }
                break;
            case KupPlannerGanttRowType.DETAIL:
                if (this.#handleOnDblClickOnDetail()) {
                    this.onKupDblClick(
                        nativeEvent,
                        KupPlannerTaskAction.onDblClick
                    );
                }
                break;
        }
        for (let index = 0; index < this.#clickTimeout.length; index++) {
            clearTimeout(this.#clickTimeout[index]);
            this.#kupManager.debug.logMessage(
                this,
                'Cleared click timeout(' + this.#clickTimeout[index] + ').'
            );
        }
        this.#clickTimeout = [];
    }

    handleOnClick(
        nativeEvent: KupPlannerGanttTask | KupPlannerPhase | KupPlannerDetail
    ) {
        this.#clickTimeout.push(
            setTimeout(() => {
                switch (nativeEvent.rowType) {
                    case KupPlannerGanttRowType.TASK:
                        const taskAction = (nativeEvent as KupPlannerGanttTask)
                            .phases
                            ? KupPlannerTaskAction.onTaskClosing
                            : KupPlannerTaskAction.onTaskOpening;
                        if (this.#handleOnClickOnTask(nativeEvent)) {
                            this.onKupClick(nativeEvent, taskAction);
                        }
                        break;
                    case KupPlannerGanttRowType.PHASE:
                        if (this.#handleOnClickOnPhase()) {
                            this.onKupClick(
                                nativeEvent,
                                KupPlannerTaskAction.onClick
                            );
                        }
                        break;
                    case KupPlannerGanttRowType.DETAIL:
                        if (this.#handleOnClickOnDetail()) {
                            this.onKupClick(
                                nativeEvent,
                                KupPlannerTaskAction.onClick
                            );
                        }
                        break;
                }
            }, 300)
        );
    }

    handleOnContextMenu(
        event: UIEvent,
        row: KupPlannerGanttTask | KupPlannerPhase | KupPlannerDetail
    ) {
        switch (row.rowType) {
            case KupPlannerGanttRowType.TASK:
                if (this.#handleOnContextMenuOnTask()) {
                    this.onKupContextMenu(
                        event,
                        row,
                        KupPlannerTaskAction.onRightClick
                    );
                }
                break;
            case KupPlannerGanttRowType.PHASE:
                if (this.#handleOnContextMenuOnPhase()) {
                    this.onKupContextMenu(
                        event,
                        row,
                        KupPlannerTaskAction.onRightClick
                    );
                }
                break;
            case KupPlannerGanttRowType.DETAIL:
                if (this.#handleOnContextMenuOnDetail()) {
                    this.onKupContextMenu(
                        event,
                        row,
                        KupPlannerTaskAction.onRightClick
                    );
                }
                break;
        }
    }

    handleOnSetDoubleView(checked: boolean) {
        this.#storedSettings.showSecondaryDates = checked;
        if (this.plannerProps?.mainGantt) {
            this.plannerProps.mainGantt.showSecondaryDates = checked;
        }
        this.persistState();
    }

    handleOnSetViewMode(value: KupPlannerViewMode) {
        this.#storedSettings.viewMode = value;
        this.plannerProps.viewMode = value;
        this.persistState();
    }

    handleOnScrollX(x: number) {
        this.#storedSettings.taskInitialScrollX = x;
        this.#storedSettings.detailInitialScrollX = x;
        this.persistState();
    }

    handleTaskGanttScrollY(y: number) {
        this.#storedSettings.taskInitialScrollY = y;
        this.persistState();
    }

    handleDetailGanttScrollY(y: number) {
        this.#storedSettings.detailInitialScrollY = y;
        this.persistState();
    }

    handleOnDateChange(
        nativeEvent: KupPlannerGanttTask | KupPlannerPhase | KupPlannerDetail
    ) {
        if (this.#emitOnChangeEventsReceived(nativeEvent)) {
            if (nativeEvent.rowType != KupPlannerGanttRowType.DETAIL) {
                this.onKupDateChange(
                    nativeEvent,
                    KupPlannerTaskAction.onResize
                );
            }
        }
    }

    handleOnPhaseDrop(
        nativeEvent: KupPlannerGanttTask | KupPlannerPhase | KupPlannerDetail
    ) {
        this.onKupPhaseDrop(nativeEvent, KupPlannerTaskAction.onTask);
    }

    //======== Utility methods ========
    #getIconUrl(row: KupDataRow, columnName: string): string {
        let iconUrl = undefined;
        if (columnName) {
            const iconCell = row.cells[columnName];
            let icon = iconCell?.data?.resource;
            if (!icon) {
                icon = iconCell.value;
            }
            if (icon) {
                iconUrl = getAssetPath('./assets/svg/' + icon + '.svg');
            }
        }
        return iconUrl;
    }

    #getIconColor(row: KupDataRow, columnName: string): string {
        let iconColor = undefined;
        if (columnName) {
            const iconCell = row.cells[columnName];
            iconColor = iconCell?.data?.color;
            if (iconColor) {
                iconColor =
                    this.#kupManager.theme.colorCheck(iconColor).hexColor;
            }
        }
        return iconColor;
    }

    render() {
        const plannerProps = this.plannerProps
            ? {
                  ...this.plannerProps,
                  onSetDoubleView: this.handleOnSetDoubleView.bind(this),
                  onSetViewMode: this.handleOnSetViewMode.bind(this),
                  onScrollX: this.handleOnScrollX.bind(this),
                  mainGantt: {
                      ...this.plannerProps?.mainGantt,
                      onScrollY: this.handleTaskGanttScrollY.bind(this),
                  },
              }
            : null;

        if (this.plannerProps?.secondaryGantt) {
            plannerProps.secondaryGantt = {
                ...this.plannerProps.secondaryGantt,
                onScrollY: this.handleDetailGanttScrollY.bind(this),
            };
        }

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    style={{ maxWidth: this.maxWidth }}
                >
                    {this.plannerProps && (
                        <kup-planner-renderer
                            props={plannerProps}
                            ref={(el) => (this.plannerRenderer = el)}
                        ></kup-planner-renderer>
                    )}
                </div>
                <div style={{ display: this.plannerProps ? 'none' : '' }}>
                    <FTextField
                        icon={KupThemeIconValues.SEARCH}
                        id="main-filter"
                        label={this.#kupManager.language.translate(
                            KupLanguageSearch.SEARCH
                        )}
                        onKeyDown={(e: KeyboardEvent) => {
                            if (e.key === 'Enter') {
                                this.#onFilter(
                                    (e.target as HTMLInputElement).value
                                );
                            }
                        }}
                        value={this.taskFilter}
                        wrapperClass="filter"
                    ></FTextField>
                    {this.detailData?.rows &&
                    this.detailData.rows.length > 0 ? (
                        <FTextField
                            icon={KupThemeIconValues.SEARCH}
                            id="secondary-filter"
                            label={this.#kupManager.language.translate(
                                KupLanguageSearch.SEARCH
                            )}
                            onKeyDown={(e: KeyboardEvent) => {
                                if (e.key === 'Enter') {
                                    this.#onFilter(
                                        (e.target as HTMLInputElement).value,
                                        true
                                    );
                                }
                            }}
                            value={this.detailFilter}
                            wrapperClass="filter"
                        ></FTextField>
                    ) : null}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
        this.kupDidUnload.emit({
            comp: this,
            id: this.rootElement.id,
            storedSettings: this.#storedSettings,
        });
    }
}

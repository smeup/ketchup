import {
    Component,
    Element,
    forceUpdate,
    h,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import {
    calculateDisplayedDateRange,
    columnWidthForTimeUnit,
    convertProjectToTasks,
    getPhaseById,
    getProjectById,
    mergeTaskIntoPhases,
    mergeTaskIntoProjects,
} from './kup-planner-renderer-helper';
import {
    KUP_PLANNER_MAIN_GANTT_ID,
    KUP_PLANNER_SECONDARY_GANTT_ID,
    KupPlannerViewMode,
    KupPlannerTask,
    KupPlannerGanttTask,
    KupPlannerGanttRow,
    KupPlannerGanttPhaseProjection,
    KupPlannerPhase,
    KupPlannerItemDetail,
    KupPlannerGanttTaskN,
    PlannerProps,
} from '../kup-planner-declarations';
import { KupDates } from '../../../managers/kup-dates/kup-dates';
import { ganttDateTimeFormatters } from './kup-planner-time-formatter';
import { CustomTooltipHOC } from './custom-tool-tip';
@Component({
    tag: 'kup-planner-renderer',
    styleUrl: '',
    shadow: false,
})
export class KupPlannerRenderer {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop({ mutable: true }) props: PlannerProps;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/
    @State()
    timeUnit!: KupPlannerViewMode;

    @State()
    currentTasks: KupPlannerGanttTaskN[] | KupPlannerItemDetail[] = [];

    @State()
    currentDetails: KupPlannerItemDetail[] | undefined = [];

    @State()
    scrollX: number = -1;

    @State() mainGanttDoubleView: boolean = false;

    @State()
    displayedDates: { displayedStartDate: Date; displayedEndDate: Date } = {
        displayedStartDate: new Date(),
        displayedEndDate: new Date(),
    };

    @State()
    viewDate: Date | undefined;

    @State()
    projection: KupPlannerGanttPhaseProjection | undefined;

    locale: string = 'it-IT';

    @State()
    tasks: KupPlannerTask[] = [];

    @State()
    details: KupPlannerTask[] = [];

    mainGantt: HTMLKupGanttElement;
    secondaryGantt: HTMLKupGanttElement;
    /**
     * References the root HTML element of the component (<kup-planner-renderer>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/

    @Watch('props')
    mainGanttChangeHandler() {
        this.currentTasks = this.props.mainGantt.items;
        this.currentDetails = this.props.secondaryGantt?.items;
        this.projection = undefined;
        this.updateTasks();
    }

    @Watch('timeUnit')
    @Watch('mainGanttDoubleView')
    @Watch('props.preStepsCount')
    @Watch('viewDate')
    updateDisplayedDates() {
        const dates = calculateDisplayedDateRange(
            this.currentTasks as KupPlannerGanttTask[],
            this.timeUnit,
            this.mainGanttDoubleView,
            this.currentDetails,
            this.props.preStepsCount
        );
        if (!this.viewDate) {
            const now = new Date();
            if (
                dates.displayedStartDate <= now &&
                dates.displayedEndDate >= now
            ) {
                this.viewDate = now;
            } else {
                this.viewDate = dates.displayedStartDate;
            }
        }
    }

    @Watch('currentTasks')
    @Watch('currentDetails')
    updateTasks() {
        const kupDates: KupDates = new KupDates();
        this.tasks = [];
        for (let i = 0; i < this.currentTasks?.length; i++) {
            this.tasks.push(
                ...convertProjectToTasks(
                    this.currentTasks[i],
                    kupDates.formatToIsoDate(
                        this.displayedDates.displayedStartDate
                    ),
                    kupDates.formatToIsoDate(
                        this.displayedDates.displayedEndDate
                    )
                )
            );
        }

        this.details = [];
        for (let i = 0; i < this.currentDetails?.length; i++) {
            this.details.push(
                ...convertProjectToTasks(
                    this.currentDetails[i],
                    kupDates.formatToIsoDate(
                        this.displayedDates.displayedStartDate
                    ),
                    kupDates.formatToIsoDate(
                        this.displayedDates.displayedEndDate
                    )
                )
            );
        }
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.timeUnit = this.props?.viewMode;
        this.currentTasks = this.props?.mainGantt.items || [];
        this.currentDetails = this.props?.secondaryGantt?.items;
        this.scrollX = this.props?.mainGantt?.initialScrollX ?? -1;
        this.mainGanttDoubleView =
            this.props?.mainGantt?.showSecondaryDates ?? false;
        this.displayedDates = calculateDisplayedDateRange(
            this.currentTasks as KupPlannerGanttTask[],
            this.timeUnit,
            this.mainGanttDoubleView,
            this.currentDetails,
            this.props?.preStepsCount
        );
        this.viewDate = undefined;
        this.projection = undefined;
        this.updateTasks();
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        this.displayedDates = calculateDisplayedDateRange(
            this.currentTasks as KupPlannerGanttTask[],
            this.timeUnit,
            this.mainGanttDoubleView,
            this.currentDetails,
            this.props?.preStepsCount
        );
    }

    // Handle click event
    handleClick(row: KupPlannerGanttRow, onClick: any) {
        if (!row) {
            return;
        }

        if (row.type === 'task' && this.props.secondaryGantt) {
            const phase = row as KupPlannerPhase;
            // Set projection state
            this.projection = {
                start: new Date(phase.startDate),
                end: new Date(phase.endDate),
                color: phase.color || '#ED7D31', // Default color if not provided
            };
        } else {
            this.projection = undefined;
        }

        onClick?.(row);
    }

    // Handle dbl click event
    handleDblClick(row: KupPlannerGanttRow, onDblClick: any) {
        if (!row) {
            return;
        }

        onDblClick?.(row);
    }

    // Handle context menu event
    handleContextMenu(
        event: UIEvent,
        row: KupPlannerGanttRow,
        onContextMenu: any
    ) {
        if (!row) {
            return;
        }

        // Create projections if a phase is clicked
        if (row.type === 'task' && this.props.secondaryGantt) {
            const phase = row as KupPlannerPhase;
            // Set projection state
            this.projection = {
                start: new Date(phase.startDate),
                end: new Date(phase.endDate),
                color: phase.color || '#ED7D31', // Default color if not provided
            };
        } else {
            this.projection = undefined;
        }

        // Emit the 'itemContextMenu' event with the event and clicked row data
        onContextMenu?.(event, row);
    }

    // Handle setting double view
    handleSetDoubleView(checked: boolean) {
        this.mainGanttDoubleView = checked;
        this.props?.onSetDoubleView?.(checked);
    }

    // Handle date change
    handleDateChange(
        task: KupPlannerTask,
        currentProjects: KupPlannerGanttTask[] | KupPlannerItemDetail[],
        onDateChange: any
    ) {
        const id = task?.id;
        if (!id) {
            return;
        }
        let row = getProjectById(id, currentProjects);
        if (!row) {
            row = getPhaseById(id, currentProjects);
        }
        if (!row) {
            return;
        }
        // Handle timeline
        if (row.type === 'timeline') {
            console.log(
                'onDateChange for timeline not managed yet',
                id,
                row.type
            );
            return;
        }
        if (row.type === 'project') {
            const result = mergeTaskIntoProjects(
                currentProjects as KupPlannerGanttTask[],
                task
            );
            row = getProjectById(row.id, result);
            this.viewDate = task.start;
            this.currentTasks = result;
        } else if (row.type === 'task') {
            const parentOfClickedPhase: KupPlannerGanttTaskN | undefined = (
                currentProjects as KupPlannerGanttTaskN[]
            ).find((p) => p.phases?.some((ph) => ph?.id === id));
            if (parentOfClickedPhase) {
                const phases = mergeTaskIntoPhases(
                    parentOfClickedPhase.phases,
                    task
                );
                const updatedProjects = (
                    currentProjects as KupPlannerGanttTaskN[]
                ).map((p) =>
                    p.id === parentOfClickedPhase.id ? { ...p, phases } : p
                );
                row = getPhaseById(row.id, updatedProjects);
                // Update projections if phase date changed
                if (this.props.secondaryGantt && row) {
                    // Update projection state
                    this.projection = {
                        start: new Date(row.startDate),
                        end: new Date(row.endDate),
                        color: (row as KupPlannerPhase).color ?? '#ED7D31',
                    };
                }
                this.viewDate = task.start;
                this.currentTasks = updatedProjects;
            }
        }
        // Invoke callback
        onDateChange?.(row);

        // Use setTimeout to ensure DOM updates
        setTimeout(this.getScrollX, 500);
    }

    // Handle phase drop
    handlePhaseDrop(
        originalPhaseData: KupPlannerGanttTaskN,
        // originalTaskData: KupPlannerGanttTaskN | KupPlannerItemDetail,
        finalPhaseData: KupPlannerTask,
        destinationData: KupPlannerGanttTaskN | KupPlannerItemDetail,
        onPhaseDrop: any
    ) {
        // Invoke callback

        let row = undefined;

        const currentProjects = this.currentTasks as KupPlannerGanttTask[];

        const parentOfClickedPhase: KupPlannerGanttTaskN | undefined = (
            currentProjects as KupPlannerGanttTaskN[]
        ).find((p) => p.phases?.some((ph) => ph?.id === finalPhaseData.id));
        if (parentOfClickedPhase) {
            const phases = mergeTaskIntoPhases(
                parentOfClickedPhase.phases,
                finalPhaseData
            );
            const updatedProjects = (
                currentProjects as KupPlannerGanttTaskN[]
            ).map((p) =>
                p.id === parentOfClickedPhase.id ? { ...p, phases } : p
            );
            row = getPhaseById(finalPhaseData.id, updatedProjects);
        }

        delete row?.['taskRow'];
        onPhaseDrop?.({
            originalPhaseData,
            // originalTaskData,
            finalPhaseData: row,
            destinationData,
        });

        // to move the phase back to its original position
        this.currentTasks = JSON.parse(JSON.stringify(this.currentTasks));
        // Use setTimeout to ensure DOM updates
        setTimeout(this.getScrollX, 500);
    }

    // Get scrollX
    getScrollX() {
        if (this.rootElement) {
            const x = this.rootElement.querySelector(
                '[data-scrollx="true"]'
            )?.scrollLeft;
            if (x !== undefined) {
                this.props.onScrollX?.(x);
            }
        }
    }

    render() {
        return (
            <div class="planner-render">
                <kup-switcher
                    timeUnitChange={(timeUnit) => {
                        this.props.onSetViewMode?.(timeUnit);
                        this.timeUnit = timeUnit;
                        this.viewDate = undefined;
                        this.scrollX = -1;
                    }}
                />
                {this.props && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <kup-gantt
                            ref={(el) => (this.mainGantt = el)}
                            ganttId={KUP_PLANNER_MAIN_GANTT_ID}
                            key={KUP_PLANNER_MAIN_GANTT_ID}
                            filter={this.props.mainGantt.filter}
                            hideLabel={this.props.mainGantt.hideLabel}
                            showSecondaryDates={this.mainGanttDoubleView}
                            hideDependencies={
                                this.props.mainGantt.hideDependencies
                            }
                            ganttHeight={this.props.mainGantt.ganttHeight}
                            displayedStartDate={
                                this.displayedDates.displayedStartDate
                            }
                            displayedEndDate={
                                this.displayedDates.displayedEndDate
                            }
                            viewDate={this.viewDate}
                            tasks={this.tasks}
                            columnWidth={columnWidthForTimeUnit(this.timeUnit)}
                            viewMode={this.timeUnit}
                            dependencies={this.props.mainGantt.dependencies}
                            {...this.props.mainGantt.stylingOptions}
                            TaskListHeader={
                                this.props.mainGantt.taskListHeaderProject
                            }
                            TaskListTable={
                                this.props.mainGantt.taskListTableProject
                            }
                            TooltipContent={
                                this.props.mainGantt.tooltipContent ??
                                (CustomTooltipHOC() as any)
                            }
                            barClick={(task: KupPlannerTask) => {
                                let row = getProjectById(
                                    task.id,
                                    this.currentTasks
                                );
                                if (!row) {
                                    row = getPhaseById(
                                        task.id,
                                        this.currentTasks
                                    );
                                }
                                if (row) {
                                    this.handleClick(
                                        row,
                                        this.props.mainGantt.onClick
                                    );
                                }
                            }}
                            barDblClick={(task: KupPlannerTask) => {
                                let row = getProjectById(
                                    task.id,
                                    this.currentTasks
                                );
                                if (!row) {
                                    row = getPhaseById(
                                        task.id,
                                        this.currentTasks
                                    );
                                }
                                if (row) {
                                    this.handleDblClick(
                                        row,
                                        this.props.mainGantt.onDblClick
                                    );
                                }
                            }}
                            barContextMenu={(event, task) => {
                                let row = getProjectById(
                                    task.id,
                                    this.currentTasks
                                );
                                if (!row) {
                                    row = getPhaseById(
                                        task.id,
                                        this.currentTasks
                                    );
                                }
                                if (row) {
                                    this.handleContextMenu(
                                        event as any,
                                        row,
                                        this.props.mainGantt.onContextMenu
                                    );
                                }
                            }}
                            dateChange={(task) =>
                                this.handleDateChange(
                                    task,
                                    this.currentTasks as KupPlannerGanttTask[],
                                    this.props.mainGantt.onDateChange
                                )
                            }
                            locale={this.locale}
                            dateTimeFormatters={ganttDateTimeFormatters}
                            initialScrollX={this.scrollX}
                            initialScrollY={this.props.mainGantt.initialScrollY}
                            readOnly={this.props.mainGantt.readOnly}
                            scrollXChange={this.props.onScrollX}
                            scrollYChange={this.props.mainGantt.onScrollY}
                            currentTasks={this.currentTasks}
                            handleClick={this.handleClick.bind(this)}
                            handleDblClick={this.handleDblClick.bind(this)}
                            handleContextMenu={this.handleContextMenu.bind(
                                this
                            )}
                            ganttOnClick={this.props.mainGantt.onClick}
                            ganttOnDblClick={this.props.mainGantt.onDblClick}
                            ganttonOnContextMenu={
                                this.props.mainGantt.onContextMenu
                            }
                            label={this.props.mainGantt.title}
                            doubleView={this.mainGanttDoubleView ?? false}
                            setDoubleView={this.handleSetDoubleView.bind(this)}
                            scrollableTaskList={this.props.scrollableTaskList}
                            phaseDrop={(
                                originalPhaseData,
                                originalTaskData,
                                finalPhaseData,
                                destinationData
                            ) => {
                                const originalPhase = getPhaseById(
                                    originalPhaseData.id,
                                    this.currentTasks
                                );
                                const originalTask = getProjectById(
                                    originalTaskData.id,
                                    this.currentTasks
                                );
                                const finalPhase = getPhaseById(
                                    finalPhaseData.id,
                                    this.currentTasks
                                );
                                const destinationTask = getProjectById(
                                    destinationData.id,
                                    this.currentTasks
                                );
                                this.handlePhaseDrop(
                                    originalPhase,
                                    // originalTask,
                                    finalPhaseData,
                                    destinationTask,
                                    this.props.mainGantt.onPhaseDrop
                                );
                            }}
                        />
                        {this.props.secondaryGantt && (
                            <kup-gantt
                                ref={(el) => (this.secondaryGantt = el)}
                                ganttId={KUP_PLANNER_SECONDARY_GANTT_ID}
                                key={KUP_PLANNER_SECONDARY_GANTT_ID}
                                filter={this.props.secondaryGantt.filter}
                                hideLabel={this.props.secondaryGantt.hideLabel}
                                showSecondaryDates={this.mainGanttDoubleView}
                                hideDependencies={
                                    this.props.secondaryGantt.hideDependencies
                                }
                                ganttHeight={
                                    this.props.secondaryGantt.ganttHeight
                                }
                                displayedStartDate={
                                    this.displayedDates.displayedStartDate
                                }
                                displayedEndDate={
                                    this.displayedDates.displayedEndDate
                                }
                                viewDate={this.viewDate}
                                tasks={this.details}
                                columnWidth={columnWidthForTimeUnit(
                                    this.timeUnit
                                )}
                                viewMode={this.timeUnit}
                                dependencies={
                                    this.props.secondaryGantt.dependencies
                                }
                                {...this.props.secondaryGantt.stylingOptions}
                                TaskListHeader={
                                    this.props.secondaryGantt
                                        .taskListHeaderProject
                                }
                                TaskListTable={
                                    this.props.secondaryGantt
                                        .taskListTableProject
                                }
                                TooltipContent={
                                    this.props.secondaryGantt.tooltipContent ??
                                    (CustomTooltipHOC() as any)
                                }
                                projection={this.projection}
                                barClick={(task: KupPlannerTask) => {
                                    if (this.props.secondaryGantt) {
                                        let row = getProjectById(
                                            task.id,
                                            this
                                                .currentDetails as KupPlannerItemDetail[]
                                        );
                                        if (row) {
                                            this.handleClick(
                                                row,
                                                this.props.secondaryGantt
                                                    .onClick
                                            );
                                        }
                                    }
                                }}
                                barDblClick={(task: KupPlannerTask) => {
                                    if (this.props.secondaryGantt) {
                                        let row = getProjectById(
                                            task.id,
                                            this
                                                .currentDetails as KupPlannerItemDetail[]
                                        );
                                        if (row) {
                                            this.handleDblClick(
                                                row,
                                                this.props.secondaryGantt
                                                    .onDblClick
                                            );
                                        }
                                    }
                                }}
                                barContextMenu={(event, task) => {
                                    if (this.props.secondaryGantt) {
                                        let row = getProjectById(
                                            task.id,
                                            this
                                                .currentDetails as KupPlannerItemDetail[]
                                        );
                                        if (row) {
                                            this.handleContextMenu(
                                                event,
                                                row,
                                                this.props.secondaryGantt
                                                    .onContextMenu
                                            );
                                        }
                                    }
                                }}
                                dateChange={(task) =>
                                    this.handleDateChange(
                                        task,
                                        this
                                            .currentTasks as KupPlannerItemDetail[],
                                        this.props.secondaryGantt.onDateChange
                                    )
                                }
                                locale={this.locale}
                                dateTimeFormatters={ganttDateTimeFormatters}
                                initialScrollX={this.scrollX}
                                initialScrollY={
                                    this.props.secondaryGantt.initialScrollY
                                }
                                readOnly={this.props.secondaryGantt.readOnly}
                                scrollXChange={this.props.onScrollX}
                                scrollYChange={
                                    this.props.secondaryGantt.onScrollY
                                }
                                currentTasks={this.currentTasks}
                                handleClick={this.handleClick.bind(this)}
                                handleDblClick={this.handleDblClick.bind(this)}
                                handleContextMenu={this.handleContextMenu.bind(
                                    this
                                )}
                                ganttOnClick={this.props.secondaryGantt.onClick}
                                ganttOnDblClick={
                                    this.props.secondaryGantt.onDblClick
                                }
                                ganttonOnContextMenu={
                                    this.props.secondaryGantt.onContextMenu
                                }
                                label={this.props.secondaryGantt.title}
                                scrollableTaskList={
                                    this.props.scrollableTaskList
                                }
                            />
                        )}
                    </div>
                )}
            </div>
        );
    }
}

import {
    Component,
    Element,
    h,
    Prop,
    State,
    Watch,
    Listen,
    Method,
    forceUpdate,
} from '@stencil/core';
import {
    KupPlannerCurrentDateIndicator,
    KupPlannerGanttProps,
    KupPlannerTask,
    KupPlannerCalendarProps,
    KupPlannerBarTask,
    KupPlannerTaskListProps,
    KupPlannerGridProps,
    KupPlannerDateSetup,
    KupPlannerGanttEvent,
    GanttSyncScrollEvent,
    KupPlannerTaskGanttContentProps,
    KupPlannerGanttTaskN,
    KupPlannerItemDetail,
    KupPlannerGanttRow,
    KupGanttPlannerProps,
} from '../../kup-planner-declarations';
import {
    ganttDateRangeFromTask,
    seedDates,
} from '../kup-planner-renderer-helper';
import { removeHiddenTasks, sortTasks } from '../helpers/other.helpers';
import {
    calculateCurrentDateCalculator,
    calculateProjection,
    convertToBarTasks,
} from '../helpers/bar.helpers';

@Component({
    tag: 'kup-gantt',
    styleUrl: 'kup-gantt.scss',
    shadow: false, // Enable Shadow DOM
})
export class KupGantt {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop()
    ganttId: KupPlannerGanttProps['id'];

    @Prop()
    tasks: KupPlannerGanttProps['tasks'];

    @Prop()
    headerHeight: KupPlannerGanttProps['headerHeight'] = 114;

    @Prop()
    columnWidth: KupPlannerGanttProps['columnWidth'] = 60;

    @Prop()
    listCellWidth: KupPlannerGanttProps['listCellWidth'] = '300px';

    @Prop()
    rowHeight: KupPlannerGanttProps['rowHeight'] = 50;

    @Prop()
    filter: KupPlannerGanttProps['filter'];

    @Prop()
    ganttHeight: KupPlannerGanttProps['ganttHeight'] = 0;

    @Prop()
    viewMode: KupPlannerGanttProps['viewMode'] = 'month';

    @Prop()
    preStepsCount: KupPlannerGanttProps['preStepsCount'] = 1;

    @Prop()
    locale: KupPlannerGanttProps['locale'] = 'en-GB';

    @Prop()
    barFill: KupPlannerGanttProps['barFill'] = 60;

    @Prop()
    projectFill: KupPlannerGanttProps['barFill'] = 80;

    @Prop()
    timelineFill: KupPlannerGanttProps['barFill'] = 40;

    @Prop()
    barCornerRadius: KupPlannerGanttProps['barCornerRadius'] = 3;

    @Prop()
    barProgressColor: KupPlannerGanttProps['barProgressColor'] = '#a3a3ff';

    @Prop()
    barProgressSelectedColor: KupPlannerGanttProps['barProgressSelectedColor'] =
        '#8282f5';

    @Prop()
    barBackgroundColor: KupPlannerGanttProps['barBackgroundColor'] = '#b8c2cc';

    @Prop()
    barBackgroundSelectedColor: KupPlannerGanttProps['barBackgroundSelectedColor'] =
        '#aeb8c2';

    @Prop()
    projectProgressColor: KupPlannerGanttProps['projectProgressColor'] =
        '#7db59a';

    @Prop()
    projectProgressSelectedColor: KupPlannerGanttProps['projectProgressSelectedColor'] =
        '#59a985';

    @Prop()
    projectBackgroundColor: KupPlannerGanttProps['projectBackgroundColor'] =
        '#fac465';

    @Prop()
    projectBackgroundSelectedColor: KupPlannerGanttProps['projectBackgroundSelectedColor'] =
        '#f7bb53';

    @Prop()
    rtl: KupPlannerGanttProps['rtl'] = false;

    @Prop()
    handleWidth: KupPlannerGanttProps['handleWidth'] = 8;

    @Prop()
    timeStep: KupPlannerGanttProps['timeStep'] = 300000;

    @Prop()
    arrowColor: KupPlannerGanttProps['arrowColor'] = 'grey';

    @Prop()
    fontFamily: KupPlannerGanttProps['fontFamily'] =
        'Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue';

    @Prop()
    fontSize: KupPlannerGanttProps['fontSize'] = '14px';

    @Prop()
    arrowIndent: KupPlannerGanttProps['arrowIndent'] = 20;

    @Prop()
    todayColor: KupPlannerGanttProps['todayColor'] = '#ff0000';

    @Prop()
    viewDate: KupPlannerGanttProps['viewDate'];

    @Prop()
    TooltipContent: KupPlannerGanttProps['TooltipContent'] = (
        <kup-standard-tooltip />
    );

    @Prop()
    TaskListHeader: KupPlannerGanttProps['TaskListHeader'] = (
        <kup-task-list-header />
    );

    @Prop()
    TaskListTable: KupPlannerGanttProps['TaskListTable'] = (
        <kup-task-list-table />
    );

    @Prop()
    dateTimeFormatters: KupPlannerGanttProps['dateTimeFormatters'];

    @Prop()
    singleLineHeader: KupPlannerGanttProps['singleLineHeader'] = false;

    @Prop()
    hideLabel: KupPlannerGanttProps['hideLabel'] = false;

    @Prop()
    showSecondaryDates: KupPlannerGanttProps['showSecondaryDates'] = false;

    @Prop()
    hideDependencies: KupPlannerGanttProps['hideDependencies'] = false;

    @Prop()
    projection: KupPlannerGanttProps['projection'];

    @Prop()
    displayedStartDate: KupPlannerGanttProps['displayedStartDate'];

    @Prop()
    displayedEndDate: KupPlannerGanttProps['displayedEndDate'];

    @Prop()
    initialScrollX: KupPlannerGanttProps['initialScrollX'] = -1;

    @Prop()
    initialScrollY: KupPlannerGanttProps['initialScrollY'] = 0;

    @Prop()
    readOnly: KupPlannerGanttProps['readOnly'];

    @Prop()
    currentTasks: KupPlannerGanttTaskN[] | KupPlannerItemDetail[] = [];

    @Prop()
    label: string;

    @Prop()
    doubleView?: boolean;

    @Prop()
    scrollableTaskList?: boolean;

    @Prop()
    setDoubleView?: (checked: boolean) => void;

    @Prop()
    barContextMenu: KupPlannerGanttProps['barContextMenu'];

    @Prop()
    scrollXChange: KupPlannerGanttProps['scrollXChange'];

    @Prop()
    scrollYChange: KupPlannerGanttProps['scrollYChange'];

    @Prop()
    barClick: KupPlannerGanttProps['barClick'];

    @Prop()
    barDblClick: KupPlannerGanttProps['barDblClick'];

    @Prop()
    dateChange: KupPlannerGanttProps['dateChange'];

    @Prop()
    select: KupPlannerGanttProps['select'];

    @Prop()
    handleClick: (row: KupPlannerGanttRow, onClick: any) => void;

    @Prop()
    handleDblClick: (row: KupPlannerGanttRow, onDblClick: any) => void;

    @Prop()
    handleContextMenu: (
        event: MouseEvent,
        row: KupPlannerGanttRow,
        onContextMenu: any
    ) => void;

    @Prop()
    ganttOnClick: KupGanttPlannerProps['onClick'];

    @Prop()
    ganttOnDblClick: KupGanttPlannerProps['onDblClick'];

    @Prop()
    ganttonOnContextMenu: KupGanttPlannerProps['onContextMenu'];

    @Prop()
    progressChange: KupPlannerGanttProps['progressChange'];

    @Prop()
    doubleClick: KupPlannerGanttProps['doubleClick'];

    @Prop()
    delete: KupPlannerGanttProps['delete'];

    @Prop()
    expanderClick: KupPlannerGanttProps['expanderClick'];

    @Prop()
    phaseDrop: KupPlannerGanttProps['phaseDrop'];

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State()
    wrapperRef: HTMLDivElement;

    @State()
    taskGanttRef: HTMLDivElement | null = null;

    @State()
    taskListRef: HTMLDivElement;

    @State()
    dateSetup: KupPlannerDateSetup | undefined;

    @State()
    taskListWidth: number = 0;

    @State()
    svgContainerWidth: number = 0;

    @State()
    svgContainerHeight: number = this.ganttHeight;

    @State()
    barTasks: KupPlannerBarTask[] = [];

    @State()
    ganttEvent: KupPlannerGanttEvent = { action: '' };

    @State()
    taskHeight: number = (this.rowHeight * this.barFill) / 100;

    // Define a computed property for projectHeight
    @State()
    projectHeight = (this.rowHeight * this.projectFill) / 100;

    @State()
    timelineHeight = (this.rowHeight * this.timelineFill) / 100;

    @State()
    selectedTask: KupPlannerBarTask | undefined;

    @State()
    failedTask: KupPlannerBarTask | null = null;

    @State()
    svgWidth: number;

    @State()
    ganttFullHeight: number;

    @State()
    scrollX: number = 0;

    @State()
    scrollY: number = -1;

    @State()
    ignoreScrollEvent: boolean = false;

    @State()
    currentDateIndicatorContent: KupPlannerCurrentDateIndicator | undefined;

    @State()
    projectionContent:
        | {
              x0: number;
              xf: number;
              color: string;
          }
        | undefined;

    @State()
    taskListScrollWidth: number;

    @State()
    taskListScrollX: number = 0;

    /**
     * References the root HTML element of the component (<kup-gantt>).
     */

    @Element() rootElement: HTMLElement;
    taskListTrueRef: HTMLKupTaskListElement = null;
    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.updateGanttData();
        this.loadStates();
    }

    loadStates() {
        this.scrollX = this.initialScrollX;
        this.scrollY = this.initialScrollY;
        const [startDate, endDate] = ganttDateRangeFromTask(
            this.tasks,
            this.viewMode,
            this.preStepsCount,
            this.showSecondaryDates,
            this.displayedStartDate,
            this.displayedEndDate
        );
        this.dateSetup = {
            viewMode: this.viewMode,
            dates: seedDates(startDate, endDate, this.viewMode),
        };
        this.svgWidth = this.dateSetup?.dates?.length * this.columnWidth;
        this.ganttFullHeight = this.barTasks.length * this.rowHeight;
    }

    componentDidRender() {
        this.taskGanttRef = this.rootElement
            .querySelector('kup-task-gantt')
            .querySelector('.ganttVerticalContainer');
    }

    componentDidLoad() {
        this.updateScrollLeftAndScrollTop();
        window.addEventListener(
            'gantt-sync-scroll-event',
            this.onGanttSyncScrollEvent.bind(this)
        );
    }

    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/

    // initial scroll
    @Watch('initialScrollY')
    @Watch('scrollYChange')
    updateInitialScrollY() {
        if (this.scrollYChange) {
            this.scrollYChange(this.initialScrollY);
        }
        this.scrollY = this.initialScrollY;
    }

    // sync scroll event
    @Watch('initialScrollX')
    @Watch('scrollXChange')
    updateInitialScrollX() {
        window.addEventListener('gantt-sync-scroll-event', function (e: any) {
            if (e.detail.id !== this.ganttId) {
                this.scrollX = e.detail.scrollX;
                // execute scroll x event
                if (this.scrollXChange) {
                    this.scrollXChange(e.detail.scrollX);
                }
            }
        });
    }

    // task change events
    @Watch('tasks')
    @Watch('viewMode')
    @Watch('preStepsCount')
    @Watch('rowHeight')
    @Watch('barCornerRadius')
    @Watch('columnWidth')
    @Watch('taskHeight')
    @Watch('handleWidth')
    @Watch('barProgressColor')
    @Watch('barProgressSelectedColor')
    @Watch('barBackgroundColor')
    @Watch('barBackgroundSelectedColor')
    @Watch('projectProgressColor')
    @Watch('projectProgressSelectedColor')
    @Watch('projectBackgroundColor')
    @Watch('projectBackgroundSelectedColor')
    @Watch('milestoneBackgroundColor')
    @Watch('milestoneBackgroundSelectedColor')
    @Watch('rtl')
    @Watch('scrollX')
    @Watch('onExpanderClick')
    @Watch('showSecondaryDates')
    @Watch('projectHeight')
    @Watch('timelineHeight')
    @Watch('displayedStartDate')
    @Watch('displayedEndDate')
    @Watch('dateSetup')
    updateGanttData() {
        let filteredTasks: KupPlannerTask[];
        if (this.expanderClick) {
            filteredTasks = removeHiddenTasks(this.tasks);
        } else {
            filteredTasks = this.tasks;
        }
        filteredTasks = filteredTasks.sort(sortTasks);
        const [startDate, endDate] = ganttDateRangeFromTask(
            filteredTasks,
            this.viewMode,
            this.preStepsCount,
            this.showSecondaryDates,
            this.displayedStartDate,
            this.displayedEndDate
        );
        let newDates = seedDates(startDate, endDate, this.viewMode);
        if (this.rtl) {
            newDates = newDates.reverse();
            if (scrollX === -1) {
                this.scrollX = newDates.length * this.columnWidth;
            }
        }
        let set: boolean = false;
        if (this.dateSetup && this.dateSetup.dates) {
            const old = this.dateSetup.dates;
            if (old.length !== newDates.length) {
                set = true;
            } else {
                for (let i = 0; i < old.length; i++) {
                    if (old[i].valueOf() !== newDates[i].valueOf()) {
                        set = true;
                        break;
                    }
                }
            }
        }
        if (set) {
            this.dateSetup = { dates: newDates, viewMode: this.viewMode };
        }
        this.barTasks = convertToBarTasks(
            filteredTasks,
            newDates,
            this.columnWidth,
            this.rowHeight,
            this.taskHeight,
            this.projectHeight,
            this.timelineHeight,
            this.barCornerRadius,
            this.handleWidth,
            this.rtl,
            this.barProgressColor,
            this.barProgressSelectedColor,
            this.barBackgroundColor,
            this.barBackgroundSelectedColor,
            this.projectProgressColor,
            this.projectProgressSelectedColor,
            this.projectBackgroundColor,
            this.projectBackgroundSelectedColor,
            this.showSecondaryDates
        );
    }

    @Watch('viewDate')
    @Watch('columnWidth')
    @Watch('dateSetup')
    @Watch('viewMode')
    @Watch('initialScrollX')
    updateIgnoreScrollEvent() {
        if (
            this.viewMode === this.dateSetup.viewMode &&
            this.viewDate &&
            this.initialScrollX < 1
        ) {
            const dates = this.dateSetup.dates;
            const index = dates.findIndex(
                (d, i) =>
                    this.viewDate.valueOf() >= d.valueOf() &&
                    i + 1 !== dates.length &&
                    this.viewDate.valueOf() < dates[i + 1].valueOf()
            );
            if (index === -1) {
                return;
            }

            this.ignoreScrollEvent = true;
            this.scrollX = this.columnWidth * index;
        }
    }

    @Watch('ganttEvent')
    updateGanttEventAndBarTasks() {
        const { changedTask, action } = this.ganttEvent;
        if (changedTask) {
            if (action === 'delete') {
                this.ganttEvent = { action: '' };
                this.barTasks = this.barTasks.filter(
                    (t) => t.id !== changedTask.id
                );
            } else if (
                action === 'move' ||
                action === 'end' ||
                action === 'start' ||
                action === 'progress'
            ) {
                const prevStateTask = this.barTasks.find(
                    (t) => t.id === changedTask.id
                );
                if (
                    prevStateTask &&
                    (prevStateTask.start.getTime() !==
                        changedTask.start.getTime() ||
                        prevStateTask.end.getTime() !==
                            changedTask.end.getTime() ||
                        prevStateTask.progress !== changedTask.progress)
                ) {
                    // actions for change
                    const newTaskList = this.barTasks.map((t) =>
                        t.id === changedTask.id ? changedTask : t
                    );
                    this.barTasks = newTaskList;
                }
            }
        }
    }

    @Watch('failedTask')
    @Watch('barTasks')
    updateFailedTasksAndBarChart() {
        if (this.failedTask) {
            this.barTasks = this.barTasks.map((t) =>
                t.id !== this.failedTask.id ? t : this.failedTask
            );
            this.failedTask = null;
        }
    }

    @Watch('taskListRef')
    @Watch('listCellWidth')
    updateTaskListWidth() {
        if (!this.listCellWidth) {
            this.taskListWidth = 0;
        }
        if (this.taskListRef) {
            this.taskListWidth = this.taskListRef.offsetWidth;
        }
    }

    @Watch('wrapperRef')
    updateSvgContainerWidth() {
        if (this.wrapperRef) {
            this.svgContainerWidth =
                this.wrapperRef.offsetWidth - this.taskListWidth;
        }
    }

    @Watch('ganttHeight')
    @Watch('tasks')
    @Watch('headerHeight')
    @Watch('rowHeight')
    updateSvgContainerHeight() {
        if (this.ganttHeight) {
            this.svgContainerHeight = this.ganttHeight + this.headerHeight;
        } else {
            this.svgContainerHeight =
                this.tasks.length * this.rowHeight + this.headerHeight;
        }
    }

    @Watch('wrapperRef')
    @Watch('scrollY')
    @Watch('scrollX')
    @Watch('ganttHeight')
    @Watch('svgWidth')
    @Watch('rtl')
    @Watch('ganttFullHeight')
    @Listen('wheel', { passive: false })
    handleWheel(event: WheelEvent) {
        const wrapperRefLocal = this.wrapperRef; // Replace with your actual wrapper class

        if (!wrapperRefLocal) return;

        if (event?.type !== 'wheel') return;

        if (event.shiftKey || event.deltaX) {
            const scrollMove = event.deltaX ? event.deltaX : event.deltaY;
            let newScrollX = this.scrollX + scrollMove;
            if (newScrollX < 0) {
                newScrollX = 0;
            } else if (newScrollX > this.svgWidth) {
                newScrollX = this.svgWidth;
            }
            this.scrollX = newScrollX;
            // this.taskListScrollX = newScrollX;
            window.dispatchEvent(
                new CustomEvent<GanttSyncScrollEvent>(
                    'gantt-sync-scroll-event',
                    {
                        detail: {
                            componentId: this.ganttId,
                            scrollX: newScrollX,
                        },
                    }
                )
            );
            event.preventDefault();
        } else if (this.ganttHeight) {
            let newScrollY = this.scrollY + event.deltaY;
            if (newScrollY < 0) {
                newScrollY = 0;
            } else if (
                newScrollY > Math.abs(this.ganttFullHeight - this.ganttHeight)
            ) {
                newScrollY = Math.abs(this.ganttFullHeight - this.ganttHeight);
            }
            if (newScrollY !== this.scrollY) {
                if (this.scrollYChange) {
                    this.scrollYChange(newScrollY);
                }
                this.scrollY = newScrollY;
                event.preventDefault();
            }
        }
        this.ignoreScrollEvent = true;
    }

    @Watch('columnWidth')
    @Watch('dateSetup')
    @Watch('todayColor')
    updateCurrentDateIndicatorContent() {
        const x = calculateCurrentDateCalculator(
            this.dateSetup.dates,
            this.columnWidth
        );
        if (x !== 0) {
            this.currentDateIndicatorContent = {
                color: this.todayColor,
                x,
            };
        }
    }

    @Watch('columnWidth')
    @Watch('dateSetup')
    @Watch('projection')
    updateProjectionContent() {
        if (this.projection) {
            const { x0, xf } = calculateProjection(
                this.projection.start,
                this.projection.end,
                this.dateSetup.dates,
                this.columnWidth
            );
            this.projectionContent = {
                x0,
                xf,
                color: this.projection.color,
            };
        } else {
            this.projectionContent = undefined;
        }
    }

    @Watch('dateSetup')
    @Watch('columnWidth')
    updateSvgWidth() {
        this.svgWidth = this.dateSetup?.dates?.length * this.columnWidth;
    }

    @Watch('barTasks')
    @Watch('rowHeight')
    updateGanttFullHeight() {
        this.ganttFullHeight = this.barTasks.length * this.rowHeight;
    }

    onGanttSyncScrollEvent(e: any) {
        if (e.detail.componentId !== this.ganttId) {
            this.scrollX = e.detail.scrollX;
            // execute scroll x event
            if (this.scrollXChange) {
                this.scrollXChange(e.detail.scrollX);
            }
        }
    }

    updateScrollLeftAndScrollTop() {
        if (this.wrapperRef) {
            const wrap = this.wrapperRef;
            if (wrap) {
                if (this.scrollX !== -1) {
                    const setScrollLeft = () => {
                        wrap.scrollLeft = this.scrollX;
                    };
                    setTimeout(setScrollLeft, 125);
                }
                if (this.scrollY !== 0) {
                    const setScrollTop = () => {
                        wrap.scrollTop = this.scrollY;
                    };
                    setTimeout(setScrollTop, 125);
                }
            }
        }
    }

    handleScrollY(event: UIEvent) {
        const currentTarget = event.currentTarget as HTMLDivElement;
        if (this.scrollY !== currentTarget.scrollTop) {
            if (!this.ignoreScrollEvent) {
                // Execute scroll Y event
                if (this.scrollYChange) {
                    this.scrollYChange(currentTarget.scrollTop);
                }
                this.scrollY = currentTarget.scrollTop;
                this.ignoreScrollEvent = true;
            } else {
                this.ignoreScrollEvent = false;
            }
        } else {
            this.ignoreScrollEvent = false;
        }
    }

    handleScrollX(event: UIEvent) {
        const currentTarget = event.currentTarget as HTMLDivElement;
        if (
            this.scrollX !== currentTarget.scrollLeft &&
            !this.ignoreScrollEvent
        ) {
            this.scrollX = currentTarget.scrollLeft;
            this.ignoreScrollEvent = true;
            // Emit event to sync scroll
            const id = this.ganttId;
            window.dispatchEvent(
                new CustomEvent<GanttSyncScrollEvent>(
                    'gantt-sync-scroll-event',
                    {
                        detail: {
                            componentId: id,
                            scrollX: currentTarget.scrollLeft,
                        },
                    }
                )
            );
        } else {
            this.ignoreScrollEvent = false;
        }
    }

    handleKeyDown(event: KeyboardEvent) {
        if ((event.target as HTMLElement).tagName === 'INPUT') {
            return;
        }
        event.preventDefault();
        let newScrollY = this.scrollY;
        let newScrollX = this.scrollX;
        let isX = true;
        switch (event.key) {
            case 'Down': // IE/Edge specific value
            case 'ArrowDown':
                newScrollY += this.rowHeight;
                isX = false;
                break;
            case 'Up': // IE/Edge specific value
            case 'ArrowUp':
                newScrollY -= this.rowHeight;
                isX = false;
                break;
            case 'Left':
            case 'ArrowLeft':
                newScrollX -= this.columnWidth;
                break;
            case 'Right': // IE/Edge specific value
            case 'ArrowRight':
                newScrollX += this.columnWidth;
                break;
        }
        if (isX) {
            if (newScrollX < 0) {
                newScrollX = 0;
            } else if (newScrollX > this.svgWidth) {
                newScrollX = this.svgWidth;
            }
            this.scrollX = newScrollX;
            // Emit event to sync scroll
            window.dispatchEvent(
                new CustomEvent<GanttSyncScrollEvent>(
                    'gantt-sync-scroll-event',
                    {
                        detail: {
                            componentId: this.ganttId,
                            scrollX: newScrollX,
                        },
                    }
                )
            );
        } else {
            if (newScrollY < 0) {
                newScrollY = 0;
            } else if (newScrollY > this.ganttFullHeight - this.ganttHeight) {
                newScrollY = this.ganttFullHeight - this.ganttHeight;
            }
            // Execute scroll y event
            if (this.scrollYChange) {
                this.scrollYChange(newScrollY);
            }
            this.scrollY = newScrollY;
        }
        this.ignoreScrollEvent = true;
    }

    handleSelectedTask(taskId: string) {
        const newSelectedTask = this.barTasks.find((t) => t.id === taskId);
        const oldSelectedTask = this.barTasks.find(
            (t) => !!this.selectedTask && t.id === this.selectedTask.id
        );
        if (this.select) {
            if (oldSelectedTask) {
                this.select(oldSelectedTask, false);
            }
            if (newSelectedTask) {
                this.select(newSelectedTask, true);
            }
        }
        this.selectedTask = newSelectedTask;
    }

    handleExpanderClick(task: KupPlannerTask) {
        if (this.expanderClick && task.hideChildren !== undefined) {
            this.expanderClick({ ...task, hideChildren: !task.hideChildren });
        }
    }

    handleTaskListScrollX(event: UIEvent) {
        const currentTarget = event.currentTarget as HTMLDivElement;
        this.taskListScrollX = currentTarget.scrollLeft;
    }

    handlePhaseDragScroll(scrollY: number) {
        this.scrollY = scrollY;
    }

    setFailedTask(task: KupPlannerBarTask | null) {
        this.failedTask = task;
    }

    setGanttEvent(gantt: KupPlannerGanttEvent) {
        this.ganttEvent = gantt;
    }

    render() {
        const gridProps: KupPlannerGridProps = {
            columnWidth: this.columnWidth,
            svgWidth: this.svgWidth,
            tasks: this.tasks,
            rowHeight: this.rowHeight,
            dates: this.dateSetup?.dates,
            todayColor: this.todayColor,
            rtl: this.rtl,
        };

        const calendarProps: KupPlannerCalendarProps = {
            dateSetup: this.dateSetup,
            locale: this.locale,
            viewMode: this.viewMode,
            headerHeight: this.headerHeight,
            columnWidth: this.columnWidth,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            rtl: this.rtl,
            dateTimeFormatters: this.dateTimeFormatters,
            singleLineHeader: this.singleLineHeader,
            currentDateIndicator: this.currentDateIndicatorContent,
        };

        const barProps: KupPlannerTaskGanttContentProps = {
            tasks: this.barTasks,
            dates: this.dateSetup?.dates,
            ganttEvent: this.ganttEvent,
            selectedTask: this.selectedTask,
            rowHeight: this.rowHeight,
            taskHeight: this.taskHeight,
            columnWidth: this.columnWidth,
            arrowColor: this.hideDependencies ? 'transparent' : this.arrowColor,
            timeStep: this.timeStep,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            arrowIndent: this.arrowIndent,
            svgWidth: this.svgWidth,
            rtl: this.rtl,
            hideLabel: this.hideLabel,
            showSecondaryDates: this.showSecondaryDates,
            ganttHeight: this.ganttHeight,
            currentDateIndicator: this.currentDateIndicatorContent,
            projection: this.projectionContent,
            readOnly: this.readOnly,
            setGanttEvent: this.setGanttEvent.bind(this),
            setFailedTask: this.setFailedTask.bind(this),
            setSelectedTask: this.handleSelectedTask.bind(this),
            dateChange: this.dateChange,
            progressChange: this.progressChange,
            doubleClick: this.doubleClick,
            barClick: this.barClick,
            barDblClick: this.barDblClick,
            barContextMenu: this.barContextMenu,
            delete: this.delete,
            phaseDrop: this.phaseDrop,
        };

        const tableProps: KupPlannerTaskListProps = {
            rowHeight: this.rowHeight,
            rowWidth: this.listCellWidth,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            tasks: this.barTasks,
            locale: this.locale,
            headerHeight: this.headerHeight,
            scrollY: this.scrollY,
            ganttHeight: this.ganttHeight,
            filter: this.filter,
            horizontalContainerClass: 'horizontalContainer',
            selectedTask: this.selectedTask,
            taskListRef: this.taskListRef,
            setSelectedTask: this.handleSelectedTask.bind(this),
            expanderClick: this.handleExpanderClick.bind(this),
            TaskListHeader: this.TaskListHeader,
            TaskListTable: this.TaskListTable,
        };

        return (
            <div class="gannt-wrapper-main">
                <div
                    class="wrapper"
                    onKeyDown={this.handleKeyDown.bind(this)}
                    tabIndex={0}
                    ref={(el) => (this.wrapperRef = el)}
                >
                    {this.listCellWidth && (
                        <kup-task-list
                            currentTasks={this.currentTasks}
                            handleClick={this.handleClick}
                            handleDblClick={this.handleDblClick}
                            handleContextMenu={this.handleContextMenu}
                            ganttOnClick={this.ganttOnClick}
                            ganttOnDblClick={this.ganttOnDblClick}
                            ganttonOnContextMenu={this.ganttonOnContextMenu}
                            label={this.label}
                            doubleView={this.doubleView}
                            setDoubleView={this.setDoubleView}
                            {...tableProps}
                            class="tasks"
                            scrollableTaskList={this.scrollableTaskList}
                            updateTaskListScrollX={this.ignoreScrollEvent}
                            ontaskListScrollWidth={(width) => {
                                this.taskListScrollWidth = width;
                            }}
                            taskListScrollX={this.taskListScrollX}
                            ref={(el) => (this.taskListTrueRef = el)}
                        />
                    )}
                    <kup-task-gantt
                        gridProps={gridProps}
                        calendarProps={calendarProps}
                        barProps={barProps}
                        ganttHeight={this.ganttHeight}
                        taskGanttRef={this.taskGanttRef}
                        scrollY={this.scrollY}
                        scrollX={this.scrollX}
                        phaseDragScroll={this.handlePhaseDragScroll.bind(this)}
                        class="ganttContainer"
                    />
                    {this.ganttEvent.changedTask && (
                        <kup-tooltip
                            arrowIndent={this.arrowIndent}
                            rowHeight={this.rowHeight}
                            svgContainerHeight={this.svgContainerHeight}
                            svgContainerWidth={this.svgContainerWidth}
                            fontFamily={this.fontFamily}
                            fontSize={this.fontSize}
                            scrollX={this.scrollX}
                            scrollY={this.scrollY}
                            task={this.ganttEvent.changedTask}
                            headerHeight={this.headerHeight}
                            taskListWidth={this.taskListWidth}
                            TooltipContent={this.TooltipContent}
                            rtl={this.rtl}
                            svgWidth={this.svgWidth}
                        />
                    )}
                    <kup-vertical-scroll
                        ganttFullHeight={this.ganttFullHeight}
                        ganttHeight={this.ganttHeight}
                        headerHeight={this.headerHeight}
                        scrollNumber={this.scrollY}
                        verticalScroll={this.handleScrollY.bind(this)}
                        rtl={this.rtl}
                    />
                </div>
                {this.taskGanttRef && (
                    <kup-horizontal-scroll
                        svgWidth={this.svgWidth}
                        taskListTrueRef={this.taskListTrueRef}
                        taskListWidth={this.taskListWidth}
                        scrollNumber={this.scrollX}
                        rtl={this.rtl}
                        horizontalScroll={this.handleScrollX.bind(this)}
                        horizontalTaskListScroll={this.handleTaskListScrollX.bind(
                            this
                        )}
                        listCellWidth={this.listCellWidth}
                        scrollableTaskList={this.scrollableTaskList}
                        taskListScrollWidth={this.taskListScrollWidth}
                        taskListScrollNumber={this.taskListScrollX}
                    />
                )}
            </div>
        );
    }
}

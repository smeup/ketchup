import { Component, h, Prop, State, Element, Watch } from '@stencil/core';
import {
    KUP_PLANNER_MAIN_GANTT_ID,
    KupPlannerBarTask,
    KupPlannerGanttRow,
    KupPlannerGanttTaskN,
    KupPlannerItemDetail,
    KupPlannerTask,
    KupPlannerTaskListProps,
    KupGanttPlannerProps,
} from '../../kup-planner-declarations';
import { getPhaseById, getProjectById } from '../kup-planner-renderer-helper';

@Component({
    tag: 'kup-task-list',
    styleUrl: 'kup-task-list.scss',
    shadow: false,
})
export class TaskList {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    headerHeight: number;

    @Prop()
    fontFamily: string;

    @Prop()
    fontSize: string;

    @Prop()
    rowWidth: string;

    @Prop()
    rowHeight: number;

    @Prop()
    scrollY: number;

    @Prop()
    locale: string;

    @Prop()
    tasks: KupPlannerTask[];

    @Prop()
    selectedTask: KupPlannerBarTask | undefined;

    @Prop()
    horizontalContainerClass?: string;

    @Prop()
    ganttHeight: number;
    // Include ganttHeight prop
    @Prop()
    filter: HTMLElement;

    @Prop()
    TaskListHeader: KupPlannerTaskListProps['TaskListHeader'];

    @Prop()
    TaskListTable: KupPlannerTaskListProps['TaskListTable'];

    @Prop()
    currentTasks: KupPlannerGanttTaskN[] | KupPlannerItemDetail[];

    @Prop()
    label: string;

    @Prop()
    doubleView?: boolean;

    @Prop()
    scrollableTaskList?: boolean;

    @Prop()
    updateTaskListScrollX: boolean = false;

    @Prop()
    taskListScrollX: number;

    @Prop()
    setDoubleView?: (checked: boolean) => void;

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
    setSelectedTask: KupPlannerTaskListProps['setSelectedTask'];

    @Prop()
    expanderClick: KupPlannerTaskListProps['expanderClick'];

    @Prop()
    ontaskListScrollWidth: (width: number) => void;

    /**
     * References the root HTML element of the component (<kup-task-list>).
     */

    @Element() element: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() selectedTaskId: string = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private taskListRef: HTMLDivElement;
    private horizontalContainerRef: HTMLDivElement;

    componentDidLoad() {
        this.taskListRef.prepend(this.filter);
        setTimeout(() => {
            if (this.horizontalContainerRef) {
                this.horizontalContainerRef.scrollTop = this.scrollY;
            }
        }, 75);
    }

    componentDidUpdate() {
        if (this.taskListRef) {
            this.taskListRef.scrollTop = this.scrollY;
        }
    }
    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/

    @Watch('scrollY')
    updateScrollY() {
        this.horizontalContainerRef &&
            (this.horizontalContainerRef.scrollTop = this.scrollY);
    }

    render() {
        const headerProps = {
            headerHeight: this.headerHeight,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            rowWidth: this.rowWidth,
        };

        if (this.selectedTask) {
            this.selectedTaskId = this.selectedTask.id;
        }

        const tableProps = {
            rowHeight: this.rowHeight,
            rowWidth: this.rowWidth,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            tasks: this.tasks,
            locale: this.locale,
            selectedTaskId: this.selectedTaskId,
            scrollableTaskList: this.scrollableTaskList,
            setSelectedTask: this.setSelectedTask.bind(this),
            onExpanderClick: this.expanderClick,
        };

        const TaskListHeader = this.TaskListHeader;
        if (TaskListHeader && TaskListHeader['$attrs$']) {
            Object.assign(TaskListHeader['$attrs$'], { ...headerProps });
        }

        const TaskListTable = this.TaskListTable;
        if (TaskListTable && TaskListTable['$attrs$']) {
            Object.assign(TaskListTable['$attrs$'], { ...tableProps });
        }

        return (
            <div ref={(el) => (this.taskListRef = el)}>
                {TaskListHeader && TaskListHeader['$attrs$'] ? (
                    TaskListHeader
                ) : (
                    <kup-custom-task-list-header
                        label={this.label}
                        doubleView={this.doubleView ?? false}
                        setDoubleView={this.setDoubleView}
                        {...headerProps}
                    />
                )}
                <div
                    class={`${this.horizontalContainerClass} ${
                        this.scrollableTaskList
                            ? 'horizontalContainerScrollable'
                            : ''
                    }`}
                    style={
                        this.ganttHeight
                            ? { height: this.ganttHeight + 'px' }
                            : {}
                    }
                    ref={(el) => (this.horizontalContainerRef = el)}
                >
                    {TaskListTable && TaskListTable['$attrs$'] ? (
                        TaskListTable
                    ) : (
                        <kup-custom-task-list-table
                            {...tableProps}
                            onclickTaskList={(id) => {
                                let row = getProjectById(id, this.currentTasks);
                                if (!row) {
                                    row = getPhaseById(id, this.currentTasks);
                                }
                                if (row) {
                                    this.handleClick(row, this.ganttOnClick);
                                }
                            }}
                            ondblclickTaskList={(id) => {
                                let row = getProjectById(id, this.currentTasks);
                                if (!row) {
                                    row = getPhaseById(id, this.currentTasks);
                                }
                                if (row) {
                                    this.handleDblClick(
                                        row,
                                        this.ganttOnDblClick
                                    );
                                }
                            }}
                            oncontextmenuTaskList={(event, id) => {
                                let row = getProjectById(id, this.currentTasks);
                                if (!row) {
                                    row = getPhaseById(id, this.currentTasks);
                                }
                                if (row) {
                                    this.handleContextMenu(
                                        event as any,
                                        row,
                                        this.ganttonOnContextMenu
                                    );
                                }
                            }}
                            ontaskListScrollWidth={(width) => {
                                this.ontaskListScrollWidth(width);
                            }}
                            taskListScrollX={this.taskListScrollX}
                            ganttId={KUP_PLANNER_MAIN_GANTT_ID}
                        />
                    )}
                </div>
            </div>
        );
    }
}

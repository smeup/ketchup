import { Component, Fragment, h, Prop } from '@stencil/core';
import { KupPlannerTask } from '../kup-planner-declarations';
import { KupDates } from '../../../managers/kup-dates/kup-dates';
@Component({
    tag: 'kup-custom-task-list-table',
    styleUrl: 'gantt-table.module.scss',
})
export class KupCustomTaskListTable {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    ganttId: string;

    @Prop()
    tasks: KupPlannerTask[] = [];

    @Prop()
    rowHeight: number = 0;

    @Prop()
    rowWidth: string = '';

    @Prop()
    fontFamily: string = '';

    @Prop()
    fontSize: string = '';

    @Prop()
    setSelectedTask: (taskId: string) => void;

    @Prop()
    onclickTaskList: (id: string) => void;

    @Prop()
    ondblclickTaskList: (id: string) => void;

    @Prop()
    oncontextmenuTaskList: (event: MouseEvent, id: string) => void;

    render() {
        const kupDates: KupDates = new KupDates();
        return (
            <div class="container">
                {this.tasks.map((task) => (
                    <Fragment>
                        {task.type === 'project' ? (
                            <div
                                class="project"
                                style={{
                                    height: `${this.rowHeight}px`,
                                    width: this.rowWidth,
                                    fontFamily: this.fontFamily,
                                    fontSize: this.fontSize,
                                    gridTemplateColumns: `repeat(${task.valuesToShow.length}, 1fr)`,
                                }}
                                onClick={() => {
                                    this.setSelectedTask(task.id);
                                    this.onclickTaskList(task.id);
                                }}
                                onDblClick={() => {
                                    this.setSelectedTask(task.id);
                                    this.ondblclickTaskList(task.id);
                                }}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    this.setSelectedTask(task.id);
                                    this.oncontextmenuTaskList(e, task.id);
                                }}
                            >
                                {task.valuesToShow?.map((v, index) => (
                                    <span
                                        class={index === 0 ? 'main' : undefined}
                                        title={v.length > 10 ? v : undefined}
                                        key={`task_${task.id}_valuesToShow_${index}`}
                                    >
                                        {v === '#START#'
                                            ? kupDates.formatToLocaleSimple(
                                                  task.start
                                              )
                                            : v === '#END#'
                                            ? kupDates.formatToLocaleSimple(
                                                  task.end
                                              )
                                            : v}
                                    </span>
                                ))}
                            </div>
                        ) : task.type === 'task' ? (
                            <div
                                class="subrow"
                                style={{
                                    height: `${this.rowHeight}px`,
                                    width: this.rowWidth,
                                    fontFamily: this.fontFamily,
                                    fontSize: this.fontSize,
                                    gridTemplateColumns: `repeat(${
                                        task.valuesToShow.length + 1
                                    }, 1fr)`,
                                }}
                                onClick={() => {
                                    this.setSelectedTask(task.id);
                                    this.onclickTaskList(task.id);
                                }}
                                onDblClick={() => {
                                    this.setSelectedTask(task.id);
                                    this.ondblclickTaskList(task.id);
                                }}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    this.setSelectedTask(task.id);
                                    this.oncontextmenuTaskList(e, task.id);
                                }}
                            >
                                <span
                                    key={`phase_${task.id}_valuesToShow_color`}
                                    style={{
                                        height: '16px',
                                        width: '16px',
                                        backgroundColor:
                                            task.styles?.backgroundColor,
                                    }}
                                />
                                {task.valuesToShow?.map((v, index) => (
                                    <span
                                        class={index === 0 ? 'main' : undefined}
                                        title={v.length > 10 ? v : undefined}
                                        key={`phase_${task.id}_valuesToShow_${index}`}
                                    >
                                        {v === '#START#'
                                            ? kupDates.formatToLocaleSimple(
                                                  task.start
                                              )
                                            : v === '#END#'
                                            ? kupDates.formatToLocaleSimple(
                                                  task.end
                                              )
                                            : v}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            (() => {
                                let str = '';
                                for (
                                    let i = 0;
                                    i < task.valuesToShow.length;
                                    i++
                                ) {
                                    str += '1fr ';
                                }
                                return (
                                    <div
                                        class="timeline"
                                        style={{
                                            height: `${this.rowHeight}px`,
                                            width: this.rowWidth,
                                            fontFamily: this.fontFamily,
                                            fontSize: this.fontSize,
                                            '--grid-fasi-columns': str,
                                        }}
                                        onContextMenu={(e) => {
                                            e.preventDefault();
                                            this.setSelectedTask(task.id);
                                            this.oncontextmenuTaskList(
                                                e,
                                                task.id
                                            );
                                        }}
                                    >
                                        {task.valuesToShow?.map((v, index) => (
                                            <span
                                                class={
                                                    index === 0
                                                        ? 'main'
                                                        : undefined
                                                }
                                                title={
                                                    v.length > 10
                                                        ? v
                                                        : undefined
                                                }
                                                key={`detail_${task.id}_valuesToShow_${index}`}
                                            >
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                );
                            })()
                        )}
                    </Fragment>
                ))}
            </div>
        );
    }
}

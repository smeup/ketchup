import { Component, Fragment, h, Prop, Watch } from '@stencil/core';
import { KupPlannerTask } from '../kup-planner-declarations';
import { KupDates } from '../../../managers/kup-dates/kup-dates';
import { createArrayFromNum } from './helpers/other.helpers';
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
    scrollableTaskList: boolean;

    @Prop()
    taskListScrollX: number;

    @Prop()
    setSelectedTask: (taskId: string) => void;

    @Prop()
    onclickTaskList: (id: string) => void;

    @Prop()
    ondblclickTaskList: (id: string) => void;

    @Prop()
    oncontextmenuTaskList: (event: MouseEvent, id: string) => void;

    @Prop()
    ontaskListScrollWidth: (width: number) => void;

    private projectWrapperRef: HTMLDivElement;

    componentDidLoad() {
        this.ontaskListScrollWidth(this.projectWrapperRef?.clientWidth);
    }

    componentDidUpdate() {
        this.ontaskListScrollWidth(this.projectWrapperRef?.clientWidth);
    }

    @Watch('taskListScrollX')
    updateTaskListScroll() {
        this.projectWrapperRef &&
            (this.projectWrapperRef.parentElement.scrollLeft =
                this.taskListScrollX);
    }

    render() {
        const kupDates: KupDates = new KupDates();
        const scrollableStyle = {};

        if (this.scrollableTaskList) {
            scrollableStyle['width'] = this.rowWidth;
        }

        const spansToShow =
            this.tasks && this.tasks.length > 0
                ? this.tasks.reduce((prev, curr) => {
                      return prev.valuesToShow?.length >
                          curr.valuesToShow?.length
                          ? prev
                          : curr;
                  }).valuesToShow?.length + 1 || 1
                : 1;

        return (
            <div
                class={`container ${
                    this.scrollableTaskList ? 'scrollable' : ''
                }`}
                style={scrollableStyle}
            >
                <div
                    class="project-wrapper"
                    ref={(el) => (this.projectWrapperRef = el)}
                >
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
                                            class={
                                                index === 0 ? 'main' : undefined
                                            }
                                            title={
                                                v.length > 10 ? v : undefined
                                            }
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
                                    {this.scrollableTaskList &&
                                        spansToShow >
                                            task.valuesToShow.length &&
                                        (() => {
                                            const spansToIterate =
                                                createArrayFromNum(
                                                    spansToShow -
                                                        task.valuesToShow.length
                                                );
                                            return spansToIterate.map(
                                                (element) => (
                                                    <span key={element}></span>
                                                )
                                            );
                                        })()}
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
                                    {this.scrollableTaskList ? (
                                        <div
                                            style={{
                                                textAlign: 'end',
                                            }}
                                        >
                                            <span
                                                key={`phase_${task.id}_valuesToShow_color`}
                                                style={{
                                                    height: '16px',
                                                    width: '16px',
                                                    display: 'inline-block',
                                                    backgroundColor:
                                                        task.styles
                                                            ?.backgroundColor,
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <span
                                            key={`phase_${task.id}_valuesToShow_color`}
                                            style={{
                                                height: '16px',
                                                width: '16px',
                                                backgroundColor:
                                                    task.styles
                                                        ?.backgroundColor,
                                            }}
                                        />
                                    )}
                                    {task.valuesToShow?.map((v, index) => (
                                        <span
                                            class={
                                                index === 0 ? 'main' : undefined
                                            }
                                            title={
                                                v.length > 10 ? v : undefined
                                            }
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
                                    {this.scrollableTaskList &&
                                        spansToShow >
                                            task.valuesToShow.length &&
                                        (() => {
                                            const spansToIterate =
                                                createArrayFromNum(
                                                    spansToShow -
                                                        task.valuesToShow
                                                            .length -
                                                        1
                                                );
                                            return spansToIterate.map(
                                                (element) => (
                                                    <span key={element}></span>
                                                )
                                            );
                                        })()}
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
                                            {task.valuesToShow?.map(
                                                (v, index) => (
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
                                                )
                                            )}
                                        </div>
                                    );
                                })()
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

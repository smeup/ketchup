import { Component, h, Prop, State } from '@stencil/core';
import { KupPlannerTask } from '../../kup-planner-declarations';

@Component({
    tag: 'kup-task-list-table',
    styleUrl: 'kup-task-list.scss',
    shadow: false,
})
export class TaskListTableDefault {
    @Prop() rowHeight: number;
    @Prop() rowWidth: string;
    @Prop() fontFamily: string;
    @Prop() fontSize: string;
    @Prop() locale: string;
    @Prop() tasks: KupPlannerTask[];
    @Prop() selectedTaskId: string;
    @State() expandedTasks: Set<string> = new Set();
    @Prop() setSelectedTask: (taskId: string) => void;
    @Prop() expanderClick: (task: KupPlannerTask) => void;

    private dateTimeOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    private toLocaleDateString(date: Date): string {
        return date.toLocaleDateString(this.locale, this.dateTimeOptions);
    }

    render() {
        return (
            <div
                class="taskListWrapper"
                style={{
                    fontFamily: this.fontFamily,
                    fontSize: this.fontSize,
                }}
            >
                {this.tasks.map((task) => (
                    <div
                        class={{
                            taskListTableRow: true,
                            expanded: this.expandedTasks.has(task.id),
                        }}
                        style={{ height: `${this.rowHeight}px` }}
                        key={`${task.id}row`}
                    >
                        <div
                            class="taskListCell"
                            style={{
                                minWidth: this.rowWidth,
                                maxWidth: this.rowWidth,
                            }}
                            title={task.name}
                        >
                            <div class="taskListNameWrapper">
                                <div
                                    class={{
                                        taskListExpander: true,
                                        expanded: this.expandedTasks.has(
                                            task.id
                                        ),
                                    }}
                                    onClick={() => this.expanderClick(task)}
                                >
                                    {this.expandedTasks.has(task.id)
                                        ? '▼'
                                        : '▶'}
                                </div>
                                <div>{task.name}</div>
                            </div>
                        </div>
                        <div
                            class="taskListCell"
                            style={{
                                minWidth: this.rowWidth,
                                maxWidth: this.rowWidth,
                            }}
                        >
                            &nbsp;{this.toLocaleDateString(task.start)}
                        </div>
                        <div
                            class="taskListCell"
                            style={{
                                minWidth: this.rowWidth,
                                maxWidth: this.rowWidth,
                            }}
                        >
                            &nbsp;{this.toLocaleDateString(task.end)}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

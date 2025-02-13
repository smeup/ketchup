import {
    KupPlannerBarTask,
    KupPlannerTask,
} from '../../kup-planner-declarations';

export function isKeyboardEvent(
    event: MouseEvent | KeyboardEvent | FocusEvent
): event is KeyboardEvent {
    return (event as KeyboardEvent).key !== undefined;
}

export function isMouseEvent(
    event: MouseEvent | KeyboardEvent | FocusEvent
): event is MouseEvent {
    return (event as MouseEvent).clientX !== undefined;
}

export function isBarTask(
    task: KupPlannerTask | KupPlannerBarTask
): task is KupPlannerBarTask {
    return (task as KupPlannerBarTask).x1 !== undefined;
}

export function removeHiddenTasks(tasks: KupPlannerTask[]) {
    const groupedTasks = tasks.filter(
        (t) => t.hideChildren && t.type === 'project'
    );
    if (groupedTasks.length > 0) {
        for (let i = 0; groupedTasks.length > i; i++) {
            const groupedTask = groupedTasks[i];
            const children = getChildren(tasks, groupedTask);
            tasks = tasks.filter((t) => children.indexOf(t) === -1);
        }
    }
    return tasks;
}

function getChildren(taskList: KupPlannerTask[], task: KupPlannerTask) {
    let tasks: KupPlannerTask[] = [];
    if (task.type !== 'project') {
        tasks = taskList.filter(
            (t) => t.dependencies && t.dependencies.indexOf(task.id) !== -1
        );
    } else {
        tasks = taskList.filter((t) => t.project && t.project === task.id);
    }
    var taskChildren: KupPlannerTask[] = [];
    tasks.forEach((t) => {
        taskChildren.push(...getChildren(taskList, t));
    });
    tasks = tasks.concat(tasks, taskChildren);
    return tasks;
}

export const sortTasks = (taskA: KupPlannerTask, taskB: KupPlannerTask) => {
    const orderA = taskA.displayOrder || Number.MAX_VALUE;
    const orderB = taskB.displayOrder || Number.MAX_VALUE;
    if (orderA > orderB) {
        return 1;
    } else if (orderA < orderB) {
        return -1;
    } else {
        return 0;
    }
};

export const createArrayFromNum = (number: number) => {
    return Array.from({ length: number }, (_, index) => index);
};

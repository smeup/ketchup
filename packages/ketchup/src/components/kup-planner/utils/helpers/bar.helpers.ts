import { kupManagerInstance } from '../../../../managers/kup-manager/kup-manager';
import {
    KupPlannerTask,
    KupPlannerTimeframe,
    KupPlannerBarTask,
    KupPlannerTaskTypeInternal,
    KupPlannerBarMoveAction,
} from '../../kup-planner-declarations';

export const convertToBarTasks = (
    tasks: KupPlannerTask[],
    dates: Date[],
    columnWidth: number,
    rowHeight: number,
    taskHeight: number,
    projectHeight: number,
    timelineHeight: number,
    barCornerRadius: number,
    handleWidth: number,
    rtl: boolean,
    barProgressColor: string,
    barProgressSelectedColor: string,
    barBackgroundColor: string,
    barBackgroundSelectedColor: string,
    projectProgressColor: string,
    projectProgressSelectedColor: string,
    projectBackgroundColor: string,
    projectBackgroundSelectedColor: string,
    showSecondaryDates: boolean
) => {
    let barTasks: KupPlannerBarTask[] = tasks.map((t, i) => {
        return convertToBarTask(
            t,
            i,
            dates,
            columnWidth,
            rowHeight,
            taskHeight,
            projectHeight,
            timelineHeight,
            barCornerRadius,
            handleWidth,
            rtl,
            barProgressColor,
            barProgressSelectedColor,
            barBackgroundColor,
            barBackgroundSelectedColor,
            projectProgressColor,
            projectProgressSelectedColor,
            projectBackgroundColor,
            projectBackgroundSelectedColor,
            showSecondaryDates
        );
    });

    // set dependencies
    barTasks = barTasks.map((task) => {
        const dependencies = task.dependencies || [];
        for (let j = 0; j < dependencies.length; j++) {
            const dependence = barTasks.findIndex(
                (value) => value.id === dependencies[j]
            );
            if (dependence !== -1) barTasks[dependence].barChildren.push(task);
        }
        return task;
    });
    return barTasks;
};

const convertToBarTask = (
    task: KupPlannerTask,
    index: number,
    dates: Date[],
    columnWidth: number,
    rowHeight: number,
    taskHeight: number,
    projectHeight: number,
    timelineHeight: number,
    barCornerRadius: number,
    handleWidth: number,
    rtl: boolean,
    barProgressColor: string,
    barProgressSelectedColor: string,
    barBackgroundColor: string,
    barBackgroundSelectedColor: string,
    projectProgressColor: string,
    projectProgressSelectedColor: string,
    projectBackgroundColor: string,
    projectBackgroundSelectedColor: string,
    showSecondaryDates: boolean
): KupPlannerBarTask => {
    let barTask: KupPlannerBarTask;
    switch (task.type) {
        case 'timeline':
            barTask = convertToTimeline(
                task,
                index,
                dates,
                columnWidth,
                rowHeight,
                timelineHeight,
                barCornerRadius,
                handleWidth
            );
            break;
        case 'project':
            barTask = convertToBar(
                task,
                index,
                dates,
                columnWidth,
                rowHeight,
                projectHeight,
                barCornerRadius,
                handleWidth,
                rtl,
                projectProgressColor,
                projectProgressSelectedColor,
                projectBackgroundColor,
                projectBackgroundSelectedColor,
                showSecondaryDates
            );
            break;
        default:
            barTask = convertToBar(
                task,
                index,
                dates,
                columnWidth,
                rowHeight,
                taskHeight,
                barCornerRadius,
                handleWidth,
                rtl,
                barProgressColor,
                barProgressSelectedColor,
                barBackgroundColor,
                barBackgroundSelectedColor,
                showSecondaryDates
            );
            break;
    }
    return barTask;
};

function computeTypeAndXs(
    start: Date,
    end: Date,
    type: KupPlannerTaskTypeInternal,
    dates: Date[],
    columnWidth: number,
    handleWidth: number,
    rtl: boolean,
    startHour?: string,
    endHour?: string
) {
    let x1: number;
    let x2: number;
    if (rtl) {
        x2 = taskXCoordinateRTL(start, dates, columnWidth, startHour);
        x1 = taskXCoordinateRTL(end, dates, columnWidth, endHour);
    } else {
        x1 = taskXCoordinate(start, dates, columnWidth, startHour);
        x2 = taskXCoordinate(end, dates, columnWidth, endHour);
    }
    let typeInternal: KupPlannerTaskTypeInternal = type;
    if (typeInternal === 'task' && x2 - x1 < handleWidth * 2) {
        typeInternal = 'smalltask';
        x2 = x1 + handleWidth * 2;
    }
    return { x1, x2, typeInternal };
}

const convertToBar = (
    task: KupPlannerTask,
    index: number,
    dates: Date[],
    columnWidth: number,
    rowHeight: number,
    taskHeight: number,
    barCornerRadius: number,
    handleWidth: number,
    rtl: boolean,
    barProgressColor: string,
    barProgressSelectedColor: string,
    barBackgroundColor: string,
    barBackgroundSelectedColor: string,
    showSecondaryDates: boolean
): KupPlannerBarTask => {
    const { x1, x2, typeInternal } = computeTypeAndXs(
        task.start,
        task.end,
        task.type,
        dates,
        columnWidth,
        handleWidth,
        rtl,
        task.startHour,
        task.endHour
    );
    const { x1: x1secondary, x2: x2secondary } =
        showSecondaryDates && task.secondaryStart && task.secondaryEnd
            ? computeTypeAndXs(
                  task.secondaryStart,
                  task.secondaryEnd,
                  task.type,
                  dates,
                  columnWidth,
                  handleWidth,
                  rtl,
                  task.secondaryStartHour,
                  task.secondaryEndHour
              )
            : { x1: undefined, x2: undefined };

    const [progressWidth, progressX] = progressWithByParams(
        x1,
        x2,
        task.progress,
        rtl
    );
    const y = taskYCoordinate(index, rowHeight, taskHeight);
    const hideChildren =
        task.type === 'project' ? task.hideChildren : undefined;

    const styles = {
        backgroundColor: barBackgroundColor,
        backgroundSelectedColor: barBackgroundSelectedColor,
        progressColor: barProgressColor,
        progressSelectedColor: barProgressSelectedColor,
        ...task.styles,
    };
    return {
        ...task,
        typeInternal,
        x1,
        x2,
        x1secondary,
        x2secondary,
        y,
        index,
        progressX,
        progressWidth,
        barCornerRadius,
        handleWidth,
        hideChildren,
        height: taskHeight,
        barChildren: [],
        styles,
        ySecondary: y,
    };
};

const defaultStyles = (styles: any) => ({
    backgroundColor: styles?.backgroundColor ?? '#deadbeef',
    backgroundSelectedColor: styles?.backgroundSelectedColor ?? '#cafebabe',
    progressColor: styles?.progressColor ?? '#deadbeef',
    progressSelectedColor: styles?.progressSelectedColor ?? '#cafebabe',
});

const convertToTimeline = (
    task: KupPlannerTask,
    index: number,
    dates: Date[],
    columnWidth: number,
    rowHeight: number,
    taskHeight: number,
    barCornerRadius: number,
    handleWidth: number
): KupPlannerBarTask => {
    const y = taskYCoordinate(index, rowHeight, taskHeight);

    function convertFrameToTask(
        frame: KupPlannerTimeframe,
        j: number
    ): KupPlannerBarTask {
        const { x1, x2 } = computeTypeAndXs(
            frame.start,
            frame.end,
            'task',
            dates,
            columnWidth,
            handleWidth,
            false
        );

        const n = +frame.start;
        const baseColor = frame.backgroundColor;
        const selColor = frame.backgroundSelectedColor ?? baseColor;
        return {
            barChildren: [],
            barCornerRadius: 0,
            start: frame.start,
            end: frame.end,
            handleWidth: 0,
            height: taskHeight,
            id: `Frame-${task.id}-${j}`,
            index: n,
            name: '',
            valuesToShow: task.valuesToShow,
            progress: 0,
            progressWidth: 0,
            progressX: 0,
            styles: {
                backgroundColor: baseColor,
                backgroundSelectedColor: selColor,
                progressColor: baseColor,
                progressSelectedColor: selColor,
            },
            timeline: [],
            type: 'task',
            typeInternal: 'timeline',
            x1,
            x2,
            y,
            icon: frame.icon ?? undefined,
        };
    }

    const { x1, x2 } = computeTypeAndXs(
        task.start,
        task.end,
        task.type,
        dates,
        columnWidth,
        handleWidth,
        false
    );

    const children = task.timeline?.map(convertFrameToTask);
    return {
        ...task,
        x1,
        x2,
        y,
        index,
        progressX: 0,
        progressWidth: 0,
        barCornerRadius,
        handleWidth,
        typeInternal: task.type,
        progress: 0,
        height: taskHeight,
        hideChildren: undefined,
        barChildren: children ?? [],
        styles: defaultStyles(task.styles),
    };
};

const taskXCoordinate = (
    xDate: Date,
    dates: Date[],
    columnWidth: number,
    hourString?: string
) => {
    if (hourString) {
        const [hours, minutes, seconds] = hourString.split(':').map(Number);
        xDate.setHours(hours ?? 0);
        xDate.setMinutes(minutes ?? 0);
        xDate.setSeconds(seconds ?? 0);
    }
    const index = dates.findIndex((d) => d.getTime() >= xDate.getTime()) - 1;

    if (index < 0) {
        return 0;
    }
    const remainderMillis = xDate.getTime() - dates[index].getTime();
    const percentOfInterval =
        remainderMillis / (dates[index + 1].getTime() - dates[index].getTime());
    const x = index * columnWidth + percentOfInterval * columnWidth;
    return x;
};
const taskXCoordinateRTL = (
    xDate: Date,
    dates: Date[],
    columnWidth: number,
    hourString?: string
) => {
    let x = taskXCoordinate(xDate, dates, columnWidth, hourString);
    x += columnWidth;
    return x;
};
const taskYCoordinate = (
    index: number,
    rowHeight: number,
    taskHeight: number
) => {
    const y = index * rowHeight + (rowHeight - taskHeight) / 2;
    return y;
};

export const progressWithByParams = (
    taskX1: number,
    taskX2: number,
    progress: number,
    rtl: boolean
) => {
    const progressWidth = (taskX2 - taskX1) * progress * 0.01;
    let progressX: number;
    if (rtl) {
        progressX = taskX2 - progressWidth;
    } else {
        progressX = taskX1;
    }
    return [progressWidth, progressX];
};

export const progressByProgressWidth = (
    progressWidth: number,
    barTask: KupPlannerBarTask
) => {
    const barWidth = barTask.x2 - barTask.x1;
    const progressPercent = Math.round((progressWidth * 100) / barWidth);
    if (progressPercent >= 100) return 100;
    else if (progressPercent <= 0) return 0;
    else return progressPercent;
};

const progressByX = (x: number, task: KupPlannerBarTask) => {
    if (x >= task.x2) return 100;
    else if (x <= task.x1) return 0;
    else {
        const barWidth = task.x2 - task.x1;
        const progressPercent = Math.round(((x - task.x1) * 100) / barWidth);
        return progressPercent;
    }
};
const progressByXRTL = (x: number, task: KupPlannerBarTask) => {
    if (x >= task.x2) return 0;
    else if (x <= task.x1) return 100;
    else {
        const barWidth = task.x2 - task.x1;
        const progressPercent = Math.round(((task.x2 - x) * 100) / barWidth);
        return progressPercent;
    }
};

export const getProgressPoint = (
    progressX: number,
    taskY: number,
    taskHeight: number
) => {
    const point = [
        progressX - 5,
        taskY + taskHeight,
        progressX + 5,
        taskY + taskHeight,
        progressX,
        taskY + taskHeight - 8.66,
    ];
    return point.join(',');
};

const startByX = (x: number, xStep: number, task: KupPlannerBarTask) => {
    if (x >= task.x2 - task.handleWidth * 2) {
        x = task.x2 - task.handleWidth * 2;
    }
    const steps = Math.round((x - task.x1) / xStep);
    const additionalXValue = steps * xStep;
    const newX = task.x1 + additionalXValue;
    return newX;
};

const endByX = (x: number, xStep: number, task: KupPlannerBarTask) => {
    if (x <= task.x1 + task.handleWidth * 2) {
        x = task.x1 + task.handleWidth * 2;
    }
    const steps = Math.round((x - task.x2) / xStep);
    const additionalXValue = steps * xStep;
    const newX = task.x2 + additionalXValue;
    return newX;
};

const moveByX = (x: number, xStep: number, task: KupPlannerBarTask) => {
    const steps = Math.round((x - task.x1) / xStep);
    const additionalXValue = steps * xStep;
    const newX1 = task.x1 + additionalXValue;
    const newX2 = newX1 + task.x2 - task.x1;
    return [newX1, newX2];
};

const dateByX = (
    x: number,
    taskX: number,
    taskDate: Date,
    xStep: number,
    timeStep: number
) => {
    let newDate = new Date(
        ((x - taskX) / xStep) * timeStep + taskDate.getTime()
    );
    newDate = new Date(
        newDate.getTime() +
            (newDate.getTimezoneOffset() - taskDate.getTimezoneOffset()) * 60000
    );
    return newDate;
};

const hourStringFromDate = (date: Date, withSeconds: boolean): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const hourString = withSeconds
        ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
        : `${formattedHours}:${formattedMinutes}`;

    return hourString;
};

const hasSeconds = (hourString: string): boolean => {
    return hourString.split(':').length === 3;
};

/**
 * Method handles event in real time(mousemove) and on finish(mouseup)
 */
export const handleTaskBySVGMouseEvent = (
    svgX: number,
    action: KupPlannerBarMoveAction,
    selectedTask: KupPlannerBarTask,
    xStep: number,
    timeStep: number,
    initEventX1Delta: number,
    rtl: boolean,
    svgY: number
): { isChanged: boolean; changedTask: KupPlannerBarTask } =>
    handleTaskBySVGMouseEventForBar(
        svgX,
        action,
        selectedTask,
        xStep,
        timeStep,
        initEventX1Delta,
        rtl,
        svgY
    );

const handleTaskBySVGMouseEventForBar = (
    svgX: number,
    action: KupPlannerBarMoveAction,
    selectedTask: KupPlannerBarTask,
    xStep: number,
    timeStep: number,
    initEventX1Delta: number,
    rtl: boolean,
    svgY: number
): { isChanged: boolean; changedTask: KupPlannerBarTask } => {
    const changedTask: KupPlannerBarTask = { ...selectedTask };
    let isChanged = false;
    switch (action) {
        case 'progress':
            if (rtl) {
                changedTask.progress = progressByXRTL(svgX, selectedTask);
            } else {
                changedTask.progress = progressByX(svgX, selectedTask);
            }
            isChanged = changedTask.progress !== selectedTask.progress;
            if (isChanged) {
                const [progressWidth, progressX] = progressWithByParams(
                    changedTask.x1,
                    changedTask.x2,
                    changedTask.progress,
                    rtl
                );
                changedTask.progressWidth = progressWidth;
                changedTask.progressX = progressX;
            }
            break;
        case 'start': {
            const newX1 = startByX(svgX, xStep, selectedTask);
            changedTask.x1 = newX1;
            isChanged = changedTask.x1 !== selectedTask.x1;
            if (isChanged) {
                if (rtl) {
                    changedTask.end = dateByX(
                        newX1,
                        selectedTask.x1,
                        selectedTask.end,
                        xStep,
                        timeStep
                    );
                    changedTask.endHour &&
                        (changedTask.endHour = hourStringFromDate(
                            changedTask.end,
                            hasSeconds(changedTask.endHour)
                        ));
                } else {
                    changedTask.start = dateByX(
                        newX1,
                        selectedTask.x1,
                        selectedTask.start,
                        xStep,
                        timeStep
                    );
                    changedTask.startHour &&
                        (changedTask.startHour = hourStringFromDate(
                            changedTask.start,
                            hasSeconds(changedTask.startHour)
                        ));
                }
                const [progressWidth, progressX] = progressWithByParams(
                    changedTask.x1,
                    changedTask.x2,
                    changedTask.progress,
                    rtl
                );
                changedTask.progressWidth = progressWidth;
                changedTask.progressX = progressX;
            }
            break;
        }
        case 'end': {
            const newX2 = endByX(svgX, xStep, selectedTask);
            changedTask.x2 = newX2;
            isChanged = changedTask.x2 !== selectedTask.x2;
            if (isChanged) {
                if (rtl) {
                    changedTask.start = dateByX(
                        newX2,
                        selectedTask.x2,
                        selectedTask.start,
                        xStep,
                        timeStep
                    );
                    changedTask.startHour &&
                        (changedTask.startHour = hourStringFromDate(
                            changedTask.start,
                            hasSeconds(changedTask.startHour)
                        ));
                } else {
                    changedTask.end = dateByX(
                        newX2,
                        selectedTask.x2,
                        selectedTask.end,
                        xStep,
                        timeStep
                    );
                    changedTask.endHour &&
                        (changedTask.endHour = hourStringFromDate(
                            changedTask.end,
                            hasSeconds(changedTask.endHour)
                        ));
                }
                const [progressWidth, progressX] = progressWithByParams(
                    changedTask.x1,
                    changedTask.x2,
                    changedTask.progress,
                    rtl
                );
                changedTask.progressWidth = progressWidth;
                changedTask.progressX = progressX;
            }
            break;
        }
        case 'move': {
            const [newMoveX1, newMoveX2] = moveByX(
                svgX - initEventX1Delta,
                xStep,
                selectedTask
            );
            isChanged = newMoveX1 !== selectedTask.x1;
            if (isChanged) {
                changedTask.start = dateByX(
                    newMoveX1,
                    selectedTask.x1,
                    selectedTask.start,
                    xStep,
                    timeStep
                );
                changedTask.end = dateByX(
                    newMoveX2,
                    selectedTask.x2,
                    selectedTask.end,
                    xStep,
                    timeStep
                );
                changedTask.startHour &&
                    (changedTask.startHour = hourStringFromDate(
                        changedTask.start,
                        hasSeconds(changedTask.startHour)
                    ));
                changedTask.endHour &&
                    (changedTask.endHour = hourStringFromDate(
                        changedTask.end,
                        hasSeconds(changedTask.endHour)
                    ));
                changedTask.x1 = newMoveX1;
                changedTask.x2 = newMoveX2;
                const [progressWidth, progressX] = progressWithByParams(
                    changedTask.x1,
                    changedTask.x2,
                    changedTask.progress,
                    rtl
                );
                changedTask.progressWidth = progressWidth;
                changedTask.progressX = progressX;
                if (changedTask.type === 'task') {
                    changedTask.y = svgY;
                }
            }
            break;
        }
    }
    return { isChanged, changedTask };
};

/**
 * Calculate current date indicator
 * @param start
 * @param end
 * @param dates
 * @param columnWidth
 * @returns
 */
export function calculateCurrentDateCalculator(
    dates: Date[],
    columnWidth: number
) {
    return taskXCoordinate(new Date(), dates, columnWidth);
}

/**
 * Calculate the coordinate of projections
 * @param start
 * @param end
 * @param dates
 * @param columnWidth
 * @returns
 */
export function calculateProjection(
    start: Date,
    end: Date,
    dates: Date[],
    columnWidth: number
) {
    return {
        x0: taskXCoordinate(start, dates, columnWidth),
        xf: taskXCoordinate(end, dates, columnWidth),
    };
}

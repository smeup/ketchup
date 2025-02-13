import {
    KupPlannerDetail,
    KupPlannerGanttTask,
    KupPlannerGanttTaskN,
    KupPlannerItemDetail,
    KupPlannerPhase,
    KupPlannerPhaseGantt,
    KupPlannerScheduleItem,
    KupPlannerTask,
    KupPlannerTimeframe,
    KupPlannerViewMode,
} from '../kup-planner-declarations';
import { KupDates } from '../../../managers/kup-dates/kup-dates';

type DateHelperScales =
    | 'year'
    | 'month'
    | 'day'
    | 'hour'
    | 'minute'
    | 'second'
    | 'millisecond';

export const columnWidthForTimeUnit = (
    timeUnit: KupPlannerViewMode
): number => {
    switch (timeUnit) {
        case 'year':
            return 60 * 2;
        default:
            return 60;
    }
};

export const getProjectById = (
    id: string,
    items: KupPlannerGanttTaskN[] | KupPlannerItemDetail[]
): KupPlannerGanttTaskN | KupPlannerItemDetail | undefined => {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return undefined;
};

export const getPhaseById = (
    id: string,
    items: KupPlannerGanttTaskN[] | KupPlannerItemDetail[]
): KupPlannerGanttTaskN | undefined => {
    for (let i = 0; i < items.length; i++) {
        if (isDetail(items[i])) {
            continue;
        }
        const item = items[i] as KupPlannerGanttTaskN;
        if (!item.phases) {
            continue;
        }
        for (let j = 0; j < item.phases.length; j++)
            if (item.phases[j].id === id) {
                return item.phases[j];
            }
    }
    return undefined;
};

export const isDetail = (
    row: KupPlannerGanttTaskN | KupPlannerItemDetail
): row is KupPlannerItemDetail => {
    return (
        row &&
        (row as KupPlannerItemDetail).schedule &&
        (row as KupPlannerItemDetail).schedule.length !== 0
    );
};

export const mergeTaskIntoProjects = (
    projects: KupPlannerGanttTask[],
    { id, start, end, startHour, endHour }: KupPlannerTask
): KupPlannerGanttTask[] =>
    projects.map((project) =>
        project.id === id
            ? withNewDates(project, start, end, startHour, endHour)
            : project
    );

export const mergeTaskIntoPhases = (
    phases: KupPlannerPhaseGantt[] | undefined,
    { id, start, end, startHour, endHour }: KupPlannerTask
): KupPlannerPhaseGantt[] | undefined => {
    if (phases) {
        return phases.map((phase) =>
            phase.id === id
                ? withNewDates(phase, start, end, startHour, endHour)
                : phase
        );
    }
    return undefined;
};

export const convertProjectToTasks = (
    item: KupPlannerGanttTaskN | KupPlannerItemDetail,
    mainGanttStartDate?: string,
    mainGanttEndDate?: string
): KupPlannerTask[] => {
    if (!isDetail(item)) {
        const kupDates: KupDates = new KupDates();
        const row: KupPlannerGanttTaskN = item as KupPlannerGanttTaskN;
        const { start, end } = kupDates.validDates(
            row.startDate,
            row.endDate,
            row.name
        );
        const { start: start2, end: end2 } = kupDates.validDates(
            row.secondaryStartDate,
            row.secondaryEndDate,
            row.name
        );
        const mainTask: KupPlannerTask = {
            /**
             * La libreria lo intende come le ore 00:00, che non è coerente
             *  con come vorremmo ragionare noi. Es.: se un task finisce il 9 luglio,
             *  la libreria colora le celle fino all'8 luglio compreso, ma non il 9;
             *  noi invece vorremmo colorare anche il 9.
             * Possibili workaround: gestirsi ovunque il giorno di differenza (😱);
             *  impostare le conversioni dell'intervallo di fine come orario 23:59.
             * In ogni caso va a cozzare con il calcolo delle durate
             *  (es.: dall'1 al 5 luglio => risulta 4 giorni ma dovrebbe
             *  essere 5 perché includiamo gli estremi; se sommiamo 23:59 ore
             *  risulta ancora 4 per la libreria, e 4.99.. se calcolato a mano, e
             *  ci vuole un Math.round come minimo)
             */
            start: start,
            end: end,
            id: row.id,
            name: row.name,
            type: row.type,
            valuesToShow: row.valuesToShow,
            secondaryStart: start2,
            secondaryEnd: end2,
            progress: 100,
            /** Non disabilita clic nè select, ma solo il resize/move */
            isDisabled: false,
            hideChildren: false,
            icon: row.icon,
            startHour: item.startHour,
            endHour: item.endHour,
            secondaryStartHour: item.secondaryStartHour,
            secondaryEndHour: item.secondaryEndHour,
        };
        const children1 = (row.phases ?? []).map(convertPhaseToTask);
        return [mainTask, ...children1];
    } else {
        const row: KupPlannerItemDetail = item as KupPlannerItemDetail;
        return [
            {
                ...convertDetailToTimeline(
                    row,
                    mainGanttStartDate,
                    mainGanttEndDate
                ),
            },
        ];
    }
};

export const convertPhaseToTask = (item: KupPlannerPhase): KupPlannerTask => {
    const mapPhase = ({
        startDate: phaseStart,
        endDate: phaseEnd,
        secondaryStartDate,
        secondaryEndDate,
        name: phaseName,
        id: phaseId,
        color,
        selectedColor,
        dependencies,
        icon,
        startHour,
        endHour,
        secondaryStartHour,
        secondaryEndHour,
    }: KupPlannerPhase): KupPlannerTask => {
        const kupDates: KupDates = new KupDates();
        const { start, end } = kupDates.validDates(
            phaseStart,
            phaseEnd,
            phaseName
        );
        const { start: phaseStart2, end: phaseEnd2 } = kupDates.validDates(
            secondaryStartDate,
            secondaryEndDate,
            phaseName
        );
        return {
            start,
            end,
            secondaryStart: phaseStart2,
            secondaryEnd: phaseEnd2,
            name: phaseName,
            valuesToShow: item.valuesToShow,
            id: phaseId,
            type: 'task',
            progress: 100,
            dependencies,
            /**
             * Colori custom per specifico task - ci serve per distinguere le fasi
             */
            styles: color
                ? {
                      backgroundColor: color,
                      progressColor: color,
                      backgroundSelectedColor: selectedColor,
                      progressSelectedColor: selectedColor,
                  }
                : {},
            icon,
            startHour,
            endHour,
            secondaryStartHour,
            secondaryEndHour,
        };
    };

    return mapPhase(item);
};

const convertDetailToTimeline = (
    item: KupPlannerItemDetail,
    mainGanttStartDate?: string,
    mainGanttEndDate?: string
): KupPlannerTask => {
    const kupDates: KupDates = new KupDates();
    const { id, name, schedule } = item;

    const getDatesForTask = (
        item: KupPlannerItemDetail
    ): { start: Date; end: Date } => {
        let start = mainGanttStartDate ?? '';
        let end = mainGanttEndDate ?? '';

        for (let i = 0; i < item.schedule.length; i++) {
            const lstart = item.schedule[i].startDate;
            const lend = item.schedule[i].endDate;
            if (!start || lstart.localeCompare(start) < 0) {
                start = lstart;
            }
            if (!end || lend.localeCompare(end) > 0) {
                end = lend;
            }
        }

        return kupDates.validDates(start, end, 'detail item');
    };

    const { start, end } = getDatesForTask(item);

    const convertToFrame = (x: KupPlannerScheduleItem): KupPlannerTimeframe => {
        const { startDate, endDate, color, selectedColor, icon } = x;
        const { start, end } = kupDates.validDates(
            startDate,
            endDate,
            'time frame'
        );
        return {
            start,
            end,
            backgroundColor: color ?? '0xffffff',
            backgroundSelectedColor: selectedColor ?? color,
            icon,
        };
    };

    const defaultColor = '#595959';
    return {
        id,
        type: 'timeline',
        timeline: schedule.map(convertToFrame),
        name,
        valuesToShow: item.valuesToShow,
        start: start,
        end: end,
        progress: 100,
        styles: {
            backgroundColor: defaultColor,
            progressColor: defaultColor,
            backgroundSelectedColor: defaultColor,
            progressSelectedColor: defaultColor,
        },
    };
};

/** Return a shallow copy, with the dates updated */
const withNewDates = <P extends KupPlannerPhaseGantt | KupPlannerGanttTask>(
    p: P,
    start: Date,
    end: Date,
    startHour: string,
    endHour: string
): P => {
    const kupDates: KupDates = new KupDates();
    const startDate = kupDates.formatToIsoDate(start);
    const endDate = kupDates.formatToIsoDate(end);
    const extra = { startDate, endDate, startHour, endHour };
    return { ...p, ...extra };
};

/**
 * Calculate date range valid for each Gantt
 * @param mainGanttItems
 * @param timeUnit
 * @param mainGanttDoubleView
 * @param secondaryGanttItems
 * @param preStepsCount
 * @returns
 */
export const calculateDisplayedDateRange = (
    mainGanttItems: KupPlannerGanttTask[],
    timeUnit: KupPlannerViewMode,
    mainGanttDoubleView: boolean,
    secondaryGanttItems?: KupPlannerItemDetail[],
    preStepsCount?: number
) => {
    const dates: Date[] = ganttDateRangeFromGanttTask(
        mainGanttItems as KupPlannerGanttTask[],
        timeUnit,
        preStepsCount ?? 1,
        mainGanttDoubleView
    );
    if (secondaryGanttItems) {
        const dates2: Date[] = ganttDateRangeFromDetail(
            secondaryGanttItems,
            timeUnit,
            preStepsCount ?? 1,
            mainGanttDoubleView
        );
        if (dates2[0] < dates[0]) {
            dates[0] = dates2[0];
        }
        if (dates2[1] > dates[1]) {
            dates[1] = dates2[1];
        }
    }
    return {
        displayedStartDate: dates[0],
        displayedEndDate: dates[1],
    };
};

export const ganttDateRangeFromGanttTask = (
    tasks: KupPlannerGanttTask[],
    viewMode: KupPlannerViewMode,
    preStepsCount: number,
    showSecondaryDates: boolean
) => {
    const dates: {
        start: Date;
        end: Date;
        secondaryStart?: Date;
        secondaryEnd?: Date;
        startHour?: string;
        endHour?: string;
        secondaryStartHour?: string;
        secondaryEndHour?: string;
    }[] = [];
    const kupDates: KupDates = new KupDates();
    tasks.forEach((item) => {
        dates.push({
            start: kupDates.parseToDayStart(item.startDate),
            end: kupDates.parseToDayEnd(item.endDate),
            secondaryStart: kupDates.parseToDayStart(item.secondaryStartDate),
            secondaryEnd: kupDates.parseToDayEnd(item.secondaryEndDate),
            startHour: item.startHour,
            endHour: item.endHour,
            secondaryStartHour: item.secondaryStartHour,
            secondaryEndHour: item.secondaryEndHour,
        });
        item.phases?.forEach((phase) => {
            dates.push({
                start: kupDates.parseToDayStart(phase.startDate),
                end: kupDates.parseToDayEnd(phase.endDate),
                secondaryStart: kupDates.parseToDayStart(
                    phase.secondaryStartDate
                ),
                secondaryEnd: kupDates.parseToDayEnd(phase.secondaryEndDate),
                startHour: item.startHour,
                endHour: item.endHour,
                secondaryStartHour: item.secondaryStartHour,
                secondaryEndHour: item.secondaryEndHour,
            });
        });
    });
    return ganttDateRangeGeneric(
        dates,
        viewMode,
        preStepsCount,
        showSecondaryDates,
        true
    );
};

export const ganttDateRangeGeneric = (
    dates: {
        start: Date;
        end: Date;
        secondaryStart?: Date;
        secondaryEnd?: Date;
        startHour?: string;
        endHour?: string;
        secondaryStartHour?: string;
        secondaryEndHour?: string;
    }[],
    viewMode: KupPlannerViewMode,
    preStepsCount: number,
    showSecondaryDates: boolean,
    realDates?: boolean
) => {
    let newStartDate: Date = dates.length > 0 ? dates[0].start : new Date();
    let newEndDate: Date = dates.length > 0 ? dates[0].end : new Date();
    for (const d of dates) {
        if (d.start < newStartDate) {
            newStartDate = d.start;
        }
        if (d.end > newEndDate) {
            newEndDate = d.end;
        }
        if (showSecondaryDates) {
            if (d.secondaryStart && d.secondaryStart < newStartDate) {
                newStartDate = d.secondaryStart;
            }
            if (d.secondaryEnd && d.secondaryEnd > newEndDate) {
                newEndDate = d.secondaryEnd;
            }
        }
    }
    if (realDates) {
        return [newStartDate, newEndDate];
    }
    switch (viewMode) {
        case 'year':
            newStartDate = addToDate(newStartDate, -1, 'year');
            newStartDate = startOfDate(newStartDate, 'year');
            newEndDate = addToDate(newEndDate, 1, 'year');
            newEndDate = startOfDate(newEndDate, 'year');
            break;
        case 'month':
            newStartDate = addToDate(newStartDate, -1 * preStepsCount, 'month');
            newStartDate = startOfDate(newStartDate, 'month');
            newEndDate = addToDate(newEndDate, 1, 'month');
            newEndDate = startOfDate(newEndDate, 'month');
            break;
        case 'week':
            newStartDate = startOfDate(newStartDate, 'day');
            newStartDate = addToDate(
                getMonday(newStartDate),
                -7 * preStepsCount,
                'day'
            );
            newEndDate = startOfDate(newEndDate, 'day');
            newEndDate = addToDate(newEndDate, 1.5, 'month');
            break;
        case 'day':
            newStartDate = startOfDate(newStartDate, 'day');
            newStartDate = addToDate(newStartDate, -1 * preStepsCount, 'day');
            newEndDate = startOfDate(newEndDate, 'day');
            newEndDate = addToDate(newEndDate, 19, 'day');
            break;
        case 'hour':
            newStartDate = startOfDate(newStartDate, 'hour');
            newStartDate = addToDate(newStartDate, -1 * preStepsCount, 'hour');
            newEndDate = startOfDate(newEndDate, 'day');
            newEndDate = addToDate(newEndDate, 1, 'day');
            break;
        /*
        case ViewMode.QuarterDay:
          newStartDate = startOfDate(newStartDate, "day");
          newStartDate = addToDate(newStartDate, -1 * preStepsCount, "day");
          newEndDate = startOfDate(newEndDate, "day");
          newEndDate = addToDate(newEndDate, 66, "hour"); // 24(1 day)*3 - 6
          break;
        case ViewMode.HalfDay:
          newStartDate = startOfDate(newStartDate, "day");
          newStartDate = addToDate(newStartDate, -1 * preStepsCount, "day");
          newEndDate = startOfDate(newEndDate, "day");
          newEndDate = addToDate(newEndDate, 108, "hour"); // 24(1 day)*5 - 12
          break;
        case ViewMode.Hour:
          newStartDate = startOfDate(newStartDate, "hour");
          newStartDate = addToDate(newStartDate, -1 * preStepsCount, "hour");
          newEndDate = startOfDate(newEndDate, "day");
          newEndDate = addToDate(newEndDate, 1, "day");
          break;
          */
    }
    return [newStartDate, newEndDate];
};

export const ganttDateRangeFromDetail = (
    details: KupPlannerItemDetail[],
    viewMode: KupPlannerViewMode,
    preStepsCount: number,
    showSecondaryDates: boolean
) => {
    const dates: {
        start: Date;
        end: Date;
        secondaryStart?: Date;
        secondaryEnd?: Date;
        startHour?: string;
        endHour?: string;
        secondaryStartHour?: string;
        secondaryEndHour?: string;
    }[] = [];
    const kupDates: KupDates = new KupDates();
    details.forEach((item) => {
        const scheduleItems = item.schedule;
        if (scheduleItems) {
            scheduleItems.forEach((item) => {
                dates.push({
                    start: kupDates.parseToDayStart(item.startDate),
                    end: kupDates.parseToDayEnd(item.endDate),
                    secondaryStart: undefined,
                    secondaryEnd: undefined,
                });
            });
        }
    });
    return ganttDateRangeGeneric(
        dates,
        viewMode,
        preStepsCount,
        showSecondaryDates,
        true
    );
};

export const addToDate = (
    date: Date,
    quantity: number,
    scale: DateHelperScales
) => {
    const newDate = new Date(
        date.getFullYear() + (scale === 'year' ? quantity : 0),
        date.getMonth() + (scale === 'month' ? quantity : 0),
        date.getDate() + (scale === 'day' ? quantity : 0),
        date.getHours() + (scale === 'hour' ? quantity : 0),
        date.getMinutes() + (scale === 'minute' ? quantity : 0),
        date.getSeconds() + (scale === 'second' ? quantity : 0),
        date.getMilliseconds() + (scale === 'millisecond' ? quantity : 0)
    );
    return newDate;
};

export const startOfDate = (date: Date, scale: DateHelperScales) => {
    const scores = [
        'millisecond',
        'second',
        'minute',
        'hour',
        'day',
        'month',
        'year',
    ];

    const shouldReset = (_scale: DateHelperScales) => {
        const maxScore = scores.indexOf(scale);
        return scores.indexOf(_scale) <= maxScore;
    };
    const newDate = new Date(
        date.getFullYear(),
        shouldReset('year') ? 0 : date.getMonth(),
        shouldReset('month') ? 1 : date.getDate(),
        shouldReset('day') ? 0 : date.getHours(),
        shouldReset('hour') ? 0 : date.getMinutes(),
        shouldReset('minute') ? 0 : date.getSeconds(),
        shouldReset('second') ? 0 : date.getMilliseconds()
    );
    return newDate;
};

/**
 * Returns monday of current week
 * @param date date for modify
 */
const getMonday = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
};

export const ganttDateRangeFromTask = (
    tasks: KupPlannerTask[],
    viewMode: KupPlannerViewMode,
    preStepsCount: number,
    showSecondaryDates: boolean,
    mainGanttStartDate: Date,
    mainGanttEndDate: Date
) => {
    const dates: {
        start: Date;
        end: Date;
        secondaryStart?: Date;
        secondaryEnd?: Date;
        startHour?: string;
        endHour?: string;
        secondaryStartHour?: string;
        secondaryEndHour?: string;
    }[] = [];

    tasks.forEach((item) => {
        dates.push({
            start: item.start,
            end: item.end,
            secondaryStart: item.secondaryStart,
            secondaryEnd: item.secondaryEnd,
            startHour: item.startHour,
            endHour: item.endHour,
            secondaryStartHour: item.secondaryStartHour,
            secondaryEndHour: item.secondaryEndHour,
        });
    });
    if (mainGanttStartDate && mainGanttEndDate) {
        dates.push({
            start: mainGanttStartDate,
            end: mainGanttEndDate,
            secondaryStart: undefined,
            secondaryEnd: undefined,
        });
    }
    return ganttDateRangeGeneric(
        dates,
        viewMode,
        preStepsCount,
        showSecondaryDates
    );
};

export const seedDates = (
    startDate: Date,
    endDate: Date,
    viewMode: KupPlannerViewMode
) => {
    let currentDate: Date = new Date(startDate);
    const dates: Date[] = [currentDate];
    while (currentDate < endDate) {
        switch (viewMode) {
            case 'year':
                currentDate = addToDate(currentDate, 1, 'year');
                break;
            case 'month':
                currentDate = addToDate(currentDate, 1, 'month');
                break;
            case 'week':
                currentDate = addToDate(currentDate, 7, 'day');
                break;
            case 'day':
                currentDate = addToDate(currentDate, 1, 'day');
                break;
            case 'hour':
                currentDate = addToDate(currentDate, 1, 'hour');
                break;
            /*
            case ViewMode.HalfDay:
              currentDate = addToDate(currentDate, 12, "hour");
              break;
            case ViewMode.QuarterDay:
              currentDate = addToDate(currentDate, 6, "hour");
              break;
            case ViewMode.Hour:
              currentDate = addToDate(currentDate, 1, "hour");
              break;
              */
        }
        dates.push(currentDate);
    }
    return dates;
};

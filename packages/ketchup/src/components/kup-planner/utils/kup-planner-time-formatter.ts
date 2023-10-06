import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import DateTimeFormat = Intl.DateTimeFormat;
const intlDTCache: { [key: string]: Intl.DateTimeFormat } = {};
const cachedFormats: { [key: string]: Intl.DateTimeFormat } = {};

const getOrBuildCachedFormat = (locale: string, options: any) => {
    const key = locale + "#" + JSON.stringify(options);
    const fmt = cachedFormats[key] ?? new Intl.DateTimeFormat(locale, options);
    return (cachedFormats[key] = fmt);
};

const format = (date: Date, locale: string, options: object) => {
    try {
        const format1 = getOrBuildCachedFormat(locale, options).format(date);
        return format1;
    } catch (e) {
        console.error("time-formatters.ts format", date, locale, options);
        console.error(e);
        return "FORMAT-ERR";
    }
};

/** E.g. Monday 3 december 2023 => M 3, lunedì 3 dicembre 2023 => L 3 */
const dayFormatter = (date: Date, locale: string) => {
    const dayName = format(date, locale, { weekday: "narrow" })?.toUpperCase();
    const dayNumber = format(date, locale, { day: "numeric" });
    return `${dayName} ${dayNumber}`;
};

const monthFormatter = (date: Date, locale: string) => {
    return format(date, locale, { month: "short" });
};

export const ganttDateTimeFormatters = {
    day: dayFormatter,
    month: monthFormatter,
};

export const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
};

export const defaultDateTimeFormatters = {
    year: (date: Date, _locale: string) => `${date.getFullYear()}`,
    month: (date: Date, locale: string) => `${getLocaleMonth(date, locale)}`,
    monthAndYear: (date: Date, locale: string) =>
        `${getLocaleMonth(date, locale)}, ${date.getFullYear()}`,
    week: (date: Date, _locale: string) => `W${getWeekNumberISO8601(date)}`,
    day: (date: Date, locale: string) =>
        `${getLocalDayOfWeek(date, locale, "short")}, ${date.getDate().toString()}`,
    hour: (date: Date, locale: string) =>
        `${getCachedDateTimeFormat(locale, { hour: "numeric" }).format(date)}`,
    dayAndMonth: (date: Date, locale: string) =>
        `${getLocalDayOfWeek(
            date,
            locale,
            "short"
        )}, ${date.getDate()} ${getLocaleMonth(date, locale)}`,
};

export const getLocaleMonth = (date: Date, locale: string) => {
    let bottomValue = getCachedDateTimeFormat(locale, {
        month: "long",
    }).format(date);
    bottomValue = bottomValue.replace(
        bottomValue[0],
        bottomValue[0].toLocaleUpperCase()
    );
    return bottomValue;
};

export const getLocalDayOfWeek = (
    date: Date,
    locale: string,
    format?: "long" | "short" | "narrow" | undefined
) => {
    let bottomValue = getCachedDateTimeFormat(locale, {
        weekday: format,
    }).format(date);
    bottomValue = bottomValue.replace(
        bottomValue[0],
        bottomValue[0].toLocaleUpperCase()
    );
    return bottomValue;
};

export const getCachedDateTimeFormat = (
    locString: string | string[],
    opts: DateTimeFormatOptions = {}
): DateTimeFormat => {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
    }
    return dtf;
};

export const getWeekNumberISO8601 = (date: Date) => {
    const tmpDate = new Date(date.valueOf());
    const dayNumber = (tmpDate.getDay() + 6) % 7;
    tmpDate.setDate(tmpDate.getDate() - dayNumber + 3);
    const firstThursday = tmpDate.valueOf();
    tmpDate.setMonth(0, 1);
    if (tmpDate.getDay() !== 4) {
        tmpDate.setMonth(0, 1 + ((4 - tmpDate.getDay() + 7) % 7));
    }
    const weekNumber = (
        1 + Math.ceil((firstThursday - tmpDate.valueOf()) / 604800000)
    ).toString();

    if (weekNumber.length === 1) {
        return `0${weekNumber}`;
    } else {
        return weekNumber;
    }
};

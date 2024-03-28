import { KupDataCell } from '../../components';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { getCellValueForDisplay } from '../../utils/cell-utils';
import { KupPlannerDatesSanitized } from './kup-planner-declarations';

const kupManager = kupManagerInstance();

export function sanitizeAllDates(
    startDateCell: KupDataCell,
    endDateCell: KupDataCell,
    secStartDateCell?: KupDataCell,
    secEndDateCell?: KupDataCell,
    startHourCell?: KupDataCell,
    endHourCell?: KupDataCell,
    secStartHourCell?: KupDataCell,
    secEndHourCell?: KupDataCell
): KupPlannerDatesSanitized {
    const sanitizedDateValues = sanitizeDates(startDateCell, endDateCell);
    let sanitizedSecDateValues = [];
    if (secStartDateCell && secEndDateCell) {
        if (isAtLeastOneDateValid(secStartDateCell, secEndDateCell)) {
            sanitizedSecDateValues = sanitizeDates(
                secStartDateCell,
                secEndDateCell
            );
        } else {
            sanitizedSecDateValues = [...sanitizedDateValues];
        }
    }
    let sanitizedHourValues = [];
    if (startHourCell && endHourCell) {
        if (isAtLeastOneHourValid(startHourCell, endHourCell)) {
            sanitizedHourValues = sanitizeHours(
                startHourCell,
                endHourCell
            );
        } else {
            sanitizedSecDateValues = [...sanitizedDateValues];
        }
    }
    let sanitizedSecHourValues = [];
    if (secStartHourCell && secEndHourCell) {
        if (isAtLeastOneHourValid(secStartHourCell, secEndHourCell)) {
            sanitizedSecHourValues = sanitizeHours(
                secStartHourCell,
                secEndHourCell
            );
        } else {
            sanitizedSecDateValues = [...sanitizedDateValues];
        }
    }
    return {
        dateValues: sanitizedDateValues,
        secDateValues: sanitizedSecDateValues,
        hourValues: sanitizedHourValues,
        secHourValues: sanitizedSecHourValues
    };
}

function sanitizeDates(
    startDateCell: KupDataCell,
    endDateCell: KupDataCell
): string[] {
    let returnValues = [startDateCell.value, endDateCell.value];
    if (isDateValid(startDateCell) && isDateValid(endDateCell)) {
        return returnValues;
    } else if (isDateValid(startDateCell)) {
        return [startDateCell.value, startDateCell.value];
    } else if (isDateValid(endDateCell)) {
        return [endDateCell.value, endDateCell.value];
    } else {
        return returnValues;
    }
}

function sanitizeHours(
    startHourCell: KupDataCell,
    endHourCell: KupDataCell
): string[] {
    let returnValues = [startHourCell.value, endHourCell.value];
    if (isHourValid(startHourCell) && isHourValid(endHourCell)) {
        return returnValues;
    } else if (isHourValid(startHourCell)) {
        return [startHourCell.value, startHourCell.value];
    } else if (isHourValid(endHourCell)) {
        return [endHourCell.value, endHourCell.value];
    } else {
        return returnValues;
    }
}

function isDateValid(dateCell: KupDataCell) {
    return (
        kupManager.objects.isDate(dateCell.obj) &&
        kupManager.dates.isValid(dateCell.value, KupDatesFormats.ISO_DATE)
    );
}

function isHourValid(dateCell: KupDataCell) {
    return (
        kupManager.objects.isTime(dateCell.obj) || kupManager.objects.isTimeWithSeconds(dateCell.obj)
    );
}

export function isAtLeastOneDateValid(
    startDateCell: KupDataCell,
    endDateCell: KupDataCell
): boolean {
    return isDateValid(startDateCell) || isDateValid(endDateCell);
}

export function isAtLeastOneHourValid(
    startHourCell: KupDataCell,
    endHourCell: KupDataCell
): boolean {
    return isHourValid(startHourCell) || isHourValid(endHourCell);
}

export function getValuesToShow(
    row: KupDataRow,
    idCol: string,
    nameCol: string,
    dataColumns: KupDataColumn[],
    columns?: string[],
    customToValuesFunction?: () => string[]
): string[] {
    let toValuesFunction = () =>
        columns.map((col: string) => {
            return getCellValueForDisplay(
                dataColumns.find((kCol) => kCol.name == col),
                row.cells[col]
            );
        });
    if (customToValuesFunction) {
        toValuesFunction = customToValuesFunction;
    }
    const valuesToShow =
        columns?.length >= 2
            ? toValuesFunction()
            : [row.cells[idCol].value, row.cells[nameCol].value];
    return valuesToShow;
}

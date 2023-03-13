import { KupDataCell } from '../../components';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupPlannerDatesSanitized } from './kup-planner-declarations';

const kupManager = kupManagerInstance();

export function normalizeAllDates(
    startDateCell: KupDataCell,
    endDateCell: KupDataCell,
    secStartDateCell: KupDataCell,
    secEndDateCell: KupDataCell
): KupPlannerDatesSanitized {
    const sanitizedDateValues = normalizeDates(startDateCell, endDateCell);
    let sanitizedSecDateValues = [];
    if (isAtLeastOneDateValid(secStartDateCell, secEndDateCell)) {
        sanitizedSecDateValues = normalizeDates(
            secStartDateCell,
            secEndDateCell
        );
    } else {
        sanitizedSecDateValues = [...sanitizedDateValues];
    }
    return {
        dateValues: sanitizedDateValues,
        secDateValues: sanitizedSecDateValues,
    };
}

function normalizeDates(
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

function isDateValid(dateCell: KupDataCell) {
    return (
        kupManager.objects.isDate(dateCell.obj) &&
        kupManager.dates.isValid(dateCell.value, KupDatesFormats.ISO_DATE)
    );
}

export function isAtLeastOneDateValid(
    startDateCell: KupDataCell,
    endDateCell: KupDataCell
): boolean {
    return isDateValid(startDateCell) || isDateValid(endDateCell);
}

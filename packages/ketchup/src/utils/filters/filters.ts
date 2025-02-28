import { KupTagNames } from '../../types/GenericTypes';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FILTER_ANALYZER, ValueDisplayedValue } from './filters-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Filtering algorithms.
 * @module Filters
 * @todo Should contain EVERY filtering method in common between filtering types (i.e.: global filters and column menu filters).
 */
export class Filters {
    /**
     * Function used to check whether the component is a KupTree or KupDataTable.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @returns {comp is KupTree} Returns true when the component is KupTree.
     */
    static isTree(comp: KupDataTable | KupTree): comp is KupTree {
        return (comp as KupTree).rootElement.tagName === KupTagNames.TREE;
    }

    isObjNumeric(obj: KupObj): boolean {
        if (dom.ketchup.objects.isDate(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isTime(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isTimestamp(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isNumber(obj)) {
            return true;
        }
        return false;
    }

    normalizeValue(value: string, smeupObj: any): string {
        let newValue = value != null ? value.trim() : value;
        if (newValue == null || newValue == '' || smeupObj == null) {
            return newValue;
        }
        if (dom.ketchup.objects.isDate(smeupObj)) {
            if (dom.ketchup.dates.isIsoDate(value)) {
                return newValue;
            }
            if (dom.ketchup.dates.isValidFormattedStringDate(value)) {
                return dom.ketchup.dates.format(
                    dom.ketchup.dates.normalize(value),
                    KupDatesFormats.ISO_DATE
                );
            }
        } else if (dom.ketchup.objects.isTime(smeupObj)) {
            let manageSeconds = dom.ketchup.objects.isTimeWithSeconds(smeupObj);
            if (
                dom.ketchup.dates.isValidFormattedStringTime(
                    value,
                    manageSeconds
                )
            ) {
                return dom.ketchup.dates.timeStringToFormattedString(
                    value,
                    manageSeconds,
                    manageSeconds
                        ? KupDatesFormats.ISO_TIME
                        : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
                );
            }
        } else if (dom.ketchup.objects.isTimestamp(smeupObj)) {
            if (dom.ketchup.dates.isIsoDate(value)) {
                return newValue;
            }
            if (dom.ketchup.dates.isValidFormattedStringTime(value, true)) {
                return dom.ketchup.dates.formattedStringToTimestampString(
                    value
                );
            }
        } else if (dom.ketchup.objects.isNumber(smeupObj)) {
            if (
                dom.ketchup.math.isStringNumber(
                    value,
                    smeupObj ? smeupObj.p : ''
                )
            ) {
                return dom.ketchup.math.formattedStringToNumberString(
                    value,
                    smeupObj ? smeupObj.p : ''
                );
            }
        }
        return newValue;
    }

    /**
     * Given a filter value, check if is a negative filter
     * @param filterValue the filter value to use for check
     */
    filterIsNegative(filterValue: string) {
        const analyzedFilter = filterValue.match(FILTER_ANALYZER);
        const filterIsNegative: boolean = analyzedFilter
            ? analyzedFilter[1]?.indexOf('!') >= 0
            : false;
        return filterIsNegative;
    }

    /**
     * Determines if a value matches a given filter.
     *
     * Filter expressions follow the format `[operator]'filter'` with these rules:
     * - filter = includes match
     * - 'filter' = exact phrase match
     * - '' = matches empty value
     * - 'filter%' = starts with "filter"
     * - '%filter' = ends with "filter"
     * - '%filter%' = contains "filter"
     *
     * Supports negation operation with "!" (e.g., !'' = non-empty value)
     * Supports comparison operators: >, >=, <, <=
     *
     *
     *
     * @param value - Value to check against the filter
     * @param filterValue - Filter to apply
     * @returns Whether the value matches the filter
     */
    isFilterCompliantForValue(
        value: string,
        filterValue: string,
        isGlobalFilter?: boolean
    ): boolean {
        if (value == null || filterValue == null) {
            return false;
        }
        // Split multiple filters and trim each one
        const filters = filterValue.split(';').map((f) => f.trim());
        // All filters must match (AND condition)
        return filters.every((filter) => {
            // if filter is '' it should be excluded since it is always included in every possible string and thus always leading to a match!
            const valueIncludesFilter = isGlobalFilter
                ? value.toLowerCase().includes(filter.toLowerCase()) &&
                  filter !== ''
                : value.toLowerCase() == filter.toLowerCase();
            const valueMatchesSpecialFilter = this.matchSpecialFilter(
                value.toLowerCase(),
                filter.toLowerCase().match(FILTER_ANALYZER)
            );

            return valueIncludesFilter || valueMatchesSpecialFilter;
        });
    }

    /**
     * Matches a value against a special filter parsed from a regex.
     *
     * Filter syntax: `[operator]{0,1}'[wildcard]{0,1}[filterText][wildcard]{0,1}'`
     *
     * Operators:
     * - None: exact match
     * - `!`: negation
     * - `>`, `>=`, `<`, `<=`: lexicographic comparison
     *
     * Wildcards:
     * - `%` at start: matches ending
     * - `%` at end: matches starting
     * - `%` at both: contains
     *
     * Examples:
     * - `text`: includes match
     * - `'text'`: exact match
     * - `''`: matches empty
     * - `!''`: matches non-empty
     * - `'text%'`: starts with "text"
     * - `'%text'`: ends with "text"
     * - `'%text%'`: contains "text"
     * - `>'10'`: lexicographically greater than "10"
     *
     * @param value - Value to check
     * @param parsedFilter - Regex match result from FILTER_ANALIZER
     * @returns Whether value matches the filter
     */
    matchSpecialFilter(
        value: string,
        parsedFilter: RegExpMatchArray | null
    ): boolean {
        if (parsedFilter == null) return false;

        const operator = parsedFilter[1] || '';
        const hasStartWildcard = !!parsedFilter[2];
        const filterText = parsedFilter[3];
        const hasEndWildcard = !!parsedFilter[4];

        let result = false;

        // Handle different matching scenarios
        if (filterText === '') {
            // Handle empty string scenarios with negation
            result = operator === '!' ? value.trim() !== '' : !value.trim();
        } else if (hasStartWildcard && hasEndWildcard) {
            // Contains wildcard
            result =
                operator === '!'
                    ? !(value.indexOf(filterText) >= 0)
                    : value.indexOf(filterText) >= 0;
        } else if (hasStartWildcard && !hasEndWildcard) {
            // Ends with wildcard
            result =
                operator === '!'
                    ? !value.endsWith(filterText)
                    : value.endsWith(filterText);
        } else if (!hasStartWildcard && hasEndWildcard) {
            // Starts with wildcard
            result =
                operator === '!'
                    ? !value.startsWith(filterText)
                    : value.startsWith(filterText);
        } else if (!hasStartWildcard && !hasEndWildcard) {
            // Operator match
            switch (operator) {
                case '!':
                    result = !(value === filterText);
                    break;
                case '>':
                    result = value > filterText;
                    break;
                case '>=':
                    result = value >= filterText;
                    break;
                case '<':
                    result = value < filterText;
                    break;
                case '<=':
                    result = value <= filterText;
                    break;
                default:
                    result = value === filterText;
                    break;
            }
        }

        return result;
    }

    isFilterCompliantForSimpleValue(
        valueToCheck: string,
        obj: any,
        filterValue: string,
        isGlobalFilter?: boolean
    ) {
        if (valueToCheck == null) {
            return false;
        }

        // Split multiple filters and trim each one
        const filters = filterValue.split(';').map((f) => f.trim());

        // All filters must match (AND condition)
        return filters.every((filter) => {
            const rawFilter = filter;
            const normalizedFilter = this.normalizeValue(filter, obj);
            let value = valueToCheck;
            let checkByRegularExpression = true;

            if (dom.ketchup.objects.isNumber(obj)) {
                const valueNumber: number = dom.ketchup.math.numberifySafe(
                    value,
                    obj ? obj.p : ''
                );

                // Parse filter using FILTER_ANALIZER
                const filterMatch = rawFilter
                    .toLowerCase()
                    .match(FILTER_ANALYZER);

                if (filterMatch) {
                    const [
                        _,
                        operator,
                        _startWildcard,
                        filterNum,
                        _endWildcard,
                    ] = filterMatch;

                    const numericFilterValue =
                        dom.ketchup.math.numberifySafe(filterNum);

                    if (!isNaN(numericFilterValue)) {
                        checkByRegularExpression = false;
                        switch (operator) {
                            case '>':
                                return valueNumber > numericFilterValue;
                            case '>=':
                                return valueNumber >= numericFilterValue;
                            case '<':
                                return valueNumber < numericFilterValue;
                            case '<=':
                                return valueNumber <= numericFilterValue;
                            case '!':
                                return valueNumber !== numericFilterValue;
                            default:
                                return valueNumber === numericFilterValue;
                        }
                    }
                }
            }
            if (
                dom.ketchup.objects.isDate(obj) ||
                dom.ketchup.objects.isTime(obj) ||
                dom.ketchup.objects.isTimestamp(obj)
            ) {
                // Determine the format based on the object type
                let defaultFormat = KupDatesFormats.ISO_DATE;
                if (dom.ketchup.objects.isDate(obj)) {
                    defaultFormat = KupDatesFormats.ISO_DATE;
                } else if (dom.ketchup.objects.isTime(obj)) {
                    const manageSeconds =
                        dom.ketchup.objects.isTimeWithSeconds(obj);
                    defaultFormat = manageSeconds
                        ? KupDatesFormats.ISO_TIME
                        : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS;
                } else if (dom.ketchup.objects.isTimestamp(obj)) {
                    defaultFormat = KupDatesFormats.ISO_DATE_TIME;
                }

                // Parse filter using FILTER_ANALIZER
                const filterMatch = rawFilter
                    .toLowerCase()
                    .match(FILTER_ANALYZER);

                // Convert the value to check to a Date object
                const normValue = this.normalizeValue(value, obj);
                let valueDate: Date = null;
                if (normValue != null) {
                    valueDate = dom.ketchup.dates.toDate(value, defaultFormat);
                }

                if (filterMatch && valueDate) {
                    const [_, operator, _startWildcard, dateStr, _endWildcard] =
                        filterMatch;

                    // Try to convert the filter value to a Date
                    if (dom.ketchup.dates.isValidFormattedStringDate(dateStr)) {
                        const filterDate = dom.ketchup.dates.toDate(
                            this.normalizeValue(dateStr, obj)
                        );
                        checkByRegularExpression = false;

                        switch (operator) {
                            case '>':
                                return valueDate > filterDate;
                            case '>=':
                                return valueDate >= filterDate;
                            case '<':
                                return valueDate < filterDate;
                            case '<=':
                                return valueDate <= filterDate;
                            case '!':
                                return (
                                    valueDate.getTime() !== filterDate.getTime()
                                );
                            default:
                                return (
                                    valueDate.getTime() === filterDate.getTime()
                                );
                        }
                    }
                }

                // If we got here, we either don't have a valid filter pattern or date
                // Format the value for string comparison
                if (
                    !dom.ketchup.dates.isValidFormattedStringDate(
                        normalizedFilter,
                        defaultFormat
                    ) &&
                    !dom.ketchup.dates.isValidFormattedStringDate(
                        normalizedFilter
                    ) &&
                    !dom.ketchup.dates.isValidFormattedStringTime(
                        value,
                        dom.ketchup.objects.isTimeWithSeconds(obj)
                    )
                ) {
                    value = dom.ketchup.dates.format(value);
                }
            }

            if (checkByRegularExpression) {
                return this.isFilterCompliantForValue(
                    value,
                    normalizedFilter,
                    isGlobalFilter
                );
            }
            return true;
        });
    }

    static valuesArrayContainsValue(
        values: ValueDisplayedValue[],
        value: string
    ): boolean {
        return Filters.indexOfValueInValuesArray(values, value) >= 0;
    }

    static indexOfValueInValuesArray(
        values: ValueDisplayedValue[],
        value: string
    ): number {
        if (values == null || values.length < 1) {
            return -1;
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i].value == value) {
                return i;
            }
        }
        return -1;
    }
}

import { GenericObject } from '../types/GenericTypes';

// TODO improve this by making it a generic function which accepts a dynamic type
// TODO allow filterOnField to be a function which returns a string passing the current item under analysis
/** NOT USED!!! */
/*
export function basicListFilter(
    listToFilter: GenericObject[],
    filterValue: string,
    filterOnField: string = 'id'
): GenericObject[] {
    let toRet: GenericObject[] = [];
    const lowercaseFilterValue = filterValue.toLowerCase();

    if (listToFilter) {
        for (let i = 0; i < listToFilter.length; i++) {
            if (
                listToFilter[i][filterOnField]
                    .toLowerCase()
                    .indexOf(lowercaseFilterValue) >= 0
            ) {
                toRet.push(listToFilter[i]);
            }
        }
    }

    return toRet;
}
*/

/**
 * This regular expressions returns a match like this one:
 * if the string does not match is null, otherwise the indexes are equal to the object below:
 *
 * @property {string} 0 - The entire match of the regexp; is equal to the cellValue.
 * @property {string} 1 - Either !' or ' it's the start of the regexp.
 * @property {string} 2 - Either % or null: means the string must start with the given string.
 * @property {string} 3 - Either "" or a string with a length.
 * @property {string} 4 - Either % or null: means the string must finish with the given string.
 * @property {string} 5 - Always equal to ': it's the end of the filter.
 */
//const filterAnalyzer = /^('|!')(%){0,1}(.*?)(%){0,1}(')$/;

/**
 * Given a filter value, check if is a negative filter
 * @param filterValue the filter value to use for check
 */
/*
export function filterIsNegative(filterValue: string) {
    const analyzedFilter = filterValue.match(filterAnalyzer);
    const filterIsNegative: boolean = analyzedFilter
        ? analyzedFilter[1].indexOf('!') >= 0
        : false;
    return filterIsNegative;
}
*/
/**
* Given a value and a filter value, returns if that value matches the filter.
*
* Web filters can also be expressions: by putting strings between single quotes (') it's possible to activate filter expressions.
* Valid syntax:
* 'filter' = search for exact phrase;
* '' = match when value is empty;
* 'filter%' = match when a string starts with "filter";
* '%filter' = match when a string ends with "filter";
* '%filter%' = match when a string contains "filter".
*
* It is also possible to negate the expression by prepending "!" in front of the expression.
* For example: !'' = value in the cell must not be empty.
*
* With no expression set, the filter is by default set to '%filter%'.
*
* @param value - The current value to check.
* @param filterValue - The value of the current filter.
* @returns false if value or filterValue are empty; 
           true if value contains filterValue; 
           true if value matches special filter created on filterValue; 
           false otherwise.
*/
/*
export function isFilterCompliantForValue(
    value: string,
    filterValue: string
): boolean {
    if (value == null) {
        return false;
    }
    if (filterValue == null) {
        return false;
    }

    const _filterIsNegative: boolean = filterIsNegative(filterValue);

    // checks if the value of the filter is contained inside value of the object
    // Or is if the filter is a special filter to be matched.
    if (
        value.toLowerCase().includes(filterValue.toLowerCase()) ||
        matchSpecialFilter(
            value.toLowerCase(),
            filterValue.toLowerCase().match(filterAnalyzer),
            true
        )
    ) {
        // the element matches the field filter
        if (_filterIsNegative) {
            return false;
        }
        return true;
    }
    if (_filterIsNegative) {
        return true;
    }
    return false;
}
*/

/**
 * Given a value and a filter value, returns if that value matches the filter.
 *
 * Web filters can also be expressions: by putting strings between single quotes (') it's possible to activate filter expressions.
 * Valid syntax:
 * 'filter' = search for exact phrase;
 * '' = match when value is empty;
 * 'filter%' = match when a string starts with "filter";
 * '%filter' = match when a string ends with "filter";
 * '%filter%' = match when a string contains "filter".
 *
 * It is also possible to negate the expression by prepending "!" in front of the expression.
 * For example: !'' = value in the cell must not be empty.
 *
 * With no expression set, the filter is by default set to '%filter%'.
 *
 * @param value - The current value to check.
 * @param parsedFilter - The value of the current filter.
 * @param ignoreNegativeFlag = false - When set to true, the matcher will ignore the (!) operator; useful for global filter.
 * @returns True if the filter is empty and the value of the cell is empty, false otherwise.
 */
/*
export function matchSpecialFilter(
    value: string,
    parsedFilter: RegExpMatchArray | null,
    ignoreNegativeFlag: boolean = false
): boolean {
    if (parsedFilter != null) {
        // endsWith and startWith are not supported by IE 11
        // Check here https://www.w3schools.com/jsref/jsref_endswith.asp
        const toRet: boolean =
            (parsedFilter[3] === '' && !value.trim()) ||
            (!parsedFilter[2] &&
                parsedFilter[4] &&
                value.startsWith(parsedFilter[3])) ||
            (parsedFilter[2] &&
                !parsedFilter[4] &&
                value.endsWith(parsedFilter[3])) ||
            (!parsedFilter[2] &&
                !parsedFilter[4] &&
                value === parsedFilter[3]) ||
            (parsedFilter[2] &&
                parsedFilter[4] &&
                value.indexOf(parsedFilter[3]) >= 0);
        return !ignoreNegativeFlag
            ? parsedFilter[1].indexOf('!') < 0
                ? toRet
                : !toRet
            : toRet;
    }
    return false;
}
*/

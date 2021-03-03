import { isNumber } from 'lodash';
import { isDate, isTime, isTimestamp } from '../object-utils';

/**
 * Filtering algorithms.
 * @module Filters
 * @todo Should contain EVERY filtering method in common between filtering types (i.e.: global filters and column menu filters).
 */
export class Filters {
    isObjFiltrableByInterval(obj): boolean {
        if (isDate(obj)) {
            return true;
        }
        if (isTime(obj)) {
            return true;
        }
        if (isTimestamp(obj)) {
            return true;
        }
        if (isNumber(obj)) {
            return true;
        }
        return false;
    }
}

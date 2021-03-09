import { deepEqual } from './utils';

export function isStateChanged(stateMap: Map<any, any>): boolean {
    for (const key of stateMap.keys()) {
        if (!deepEqual(key, stateMap.get(key))) {
            return true;
        }
    }
    return false;
}

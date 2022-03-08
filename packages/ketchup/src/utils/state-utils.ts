import { KupDom } from '../managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function isStateChanged(stateMap: Map<any, any>): boolean {
    for (const key of stateMap.keys()) {
        if (!dom.ketchup.objects.deepEqual(key, stateMap.get(key))) {
            return true;
        }
    }
    return false;
}

import { KupManager } from './managers/kup-manager/kup-manager';
import { KupManagerInitialization } from './managers/kup-manager/kup-manager-declarations';

/** used for obtain a KupManager instance without a dom document (for UT)  */
export function newKupManager(init: KupManagerInitialization): KupManager {
    return new KupManager(init);
}

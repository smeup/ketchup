import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupStore } from './kup-store';

export default class MockStore implements KupStore {
    component: any;
    private kupManager: KupManager = kupManagerInstance();

    constructor(component: any) {
        this.component = component;
    }

    persistState(stateId: string, _state: any): void {
        this.kupManager.debug.logMessage(
            this.component,
            'MOCK-STORE - Persisted state ' + stateId
        );
    }
    getState(stateId: string) {
        this.kupManager.debug.logMessage(
            this.component,
            'MOCK-STORE - Initialized state ' + stateId
        );
    }
}

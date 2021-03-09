import { logMessage } from '../../utils/debug-manager';
import { KupStore } from './kup-store';

export default class MockStore implements KupStore {
    component: any;

    constructor(component: any) {
        this.component = component;
    }

    persistState(stateId: string, _state: any): void {
        logMessage(this.component, 'MOCK-STORE - Persisted state ' + stateId);
    }
    getState(stateId: string) {
        logMessage(this.component, 'MOCK-STORE - Initialized state ' + stateId);
    }
}

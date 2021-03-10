import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { KupStore } from './kup-store';

export default class MockStore implements KupStore {
    component: any;
    private kupDebug: KupDebug = new KupDebug();

    constructor(component: any) {
        this.component = component;
    }

    persistState(stateId: string, _state: any): void {
        this.kupDebug.logMessage(
            this.component,
            'MOCK-STORE - Persisted state ' + stateId
        );
    }
    getState(stateId: string) {
        this.kupDebug.logMessage(
            this.component,
            'MOCK-STORE - Initialized state ' + stateId
        );
    }
}

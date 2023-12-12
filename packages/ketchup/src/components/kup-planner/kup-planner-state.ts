import { KupState } from '../kup-state/kup-state';
import {
    KupPlannerStoredSettings,
    KupPlannerViewMode,
} from './kup-planner-declarations';

export class KupPlannerState implements KupState, KupPlannerStoredSettings {
    showSecondaryDates = false;
    detailFilter = '';
    detailInitialScrollX = 0;
    detailInitialScrollY = 0;
    taskFilter = '';
    taskInitialScrollX = 0;
    taskInitialScrollY = 0;
    viewMode: KupPlannerViewMode = 'day';

    public toDebugString() {
        // TODO
        return 'dt state';
    }
}

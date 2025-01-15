import { KupState } from '../kup-state/kup-state';
import { KupCalendarViewTypes } from './kup-calendar-declarations';

export class KupCalendarState implements KupState {
    initialDate: Date;
    viewType: KupCalendarViewTypes;

    public toDebugString() {
        // TODO
        return JSON.stringify(this);
    }
}

import { KupDataColumn, KupEventPayload } from '../../components';
import { KupDataRow } from '../../managers/kup-data/kup-data-declarations';

export enum KupActivityTimelineProps {
    data = 'Dataset containing the activities list',
    dateColumn = 'Column containing dates',
    timeColumn = 'Column containing times',
    sortOrder = 'Order for sorting',
}

export interface KupActivityTimelineData {
    title: string;
    value: string;
    columnName: string;
    rowId: string;
}

export interface KupActivityTimelineActivity {
    time: string;
    columns: KupActivityTimelineData[];
}

export interface KupActivityTimelineDatapoint {
    date: string;
    time: string;
    activities: KupActivityTimelineActivity[];
}

export interface KupActivityTimelineClickEventPayload extends KupEventPayload {
    details: KupActivityTimelineEventHandlerDetails;
}

export interface KupActivityTimelineEventHandlerDetails {
    column: KupDataColumn;
    originalEvent: UIEvent;
    row: KupDataRow;
    type: KupActivityTimelineAction;
}

export enum KupActivityTimelineAction {
    onClick = 'onClick',
    onRightClick = 'onRightClick',
}

import { KupDataColumn, KupEventPayload } from '../../components';
import { KupDataRow } from '../../managers/kup-data/kup-data-declarations';

export enum KupActivityTimelineProps {
    data = 'Dataset containing the activities list',
    dateColumn = 'Column containing dates',
    timeColumn = 'Column containing times',
}

export interface KupActivityTimelineData {
    title: string;
    value: string;
    columnName: string;
    cellId: string;
}

export interface KupActivity {
    time: string;
    columns: KupActivityTimelineData[][];
}

export interface ActivityTimeline {
    date: string;
    time: string;
    activities: KupActivity[];
}

export interface KupDatatableClickEventPayload extends KupEventPayload {
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

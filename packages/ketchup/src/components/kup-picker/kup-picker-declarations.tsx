import { ISO_DEFAULT_DATE_FORMAT } from '../../utils/utils';

export const DATE_PICKER_INPUT_OUTPUT_DATE_FORMAT = ISO_DEFAULT_DATE_FORMAT;

export enum PICKER_TYPE {
    DATE = 'date',
    TIME = 'time',
    DATE_TIME = 'date_time',
    COLOR = 'color',
}

export enum PICKER_SOURCE_EVENT {
    DATE = 'date',
    TIME = 'time',
    COLOR = 'color',
}

export interface PICKER_COMPONENT_INFO {
    type: PICKER_SOURCE_EVENT;
    kupComponent?: any;
    htmlComponent?: any;
    style?: any;
}

export interface PICKER_STATUS_INFO {
    textfieldEl?: any;
    pickerContainerEl?: any;
    pickerEl?: any;
    elStyle?: any;
    pickerOpened: boolean;
}

export interface PICKER_STATUS {
    [key: string]: PICKER_STATUS_INFO;
}

export enum PICKER_SOURCE_EVENT {
    DATE = 'date',
    /*TIME = 'time',
    COLOR = 'color',*/
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

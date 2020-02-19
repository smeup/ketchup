import {
    FormConfig,
    FormCell,
    FormFields,
    FormSection,
    FormMessage,
    FormActions,
    FormCells,
} from '../kup-form/kup-form-declarations';

export interface CrudConfig extends FormConfig {
    multiple?: true;
    insert?: true;
    update?: true;
    delete?: true;
}

// TODO: use a Message common to all framework (and a related kup-message component)
export interface CrudMessage {
    text: string;
    level: CrudMessageLevel;
}

export enum CrudMessageLevel {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

/*****************************************************************/
/** EVENTS                                                      **/
/*****************************************************************/

export interface CrudRecord {
    id?: string;
    cells: {
        [index: string]: FormCell;
    };
}

export interface CrudRecordsChanged {
    refid?: string;
    extra?: any;
    actual?: {
        records: CrudRecord[];
    };
}

export interface CrudCallBackOnFormEventResult {
    fields?: FormFields;
    sections?: FormSection;
    extraMessages?: FormMessage[];
    actions?: FormActions;
    cells: FormCells;
    diffTypes: string[];
    isUpdate: boolean;
}

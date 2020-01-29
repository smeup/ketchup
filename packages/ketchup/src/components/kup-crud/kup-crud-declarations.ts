import {
    FormConfig,
    FormRecord,
    FormFields,
    FormSection,
    FormMessage,
    FormActions,
} from '../kup-form/kup-form-declarations';

export interface CrudConfig extends FormConfig {}

/*****************************************************************/
/** EVENTS                                                      **/
/*****************************************************************/

export interface CrudRecordsChanged {
    refid?: string;
    extra?: any;
    actual?: {
        records: FormRecord[];
    };
}

export interface CrudCallBackOnFormEventResult {
    config?: CrudConfig;
    fields?: FormFields;
    sections?: FormSection;
    extraMessages?: FormMessage[];
    actions?: FormActions;
    record?: FormRecord;
    records?: FormRecord[];
    formOpened?: boolean;
}

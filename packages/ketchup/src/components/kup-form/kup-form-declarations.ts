export interface FormFields {
    [index: string]: FormField;
}

export interface FormField {
    key: string;
    refid?: string;
    title?: string;
    description?: string;
    hidden?: boolean;
    readonly?: boolean;
    validate?: FormFieldValidate;
    outputValueFunction?: string;
    // can be present in form cell
    shape?: string;
    config?: any;
    extra?: any;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
}

export interface FormRecord {
    id?: string;
    fields: {
        [index: string]: FormCell;
    };
}

export interface FormCell {
    key: string;
    value: any;
    // can be present in form field
    shape?: string;
    config?: any;
    extra?: any;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
}

export interface FormFieldValidate {
    required?: boolean;
    minLength?: number;
}

export interface FormSection {
    id?: string;
    horizontal?: boolean;
    dim?: string;
    sections?: FormSection[];
    fields?: string[];
    style?: { [index: string]: string };
    collapsible?: boolean;
    columns?: number;
    title?: string;
}

export interface FormFieldsCalcs {
    [index: string]: FormFieldCalcs;
}

export interface FormFieldCalcs {
    oldValue: any;
}

// TODO: use a Message common to all framework (and a related kup-message component)
export interface FormMessage {
    fieldKey?: string;
    text: string;
    level: FormMessageLevel;
}

export enum FormMessageLevel {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

export interface FormConfig {
    liveCheck?: boolean;
}

export interface FormActions {
    fields: {
        [index: string]: FormActionField;
    };
    sections: FormActionSection[];
}

export interface FormActionField extends FormField {}

export interface FormActionSection extends FormSection {
    position?: string;
}

/*****************************************************************/
/** EVENTS                                                      **/
/*****************************************************************/

export interface FormActionEventDetail {
    refid?: string;
    extra?: any;
    isValid?: boolean;
    action: {
        key: string;
        extra?: string;
        obj?: string;
    };
    actual?: {
        fields?: FormFields;
        record?: FormRecord;
    };
    old?: {
        record?: FormRecord;
    };
}

export interface FormFieldEventDetail {
    refid?: string;
    extra?: any;
    isValid?: boolean;
    field: {
        key: string;
    };
    actual?: {
        fields?: FormFields;
        record?: FormRecord;
    };
    old?: {
        record?: FormRecord;
    };
}

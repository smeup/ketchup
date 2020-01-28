export interface FormFields {
    [index: string]: FormField;
}

export interface FormField {
    refid?: string;
    key: string;
    title?: string;
    description?: string;
    hidden?: boolean;
    readonly?: boolean;
    shape?: string;
    validate?: FormFieldValidate;
    outputValueFunction?: string;

    extra?: any;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
    config?: any;
    value: any;
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
    action?: {
        key: string;
        extra?: string;
    };
    actual?: {
        fields: {
            [index: string]: {
                key: string;
                value: any;
                extra?: any;
            };
        };
    };
    old?: {
        fields: {
            [index: string]: {
                key: string;
                value: any;
                extra?: any;
            };
        };
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
        fields: {
            [index: string]: {
                key: string;
                value: any;
                extra?: any;
            };
        };
    };
    old?: {
        fields: {
            [index: string]: {
                key: string;
                value: any;
                extra?: any;
            };
        };
    };
}

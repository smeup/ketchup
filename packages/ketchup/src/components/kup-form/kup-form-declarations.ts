export interface FormFields {
    [index: string]: FormField;
}

export interface FormField {
    key: string;
    title?: string;
    description?: string;
    hidden?: boolean;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
    data?: {};
    value: any;
    shape?: string;
    config?: any;
    validate?: FormFieldValidate;
}

export interface FormField {}

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

export interface FormActionEventDetail {
    isValid?: boolean;
    action?: {
        key: string;
    };
    fields: {
        [index: string]: {
            key: string;
            hidden?: boolean;
            value: any;
            oldValue: any;
        };
    };
}

export interface FormFieldEventDetail {
    isValid?: boolean;
    field: {
        key: string;
        value: any;
        oldValue: any;
    };
    fields: {
        [index: string]: {
            key: string;
            hidden?: boolean;
            value: any;
            oldValue: any;
        };
    };
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
    liveValidation?: boolean;
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

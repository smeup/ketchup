export interface FormFields {
    [index: string]: FormField;
}

export interface FormField {
    key: string;
    title: string;
    description: string;
    hidden?: boolean;
    obj: {
        t: string;
        p: string;
        k: string;
    };
    value: string;
    shape?: string;
    config?: any;
    validate?: FormFieldValidate;
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
    oldValue: string;
}

export interface FormSubmittedDetail {
    isValid?: boolean;
    fields: {
        [index: string]: {
            key: string;
            hidden?: boolean;
            value: string;
            oldValue: string;
        };
    };
}

export interface FormFieldFocusedDetail {
    field: {
        key: string;
        value: string;
    };
}

export interface FormFieldBlurredDetail {
    isValid?: boolean;
    field: {
        key: string;
        value: string;
        oldValue: string;
    };
    fields: {
        [index: string]: {
            key: string;
            hidden?: boolean;
            value: string;
            oldValue: string;
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

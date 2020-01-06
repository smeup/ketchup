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
    fields: {
        [index: string]: FormSubmittedFieldDetail;
    };
}

export interface FormSubmittedFieldDetail {
    key: string;
    hidden?: boolean;
    value: string;
    oldValue: string;
}

export interface FormFieldFocusedDetail {
    key: string;
    value: string;
}

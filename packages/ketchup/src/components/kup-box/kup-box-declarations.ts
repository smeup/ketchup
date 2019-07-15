export interface Layout {
    sections?: Section[];
}

export interface Section {
    id?: string;
    horizontal?: boolean;
    dim?: string;
    sections?: Section[];
    content?: BoxObject[];
    style?: { [index: string]: string };
    collapsible?: boolean;
    columns?: number;
}

export interface BoxObject {
    column?: string;
    value?: string;
}

export interface CollapsedSectionsState {
    [index: string]: {
        [index: string]: boolean;
    };
}

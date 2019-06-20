export interface Layout {
    sections?: Section[];
}

export interface Section {
    id?: string;
    horizontal?: boolean;
    dim?: string;
    children?: Section[]; // TODO rename in sections
    content?: BoxObject[];
    style?: { [index: string]: string };
    collapsible?: boolean;
}

export interface BoxObject {
    column: string;
}

export interface CollapsedSectionsState {
    [index: string]: {
        [index: string]: boolean;
    };
}

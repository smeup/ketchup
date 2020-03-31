export interface ComponentListElement {
    text: string;
    secondaryText?: string;
    value: string;
    isSeparator?: boolean;
    selected?: boolean;
}

export enum ItemsDisplayMode {
    CODE = 'code',
    DESCRIPTION = 'description',
    DESCRIPTION_AND_CODE = 'both',
}

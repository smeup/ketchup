export interface FChipsProps {
    data?: FChipData[];
    id?: string;
    type?: string;
}

export interface FChipData {
    value: string;
    icon?: string;
    label: string;
    checked: boolean;
}

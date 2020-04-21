export interface ComponentListElement {
    text: string;
    secondaryText?: string;
    value: string;
    isSeparator?: boolean;
    selected?: boolean;
    icon?: string;
    iconSizeX?: string;
    iconSizeY?: string;
    iconTip?: string;
    trailingIcon?: boolean;
}

export enum ItemsDisplayMode {
    CODE = 'code',
    DESCRIPTION = 'description',
    DESCRIPTION_AND_CODE = 'both',
}

export function getValueOfItemByDisplayMode(
    item: ComponentListElement,
    mode: ItemsDisplayMode,
    separator: string
): string {
    if (mode == ItemsDisplayMode.CODE) {
        return item.value;
    }
    if (mode == ItemsDisplayMode.DESCRIPTION) {
        return item.text;
    }
    if (mode == ItemsDisplayMode.DESCRIPTION_AND_CODE) {
        return item.value + separator + item.text;
    }
    return item.value;
}

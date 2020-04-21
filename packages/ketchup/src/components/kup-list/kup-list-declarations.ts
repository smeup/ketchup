export interface ComponentListElement {
    text: string;
    secondaryText?: string;
    value: string;
    isSeparator?: boolean;
    selected?: boolean;
    icon?: string;
    iconHeight?: string;
    iconWidth?: string;
    iconTip?: string;
}

export enum ItemsDisplayMode {
    CODE = 'code',
    DESCRIPTION = 'description',
    DESCRIPTION_AND_CODE = 'both',
    ICON = 'icon',
    DESCRIPTION_AND_ICON = 'icon_description',
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

import { logMessage } from '../../utils/debug-manager';

export interface ComponentListElement {
    text: string;
    secondaryText?: string;
    value: string;
    isSeparator?: boolean;
    selected?: boolean;
    icon?: string;
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

export function consistencyCheck(
    value: string,
    listData: Object,
    textfieldEl: any,
    selectMode: ItemsDisplayMode
): string {
    var firstSelectedFound = false;
    if (listData['data']) {
        for (let i = 0; i < listData['data'].length; i++) {
            if (listData['data'][i].selected && firstSelectedFound) {
                listData['data'][i].selected = false;
                let message =
                    'Found occurence of data(' +
                    i +
                    ") to be set on 'selected' when another one was found before! Overriding to false because only 1 'selected' is allowed in this menu.";

                logMessage('kup-list-utils', message);
            }
            if (listData['data'][i].selected && !firstSelectedFound) {
                firstSelectedFound = true;
                value = getValueOfItemByDisplayMode(
                    listData['data'][i],
                    selectMode,
                    ' - '
                );
                if (textfieldEl) {
                    if (textfieldEl.initialValue === value) {
                        textfieldEl.initialValue = '';
                        textfieldEl.initialValue = value;
                    } else {
                        textfieldEl.initialValue = value;
                    }
                }
            }
        }
    }
    return value;
}

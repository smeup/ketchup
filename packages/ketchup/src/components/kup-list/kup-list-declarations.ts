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

/*
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

                logMessage('kup-list-utils', message, 'warning');
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
*/

export function consistencyCheck(
    valueIn: string,
    listData: Object,
    textfieldEl: any,
    listEl: any,
    selectMode: ItemsDisplayMode,
    displayMode: ItemsDisplayMode,
    e?: CustomEvent
): { value: string; displayedValue: string } {
    let value: string = '';
    let displayedValue: string = '';

    let selected: ComponentListElement = null;
    if (e != null) {
        selected = e.detail.selected;
    }
    if (selected == null && valueIn != null) {
        selected = getItemByDisplayMode(listData, valueIn, displayMode, true);
        listEl.data = [...listData['data']];
    }
    if (selected == null && valueIn == null) {
        selected = getFirstItemSelected(listData);
    }

    if (selected == null) {
        selected = {
            text: valueIn == null ? '' : valueIn,
            value: valueIn == null ? '' : valueIn,
        };
    }
    value = getValueOfItemByDisplayMode(selected, selectMode, ' - ');

    displayedValue = getValueOfItemByDisplayMode(selected, displayMode, ' - ');

    if (textfieldEl) {
        if (textfieldEl.initialValue === displayedValue) {
            textfieldEl.initialValue = '';
            textfieldEl.initialValue = displayedValue;
        } else {
            textfieldEl.initialValue = displayedValue;
        }
    }
    return { value: value, displayedValue: displayedValue };
}

export function getFirstItemSelected(listData: Object): ComponentListElement {
    if (listData['data']) {
        for (let i = 0; i < listData['data'].length; i++) {
            if (listData['data'][i].selected) {
                return listData['data'][i];
            }
        }
    }
    return null;
}

export function getItemByValue(
    listData: Object,
    value: string,
    setSelected: boolean
): ComponentListElement {
    if (listData['data']) {
        let found: boolean = false;
        let item: ComponentListElement = null;
        for (let i = 0; i < listData['data'].length; i++) {
            if (setSelected == true) {
                listData['data'][i].selected = false;
            }
            if (
                !found &&
                listData['data'][i].value.toLowerCase() == value.toLowerCase()
            ) {
                item = listData['data'][i];
                item.selected = true;
                found = true;
            }
        }
        if (found == true) {
            return item;
        }
        for (let i = 0; i < listData['data'].length; i++) {
            if (listData['data'][i].text.toLowerCase() == value.toLowerCase()) {
                item = listData['data'][i];
                item.selected = true;
                found = true;
                break;
            }
        }
        if (found == true) {
            return item;
        }
    }
    return null;
}

export function getItemByDisplayMode(
    listData: Object,
    value: string,
    displayMode: ItemsDisplayMode,
    setSelected: boolean
): ComponentListElement {
    if (listData['data']) {
        let found: boolean = false;
        let item: ComponentListElement = null;
        for (let i = 0; i < listData['data'].length; i++) {
            let displayedValue = getValueOfItemByDisplayMode(
                listData['data'][i],
                displayMode,
                ' - '
            );
            if (setSelected == true) {
                listData['data'][i].selected = false;
            }
            if (!found && displayedValue.toLowerCase() == value.toLowerCase()) {
                item = listData['data'][i];
                item.selected = true;
                found = true;
            }
        }
        if (found == true) {
            return item;
        }
    }
    return getItemByValue(listData, value, setSelected);
}

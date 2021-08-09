import {
    ItemsDisplayMode,
    KupListData,
    ValueDisplayedValue,
} from './kup-list-declarations';

export function getValueOfItemByDisplayMode(
    item: KupListData,
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
    valueIn: string,
    listData: Object,
    listEl: any,
    selectMode: ItemsDisplayMode,
    displayMode: ItemsDisplayMode,
    e?: CustomEvent
): ValueDisplayedValue {
    let value: string = '';
    let displayedValue: string = '';

    let selected: KupListData = null;
    if (e != null) {
        selected = e.detail.selected;
    }
    if (selected == null && valueIn != null && listData && listData['data']) {
        selected = getItemByDisplayMode(listData, valueIn, displayMode, true);
        listEl.data = [...listData['data']];
    }
    if (selected == null && valueIn == null && listData) {
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
    return {
        value: value,
        displayedValue: displayedValue,
    };
}

export function getFirstItemSelected(listData: Object): KupListData {
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
): KupListData {
    if (listData && listData['data']) {
        let found: boolean = false;
        let item: KupListData = null;
        for (let i = 0; i < listData['data'].length; i++) {
            if (setSelected == true) {
                listData['data'][i].selected = false;
            }
            if (
                !found &&
                listData['data'][i].value.toString().toLowerCase() ==
                    value.toString().toLowerCase()
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
            if (
                listData['data'][i].text.toString().toLowerCase() ==
                value.toString().toLowerCase()
            ) {
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
): KupListData {
    if (listData && listData['data']) {
        let found: boolean = false;
        let item: KupListData = null;
        for (let i = 0; i < listData['data'].length; i++) {
            let displayedValue = getValueOfItemByDisplayMode(
                listData['data'][i],
                displayMode,
                ' - '
            );
            if (setSelected == true) {
                listData['data'][i].selected = false;
            }
            if (
                !found &&
                displayedValue.toString().toLowerCase() ==
                    value.toString().toLowerCase()
            ) {
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

import {
    ItemsDisplayMode,
    KupListNode,
    ValueDisplayedValue,
} from './kup-list-declarations';

export function getIdOfItemByDisplayMode(
    item: KupListNode,
    mode: ItemsDisplayMode,
    separator: string
): string {
    if (mode == ItemsDisplayMode.CODE) {
        return item.id;
    }
    if (mode == ItemsDisplayMode.DESCRIPTION) {
        return item.value;
    }
    if (mode == ItemsDisplayMode.DESCRIPTION_AND_CODE) {
        return item.id + separator + item.value;
    }
    return item.id;
}

export function consistencyCheck(
    idIn: string,
    listData: Object,
    listEl: any,
    selectMode: ItemsDisplayMode,
    displayMode: ItemsDisplayMode,
    e?: CustomEvent
): ValueDisplayedValue {
    const validList = !!(listEl && listData && listData['data']);
    let id: string = '';
    let displayedValue: string = '';
    let selected: KupListNode = null;
    if (e != null) {
        selected = e.detail.selected;
    }
    if (selected == null && idIn != null && validList) {
        selected = getItemByDisplayMode(listData, idIn, displayMode, true);
        listEl.data = [...listData['data']];
    }
    if (selected == null && idIn == null && listData) {
        selected = getFirstItemSelected(listData);
    }
    let trueValue = null;
    if (selected == null) {
        selected = {
            id: idIn == null ? '' : idIn,
            value: idIn == null ? '' : idIn,
        };
        id = selected.id;
        displayedValue = selected.id;
        trueValue = selected.id;
    } else {
        id = getIdOfItemByDisplayMode(selected, selectMode, ' - ');
        displayedValue = getIdOfItemByDisplayMode(selected, displayMode, ' - ');
        trueValue = getIdOfItemByDisplayMode(
            selected,
            ItemsDisplayMode.CODE,
            ' - '
        );
    }

    return {
        value: id,
        displayedValue: displayedValue,
        exists:
            validList &&
            (listData['data'] as KupListNode[]).find((x) => x.id === trueValue)
                ? true
                : false,
    };
}

export function getFirstItemSelected(listData: Object): KupListNode {
    if (listData['data']) {
        for (let i = 0; i < listData['data'].length; i++) {
            if (listData['data'][i].selected) {
                return listData['data'][i];
            }
        }
    }
    return null;
}

export function getItemById(
    listData: Object,
    id: string,
    setSelected: boolean
): KupListNode {
    if (listData && listData['data']) {
        let found: boolean = false;
        let item: KupListNode = null;
        for (let i = 0; i < listData['data'].length; i++) {
            if (setSelected == true) {
                listData['data'][i].selected = false;
            }
            if (
                !found &&
                listData['data'][i].id.toString().toLowerCase() ==
                    id.toString().toLowerCase()
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
                listData['data'][i].value.toString().toLowerCase() ==
                id.toString().toLowerCase()
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
    id: string,
    displayMode: ItemsDisplayMode,
    setSelected: boolean
): KupListNode {
    if (listData && listData['data']) {
        let found: boolean = false;
        let item: KupListNode = null;
        for (let i = 0; i < listData['data'].length; i++) {
            let displayedValue = getIdOfItemByDisplayMode(
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
                    id.toString().toLowerCase()
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
    return getItemById(listData, id, setSelected);
}

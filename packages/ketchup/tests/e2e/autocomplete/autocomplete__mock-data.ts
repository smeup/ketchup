import { KupListData } from '../../../src/components/kup-list/kup-list-declarations';

export function AutocompleteItemFactory(
    itemsCount = 20,
    baseCode = 'CD',
    baseDescription = 'Item '
): KupListData[] {
    const toRet: KupListData[] = [];

    for (let i = 0; i < itemsCount; i++) {
        toRet.push({
            value: baseCode + i,
            text: baseDescription + i,
        });
    }

    return toRet;
}

import { KupListNode } from '../../../src/components/kup-list/kup-list-declarations';

export function AutocompleteItemFactory(
    itemsCount = 20,
    baseCode = 'CD',
    baseDescription = 'Item '
): KupListNode[] {
    const toRet: KupListNode[] = [];

    for (let i = 0; i < itemsCount; i++) {
        toRet.push({
            id: baseCode + i,
            value: baseDescription + i,
        });
    }

    return toRet;
}

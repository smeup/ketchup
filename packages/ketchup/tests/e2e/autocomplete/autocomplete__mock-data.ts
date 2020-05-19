import { ComponentListElement } from '../../../src/components/kup-list/kup-list-declarations';

export function AutocompleteItemFactory(
    itemsCount = 20,
    baseCode = 'CD',
    baseDescription = 'Item '
): ComponentListElement[] {
    const toRet: ComponentListElement[] = [];

    for (let i = 0; i < itemsCount; i++) {
        toRet.push({
            value: baseCode + i,
            text: baseDescription + i,
        });
    }

    return toRet;
}

export function AutocompleteItemFactory(itemsCount = 20, baseCode = 'CD', baseDescription = 'Item ') {
    const toRet = [];

    for (let i = 0; i < itemsCount; i++) {
        toRet.push({
            code: baseCode + i,
            description: baseDescription + i
        });
    }

    return toRet;
}
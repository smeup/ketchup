/**
 * Creates an array of elements to populate the items prop of an kup-autocomplete component.
 * @param {number} [itemsCount = 20] - How many items the function must create.
 * @param {string} [baseCode = 'CD'] - The base which will be applied to all elements code property.
 * @param {string} [baseDescription = 'Item'] - The base description which will be used to create the elements description.
 * @returns An array of KupAutocompleteOption.
 * @constructor
 */
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
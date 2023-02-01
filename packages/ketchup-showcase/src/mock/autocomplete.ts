/**
 * Creates an array of elements to populate the items prop of an kup-autocomplete component.
 * @param {number} [itemsCount = 20] - How many items the function must create.
 * @param {string} [baseCode = 'CD'] - The base which will be applied to all elements code property.
 * @param {string} [baseDescription = 'Item'] - The base description which will be used to create the elements description.
 * @returns An array of KupAutocompleteOption.
 * @constructor
 */
export function AutocompleteItemFactory(
  itemsCount = 20,
  baseCode = 'CD',
  baseDescription = 'Item '
) {
  const toRet = [];

  for (let i = 0; i < itemsCount; i++) {
    toRet.push({
      id: baseCode + i,
      value: baseDescription + i,
    });
  }

  let pp = { data: toRet, displayMode: 'both', selectable: true };
  return pp;
}

export function buildAutocompleteFilterUpdateCallback(itemsCount: number) {
  return (detail: any) =>
    autocompleteFilterUpdateCallbackCall(itemsCount, detail);
}

export function autocompleteFilterUpdateCallbackCall(
  itemsCount: any,
  detail: any
) {
  console.log(
    'AutocompleteFilterUpdateCallbackCall with detail ' + JSON.stringify(detail)
  );
  let aParamForBackend = 'NON';
  if (detail.extra && detail.extra.aParamForBackend) {
    aParamForBackend = detail.extra.aParamForBackend;
  }

  let baseCode = aParamForBackend.substring(0, 3).toUpperCase();
  let baseDescription = aParamForBackend + ' ';

  let items: any = [];
  if (detail.matchesMinimumCharsRequired) {
    items = AutocompleteItemFactory(itemsCount, baseCode, baseDescription);
    items = items.filter((elem: any) =>
      (elem.code + ' - ' + elem.description).includes(detail.filter)
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2);
  });
}

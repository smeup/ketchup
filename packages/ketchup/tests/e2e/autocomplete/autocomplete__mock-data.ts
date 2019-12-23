import {KupAutocompleteOption} from "../../../src/components/kup-autocomplete/kup-autocomplete-declarations";

export function AutocompleteItemFactory(itemsCount = 20, baseCode = 'CD', baseDescription = 'Item '): KupAutocompleteOption[] {
  const toRet: KupAutocompleteOption[] = [];

  for (let i = 0; i < itemsCount; i++) {
    toRet.push({
      code: baseCode + i,
      description: baseDescription + i
    });
  }

  return toRet;
}

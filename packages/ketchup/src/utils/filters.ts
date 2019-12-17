import {GenericObject} from '../types/GenericTypes';

export function basicListFilter(listToFilter: GenericObject[], filterValue: string, filterOnField: string = 'id'): GenericObject[] {
  let toRet: GenericObject[] = [];
  const lowercaseFilterValue = filterValue.toLowerCase();

  if (listToFilter) {
    for (let i = 0; i  < listToFilter.length; i++) {
      if (listToFilter[i][filterOnField].toLowerCase().indexOf(lowercaseFilterValue) >= 0) {
        toRet.push(listToFilter[i]);
      }
    }
  }

  return toRet;
}

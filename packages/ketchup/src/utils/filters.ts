import {GenericObject} from '../types/GenericTypes';

// TODO improve this by making it a generic function which accepts a dynamic type
// TODO allow filterOnField to be a function which returns a string passing the current item under analysis
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

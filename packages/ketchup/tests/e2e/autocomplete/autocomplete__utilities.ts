import {E2EElement, E2EPage} from '@stencil/core/testing';

import {KupAutocompleteOption} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';

export const kupAutocompleteAllItemsSelector: string = 'kup-autocomplete >>> .autocomplete__item-list li';
export const kupAutocompleteDropdownIconSelector: string = 'kup-autocomplete >>> .autocomplete__menu-toggle-icon';

export async function getAutocompleteInputField(page: E2EPage): Promise<E2EElement> {
  //const kupInput = await page.find('kup-autocomplete >>> kup-text-input >>> input[type="text"]');
  const temp = (await page.evaluateHandle(`document.querySelector("kup-autocomplete").shadowRoot.querySelector("kup-text-input").shadowRoot.querySelector("input")`)) as unknown as E2EElement;
  return temp;
}

export async function getAutocompleteMenuInstance(page: E2EPage): Promise<E2EElement> {
  return page.find('kup-autocomplete >>> kup-menu');
}

export async function getAutocompleteClearIcon(page: E2EPage): Promise<E2EElement> {
  return (page.evaluateHandle(`document.querySelector("kup-autocomplete").shadowRoot.querySelector("kup-text-input").shadowRoot.querySelector("button")`)) as unknown as E2EElement;
}

export async function createAutocompleteSelectedSpy(page: E2EPage) {
  return page.spyOnEvent('kupAutocompleteSelectionUpdate');
}

export function checkAutocompleteSelectedPayloadDetail(eventDetail: KupAutocompleteOption[], toMatch: KupAutocompleteOption[]): boolean {
  if (eventDetail.length !== toMatch.length) {
    throw new Error('The eventDetail payload event and the toMatch array does not match.');
  }

  for (let i = 0; i < eventDetail.length; i++) {
    if (eventDetail[i].code !== toMatch[i].code || eventDetail[i].description !== toMatch[i].description) {
      return false;
    }
  }
  return true;
}

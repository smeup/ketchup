import {E2EPage, E2EElement} from '@stencil/core/testing';

export async function getAutocompleteInputField(page: E2EPage): Promise<E2EElement> {
  //const kupInput = await page.find('kup-autocomplete >>> kup-text-input >>> input[type="text"]');
  const temp = (await page.evaluateHandle(`document.querySelector("kup-autocomplete").shadowRoot.querySelector("kup-text-input").shadowRoot.querySelector("input")`)) as unknown as E2EElement;
  return temp;
}

export async function getAutocompleteMenuInstance(page: E2EPage): Promise<E2EElement> {
  return page.find('kup-autocomplete >>> kup-menu');
}

import {E2EPage} from '@stencil/core/testing';

/**
 * Given parameters, returns a promise containing the results of a getBoundingClientRect of a given element.
 *
 * IMPORTANT: this function can only fetch the ClientRect of an element in the light DOM.
 * @param currentPage
 * @param elementCssSelector
 * @todo Add support for shadowDOM
 */
export async function getElementClientRect(
  currentPage: E2EPage,
  elementCssSelector: string
): Promise<ClientRect> {
  return currentPage.evaluate((selector): ClientRect => {
    // This method of getting the client rect feels odd, but it's necessary
    // If not done like this, there is some issue with Puppeteer due to which the returned object is null if done like this:
    // return document.querySelector(selector).getBoundingClientRect();
    // @see https://gist.github.com/emmiep/cd35de612412ac6a283613a438e6acfa
    const {top, left, bottom, right, width, height} = document.querySelector(selector).getBoundingClientRect();
    return {top, left, bottom, right, width, height};
  }, elementCssSelector);
}

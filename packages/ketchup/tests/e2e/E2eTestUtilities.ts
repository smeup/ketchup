import {E2EPage} from '@stencil/core/testing';

/**
 * Given parameters, returns a promise containing the results of a getBoundingClientRect of a given element.
 *
 * IMPORTANT: this function can only fetch the ClientRect of a single element.
 * @param currentPage
 * @param elementCssSelector
 * @version 2
 * @since 2 - Now supports Stencil's >>> selector.
 */
export async function getElementClientRect(
    currentPage: E2EPage,
    elementCssSelector: string
): Promise<ClientRect> {
    return currentPage.evaluate((selector): ClientRect => {
        let clientRectElement;

        // TypeScript guard to narrow the type of the searched element and prevent TS from generating error
        function isShadowRoot (node: HTMLElement | ShadowRoot): node is ShadowRoot {
            return (node as HTMLElement).shadowRoot === undefined;
        }

        // Gets the correct element, traversing shadowDOM if necessary
        const shadowDOMSelector = '>>>';
        if (selector.indexOf(shadowDOMSelector) >= 0) {
            const lightDOMSelectorChunks = selector.split(shadowDOMSelector);
            let currentElement: HTMLElement | ShadowRoot = document.documentElement;
            for (let i = 0; i < lightDOMSelectorChunks.length; i++) {
                currentElement = currentElement.querySelector(lightDOMSelectorChunks[i]);
                // When not the last chunk of the selector
                if (i < lightDOMSelectorChunks.length - 1) {
                    if (currentElement && !isShadowRoot(currentElement)) {
                        currentElement = currentElement.shadowRoot;
                    } else {
                        throw new Error('Invalid selector: the selected element (chunk ' + lightDOMSelectorChunks[i]
                            + ') was not found or one of its nodes does not have shadowRoot!');
                    }
                }
            }

            clientRectElement = currentElement;
        } else {
            clientRectElement = document.querySelector(selector);
        }

        // This method of getting the client rect feels odd, but it's necessary
        // If not done like this, there is some issue with Puppeteer due to which the returned object is null if done like this:
        // return document.querySelector(selector).getBoundingClientRect();
        // @see https://gist.github.com/emmiep/cd35de612412ac6a283613a438e6acfa
        const {top, left, bottom, right, width, height} = clientRectElement.getBoundingClientRect();
        return {top, left, bottom, right, width, height};
    }, elementCssSelector);
}

/**
 * Given a E2E page and a CSS selector, triggers a click on that element
 *
 * IMPORTANT: this function can only fetch the ClientRect of an element in the light DOM.
 * @param currentPage
 * @param elementSelector
 * @returns Boolean true if the element was found and clicked, false otherwise.
 */
export function triggerClick(currentPage: E2EPage, elementSelector: string): Promise<boolean> {
    return currentPage.evaluate((selector: string): boolean => {
        try {
            ((document.querySelector(selector)) as HTMLElement).click();
            return true;
        } catch (e) {
            return false;
        }
    }, elementSelector);
}

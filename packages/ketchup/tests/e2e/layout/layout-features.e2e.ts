import {newE2EPage, E2EPage, E2EElement} from '@stencil/core/testing';

import {
  AutocompleteDisplayMode,
  AutocompleteSortBy,
  AutocompleteSortOrder
} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';


/**
 * The number of elements added to the layout
 * @const
 */
const buttonsCount = 10;

// Composes the content
let content = '<kup-layout>';
for (let i = 0; i < buttonsCount; i++) {
  content += `<button>button ${i.toString()}</button>`;
}
content += '</kup-layout>';

// Common tests variables
let page;
let kupLayout: E2EElement;

/**
 * Given a page and a number of elements, returns all ClientRect objects of the buttons visible in that page LightDOM
 * @param currentPage
 * @param howManyElements
 * @returns Promise<ClientRect[]>
 */
async function fetchClientRects(currentPage: E2EPage, howManyElements: number = buttonsCount): Promise<ClientRect[]> {
  let clientRects: ClientRect[] = [];

  // Gets all buttons and forces the page to get their client rect coordinates.
  for (let i = 0; i < howManyElements; i++) {
    const temp = await currentPage.evaluate((element): ClientRect => {
      const {top, left, bottom, right, width, height} = document.querySelector('button:nth-of-type(' + element + ')').getBoundingClientRect();
      return {top, left, bottom, right, width, height};
    }, i + 1);
    clientRects.push(temp);
  }

  return clientRects;
}

describe('KetchUP layout element', () => {

  // Setup environment for each test
  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent(content);

    await page.waitForChanges();

    kupLayout = await page.find('kup-layout');
  });

  afterEach(() => {
    page = undefined;
  });


  it('can render elements vertically, on a single column', async () => {
    const clientRects = await fetchClientRects(page);

    // To verify all buttons are on a single column, we check that they have same left and right position,
    // but the  top and bottom values of the next button must be greater than the previous one.
    for (let i = 0; i < buttonsCount - 1; i++) {
      expect(clientRects[i].left).toEqual(clientRects[i + 1].left);
      expect(clientRects[i].right).toEqual(clientRects[i + 1].right);
      expect(clientRects[i].bottom).toBeLessThan(clientRects[i + 1].top);
    }
  });


  it('can render elements horizontally on a single line', async () => {
    kupLayout.setProperty('horizontal', true);
    await page.waitForChanges();

    const clientRects = await fetchClientRects(page);

    // Since elements are all on the same line, we expect them to have same top and bottom values
    // but each right side of an element must be <= of the position of the left side of its following element
    for (let i = 0; i < buttonsCount - 1; i++) {
      expect(clientRects[i].top).toEqual(clientRects[i + 1].top);
      expect(clientRects[i].bottom).toEqual(clientRects[i + 1].bottom);
      expect(clientRects[i].right).toBeLessThanOrEqual(clientRects[i + 1].right);
    }
  });


  it('can render elements horizontally, on multiple columns', async () => {
    const columnsQuantity: number = 3;

    kupLayout.setProperty('columnsNumber', columnsQuantity);
    await page.waitForChanges();
    const clientRects = await fetchClientRects(page);

    // Checks each element
    for (let i = 0; i < buttonsCount; i++) {
      const elementHtmlIndex = i + 1;

      // Element is not the last of the set
      if (elementHtmlIndex < columnsQuantity) {

        // Element is not the last of a row
        if (elementHtmlIndex % columnsQuantity !== 0) {
          expect(clientRects[i].top).toEqual(clientRects[i + 1].top);
          expect(clientRects[i].bottom).toEqual(clientRects[i + 1].bottom);
          expect(clientRects[i].right).toBeLessThanOrEqual(clientRects[i + 1].left);
        } else {
          // Element is the last of the row, then the next element must be below it and to the left
          expect(clientRects[i].bottom).toBeLessThanOrEqual(clientRects[i + 1].top);
          expect(clientRects[i].left).toBeLessThanOrEqual(clientRects[i + 1].right);
        }
      }

      // If element is not on the first line, checks that the element above it has the same left and right positioning.
      if (elementHtmlIndex > columnsQuantity) {
        const aboveElement = clientRects[i - columnsQuantity];
        expect(clientRects[i].top).toBeGreaterThanOrEqual(aboveElement.bottom);
        expect(clientRects[i].left).toEqual(aboveElement.left);
        expect(clientRects[i].right).toEqual(aboveElement.right);
      }
    }
  });


  it.skip('supports the fillspace attribute, so element takes all available space on block level', async () => {

  });
});

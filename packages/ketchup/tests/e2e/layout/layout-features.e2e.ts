import {newE2EPage} from '@stencil/core/testing';

import {
  AutocompleteDisplayMode,
  AutocompleteSortBy,
  AutocompleteSortOrder
} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';


describe.skip('KetchUP layout element', () => {

  let page;

  // Setup environment for each test
  beforeEach(async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-autoomplete></kup-autoomplete>');
    const element = await page.find('kup-menu');

    await page.waitForChanges();
  });

  afterEach(() => {
    page = undefined;
  });

  it('can render elements horizontally on a single line', async () => {

  });

  it('can render elements vertically, on a single column', async () => {

  });

  it('can render elements horizontally, on multiple columns', async () => {

  });

  it('supports the fillspace attribute, so element takes all available space on block level', async () => {

  });
});

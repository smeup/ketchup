import {newE2EPage} from '@stencil/core/testing';

import {
  AutocompleteDisplayMode,
  AutocompleteSortBy,
  AutocompleteSortOrder
} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';


describe.skip('KetchUP menu component', () => {

  let page;

  // Setup environment for each test
  beforeEach(async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-menu></kup-menu>');
    const element = await page.find('kup-menu');

    await page.waitForChanges();
  });

  afterEach(() => {
    page = undefined;
  });

  it('must be hidden when inactive', async () => {

  });

  it('must have position fixed when active', async () => {

  });

  it('when active, it must be always fully visible', async () => {

  });

  describe('must close when',() => {
    it ('user clicks outside of the menu', async () => {

    });

    it ('user scrolls up or down', async () => {

    });

  });
});

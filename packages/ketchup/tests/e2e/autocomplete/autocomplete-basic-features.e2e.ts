import {newE2EPage} from '@stencil/core/testing';

import {
  AutocompleteDisplayMode,
  AutocompleteSortBy,
  AutocompleteSortOrder
} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';


describe.skip('KetchUP autocomplete', () => {

  let page;

  // Setup environment for each test
  beforeEach(async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-autoomplete></kup-autoomplete>');
    const element = await page.find('kup-autocomplete');

    // element.setProperty('data', actionsData);
    /*element.setProperty('rowActions', [
      {
        text: 'Action #1',
        icon: 'mdi mdi-account',
      },
      {
        text: 'Action #2',
        icon: 'mdi mdi-plus',
      },
    ]);
    */

    await page.waitForChanges();
  });

  afterEach(() => {
    page = undefined;
  });

  it('has a title', async () => {

  });

  it('menu can be activated only after a given amount of characters', async () => {

  });

  it('can limit displayed results', async () => {

  });

  it('can have a clear icon button to remove elements', async () => {

  });

  it('has an icon button to open menu', async () => {

  });

  it('can have bot clear and menu icon buttons', async () => {

  });

  it.each([
    ['only the description', AutocompleteDisplayMode.DESCRIPTION],
    ['only the code', AutocompleteDisplayMode.CODE],
    ['both the code and description', AutocompleteDisplayMode.DESCRIPTION_AND_CODE],
  ])('can display %i of an item', async (testDescription: string, displayMode: string) => {

  });

  it('can be disabled', async () => {

  });

  it('can customize placeholder', async () => {

  });

  describe.each([
    ['code', AutocompleteSortBy.CODE],
    ['description', AutocompleteSortBy.DESCRIPTION]
  ])('can sort items by %i', (describeDescription: string, sortBy: string) => {
    it.each([
      ['descending', AutocompleteSortOrder.DESCENDING],
      ['increasing', AutocompleteSortOrder.INCREASING],
    ])('in %i order', async (testDescription: string, sortOrder: string) => {

    });
  });

  it('can force selection of non existent items', async () => {

  });

  describe('with multiple selection activated', () => {
    it('can select more then one result', async () => {

    });

    it('can remove selected values', async () => {

    });
  });

});

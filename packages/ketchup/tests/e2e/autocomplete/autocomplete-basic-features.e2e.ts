import {newE2EPage, E2EElement, E2EPage} from '@stencil/core/testing';

import {
  AutocompleteDisplayMode,
  AutocompleteSortBy,
  AutocompleteSortOrder
} from '../../../src/components/kup-autocomplete/kup-autocomplete-declarations';

import {AutocompleteItemFactory} from './autocomplete__mock-data';

import {
  getAutocompleteClearIcon,
  getAutocompleteInputField,
  getAutocompleteMenuInstance
} from './autocomplete__utilities';

const baseItemsCount = 50;
const baseCode = '01132';
const baseDescription = 'Description';
const basicAutocompleteData = AutocompleteItemFactory(baseItemsCount, baseCode, baseDescription);

let page: E2EPage | undefined;
let autocompleteEl: E2EElement | undefined;

describe('KetchUP autocomplete', () => {

  // Setup environment for each test
  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<kup-autocomplete></kup-autocomplete>');
    autocompleteEl = await page.find('kup-autocomplete');

    await autocompleteEl.setProperty('items', basicAutocompleteData);
    await page.waitForChanges();
  });

  afterEach(() => {
    page = undefined;
    autocompleteEl = undefined;
  });

  it('menu is activated only after a given amount of typed chars', async () => {
    const charsToType = 4;
    await autocompleteEl.setProperty('minimumChars', charsToType);

    const inputField = await getAutocompleteInputField(page);

    let menu: E2EElement;
    let menuStatus: boolean;
    await page.waitForChanges();

    for (let i = 0; i < baseCode.length; i++) {
      await inputField.press(baseCode[i]);
      await page.waitFor(800); // Gives the menu the necessary time to open itself. Check kup-menu docs to control the default time a menu takes to open.
      menu = await getAutocompleteMenuInstance(page);
      menuStatus = await menu.getProperty('isActive');

      // Should be true only when menu is open, that means that it must be open only when typed chars are
      // greater or equal to charsToType
      if (charsToType > i + 1) {
        expect(menuStatus).toBeFalsy();
      } else {
        expect(menuStatus).toBeTruthy();
      }
    }
  }, 15000);

  it('can limit displayed results', async () => {
    const charsToType = 3;
    const limitResults = 5;
    await autocompleteEl.setProperty('minimumChars', charsToType);
    const inputField = await getAutocompleteInputField(page);
    await page.waitForChanges();

    // Types as a normal human would
    for (let i = 0; i < baseCode.length; i++) {
      await inputField.press(baseCode[i]);
      await page.waitFor(200); // Gives the menu the necessary time to open itself. Check kup-menu docs to control the default time a menu takes to open.
    }

    let renderedOptions = await page.findAll('kup-autocomplete >>> .autocomplete__item-list li');
    expect(renderedOptions).toHaveLength(baseItemsCount);

    // Sets the limit of displayed elements
    await autocompleteEl.setProperty('limitResults', limitResults);
    await page.waitForChanges();

    renderedOptions = await page.findAll('kup-autocomplete >>> .autocomplete__item-list li');
    expect(renderedOptions).toHaveLength(limitResults);
  });

  it('can have a clear icon button to remove selected elements', async () => {
    await autocompleteEl.setProperty('showClearIcon', true);
    await page.waitForChanges();
    // Gets the clear button
    const clearIcon = await getAutocompleteClearIcon(page);

    // The clear icon button should be rendered
    expect(clearIcon).toBeDefined();

    const inputField = await getAutocompleteInputField(page);
    await inputField.type(baseCode.substr(0,4), {delay: 150}); // Types as a user would

    await page.waitFor(800); // Waits for menu and debounce to do their job

    // Checks that the menu is open
    const menu = await getAutocompleteMenuInstance(page);
    let menuStatus = await menu.getProperty('isActive');
    await page.waitForChanges();
    expect(menuStatus).toBeTruthy();

    // Triggers the removing of the current filter
    await clearIcon.click();
    await page.waitFor(800);

    // Since the filter should be gone, we check that the menu is now closed
    menuStatus = await menu.getProperty('isActive');
    await page.waitForChanges();
    expect(menuStatus).toBeFalsy();
  }, 10000);

  it('can have an icon button to toggle the menu state (open / closed)', async () => {
    await autocompleteEl.setProperty('showDropdownIcon', true);
    await page.waitForChanges();

    // Controls that the icon has been rendered
    const toggleMenuIcon = await page.find('kup-autocomplete >>> .autocomplete__menu-toggle-icon');
    expect(toggleMenuIcon).toBeDefined();

    // Controls that initially the menu is closed
    const menu = await getAutocompleteMenuInstance(page);
    let menuStatus = await menu.getProperty('isActive');
    await page.waitForChanges();
    expect(menuStatus).toBeFalsy();

    // After one click, the menu should be open
    await toggleMenuIcon.click();
    await page.waitForChanges();
    menuStatus = await menu.getProperty('isActive');
    await page.waitForChanges();
    expect(menuStatus).toBeTruthy();

    // After another click the menu should be closed
    await toggleMenuIcon.click();
    await page.waitForChanges();
    menuStatus = await menu.getProperty('isActive');
    await page.waitForChanges();
    expect(menuStatus).toBeFalsy();
  });

  it('can have both the clear and the menu icon buttons', async () => {
    await autocompleteEl.setProperty('showDropdownIcon', true);
    await autocompleteEl.setProperty('showClearIcon', true);
    await page.waitForChanges();

    const clearIcon = await getAutocompleteClearIcon(page);
    const toggleMenuIcon = await page.find('kup-autocomplete >>> .autocomplete__menu-toggle-icon');

    expect(clearIcon).toBeDefined();
    expect(toggleMenuIcon).toBeDefined();
  });

  it.skip.each([
    ['only the description', AutocompleteDisplayMode.DESCRIPTION],
    ['only the code', AutocompleteDisplayMode.CODE],
    ['both the code and description', AutocompleteDisplayMode.DESCRIPTION_AND_CODE],
  ])('menu items can be displayed %i of an item', async (testDescription: string, displayMode: string) => {

  });

  it.skip('can be disabled', async () => {

  });

  it.skip('can customize placeholder', async () => {

  });

  describe.skip.each([
    ['code', AutocompleteSortBy.CODE],
    ['description', AutocompleteSortBy.DESCRIPTION]
  ])('can sort items by %i', (describeDescription: string, sortBy: string) => {
    it.each([
      ['descending', AutocompleteSortOrder.DECREASING],
      ['increasing', AutocompleteSortOrder.INCREASING],
    ])('in %i order', async (testDescription: string, sortOrder: string) => {

    });
  });

  it.skip('can force selection of non existent items', async () => {

  });

  describe.skip('with multiple selection activated', () => {
    it('can select more then one result', async () => {

    });

    it('can remove selected values', async () => {

    });
  });

});

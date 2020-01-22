import {E2EElement, newE2EPage} from '@stencil/core/testing';
import {Components} from "../../../src/components";
import {getElementClientRect,triggerClick} from '../E2eTestUtilities';

//---- Define menu contents ----
const contentItemsNumber = 20;
const activatorId = '#activator';
let menuContentItems = '<ul>';
for (let j = 0; j < contentItemsNumber; j++ ) {
  menuContentItems += `<li>Item number ${j}</li>`;
}
menuContentItems += '</ul>';

//---- Define control functions ----

async function menuIsOpen(menuItem: E2EElement): Promise<boolean> {
  const menuStyle = await menuItem.getComputedStyle();
  return (menuStyle.position === 'fixed') && (menuStyle.visibility === 'visible');
}

async function menuIsClosed(menuItem: E2EElement): Promise<boolean> {
  const menuStyle = await menuItem.getComputedStyle();
  return menuStyle.visibility === 'hidden';
}

let page;
let element;
let triggerButton;

describe('KetchUP menu component', () => {

  describe('basic features', () => {

    beforeEach(async () => {
      page = await newE2EPage();

      // Creates content
      await page.setContent('<button id="' + (activatorId.replace('#', '')) + '">Click me to trigger the menu<kup-menu>' + menuContentItems + '</kup-menu></button><div id="scroller"></div>');
      element = await page.find('kup-menu');
      await page.waitForChanges();

      // Sets up the handlers
      await page.evaluate((buttonSelector) => {
        document.querySelector(buttonSelector).addEventListener('click', function() {
          // TODO find a way to remove this as any declaration
          const menu = (document.querySelector('kup-menu')) as Components.KupMenu;
          menu.isActive = !menu.isActive;
        });
      }, activatorId);

      triggerButton = await page.find(activatorId);
    });

    afterEach(() => {
      page = undefined;
      element = undefined;
      triggerButton = undefined;
    });


    it('must be hidden when inactive', async () => {
      const isClosed = await menuIsClosed(element);

      expect(isClosed).toBeTruthy();
    });


    it('must be visible and have position fixed when active', async () => {
      await triggerClick(page, activatorId);
      await page.waitForChanges();
      const isOpen = await menuIsOpen(element);

      expect(isOpen).toBeTruthy();
    }, 10000);


    it.skip('when active, it must be always fully visible', async () => {
      /*
      * I've tried to get a grasp on how to do this test.
      * The answer is that this feature probably does not need to be tested, for a bunch of different motivations:
      * 1 - there is no way to simulate all the things a menu user can do which will interfere with the visibility of the component.
      * 2 - Testing if any element of a web page is covering this element is quite impossible:
      *     it would probably mean to create a bunch of random elements and check if they hover or cover, partially or totally,
      *     the menu. But the uer can always find a way to place an element on top of it.
      * 3 - Other libraries do not run a test of this type for their similar component.
      * */
    });

    describe('must close when closeOnOuterClick is true and',() => {
      it('user clicks outside of the menu', async () => {
        // Opens the menu
        await triggerClick(page, activatorId);
        await page.waitForChanges();
        const menuRect = await getElementClientRect(page,'kup-menu');

        // Moves mouse
        await page.mouse.click(Math.round(menuRect.right) + 20, Math.round(menuRect.bottom) + 20);
        // Necessary to wwait for the transition of the element to be completed.
        await page.waitFor(1000);

        const isClosed = await menuIsClosed(element);

        expect(isClosed).toBeTruthy();
      });


      it('user scrolls the main document', async () => {
        // Styles the div to make it big enough to enable a page scroll
        await page.addStyleTag({
          content: `
            #scroller {
              background-color: red;
              display: block;
              height: 1500px;
              width: 200px;
            }
          `
        });
        await page.waitForChanges();

        // Opens the menu
        await triggerClick(page, activatorId);
        await page.waitForChanges();
        await page.waitFor(1000);

        // Scrolls page
        // https://github.com/puppeteer/puppeteer/issues/305
        // Using the scroll on the document element does not work
        await page.evaluate(() => {
          window.scrollBy(0, window.innerHeight);
        });
        await page.waitFor(1000);

        // Checks if closed
        const isClosed = await menuIsClosed(element);
        expect(isClosed).toBeTruthy();
      }, 10000);


      it('user presses the "Escape" button', async () => {
        // Opens the menu
        await triggerClick(page, activatorId);
        await page.waitForChanges();
        await page.waitFor(1000);

        // Closes the menu by pressing escape
        await page.keyboard.press('Escape');
        await page.waitFor(1000);

        // Checks if closed
        const isClosed = await menuIsClosed(element);
        expect(isClosed).toBeTruthy();
      }, 10000);
    });
  });
});

import { newE2EPage } from '@stencil/core/testing';

const alignRight = 'align-right';
const alignLeft = 'align-left';
const fillspace = 'fillspace';
const flat = 'flat-btn';
const rounded = 'rounded';
const transparent = 'transparent';

describe('ketchup-button', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-button></ketchup-button>');
        const element = await page.find('ketchup-button');
        expect(element).toHaveClass('hydrated');
    });

    it('testing default', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-button></ketchup-button>');

        const buttonText = await page.find(
            'ketchup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();

        const buttonIcon = await page.find(
            'ketchup-button >>> button .button-icon'
        );
        expect(buttonIcon).toBeNull();

        // testing default classes
        const button = await page.find('ketchup-button >>> button');

        expect(button).toBeTruthy();

        expect(button).not.toHaveClasses([
            flat,
            fillspace,
            rounded,
            transparent,
            alignRight,
            alignLeft,
        ]);

        // no title
        expect(button.getAttribute('title')).toEqual('');
    });

    it('should have text and icon', async () => {
        const page = await newE2EPage();

        const iconClass = 'mdi mdi-account';

        await page.setContent(
            `<ketchup-button label="Pippo" icon-class="${iconClass}"></ketchup-button>`
        );

        const buttonText = await page.find(
            'ketchup-button >>> button .button-text'
        );
        expect(buttonText).toEqualText('Pippo');

        const buttonIcon = await page.find(
            'ketchup-button >>> button .button-icon'
        );

        expect(buttonIcon.className).toEqual('button-icon ' + iconClass);
    });

    it('should be flat', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-button flat></ketchup-button>');

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(flat);
    });

    it('should have a custom class', async () => {
        const page = await newE2EPage();
        const buttonClass = 'my-custom-class';

        await page.setContent(
            `<ketchup-button button-class="${buttonClass}"></ketchup-button>`
        );

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(buttonClass);
    });

    it('has fillspace class', async () => {
        const page = await newE2EPage();

        await page.setContent(`<ketchup-button fillspace></ketchup-button>`);

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(fillspace);
    });

    it('should hide text', async () => {
        const page = await newE2EPage();

        await page.setContent(
            `<ketchup-button showtext="false" label="Pippo"></ketchup-button>`
        );

        const buttonText = await page.find(
            'ketchup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();
    });

    it('should hide icon', async () => {
        const page = await newE2EPage();

        const iconClass = 'mdi mdi-account';

        await page.setContent(
            `<ketchup-button showicon="false" icon-class="${iconClass}"></ketchup-button>`
        );

        const buttonIcon = await page.find(
            'ketchup-button >>> button .button-icon'
        );
        expect(buttonIcon).toBeNull();
    });

    it('should be rounded', async () => {
        const page = await newE2EPage();

        await page.setContent(`<ketchup-button rounded></ketchup-button>`);

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(rounded);
    });

    it('textmode hint', async () => {
        const page = await newE2EPage();

        const label = 'Pippo';

        await page.setContent(
            `<ketchup-button label="${label}" textmode="Hint"></ketchup-button>`
        );

        const button = await page.find('ketchup-button >>> button');
        expect(button).not.toBeNull();
        expect(button.getAttribute('title')).toEqual(label);

        const buttonText = await page.find(
            'ketchup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();
    });

    it('should be transparent', async () => {
        const page = await newE2EPage();

        await page.setContent(`<ketchup-button transparent></ketchup-button>`);

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(transparent);
    });

    it('should be right aligned', async () => {
        const page = await newE2EPage();

        await page.setContent(
            `<ketchup-button align="right"></ketchup-button>`
        );

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(alignRight);
    });

    it('should be left aligned', async () => {
        const page = await newE2EPage();

        await page.setContent(`<ketchup-button align="left"></ketchup-button>`);

        const button = await page.find('ketchup-button >>> button');
        expect(button).toHaveClass(alignLeft);
    });

    it.skip('should trigger click', async () => {
        const page = await newE2EPage();

        await page.setContent(`<ketchup-button data-id="2"></ketchup-button>`);

        const kupBtnClicked = await page.spyOnEvent('ketchupButtonClicked');

        const button = await page.find('ketchup-button >>> button');
        expect(button).not.toBeNull();

        // TODO how to trigger click?
        await button.click();

        await page.waitForChanges();

        expect(kupBtnClicked).toHaveReceivedEventDetail({
            id: '2',
        });
    });
});

import { newE2EPage } from '@stencil/core/testing';

const alignRight = 'align-right';
const alignLeft = 'align-left';
const fillspace = 'fillspace';
const flat = 'flat-btn';
const rounded = 'rounded';
const transparent = 'transparent';

describe('kup-button', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-button></kup-button>');
        const element = await page.find('kup-button');
        expect(element).toHaveClass('hydrated');
    });

    it('testing default', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-button></kup-button>');

        const buttonText = await page.find(
            'kup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();

        const buttonIcon = await page.find(
            'kup-button >>> button .button-icon'
        );
        expect(buttonIcon).toBeNull();

        // testing default classes
        const button = await page.find('kup-button >>> button');

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
            `<kup-button label="Pippo" icon-class="${iconClass}"></kup-button>`
        );

        const buttonText = await page.find(
            'kup-button >>> button .button-text'
        );
        expect(buttonText).toEqualText('Pippo');

        const buttonIcon = await page.find(
            'kup-button >>> button .button-icon'
        );

        expect(buttonIcon.className).toEqual('button-icon ' + iconClass);
    });

    it('should be flat', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-button flat></kup-button>');

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(flat);
    });

    it('should have a custom class', async () => {
        const page = await newE2EPage();
        const buttonClass = 'my-custom-class';

        await page.setContent(
            `<kup-button button-class="${buttonClass}"></kup-button>`
        );

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(buttonClass);
    });

    it('has fillspace class', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button fillspace></kup-button>`);

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(fillspace);
    });

    it('should hide text', async () => {
        const page = await newE2EPage();

        await page.setContent(
            `<kup-button showtext="false" label="Pippo"></kup-button>`
        );

        const buttonText = await page.find(
            'kup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();
    });

    it('should hide icon', async () => {
        const page = await newE2EPage();

        const iconClass = 'mdi mdi-account';

        await page.setContent(
            `<kup-button showicon="false" icon-class="${iconClass}"></kup-button>`
        );

        const buttonIcon = await page.find(
            'kup-button >>> button .button-icon'
        );
        expect(buttonIcon).toBeNull();
    });

    it('should be rounded', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button rounded></kup-button>`);

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(rounded);
    });

    it('textmode hint', async () => {
        const page = await newE2EPage();

        const label = 'Pippo';

        await page.setContent(
            `<kup-button label="${label}" textmode="Hint"></kup-button>`
        );

        const button = await page.find('kup-button >>> button');
        expect(button).not.toBeNull();
        expect(button.getAttribute('title')).toEqual(label);

        const buttonText = await page.find(
            'kup-button >>> button .button-text'
        );
        expect(buttonText).toBeNull();
    });

    it('should be transparent', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button transparent></kup-button>`);

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(transparent);
    });

    it('should be right aligned', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button align="right"></kup-button>`);

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(alignRight);
    });

    it('should be left aligned', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button align="left"></kup-button>`);

        const button = await page.find('kup-button >>> button');
        expect(button).toHaveClass(alignLeft);
    });

    it.skip('should trigger click', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-button data-id="2"></kup-button>`);

        const kupBtnClicked = await page.spyOnEvent('ketchupButtonClicked');

        const button = await page.find('kup-button >>> button');
        expect(button).not.toBeNull();

        // TODO how to trigger click?
        await button.click();

        await page.waitForChanges();

        expect(kupBtnClicked).toHaveReceivedEventDetail({
            id: '2',
        });
    });
});

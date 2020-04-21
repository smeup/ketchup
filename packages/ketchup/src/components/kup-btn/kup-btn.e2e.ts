import { newE2EPage } from '@stencil/core/testing';

describe('kup-btn', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');
        const element = await page.find('kup-btn');
        expect(element).toHaveClass('hydrated');
    });

    it('testing no buttons', async () => {
        // no buttons, no config
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const buttons = await page.findAll('kup-btn >>> kup-button');
        expect(buttons).toHaveLength(0);
    });

    it('renders buttons with only text', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const btn = await page.find('kup-btn');

        const buttons = [
            {
                value: 'Btn #1',
            },
            {
                value: 'Btn #2',
            },
        ];

        btn.setProperty('buttons', buttons);

        await page.waitForChanges();

        const rows = await page.findAll('kup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(buttons.length);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const kupBtn = await row.find('kup-button');
            expect(kupBtn).toHaveAttribute('data-id');

            /** non ha una classe */
            //expect(kupBtn).toHaveClass('fillspace');

            const button = await row.find('kup-button >>> button');
            expect(button).not.toBeNull();

            // testint text
            const text = await button.find('.mdc-button__label');
            expect(text).not.toBeNull();
            expect(text).toEqualText(buttons[i].value);

            // testing icon
            const icon = await button.find('kup-image >>> div > svg');
            expect(icon).toBeNull();

            expect(button).toHaveClasses(['kup-button', 'mdc-button']);
            // no title
            expect(button.getAttribute('title')).toBeNull();
        }
    });

    it('renders buttons with icons', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const btn = await page.find('kup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                icon: 'grid_on',
            },
            {
                value: 'Btn #2',
                icon: 'grid_off',
            },
        ];

        btn.setProperty('buttons', buttons);

        await page.waitForChanges();

        const rows = await page.findAll('kup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(buttons.length);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const kupBtn = await row.find('kup-button');
            expect(kupBtn).toHaveAttribute('data-id');

            /** non ha una classe */
            //expect(kupBtn).toHaveClass('fillspace');

            const button = await row.find('kup-button >>> button');
            expect(button).not.toBeNull();

            // testint text
            const text = await button.find('.mdc-button__label');
            expect(text).not.toBeNull();
            expect(text).toEqualText(buttons[i].value);

            // testing icon
            const icon = await button.find('kup-image >>> div');
            expect(icon).not.toBeNull();
            //expect(icon.innerHTML).toContain(buttons[i].icon);

            expect(button).toHaveClasses(['kup-button', 'mdc-button']);
            // no title
            expect(button.getAttribute('title')).toBeNull();
        }
    });

    it('renders buttons in columns', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const btn = await page.find('kup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                icon: 'grid_on',
            },
            {
                value: 'Btn #2',
                icon: 'grid_off',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
        });

        await page.waitForChanges();

        const rows = await page.findAll('kup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(1);

        const cells = await rows[0].findAll('td');
        expect(cells).toHaveLength(2);

        for (let i = 0; i < cells.length; i++) {
            const kupBtn = await cells[i].find('kup-button');
            expect(kupBtn).not.toBeNull();
        }
    });

    it('columns vs horizontal: columns should win', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const btn = await page.find('kup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                icon: 'grid_on',
            },
            {
                value: 'Btn #2',
                icon: 'grid_off',
            },
            {
                value: 'Btn #3',
                iconClass: 'hdr_on',
            },
            {
                value: 'Btn #4',
                iconClass: 'hdr_off',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
            horizontal: true,
        });

        await page.waitForChanges();

        const rows = await page.findAll('kup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(2);

        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].findAll('td');
            expect(cells).toHaveLength(2);

            for (let j = 0; j < cells.length; j++) {
                const kupBtn = await cells[j].find('kup-button');
                expect(kupBtn).not.toBeNull();
            }
        }
    });

    it('columns with fillspace', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<kup-btn></kup-btn>');

        const btn = await page.find('kup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                icon: 'grid_on',
            },
            {
                value: 'Btn #2',
                icon: 'grid_off',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
            fillspace: true,
        });

        await page.waitForChanges();

        const table = await page.find('kup-btn >>> table');
        expect(table).toHaveClass('fillspace');

        const rows = await table.findAll('tbody > tr');
        expect(rows).toHaveLength(1);

        const cells = await rows[0].findAll('td');
        expect(cells).toHaveLength(2);

        for (let i = 0; i < cells.length; i++) {
            const kupBtn = await cells[i].find('kup-button');
            expect(kupBtn).not.toBeNull();
            //expect(kupBtn).toHaveAttribute('full-width');
        }
    });
});

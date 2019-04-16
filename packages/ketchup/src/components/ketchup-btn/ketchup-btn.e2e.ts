import { newE2EPage } from '@stencil/core/testing';

describe('ketchup-btn', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');
        const element = await page.find('ketchup-btn');
        expect(element).toHaveClass('hydrated');
    });

    it('testing no buttons', async () => {
        // no buttons, no config
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const buttons = await page.findAll('ketchup-btn >>> ketchup-button');
        expect(buttons).toHaveLength(0);
    });

    it('renders buttons with only text', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const btn = await page.find('ketchup-btn');

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

        const rows = await page.findAll('ketchup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(buttons.length);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const kupBtn = await row.find('ketchup-button');

            expect(kupBtn).toHaveClass('fillspace');

            const button = await row.find('ketchup-button >>> button');
            expect(button).not.toBeNull();

            // testint text
            const text = await button.find('.button-text');
            expect(text).not.toBeNull();
            expect(text).toEqualText(buttons[i].value);

            // testing icon
            const icon = await button.find('.button-icon');
            expect(icon).toBeNull();

            // no classes
            expect(button.getAttribute('class')).toEqual('');

            // no title
            expect(button.getAttribute('title')).toEqual('');
        }
    });

    it('renders buttons with icons', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const btn = await page.find('ketchup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                iconClass: 'mdi mdi-xxx',
            },
            {
                value: 'Btn #2',
                iconClass: 'mdi mdi-yyy',
            },
        ];

        btn.setProperty('buttons', buttons);

        await page.waitForChanges();

        const rows = await page.findAll('ketchup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(buttons.length);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const kupBtn = await row.find('ketchup-button');

            expect(kupBtn).toHaveClass('fillspace');

            const button = await row.find('ketchup-button >>> button');
            expect(button).not.toBeNull();

            // testint text
            const text = await button.find('.button-text');
            expect(text).not.toBeNull();
            expect(text).toEqualText(buttons[i].value);

            // testing icon
            const icon = await button.find('.button-icon');
            expect(icon).not.toBeNull();
            expect(icon).toHaveClasses(buttons[i].iconClass.split(' '));

            // no classes
            expect(button.getAttribute('class')).toEqual('');

            // no title
            expect(button.getAttribute('title')).toEqual('');
        }
    });

    it('renders buttons in columns', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const btn = await page.find('ketchup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                iconClass: 'mdi mdi-xxx',
            },
            {
                value: 'Btn #2',
                iconClass: 'mdi mdi-yyy',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
        });

        await page.waitForChanges();

        const rows = await page.findAll('ketchup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(1);

        const cells = await rows[0].findAll('td');
        expect(cells).toHaveLength(2);

        for (let i = 0; i < cells.length; i++) {
            const kupBtn = await cells[i].find('ketchup-button');
            expect(kupBtn).not.toBeNull();
        }
    });

    it('columns vs horizontal: columns should win', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const btn = await page.find('ketchup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                iconClass: 'mdi mdi-xxx',
            },
            {
                value: 'Btn #2',
                iconClass: 'mdi mdi-yyy',
            },
            {
                value: 'Btn #3',
                iconClass: 'mdi mdi-zzz',
            },
            {
                value: 'Btn #4',
                iconClass: 'mdi mdi-aaa',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
            horizontal: true,
        });

        await page.waitForChanges();

        const rows = await page.findAll('ketchup-btn >>> table > tbody > tr');
        expect(rows).toHaveLength(2);

        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].findAll('td');
            expect(cells).toHaveLength(2);

            for (let j = 0; j < cells.length; j++) {
                const kupBtn = await cells[j].find('ketchup-button');
                expect(kupBtn).not.toBeNull();
            }
        }
    });

    it('columns with fillspace', async () => {
        // only buttons
        const page = await newE2EPage();

        await page.setContent('<ketchup-btn></ketchup-btn>');

        const btn = await page.find('ketchup-btn');

        const buttons = [
            {
                value: 'Btn #1',
                iconClass: 'mdi mdi-xxx',
            },
            {
                value: 'Btn #2',
                iconClass: 'mdi mdi-yyy',
            },
        ];

        btn.setProperty('buttons', buttons);
        btn.setProperty('config', {
            columns: 2,
            fillspace: true,
        });

        await page.waitForChanges();

        const table = await page.find('ketchup-btn >>> table');
        expect(table).toHaveClass('fillspace');

        const rows = await table.findAll('tbody > tr');
        expect(rows).toHaveLength(1);

        const cells = await rows[0].findAll('td');
        expect(cells).toHaveLength(2);

        for (let i = 0; i < cells.length; i++) {
            const kupBtn = await cells[i].find('ketchup-button');
            expect(kupBtn).not.toBeNull();
            expect(kupBtn).toHaveClass('fillspace');
        }
    });
});

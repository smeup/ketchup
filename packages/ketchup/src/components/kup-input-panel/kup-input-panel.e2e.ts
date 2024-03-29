import { newE2EPage } from '@stencil/core/testing';

describe('kup-input-panel', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const element = await page.find('kup-input-panel');
        expect(element).toHaveClass('hydrated');
    });

    it('renders 2 text field with labels', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'NAM',
                    title: 'Name',
                    visible: true,
                },
                {
                    name: 'SUR',
                    title: 'Surname',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        NAM: {
                            value: '',
                            editable: true,
                            shape: 'ITX',
                        },
                        SUR: {
                            value: '',
                            editable: true,
                            shape: 'ITX',
                        },
                    },
                },
            ],
        };

        inputPanel.setProperty('data', data);

        await page.waitForChanges();

        const inputPanelContent = await page.find(
            'kup-input-panel >>> form.input-panel'
        );
        expect(inputPanelContent).not.toBeNull();

        const textFields = await inputPanelContent.findAll(
            '.f-cell.string-cell .f-text-field'
        );
        expect(textFields).toHaveLength(data.columns.length);

        for (const [i, textField] of textFields.entries()) {
            const label = await textField.find('label');
            expect(label).not.toBeNull();
            expect(label).toHaveClass('mdc-floating-label');
            expect(label).toEqualText(data.columns[i].title);

            const input = await textField.find('input');
            expect(label).not.toBeNull();
            const value = await input.getProperty('value');
            expect(value).toBe('');

            await input.press('KeyS');
            await input.press('KeyT');
            await input.press('KeyR');
            await input.press('KeyI');
            await input.press('KeyN');
            await input.press('KeyG');

            const updatedValue = await input.getProperty('value');
            expect(updatedValue).toBe('string');
        }
    });

    it('renders autocomplete', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-input-panel></kup-input-panel> <div kup-dynamic-position></div>'
        );
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'CIT',
                    title: 'City',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        CIT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            editable: true,
                            mandatory: true,
                            options: [
                                'Florence',
                                'Venice',
                                'Rome',
                                'Madrid',
                                'Barcelona',
                                'Seville',
                                'Berlin',
                                'Munich',
                                'Hamburg',
                                'Paris',
                                'Marseille',
                                'Lyon',
                                'Lisbon',
                                'Porto',
                                'Faro',
                                'London',
                                'Manchester',
                                'Liverpool',
                            ],
                            shape: 'ACP',
                        },
                    },
                },
            ],
        };

        inputPanel.setProperty('data', data);

        await page.waitForChanges();

        const inputPanelContent = await page.find(
            'kup-input-panel >>> form.input-panel'
        );
        expect(inputPanelContent).not.toBeNull();

        const autocompleteCell = await inputPanelContent.find(
            '.f-cell.autocomplete-cell'
        );
        expect(autocompleteCell).not.toBeNull();

        const autocompleteTextfield = await autocompleteCell.find(
            'kup-autocomplete >>> div.f-text-field'
        );
        expect(autocompleteTextfield).not.toBeNull();

        const label = await autocompleteTextfield.find('label');
        expect(label).not.toBeNull();
        expect(label).toEqualText(data.columns[0].title);

        const input = await autocompleteTextfield.find('input');
        expect(input).not.toBeNull();

        await input.focus();
        await input.press('KeyR');
        await input.press('KeyO');
        const updatedValue1 = await input.getProperty('value');
        expect(updatedValue1).toBe('ro');

        await page.waitForChanges();
        await page.waitForChanges();

        const list = await page.find('div[kup-dynamic-position] kup-list');
        expect(list).not.toBeNull();

        const listOptions = await page.findAll('kup-list >>> ul.list li');
        expect(listOptions).not.toBeNull();
        expect(listOptions).toHaveLength(2);

        const firstOptionValue = await listOptions[0].find('span');
        expect(firstOptionValue).toEqualText('Rome');
        await firstOptionValue.click();

        const updatedValue = await input.getProperty('value');
        expect(updatedValue).toBe('Rome');
    });
});

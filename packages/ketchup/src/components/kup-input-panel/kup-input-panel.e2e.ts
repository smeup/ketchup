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
            expect(input).not.toBeNull();
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

    it('renders combobox', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-input-panel></kup-input-panel> <div kup-dynamic-position></div>'
        );
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'NAT',
                    title: 'Nation',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        NAT: {
                            value: '',
                            options: [
                                'Italy',
                                'Spain',
                                'Germany',
                                'France',
                                'Portugal',
                                'England',
                            ],
                            editable: true,
                            shape: 'CMB',
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

        const comboCell = await inputPanelContent.find('.f-cell.combobox-cell');
        expect(comboCell).not.toBeNull();

        const comboTextfield = await comboCell.find(
            'kup-combobox >>> div.f-text-field'
        );
        expect(comboTextfield).not.toBeNull();

        const label = await comboTextfield.find('label');
        expect(label).not.toBeNull();
        expect(label).toEqualText(data.columns[0].title);

        const input = await comboTextfield.find('input');
        expect(input).not.toBeNull();

        const icon = await comboTextfield.find(
            'span.kup-icon.kup-dropdown-icon'
        );
        expect(icon).not.toBeNull();

        await icon.click();

        await page.waitForChanges();
        await page.waitForChanges();

        const list = await page.find('div[kup-dynamic-position] kup-list');
        expect(list).not.toBeNull();

        const listOptions = await page.findAll('kup-list >>> ul.list li');
        expect(listOptions).not.toBeNull();
        expect(listOptions).toHaveLength(data.rows[0].cells.NAT.options.length);

        const firstOptionValue = await listOptions[0].find('span');
        expect(firstOptionValue).toEqualText('Italy');
        await firstOptionValue.click();

        const updatedValue = await input.getProperty('value');
        expect(updatedValue).toBe('Italy');
    });

    it('renders checkbox', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'CHK',
                    title: 'Checkbox',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        CHK: {
                            value: 'off',
                            editable: true,
                            shape: 'CHK',
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

        const checkboxCell = await inputPanelContent.find(
            '.f-cell.checkbox-cell'
        );
        expect(checkboxCell).not.toBeNull();

        const label = await checkboxCell.find('label');
        expect(label).not.toBeNull();
        expect(label).toEqualText(data.columns[0].title);

        const input = await checkboxCell.find('input');
        expect(input).not.toBeNull();

        const value = await input.getProperty('value');
        expect(value).toBe('off');
    });

    it('renders radio buttons', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'RAD',
                    title: 'Radio Buttons',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        RAD: {
                            value: '1',
                            options: ['1', '2', '3', '4'],
                            editable: true,
                            shape: 'RAD',
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

        const radioButtonsCell = await inputPanelContent.find(
            '.f-cell.radio-cell'
        );
        expect(radioButtonsCell).not.toBeNull();

        const radioOptions = data.rows[0].cells.RAD.options;
        const radioButtons = await radioButtonsCell.findAll('div.form-field');
        expect(radioButtons).toHaveLength(radioOptions.length);

        for (const [i, radioButton] of radioButtons.entries()) {
            const label = await radioButton.find('label');
            expect(label).not.toBeNull();
            expect(label).toEqualText(radioOptions[i]);

            const input = await radioButton.find('input');
            expect(input).not.toBeNull();

            const value = await input.getProperty('value');
            expect(value).toBe(radioOptions[i]);

            if (data.rows[0].cells.RAD.value === radioOptions[i]) {
                const radioButtonCircle = await radioButton.find('div.radio');
                expect(radioButtonCircle).toHaveClass('radio--checked');
            }
        }
    });
});

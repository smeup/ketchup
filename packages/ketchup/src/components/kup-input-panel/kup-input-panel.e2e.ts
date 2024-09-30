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
            expect(label).toHaveClass('mdc-label');
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
                                {
                                    id: 'FLO',
                                    label: 'Florence',
                                },
                                {
                                    id: 'VEN',
                                    label: 'Venice',
                                },
                                {
                                    id: 'ROM',
                                    label: 'Rome',
                                },
                                {
                                    id: 'MAD',
                                    label: 'Madrid',
                                },
                                {
                                    id: 'BAR',
                                    label: 'Barcelona',
                                },
                                {
                                    id: 'SEV',
                                    label: 'Seville',
                                },
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

        const autocompleteShadow = await autocompleteCell.find(
            'kup-autocomplete'
        );
        const autocompleteTextfield = await autocompleteShadow.find(
            '>>> div.f-text-field'
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
        expect(listOptions).toHaveLength(1);

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
                                {
                                    id: 'ITA',
                                    label: 'Italy',
                                },
                                {
                                    id: 'SPA',
                                    label: 'Spain',
                                },
                                {
                                    id: 'GER',
                                    label: 'Germany',
                                },
                                {
                                    id: 'FRA',
                                    label: 'France',
                                },
                                {
                                    id: 'POR',
                                    label: 'Portugal',
                                },
                                {
                                    id: 'ENG',
                                    label: 'England',
                                },
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

        const comboShadow = await comboCell.find('kup-combobox');
        const comboTextfield = await comboShadow.find('>>> div.f-text-field');

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

        await input.click();

        const updatedValue = await input.getProperty('value');
        expect(updatedValue).toBe('on');
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
                            options: [
                                {
                                    id: '1',
                                    label: 'One',
                                },
                                {
                                    id: '2',
                                    label: 'Two',
                                },
                                {
                                    id: '3',
                                    label: 'Three',
                                },
                                {
                                    id: '4',
                                    label: 'Four',
                                },
                            ],
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
            expect(label).toEqualText(radioOptions[i].label);

            const input = await radioButton.find('input');
            expect(input).not.toBeNull();

            const value = await input.getProperty('value');
            expect(value).toBe(radioOptions[i].id);

            if (data.rows[0].cells.RAD.value === value) {
                const radioButtonCircle = await radioButton.find('div.radio');
                expect(radioButtonCircle).toHaveClass('radio--checked');
            }
        }

        const newRadioButtonChecked = await radioButtons[2].find('div.radio');

        await newRadioButtonChecked.click();

        await page.waitForChanges();

        const updatedRadioButtons = await radioButtonsCell.findAll(
            'div.form-field'
        );
        const updateRadioButtonChecked = await updatedRadioButtons[2].find(
            'div.radio '
        );
        expect(updateRadioButtonChecked).toHaveClass('radio--checked');
    });

    xit('renders table', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'DAT',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT: {
                            value: null,
                            editable: true,
                            shape: 'TBL',
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
        const tableShadow = await inputPanelContent.find('kup-data-table');

        const tableComponent = await tableShadow.find('>>> table');
        expect(tableComponent).not.toBeNull();

        const emptyRow = await tableComponent.find(
            'tbody tr:first-child td:first-child'
        );
        expect(emptyRow.textContent).toBe('Empty data.');
    });

    it('renders table 2 col 1 row', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const col1Title = 'Column 1';
        const col1Name = 'COL1';
        const col1Value = 'Row 1 column 1';
        const col2Title = 'Column 2';
        const col2Name = 'COL2';
        const col2Value = 'Row 1 column 2';
        const tableData = {
            type: 'SmeupDataTable',
            columns: [
                {
                    name: col1Name,
                    title: col1Title,
                },
                {
                    editable: false,
                    name: col2Name,
                    title: col2Title,
                },
            ],
            rows: [
                {
                    cells: {
                        COL1: {
                            value: col1Value,
                        },
                        COL2: {
                            value: col2Value,
                        },
                    },
                },
            ],
        };
        const data = {
            columns: [
                {
                    name: 'DAT1',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT1: {
                            value: JSON.stringify(tableData),
                            editable: true,
                            shape: 'TBL',
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
        const tableShadow = await inputPanelContent.find('kup-data-table');

        const tableComponent = await tableShadow.find('>>> table');
        expect(tableComponent).not.toBeNull();

        const thead1Col = await tableComponent.find(
            'thead tr:first-child th:first-child'
        );
        expect(thead1Col).toEqualAttribute('data-column', col1Name);

        const thead1stColCell = await thead1Col.find(
            'div.header-cell__content span.header-cell__title'
        );
        expect(thead1stColCell.textContent).toBe(col1Title);

        const thead2Col = await tableComponent.find(
            'thead tr:first-child th:nth-of-type(2)'
        );
        expect(thead2Col).toEqualAttribute('data-column', col2Name);

        const thead2ndColcell = await thead2Col.find(
            'div.header-cell__content span.header-cell__title'
        );
        expect(thead2ndColcell.textContent).toBe(col2Title);

        const tbodyRows = await tableComponent.findAll('tbody tr');
        expect(tbodyRows.length).toBe(1);

        const tbody1Col = await tbodyRows[0].find('td:first-child');
        expect(tbody1Col).toEqualAttribute('data-column', col1Name);
        expect(tbody1Col.textContent).toBe(col1Value);

        const tbody2Col = await tbodyRows[0].find('td:nth-of-type(2)');
        expect(tbody2Col).toEqualAttribute('data-column', col2Name);
        expect(tbody2Col.textContent).toBe(col2Value);
    });

    it('renders table with first column editable', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');
        const col1Title = 'Column 1';
        const col1Name = 'COL1';
        const col1Value = 'Row 1 column 1';
        const col1Row2Value = 'Row 2 column 1';
        const col2Title = 'Column 2';
        const col2Name = 'COL2';
        const col2Value = 'Row 1 column 2';
        const col2Row2Value = 'Row 2 column 2';
        const col1Values = [col1Value, col1Row2Value];

        const tableData = {
            type: 'SmeupDataTable',
            columns: [
                {
                    name: col1Name,
                    title: col1Title,
                    isEditable: true,
                },
                {
                    name: col2Name,
                    title: col2Title,
                    isEditable: false,
                },
            ],
            rows: [
                {
                    cells: {
                        COL1: {
                            value: col1Value,
                        },
                        COL2: {
                            value: col2Value,
                        },
                    },
                },
                {
                    cells: {
                        COL1: {
                            value: col1Row2Value,
                        },
                        COL2: {
                            value: col2Row2Value,
                        },
                    },
                },
            ],
        };

        const data = {
            columns: [
                {
                    name: 'DAT2',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT2: {
                            value: JSON.stringify(tableData),
                            editable: true,
                            shape: 'TBL',
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
        const tableShadow = await inputPanelContent.find('kup-data-table');

        const tableComponent = await tableShadow.find('>>> table');
        expect(tableComponent).not.toBeNull();

        const tbodyRows = await tableComponent.findAll('tbody tr');
        expect(tbodyRows.length).toBe(2);

        await Promise.all(
            tbodyRows.map(async (row, i) => {
                const col1 = await row.find('td:first-child');
                expect(col1).toEqualAttribute('data-column', col1Name);

                const colTextField = await col1.find(
                    '.f-cell.string-cell .f-text-field'
                );
                expect(colTextField).not.toBeNull();

                const input = await colTextField.find('input');
                expect(input).not.toBeNull();

                const value = await input.getProperty('value');
                expect(value).toBe(col1Values[i]);
            })
        );
    });

    it('render inputpanel with label shape', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');

        const data = {
            columns: [
                {
                    name: 'LBL',
                    title: 'Label',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        LBL: {
                            value: 'Test',
                            editable: true,
                            shape: 'LBL',
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

        const labelCell = await inputPanelContent.find('#LBL');
        expect(labelCell).not.toBeNull();
    });

    it('render inputpanel with edit shape', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');

        const data = {
            columns: [
                {
                    name: 'DAT1',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT1: {
                            value: '',
                            editable: true,
                            shape: 'EDT',
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

        const editCell = await inputPanelContent.find('kup-editor');
        expect(editCell).not.toBeNull();
    });

    it('render inputpanel with chip shape', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');

        const data = {
            columns: [
                {
                    name: 'DAT1',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT1: {
                            value: 'Test1;Test2',
                            editable: true,
                            shape: 'CHI',
                        },
                    },
                },
            ],
        };

        inputPanel.setProperty('data', data);

        await page.waitForChanges();

        const inputPanelContent = await page.find(
            'kup-input-panel >>> kup-chip >>> #kup-component'
        );
        expect(inputPanelContent).not.toBeNull();

        const chips = await inputPanelContent.findAll('.chip-set__item');
        expect(chips).not.toBeNull();
        expect(chips.length).toBe(2);

        const chip1 = await chips[0].find('.chip__text');
        expect(chip1).not.toBeNull();
        expect(chip1).toEqualText('Test1');

        const chip2 = await chips[1].find('.chip__text');
        expect(chip2).not.toBeNull();
        expect(chip2).toEqualText('Test2');

        const input = await page.find(
            'kup-input-panel >>> kup-text-field >>> input'
        );
        expect(input).not.toBeNull();

        await input.press('KeyS');
        await input.press('KeyT');
        await input.press('KeyR');
        await input.press('KeyI');
        await input.press('KeyN');
        await input.press('KeyG');

        const updatedValue = await input.getProperty('value');
        expect(updatedValue).toBe('string');

        await input.press('Enter');
        const updatedChips = await inputPanelContent.findAll('.chip-set__item');

        expect(updatedChips.length).toBe(3);
    });

    it('render inputpanel with switch shape', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const inputPanel = await page.find('kup-input-panel');

        const data = {
            columns: [
                {
                    name: 'DAT1',
                    visible: true,
                },
            ],
            rows: [
                {
                    cells: {
                        DAT1: {
                            value: '',
                            editable: true,
                            shape: 'SWT',
                        },
                    },
                },
            ],
        };

        inputPanel.setProperty('data', data);

        await page.waitForChanges();

        const inputPanelContent = await page.find(
            'kup-input-panel >>> input[type="checkbox"]'
        );
        expect(inputPanelContent).not.toBeNull();

        inputPanelContent.click();

        await page.waitForChanges();
        const value = await inputPanelContent.getProperty('value');
        expect(value).toBe('on');
    });

    it('render inputpanel with multiple autocomplete shape', async () => {
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
                                {
                                    id: 'FLO',
                                    label: 'Florence',
                                },
                                {
                                    id: 'VEN',
                                    label: 'Venice',
                                },
                                {
                                    id: 'ROM',
                                    label: 'Rome',
                                },
                                {
                                    id: 'MAD',
                                    label: 'Madrid',
                                },
                                {
                                    id: 'BAR',
                                    label: 'Barcelona',
                                },
                                {
                                    id: 'SEV',
                                    label: 'Seville',
                                },
                            ],
                            shape: 'AML',
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

        const multiAutocompleteCell = await inputPanelContent.find(
            '.f-cell.multi-autocomplete-cell'
        );
        expect(multiAutocompleteCell).not.toBeNull();

        const input = await multiAutocompleteCell.find(
            '>>> kup-autocomplete >>> input.mdc-text-field__input'
        );
        expect(input).not.toBeNull();

        const chips = await inputPanelContent.findAll('>>> .chip-set__item');

        if (chips.length) {
            const closeButton = await chips[0].find('.kup-clear-icon');
            expect(closeButton).not.toBeNull();

            closeButton.click();
            await page.waitForChanges();
            const afterClosingChips = await inputPanelContent.findAll(
                '>>> .chip-set__item'
            );
            expect(afterClosingChips.length).toBe(0);
        }

        await input.focus();
        await input.press('KeyR');
        await input.press('KeyO');

        await page.waitForChanges();

        const list = await page.find('div[kup-dynamic-position] kup-list');
        expect(list).not.toBeNull();

        const listOptions = await page.findAll('kup-list >>> ul.list li');
        expect(listOptions).not.toBeNull();
        expect(listOptions).toHaveLength(1);

        const firstOptionValue = await listOptions[0].find('span');
        expect(firstOptionValue).toEqualText('ROM - Rome');
        await firstOptionValue.click();

        await page.waitForChanges();

        await input.focus();
        await input.press('KeyF');
        await input.press('KeyL');

        await page.waitForChanges();

        const updatedListOptions = await page.findAll(
            'kup-list >>> ul.list li'
        );
        const secondOptionValue = await updatedListOptions[0].find('span');
        expect(secondOptionValue).toEqualText('FLO - Florence');
        await secondOptionValue.click();

        await page.waitForChanges();

        const updatedChips = await inputPanelContent.findAll(
            '>>> .chip-set__item'
        );

        expect(updatedChips).not.toBeNull();
        expect(updatedChips.length).toBe(2);
    });

    it('render inputpanel with multiple combo shape', async () => {
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
                                {
                                    id: 'FLO',
                                    label: 'Florence',
                                },
                                {
                                    id: 'VEN',
                                    label: 'Venice',
                                },
                                {
                                    id: 'ROM',
                                    label: 'Rome',
                                },
                                {
                                    id: 'MAD',
                                    label: 'Madrid',
                                },
                                {
                                    id: 'BAR',
                                    label: 'Barcelona',
                                },
                                {
                                    id: 'SEV',
                                    label: 'Seville',
                                },
                            ],
                            shape: 'CML',
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

        const multiComboboxCell = await inputPanelContent.find(
            '.f-cell.multi-combobox-cell'
        );
        expect(multiComboboxCell).not.toBeNull();

        const input = await multiComboboxCell.find(
            '>>> kup-combobox >>> input.mdc-text-field__input'
        );
        expect(input).not.toBeNull();

        const chips = await inputPanelContent.findAll('>>> .chip-set__item');

        if (chips.length) {
            const closeButton = await chips[0].find('.kup-clear-icon');
            expect(closeButton).not.toBeNull();

            closeButton.click();
            await page.waitForChanges();
            const afterClosingChips = await inputPanelContent.findAll(
                '>>> .chip-set__item'
            );
            expect(afterClosingChips.length).toBe(0);
        }

        await input.focus();
        await input.press('KeyR');
        await input.press('KeyO');

        await page.waitForChanges();

        const list = await page.find('div[kup-dynamic-position] kup-list');
        expect(list).not.toBeNull();

        const listOptions = await page.findAll('kup-list >>> ul.list li');
        expect(listOptions).not.toBeNull();
        expect(listOptions).toHaveLength(1);

        const firstOptionValue = await listOptions[0].find('span');
        expect(firstOptionValue).toEqualText('ROM - Rome');
        await firstOptionValue.click();

        await page.waitForChanges();

        await input.focus();
        await input.press('KeyF');
        await input.press('KeyL');

        await page.waitForChanges();

        const updatedListOptions = await page.findAll(
            'kup-list >>> ul.list li'
        );
        const secondOptionValue = await updatedListOptions[0].find('span');
        expect(secondOptionValue).toEqualText('FLO - Florence');
        await secondOptionValue.click();

        await page.waitForChanges();

        const updatedChips = await inputPanelContent.findAll(
            '>>> .chip-set__item'
        );

        expect(updatedChips).not.toBeNull();
        expect(updatedChips.length).toBe(2);
    });

    it('render inputpanel with tab when specified in sectionType property', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-input-panel></kup-input-panel> <div kup-dynamic-position></div>'
        );
        const inputPanel = await page.find('kup-input-panel');
        const data = {
            columns: [
                {
                    name: 'NAME',
                    title: 'Name*',
                    visible: true,
                    isEditable: false,
                },
                {
                    name: 'EMAIL',
                    title: 'Email*',
                    visible: true,
                    isEditable: false,
                },
            ],
            rows: [
                {
                    cells: {
                        EMAIL: {
                            value: '',
                            options: [],
                            editable: true,
                            mandatory: true,
                            shape: 'ITX',
                            data: {
                                inputType: 'email',
                            },
                        },
                        NAME: {
                            value: '',
                            options: [],
                            editable: true,
                            mandatory: true,
                            shape: 'ITX',
                            data: {},
                        },
                    },
                    layout: {
                        type: 'SmeupDataLayout',
                        horizontal: false,
                        absolute: false,
                        sections: [
                            {
                                id: 'TAB1',
                                content: [
                                    {
                                        options: [],
                                        editable: false,
                                        mandatory: false,
                                        id: 'NAME',
                                        colSpan: 1,
                                        rowStart: 1,
                                    },
                                    {
                                        options: [],
                                        editable: false,
                                        mandatory: false,
                                        id: 'EMAIL',
                                        colSpan: 1,
                                        rowStart: 2,
                                    },
                                ],
                                sections: [],
                                horizontal: false,
                                gridCols: 3,
                                gridRows: 2,
                                gap: 2,
                                title: 'Personal Info',
                            },
                            {
                                id: 'TAB2',
                                content: [
                                    {
                                        options: [],
                                        editable: false,
                                        mandatory: false,
                                        id: 'NAME',
                                        colSpan: 1,
                                        rowStart: 1,
                                    },
                                    {
                                        options: [],
                                        editable: false,
                                        mandatory: false,
                                        id: 'EMAIL',
                                        colSpan: 1,
                                        rowStart: 2,
                                    },
                                ],
                                sections: [],
                                horizontal: false,
                                gridCols: 3,
                                gridRows: 2,
                                gap: 2,
                                title: 'Professional Info',
                            },
                        ],
                        sectionsType: 'tab',
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

        const tabContent = await inputPanelContent.find('kup-tab-bar');
        expect(tabContent).not.toBeNull();

        const tabs = await tabContent.findAll('>>> f-button');

        expect(tabs.length).toBe(2);

        const label1 = (await tabs[0].find('span .tab__text-label')).innerHTML;
        const label2 = (await tabs[1].find('span .tab__text-label')).innerHTML;
        console.log('LABEL', label1, label2);

        expect(label1).toBe('Personal Info');
        expect(label2).toBe('Professional Info');
    });
});

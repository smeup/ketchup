const objData = {
    columns: [
        {
            name: 'FLD1',
            title: 'Icon',
            size: '',
        },
        {
            name: 'FLD2',
            title: 'Image',
            size: '',
        },
        {
            name: 'FLD3',
            title: 'Url',
            size: '',
        },
        {
            name: 'FLD4',
            title: 'VO COD_VER',
            size: '',
        },
        {
            name: 'FLD5',
            title: 'Graphic cell',
            size: '',
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'ICO',
                        k: '1234567',
                    },
                    data: {
                        resource: 'account',
                    },
                    value: 'account',
                },
                FLD2: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: '1234567',
                    },
                    data: {
                        resource: 'https://i.imgur.com/mtbl1cr.jpg',
                    },
                    value: 'https://i.imgur.com/mtbl1cr.jpg',
                },
                FLD3: {
                    obj: {
                        t: 'J1',
                        p: 'URL',
                        k: 'https://www.google.com',
                    },
                    value: 'https://www.google.com',
                },
                FLD4: {
                    obj: {
                        t: 'VO',
                        p: 'COD_VER',
                        k: '000112',
                    },
                    data: {
                        resource: 'pencil',
                    },
                    value: 'pencil',
                },
                FLD5: {
                    obj: {
                        t: 'J4',
                        p: 'BAR',
                        k: 'R255G128B000;20,58\\\\HEIGHT;60',
                    },
                    data: {
                        resource: 'R255G128B000;20,58\\\\HEIGHT;60',
                        isCanvas: true,
                    },
                    value: 'R255G128B000;20,58\\\\HEIGHT;60',
                },
            },
        },
    ],
};

import { newE2EPage } from '@stencil/core/testing';

import { cellContentSelector } from './data-table-selectors';

it.skip('render objects', async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-data-table></kup-data-table>');

    const element = await page.find('kup-data-table');
    element.setProperty('data', objData);

    await page.waitForChanges();

    const cellContentChildren = await page.findAll(
        cellContentSelector + ' > *'
    );

    for (let i = 0; i < cellContentChildren.length; i++) {
        const child = cellContentChildren[i];

        switch (i) {
            case 1:
                // img
                expect(child.tagName).toBe('KUP-IMAGE');
                expect(await child.getProperty('resource')).toEqual(
                    'https://i.imgur.com/mtbl1cr.jpg'
                );
                break;

            case 2:
                // url
                expect(child.tagName).toBe('A');
                expect(child).toEqualAttribute(
                    'href',
                    'https://www.google.com'
                );
                expect(child).toEqualText('https://www.google.com');
                break;

            case 3:
                // vo;cod_ver
                expect(child.tagName).toBe('KUP-IMAGE');
                break;

            case 4:
                // graphic cell
                expect(child.tagName).toBe('KUP-IMAGE');
                break;

            default:
                // icon
                expect(child.tagName).toBe('KUP-IMAGE');
                break;
        }
    }
});

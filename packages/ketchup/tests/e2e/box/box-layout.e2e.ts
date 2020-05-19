import { newE2EPage } from '@stencil/core/testing';
import { defaultData } from './mocked-data';
import { boxSelector } from './box-selectors';

describe('box layouts', () => {
    it('section with columns', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const props = {
            data: defaultData,
            layout: {
                sections: [
                    {
                        columns: 4,
                        sections: [{}, {}, {}, {}],
                    },
                ],
            },
        };

        await page.$eval(
            'kup-box',
            (elm: any, { data, layout }) => {
                elm.data = data;
                elm.layout = layout;
            },
            props
        );

        await page.waitForChanges();

        const box = await page.find(boxSelector);

        const sections = await box.findAll('.box-section');

        expect(sections).toHaveLength(5);

        const sectionStyle = await sections[0].getComputedStyle();

        expect(sectionStyle.display).toBe('grid');

        expect(sectionStyle.gridTemplateColumns.split(' ')).toHaveLength(4);
    });

    it('section with title', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const props = {
            data: defaultData,
            layout: {
                horizontal: true,
                sections: [
                    {
                        dim: '100px',
                    },
                    {
                        title: 'User informations',
                        sections: [{}, {}, {}],
                    },
                ],
            },
        };

        await page.$eval(
            'kup-box',
            (elm: any, { data, layout }) => {
                elm.data = data;
                elm.layout = layout;
            },
            props
        );

        await page.waitForChanges();

        const box = await page.find(boxSelector);

        const sections = await box.findAll('.box-section');

        expect(sections).toHaveLength(5);

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const title = await section.find('h3');

            switch (i) {
                case 1:
                    expect(section).toHaveClass('titled');
                    expect(title).toEqualText('User informations');
                    break;

                default:
                    expect(section).not.toHaveClass('titled');
                    expect(title).toBeNull();
                    break;
            }
        }
    });
});

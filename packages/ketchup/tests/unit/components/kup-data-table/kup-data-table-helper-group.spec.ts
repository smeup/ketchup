import { groupRows } from '../../../../src/components/kup-data-table/kup-data-table-helper';
import { TotalMode } from '../../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import {
    KupDataColumn,
    KupDataRow,
} from '../../../../src/managers/kup-data/kup-data-declarations';
const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-places-and-nrs.json';

const columns: KupDataColumn[] = sampleKupDataDataset.columns;
const rows: KupDataRow[] = sampleKupDataDataset.rows;

describe('kup datatable grouping rows - general', () => {
    it('groups without parameters', () => {
        const groups = groupRows();

        expect(groups).toEqual([]);
    });

    it('groups with empty columns', () => {
        let groups = groupRows(null);

        expect(groups).toEqual([]);

        groups = groupRows([]);

        expect(groups).toEqual([]);
    });

    it('groups with empty rows', () => {
        let groups = groupRows(null, null);

        expect(groups).toEqual([]);

        groups = groupRows([]);

        expect(groups).toEqual([]);
    });

    it('returns rows as they are if no / null / empty group', () => {
        let groups = groupRows(columns, rows);

        expect(groups).toEqual(rows);

        groups = groupRows(columns, rows, null);

        expect(groups).toEqual(rows);

        groups = groupRows(columns, rows, []);

        expect(groups).toEqual(rows);
    });

    it('groups on invalid column', () => {
        const groups = groupRows(columns, rows, [
            { column: 'XXXX', visible: true },
        ]);

        expect(groups).toHaveLength(rows.length);

        // no group rows
        groups.forEach((row) => expect(row).not.toHaveProperty('group'));
    });

    it('groups on FLD1', () => {
        const groups = groupRows(columns, rows, [
            { column: 'FLD1', visible: true },
        ]);

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            expect(group).toHaveProperty('group');

            const { children, column, label } = group.group;

            switch (i) {
                case 0:
                    expect(label).toEqual('Europe');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).not.toHaveProperty('group');
                    expect(children[0].cells['FLD2'].value).toEqual('Italy');
                    expect(children[1]).not.toHaveProperty('group');
                    expect(children[1].cells['FLD2'].value).toEqual('France');
                    expect(children[2]).not.toHaveProperty('group');
                    expect(children[2].cells['FLD2'].value).toEqual('Spain');
                    break;

                case 1:
                    expect(label).toEqual('America');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).not.toHaveProperty('group');
                    expect(children[0].cells['FLD2'].value).toEqual(
                        'California'
                    );
                    expect(children[1]).not.toHaveProperty('group');
                    expect(children[1].cells['FLD2'].value).toEqual('Florida');
                    expect(children[2]).not.toHaveProperty('group');
                    expect(children[2].cells['FLD2'].value).toEqual('Texas');
                    break;

                default:
                    expect(label).toEqual('Asia');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).not.toHaveProperty('group');
                    expect(children[0].cells['FLD2'].value).toEqual('Japan');
                    expect(children[1]).not.toHaveProperty('group');
                    expect(children[1].cells['FLD2'].value).toEqual('China');
                    expect(children[2]).not.toHaveProperty('group');
                    expect(children[2].cells['FLD2'].value).toEqual('India');
                    break;
            }
        }
    });

    it('groups on FLD1 and FLD2', () => {
        const groups = groupRows(columns, rows, [
            { column: 'FLD1', visible: true },
            { column: 'FLD2', visible: true },
        ]);

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            expect(group).toHaveProperty('group');

            const { children, column, label } = group.group;

            let firstChild;

            switch (i) {
                case 0:
                    expect(label).toEqual('Europe');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).toHaveProperty('group');
                    expect(children[0].group.column).toEqual('FLD2');
                    expect(children[0].group.children).toHaveLength(1);
                    firstChild = children[0].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('Italy');

                    expect(children[1]).toHaveProperty('group');
                    expect(children[1].group.column).toEqual('FLD2');
                    expect(children[1].group.children).toHaveLength(1);
                    firstChild = children[1].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('France');

                    expect(children[2]).toHaveProperty('group');
                    expect(children[2].group.column).toEqual('FLD2');
                    expect(children[2].group.children).toHaveLength(1);
                    firstChild = children[2].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('Spain');
                    break;

                case 1:
                    expect(label).toEqual('America');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).toHaveProperty('group');
                    expect(children[0].group.column).toEqual('FLD2');
                    expect(children[0].group.children).toHaveLength(1);
                    firstChild = children[0].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual(
                        'California'
                    );

                    expect(children[1]).toHaveProperty('group');
                    expect(children[1].group.column).toEqual('FLD2');
                    expect(children[1].group.children).toHaveLength(1);
                    firstChild = children[1].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('Florida');

                    expect(children[2]).toHaveProperty('group');
                    expect(children[2].group.column).toEqual('FLD2');
                    expect(children[2].group.children).toHaveLength(1);
                    firstChild = children[2].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('Texas');
                    break;

                default:
                    expect(label).toEqual('Asia');
                    expect(column).toEqual('FLD1');
                    expect(children).toHaveLength(3);

                    // testing children
                    expect(children[0]).toHaveProperty('group');
                    expect(children[0].group.column).toEqual('FLD2');
                    expect(children[0].group.children).toHaveLength(1);
                    firstChild = children[0].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('Japan');

                    expect(children[1]).toHaveProperty('group');
                    expect(children[1].group.column).toEqual('FLD2');
                    expect(children[1].group.children).toHaveLength(1);
                    firstChild = children[1].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('China');

                    expect(children[2]).toHaveProperty('group');
                    expect(children[2].group.column).toEqual('FLD2');
                    expect(children[2].group.children).toHaveLength(1);
                    firstChild = children[2].group.children[0];
                    expect(firstChild.cells['FLD2'].value).toEqual('India');
                    break;
            }
        }
    });
});

describe('kup datatable grouping rows - single with totals', () => {
    it('groups on FLD1, counts on FLD2', () => {
        const groups = groupRows(
            columns,
            rows,
            [{ column: 'FLD1', visible: true }],
            {
                FLD2: TotalMode.COUNT,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let group of groups) {
            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            expect(totals['FLD2']).toBe(3);
        }
    });

    it('groups on FLD1, sums on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [{ column: 'FLD1', visible: true }],
            {
                FLD4: TotalMode.SUM,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            const sum = totals['FLD4'];

            switch (i) {
                case 0:
                    expect(sum).toBe(8309750);
                    break;

                case 1:
                    expect(sum).toBe(5311612);
                    break;

                default:
                    expect(sum).toBe(60123443);
                    break;
            }
        }
    });

    it('group on FLD1, avarages on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [{ column: 'FLD1', visible: true }],
            {
                FLD4: TotalMode.AVERAGE,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        // testing first group
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            const average = totals['FLD4'];

            switch (i) {
                case 0:
                    expect(average).toBe(2769916.6666666665);
                    break;

                case 1:
                    expect(average).toBe(1770537.3333333333);
                    break;

                default:
                    expect(average).toBe(20041147.666666667);
                    break;
            }
        }
    });

    it('groups on FLD1, counts on FLD1, averages on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [{ column: 'FLD1', visible: true }],
            {
                FLD1: TotalMode.COUNT,
                FLD4: TotalMode.AVERAGE,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        // testing first group
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(2);

            const count = totals['FLD1'];
            const average = totals['FLD4'];

            expect(count).toBe(3);

            switch (i) {
                case 0:
                    expect(average).toBe(2769916.6666666665);
                    break;

                case 1:
                    expect(average).toBe(1770537.3333333333);
                    break;

                default:
                    expect(average).toBe(20041147.666666667);
                    break;
            }
        }
    });
});

describe('kup datatable grouping rows - multiple with totals', () => {
    it('groups on FLD1 and FLD2, counts on FLD2', () => {
        const groups = groupRows(
            columns,
            rows,
            [
                { column: 'FLD1', visible: true },
                { column: 'FLD2', visible: true },
            ],
            {
                FLD2: TotalMode.COUNT,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let group of groups) {
            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            expect(totals['FLD2']).toBe(3);

            // testing children
            const children = group.group.children;

            expect(children).toHaveLength(3);

            children.forEach((child) => {
                const childTotals = child.group.totals;

                expect(Object.keys(childTotals)).toHaveLength(1);

                expect(childTotals['FLD2']).toBe(1);
            });
        }
    });

    it('groups on FLD1 and FLD2, sums on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [
                { column: 'FLD1', visible: true },
                { column: 'FLD2', visible: true },
            ],
            {
                FLD4: TotalMode.SUM,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            const sum = totals['FLD4'];

            const children = group.group.children;

            expect(children).toHaveLength(3);

            switch (i) {
                case 0:
                    expect(sum).toBe(8309750);

                    expect(children[0].group.totals['FLD4']).toBe(2857321);
                    expect(children[1].group.totals['FLD4']).toBe(2229095);
                    expect(children[2].group.totals['FLD4']).toBe(3223334);
                    break;

                case 1:
                    expect(sum).toBe(5311612);

                    expect(children[0].group.totals['FLD4']).toBe(4057875);
                    expect(children[1].group.totals['FLD4']).toBe(463347);
                    expect(children[2].group.totals['FLD4']).toBe(790390);
                    break;

                default:
                    expect(sum).toBe(60123443);

                    expect(children[0].group.totals['FLD4']).toBe(13857443);
                    expect(children[1].group.totals['FLD4']).toBe(24516000);
                    expect(children[2].group.totals['FLD4']).toBe(21750000);
                    break;
            }
        }
    });

    it('groups on FLD1 and FLD2, averages on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [
                { column: 'FLD1', visible: true },
                { column: 'FLD2', visible: true },
            ],
            {
                FLD4: TotalMode.AVERAGE,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(1);

            const average = totals['FLD4'];

            const children = group.group.children;

            expect(children).toHaveLength(3);

            switch (i) {
                case 0:
                    expect(average).toBe(2769916.6666666665);

                    expect(children[0].group.totals['FLD4']).toBe(2857321);
                    expect(children[1].group.totals['FLD4']).toBe(2229095);
                    expect(children[2].group.totals['FLD4']).toBe(3223334);
                    break;

                case 1:
                    expect(average).toBe(1770537.3333333333);

                    expect(children[0].group.totals['FLD4']).toBe(4057875);
                    expect(children[1].group.totals['FLD4']).toBe(463347);
                    expect(children[2].group.totals['FLD4']).toBe(790390);
                    break;

                default:
                    expect(average).toBe(20041147.666666667);

                    expect(children[0].group.totals['FLD4']).toBe(13857443);
                    expect(children[1].group.totals['FLD4']).toBe(24516000);
                    expect(children[2].group.totals['FLD4']).toBe(21750000);
                    break;
            }
        }
    });

    it('groups on FLD1 and FLD2, counts on FLD2 and averages on FLD4', () => {
        const groups = groupRows(
            columns,
            rows,
            [
                { column: 'FLD1', visible: true },
                { column: 'FLD2', visible: true },
            ],
            {
                FLD2: TotalMode.COUNT,
                FLD4: TotalMode.AVERAGE,
            }
        );

        expect(groups).not.toEqual(rows);

        expect(groups).toHaveLength(3);

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];

            const totals = group.group.totals;

            const keys = Object.keys(totals);

            expect(keys).toHaveLength(2);

            const count = totals['FLD2'];

            expect(count).toBe(3);

            const average = totals['FLD4'];

            const children = group.group.children;

            expect(children).toHaveLength(3);

            switch (i) {
                case 0:
                    expect(average).toBe(2769916.6666666665);

                    expect(children[0].group.totals['FLD2']).toBe(1);
                    expect(children[0].group.totals['FLD4']).toBe(2857321);

                    expect(children[1].group.totals['FLD2']).toBe(1);
                    expect(children[1].group.totals['FLD4']).toBe(2229095);

                    expect(children[2].group.totals['FLD2']).toBe(1);
                    expect(children[2].group.totals['FLD4']).toBe(3223334);
                    break;

                case 1:
                    expect(average).toBe(1770537.3333333333);

                    expect(children[0].group.totals['FLD2']).toBe(1);
                    expect(children[0].group.totals['FLD4']).toBe(4057875);

                    expect(children[1].group.totals['FLD2']).toBe(1);
                    expect(children[1].group.totals['FLD4']).toBe(463347);

                    expect(children[2].group.totals['FLD2']).toBe(1);
                    expect(children[2].group.totals['FLD4']).toBe(790390);
                    break;

                default:
                    expect(average).toBe(20041147.666666667);

                    expect(children[0].group.totals['FLD2']).toBe(1);
                    expect(children[0].group.totals['FLD4']).toBe(13857443);

                    expect(children[1].group.totals['FLD2']).toBe(1);
                    expect(children[1].group.totals['FLD4']).toBe(24516000);

                    expect(children[2].group.totals['FLD2']).toBe(1);
                    expect(children[2].group.totals['FLD4']).toBe(21750000);
                    break;
            }
        }
    });
});

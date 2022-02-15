import { groupRows } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { TotalMode } from '../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../src/managers/kup-manager/kup-manager';
import {
    KupDataColumn,
    KupDataRow,
} from '../../../src/managers/kup-data/kup-data-declarations';
const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const columns: KupDataColumn[] = [
    {
        name: 'FLD1',
        title: '',
    },
    {
        name: 'FLD2',
        title: '',
    },
    {
        name: 'FLD3',
        title: '',
    },
    {
        name: 'FLD4',
        title: '',
    },
];

const rows: KupDataRow[] = [
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Europe',
                },
                value: 'Europe',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Italy',
                },
                value: 'Italy',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Rome',
                },
                value: 'Rome',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '2,857,321',
                },
                value: '2,857,321',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Europe',
                },
                value: 'Europe',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'France',
                },
                value: 'France',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Paris',
                },
                value: 'Paris',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '2,229,095',
                },
                value: '2,229,095',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Europe',
                },
                value: 'Europe',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Spain',
                },
                value: 'Spain',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Madrid',
                },
                value: 'Madrid',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '3,223,334',
                },
                value: '3,223,334',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'America',
                },
                value: 'America',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'California',
                },
                value: 'California',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Los Angeles',
                },
                value: 'Los Angeles',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '4,057,875',
                },
                value: '4,057,875',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'America',
                },
                value: 'America',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Florida',
                },
                value: 'Florida',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Miami',
                },
                value: 'Miami',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '463,347',
                },
                value: '463,347',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'America',
                },
                value: 'America',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Texas',
                },
                value: 'Texas',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Austin',
                },
                value: 'Austin',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '790,390',
                },
                value: '790,390',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Asia',
                },
                value: 'Asia',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Japan',
                },
                value: 'Japan',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Tokyo',
                },
                value: 'Tokyo',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '13,857,443',
                },
                value: '13,857,443',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Asia',
                },
                value: 'Asia',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'China',
                },
                value: 'China',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Beijing',
                },
                value: 'Beijing',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '24,516,000',
                },
                value: '24,516,000',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: '',
                    p: '',
                    k: 'Asia',
                },
                value: 'Asia',
            },
            FLD2: {
                obj: {
                    t: '',
                    p: '',
                    k: 'India',
                },
                value: 'India',
            },
            FLD3: {
                obj: {
                    t: '',
                    p: '',
                    k: 'New Delhi',
                },
                value: 'New Delhi',
            },
            FLD4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '21,750,000',
                },
                value: '21,750,000',
            },
        },
    },
];

describe('it group rows', () => {
    it('group without parameters', () => {
        const groups = groupRows();

        expect(groups).toEqual([]);
    });

    it('group with empty columns', () => {
        let groups = groupRows(null);

        expect(groups).toEqual([]);

        groups = groupRows([]);

        expect(groups).toEqual([]);
    });

    it('group with empty rows', () => {
        let groups = groupRows(null, null);

        expect(groups).toEqual([]);

        groups = groupRows([]);

        expect(groups).toEqual([]);
    });

    it('if no / null / empty group, return rows as they are', () => {
        let groups = groupRows(columns, rows);

        expect(groups).toEqual(rows);

        groups = groupRows(columns, rows, null);

        expect(groups).toEqual(rows);

        groups = groupRows(columns, rows, []);

        expect(groups).toEqual(rows);
    });

    it('group on invalid column', () => {
        const groups = groupRows(columns, rows, [
            { column: 'XXXX', visible: true },
        ]);

        expect(groups).toHaveLength(rows.length);

        // no group rows
        groups.forEach((row) => expect(row).not.toHaveProperty('group'));
    });

    it('Grouping on FLD1', () => {
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

    it('Grouping on FLD1 and FLD2', () => {
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

describe('single groups with totals', () => {
    it('Group on FLD1, count on FLD2', () => {
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

    it('Group on FLD1, sum on FLD4', () => {
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

    it('Group on FLD1, avarate on FLD4', () => {
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

    it('Group on FLD1, count on FLD1, average on FLD4', () => {
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

describe('multiple groups with totals', () => {
    it('Group on FLD1 and FLD2, count on FLD2', () => {
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

    it('Group on FLD1 and FLD2, sum on FLD4', () => {
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

    it('Group on FLD1 and FLD2, average on FLD4', () => {
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

    it('Group on FLD1 and FLD2, count on FLD2 and average on FLD4', () => {
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

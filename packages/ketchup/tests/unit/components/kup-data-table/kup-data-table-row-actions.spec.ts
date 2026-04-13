import {
    KupCommand,
    KupDataRowAction,
    KupDataTableRow,
} from '../../../../src/components';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

import sampleKupDataDatasetNoCodVer from '../../../resources/mock/kup-data-dataset-with-places-and-nrs.json';
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-commands.json';
import sampleKupDataCommandsWithEmptyObj from '../../../resources/mock/kup-data-dataset-commands-with-empty-obj.json';
import {
    DropDownAction,
    KupDataColumn,
} from '../../../../src/managers/kup-data/kup-data-declarations';
import { KupDataTableCell } from '../../../../src/components/kup-data-table/kup-data-table-declarations';

const mockedData = sampleKupDataDataset.data;
const mockedColumns = mockedData.columns as KupDataColumn[];
const mockedRows = mockedData.rows as unknown as KupDataTableRow[];
const mockedCommands = sampleKupDataDataset.commands as unknown as KupCommand[];
const mockedRowsCellActions = sampleKupDataCommandsWithEmptyObj.data
    .rows as unknown as KupDataTableRow[];
const mockedColumnsCellActions = sampleKupDataCommandsWithEmptyObj.data
    .columns as unknown as KupDataColumn[];

let result: KupDataRowAction[] = [];
const currentColumn = {
    isEditable: false,
    isKey: false,
    name: 'X$CFG',
    obj: {
        p: 'COD_VER',
        t: 'VO',
    },
    size: '70px',
    title: 'CFG',
    tooltip: false,
} as KupDataColumn;
const firstCell = {
    isEditable: false,
    obj: {
        p: 'COD_VER',
        t: 'VO',
    },
    value: '000050',
    decode: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const secondCell = {
    isEditable: false,
    obj: {
        p: 'COD_VER',
        t: 'VO',
    },
    value: '000051',
    decode: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const thirdCell = {
    isEditable: false,
    obj: {
        p: 'COD_VER',
        t: 'VO',
    },
    value: '000052',
    decode: 'Test',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const fourthCell = {
    isEditable: false,
    obj: {
        p: 'COD_VER',
        t: 'VO',
    },
    value: '000053',
    decode: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;

describe('kup datatable dataset with commands and VO;CODVER rows', () => {
    it('should handle both matching and non-matching VO;CODVER/commands', () => {
        const expectedResult: KupDataRowAction[] = [
            {
                icon: 'view-quilt',
                text: 'Scheda',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.COMMAND,
                index: 0,
                cell: firstCell,
                column: currentColumn,
            },
            {
                icon: 'delete',
                text: 'Elimina',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.COMMAND,
                index: 1,
                cell: firstCell,
                column: currentColumn,
            },
            {
                icon: 'edit',
                text: 'Modifica',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.COMMAND,
                index: 2,
                cell: secondCell,
                column: currentColumn,
            },
            {
                icon: '',
                text: '',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                index: -1,
                cell: thirdCell,
                column: currentColumn,
            },
            {
                icon: '',
                text: '',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                index: -1,
                cell: fourthCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                } as KupDataColumn,
            },
        ];

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction =
                dom.ketchup.data.action.createActionsFromVoCodRow(
                    mockedRow,
                    mockedColumns,
                    mockedCommands,
                    mockedColumns.map((col) => col.name)
                );
            result.push(...kupDataRowAction);
        });

        expect(result).toEqual(expectedResult);
    });

    it('should handle VO;CODVER rows with no commands corresponding', () => {
        const commands: KupCommand[] = [];
        let result: KupDataRowAction[] = [];
        const expectedResult: KupDataRowAction[] = [
            {
                icon: '',
                text: '',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: firstCell,
                index: -1,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                } as KupDataColumn,
            },
            {
                icon: '',
                text: '',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                index: -1,
                cell: secondCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                } as KupDataColumn,
            },
            {
                icon: '',
                text: '',
                index: -1,
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: thirdCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                } as KupDataColumn,
            },
            {
                icon: '',
                text: '',
                obj: { p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                index: -1,
                cell: fourthCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                } as KupDataColumn,
            },
        ];

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction =
                dom.ketchup.data.action.createActionsFromVoCodRow(
                    mockedRow,
                    mockedColumns,
                    commands,
                    mockedColumns.map((col) => col.name)
                );
            result.push(...kupDataRowAction);
        });

        expect(result).toEqual(expectedResult);
    });

    it('should handle case with no VO;CODVER rows present', () => {
        const rows = sampleKupDataDatasetNoCodVer.rows;
        let result: KupDataRowAction[] = [];

        rows.forEach((mockedRow) => {
            const kupDataRowAction =
                dom.ketchup.data.action.createActionsFromVoCodRow(
                    mockedRow,
                    mockedColumns,
                    mockedCommands,
                    mockedColumns.map((col) => col.name)
                );
            result.push(...kupDataRowAction);
        });

        expect(result).toEqual([]);
    });
});

describe('kup data getCodVerRows', () => {
    it('should filter cells with VO;CODVER from row', () => {
        const expectedResult = [
            {
                id: 'X$CFG',
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    size: '70px',
                    title: 'CFG',
                    tooltip: false,
                },
                cell: {
                    isEditable: false,
                    obj: { p: 'COD_VER', t: 'VO' },
                    value: '000050',
                    decode: '',
                    element: { 's-hn': 'KUP-DATA-TABLE' },
                },
            },
        ];
        const result = dom.ketchup.data.cell.getRowCodVers(
            mockedColumns,
            mockedRows[0],
            mockedColumns.map((col) => col.name)
        );

        expect(result).toEqual(expectedResult);
    });

    it('should return an empy array where no VO;CODVER found', () => {
        const result = dom.ketchup.data.cell.getRowCodVers(
            sampleKupDataDatasetNoCodVer.columns,
            sampleKupDataDatasetNoCodVer.rows[0],
            sampleKupDataDatasetNoCodVer.columns.map((col) => col.name)
        );

        expect(result).toEqual([]);
    });
});

describe('kup data buildCellActions', () => {
    it.only('should create cell actions with only empty obj', () => {
        const commands: KupCommand[] = [
            {
                obj: {
                    p: '',
                    t: '',
                },
                text: 'EMPTY delete',
                value: '2',
                icon: 'delete',
                showIcon: true,
            },
            {
                obj: {
                    p: '',
                    t: '',
                },
                text: 'EMPTY edit',
                value: '2',
                icon: 'edit',
                showIcon: true,
            },
        ];
        const expectedResult: KupDataRowAction[] = [
            {
                text: 'EMPTY delete',
                icon: 'delete',
                type: DropDownAction.COMMAND,
                index: 0,
                obj: {
                    p: '',
                    t: '',
                },
                originalText: undefined,
                cell: {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        maxLength: 15,
                        integers: 15,
                    },
                    isEditable: false,
                    obj: {
                        p: '',
                        t: '',
                    },
                    value: '',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                } as unknown as KupDataTableCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$EMPTY',
                    obj: {
                        p: '',
                        t: '',
                    },
                    size: '70px',
                    title: 'EMP',
                    tooltip: false,
                },
            },
            {
                icon: 'edit',
                text: 'EMPTY edit',
                obj: {
                    p: '',
                    t: '',
                },
                originalText: undefined,
                cell: {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        maxLength: 15,
                        integers: 15,
                    },
                    isEditable: false,
                    obj: {
                        p: '',
                        t: '',
                    },
                    value: '2',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                } as unknown as KupDataTableCell,
                index: 1,
                type: DropDownAction.COMMAND,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$EMPTY',
                    obj: {
                        p: '',
                        t: '',
                    },
                    size: '70px',
                    title: 'EMP',
                    tooltip: false,
                },
            },
        ];

        const cellActions = dom.ketchup.data.cell.buildCellActions(
            mockedRowsCellActions[1],
            mockedColumnsCellActions[5],
            commands
        );

        expect(cellActions).toEqual(expectedResult);
    });
    it('should create cell actions with only codver', () => {
        const commands: KupCommand[] = [
            {
                obj: {
                    p: 'CN',
                    t: 'CLI',
                },
                value: '000086',
                text: 'CN;CLI delete',
                icon: 'delete',
                showIcon: true,
            },
            {
                obj: {
                    p: 'CN',
                    t: 'CLI',
                },
                value: '000086',
                text: 'CN;CLI scheda',
                icon: 'view-quilt',
                showIcon: true,
            },
        ];

        const expectedResult: KupDataRowAction[] = [
            {
                type: DropDownAction.COMMAND,
                obj: {
                    p: 'CN',
                    t: 'CLI',
                },
                text: 'CN;CLI delete',
                icon: 'delete',
                cell: {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        maxLength: 15,
                        integers: 15,
                    },
                    isEditable: false,
                    obj: {
                        p: 'CN',
                        t: 'CLI',
                    },
                    value: '2',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                } as unknown as KupDataTableCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$TEST',
                    obj: {
                        p: '',
                        t: 'CLI',
                    },
                    size: '70px',
                    title: 'CODVER',
                    tooltip: false,
                },
                index: 0,
            },
            {
                type: DropDownAction.COMMAND,
                obj: {
                    p: 'CN',
                    t: 'CLI',
                },
                text: 'CN;CLI scheda',
                icon: 'view-quilt',
                cell: {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        maxLength: 15,
                        integers: 15,
                    },
                    isEditable: false,
                    obj: {
                        p: 'CN',
                        t: 'CLI',
                    },
                    value: '2',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                } as unknown as KupDataTableCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$TEST',
                    obj: {
                        p: '',
                        t: 'CLI',
                    },
                    size: '70px',
                    title: 'CODVER',
                    tooltip: false,
                },
                index: 1,
            },
        ];

        const cellActions = dom.ketchup.data.cell.buildCellActions(
            mockedRowsCellActions[1],
            mockedColumnsCellActions[4],
            commands
        );

        expect(cellActions).toEqual(expectedResult);
    });
});

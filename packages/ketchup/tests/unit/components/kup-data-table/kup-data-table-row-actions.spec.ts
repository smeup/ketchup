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
    KupDataCell,
    KupDataColumn,
    KupDataRow,
} from '../../../../src/managers/kup-data/kup-data-declarations';
import { KupDataTableCell } from '../../../../src/components/kup-data-table/kup-data-table-declarations';

const mockedData = sampleKupDataDataset.data;
const mockedColumns = mockedData.columns as KupDataColumn[];
const mockedRows = mockedData.rows as unknown as KupDataTableRow[];
const mockedCommands = sampleKupDataDataset.commands as unknown as KupCommand[];

let result: KupDataRowAction[] = [];
const currentColumn = {
    isEditable: false,
    isKey: false,
    name: 'X$CFG',
    obj: {
        k: '',
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
        k: '000050',
        p: 'COD_VER',
        t: 'VO',
    },
    value: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const secondCell = {
    isEditable: false,
    obj: {
        k: '000051',
        p: 'COD_VER',
        t: 'VO',
    },
    value: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const thirdCell = {
    isEditable: false,
    obj: {
        k: '000052',
        p: 'COD_VER',
        t: 'VO',
    },
    value: 'Test',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataTableCell;
const fourthCell = {
    isEditable: false,
    obj: {
        k: '000053',
        p: 'COD_VER',
        t: 'VO',
    },
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
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 0,
                cell: firstCell,
                column: currentColumn,
            },
            {
                icon: 'delete',
                text: 'Elimina',
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 1,
                cell: firstCell,
                column: currentColumn,
            },
            {
                icon: 'edit',
                text: 'Modifica',
                obj: { k: '000051', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 2,
                cell: secondCell,
                column: currentColumn,
            },
            {
                icon: '',
                text: 'CFG',
                obj: { k: '000052', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: thirdCell,
                column: currentColumn,
            },
            {
                icon: '',
                text: 'CFG',
                obj: { k: '000053', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: fourthCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        k: '',
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
                    mockedCommands
                );
            result.push(...kupDataRowAction);
        });

        expect(result).toEqual(expectedResult);
    });

    it('should handle VO;CODVER rows with no commands corresponding', () => {
        const commands = [];
        let result: KupDataRowAction[] = [];
        const expectedResult: KupDataRowAction[] = [
            {
                icon: '',
                text: 'CFG',
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: firstCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        k: '',
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
                text: 'CFG',
                obj: { k: '000051', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: secondCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        k: '',
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
                text: 'CFG',
                obj: { k: '000052', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: thirdCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        k: '',
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
                text: 'CFG',
                obj: { k: '000053', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: fourthCell,
                column: {
                    isEditable: false,
                    isKey: false,
                    name: 'X$CFG',
                    obj: {
                        k: '',
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
                    commands
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
                    mockedCommands
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
                name: 'X$CFG',
                value: {
                    isEditable: false,
                    obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                    value: '',
                    element: { 's-hn': 'KUP-DATA-TABLE' },
                },
            },
        ];
        const result = dom.ketchup.data.cell.getCodVer(mockedRows[0]);

        expect(result).toEqual(expectedResult);
    });

    it('should return an empy array where no VO;CODVER found', () => {
        const result = dom.ketchup.data.cell.getCodVer(
            sampleKupDataDatasetNoCodVer.rows[0]
        );

        expect(result).toEqual([]);
    });
});

describe('kup data createCommandsEmptyObj', () => {
    it('should handle empty obj commands actions', () => {
        let result: KupDataRowAction[] = [];
        const commands =
            sampleKupDataCommandsWithEmptyObj.commands as unknown as KupCommand[];
        const expectedResult: KupDataRowAction[] = [
            {
                icon: 'magnify',
                text: 'Dettaglio',
                obj: { k: '', p: '', t: '' },
                type: DropDownAction.COMMANDWITHEMPTYOBJ,
                index: 0,
            },
        ];

        const kupDataRowAction =
            dom.ketchup.data.action.createCommandsWithEmptyObj(commands);

        result.push(...kupDataRowAction);

        expect(result).toEqual(expectedResult);
    });
});

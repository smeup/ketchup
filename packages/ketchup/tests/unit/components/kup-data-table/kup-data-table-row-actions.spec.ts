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
import { DropDownAction, KupDataCell } from '../../../../src/managers/kup-data/kup-data-declarations';

const mockedData = sampleKupDataDataset.data;
const mockedRows = mockedData.rows as unknown as KupDataTableRow[];
const mockedCommands = sampleKupDataDataset.commands as unknown as KupCommand[];

let result: KupDataRowAction[] = [];
const firstCell = {
    isEditable: false,
    obj: {
        k: '000050',
        p: 'COD_VER',
        t: 'VO',
    },
    value: '',
    element: {
        's-hn': 'KUP-DATA-TABLE' 
    },
} as unknown as KupDataCell
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
} as unknown as KupDataCell
const thirdCell = {
    isEditable: false,
    obj: {
        k: '000052',
        p: 'COD_VER',
        t: 'VO',
    },
    value: '',
    element: {
        's-hn': 'KUP-DATA-TABLE',
    },
} as unknown as KupDataCell

describe('kup datatable dataset with commands and VO;CODVER rows', () => {
    it('should handle both matching and non-matching VO;CODVER/commands', () => {

        const expectedResult: KupDataRowAction[] = [
            {
                icon: 'view-quilt',
                text: 'Scheda',
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 0,
                cell: firstCell
            },
            {
                icon: 'delete',
                text: 'Elimina',
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 1,
                cell: firstCell
            },
            {
                icon: 'edit',
                text: 'Modifica',
                obj: { k: '000051', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVERWITHCOMMANDS,
                index: 2,
                cell: secondCell
            },
            {
                icon: '',
                text: '000052',
                obj: { k: '000052', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: thirdCell
            },
        ];

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction = dom.ketchup.data.createActionsFromVoCodRow(
                mockedRow,
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
                text: '000050',
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: firstCell
            },
            {
                icon: '',
                text: '000051',
                obj: { k: '000051', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: secondCell
            },
            {
                icon: '',
                text: '000052',
                obj: { k: '000052', p: 'COD_VER', t: 'VO' },
                type: DropDownAction.CODVER,
                cell: thirdCell
            },
        ];

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction = dom.ketchup.data.createActionsFromVoCodRow(
                mockedRow,
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
            const kupDataRowAction = dom.ketchup.data.createActionsFromVoCodRow(
                mockedRow,
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
                isEditable: false,
                obj: { k: '000050', p: 'COD_VER', t: 'VO' },
                value: '',
                element: { 's-hn': 'KUP-DATA-TABLE' },
            },
        ];
        const result = dom.ketchup.data.getCodVerCells(mockedRows[0]);

        expect(result).toEqual(expectedResult);
    });

    it('should return an empy array where no VO;CODVER found', () => {
        const result = dom.ketchup.data.getCodVerCells(
            sampleKupDataDatasetNoCodVer.rows[0]
        );

        expect(result).toEqual([]);
    });
});

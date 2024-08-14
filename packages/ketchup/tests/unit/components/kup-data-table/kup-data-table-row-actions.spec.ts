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

const mockedData = sampleKupDataDataset.data;
const mockedRows = mockedData.rows as unknown as KupDataTableRow[];
const mockedCommands = sampleKupDataDataset.commands as unknown as KupCommand[];

describe('kup datatable dataset with commands and VO;CODVER rows', () => {
    it('should handle both matching and non-matching VO;CODVER/commands', () => {
        let result: KupDataRowAction[] = [];

        const expectedResult: KupDataRowAction[] = [
            { icon: 'view-quilt', text: 'Scheda' ,obj: { k: "000050", p: "COD_VER", t: "VO"}},
            { icon: 'delete', text: 'Elimina' ,obj: { k: "000050", p: "COD_VER", t: "VO"}},
            { icon: 'edit', text: 'Modifica',obj: { k: "000051", p: "COD_VER", t: "VO"} },
            { icon: '', text: '000052', obj: { k: "000052", p: "COD_VER", t: "VO"} },
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
        const expectedResult = [
            { icon: '', text: '000050' , obj: { k: "000050", p: "COD_VER", t: "VO"}},
            { icon: '', text: '000051', obj: { k: "000051", p: "COD_VER", t: "VO"} },
            { icon: '', text: '000052' , obj: { k: "000052", p: "COD_VER", t: "VO"}},
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
        const result = dom.ketchup.data.getCodVerRows(mockedRows[0]);

        expect(result).toEqual(expectedResult);
    });

    it('should return an empy array where no VO;CODVER found', () => {
        const result = dom.ketchup.data.getCodVerRows(
            sampleKupDataDatasetNoCodVer.rows[0]
        );

        expect(result).toEqual([]);
    });
});

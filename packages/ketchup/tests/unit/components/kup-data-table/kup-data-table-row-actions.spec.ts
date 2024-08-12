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

import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-commands.json';

const mockedData = sampleKupDataDataset.data;
const mockedRows = mockedData.rows as unknown as KupDataTableRow[];
const mockedCommands = sampleKupDataDataset.commands as unknown as KupCommand[];

describe('kup datatable dataset with commands and VO;CODVER rows', () => {
    it('should return an KupDataRowAction[] with VO;CODVER rows', () => {
        let result: KupDataRowAction[] = [];

        const expectedResult: KupDataRowAction[] = [
            { icon: 'view-quilt', text: 'Scheda' },
            { icon: 'delete', text: 'Elimina' },
            { icon: 'edit', text: 'Modifica' },
            { icon: '', text: '000052' },
        ];

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction = dom.ketchup.data.createActionsFromVoCodRow(
                mockedRow,
                mockedCommands
            );
            result.push(...kupDataRowAction);
        });

        expect(expectedResult).toEqual(result);
    });

    it('should handle VO;CODVER rows with no commands corresponding',() => {
        const commands = []
        let result: KupDataRowAction[] = [];
        const expectedResult = [
            { icon: '', text: '000050' },
            { icon: '', text: '000051' },
            { icon: '', text: '000052' },
        ]

        mockedRows.forEach((mockedRow) => {
            const kupDataRowAction = dom.ketchup.data.createActionsFromVoCodRow(
                mockedRow,
                commands
            );
            result.push(...kupDataRowAction);
        });

        expect(expectedResult).toEqual(result);

    } )
});

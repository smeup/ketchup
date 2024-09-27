import { KupEventPayload } from '../../types/GenericTypes';
import { KupDataTableDataset } from '../kup-data-table/kup-data-table-declarations';

export interface KupEditableTableUpdatePayload extends KupEventPayload {
    originalData: KupDataTableDataset;
    updatedData: KupDataTableDataset;
}

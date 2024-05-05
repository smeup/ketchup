import { KulDataDataset1 } from '../../../components';
import { KulDataColumn, KulDataDataset } from '../kul-data-declarations';

export function findColumns(
    dataset: KulDataDataset1 | KulDataColumn[],
    filters: Partial<KulDataColumn>
): KulDataColumn[] {
    const result: KulDataColumn[] = [];
    if (!dataset) {
        return result;
    }
    const columns = (dataset as KulDataDataset).columns
        ? (dataset as KulDataDataset).columns
        : (dataset as KulDataColumn[]);
    for (let index = 0; index < columns.length; index++) {
        const column = columns[index];
        for (const key in filters) {
            const filter = filters[key];
            if (column[key] === filter) {
                result.push(column);
            }
        }
    }
    return result;
}

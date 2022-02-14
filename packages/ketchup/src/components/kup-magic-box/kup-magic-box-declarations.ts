import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import type { Row } from '../kup-data-table/kup-data-table-declarations';
/**
 * Props of the kup-magic-box component.
 * Used to export every prop in an object.
 */
export enum KupMagicBoxProps {
    customStyle = 'Custom style of the component.',
    data = 'Sets the data that will be used to display different components.',
}
/**
 * Data prop of kup-magic-box.
 */
export interface MagicBoxData {
    columns: KupDataColumn[];
    rows: Row[];
}
/**
 * Viable display modes selectable in kup-magic-box.
 */
export enum MagicBoxDisplay {
    BOX = 'Box',
    CHART = 'Chart',
    ECHART = 'Echart',
    DATATABLE = 'Datatable',
    JSON = 'JSON',
}

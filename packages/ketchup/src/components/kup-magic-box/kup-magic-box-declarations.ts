import type {
    Column,
    Row,
} from '../kup-data-table/kup-data-table-declarations';
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
    columns: Column[];
    rows: Row[];
}
/**
 * Viable display modes selectable in kup-magic-box.
 */
export enum MagicBoxDisplay {
    BOX = 'Box',
    CHART = 'Chart',
    DATATABLE = 'Datatable',
    ECHART = 'Echart',
    JSON = 'JSON',
}

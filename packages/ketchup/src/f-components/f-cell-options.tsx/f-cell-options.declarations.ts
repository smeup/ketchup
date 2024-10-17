import { VNode } from '@stencil/core';
import { FCellPadding, KupDataCell, KupDataColumn } from '../../components';
import {
    KupDataRow,
    CellActionProps,
} from '../../managers/kup-data/kup-data-declarations';
import { FComponent } from '../../types/GenericTypes';
import { FCellShapes } from '../f-cell/f-cell-declarations';

export interface FCellOptionsProps extends FComponent {
    cell?: KupDataCell;
    column?: KupDataColumn;
    component?: unknown;
    density?: FCellPadding;
    editable?: boolean;
    indents?: VNode[];
    previousValue?: string;
    renderKup?: boolean;
    row?: KupDataRow;
    setSizes?: boolean;
    shape?: FCellShapes;
    cellActionIcon?: CellActionProps;
}

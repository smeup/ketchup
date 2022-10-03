import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import { FCell } from '../../../f-components/f-cell/f-cell';
import {
    FCellPadding,
    FCellProps,
} from '../../../f-components/f-cell/f-cell-declarations';
import { KupDataCell } from '../../../managers/kup-data/kup-data-declarations';

/**
 * 1st box card layout, it can be used as a key-value grid list.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 16th standard layout virtual node.
 */
export function create1(component: KupCard): VNode {
    const rows: VNode[] = [];
    for (let index = 0; index < component.data.cell.length; index++) {
        const cell = component.data.cell[index] as KupDataCell;
        const column = component.data.columns[index];
        const props: FCellProps = {
            cell: cell,
            column: column,
            component: component,
            density: FCellPadding.NONE,
            renderKup: true,
            row: { cells: { [column.name]: cell } },
        };
        rows.push(
            <tr>
                <td class="label">{column.title}</td>
                <td class="value">
                    <FCell {...props}></FCell>
                </td>
            </tr>
        );
    }

    return (
        <div class={`box-layout-${component.layoutNumber}`}>
            <table>{rows}</table>
        </div>
    );
}

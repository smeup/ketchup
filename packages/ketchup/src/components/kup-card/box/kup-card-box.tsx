import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import { FCell } from '../../../f-components/f-cell/f-cell';
import {
    FCellPadding,
    FCellProps,
    FCellShapes,
} from '../../../f-components/f-cell/f-cell-declarations';
import { KupDataCell } from '../../../managers/kup-data/kup-data-declarations';
import { FImage } from '../../../f-components/f-image/f-image';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * 1st box card layout, it can be used as a key-value grid list.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st box layout virtual node.
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
/**
 * 2nd box card layout, it can be used as a key-value grid list with text occupying the left/right edges of the box.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 2nd box layout virtual node.
 */
export function create2(component: KupCard): VNode {
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
        props.cell.cssClass = props.cell.cssClass
            ? props.cell.cssClass + ' c-right-aligned'
            : 'c-right-aligned';
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
/**
 * 3rd box card layout, it can be used as a key-value row list.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 3rd box layout virtual node.
 */
export function create3(component: KupCard): VNode {
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
            <div class="flex-container">
                <div class="label">{column.title}</div>
                <div class="value">
                    <FCell {...props}></FCell>
                </div>
            </div>
        );
    }

    return (
        <div class={`box-layout-${component.layoutNumber}`}>
            <div class="container">{rows}</div>
        </div>
    );
}
/**
 * 4th box card layout, image and value.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 4th box layout virtual node.
 */
export function create4(component: KupCard): VNode {
    const cells = component.data.cell as KupDataCell[];
    const columns = component.data.columns;
    let image: number = null;
    let value: number = null;
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        if (
            (!image &&
                (dom.ketchup.objects.isImage(cell.obj) ||
                    dom.ketchup.objects.isIcon(cell.obj))) ||
            cell.shape === FCellShapes.IMAGE
        ) {
            image = index;
            if (!cell.data) {
                cell.data = { resource: cell.value };
            }
        }
        if (!value && !dom.ketchup.objects.isImage(cell.obj)) {
            value = index;
        }
    }
    const imageProps: FCellProps = {
        cell: cells[image],
        column: columns[image],
        component: component,
        density: FCellPadding.NONE,
        renderKup: true,
        row: { cells: { [columns[image].name]: cells[image] } },
        wrapperClass: 'c-centered',
    };
    const valueProps: FCellProps = {
        cell: cells[value],
        column: columns[value],
        component: component,
        density: FCellPadding.NONE,
        renderKup: true,
        row: { cells: { [columns[value].name]: cells[value] } },
        wrapperClass: 'c-centered',
    };

    return (
        <div class={`box-layout-${component.layoutNumber}`}>
            <div class="container">
                <div class="image">
                    <FCell {...imageProps}></FCell>
                </div>
                <div class="value">
                    <FCell {...valueProps}></FCell>
                </div>
            </div>
        </div>
    );
}

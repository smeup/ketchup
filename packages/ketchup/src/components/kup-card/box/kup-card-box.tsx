import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import { FCell } from '../../../f-components/f-cell/f-cell';
import {
    FCellPadding,
    FCellProps,
    FCellShapes,
} from '../../../f-components/f-cell/f-cell-declarations';
import { KupDataCell } from '../../../managers/kup-data/kup-data-declarations';
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
        const isImage =
            dom.ketchup.objects.isImage(cell.obj) ||
            dom.ketchup.objects.isIcon(cell.obj) ||
            cell.shape?.toUpperCase() === FCellShapes.IMAGE;
        if (!image && isImage) {
            image = index;
            if (!cell.data) {
                cell.data = { resource: cell.value };
            }
        }
        if (!value && !isImage) {
            value = index;
        }
    }
    const imageProps: FCellProps = {
        cell: cells[image],
        column: columns[image],
        component: component,
        density: FCellPadding.MEDIUM,
        renderKup: true,
        row: { cells: { [columns[image].name]: cells[image] } },
        wrapperClass: 'c-centered',
    };
    const valueProps: FCellProps = {
        cell: cells[value],
        column: columns[value],
        component: component,
        density: FCellPadding.MEDIUM,
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
/**
 * 5th box card layout, image on the left and rows of text.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 5th box layout virtual node.
 */
export function create5(component: KupCard): VNode {
    const cells = component.data.cell as KupDataCell[];
    const columns = component.data.columns;
    const rows = [];
    let imageProps: FCellProps = null;
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        const column = component.data.columns[index];
        const isImage =
            dom.ketchup.objects.isImage(cell.obj) ||
            dom.ketchup.objects.isIcon(cell.obj) ||
            cell.shape?.toUpperCase() === FCellShapes.IMAGE;
        if (!imageProps && isImage) {
            imageProps = {
                cell: cells[index],
                column: columns[index],
                component: component,
                density: FCellPadding.MEDIUM,
                renderKup: true,
                row: { cells: { [columns[index].name]: cells[index] } },
                wrapperClass: 'c-centered',
            };
            if (!cell.data) {
                cell.data = { resource: cell.value };
            }
        } else {
            const props: FCellProps = {
                cell: cell,
                column: column,
                component: component,
                density: FCellPadding.MEDIUM,
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
    }

    return (
        <div class={`box-layout-${component.layoutNumber}`}>
            <div class="container">
                {imageProps ? (
                    <div class="image">
                        <FCell {...imageProps}></FCell>
                    </div>
                ) : null}
                <div class="table">
                    <table>{rows}</table>
                </div>
            </div>
        </div>
    );
}
/**
 * 6th box card layout, image on the left and vertical list of text.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 6th box layout virtual node.
 */
export function create6(component: KupCard): VNode {
    const cells = component.data.cell as KupDataCell[];
    const columns = component.data.columns;
    const rows = [];
    let image: number = null;
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        const column = component.data.columns[index];
        const isImage =
            dom.ketchup.objects.isImage(cell.obj) ||
            dom.ketchup.objects.isIcon(cell.obj) ||
            cell.shape?.toUpperCase() === FCellShapes.IMAGE;
        if (!image && isImage) {
            image = index;
            if (!cell.data) {
                cell.data = { resource: cell.value };
            }
        } else {
            const props: FCellProps = {
                cell: cell,
                column: column,
                component: component,
                density: FCellPadding.MEDIUM,
                renderKup: true,
                row: { cells: { [column.name]: cell } },
            };
            rows.push(
                <tr>
                    <td class="label">{column.title}</td>
                </tr>
            );
            rows.push(
                <tr>
                    <td class="value">
                        <FCell {...props}></FCell>
                    </td>
                </tr>
            );
        }
    }
    const imageProps: FCellProps = {
        cell: cells[image],
        column: columns[image],
        component: component,
        density: FCellPadding.MEDIUM,
        renderKup: true,
        row: { cells: { [columns[image].name]: cells[image] } },
        wrapperClass: 'c-centered',
    };

    return (
        <div class={`box-layout-${component.layoutNumber}`}>
            <div class="container">
                <div class="image">
                    <FCell {...imageProps}></FCell>
                </div>
                <div class="table">
                    <table>{rows}</table>
                </div>
            </div>
        </div>
    );
}
/**
 * 7th box card layout, image above and rows of text.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 7th box layout virtual node.
 */
export function create7(component: KupCard): VNode {
    return create5(component);
}
/**
 * 8th box card layout, image above and vertical list of text.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 8th box layout virtual node.
 */
export function create8(component: KupCard): VNode {
    return create6(component);
}

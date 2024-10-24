import { FunctionalComponent, h, VNode } from '@stencil/core';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { GenericObject, KupDataColumn } from '../../components';
import { CMBandACPAdapter } from '../../utils/cell-utils';
import {
    FCellOptionsProps,
    FCellProps,
    FCellTypes,
} from '../f-cell/f-cell-declarations';
import {
    KupDataCell,
    KupDataCellOptions,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { FCell } from '../f-cell/f-cell';

const dom: KupDom = document.documentElement as KupDom;

const treeOptionsNodeAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.children.map((child) => ({
        id: child.content.codice,
        value: child.content.testo,
        selected: currentValue === child.content.codice,
        children: child.children?.length
            ? treeOptionsNodeAdapter(child, currentValue)
            : [],
    }));
};

const dataTreeOptionsChildrenAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.children.map((child) => ({
        id: child.obj.k,
        value: child.value,
        selected: currentValue === child.obj.k,
        children: child.children?.length
            ? dataTreeOptionsChildrenAdapter(child, currentValue)
            : [],
    }));
};

export const FCellOptions: FunctionalComponent<FCellOptionsProps> = (
    props: FCellOptionsProps
) => {
    const mappedCell = props.cell
        ? {
              ...props.cell,
              data: setProps(props.cell, props.column),
              slotData: slotData(props.cell, props.column),
              isEditable: true,
          }
        : null;

    const mappedProps: FCellProps = {
        ...props,
        editable: true,
        cell: mappedCell as KupDataCell,
        column: generateColumn(mappedCell.data),
        row: generateRow(mappedCell.data),
    };

    return <FCell {...mappedProps}></FCell>;
};

const generateColumn = (data: GenericObject): KupDataColumn => {
    const colname: string =
        data && data.obj && data.obj.t
            ? data.obj.t + ';' + data.obj.p
            : 'KUPCELL';
    const coltitle: string =
        data && data.obj && data.obj.t
            ? data.obj.t + ';' + data.obj.p
            : 'genericEmptyObject';
    return {
        name: colname,
        title: coltitle,
    };
};

const generateRow = (data: GenericObject): KupDataRow => {
    const col: KupDataColumn = generateColumn(data);
    const row: KupDataRow = { cells: {} };
    row.cells[col.name] = data.cell;
    return row;
};

const slotData = (cell: KupDataCellOptions, col: KupDataColumn) => {
    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

    if (!cell.isEditable) {
        return null;
    }

    if (
        cellType === FCellTypes.MULTI_AUTOCOMPLETE ||
        cellType === FCellTypes.MULTI_COMBOBOX
    ) {
        return {
            ...CMBandACPAdapter(null, col.title, cell.options),
            showDropDownIcon: true,
            class: '',
            style: { width: '100%' },
            disabled: !cell.isEditable,
            id: col.name,
        };
    }

    return null;
};

const setProps = (cell: KupDataCellOptions, column: KupDataColumn) => {
    const defaultProps = {
        disabled: !cell.isEditable,
        id: column.name,
    };

    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);
    const { data, ...noDataProps } = cell.data || {};
    return cellType !== FCellTypes.MULTI_AUTOCOMPLETE &&
        cellType !== FCellTypes.MULTI_COMBOBOX
        ? deepObjectsMerge(defaultProps, {
              ...cell.data,
          })
        : // Add and ovverride defaultProps of Chip host component except data
          {
              ...defaultProps,
              ...noDataProps,
          };
};

const deepObjectsMerge = (target: GenericObject, source: GenericObject) => {
    for (const key in source) {
        if (
            source[key] instanceof Object &&
            !Array.isArray(source[key]) &&
            key in target
        ) {
            target[key] = deepObjectsMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
};

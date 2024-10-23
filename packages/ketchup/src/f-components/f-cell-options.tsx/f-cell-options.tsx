import { FunctionalComponent, h, VNode } from '@stencil/core';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { GenericObject, KupDataColumn } from '../../components';
import { CMBandACPAdapter } from '../../utils/cell-utils';
import {
    FCellOptionsProps,
    FCellProps,
    FCellShapes,
    FCellTypes,
} from '../f-cell/f-cell-declarations';
import { DataAdapterFn } from '../../components/kup-input-panel/kup-input-panel-declarations';
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

const tableOptionsAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.rows.map((row) => {
        const cells = row.fields || row.cells;
        const [id, value] = Object.keys(cells);

        return {
            id: cells[id].value,
            value: cells[value]?.value || cells[id].value,
            selected: currentValue === cells[id].value,
        };
    });
};

const optionsTreeComboAdapter = (options: any, currentValue: string) => {
    const adapter = optionsAdapterMap.get(options.type);

    if (adapter) {
        return adapter(options, currentValue);
    } else {
        return options.map((option) => ({
            value: option.label,
            id: option.id,
            selected: currentValue === option.id,
        }));
    }
};

const optionsAdapterMap = new Map<
    string,
    (options: any, currentValue: string) => GenericObject[]
>([
    ['SmeupTreeNode', treeOptionsNodeAdapter.bind(this)],
    ['SmeupDataTree', dataTreeOptionsChildrenAdapter.bind(this)],
    ['SmeupTable', tableOptionsAdapter.bind(this)],
    ['SmeupDataTable', tableOptionsAdapter.bind(this)],
]);

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

    if (props.cell.shape === FCellShapes.TEXT_FIELD) {
        mappedProps.cell.value = mappedProps.cell.data.value;
    }

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
            ...CMBandACPAdapter(
                null,
                col.title,
                cell.options
                // cell,
                // col.name
            ),
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
        ...mapData(cell, column),
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

const mapData = (cell: KupDataCellOptions, col: KupDataColumn) => {
    if (!cell) {
        return null;
    }

    const options = cell.options;
    const fieldLabel = col.title;
    const currentValue = cell.value;
    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);
    const dataAdapterMap = new Map<FCellTypes, DataAdapterFn>([
        [FCellTypes.BUTTON_LIST, MainBTNAdapter.bind(this)],
        [FCellTypes.STRING, MainITXAdapter.bind(this)],
        [FCellTypes.COMBOBOX, MainCMBandACPAdapter.bind(this)],
    ]);

    const adapter = dataAdapterMap.get(cellType);

    return adapter
        ? adapter(options, fieldLabel, currentValue, cell, col.name)
        : null;
};

const MainITXAdapter = (
    options: GenericObject,
    _fieldLabel: string,
    _currentValue: string,
    _cell: KupDataCellOptions
) => {
    if (options?.[0]) {
        return {
            value: options[0].label,
        };
    }
};

const MainBTNAdapter = (
    _options: GenericObject,
    _fieldLabel: string,
    _currentValue: string,
    cell: KupDataCellOptions
) => {
    return {
        data: cell.options?.length
            ? cell.options?.map((option) => ({
                  icon: option.icon,
                  value: option.value,
              }))
            : [],
    };
};

const MainCMBandACPAdapter = (
    rawOptions: GenericObject,
    fieldLabel: string,
    currentValue: string
) => {
    const configCMandACP = CMBandACPAdapter(currentValue, fieldLabel, []);

    configCMandACP.data['kup-list'].data = optionsTreeComboAdapter(
        rawOptions,
        currentValue
    );
    return configCMandACP;
};

import { FunctionalComponent, h, VNode } from '@stencil/core';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { GenericObject, KupDataColumn } from '../../components';
import { CMBandACPAdapter, RADAdapter } from '../../utils/cell-utils';
import {
    FCellOptionsProps,
    FCellProps,
    FCellTypes,
} from '../f-cell/f-cell-declarations';
import {
    DataAdapterFn,
    KupInputPanelCell,
} from '../../components/kup-input-panel/kup-input-panel-declarations';
import {
    KupDataCell,
    KupDataCellOptions,
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
    return options.map((option) => ({
        value: option.label,
        id: option.id,
        selected: currentValue === option.id,
    }));
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
    };

    console.log('mapped', mappedProps);

    return <FCell {...mappedProps}></FCell>;
};

const slotData = (cell: KupDataCellOptions, col: KupDataColumn) => {
    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

    // if (!cell.editable) {
    //     return null;
    // }

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
            // disabled: !cell.editable,
            id: col.name,
        };
    }

    return null;
};

const setProps = (cell: KupDataCellOptions, column: KupDataColumn) => {
    const defaultProps = {
        ...mapData(cell, column),
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
        [FCellTypes.RADIO, MainRADAdapter.bind(this)],
        [FCellTypes.AUTOCOMPLETE, MainCMBandACPAdapter.bind(this)],
        [FCellTypes.COMBOBOX, MainCMBandACPAdapter.bind(this)],
    ]);

    const adapter = dataAdapterMap.get(cellType);

    return adapter
        ? adapter(options, fieldLabel, currentValue, cell, col.name)
        : null;
};

const MainRADAdapter = (
    options: GenericObject,
    _fieldLabel: string,
    currentValue: string
) => {
    return RADAdapter(currentValue, options);
};

const MainITXAdapter = (
    options: GenericObject,
    _fieldLabel: string,
    _currentValue: string,
    cell: KupDataCellOptions
) => {
    return { ...cell, value: options[0].label };
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

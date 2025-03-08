import {
    Components,
    FButtonProps,
    GenericObject,
    KupChipNode,
} from '../../components';
import { KupDataCellOptions } from '../../managers/kup-data/kup-data-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FCheckboxProps } from '../f-checkbox/f-checkbox-declarations';
import { FChipsProps } from '../f-chip/f-chip-declarations';
import { FRadioProps } from '../f-radio/f-radio-declarations';
import { FSwitchProps } from '../f-switch/f-switch-declarations';
import { CellAdapterFn, FCellTypes } from './f-cell-declarations';

const dom: KupDom = document.documentElement as KupDom;

export const adaptCell = (cell: KupDataCellOptions): GenericObject => {
    const dataAdapterMap = new Map<FCellTypes, CellAdapterFn>([
        [FCellTypes.AUTOCOMPLETE, ACPandCMBAdapter.bind(this)],
        [FCellTypes.BUTTON, BTNAdapter.bind(this)],
        [FCellTypes.COMBOBOX, ACPandCMBAdapter.bind(this)],
        [FCellTypes.CHECKBOX, CHKAdapter.bind(this)],
        [FCellTypes.CHIP, CHIAdapter.bind(this)],
        [FCellTypes.DATE, DATAdapter.bind(this)],
        [FCellTypes.MULTI_AUTOCOMPLETE, CHIAdapter.bind(this)],
        [FCellTypes.MULTI_COMBOBOX, CHIAdapter.bind(this)],
        [FCellTypes.RADIO, RADAdapter.bind(this)],
        [FCellTypes.SWITCH, SWTAdapter.bind(this)],
        [FCellTypes.TIME, TIMAdapter.bind(this)],
    ]);

    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

    const adapter = dataAdapterMap.get(cellType);
    return adapter ? { ...cell.data, ...adapter(cell) } : { ...cell.data };
};

const ACPandCMBAdapter: CellAdapterFn = (
    cell
): Partial<Components.KupAutocomplete> | Partial<Components.KupCombobox> => ({
    data: {
        'kup-text-field': {
            trailingIcon: true,
        },
        'kup-list': {
            showIcons: true,
            data: cell.options?.length
                ? cell.options.map((option) => ({
                      value: option.label,
                      id: option.id,
                      selected: cell.obj.k === option.id,
                  }))
                : [],
        },
    },
    initialValue: cell.obj.k,
    initialValueDecode: cell.value,
});

const BTNAdapter: CellAdapterFn = (cell): FButtonProps => ({
    icon: cell.icon,
});

const CHKAdapter: CellAdapterFn = (cell): FCheckboxProps => ({
    checked: cell.obj.k === 'on' || cell.obj.k === '1',
});

const CHIAdapter: CellAdapterFn = (cell): FChipsProps => {
    const chipNodes: KupChipNode[] = [];
    const ids = cell.obj.k ? cell.obj.k.split(';') : [];
    const descriptions = cell.value ? cell.value.split(';') : [];

    for (let i = 0; i < ids.length; i++) {
        chipNodes.push({
            id: ids[i],
            value: descriptions ? descriptions[i] : ids[i],
        });
    }

    return {
        data: chipNodes.filter((value) => !!value),
    };
};

const SWTAdapter: CellAdapterFn = (cell): FSwitchProps => ({
    ...cell.data,
    checked: cell.obj.k === 'on' || cell.obj.k === '1',
    leadingLabel: true,
    disabled: false,
});

const RADAdapter: CellAdapterFn = (cell): FRadioProps => ({
    ...cell.data,
    data: cell.options?.length
        ? cell.options.map((option) => ({
              value: option.id,
              label: option.label,
              checked: option.id == cell.obj.k,
              icon: option.icon,
          }))
        : [],
});

const TIMAdapter: CellAdapterFn = (
    cell
): Partial<Components.KupTimePicker> => ({
    ...cell.data,
    initialValue: cell.obj.k,
});

const DATAdapter: CellAdapterFn = (
    cell
): Partial<Components.KupDatePicker> => ({
    ...cell.data,
    initialValue: cell.obj.k,
});

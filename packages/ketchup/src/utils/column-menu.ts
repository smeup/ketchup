import { KupDataTable } from '../components/kup-data-table/kup-data-table';
import { Column } from '../components/kup-data-table/kup-data-table-declarations';
import {
    getValueForDisplay,
    isColumnFiltrableByInterval,
} from '../components/kup-data-table/kup-data-table-helper';
import { KupTree } from '../components/kup-tree/kup-tree';
import { GenericObject } from '../types/GenericTypes';
import { isCheckbox, isStringObject } from './object-utils';

export function columnMenuData(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject {
    let cardData: GenericObject = {
        button: prepButtons(comp, column),
        checkbox: prepCheckbox(comp, column),
        textfield: !isColumnFiltrableByInterval(column)
            ? prepTextfield(comp, column)
            : [],
    };
    return cardData;
}

function isTree(comp: KupDataTable | KupTree): comp is KupTree {
    return (comp as KupTree).rootElement.tagName === 'KUP-TREE';
}

function prepButtons(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject[] {
    let props: GenericObject[] = [];
    if (!isTree(comp)) {
        props.push({
            'data-storage': {
                columnName: column.name,
            },
            icon: 'book',
            id: 'group',
            title:
                comp.getGroupByName(column.name) != null
                    ? 'Disable grouping'
                    : 'Enable grouping',
        });
        if (comp.removableColumns) {
            props.push({
                'data-storage': {
                    columnName: column.name,
                },
                icon: 'table-column-remove',
                id: 'remove',
                title: 'Hide column',
            });
        }
    }
    props.push({
        icon: 'table-column-plus-after',
        id: 'add',
        title: 'Add column',
    });
    props.push({
        icon: 'label',
        id: 'description',
        title: 'Add code/description column',
    });
    return props;
}

function prepCheckbox(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject[] {
    let props: GenericObject[] = [];
    if (
        !isTree(comp) &&
        comp.showFilters &&
        (isStringObject(column.obj) || isCheckbox(column.obj))
    ) {
        const checkBoxesFilter: string[] = comp.getCheckBoxFilterValues(
            column.name
        );
        const columnValues: {
            value: string;
            displayedValue: string;
        }[] = comp.getColumnValues(column);

        if (columnValues.length > 0) {
            props.push({
                checked: checkBoxesFilter.length == 0,
                id: 'global-checkbox',
                label: '(*All)',
            });
        }
        for (let index = 0; index < columnValues.length; index++) {
            let label = columnValues[index].displayedValue;
            if (isCheckbox(column.obj)) {
                if (columnValues[index].value == '1') {
                    label = 'Checked';
                } else {
                    label = 'Unchecked';
                }
            }
            props.push({
                checked: checkBoxesFilter.includes(columnValues[index].value),
                'data-storage': {
                    column: column,
                    value: columnValues[index].value,
                },
                label: label,
            });
        }
    }
    return props;
}

function prepTextfield(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject[] {
    let props: GenericObject[] = [];
    if (!isTree(comp) && comp.showFilters && isStringObject(column.obj)) {
        let filterInitialValue = comp.getTextFieldFilterValue(column.name);
        filterInitialValue = getValueForDisplay(
            filterInitialValue,
            column.obj,
            column.decimals
        );
        return [
            {
                'data-storage': {
                    column: column,
                },
                fullWidth: true,
                icon: 'magnify',
                id: 'filter',
                isClearable: true,
                label: 'Search...',
            },
        ];
    }
    return props;
}

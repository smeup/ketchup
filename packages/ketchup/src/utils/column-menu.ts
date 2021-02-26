import { KupDataTable } from '../components/kup-data-table/kup-data-table';
import { Column } from '../components/kup-data-table/kup-data-table-declarations';
import { KupTree } from '../components/kup-tree/kup-tree';
import { GenericObject } from '../types/GenericTypes';
import { isStringObject } from './object-utils';

export function columnMenuData(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject {
    console.log('here');
    let cardData: GenericObject = {
        button: prepButtons(comp, column),
        checkbox: prepCheckbox(),
        textfield: prepTextfield(comp, column),
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
    let buttonProps: GenericObject[] = [];
    if (!isTree(comp)) {
        buttonProps.push({
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
            buttonProps.push({
                'data-storage': {
                    columnName: column.name,
                },
                icon: 'table-column-remove',
                id: 'remove',
                title: 'Hide column',
            });
        }
    }
    buttonProps.push({
        icon: 'table-column-plus-after',
        id: 'add',
        title: 'Add column',
    });
    buttonProps.push({
        icon: 'label',
        id: 'description',
        title: 'Add code/description column',
    });
    return buttonProps;
}

function prepCheckbox(): GenericObject[] {
    return [];
}

function prepTextfield(
    comp: KupDataTable | KupTree,
    column: Column
): GenericObject[] {
    if (!isTree(comp) && comp.showFilters && isStringObject(column.obj)) {
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
    } else {
        return null;
    }
}

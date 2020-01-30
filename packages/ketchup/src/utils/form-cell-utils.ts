import {
    FormCell,
    FormField,
} from '../components/kup-form/kup-form-declarations';

import {
    getShape,
    getValue,
    getFromConfig,
    buildProgressBarConfig,
    isCombo,
    isAutocomplete,
    isSearch,
    isConfigurator,
    isInputText,
} from './cell-utils';
import {
    isProgressBar as isProgressBarObj,
    isImage as isImageObj,
} from './object-utils';

// ------------------------------------------------------------------------------------------------
// Form cells utils functions -> TODO: refactor -> uniform Box, Datatable and Form structures ->
// when all is uniform we can delete this file and use a common cell-utils file
// ------------------------------------------------------------------------------------------------

export function getShapeInForm(cell: FormCell, field: FormField): string {
    return getShape(cell, field);
}

export function getValueInForm(cell: FormCell): string {
    return getValue(cell, null);
}

export function getFromConfigInForm(
    cell: FormCell,
    field: FormField,
    propName: string
): any {
    return getFromConfig(cell, field, propName);
}

// -------------
// PROGRESS BAR
// -------------

// NB: wrapping of isProgressBar not enough
export function isProgressBarInForm(cell: FormCell, field: FormField) {
    let shape = getShape(cell, field);
    return (
        'PGB' === shape ||
        (!shape && cell && cell.obj && isProgressBarObj(cell.obj)) ||
        (!shape && field.obj && isProgressBarObj(field.obj))
    );
}

export function buildProgressBarConfigInForm(
    cell: FormCell,
    field: FormField,
    isSmall: boolean = false,
    value: string
) {
    return buildProgressBarConfig(cell, field, isSmall, value);
}

// -------------
// IMAGE
// -------------
// NB: wrapping of isImage not enough
export function isImageInForm(cell: FormCell, field: FormField) {
    let shape = getShape(cell, field);
    return (
        'IMG' === shape ||
        (!shape && cell && cell.obj && isImageObj(cell.obj)) ||
        (!shape && field.obj && isImageObj(field.obj))
    );
}

// -------------
// COMBO
// -------------

export function isComboInForm(cell: FormCell, field: FormField) {
    return isCombo(cell, field);
}

// -------------
// AUTOCOMPLETE
// -------------

export function isAutocompleteInForm(cell: FormCell, field: FormField) {
    return isAutocomplete(cell, field);
}

// -------------
// SEARCH
// -------------

export function isSearchInForm(cell: FormCell, field: FormField) {
    return isSearch(cell, field);
}

// -------------
// CRUD
// -------------

export function isConfiguratorInForm(cell: FormCell, field: FormField) {
    return isConfigurator(cell, field);
}

// -------------
// INPUT TEXT
// -------------

export function isInputTextInForm(cell: FormCell, field: FormField) {
    return isInputText(cell, field);
}

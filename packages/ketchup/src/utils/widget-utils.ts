// Widget utils functions

// -------------
// BUTTON
// -------------
import get from 'lodash/get';
//import isEmpty from 'lodash/isEmpty';
import { CrudRecord } from '../components/kup-crud/kup-crud-declarations';

import { generateUuidv4 } from './utils';

export interface J4objKupButtonConfig {
    checked: boolean;
    customStyle: string;
    disabled: boolean;
    flat: boolean;
    fullHeight: boolean;
    fullWidth: boolean;
    icon: string;
    iconColor: string;
    iconOff: string;
    label: string;
    outlined: boolean;
    shaped: boolean;
    toggable: boolean;
    tooltip: string;
    trailingIcon: boolean;
}

export function buildButtonConfig(value: string, config): J4objKupButtonConfig {
    let checked = false;
    let customStyle = undefined;
    let disabled = false;
    let flat = true;
    let fullHeight = false;
    let fullWidth = false;
    let icon = undefined;
    let iconColor = undefined;
    let iconOff = null;
    let label = value;
    let outlined = false;
    let shaped = false;
    let toggable = false;
    let tooltip = undefined;
    let trailingIcon = false;

    if (config) {
        icon = config.icon;

        tooltip = config.tooltip;

        if (config.hasOwnProperty('checked')) {
            checked = config.checked;
        }

        if (config.hasOwnProperty('customStyle')) {
            customStyle = config.customStyle;
        }

        if (config.hasOwnProperty('disabled')) {
            disabled = config.disabled;
        }

        if (config.hasOwnProperty('flat')) {
            flat = config.flat;
        }

        if (config.hasOwnProperty('fullHeight')) {
            fullHeight = config.fullHeight;
        }

        if (config.hasOwnProperty('fullWidth')) {
            fullWidth = config.fullWidth;
        }

        if (config.hasOwnProperty('iconColor')) {
            iconColor = config.iconColor;
        }

        if (config.hasOwnProperty('iconOff')) {
            iconOff = config.iconOff;
        }

        if (config.hasOwnProperty('outlined')) {
            outlined = config.outlined;
        }

        if (config.hasOwnProperty('shaped')) {
            shaped = config.shaped;
        }

        if (config.hasOwnProperty('toggable')) {
            toggable = config.toggable;
        }

        if (config.hasOwnProperty('trailingIcon')) {
            trailingIcon = config.trailingIcon;
        }
    }

    return {
        checked: checked,
        customStyle: customStyle,
        disabled: disabled,
        flat: flat,
        fullHeight: fullHeight,
        fullWidth: fullWidth,
        icon: icon,
        iconColor: iconColor,
        iconOff: iconOff,
        label: label,
        outlined: outlined,
        shaped: shaped,
        toggable: toggable,
        tooltip: tooltip,
        trailingIcon: trailingIcon,
    };
}

// -------------
// FORM
// -------------

import {
    FormFields,
    FormField,
} from '../components/kup-form/kup-form-declarations';

export function getFields(formFields: FormFields): FormField[] {
    if (formFields) {
        const keys = Object.keys(formFields);
        let fields = [];
        keys.forEach((key) => {
            fields.push(formFields[key]);
        });
        return fields;
    } else {
        return [];
    }
}

export function getVisibleFields(fields: FormField[]): FormField[] {
    let visibleFields = fields.filter((field) => {
        if (field.hasOwnProperty('hidden')) {
            return !field.hidden;
        }

        return true;
    });
    return visibleFields;
}

// -------------
// CRUD
// -------------

export function outputValue(value: any, outputValueFunction: string) {
    let output = '';
    if (Array.isArray(value)) {
        value.forEach((item) => {
            output = output + ' ' + outputValueItem(item, outputValueFunction);
        });
    } else {
        output = outputValueItem(value, outputValueFunction);
    }
    return output;
}

export function outputValueItem(value: any, outputValueFunction: string) {
    if (typeof value === 'object') {
        let output = null;
        if (outputValueFunction) {
            output = get(value, outputValueFunction, null);
        }
        if (output == null) {
            return 'TODO: improve outputValue method';
        } else {
            return output;
        }
    } else {
        return value;
    }
}

// simplified serializing of crud records (only for test -> TODO: use the entire record as is)
export function zipRecords(records: CrudRecord[]): any {
    let compactRecords = [];
    if (records) {
        records.forEach((record) => {
            let compactRecord = {};
            const keys = Object.keys(record.cells);
            keys.forEach((key) => {
                compactRecord[key] = record.cells[key].value;
            });
            compactRecords.push(compactRecord);
        });
    }
    return compactRecords;
}

// simplified deserializing of crud records (only for test -> TODO: use the entire record as is)
export function unzipRecords(value: any): CrudRecord[] {
    let records = [];
    if (value) {
        value.forEach((compactRecord) => {
            let recordFields = {};
            const keys = Object.keys(compactRecord);
            keys.forEach((key) => {
                recordFields[key] = {
                    value: compactRecord[key],
                };
            });
            let record = { id: generateUuidv4(), cells: recordFields };
            records.push(record);
        });
    }
    return records;
}

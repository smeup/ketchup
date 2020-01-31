// Widget utils functions

// -------------
// BUTTON
// -------------
import get from 'lodash/get';
//import isEmpty from 'lodash/isEmpty';
import { FormRecord } from '../components/kup-form/kup-form-declarations';

export interface J4objKupButtonConfig {
    flat: boolean;
    buttonStyle: {};
    imageSrc: string;
    iconClass: string;
    label: string;
    tooltip: string;
    textmode: string;
    showtext: boolean;
    fillspace: boolean;
}

export function buildButtonConfig(value: string, config): J4objKupButtonConfig {
    let label = value;
    let textMode = 'Hint';
    let buttonStyle = null;
    let icon = null;
    let imageSrc = null;
    let tooltip = null;
    let flat = true;
    let showtext = false;
    let fillspace = false;

    if (config) {
        icon = config.icon;

        imageSrc = config.imageSrc;

        tooltip = config.tooltip;

        if (config.hasOwnProperty('showtext')) {
            showtext = config.showtext;
        }

        if (config.hasOwnProperty('fillspace')) {
            fillspace = config.fillspace;
        }

        if (config.hasOwnProperty('flat')) {
            flat = config.flat;

            if (!flat) {
                textMode = '';
            }
        }

        if (config.hasOwnProperty('buttonStyle')) {
            buttonStyle = config.buttonStyle;
        }
    }

    return {
        buttonStyle: buttonStyle,
        label,
        textmode: textMode,
        imageSrc: imageSrc,
        tooltip: tooltip,
        iconClass: icon,
        flat,
        showtext,
        fillspace,
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
        console.log('OUTPUT ' + output + ' ' + value);
        if (output == null) {
            return 'TODO: improve outputValue method';
        } else {
            return output;
        }
    } else {
        return value;
    }
}

export function zipRecords(records: FormRecord[]): any {
    let compactRecords = [];
    if (records) {
        records.forEach((record) => {
            let compactRecord = {};
            const keys = Object.keys(record.fields);
            keys.forEach((key) => {
                console.log('key' + key);
                compactRecord[key] = record.fields[key].value;
            });
            compactRecords.push(compactRecord);
        });
    }
    return compactRecords;
}

export function unzipRecords(value: any): FormRecord[] {
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
            let record = { fields: recordFields };
            records.push(record);
        });
    }
    return records;
}

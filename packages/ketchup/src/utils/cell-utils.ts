// Box and datatables cells utils functions

import get from 'lodash/get';
import { Cell } from '../components/kup-data-table/kup-data-table-declarations';
import { BoxObject } from '../components/kup-box/kup-box-declarations';
import { isProgressBar as isProgressBarObj } from './object-utils';
import { isImage as isImageObj } from './object-utils';
import numeral from 'numeral';
import { toKebabCase } from './utils';

// -------------
// COMMONS
// -------------

export function getShape(cell: Cell, boxObject: BoxObject): string {
    let prop = get(cell, 'shape', null);
    if (!prop) {
        prop = get(boxObject, 'shape', null);
    }
    return prop ? prop.toUpperCase() : null;
}

export function getValue(cell: Cell, boxObject: BoxObject): string {
    let prop = get(cell, 'value', null);
    if (!prop) {
        prop = get(boxObject, 'value', null);
    }
    return prop;
}

export function getFromConfig(
    cell: Cell,
    boxObject: BoxObject,
    propName: string
): any {
    let prop = null;
    if (cell.config) {
        prop = get(cell.config, propName, null);
    }
    if (!prop && boxObject && boxObject.config) {
        prop = get(boxObject.config, propName, null);
    }
    return prop;
}

// -------------
// BUTTON
// -------------

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

export function buildButtonConfig(cell: Cell): J4objKupButtonConfig {
    let label = cell.value;
    let textMode = 'Hint';
    let buttonStyle = null;
    let icon = null;
    let imageSrc = null;
    let tooltip = null;
    let flat = true;
    let showtext = false;
    let fillspace = false;

    if (cell.config) {
        const config = cell.config;

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
// PROGRESS BAR
// -------------

export function isProgressBar(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return (
        'PGB' === shape || (!shape && cell.obj && isProgressBarObj(cell.obj))
    );
}

/**
 * These are the camelCase javascript suffixes of the CSS vars of kup-progress-bar.
 * They always must be equal to those you can find inside the file kup-progress-bar.scss in the first section,
 * save for the prefix (--kup-pb_), which will be added directly inside the [buildProgressBarConfig function]{@link buildProgressBarConfig}
 */
const progressbarCssVars = [
    'backgroundColor',
    'borderRadius',
    'foregroundColor',
    'textColor',
];

/**
 * Given a Cell object (from data-talbe or box component), a value and an optional isSmall flag,
 * returns the jsx to create a progressbar.
 * @param cell - The cell to render as a progressbar.
 * @param value - The value the progressbar must set.
 * @param [isSmall] - flag to specify if the progressbar must be rendered as small one.
 */
export function buildProgressBarConfig(
    cell: Cell,
    boxObject: BoxObject,
    isSmall: boolean = false,
    value: string
) {
    const wrapperStyle = {};

    for (let i = 0; i < progressbarCssVars.length; i++) {
        let progressbarCssVar = getFromConfig(
            cell,
            boxObject,
            progressbarCssVars[i]
        );

        if (progressbarCssVar) {
            wrapperStyle[
                '--kup-pb_' + toKebabCase(progressbarCssVars[i])
            ] = progressbarCssVar;
        }
    }

    let hideLabel = getFromConfig(cell, boxObject, 'hideLabel');
    let labelText = getFromConfig(cell, boxObject, 'labelText');

    return {
        isSmall: isSmall,
        labelText: labelText,
        hideLabel: !!hideLabel,
        style: wrapperStyle,
        value: numeral(value).value(),
    };
}

// -------------
// IMAGE
// -------------

export function isImage(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'IMG' === shape || (!shape && cell.obj && isImageObj(cell.obj));
}

// -------------
// ICON
// -------------

export function buildIconConfig(cell: Cell, value: string) {
    let iconStylesheets = null;
    let iconStyle = null;
    let imageSrc = null;

    if (cell.config) {
        const config = cell.config;
        iconStylesheets = config.iconStylesheets;
        iconStyle = config.iconStyle;
        imageSrc = config.imageSrc;
    }

    return {
        iconClass: value,
        iconStyle: iconStyle,
        ...(iconStylesheets ? { iconStylesheets: iconStylesheets } : {}),
        ...(imageSrc ? { imageSrc: imageSrc } : {}),
    };
}

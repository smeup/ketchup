// actually this contains box utils but they can be generalized to be also datatable ones..

import get from 'lodash/get';
import { Cell } from '../components/kup-data-table/kup-data-table-declarations';
import { BoxObject } from '../components/kup-box/kup-box-declarations';
import { isProgressBar as isProgressBarObj } from './object-utils';
import { isImage as isImageObj } from './object-utils';

export function isImage(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'IMG' === shape || (!shape && cell.obj && isImageObj(cell.obj));
}

export function isProgressBar(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return (
        'PGB' === shape || (!shape && cell.obj && isProgressBarObj(cell.obj))
    );
}

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
    if (!prop && boxObject.config) {
        prop = get(boxObject.config, propName, null);
    }
    return prop;
}

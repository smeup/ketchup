import { FCellInfo, FCellProps, FCellTypes } from './f-cell-declarations';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getCellType, getCellValueForDisplay } from '../../utils/cell-utils';
import {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { FCheckbox } from '../f-checkbox/f-checkbox';
import { FCheckboxProps } from '../f-checkbox/f-checkbox-declarations';
import { FTextField } from '../f-text-field/f-text-field';
import { stringToNumber } from '../../utils/utils';
import { FImageProps } from '../f-image/f-image-declarations';
import { FImage } from '../f-image/f-image';
import { FChip } from '../f-chip/f-chip';
import { styleHasWritingMode } from '../../components/kup-data-table/kup-data-table-helper';
import { KupThemeColorValues } from '../../utils/kup-theme/kup-theme-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FCell: FunctionalComponent<FCellProps> = (props: FCellProps) => {
    const cell = props.cell;
    const column = props.column;
    const row = props.row;
    const isEditable = cell.isEditable && props.editable ? true : false;
    const valueToDisplay = props.previousValue !== cell.value ? cell.value : '';
    const cellType = getCellType(cell);
    const subcomponentProps: unknown = { ...cell.data };
    const classObj: Record<string, boolean> = {
        'cell-content': true,
        clickable: !!column.clickable,
        'force-one-line': props.oneLine == true ? true : null,
        [cellType + '-cell']: true,
    };
    let content: unknown = valueToDisplay;

    if (
        isEditable &&
        (cellType === FCellTypes.CHECKBOX ||
            cellType === FCellTypes.DATE ||
            cellType === FCellTypes.NUMBER ||
            cellType === FCellTypes.STRING)
    ) {
        content = setEditableCell(cellType, cell, column, props);
    } else if (
        cellType === FCellTypes.CHECKBOX ||
        cellType === FCellTypes.DATE ||
        cellType === FCellTypes.DATETIME ||
        cellType === FCellTypes.TIME ||
        cellType === FCellTypes.ICON ||
        cellType === FCellTypes.IMAGE ||
        cellType === FCellTypes.LINK ||
        cellType === FCellTypes.NUMBER ||
        cellType === FCellTypes.STRING
    ) {
        content = setCell(
            cellType,
            subcomponentProps,
            content,
            classObj,
            cell,
            column
        );
    } else if (cell.data || cellType === 'editor') {
        if (!props.lazy) {
            const lazyClass = 'cell-' + cellType + ' placeholder';
            content = <span class={lazyClass}></span>;
        } else {
            content = setKupCell(cellType, classObj, props, cell, row, column);
        }
    }

    const style = cell.style;

    if (styleHasWritingMode(cell)) {
        classObj['is-vertical'] = true;
    }

    let icon: VNode = undefined;
    if (!isEditable && (column.icon || cell.icon) && content) {
        let svg: string = '';
        if (cell.icon) {
            svg = cell.icon;
        } else {
            svg = column.icon;
        }
        icon = <FImage resource={svg} wrapperClass="obj-icon" />;
    }

    let cellTitle: string = null;
    if (cell.title != null && cell.title.trim() != '') {
        cellTitle = cell.title;
    }

    let infoEl: HTMLElement = null;
    if (cell.info && cell.info.message) {
        const info: FCellInfo = { ...cell.info };
        if (!info.color) {
            info.color = `var(${KupThemeColorValues.INFO})`;
        }
        if (!info.icon) {
            info.icon = 'info';
        }
        let fProps: FImageProps = {
            color: info.color,
            resource: info.icon,
            sizeX: '1.25em',
            sizeY: '1.25em',
            title: info.message,
            wrapperClass: 'cell-info',
        };
        infoEl = <FImage {...fProps} />;
    }

    return (
        <div
            class={`f-cell--wrapper ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
        >
            <div class={classObj} style={style} title={cellTitle}>
                {props.indents}
                {infoEl}
                {icon}
                {content}
            </div>
        </div>
    );
};

function setEditableCell(
    cellType: string,
    cell: Cell,
    column: Column,
    props: FCellProps
) {
    switch (cellType) {
        case FCellTypes.CHECKBOX:
            return (
                <FCheckbox
                    checked={(cell.data as FCheckboxProps).checked}
                    onChange={props.onUpdate}
                />
            );
        case FCellTypes.DATE:
            return (
                <kup-date-picker
                    onkup-datepicker-change={props.onUpdate}
                    data={{
                        'kup-text-field': {
                            fullWidth: true,
                        },
                    }}
                    initialValue={cell.value}
                />
            );
        case FCellTypes.NUMBER:
        case FCellTypes.STRING:
            return (
                <FTextField
                    icon={
                        cell.icon ? cell.icon : column.icon ? column.icon : null
                    }
                    fullWidth={true}
                    inputType={cellType === FCellTypes.NUMBER ? 'number' : null}
                    value={stringToNumber(cell.value).toString()}
                    onChange={props.onUpdate}
                />
            );
    }
}

function setCell(
    cellType: string,
    props: unknown,
    content: unknown,
    classObj: Record<string, boolean>,
    cell: Cell,
    column: Column
) {
    switch (cellType) {
        case FCellTypes.CHECKBOX:
            classObj['is-centered'] = true;
            return (
                <FImage
                    resource={
                        (props as FCheckboxProps).checked
                            ? 'check_box'
                            : 'check_box_outline_blank'
                    }
                    sizeX="18px"
                    sizeY="18px"
                />
            );
        case FCellTypes.DATE:
            if (content && content != '') {
                const cellValue = getCellValueForDisplay(column, cell);
                return cellValue;
            }
            return content;
        case FCellTypes.DATETIME:
            if (content && content != '') {
                const cellValue = getCellValueForDisplay(column, cell);
                return cellValue;
            }
            return content;
        case FCellTypes.ICON:
        case FCellTypes.IMAGE:
            classObj['is-centered'] = true;
            if ((props as FImageProps).badgeData) {
                classObj['has-padding'] = true;
            }
            return <FImage {...props} />;
        case FCellTypes.LINK:
            return (
                <a class="cell-link" href={content as string} target="_blank">
                    {cell.value}
                </a>
            );
        case FCellTypes.NUMBER:
            if (content && content != '') {
                const cellValueNumber = stringToNumber(cell.value);
                const cellValue = getCellValueForDisplay(column, cell);
                if (cellValueNumber < 0) {
                    classObj['negative-number'] = true;
                }
                return cellValue;
            }
            return content;
        case FCellTypes.TIME:
            if (content && content != '') {
                const cellValue = getCellValueForDisplay(column, cell);
                return cellValue;
            }
            return content;
        case FCellTypes.STRING:
        default:
            return content;
    }
}

function setKupCell(
    cellType: string,
    classObj: Record<string, boolean>,
    props: any,
    cell: Cell,
    row: Row,
    column: Column
) {
    switch (cellType) {
        case FCellTypes.BAR:
            if (!props.data) {
                return <kup-image {...props} />;
            } else {
                const barStyle = {
                    height: props.sizeY,
                };
                return (
                    <div class="bar-cell-content" style={barStyle}>
                        <FImage {...props} />
                    </div>
                );
            }
        case FCellTypes.BTN:
            classObj['is-centered'] = true;
            props['data-storage'] = {
                cell: cell,
                row: row,
                column: column,
            };
            return <kup-button-list {...props}></kup-button-list>;
        case FCellTypes.BUTTON:
            classObj['is-centered'] = true; /*
            props['onkup-button-click'] = this.onJ4btnClicked.bind(
                this,
                row,
                column,
                cell
            );*/
            return <kup-button {...props}></kup-button>;
        case FCellTypes.CHART:
            classObj['is-centered'] = true;
            return <kup-chart {...props} />;
        case FCellTypes.CHIPS:
            return <FChip {...props} />;
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    value={cell.value}
                    {...props}
                    disabled
                ></kup-color-picker>
            );
        case FCellTypes.EDITOR:
            return <div innerHTML={cell.value}></div>;
        case FCellTypes.GAUGE:
            return (
                <kup-gauge
                    value={stringToNumber(cell.value)}
                    width-component="100%"
                    {...props}
                ></kup-gauge>
            );
        case FCellTypes.KNOB:
        case FCellTypes.PROGRESS_BAR:
            return <kup-progress-bar {...props}></kup-progress-bar>;
        case FCellTypes.RADIO:
            classObj['is-centered'] = true;
            props['disabled'] = row.readOnly;
            return <kup-radio {...props}></kup-radio>;
        case FCellTypes.RATING:
            return (
                <kup-rating
                    value={stringToNumber(cell.value)}
                    {...props}
                    disabled
                ></kup-rating>
            );
    }
}

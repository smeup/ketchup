import type {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import type { FCheckboxProps } from '../f-checkbox/f-checkbox-declarations';
import type { FImageProps } from '../f-image/f-image-declarations';
import type { FButtonProps } from '../f-button/f-button-declarations';
import type { KupChart } from '../../components/kup-chart/kup-chart';
import { FCellInfo, FCellProps, FCellTypes } from './f-cell-declarations';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getCellType, getCellValueForDisplay } from '../../utils/cell-utils';
import { FCheckbox } from '../f-checkbox/f-checkbox';
import { FTextField } from '../f-text-field/f-text-field';
import { stringToNumber } from '../../utils/utils';
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
        'f-cell__content': true,
        clickable: !!column.clickable,
        'force-one-line': props.oneLine == true ? true : false,
        [cellType + '-cell']: true,
        [props.wrapperClass]: props.wrapperClass ? true : false,
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
        setCellSize(cellType, subcomponentProps, cell);
        content = setCell(
            cellType,
            subcomponentProps,
            content,
            classObj,
            cell,
            column
        );
    } else if (cell.data || cellType === 'editor') {
        setCellSizeKup(cellType, subcomponentProps, cell);
        if (!props.lazy) {
            const lazyClass = 'cell-' + cellType + ' placeholder';
            content = <span class={lazyClass}></span>;
        } else {
            content = setKupCell(
                cellType,
                classObj,
                subcomponentProps,
                cell,
                row,
                column
            );
        }
    }

    const style = cell.style;

    if (styleHasWritingMode(cell)) {
        classObj['is-vertical'] = true;
    }

    let icon: VNode = undefined;
    if (!isEditable && (column.icon || cell.icon) && content) {
        const fProps: FImageProps = {
            color: `rgba(var(${KupThemeColorValues.TEXT}-rgb), 0.375)`,
            resource: cell.icon ? cell.icon : column.icon,
            sizeX: '1.25em',
            sizeY: '1.25em',
            wrapperClass: 'obj-icon',
        };
        icon = <FImage {...fProps} />;
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
        const fProps: FImageProps = {
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
                cell.cssClass
                    ? cell.cssClass
                    : column.cssClass
                    ? column.cssClass
                    : ''
            }`}
            style={
                style &&
                (style.border !== undefined || style.padding !== undefined)
                    ? {
                          border: style.border,
                          padding: style.padding,
                      }
                    : null
            }
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

function setCellSize(cellType: string, subcomponentProps: unknown, cell: Cell) {
    switch (cellType) {
        case FCellTypes.CHECKBOX:
        case FCellTypes.ICON:
            if (!(subcomponentProps as FImageProps).sizeX) {
                (subcomponentProps as FImageProps).sizeX = '18px';
            }
            if (!(subcomponentProps as FImageProps).sizeY) {
                (subcomponentProps as FImageProps).sizeY = '18px';
            }
            if (cell.style) {
                if (!cell.style.height) {
                    cell.style['minHeight'] = (
                        subcomponentProps as FImageProps
                    ).sizeY;
                }
            } else {
                cell.style = {
                    minHeight: (subcomponentProps as FImageProps).sizeY,
                };
            }
            break;
        case FCellTypes.IMAGE:
            if (!(subcomponentProps as FImageProps).sizeX) {
                (subcomponentProps as FImageProps).sizeX = 'auto';
            }
            if (!(subcomponentProps as FImageProps).sizeY) {
                (subcomponentProps as FImageProps).sizeY = '64px';
            }
            break;
    }
}

function setCellSizeKup(
    cellType: string,
    subcomponentProps: unknown,
    cell: Cell
) {
    switch (cellType) {
        case FCellTypes.BAR:
            if (!(subcomponentProps as FImageProps).sizeY) {
                (subcomponentProps as FImageProps).sizeY = '26px';
            }
            break;
        case FCellTypes.BUTTON:
            let height: string = '';
            if ((subcomponentProps as FButtonProps).label) {
                height = '36px';
            }
            if (cell.style) {
                if (!cell.style.height) {
                    cell.style['minHeight'] = height;
                }
            } else {
                cell.style = { minHeight: height };
            }
            break;
        case FCellTypes.CHART:
            if (!(subcomponentProps as KupChart).sizeX) {
                (subcomponentProps as KupChart).sizeX = '100%';
            }
            if (!(subcomponentProps as KupChart).sizeY) {
                (subcomponentProps as KupChart).sizeY = '100%';
            }
            break;
        case FCellTypes.CHIPS:
            if (cell.style) {
                if (!cell.style.height) {
                    cell.style['minHeight'] = '40px';
                }
            } else {
                cell.style = { minHeight: '40px' };
            }
            break;
        case FCellTypes.RADIO:
            if (cell.style) {
                if (!cell.style.height) {
                    cell.style['minHeight'] = '40px';
                }
            } else {
                cell.style = { minHeight: '40px' };
            }
            break;
    }
}

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
                    value={
                        cellType === FCellTypes.NUMBER
                            ? stringToNumber(cell.value).toString()
                            : cell.value
                    }
                    onChange={props.onUpdate}
                />
            );
    }
}

function setCell(
    cellType: string,
    subcomponentProps: unknown,
    content: unknown,
    classObj: Record<string, boolean>,
    cell: Cell,
    column: Column
) {
    switch (cellType) {
        case FCellTypes.CHECKBOX:
            classObj['c-centered'] = true;
            return (
                <FImage
                    resource={
                        (subcomponentProps as FCheckboxProps).checked
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
            classObj['c-centered'] = true;
            if ((subcomponentProps as FImageProps).badgeData) {
                classObj['has-padding'] = true;
            }
            return <FImage {...subcomponentProps} />;
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
    subcomponentProps: unknown,
    cell: Cell,
    row: Row,
    column: Column
) {
    switch (cellType) {
        case FCellTypes.BAR:
            if (!(subcomponentProps as FImageProps).data) {
                return <kup-image {...subcomponentProps} />;
            } else {
                const barStyle = {
                    height: (subcomponentProps as FImageProps).sizeY,
                };
                return (
                    <div class="bar-cell-content" style={barStyle}>
                        <FImage {...subcomponentProps} />
                    </div>
                );
            }
        case FCellTypes.BTN:
            classObj['c-centered'] = true;
            subcomponentProps['data-storage'] = {
                cell: cell,
                row: row,
                column: column,
            };
            return <kup-button-list {...subcomponentProps}></kup-button-list>;
        case FCellTypes.BUTTON:
            classObj['c-centered'] = true;
            return <kup-button {...subcomponentProps}></kup-button>;
        case FCellTypes.CHART:
            classObj['c-centered'] = true;
            return <kup-chart {...subcomponentProps} />;
        case FCellTypes.CHIPS:
            return <FChip {...subcomponentProps} />;
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    initialValue={cell.value}
                    {...subcomponentProps}
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
                    {...subcomponentProps}
                ></kup-gauge>
            );
        case FCellTypes.KNOB:
        case FCellTypes.PROGRESS_BAR:
            return <kup-progress-bar {...subcomponentProps}></kup-progress-bar>;
        case FCellTypes.RADIO:
            classObj['c-centered'] = true;
            subcomponentProps['disabled'] = row.readOnly;
            return <kup-radio {...subcomponentProps}></kup-radio>;
        case FCellTypes.RATING:
            return (
                <kup-rating
                    value={stringToNumber(cell.value)}
                    {...subcomponentProps}
                    disabled
                ></kup-rating>
            );
    }
}

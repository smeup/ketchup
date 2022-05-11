import type { FCheckboxProps } from '../f-checkbox/f-checkbox-declarations';
import type { FImageProps } from '../f-image/f-image-declarations';
import type { FButtonProps } from '../f-button/f-button-declarations';
import type { KupChart } from '../../components/kup-chart/kup-chart';
import type { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import type { KupAutocompleteEventPayload } from '../../components/kup-autocomplete/kup-autocomplete-declarations';
import type { KupComboboxEventPayload } from '../../components/kup-combobox/kup-combobox-declarations';
import type { KupDatePickerEventPayload } from '../../components/kup-date-picker/kup-date-picker-declarations';
import type { KupTimePickerEventPayload } from '../../components/kup-time-picker/kup-time-picker-declarations';
import type { KupRatingClickEventPayload } from '../../components/kup-rating/kup-rating-declarations';
import type { KupColorPickerEventPayload } from '../../components/kup-color-picker/kup-color-picker-declarations';
import { KupComponent, KupTagNames } from '../../types/GenericTypes';
import {
    autoAlignComps,
    editableTypes,
    FCellClasses,
    FCellEventPayload,
    FCellEvents,
    FCellInfo,
    FCellProps,
    FCellShapes,
    FCellTypes,
    kupTypes,
} from './f-cell-declarations';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getCellValueForDisplay } from '../../utils/cell-utils';
import { FCheckbox } from '../f-checkbox/f-checkbox';
import { FTextField } from '../f-text-field/f-text-field';
import { stringToNumber } from '../../utils/utils';
import { FImage } from '../f-image/f-image';
import { FChip } from '../f-chip/f-chip';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { KupButtonClickEventPayload } from '../../components/kup-button/kup-button-declarations';
import {
    KupDataCell,
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FCell: FunctionalComponent<FCellProps> = (
    props: FCellProps,
    children?: VNode[]
) => {
    const cell = props.cell;
    const column = props.column;
    const row = props.row;
    const shape = props.shape
        ? props.shape
        : cell.shape
        ? cell.shape
        : column.shape
        ? column.shape
        : null;
    const hasObj = !dom.ketchup.objects.isEmptyKupObj(cell.obj);
    const isEditable = cell.isEditable && props.editable ? true : false;
    const valueToDisplay = props.previousValue !== cell.value ? cell.value : '';
    const cellType = getCellType(cell, shape);
    const subcomponentProps: unknown = { ...cell.data };
    let cssClasses = cell.cssClass
        ? cell.cssClass
        : column.cssClass
        ? column.cssClass
        : '';
    const classObj: Record<string, boolean> = {
        'f-cell': true,
        [FCellClasses.OBJ]: hasObj ? true : false,
        [cellType + '-cell']: true,
        [props.wrapperClass]: props.wrapperClass ? true : false,
        [props.density]:
            props.density && cellType !== FCellTypes.BAR ? true : false,
        [cssClasses]: cssClasses ? true : false,
    };
    let content: unknown = valueToDisplay;

    if (isEditable && editableTypes.includes(cellType)) {
        content = setEditableCell(cellType, classObj, cell, column, props);
    } else if (cell.data && kupTypes.includes(cellType)) {
        if (props.setSizes) {
            setCellSizeKup(cellType, subcomponentProps, cell);
        }
        if (!props.renderKup) {
            const lazyClass = 'cell-' + cellType + ' placeholder';
            content = <span class={lazyClass}></span>;
        } else {
            content = setKupCell(
                cellType,
                classObj,
                subcomponentProps,
                cell,
                row,
                column,
                props
            );
        }
    } else {
        if (props.setSizes) {
            setCellSize(cellType, subcomponentProps, cell, props);
        }
        content = setCell(
            cellType,
            subcomponentProps,
            content,
            classObj,
            cell,
            column,
            props
        );
    }

    let icon: VNode = null;
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
    if (dom.ketchup.debug.isDebug() && hasObj) {
        cellTitle = cell.obj.t + '; ' + cell.obj.p + '; ' + cell.obj.k + ';';
    } else if (cell.title != null && cell.title.trim() != '') {
        cellTitle = cell.title;
    }

    let infoEl: HTMLElement = null;
    if (cell.info) {
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
            title: info.message ? info.message : '',
            wrapperClass: 'cell-info',
        };
        infoEl = <FImage {...fProps} />;
    }

    return (
        <div
            class={classObj}
            kup-get-cell-props={() => {
                return props;
            }}
            style={cell.style}
        >
            <div
                class="f-cell__content"
                style={cell.styleContent}
                title={cellTitle}
            >
                {children && children.length > 0
                    ? children
                    : [props.indents, infoEl, icon, content]}
            </div>
        </div>
    );
};

function setCellSize(
    cellType: string,
    subcomponentProps: unknown,
    cell: KupDataCell,
    props: FCellProps
) {
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
            if (
                (props.component as KupComponent).rootElement.tagName ===
                KupTagNames.BOX
            ) {
                if (!(subcomponentProps as FImageProps).sizeY) {
                    (subcomponentProps as FImageProps).sizeY = 'auto';
                }
                if ((subcomponentProps as FImageProps).fit === undefined) {
                    (subcomponentProps as FImageProps).fit = true;
                }
            } else if (!(subcomponentProps as FImageProps).sizeX) {
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
    cell: KupDataCell
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
        case FCellTypes.CHIP:
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
    classObj: Record<string, boolean>,
    cell: KupDataCell,
    column: KupDataColumn,
    props: FCellProps
): unknown {
    switch (cellType) {
        case FCellTypes.AUTOCOMPLETE:
            return (
                <kup-autocomplete
                    {...cell.data}
                    class="kup-full-width"
                    onkup-autocomplete-change={(
                        e: CustomEvent<KupAutocompleteEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-autocomplete-input={(
                        e: CustomEvent<KupAutocompleteEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                    onkup-autocomplete-iconclick={(
                        e: CustomEvent<KupAutocompleteEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.ICON_CLICK)}
                />
            );
        case FCellTypes.CHECKBOX:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            return (
                <FCheckbox
                    {...cell.data}
                    onChange={(e: InputEvent) =>
                        cellEvent(e, props, cellType, FCellEvents.UPDATE)
                    }
                />
            );
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    {...cell.data}
                    class="kup-full-width"
                    disabled={false}
                    onkup-colorpicker-change={(
                        e: CustomEvent<KupColorPickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                ></kup-color-picker>
            );
        case FCellTypes.COMBOBOX:
            return (
                <kup-combobox
                    {...cell.data}
                    class="kup-full-width"
                    onkup-combobox-change={(
                        e: CustomEvent<KupComboboxEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-combobox-input={(
                        e: CustomEvent<KupComboboxEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                    onkup-combobox-iconclick={(
                        e: CustomEvent<KupComboboxEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.ICON_CLICK)}
                />
            );
        case FCellTypes.DATE:
            return (
                <kup-date-picker
                    initialValue={cell.value}
                    {...cell.data}
                    class="kup-full-width"
                    onkup-datepicker-change={(
                        e: CustomEvent<KupDatePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-datepicker-input={(
                        e: CustomEvent<KupDatePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                />
            );
        case FCellTypes.RATING:
            return (
                <kup-rating
                    {...cell.data}
                    disabled={false}
                    onkup-rating-click={(
                        e: CustomEvent<KupRatingClickEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                ></kup-rating>
            );
        case FCellTypes.TIME:
            return (
                <kup-time-picker
                    initialValue={cell.value}
                    {...cell.data}
                    class="kup-full-width"
                    onkup-timepicker-change={(
                        e: CustomEvent<KupTimePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-timepicker-input={(
                        e: CustomEvent<KupTimePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                />
            );
        case FCellTypes.NUMBER:
            classObj[FCellClasses.C_RIGHT_ALIGNED] = true;
        case FCellTypes.STRING:
            return (
                <FTextField
                    {...cell.data}
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
                    onChange={(e: InputEvent) =>
                        cellEvent(e, props, cellType, FCellEvents.UPDATE)
                    }
                    onInput={(e: InputEvent) =>
                        cellEvent(e, props, cellType, FCellEvents.INPUT)
                    }
                    onIconClick={(e: MouseEvent) =>
                        cellEvent(e, props, cellType, FCellEvents.ICON_CLICK)
                    }
                />
            );
    }
}

function setCell(
    cellType: string,
    subcomponentProps: unknown,
    content: unknown,
    classObj: Record<string, boolean>,
    cell: KupDataCell,
    column: KupDataColumn,
    props: FCellProps
): unknown {
    switch (cellType) {
        case FCellTypes.AUTOCOMPLETE:
        case FCellTypes.COMBOBOX:
        case FCellTypes.DATE:
        case FCellTypes.DATETIME:
        case FCellTypes.TIME:
            if (content && content != '') {
                const cellValue = getCellValueForDisplay(column, cell);
                return <div class="f-cell__text">{cellValue}</div>;
            }
            return content;
        case FCellTypes.CHECKBOX:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
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
        case FCellTypes.EDITOR:
            return <div innerHTML={cell.value}></div>;
        case FCellTypes.ICON:
        case FCellTypes.IMAGE:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            if ((subcomponentProps as FImageProps).badgeData) {
                classObj[FCellClasses.C_PADDED] = true;
            }
            return <FImage {...subcomponentProps} />;
        case FCellTypes.LINK:
            return (
                <a href={content as string} target="_blank">
                    {cell.value}
                </a>
            );
        case FCellTypes.NUMBER:
            if (content && content != '') {
                const cellValueNumber = stringToNumber(cell.value);
                const cellValue = getCellValueForDisplay(column, cell);
                if (cellValueNumber < 0) {
                    classObj[FCellClasses.TEXT_DANGER] = true;
                }
                if (
                    autoAlignComps.includes(
                        (props.component as KupComponent).rootElement
                            .tagName as KupTagNames
                    )
                ) {
                    classObj[FCellClasses.C_RIGHT_ALIGNED] = true;
                }
                return <div class="f-cell__text">{cellValue}</div>;
            }
            return <div class="f-cell__text">{content}</div>;
        default:
            return <div class="f-cell__text">{content}</div>;
    }
}

function setKupCell(
    cellType: string,
    classObj: Record<string, boolean>,
    subcomponentProps: unknown,
    cell: KupDataCell,
    row: KupDataRow,
    column: KupDataColumn,
    props: FCellProps
): unknown {
    switch (cellType) {
        case FCellTypes.BAR:
            if (!(subcomponentProps as FImageProps).data) {
                return <kup-image {...subcomponentProps} />;
            } else {
                const barStyle = {
                    height: (subcomponentProps as FImageProps).sizeY,
                    width: '100%',
                };
                return (
                    <div style={barStyle}>
                        <FImage {...subcomponentProps} />
                    </div>
                );
            }
        case FCellTypes.BUTTON:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            return (
                <kup-button
                    {...subcomponentProps}
                    onkup-button-click={(
                        e: CustomEvent<KupButtonClickEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.CLICK)}
                ></kup-button>
            );
        case FCellTypes.BUTTON_LIST:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            subcomponentProps['data-storage'] = {
                cell: cell,
                row: row,
                column: column,
            };
            return <kup-button-list {...subcomponentProps}></kup-button-list>;
        case FCellTypes.CHART:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            return <kup-chart {...subcomponentProps} />;
        case FCellTypes.CHIP:
            return <FChip {...subcomponentProps} />;
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    {...subcomponentProps}
                    class="kup-full-width"
                    disabled
                ></kup-color-picker>
            );
        case FCellTypes.GAUGE:
            return (
                <kup-gauge
                    value={stringToNumber(cell.value)}
                    width-component="280px"
                    {...subcomponentProps}
                ></kup-gauge>
            );
        case FCellTypes.KNOB:
        case FCellTypes.PROGRESS_BAR:
            return <kup-progress-bar {...subcomponentProps}></kup-progress-bar>;
        case FCellTypes.RADIO:
            if (
                autoAlignComps.includes(
                    (props.component as KupComponent).rootElement
                        .tagName as KupTagNames
                )
            ) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            subcomponentProps['disabled'] = row.readOnly;
            return <kup-radio {...subcomponentProps}></kup-radio>;
        case FCellTypes.RATING:
            return <kup-rating {...subcomponentProps} disabled></kup-rating>;
    }
}

function getCellType(cell: KupDataCell, shape?: FCellShapes) {
    const obj = cell.obj;
    if (shape) {
        switch (shape.toUpperCase()) {
            case FCellShapes.AUTOCOMPLETE:
                return FCellTypes.AUTOCOMPLETE;
            case FCellShapes.BUTTON_LIST:
                return FCellTypes.BUTTON_LIST;
            case FCellShapes.CHART:
                return FCellTypes.CHART;
            case FCellShapes.CHECKBOX:
                return FCellTypes.CHECKBOX;
            case FCellShapes.CHIP:
                return FCellTypes.CHIP;
            case FCellShapes.COLOR_PICKER:
                return FCellTypes.COLOR_PICKER;
            case FCellShapes.COMBOBOX:
                return FCellTypes.COMBOBOX;
            case FCellShapes.EDITOR:
                return FCellTypes.EDITOR;
            case FCellShapes.GAUGE:
                return FCellTypes.GAUGE;
            case FCellShapes.IMAGE:
                return FCellTypes.IMAGE;
            case FCellShapes.KNOB:
                return FCellTypes.KNOB;
            case FCellShapes.PROGRESS_BAR:
                return FCellTypes.PROGRESS_BAR;
            case FCellShapes.RADIO:
                return FCellTypes.RADIO;
            case FCellShapes.RATING:
                return FCellTypes.RATING;
            case FCellShapes.TEXT_FIELD:
                return FCellTypes.STRING;
        }
    }

    if (dom.ketchup.objects.isBar(obj)) {
        return FCellTypes.BAR;
    } else if (dom.ketchup.objects.isButton(obj)) {
        return FCellTypes.BUTTON;
    } else if (dom.ketchup.objects.isChart(obj)) {
        return FCellTypes.CHART;
    } else if (dom.ketchup.objects.isCheckbox(obj)) {
        return FCellTypes.CHECKBOX;
    } else if (dom.ketchup.objects.isColor(obj)) {
        return FCellTypes.COLOR_PICKER;
    } else if (dom.ketchup.objects.isIcon(obj)) {
        return FCellTypes.ICON;
    } else if (dom.ketchup.objects.isImage(obj)) {
        return FCellTypes.IMAGE;
    } else if (dom.ketchup.objects.isLink(obj)) {
        return FCellTypes.LINK;
    } else if (dom.ketchup.objects.isProgressBar(obj)) {
        return FCellTypes.PROGRESS_BAR;
    } else if (dom.ketchup.objects.isRadio(obj)) {
        return FCellTypes.RADIO;
    } else if (dom.ketchup.objects.isKupObjList(obj)) {
        return FCellTypes.CHIP;
    } else if (dom.ketchup.objects.isNumber(obj)) {
        return FCellTypes.NUMBER;
    } else if (dom.ketchup.objects.isDate(obj)) {
        return FCellTypes.DATE;
    } else if (dom.ketchup.objects.isTimestamp(obj)) {
        return FCellTypes.DATETIME;
    } else if (dom.ketchup.objects.isTime(obj)) {
        return FCellTypes.TIME;
    } else if (dom.ketchup.objects.isVoCodver(obj)) {
        return FCellTypes.ICON;
    } else {
        return FCellTypes.STRING;
    }
}

function cellEvent(
    e: InputEvent | CustomEvent | MouseEvent,
    props: FCellProps,
    cellType: FCellTypes,
    cellEventName: FCellEvents
): void {
    const cell = props.cell;
    const column = props.column;
    const comp = props.component;
    const row = props.row;
    const isInputEvent = !!((e.target as HTMLElement).tagName === 'INPUT');
    let value = isInputEvent
        ? (e.target as HTMLInputElement).value
        : e.detail.value;
    if (cellEventName === FCellEvents.UPDATE) {
        switch (cellType) {
            case FCellTypes.AUTOCOMPLETE:
            case FCellTypes.COMBOBOX:
            case FCellTypes.DATE:
            case FCellTypes.TIME:
                if (cell.data) {
                    cell.data['initialValue'] = value;
                }
                break;
            case FCellTypes.CHECKBOX:
                value = value === 'on' ? '0' : '1';
                if (cell.data) {
                    (cell.data as FCheckboxProps).checked =
                        value === '0' ? false : true;
                }
                break;
        }
        if (cell.obj) {
            cell.obj.k = value.toString();
        }
        cell.value = value.toString();
        cell.displayedValue = null;
        cell.displayedValue = getCellValueForDisplay(column, cell);
    }
    if (comp && (comp as KupComponent).rootElement) {
        const cellEvent = new CustomEvent<FCellEventPayload>(cellEventName, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
                comp: comp,
                id: (comp as KupComponent).rootElement.id,
                cell: cell,
                column: column,
                event: e,
                row: row,
                type: cellType,
            },
        });
        (comp as KupComponent).rootElement.dispatchEvent(cellEvent);
        try {
            (comp as KupComponent).refresh();
        } catch (error) {}
    }
}

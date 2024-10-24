import type { FCheckboxProps } from '../f-checkbox/f-checkbox-declarations';
import type { FImageData, FImageProps } from '../f-image/f-image-declarations';
import type { FButtonProps } from '../f-button/f-button-declarations';
import type { KupChart } from '../../components/kup-chart/kup-chart';
import type { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import type { KupAutocompleteEventPayload } from '../../components/kup-autocomplete/kup-autocomplete-declarations';
import type { KupComboboxEventPayload } from '../../components/kup-combobox/kup-combobox-declarations';
import type { KupDatePickerEventPayload } from '../../components/kup-date-picker/kup-date-picker-declarations';
import type { KupTimePickerEventPayload } from '../../components/kup-time-picker/kup-time-picker-declarations';
import type { KupRatingClickEventPayload } from '../../components/kup-rating/kup-rating-declarations';
import type { KupColorPickerEventPayload } from '../../components/kup-color-picker/kup-color-picker-declarations';
import {
    GenericObject,
    KupComponent,
    KupTagNames,
} from '../../types/GenericTypes';
import {
    autoCenterComps,
    editableTypes,
    FCellClasses,
    FCellEventPayload,
    FCellEvents,
    FCellInfo,
    FCellProps,
    FCellShapes,
    FCellTypes,
    fullWidthFieldsComps,
    kupTypes,
} from './f-cell-declarations';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import {
    CHIAdapter,
    CHKAdapter,
    CMBandACPAdapter,
    getCellValueForDisplay,
    RADAdapter,
} from '../../utils/cell-utils';
import { FCheckbox } from '../f-checkbox/f-checkbox';
import { FTextField } from '../f-text-field/f-text-field';
import { FImage } from '../f-image/f-image';
import { FChip } from '../f-chip/f-chip';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import {
    CellOptions,
    KupDataCell,
    KupDataCellOptions,
    KupDataColumn,
    KupDataNode,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { FSwitch } from '../f-switch/f-switch';
import { KupChipChangeEventPayload } from '../../components/kup-chip/kup-chip-declarations';
import { FChipsProps, FChipType } from '../f-chip/f-chip-declarations';
import { ItemsDisplayMode } from '../../components/kup-list/kup-list-declarations';
import { FButton } from '../f-button/f-button';
import { FProgressBar } from '../f-progress-bar/f-progress-bar';
import { FRadio } from '../f-radio/f-radio';
import { FRating } from '../f-rating/f-rating';
import type { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { FRadioProps } from '../f-radio/f-radio-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import {
    DataAdapterFn,
    KupInputPanelCell,
} from '../../components/kup-input-panel/kup-input-panel-declarations';

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
    let isEditable = false;
    if (cell.hasOwnProperty('isEditable')) {
        isEditable = cell.isEditable;
    } else if (column.hasOwnProperty('isEditable')) {
        isEditable = column.isEditable;
    }
    isEditable = isEditable && props.editable;

    if (cell.options) {
        cell.data = mapData(cell) ?? cell.data;
    }

    const valueToDisplay = props.previousValue !== cell.value ? cell.value : '';
    const cellType = dom.ketchup.data.cell.getType(cell, shape);
    const subcomponentProps: unknown = { ...cell.data };
    let cssClasses = cell.cssClass
        ? cell.cssClass
        : column.cssClass
        ? column.cssClass
        : '';
    if ((props.component as KupDataTable).legacyLook) {
        cssClasses += ' monospace c-pre';
    }
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
    if (!cell.data) {
        setDefaults(cellType, cell);
    }
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
            placeholderResource: cell.placeholderIcon
                ? cell.placeholderIcon
                : column.placeholderIcon,
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
            placeholderResource: info.placeholderIcon,
            sizeX: '1.25em',
            sizeY: '1.25em',
            title: info.message ? info.message : '',
            wrapperClass: 'cell-info',
        };
        infoEl = <FImage {...fProps} />;
    }

    return (
        <div
            onKeyUp={(e) => cellEvent(e, props, cellType, FCellEvents.KEYUP)}
            class={classObj}
            kup-get-cell-props={() => {
                return props;
            }}
            ref={(el) => (cell.element = el)}
            style={cell.style}
        >
            <div
                class="f-cell__content"
                style={cell.styleContent}
                title={cellTitle}
            >
                {props.cellActionIcon && (
                    <FImage
                        resource="more_vert"
                        sizeX="16px"
                        sizeY="16px"
                        wrapperClass={`f-cell__iconfunction ${
                            cellType === FCellTypes.NUMBER ? 'left' : 'right'
                        }`}
                        onClick={props.cellActionIcon.onClick}
                        tabIndex={0}
                    />
                )}
                {children && children.length > 0
                    ? children
                    : [props.indents, infoEl, icon, content]}
            </div>
        </div>
    );
};

const mapData = (cell: KupDataCellOptions) => {
    if (!cell) {
        return null;
    }

    const options = cell.options;
    const fieldLabel = cell.title;
    const currentValue = cell.value;
    const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);
    const dataAdapterMap = new Map<FCellTypes, DataAdapterFn>([
        [FCellTypes.BUTTON_LIST, MainBTNAdapter.bind(this)],
        [FCellTypes.STRING, MainITXAdapter.bind(this)],
        [FCellTypes.RADIO, MainRADAdapter.bind(this)],
        [FCellTypes.AUTOCOMPLETE, MainCMBandACPAdapter.bind(this)],
        [FCellTypes.COMBOBOX, MainCMBandACPAdapter.bind(this)],
        [FCellTypes.CHECKBOX, MainCHKAdapter.bind(this)],
        [FCellTypes.OBJECT, MainObjectAdapter.bind(this)],
        [FCellTypes.CHIP, MainCHIAdapter.bind(this)],
    ]);

    const adapter = dataAdapterMap.get(cellType);
    return adapter ? adapter(options, fieldLabel, currentValue, cell) : null;
};

const MainCHIAdapter = (
    _options: CellOptions[],
    _fieldLabel: string,
    currentValue: string
) => {
    return CHIAdapter(currentValue);
};

const MainObjectAdapter = (
    _options: CellOptions[],
    fieldLabel: string,
    currentValue: string,
    _cell: KupInputPanelCell,
    _id: string
) => ({
    data: {
        initialValue: currentValue || '',
        label: fieldLabel || '',
        value: currentValue || '',
    },
});

const MainCHKAdapter = (
    _options: CellOptions[],
    fieldLabel: string,
    currentValue: string,
    cell: KupDataCellOptions
) => ({
    ...cell.data,
    checked: currentValue === 'on' || currentValue === '1',
    label: fieldLabel,
});

const MainBTNAdapter = (
    _options: CellOptions[],
    _fieldLabel: string,
    currentValue: string,
    cell: KupDataCellOptions
) => ({
    data: [
        {
            ...cell.data,
            icon: cell.icon,
            value: currentValue,
        },
    ],
});

const MainITXAdapter = (
    _options: CellOptions[],
    fieldLabel: string,
    _currentValue: string,
    cell: KupDataCellOptions
) => ({
    ...cell.data,
    label: fieldLabel,
});

const MainRADAdapter = (
    options: CellOptions[],
    _fieldLabel: string,
    currentValue: string
) => {
    return RADAdapter(currentValue, options);
};

const MainCMBandACPAdapter = (
    options: CellOptions[],
    fieldLabel: string,
    currentValue: string,
    cell: KupDataCellOptions,
    _id: string
) => {
    if (!cell.data?.data && options) {
        const configCMandACP = CMBandACPAdapter(currentValue, fieldLabel, []);
        configCMandACP.data['kup-list'].data = optionsTreeComboAdapter(
            options,
            currentValue
        );
        return configCMandACP;
    }
};

const optionsTreeComboAdapter = (options: any, currentValue: string) => {
    const adapter = optionsAdapterMap.get(options.type);

    if (adapter) {
        return adapter(options, currentValue);
    } else {
        return options.map((option) => ({
            value: option.label,
            id: option.id,
            selected: currentValue === option.id,
        }));
    }
};

const treeOptionsNodeAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.children.map((child) => ({
        id: child.content.codice,
        value: child.content.testo,
        selected: currentValue === child.content.codice,
        children: child.children?.length
            ? treeOptionsNodeAdapter(child, currentValue)
            : [],
    }));
};

const dataTreeOptionsChildrenAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.children.map((child) => ({
        id: child.obj.k,
        value: child.value,
        selected: currentValue === child.obj.k,
        children: child.children?.length
            ? dataTreeOptionsChildrenAdapter(child, currentValue)
            : [],
    }));
};

const tableOptionsAdapter = (
    options: any,
    currentValue: string
): GenericObject[] => {
    return options.rows.map((row) => {
        const cells = row.fields || row.cells;
        const [id, value] = Object.keys(cells);

        return {
            id: cells[id].value,
            value: cells[value]?.value || cells[id].value,
            selected: currentValue === cells[id].value,
        };
    });
};

const optionsAdapterMap = new Map<
    string,
    (options: any, currentValue: string) => GenericObject[]
>([
    ['SmeupTreeNode', treeOptionsNodeAdapter.bind(this)],
    ['SmeupDataTree', dataTreeOptionsChildrenAdapter.bind(this)],
    ['SmeupTable', tableOptionsAdapter.bind(this)],
    ['SmeupDataTable', tableOptionsAdapter.bind(this)],
]);

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
            const cellValue = props.cell?.value || '';
            const hasExternalResource =
                cellValue.indexOf('.') > -1 ||
                cellValue.indexOf('/') > -1 ||
                cellValue.indexOf('\\') > -1;
            if (
                (props.component as KupComponent).rootElement.tagName ===
                    KupTagNames.DATA_TABLE &&
                !hasExternalResource
            ) {
                if (
                    !(subcomponentProps as FImageProps).sizeX &&
                    !(subcomponentProps as FImageProps).sizeY
                ) {
                    (subcomponentProps as FImageProps).sizeX = '100%';
                    (subcomponentProps as FImageProps).sizeY = '64px';
                    (subcomponentProps as FImageProps).wrapperClass = 'noWidth';
                } else {
                    if (!(subcomponentProps as FImageProps).sizeX) {
                        (subcomponentProps as FImageProps).sizeX = '100%';
                        (subcomponentProps as FImageProps).wrapperClass =
                            'noWidth';
                    }
                    if (!(subcomponentProps as FImageProps).sizeY) {
                        (subcomponentProps as FImageProps).sizeY = 'auto';
                    }
                }
            }
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
                    key={column.name + props.row.id}
                    initialValue={cell.value}
                    {...cell.data}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
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
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }

            if (cell.shape === FCellShapes.INPUT_CHECKBOX) {
                return (
                    <input
                        checked={
                            cell.value === 'on' || cell.value === '1'
                                ? true
                                : false
                        }
                        class="input-checkbox"
                        onChange={(e: InputEvent) =>
                            cellEvent(e, props, cellType, FCellEvents.UPDATE)
                        }
                        type="checkbox"
                    ></input>
                );
            } else {
                return (
                    <FCheckbox
                        {...cell.data}
                        onChange={(e: InputEvent) =>
                            cellEvent(e, props, cellType, FCellEvents.UPDATE)
                        }
                    />
                );
            }
        case FCellTypes.CHIP:
            return (
                <kup-chip
                    {...cell.data}
                    type={FChipType.INPUT}
                    enableInput={true}
                    onKup-chip-change={(
                        e: CustomEvent<KupChipChangeEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                >
                    <kup-text-field
                        fullWidth={true}
                        slot="field"
                        {...cell.slotData}
                    ></kup-text-field>
                </kup-chip>
            );
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    key={column.name + props.row.id}
                    initialValue={cell.value}
                    {...cell.data}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
                    disabled={false}
                    onkup-colorpicker-change={(
                        e: CustomEvent<KupColorPickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                ></kup-color-picker>
            );
        case FCellTypes.COMBOBOX:
            return (
                <kup-combobox
                    key={column.name + props.row.id}
                    initialValue={cell.value}
                    {...cell.data}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
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
                    key={column.name + props.row.id}
                    initialValue={cell.value}
                    {...cell.data}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
                    onkup-datepicker-change={(
                        e: CustomEvent<KupDatePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-datepicker-input={(
                        e: CustomEvent<KupDatePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                />
            );
        case FCellTypes.MULTI_AUTOCOMPLETE:
            return (
                <kup-chip
                    displayId={true}
                    {...cell.data}
                    type={FChipType.INPUT}
                    enableInput={true}
                    onKup-chip-change={(
                        e: CustomEvent<KupChipChangeEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                >
                    <kup-autocomplete
                        class="kup-full-width"
                        slot="field"
                        displayMode={ItemsDisplayMode.DESCRIPTION_AND_CODE}
                        selectMode={ItemsDisplayMode.DESCRIPTION_AND_CODE}
                        onkup-autocomplete-input={(
                            e: CustomEvent<KupAutocompleteEventPayload>
                        ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                        onkup-autocomplete-iconclick={(
                            e: CustomEvent<KupComboboxEventPayload>
                        ) =>
                            cellEvent(
                                e,
                                props,
                                cellType,
                                FCellEvents.ICON_CLICK
                            )
                        }
                        showDropDownIcon={false}
                        {...cell.slotData}
                    ></kup-autocomplete>
                </kup-chip>
            );
        case FCellTypes.MULTI_COMBOBOX:
            return (
                <kup-chip
                    displayId={true}
                    {...cell.data}
                    type={FChipType.INPUT}
                    enableInput={true}
                    onKup-chip-change={(
                        e: CustomEvent<KupChipChangeEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                >
                    <kup-combobox
                        class="kup-full-width"
                        slot="field"
                        displayMode={ItemsDisplayMode.DESCRIPTION_AND_CODE}
                        selectMode={ItemsDisplayMode.DESCRIPTION_AND_CODE}
                        onkup-combobox-input={(
                            e: CustomEvent<KupComboboxEventPayload>
                        ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                        onkup-combobox-iconclick={(
                            e: CustomEvent<KupComboboxEventPayload>
                        ) =>
                            cellEvent(
                                e,
                                props,
                                cellType,
                                FCellEvents.ICON_CLICK
                            )
                        }
                        {...cell.slotData}
                    ></kup-combobox>
                </kup-chip>
            );
        case FCellTypes.RADIO:
            return (
                <FRadio
                    {...cell.data}
                    disabled={false}
                    onChange={(i: number, e: InputEvent) => {
                        const radioData = (cell.data as FRadioProps).data;
                        for (let index = 0; index < radioData.length; index++) {
                            const radioEl = radioData[index];
                            if (index === i) {
                                radioEl.checked = true;
                            } else {
                                radioEl.checked = false;
                            }
                        }
                        cellEvent(e, props, cellType, FCellEvents.UPDATE);
                    }}
                ></FRadio>
            );
        case FCellTypes.RATING:
            return (
                <kup-rating
                    key={column.name + props.row.id}
                    {...cell.data}
                    disabled={false}
                    onkup-rating-click={(
                        e: CustomEvent<KupRatingClickEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                ></kup-rating>
            );
        case FCellTypes.SWITCH:
            return (
                <FSwitch
                    {...cell.data}
                    disabled={false}
                    onChange={(e: InputEvent) =>
                        cellEvent(e, props, cellType, FCellEvents.UPDATE)
                    }
                ></FSwitch>
            );
        case FCellTypes.TIME:
            return (
                <kup-time-picker
                    key={column.name + props.row.id}
                    initialValue={cell.value}
                    {...cell.data}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
                    onkup-timepicker-change={(
                        e: CustomEvent<KupTimePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.UPDATE)}
                    onkup-timepicker-input={(
                        e: CustomEvent<KupTimePickerEventPayload>
                    ) => cellEvent(e, props, cellType, FCellEvents.INPUT)}
                />
            );
        case FCellTypes.OBJECT:
            return (
                <FTextField
                    icon={'table'}
                    {...cell.data}
                    disabled={false}
                    onIconClick={(e) =>
                        cellEvent(e, props, cellType, FCellEvents.ICON_CLICK)
                    }
                ></FTextField>
            );
        case FCellTypes.NUMBER:
            classObj[FCellClasses.C_RIGHT_ALIGNED] = true;
        case FCellTypes.LINK:
        case FCellTypes.STRING:
            const onChange = (e: InputEvent) =>
                cellEvent(e, props, cellType, FCellEvents.UPDATE);
            const onInput = (e: InputEvent) =>
                cellEvent(e, props, cellType, FCellEvents.INPUT);
            const type = cellType === FCellTypes.NUMBER ? 'number' : null;
            const value =
                cellType === FCellTypes.NUMBER && cell.value
                    ? dom.ketchup.math.numberifySafe(cell.value).toString()
                    : cell.value;
            if (cell.shape === FCellShapes.INPUT_FIELD) {
                return (
                    <input
                        class={'input-field'}
                        onChange={onChange}
                        onInput={onInput}
                        type={type}
                        value={value}
                        maxLength={column.cellData?.maxLength ?? -1}
                    ></input>
                );
            } else {
                return (
                    <FTextField
                        inputType={type}
                        fullWidth={isFullWidth(props) ? true : false}
                        {...cell.data}
                        icon={
                            cell.data && cell.data.icon
                                ? cell.data.icon
                                : cell.icon
                                ? cell.icon
                                : column.icon
                                ? column.icon
                                : null
                        }
                        value={value}
                        onChange={onChange}
                        onInput={onInput}
                        onIconClick={(e: MouseEvent) =>
                            cellEvent(
                                e,
                                props,
                                cellType,
                                FCellEvents.ICON_CLICK
                            )
                        }
                    />
                );
            }
    }
}

function setCell(
    cellType: string,
    subcomponentProps: GenericObject,
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
            if (isAutoCentered(props)) {
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
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            if ((subcomponentProps as FImageProps).badgeData) {
                classObj[FCellClasses.C_PADDED] = true;
            }
            return <FImage {...subcomponentProps} />;
        case FCellTypes.IMAGE:
            if (isAutoCentered(props)) {
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
                const cellValueNumber = dom.ketchup.math.numberifySafe(
                    cell.value
                );
                const cellValue = getCellValueForDisplay(column, cell);
                if (cellValueNumber < 0) {
                    classObj[FCellClasses.TEXT_DANGER] = true;
                }
                if (isAutoCentered(props)) {
                    classObj[FCellClasses.C_RIGHT_ALIGNED] = true;
                }
                return <div class="f-cell__text">{cellValue}</div>;
            }
            return <div class="f-cell__text">{content}</div>;
        case FCellTypes.SWITCH:
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            subcomponentProps['disabled'] = true;
            return <FSwitch {...subcomponentProps}></FSwitch>;
        default:
            return <div class="f-cell__text">{content}</div>;
    }
}

function setKupCell(
    cellType: string,
    classObj: Record<string, boolean>,
    subcomponentProps: GenericObject,
    cell: KupDataCell,
    row: KupDataRow,
    column: KupDataColumn,
    props: FCellProps
): unknown {
    switch (cellType) {
        case FCellTypes.BAR:
            if (!(subcomponentProps as FImageProps).data) {
                return (
                    <kup-image
                        key={column.name + props.row.id}
                        sizeX="250px"
                        {...subcomponentProps}
                    />
                );
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
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            return (
                <FButton
                    {...subcomponentProps}
                    onClick={(e) =>
                        cellEvent(e, props, cellType, FCellEvents.CLICK)
                    }
                ></FButton>
            );
        case FCellTypes.BUTTON_LIST:
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            subcomponentProps['data-storage'] = {
                cell: cell,
                row: row,
                column: column,
            };
            return (
                <kup-button-list
                    key={column.name + props.row.id}
                    {...subcomponentProps}
                ></kup-button-list>
            );
        case FCellTypes.CHART:
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            return (
                <kup-chart
                    key={column.name + props.row.id}
                    {...subcomponentProps}
                />
            );
        case FCellTypes.MULTI_AUTOCOMPLETE:
        case FCellTypes.MULTI_COMBOBOX:
        case FCellTypes.CHIP:
            return <FChip {...subcomponentProps} />;
        case FCellTypes.COLOR_PICKER:
            return (
                <kup-color-picker
                    key={column.name + props.row.id}
                    {...subcomponentProps}
                    class={isFullWidth(props) ? 'kup-full-width' : ''}
                    disabled
                ></kup-color-picker>
            );
        case FCellTypes.GAUGE:
            return (
                <kup-gauge
                    key={column.name + props.row.id}
                    value={dom.ketchup.math.numberifySafe(cell.value)}
                    width-component="280px"
                    {...subcomponentProps}
                ></kup-gauge>
            );
        case FCellTypes.KNOB:
        case FCellTypes.PROGRESS_BAR:
            return subcomponentProps.customStyle ? (
                <kup-progress-bar
                    key={column.name + props.row.id}
                    {...subcomponentProps}
                ></kup-progress-bar>
            ) : (
                <FProgressBar {...subcomponentProps}></FProgressBar>
            );
        case FCellTypes.RADIO:
            if (isAutoCentered(props)) {
                classObj[FCellClasses.C_CENTERED] = true;
            }
            subcomponentProps['disabled'] = row.readOnly;
            return <FRadio {...subcomponentProps}></FRadio>;
        case FCellTypes.RATING:
            return <FRating {...subcomponentProps} disabled={true}></FRating>;
        case FCellTypes.OBJECT:
            return (
                <FTextField
                    icon={'table'}
                    {...subcomponentProps}
                    disabled={true}
                ></FTextField>
            );
    }
}

function setDefaults(cellType: string, cell: KupDataCell): void {
    function isShapeBarMarker(value: string): boolean {
        return value.toUpperCase().startsWith('SHAPE;BAR');
    }

    function isShapeMarker(value: string): boolean {
        return value.toUpperCase().startsWith('SHAPE;');
    }

    function isBgColorMarker(value: string): boolean {
        return value.toUpperCase().startsWith('BCOLOR;');
    }

    function isHeightMarker(value: string): boolean {
        return value.toUpperCase().startsWith('HEIGHT;');
    }

    function isDecoratorMarker(value: string): boolean {
        return (
            value.toUpperCase().startsWith('SEP;') ||
            value.toUpperCase().startsWith('DIV;') ||
            value.toUpperCase().startsWith('ARW;') ||
            value.toUpperCase().startsWith('GRID;')
        );
    }
    function getData(value: string): FImageData[] | null {
        if (!value) {
            return null;
        }
        const graphicElementDefinitionArr = value.split('\\\\AND\\');
        const data: FImageData[] = [];
        for (const graphicElem of graphicElementDefinitionArr) {
            const elementData = getElementData(graphicElem);
            if (elementData) {
                data.push(...elementData);
            } else {
                return null;
            }
        }
        return data;
    }

    function getElementData(value: string): FImageData[] | null {
        const commonsData: FImageData = {};

        const markersArray = value.split('\\\\');
        const shapesArray: FImageData[] = [];

        for (const vString of markersArray) {
            if (vString) {
                if (isDecoratorMarker(vString)) {
                    return null;
                }

                if (isShapeMarker(vString)) {
                    if (!isShapeBarMarker(vString)) {
                        return null;
                    } else {
                        const attr = vString.split(';');
                        if (attr.length === 3) {
                            const width = attr[2].replace(',', '.');
                            if (!isNaN(parseFloat(width))) {
                                commonsData.width = `${width}%`;
                            }
                        }
                    }
                } else if (isBgColorMarker(vString)) {
                    // Background color handling can be added here if needed
                } else if (isHeightMarker(vString)) {
                    const height = vString
                        .substring('HEIGHT;'.length)
                        .replace(',', '.');
                    if (!isNaN(parseFloat(height))) {
                        commonsData.height = `${height}%`;
                    }
                } else {
                    shapesArray.push(getShapeData(vString, commonsData));
                }
            }
            return shapesArray.length ? shapesArray : null;
        }

        function getShapeData(
            value: string,
            commonsData: FImageData
        ): FImageData {
            const shapeData: FImageData = { ...commonsData };
            const attr = value.split(';');
            if (attr.length >= 1) {
                const pattern = /R(\d+)G(\d+)B(\d+)/;
                const match = pattern.exec(attr[0]);
                if (match) {
                    const [, r, g, b] = match;
                    if (
                        !isNaN(parseInt(r, 10)) &&
                        !isNaN(parseInt(g, 10)) &&
                        !isNaN(parseInt(b, 10))
                    ) {
                        shapeData.color = `rgb(${parseInt(r)},${parseInt(
                            g
                        )},${parseInt(b)})`;
                    }
                }
                if (attr.length >= 2) {
                    const width = attr[1].replace(',', '.');
                    if (!isNaN(parseFloat(width))) {
                        shapeData.width = `${width}%`;
                    }
                }
            }
            return shapeData;
        }
    }

    cell.data = {};

    const createDataset = () => {
        const parts = cell.value?.split(';');
        if (parts?.[parts.length - 1].trim() === '') {
            parts.pop();
        }
        if (parts && parts.length) {
            cell.data.data = [];
            for (let part of parts) {
                (cell.data.data as KupDataNode[]).push({
                    id: part,
                    value: part,
                });
            }
        }
    };

    switch (cellType) {
        case FCellTypes.CHECKBOX:
        case FCellTypes.SWITCH:
            cell.data.checked = cell.value === '1' ? true : false;
            break;

        case FCellTypes.BAR:
            if (isShapeMarker(cell.value)) {
                cell.data.isCanvas = true;
                cell.data.resource = cell.value;
            } else {
                cell.data.data = getData(cell.value);
            }
            break;

        case FCellTypes.BUTTON:
            cell.data.label = cell.value;
            break;

        case FCellTypes.CHART:
            Object.assign(cell.data, {
                sizeX: '100px',
                sizeY: '100px',
                offlineMode: {
                    value: cell.value,
                    shape: 'pie',
                },
            });
            break;

        case FCellTypes.BUTTON_LIST:
        case FCellTypes.CHIP:
        case FCellTypes.MULTI_AUTOCOMPLETE:
        case FCellTypes.MULTI_COMBOBOX:
        case FCellTypes.RADIO:
            createDataset();
            break;

        case FCellTypes.COLOR_PICKER:
            cell.data.initialValue = cell.value;
            break;

        case FCellTypes.GAUGE:
        case FCellTypes.KNOB:
        case FCellTypes.PROGRESS_BAR:
        case FCellTypes.RATING:
            cell.data.value = parseInt(cell.value);
            break;

        case FCellTypes.ICON:
        case FCellTypes.IMAGE:
            cell.data.resource = cell.value;
            break;
    }
}

function cellEvent(
    e: InputEvent | CustomEvent | MouseEvent | KeyboardEvent,
    props: FCellProps,
    cellType: FCellTypes,
    cellEventName: FCellEvents
): void {
    const cell = props.cell;
    const column = props.column;
    const comp = props.component;
    const row = props.row;
    if (cellEventName === FCellEvents.UPDATE) {
        let value = getValueFromEventTaget(e, cellType);
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
            case FCellTypes.SWITCH:
                value = value === 'on' ? '0' : '1';
                if (cell.data) {
                    (cell.data as FCheckboxProps).checked =
                        value === '0' ? false : true;
                }
                break;
            case FCellTypes.RADIO:
                // data change handled outside this switchcase to avoid passing the index
                break;
            case FCellTypes.CHIP:
            case FCellTypes.MULTI_AUTOCOMPLETE:
            case FCellTypes.MULTI_COMBOBOX:
                value = (e as CustomEvent<KupChipChangeEventPayload>).detail
                    .stringifiedValues;
                if (cell.data) {
                    (cell.data as FChipsProps).data = (
                        e as CustomEvent<KupChipChangeEventPayload>
                    ).detail.comp.data;
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
        if (cellEventName === FCellEvents.UPDATE) {
            try {
                (comp as KupComponent).refresh();
            } catch (error) {
                dom.ketchup.debug.logMessage(
                    comp,
                    error,
                    KupDebugCategory.ERROR
                );
            }
        }
    }
}

function getValueFromEventTaget(
    e: InputEvent | CustomEvent | MouseEvent | KeyboardEvent,
    cellType: FCellTypes
): string {
    const isInputEvent = !!((e.target as HTMLElement).tagName === 'INPUT');
    let value = isInputEvent
        ? (e.target as HTMLInputElement).value
        : e.detail.value;

    if (cellType === FCellTypes.CHECKBOX && isInputEvent) {
        value = (e.target as HTMLInputElement).checked ? 'off' : 'on';
    }

    if (cellType === FCellTypes.NUMBER && isInputEvent) {
        value = dom.ketchup.math.formattedStringToNumberString(value, '');
    }
    return value;
}

function isAutoCentered(props: FCellProps) {
    return autoCenterComps.includes(
        (props.component as KupComponent)?.rootElement.tagName as KupTagNames
    );
}

function isFullWidth(props: FCellProps) {
    return fullWidthFieldsComps.includes(
        (props.component as KupComponent)?.rootElement.tagName as KupTagNames
    );
}

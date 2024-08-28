import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Method,
    Prop,
    State,
    VNode,
    Watch,
    forceUpdate,
    h,
} from '@stencil/core';
import {
    KupAutocompleteEventPayload,
    KupComboboxIconClickEventPayload,
    KupDataCell,
    KupDataTableDataset,
    KupDataTableRow,
    KupEditorEventPayload,
} from '../../components';
import { FButton } from '../../f-components/f-button/f-button';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellEventPayload,
    FCellEvents,
    FCellProps,
    FCellShapes,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    DataAdapterFn,
    InputPanelButtonClickHandler,
    InputPanelCells,
    InputPanelOptionsHandler,
    KupInputPanelCell,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelLayoutField,
    KupInputPanelLayoutSection,
    KupInputPanelProps,
    KupInputPanelRow,
    KupInputPanelSubmit,
} from './kup-input-panel-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupEditor } from '../kup-editor/kup-editor';

const dom: KupDom = document.documentElement as KupDom;
@Component({
    tag: 'kup-input-panel',
    styleUrl: 'kup-input-panel.scss',
    shadow: true,
})
export class KupInputPanel {
    /**
     * References the root HTML element of the component (<kup-form>).
     */
    @Element() rootElement: HTMLElement;

    //#region PROPS
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';

    /**
     * Actual data of the form.
     * @default null
     */
    @Prop() data: KupInputPanelData = null;

    /**
     * Creates a hidden submit button in order to submit the form with enter.
     * @default false
     */
    @Prop() hiddenSubmitButton: boolean = false;

    /**
     * Sets the callback function on submit form
     * @default null
     */
    @Prop() submitCb: (e: KupInputPanelSubmit) => unknown = null;

    /**
     * Sets the callback function on loading options via FUN
     * @default null
     */
    @Prop() optionsHandler: InputPanelOptionsHandler = null;

    /**
     * Sets the handler to use when click on custom buttons
     * @default null
     */
    @Prop() customButtonClickHandler?: InputPanelButtonClickHandler = null;
    //#endregion

    //#region STATES
    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Values to send as props to FCell
     * @default []
     */
    @State() private inputPanelCells: InputPanelCells[] = [];
    //#endregion

    //#region VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    #optionsAdapterMap = new Map<
        string,
        (options: any, currentValue: string) => GenericObject[]
    >([
        ['SmeupTreeNode', this.#treeOptionsNodeAdapter.bind(this)],
        ['SmeupTable', this.#tableOptionsAdapter.bind(this)],
        ['SmeupDataTable', this.#tableOptionsAdapter.bind(this)],
    ]);

    #originalData: KupInputPanelData = null;

    #eventNames = new Map<FCellTypes, string[]>([
        [
            FCellTypes.AUTOCOMPLETE,
            ['kup-autocomplete-input', 'kup-autocomplete-iconclick'],
        ],
        [
            FCellTypes.MULTI_AUTOCOMPLETE,
            ['kup-autocomplete-input', 'kup-autocomplete-iconclick'],
        ],
        [FCellTypes.COMBOBOX, ['kup-combobox-iconclick']],
        [FCellTypes.MULTI_COMBOBOX, ['kup-combobox-iconclick']],
    ]);
    #listeners: { event: string; handler: (e) => void }[] = [];
    #cellTypeComponents: Map<FCellTypes, string> = new Map<FCellTypes, string>([
        [FCellTypes.DATE, 'kup-date-picker'],
        [FCellTypes.TIME, 'kup-time-picker'],
    ]);
    #cellCustomRender: Map<
        FCellShapes,
        (cell: KupDataCell, cellId: string) => any
    > = new Map<FCellShapes, (cell: KupDataCell, cellId: string) => any>([
        [FCellShapes.BUTTON_LIST, this.#renderButton.bind(this)],
        [FCellShapes.EDITOR, this.#renderEditor.bind(this)],
        [FCellShapes.LABEL, this.#renderLabel.bind(this)],
        [FCellShapes.TABLE, this.#renderDataTable.bind(this)],
    ]);
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
        this.#originalData = structuredClone(this.data);

        if (this.#listeners.length) {
            this.#listeners.map(({ event, handler }) => {
                this.rootElement.removeEventListener(event, handler);
            });
            this.#listeners = [];
        }

        this.#mapCells(this.data);
    }
    //#endregion

    //#region PUBLIC METHODS
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupInputPanelProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupInputPanelProps, props);
    }
    //#endregion

    //#region EVENTS
    /*-------------------------------------------------*/
    /*           Events                                */
    /*-------------------------------------------------*/

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kup-input-panel-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;
    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #renderRow(inputPanelCell: InputPanelCells) {
        const layout = inputPanelCell.row.layout;
        const horizontal = layout?.horizontal || false;

        let rowContent: VNode[];

        if (!layout?.sections?.length) {
            rowContent = inputPanelCell.cells.map((cell) =>
                this.#renderCell(cell.cell, inputPanelCell.row, cell.column)
            );
        } else {
            rowContent = layout.sections.map((section) =>
                this.#renderSection(inputPanelCell, section)
            );
        }

        const classObj = {
            'input-panel': true,
            'input-panel--column': !horizontal,
        };

        // We create a form for each row in data
        return (
            <form
                class={classObj}
                name={this.rootElement.id}
                onSubmit={(e: SubmitEvent) => {
                    e.preventDefault();
                    this.submitCb({
                        value: {
                            before: { ...this.#originalData },
                            after: this.#reverseMapCells(),
                        },
                    });
                }}
            >
                {rowContent}
                {!this.hiddenSubmitButton ? (
                    <FButton
                        buttonType="submit"
                        label={this.#kupManager.language.translate(
                            KupLanguageGeneric.CONFIRM
                        )}
                        wrapperClass="form__submit"
                    ></FButton>
                ) : null}
            </form>
        );
    }

    #renderCell(
        cell: KupDataCell,
        row: KupInputPanelRow,
        column: KupInputPanelColumn
    ) {
        if (!cell) {
            return;
        }

        const customRender = this.#cellCustomRender.get(cell.shape);

        if (customRender !== undefined) {
            return customRender(cell, column.name);
        }

        const cellProps: FCellProps = {
            cell,
            column,
            row,
            component: this,
            editable: true,
            renderKup: true,
            setSizes: true,
        };

        const label = this.#getLabelComponent(cell, column.title);

        if (label) {
            return (
                <div class={{ 'input-panel__label_container': true }}>
                    {label}
                    <FCell {...cellProps} />
                </div>
            );
        }

        return <FCell {...cellProps} />;
    }

    #renderButton(cell: KupDataCell, cellId: string) {
        const { fun, ...props } = cell.data;
        return (
            <FButton
                icon={cell.icon}
                id={cellId}
                {...props}
                wrapperClass="form__submit"
                onClick={() => {
                    fun
                        ? this.customButtonClickHandler({
                              fun,
                              cellId,
                              currentState: this.#reverseMapCells(),
                          })
                        : this.submitCb({
                              value: {
                                  before: { ...this.#originalData },
                                  after: this.#reverseMapCells(),
                              },
                              cell: cellId,
                          });
                }}
            ></FButton>
        );
    }

    #renderEditor(cell: KupDataCell, cellId: string) {
        const event = 'kup-editor-save';
        const handler = (e: CustomEvent<KupEditorEventPayload>) => {
            const edtCell: KupDataCell =
                this.inputPanelCells.reduce<KupDataCell>((cell, { cells }) => {
                    if (!cell) {
                        return cells.find(
                            ({ column }) => column.name === cellId
                        ).cell;
                    }
                    return cell;
                }, null);
            edtCell.value = e.detail.htmlValue.replace(/\n/g, '<br>');
        };

        this.rootElement.addEventListener(event, handler);

        this.#listeners.push({
            event,
            handler,
        });

        return (
            <kup-editor
                {...cell.data}
                id={cellId}
                isReadOnly={!cell.isEditable}
                showToolbar={true}
            ></kup-editor>
        );
    }

    #renderDataTable(cell: KupDataCell, cellId: string) {
        return (
            <kup-data-table
                id={cellId}
                editableData={true}
                showGroups={true}
                showFilters={true}
                showFooter={true}
                {...cell.data}
            ></kup-data-table>
        );
    }

    #renderLabel(cell: KupDataCell, cellId: string) {
        const styleObj = {
            display: 'flex',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
        };
        return (
            <span style={styleObj} id={cellId}>
                {cell.value}
            </span>
        );
    }

    #getLabelComponent(cell: KupDataCell, label: string) {
        if (!label) {
            return null;
        }

        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        if (cellType === FCellTypes.RADIO) {
            return <span>{label}</span>;
        }

        return null;
    }

    #renderSection(
        cells: InputPanelCells,
        section: KupInputPanelLayoutSection
    ) {
        let content = [];

        if (section.sections?.length) {
            content = section.sections.map((innerSection) =>
                this.#renderSection(cells, innerSection)
            );
        } else if (section.content?.length) {
            content = section.content.map((field) =>
                this.#renderField(cells, field)
            );
        }

        const classObj = {
            'input-panel__section': !section.horizontal,
            'input-panel__horizontal-section': section.horizontal,
        };

        const styleObj: GenericObject = {
            gap: +section.gap > 0 ? `${section.gap}rem` : '',
            'grid-template-columns':
                +section.gridCols > 0 ? `repeat(${section.gridCols}, 1fr)` : '',
            'grid-template-rows':
                +section.gridRows > 0 ? `repeat(${section.gridRows}, 1fr)` : '',
        };

        if (cells.row?.layout?.horizontal) {
            styleObj.maxWidth = section.dim;
        } else {
            styleObj.maxHeight = section.dim;
        }

        const sectionContent = (
            <div class={classObj} style={styleObj}>
                {content}
            </div>
        );

        return section.title ? (
            <div class={{ 'input-panel__section_label_container': true }}>
                <h3>{section.title}</h3>
                {sectionContent}
            </div>
        ) : (
            sectionContent
        );
    }

    #renderField(cells: InputPanelCells, field: KupInputPanelLayoutField) {
        const fieldCell = cells.cells.find(
            (cell) => cell.column.name === field.id
        );

        const colSpan =
            +field.colSpan > 0
                ? field.colSpan
                : !(+field.colSpan > 0) && !(+field.colStart > 0)
                ? 1
                : null;

        const colStart = colSpan ? `span ${colSpan}` : `${field.colStart}`;

        const colEnd = +field.colEnd > 0 ? `${field.colEnd}` : '';

        const rowSpan =
            +field.rowSpan > 0
                ? field.rowSpan
                : !(+field.rowSpan > 0) && !(+field.rowStart > 0)
                ? 1
                : null;

        const rowStart = rowSpan ? `span ${rowSpan}` : `${field.rowStart}`;

        const rowEnd = +field.rowEnd > 0 ? `${field.rowEnd}` : '';

        const styleObj = {
            'grid-column-start': colStart,
            'grid-column-end': colEnd,
            'grid-row-start': rowStart,
            'grid-row-end': rowEnd,
        };

        if (!fieldCell || !fieldCell.cell) {
            return;
        }

        return (
            <div style={styleObj}>
                {this.#renderCell(fieldCell.cell, cells.row, fieldCell.column)}
            </div>
        );
    }

    #mapCells(data: KupInputPanelData) {
        const inpuPanelCells = data?.rows?.length
            ? data.rows.reduce((inpuPanelCells, row) => {
                  const cells = data.columns
                      .filter((column) => column.visible)
                      .map((column) => {
                          const cell = structuredClone(row.cells[column.name]);
                          const mappedCell = cell
                              ? {
                                    ...cell,
                                    data: this.#setProps(cell, column),
                                    slotData: this.#slotData(cell, column),
                                    isEditable: true,
                                }
                              : null;
                          return { column, cell: mappedCell };
                      });
                  return [...inpuPanelCells, { cells, row }];
              }, [])
            : [];

        inpuPanelCells.map(({ cells }: InputPanelCells) =>
            cells.map(({ cell, column }) => {
                const cellType = dom.ketchup.data.cell.getType(
                    cell,
                    cell.shape
                );
                const componentQuery = this.#cellTypeComponents.get(cellType);
                if (!componentQuery) {
                    return;
                }

                const el: any = this.rootElement.shadowRoot.querySelector(
                    `${componentQuery}[id=${column.name}]`
                );
                el?.setValue(cell.value);
            })
        );

        this.inputPanelCells = inpuPanelCells;
    }

    #setProps(cell: KupInputPanelCell, column: KupInputPanelColumn) {
        const defaultProps = {
            ...this.#mapData(cell, column),
            disabled: !cell.editable,
            id: column.name,
        };
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);
        const { data, ...noDataProps } = cell.data || {};

        return cellType !== FCellTypes.MULTI_AUTOCOMPLETE &&
            cellType !== FCellTypes.MULTI_COMBOBOX
            ? this.#deepObjectsMerge(defaultProps, {
                  ...cell.data,
              })
            : // Add and ovverride defaultProps of Chip host component except data
              {
                  ...defaultProps,
                  ...noDataProps,
              };
    }

    #deepObjectsMerge(target: GenericObject, source: GenericObject) {
        for (const key in source) {
            if (
                source[key] instanceof Object &&
                !Array.isArray(source[key]) &&
                key in target
            ) {
                target[key] = this.#deepObjectsMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
        return target;
    }

    #reverseMapCells(): KupInputPanelData {
        return this.inputPanelCells.reduce(
            (data, curr) => {
                const updatedCells = Object.keys(curr.row.cells).reduce(
                    (cells, key) => {
                        const cellState = curr.cells.find(
                            (c) => c.column.name === key
                        )?.cell;

                        let value: any = cellState?.value;

                        if (cellState?.shape === FCellShapes.TABLE) {
                            value = JSON.stringify(
                                this.#getTableUpdatedCell(
                                    cellState.data.data,
                                    key
                                )
                            );
                        }

                        return {
                            ...cells,
                            [key]: {
                                ...curr.row.cells[key],
                                value,
                                obj: cellState?.obj,
                            },
                        };
                    },
                    {}
                );

                return {
                    columns: [
                        ...data.columns,
                        ...curr.cells.map((cell) => cell.column),
                    ],
                    rows: [
                        ...data.rows,
                        {
                            cells: updatedCells,
                            layout: curr.row.layout,
                        },
                    ],
                };
            },
            {
                columns: [],
                rows: [],
            }
        );
    }

    #mapData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        if (!cell) {
            return null;
        }

        const options = cell.options;
        const fieldLabel = col.title;
        const currentValue = cell.value;
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        const dataAdapterMap = new Map<FCellTypes, DataAdapterFn>([
            [FCellTypes.AUTOCOMPLETE, this.#CMBandACPAdapter.bind(this)],
            [FCellTypes.BUTTON_LIST, this.#BTNAdapter.bind(this)],
            [FCellTypes.CHART, this.#GRAAdapter.bind(this)],
            [FCellTypes.CHIP, this.#CHIAdapter.bind(this)],
            [FCellTypes.CHECKBOX, this.#CHKAdapter.bind(this)],
            [FCellTypes.COLOR_PICKER, this.#CLPAdapter.bind(this)],
            [FCellTypes.COMBOBOX, this.#CMBandACPAdapter.bind(this)],
            [FCellTypes.EDITOR, this.#EDTAdapter.bind(this)],
            [FCellTypes.MULTI_AUTOCOMPLETE, this.#CHIAdapter.bind(this)],
            [FCellTypes.MULTI_COMBOBOX, this.#CHIAdapter.bind(this)],
            [FCellTypes.NUMBER, this.#NumberAdapter.bind(this)],
            [FCellTypes.DATE, this.#DateAdapter.bind(this)],
            [FCellTypes.RADIO, this.#RADAdapter.bind(this)],
            [FCellTypes.STRING, this.#ITXAdapter.bind(this)],
            [FCellTypes.SWITCH, this.#SWTAdapter.bind(this)],
            [FCellTypes.TABLE, this.#DataTableAdapter.bind(this)],
            [FCellTypes.TIME, this.#TimeAdapter.bind(this)],
        ]);

        const adapter = dataAdapterMap.get(cellType);

        return adapter
            ? adapter(options, fieldLabel, currentValue, cell, col.name)
            : null;
    }

    #slotData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        if (!cell.editable) {
            return null;
        }

        if (cellType === FCellTypes.CHIP) {
            return {
                trailingIcon: true,
                label: col.title,
                disabled: !cell.editable,
                id: col.name,
                fullWidth: false,
            };
        }

        if (
            cellType === FCellTypes.MULTI_AUTOCOMPLETE ||
            cellType === FCellTypes.MULTI_COMBOBOX
        ) {
            return {
                ...this.#CMBandACPAdapter(
                    cell.options,
                    col.title,
                    null,
                    cell,
                    col.name
                ),
                showDropDownIcon: true,
                class: '',
                style: { width: '100%' },
                disabled: !cell.editable,
                id: col.name,
            };
        }

        return null;
    }

    #CHIAdapter(
        _options: GenericObject,
        _fieldLabel: string,
        currentValue: string
    ) {
        return {
            data: currentValue?.split(';').map((v) => ({ id: v, value: v })),
        };
    }

    #GRAAdapter() {
        //TODO: definire mapping
        return {
            data: {
                sizeX: '50px',
                offlineMode: {
                    value: '8;4;5',
                },
                id: 'i1012_GREF_0',
                cellId: 'i1012_GREF_0',
                sizeY: '50px',
            },
        };
    }

    #BTNAdapter(
        _options: GenericObject,
        _fieldLabel: string,
        _currentValue: string,
        cell: KupInputPanelCell
    ) {
        return {
            label: cell.value,
            fun: cell.fun,
        };
    }

    #CMBandACPAdapter(
        rawOptions: GenericObject,
        fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        const configCMandACP: GenericObject = {
            data: {
                'kup-text-field': {
                    trailingIcon: true,
                    label: fieldLabel,
                },
                'kup-list': {
                    showIcons: true,
                    data: [],
                },
            },
            initialValue: currentValue,
            label: fieldLabel,
        };

        if (cell.fun) {
            const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

            const evNames = this.#eventNames.get(cellType);

            if (!evNames) {
                return;
            }

            evNames.map((evName) => {
                const handler = (
                    e: CustomEvent<KupAutocompleteEventPayload>
                ) => {
                    this.#getAutocompleteEventCallback(
                        e.detail,
                        cell.fun,
                        configCMandACP,
                        id,
                        currentValue
                    );
                };
                this.rootElement.addEventListener(evName, handler);
                this.#listeners.push({
                    event: evName,
                    handler,
                });
            });
        } else if (rawOptions) {
            configCMandACP.data['kup-list'].data =
                this.#optionsTreeComboAdapter(rawOptions, currentValue);
        }

        return configCMandACP;
    }

    #CHKAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            checked: currentValue === 'on' || currentValue === '1',
            label: fieldLabel,
        };
    }

    #CLPAdapter(
        _options: GenericObject,
        fieldLabel: string,
        _currentValue: string
    ) {
        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
        };
    }

    #EDTAdapter(
        _options: GenericObject,
        _fieldLabel: string,
        currentValue: string
    ) {
        return {
            initialValue: currentValue,
        };
    }

    #ITXAdapter(
        _options: GenericObject,
        fieldLabel: string,
        _currentValue: string
    ) {
        return { label: fieldLabel };
    }

    #RADAdapter(
        options: GenericObject,
        _fieldLabel: string,
        currentValue: string
    ) {
        return {
            data: options.map((option) => ({
                value: option.id,
                label: option.label,
                checked: option.id === currentValue,
            })),
        };
    }

    #SWTAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            checked: !!currentValue,
            label: fieldLabel,
            leadingLabel: true,
        };
    }

    #DateAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
            initialValue: currentValue,
        };
    }

    #TimeAdapter(
        _options: GenericObject,
        fieldLabel: string,
        _currentValue: string
    ) {
        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
        };
    }

    #NumberAdapter(
        _options: GenericObject,
        fieldLabel: string,
        _currentValue: string
    ) {
        return { label: fieldLabel };
    }

    #DataTableAdapter(
        _rawOptions: GenericObject,
        _fieldLabel: string,
        _value: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        try {
            let data = JSON.parse(cell.value);

            if (!data) {
                this.#kupManager.debug.logMessage(
                    this,
                    `Empty value for ${id} cell.`,
                    KupDebugCategory.WARNING
                );
                return null;
            }

            if ((data as any).type !== 'SmeupDataTable') {
                this.#kupManager.debug.logMessage(
                    this,
                    `Wrong data table type for ${id} cell. Type \`SmeupDataTable\` in value expected`,
                    KupDebugCategory.ERROR
                );
                return null;
            }

            return {
                data: {
                    columns: data.columns.map((col) => ({
                        ...col,
                        obj: data.rows[0].cells[col.name].obj,
                    })),
                    rows: data.rows.map((row) => ({
                        ...row,
                        cells: Object.keys(row.cells).reduce((cell, key) => {
                            const column = data.columns.find(
                                (col) => col.name === key
                            );
                            return {
                                ...cell,
                                [key]: {
                                    ...row.cells[key],
                                    data: {
                                        ...this.#mapData(
                                            row.cells[key],
                                            column
                                        ),
                                        disabled:
                                            row.cells[key].editable === false,
                                        id: column.id,
                                    },
                                },
                            };
                        }, {}),
                    })),
                },
            };
        } catch (e) {
            this.#kupManager.debug.logMessage(
                this,
                `Invalid value for ${id} cell. Type \`SmeupDataTable\` expected`,
                KupDebugCategory.ERROR
            );
            return null;
        }
    }

    #getTableUpdatedCell(
        tableValue: KupDataTableDataset,
        cellId: string
    ): KupDataTableDataset {
        const updated: KupDataTableDataset = {
            ...tableValue,
            rows: tableValue.rows.map((row) => ({ ...row, cells: {} })),
        };

        const editableColsId = tableValue.columns
            .filter((col) => col.isEditable)
            .map((col) => col.name);

        if (!editableColsId.length) {
            return updated;
        }

        try {
            const beforeTableValue = JSON.parse(
                this.#originalData.rows[0].cells[cellId].value
            );

            updated.rows = tableValue.rows.map((row, i) =>
                editableColsId.reduce<KupDataTableRow>(
                    (updatedRow, colId) => {
                        const changed =
                            beforeTableValue.rows[i].cells[colId] &&
                            row.cells[colId].value !==
                                beforeTableValue.rows[i].cells[colId].value;

                        if (changed) {
                            return {
                                ...beforeTableValue.rows[i],
                                cells: {
                                    ...updatedRow.cells,
                                    [colId]: {
                                        ...beforeTableValue.rows[i].cells[
                                            colId
                                        ],
                                        value: row.cells[colId].value,
                                    },
                                },
                            };
                        }

                        return {
                            ...beforeTableValue.rows[i],
                            cells: updatedRow.cells,
                        };
                    },
                    { ...beforeTableValue.rows[i], cells: {} }
                )
            );

            return updated;
        } catch (e) {
            return updated;
        }
    }

    #optionsTreeComboAdapter(options: any, currentValue: string) {
        const adapter = this.#optionsAdapterMap.get(options.type);

        if (adapter) {
            return adapter(options, currentValue);
        } else {
            return options.map((option) => ({
                value: option.label,
                id: option.id,
                selected: currentValue === option.id,
            }));
        }
    }

    #treeOptionsNodeAdapter(
        options: any,
        currentValue: string
    ): GenericObject[] {
        return options.children.map((child) => ({
            id: child.content.codice,
            value: child.content.testo,
            selected: currentValue === child.content.codice,
            children: child.children?.length
                ? this.#treeOptionsNodeAdapter(child, currentValue)
                : [],
        }));
    }

    #tableOptionsAdapter(options: any, currentValue: string): GenericObject[] {
        return options.rows
            .filter((row) => row.fields)
            .map(({ fields }) => {
                const keys = Object.keys(fields);

                return keys
                    .filter((key) => !['RowId', 'ID'].includes(key))
                    .map((key) => ({
                        id: fields[key].smeupObject.codice,
                        value: fields[key].smeupObject.testo,
                        selected:
                            currentValue === fields[key].smeupObject.codice,
                    }));
            })
            .flat();
    }

    #getAutocompleteEventCallback(
        detail: KupAutocompleteEventPayload | KupComboboxIconClickEventPayload,
        fun: string,
        data: any,
        id: string,
        currentValue: string
    ) {
        if (
            detail.id !== id ||
            (detail as KupComboboxIconClickEventPayload).open === false
        ) {
            return;
        }
        this.optionsHandler(
            fun,
            detail.inputValue,
            this.#reverseMapCells()
        ).then((options) => {
            data.data['kup-list'].data =
                this.#optionsTreeComboAdapter(options, currentValue) ?? [];
            detail.comp.refresh();
        });
    }

    //#endregion

    //#region LIFECYCLE HOOKS
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
        this.onDataChanged();
    }

    componentDidLoad() {
        this.kupReady.emit({ comp: this, id: this.rootElement.id });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const isEmptyData = Boolean(!this.inputPanelCells.length);

        const inputPanelContent: VNode[] = isEmptyData
            ? [
                  <p>
                      {this.#kupManager.language.translate(
                          KupLanguageGeneric.EMPTY_DATA
                      )}
                  </p>,
              ]
            : this.inputPanelCells.map((inputPanelCell) =>
                  this.#renderRow(inputPanelCell)
              );

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{inputPanelContent}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
    //#endregion
}

import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Listen,
    Method,
    Prop,
    State,
    VNode,
    Watch,
    forceUpdate,
    h,
} from '@stencil/core';
import { KupAutocompleteEventPayload, KupDataCell } from '../../components';
import { FButton } from '../../f-components/f-button/f-button';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellProps,
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
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
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
     * Sets the callbacks functions on ketchup events
     * @default []
     */
    @Prop() optionsHandler: InputPanelOptionsHandler = null;
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
        ['SmeupTree', this.#treeOptionsNodeAdapter.bind(this)],
        ['SmeupTable', this.#tableOptionsAdapter.bind(this)],
    ]);

    #originalData: KupInputPanelData = null;
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
        if (!this.#originalData) {
            this.#originalData = structuredClone(this.data);
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
                        before: { ...this.#originalData },
                        after: this.#reverseMapCells(),
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
        const cellProps: FCellProps = {
            cell,
            column,
            row,
            component: this,
            editable: cell.isEditable,
            renderKup: true,
            setSizes: true,
        };

        return <FCell {...cellProps} />;
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
            gap: section.gap ? `${section.gap}rem` : '',
            'grid-template-columns': section.gridCols
                ? `repeat(${section.gridCols}, 1fr)`
                : '',
            'grid-template-rows': section.gridRows
                ? `repeat(${section.gridRows}, 1fr)`
                : '',
        };

        if (cells.row?.layout?.horizontal) {
            styleObj.maxWidth = section.dim;
        } else {
            styleObj.maxHeight = section.dim;
        }

        return (
            <div class={classObj} style={styleObj}>
                {content}
            </div>
        );
    }

    #renderField(cells: InputPanelCells, field: KupInputPanelLayoutField) {
        const fieldCell = cells.cells.find(
            (cell) => cell.column.name === field.id
        );

        const colStart = field.colSpan
            ? `span ${field.colSpan}`
            : `${field.colStart}`;

        const colEnd = field.colEnd ? `${field.colEnd}` : '';

        const rowStart = field.rowSpan
            ? `span ${field.rowSpan}`
            : `${field.rowStart}`;

        const rowEnd = field.rowEnd ? `${field.rowEnd}` : '';

        const styleObj = {
            'grid-column-start': colStart,
            'grid-column-end': colEnd,
            'grid-row-start': rowStart,
            'grid-row-end': rowEnd,
        };

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
                          const mappedCell = {
                              ...cell,
                              data: {
                                  ...this.#mapData(cell, column),
                                  id: column.name,
                              },
                              slotData: this.#slotData(cell, column),
                              isEditable: cell.editable,
                          };

                          return { column, cell: mappedCell };
                      });
                  return [...inpuPanelCells, { cells, row }];
              }, [])
            : [];

        this.inputPanelCells = inpuPanelCells;
    }

    #reverseMapCells(): KupInputPanelData {
        return this.inputPanelCells.reduce(
            (data, curr) => {
                const updatedCells = Object.keys(curr.row.cells).reduce(
                    (cells, key) => {
                        const cellState = curr.cells.find(
                            (c) => c.column.name === key
                        ).cell;

                        return {
                            ...cells,
                            [key]: {
                                ...curr.row.cells[key],
                                value: cellState.value,
                                obj: cellState.obj,
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
            [FCellTypes.RADIO, this.#RADAdapter.bind(this)],
            [FCellTypes.STRING, this.#ITXAdapter.bind(this)],
        ]);

        const adapter = dataAdapterMap.get(cellType);

        return adapter
            ? adapter(options, fieldLabel, currentValue, cell.fun)
            : null;
    }

    #slotData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        if (
            cellType !== FCellTypes.CHIP &&
            cellType !== FCellTypes.MULTI_AUTOCOMPLETE &&
            cellType !== FCellTypes.MULTI_COMBOBOX &&
            !cell.editable
        ) {
            return null;
        }

        return {
            trailingIcon: true,
            label: col.title,
        };
    }

    #CHIAdapter(
        options: GenericObject,
        _fieldLabel: string,
        currentValue: string
    ) {
        return {
            data: options?.length
                ? options.map((option) => ({
                      value: option.label,
                      id: option.id,
                      selected: currentValue === option.id,
                  }))
                : [{ id: currentValue, value: currentValue }],
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
        _currentValue: string
    ) {
        //TODO: come gestire i button list dal protocollo?
        return {
            data: [
                {
                    data: { dropdownOnly: false, label: 'Pier' },
                },
                { data: { dropdownOnly: false, label: 'Valerio' } },
            ],
        };
    }

    #CMBandACPAdapter(
        rawOptions: GenericObject,
        fieldLabel: string,
        currentValue: string,
        fun: string
    ) {
        // TODO Questa options handler ci dobbiamo aspettare che sia asincrona o sincrona??
        const options = fun ? this.optionsHandler(fun) : rawOptions;

        return {
            data: {
                'kup-text-field': {
                    trailingIcon: true,
                    label: fieldLabel,
                    icon: 'arrow_drop_down',
                },
                'kup-list': {
                    showIcons: true,
                    data: !options
                        ? []
                        : this.#optionsTreeComboAdapter(options, currentValue),
                },
            },
            label: fieldLabel,
        };
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

                return keys.map((key) => ({
                    id: fields[key].smeupObject.codice,
                    value: fields[key].smeupObject.testo,
                    selected: currentValue === fields[key].smeupObject.codice,
                }));
            })
            .flat();
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

        // this.handleEventsCallbacks.map((cbData) => {
        //     this.rootElement.addEventListener(cbData.eventName, (e: any) => {
        //         const inputPanelEvent: InputPanelEvent = {
        //             state: this.inputPanelCells.find((data) =>
        //                 data.cells.find(
        //                     (cell) => cell.column.name === e.detail.id
        //                 )
        //             ).cells,
        //             data: {
        //                 field: e.detail.id,
        //                 value: e.detail.inputValue || e.detail.value,
        //             },
        //         };

        //         cbData.eventCallback(inputPanelEvent);
        //     });
        // });
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

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
    DataAdapterFn,
    InputPanelCells,
    InputPanelEvent,
    InputPanelEventsCallback,
    KupInputPanelCell,
    KupInputPanelCellOptions,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelProps,
    KupInputPanelRow,
} from './kup-input-panel-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    FCellProps,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { FCell } from '../../f-components/f-cell/f-cell';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDataCell } from '../../components';
import { getProps, setProps } from '../../utils/utils';

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
    @Prop() submitCb: (e: SubmitEvent) => unknown = null;

    /**
     * Sets the callbacks functions on ketchup events
     * @default []
     */
    @Prop() handleEventsCallbacks: InputPanelEventsCallback[] = [];
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
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
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
        // todo layout
        const horizontal = inputPanelCell.row.layout?.horizontal || false;

        const rowContent: VNode[] = inputPanelCell.cells.map((cell) =>
            this.#renderCell(cell.cell, inputPanelCell.row, cell.column)
        );

        const classObj = {
            form: true,
            'input-panel': true,
            'form--column': !horizontal,
        };

        // We create a form for each row in data
        return (
            <form
                class={classObj}
                name={this.rootElement.id}
                onSubmit={this.submitCb}
            >
                {rowContent}
                {this.hiddenSubmitButton ? (
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

    #mapCells(data: KupInputPanelData) {
        const inpuPanelCells = data?.rows?.length
            ? data.rows.reduce((inpuPanelCells, row) => {
                  const cells = data.columns
                      .filter((column) => column.visible)
                      .map((column) => {
                          const cell = row.cells[column.name];
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

    #mapData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        const options = cell.options;
        const fieldLabel = col.title;
        const currentValue = cell.value;
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        const dataAdapterMap = new Map<FCellTypes, DataAdapterFn>([
            [FCellTypes.AUTOCOMPLETE, this.#CMBandACPAdapter],
            [FCellTypes.BUTTON_LIST, this.#BTNAdapter],
            [FCellTypes.CHART, this.#GRAAdapter],
            [FCellTypes.CHIP, this.#CHIAdapter],
            [FCellTypes.CHECKBOX, this.#CHKAdapter],
            [FCellTypes.COLOR_PICKER, this.#CLPAdapter],
            [FCellTypes.COMBOBOX, this.#CMBandACPAdapter],
            [FCellTypes.RADIO, this.#RADAdapter],
            [FCellTypes.STRING, this.#ITXAdapter],
        ]);

        const adapter = dataAdapterMap.get(cellType);

        return adapter ? adapter(options, fieldLabel, currentValue) : null;
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
        options: KupInputPanelCellOptions[],
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
        _options: KupInputPanelCellOptions[],
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
        options: KupInputPanelCellOptions[],
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            data: {
                'kup-text-field': {
                    trailingIcon: true,
                    label: fieldLabel,
                    icon: 'arrow_drop_down',
                },
                'kup-list': {
                    showIcons: true,
                    data: options?.length
                        ? options.map((option) => ({
                              value: option.label,
                              id: option.id,
                              selected: currentValue === option.id,
                          }))
                        : [],
                },
            },
            label: fieldLabel,
        };
    }

    #CHKAdapter(
        _options: KupInputPanelCellOptions[],
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            checked: currentValue === 'on' || currentValue === '1',
            label: fieldLabel,
        };
    }

    #CLPAdapter(
        _options: KupInputPanelCellOptions[],
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
        _options: KupInputPanelCellOptions[],
        fieldLabel: string,
        _currentValue: string
    ) {
        return { label: fieldLabel };
    }

    #RADAdapter(
        options: KupInputPanelCellOptions[],
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

        this.handleEventsCallbacks.map((cbData) => {
            this.rootElement.addEventListener(cbData.eventName, (e: any) => {
                const inputPanelEvent: InputPanelEvent = {
                    state: this.inputPanelCells.find((data) =>
                        data.cells.find(
                            (cell) => cell.column.name === e.detail.id
                        )
                    ).cells,
                    data: {
                        field: e.detail.id,
                        value: e.detail.inputValue || e.detail.value,
                    },
                };

                cbData.eventCallback(inputPanelEvent);
            });
        });
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

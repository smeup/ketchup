import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Prop,
    VNode,
    Watch,
    h,
} from '@stencil/core';
import {
    DataAdapterFn,
    KupInputPanelCell,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelRow,
} from './kup-input-panel-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupComponent, KupEventPayload } from '../../types/GenericTypes';
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
import { FRadioData } from '../../components';

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
        // console.log('data changed', this.data);
        // this.render();
    }
    //#endregion

    //#region PUBLIC METHODS
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    // TODO ADD METHODS HERE
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

    #renderRow(row: KupInputPanelRow) {
        // todo layout
        const horizontal = row.layout?.horizontal || false;

        const rowContent: VNode[] = this.data.columns
            .filter((col) => col.visible)
            .map((col) => {
                const cell = row.cells[col.name];

                const mappedCell = {
                    ...cell,
                    data: this.#mapData(cell, col),
                    slotData: this.#slotData(cell, col),
                    isEditable: cell.editable,
                };

                return this.#renderCell(mappedCell, row, col);
            });

        const classObj = {
            form: true,
            'input-panel': true,
            'form--column': !horizontal,
        };

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
        cell: KupInputPanelCell,
        row: KupInputPanelRow,
        column: KupInputPanelColumn
    ) {
        const cellProps: FCellProps = {
            cell,
            column,
            row,
            component: this,
            editable: cell.editable,
            renderKup: true,
            setSizes: true,
        };

        // if (
        //     dom.ketchup.data.cell.getType(cell, cell.shape) === FCellTypes.RADIO
        // ) {
        //     // console.log('cell.data', cell.data);
        //     return <kup-radio {...cell.data} />;
        // }

        return <FCell {...cellProps} />;
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

    #CHIAdapter(options: string[], _fieldLabel: string, currentValue: string) {
        return {
            data: options?.length
                ? options.map((option) => ({
                      value: option,
                      id: option,
                      selected: currentValue === option,
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
        _options: string[],
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
        options: string[],
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
                              value: option,
                              id: option,
                              selected: currentValue === option,
                          }))
                        : [],
                },
            },
            label: fieldLabel,
        };
    }

    #CHKAdapter(_options: string[], fieldLabel: string, currentValue: string) {
        return {
            checked: currentValue === 'on' || currentValue === '1',
            label: fieldLabel,
        };
    }

    #CLPAdapter(_options: string[], fieldLabel: string, _currentValue: string) {
        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
        };
    }

    #ITXAdapter(_options: string[], fieldLabel: string, _currentValue: string) {
        return { label: fieldLabel };
    }

    #RADAdapter(options: string[], _fieldLabel: string, currentValue: string) {
        // const onChange = (i) => {
        //     this.data = {
        //         ...this.data,
        //         rows: this.data.rows.map((row) => ({
        //             ...row,
        //             cells: {
        //                 ...row.cells,
        //                 RAD: {
        //                     ...row.cells['RAD'],
        //                     value: options[i],
        //                 },
        //             },
        //         })),
        //     };
        // };

        return {
            data: options.map((option) => ({
                value: option,
                label: option,
                checked: option === currentValue,
            })),
            // onChange,
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
        const isEmptyData = Boolean(!this.data?.rows?.length);

        const inputPanelContent: VNode[] = isEmptyData
            ? [
                  <p>
                      {this.#kupManager.language.translate(
                          KupLanguageGeneric.EMPTY_DATA
                      )}
                  </p>,
              ]
            : this.data.rows.map((row) => this.#renderRow(row));

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

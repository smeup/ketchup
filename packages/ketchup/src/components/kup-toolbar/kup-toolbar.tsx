import {
    Component,
    Element,
    EventEmitter,
    h,
    Host,
    Prop,
    State,
    VNode,
    Watch,
    Event,
} from '@stencil/core';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupDom,
    KupManager,
} from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import {
    KupDataCell,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    DataAdapterFn,
    InputPanelCells,
    KupInputPanelCell,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelLayoutField,
    KupInputPanelLayoutSection,
    KupInputPanelRow,
} from '../kup-input-panel/kup-input-panel-declarations';
import {
    FCellProps,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';

const dom: KupDom = document.documentElement as KupDom;
@Component({
    tag: 'kup-toolbar',
    styleUrl: 'kup-toolbar.scss',
    shadow: true,
})
export class KupToolbar {
    /**
     * References the root HTML element of the component (<kup-toolbar>).
     */
    @Element() rootElement: HTMLElement;

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
     * This is the content of the text
     * @default null
     */
    @Prop() value: string = null;
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
    //#region INT.VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    #originalData: KupInputPanelData = null;
    #listeners: { event: string; handler: (e) => void }[] = [];

    #cellTypeComponents: Map<FCellTypes, string> = new Map<FCellTypes, string>([
        [FCellTypes.DATE, 'kup-date-picker'],
        [FCellTypes.TIME, 'kup-time-picker'],
    ]);

    #keysShortcut: string[] = [];

    //#endregion

    //#region WATCHERS

    /*-------------------------------------------------*/
    /*               W a t c h e r s                   */
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

        if (this.#keysShortcut.length) {
            this.#keysShortcut.map((key) => {
                this.#kupManager.keysBinding.unregister(key);
            });
            this.#keysShortcut = [];
        }

        this.#mapCells(this.data);
    }

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
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
        let rowContent: VNode[];

        rowContent = inputPanelCell.cells.map((cell) =>
            this.#renderCell(cell.cell, inputPanelCell.row, cell.column)
        );

        // We create a form for each row in data
        return <div>{rowContent}</div>;
    }

    #renderCell(
        cell: KupDataCell,
        row: KupInputPanelRow,
        column: KupInputPanelColumn
    ) {
        console.log('RENDERCELL');
        if (!cell) {
            return;
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

        return <FCell {...cellProps} />;
    }

    #renderSection(
        cells: InputPanelCells,
        section: KupInputPanelLayoutSection,
        customLabelRender: boolean = false,
        styleObj: GenericObject = {}
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

        const sectionStyle = {
            ...styleObj,
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
            <div class={classObj} style={sectionStyle}>
                {content}
            </div>
        );

        return section.title && !customLabelRender ? (
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

    #mapData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        if (!cell) {
            return null;
        }

        const options = cell.options;
        const fieldLabel = col.title;
        const currentValue = cell.value;
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        const dataAdapterMap = new Map<FCellTypes, DataAdapterFn>([]);

        const adapter = dataAdapterMap.get(cellType);

        return adapter
            ? adapter(options, fieldLabel, currentValue, cell, col.name)
            : null;
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

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
        const toolbarContent: VNode[] = this.inputPanelCells.map(
            (inputPanelCell) => this.#renderRow(inputPanelCell)
        );
        console.log(toolbarContent);
        console.log('INPUTPANELCELL', this.inputPanelCells);

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{toolbarContent}</div>
            </Host>
        );
    }
    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}

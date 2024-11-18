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
    KupDropdownButtonEventPayload,
    KupEditorEventPayload,
    KupTabBarEventPayload,
    KupTabBarNode,
} from '../../components';
import { FButton } from '../../f-components/f-button/f-button';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellProps,
    FCellShapes,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FTypographyType } from '../../f-components/f-typography/f-typography-declarations';
import {
    GenericObject,
    KupComponent,
    KupComponentSizing,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    CHIAdapter,
    CHKAdapter,
    CMBandACPAdapter,
    RADAdapter,
    SWTAdapter,
} from '../../utils/cell-utils';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    DataAdapterFn,
    InputPanelButtonClickHandler,
    InputPanelCells,
    InputPanelCheckValidObjCallback,
    InputPanelCheckValidValueCallback,
    InputPanelOptionsHandler,
    KupInputPanelCell,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelLayout,
    KupInputPanelLayoutField,
    KupInputPanelLayoutSection,
    KupInputPanelLayoutSectionType,
    KupInputPanelProps,
    KupInputPanelRow,
    KupInputPanelSubmit,
} from './kup-input-panel-declarations';
import {
    getAbsoluteHeight,
    getAbsoluteLeft,
    getAbsoluteTop,
    getAbsoluteWidth,
    ROW_HEIGHT,
} from './kup-input-panel-utils';
import { FTypography } from '../../f-components/f-typography/f-typography';
import { KupTypographyList } from '../kup-typography-list/kup-typography-list';

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

    /**
     * Sets the callback for valid the object when cell checkObject is true
     * @default null
     */
    @Prop() checkValidObjCallback?: InputPanelCheckValidObjCallback = null;

    /**
     * Sets the callback for valid the object when cell checkObject is true
     * @default null
     */
    @Prop() checkValidValueCallback?: InputPanelCheckValidValueCallback = null;
    //#endregion

    /**
     * Sets verical layout if dashboardMode is true
     * @default false
     */
    @Prop() dashboardMode: boolean = false;
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

    /**
     * Values to send as props to FCell
     * @default []
     */
    @State() private inputPanelCommands: VNode[] = [];

    /**
     * Id of selected tab if exists
     * @default null
     */
    @State() private tabSelected: string = null;
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
        ['SmeupDataTree', this.#dataTreeOptionsChildrenAdapter.bind(this)],
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
        [FCellTypes.COMBOBOX, ['kup-combobox-iconclick', 'kup-combobox-blur']],
        [FCellTypes.MULTI_COMBOBOX, ['kup-combobox-iconclick']],
    ]);

    #eventBlurNames = new Map<FCellShapes, string>([
        [FCellShapes.AUTOCOMPLETE, 'kup-autocomplete-blur'],
        [FCellShapes.CHIP, 'kup-textfield-blur'],
        [FCellShapes.COMBOBOX, 'kup-combobox-blur'],
        [FCellShapes.DATE, 'kup-datepicker-blur'],
        [FCellShapes.MULTI_AUTOCOMPLETE, 'kup-autocomplete-blur'],
        [FCellShapes.MULTI_COMBOBOX, 'kup-combobox-blur'],
        [FCellShapes.TIME, 'kup-timepicker-blur'],
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
    #sectionRenderMap: Map<
        KupInputPanelLayoutSectionType,
        (cells: InputPanelCells, sections: KupInputPanelLayoutSection[]) => any
    > = new Map<
        KupInputPanelLayoutSectionType,
        (cells: InputPanelCells, sections: KupInputPanelLayoutSection[]) => any
    >([
        [KupInputPanelLayoutSectionType.TAB, this.#renderSectionTab.bind(this)],
    ]);
    #keysShortcut: string[] = [];
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

        if (this.#keysShortcut.length) {
            this.#keysShortcut.map((key) => {
                this.#kupManager.keysBinding.unregister(key);
            });
            this.#keysShortcut = [];
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

    #getCell(id: string) {
        return this.inputPanelCells.reduce<KupDataCell>((cell, { cells }) => {
            if (!cell) {
                return cells.find(({ column }) => column.name === id).cell;
            }
            return cell;
        }, null);
    }

    #renderRow(inputPanelCell: InputPanelCells) {
        const layout = inputPanelCell.row.layout;

        const horizontal = layout?.horizontal || false;
        const styleObj: GenericObject = {};

        let rowContent: VNode[];

        if (!layout?.sections?.length) {
            rowContent = inputPanelCell.cells.map((cell) =>
                this.#renderCell(cell.cell, inputPanelCell.row, cell.column)
            );
        } else {
            if (layout.absolute) {
                rowContent = this.#renderAbsoluteLayout(inputPanelCell, layout);
                const maxAbsoluteRow = Math.max(
                    ...layout.sections.flatMap((sec) =>
                        sec.content.map((cont) => cont.absoluteRow || 0)
                    )
                );
                styleObj.height = `${maxAbsoluteRow * ROW_HEIGHT}px`;
            } else {
                if (!layout.sectionsType) {
                    const hasDim = layout.sections.some((sec) => sec.dim);
                    styleObj.display = 'grid';

                    if (layout.horizontal) {
                        styleObj.gridTemplateColumns = hasDim
                            ? layout.sections
                                  .map((sec) => sec.dim || 'auto')
                                  .join(' ')
                            : `repeat(${layout.sections.length}, 1fr)`;
                    } else {
                        if (this.dashboardMode) {
                            styleObj.gridTemplateRows = hasDim
                                ? layout.sections
                                      .map((sec) => sec.dim || 'auto')
                                      .join(' ')
                                : `repeat(${layout.sections.length}, 1fr)`;
                        }
                    }
                }

                rowContent = this.#renderGridLayout(inputPanelCell, layout);
            }
        }

        const classObj = {
            'input-panel': true,
            'input-panel--column': !horizontal,
            'input-panel--absolute': layout?.absolute,
        };

        // We create a form for each row in data
        return (
            <form
                name={this.rootElement.id}
                id={this.rootElement.id}
                class={{ 'input-panel-form': true }}
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
                <div class={classObj} style={styleObj}>
                    {rowContent}
                </div>
                <div class="input-panel__commands">
                    {!this.hiddenSubmitButton ? (
                        <FButton
                            buttonType="submit"
                            label={this.#kupManager.language.translate(
                                KupLanguageGeneric.CONFIRM
                            )}
                            wrapperClass="form__submit"
                        ></FButton>
                    ) : null}
                    {this.inputPanelCommands}
                </div>
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
        return (
            <FButton
                icon={cell.icon}
                id={cellId}
                {...cell.data}
                wrapperClass="form__submit"
            ></FButton>
        );
    }

    #renderDropDownButton(cell: KupDataCell, data: GenericObject) {
        return (
            <kup-dropdown-button
                {...cell.data}
                sizing={KupComponentSizing.SMALL}
                label={cell.value}
                data={data}
                onkup-dropdownbutton-itemclick={(
                    e: CustomEvent<KupDropdownButtonEventPayload>
                ) => {
                    this.#getFunctionOnClickBTN(
                        e.detail.node,
                        e.detail.node.id
                    );
                }}
            ></kup-dropdown-button>
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
        return (
            <span class="input-panel-label" id={cellId}>
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

    #renderGridLayout(
        inputPanelCell: InputPanelCells,
        layout: KupInputPanelLayout
    ) {
        const sectionRender = this.#sectionRenderMap.get(layout.sectionsType);

        return sectionRender
            ? sectionRender(inputPanelCell, layout.sections)
            : layout.sections.map((section) =>
                  this.#renderSection(inputPanelCell, section)
              );
    }

    #renderAbsoluteLayout(
        inputPanelCell: InputPanelCells,
        layout: KupInputPanelLayout
    ) {
        return layout.sections.map((section) =>
            this.#renderAbsoluteSection(inputPanelCell, section)
        );
    }

    #renderSection(
        cells: InputPanelCells,
        section: KupInputPanelLayoutSection,
        customLabelRender: boolean = false,
        styleObj: GenericObject = {}
    ) {
        const classObj = {
            'input-panel__section': !section.horizontal,
            'input-panel__horizontal-section': section.horizontal,
        };

        styleObj.gap = +section.gap > 0 ? `${section.gap}rem` : '1rem';

        let content = [];

        if (section.sections?.length) {
            content = section.sections.map((innerSection) =>
                this.#renderSection(cells, innerSection)
            );

            const hasDim = section.sections.some((sec) => sec.dim);

            if (!section.gridCols && section.horizontal) {
                styleObj.gridTemplateColumns = hasDim
                    ? section.sections.map((sec) => sec.dim || 'auto').join(' ')
                    : `repeat(${section.sections.length}, 1fr)`;
            }

            if (
                !section.gridRows &&
                !section.horizontal &&
                this.dashboardMode
            ) {
                styleObj.gridTemplateRows = hasDim
                    ? section.sections.map((sec) => sec.dim || 'auto').join(' ')
                    : `repeat(${section.sections.length}, 1fr)`;
            }
        } else if (section.content?.length) {
            content = section.content.map((field) =>
                this.#renderField(cells, field)
            );
            styleObj.gridTemplateColumns =
                +section.gridCols > 0 ? `repeat(${section.gridCols}, 1fr)` : '';
            if (this.dashboardMode) {
                styleObj.gridTemplateRows =
                    +section.gridRows > 0
                        ? `repeat(${section.gridRows}, 1fr)`
                        : '';
            }
        }

        const sectionContent = (
            <div class={classObj} style={styleObj}>
                {content}
            </div>
        );

        return section.title && !customLabelRender ? (
            <div class={{ 'input-panel__section_label_container': true }}>
                <FTypography
                    type={FTypographyType.HEADING1}
                    value={section.title}
                ></FTypography>
                {sectionContent}
            </div>
        ) : (
            sectionContent
        );
    }

    #renderAbsoluteSection(
        cells: InputPanelCells,
        section: KupInputPanelLayoutSection
    ) {
        let content = [];

        if (section.sections?.length) {
            content = section.sections.map((innerSection) =>
                this.#renderAbsoluteSection(cells, innerSection)
            );
        } else if (section.content?.length) {
            content = section.content.map((field) =>
                this.#renderAbsoluteField(cells, field)
            );
        }

        //If width is not specified the div in the return at the end can be removed
        if (getAbsoluteWidth(section.absoluteWidth) == null) {
            return content;
        }

        const width = `${
            getAbsoluteWidth(section.absoluteWidth) != null
                ? `${getAbsoluteWidth(section.absoluteWidth)}px`
                : '100%'
        }`;
        const height = `${
            getAbsoluteHeight(section.absoluteHeight) != null
                ? `${getAbsoluteHeight(section.absoluteHeight)}px`
                : '100%'
        }`;
        const top = `${getAbsoluteTop(section.absoluteRow)}px`;
        const left = `${getAbsoluteLeft(section.absoluteColumn)}px`;

        const sectionStyle = {
            position: 'relative',
            width,
            'min-width': width,
            'max-width': width,
            height,
            'min-height': height,
            'max-height': height,
            top,
            left,
            overflow: 'auto',
        };

        return <div style={sectionStyle}>{content}</div>;
    }

    #extractContentIds(node: KupInputPanelLayoutSection) {
        let ids: string[] = [];

        if (node.content?.length) {
            node.content.forEach((item) => {
                if (item.id) {
                    ids.push(item.id);
                }
            });
        }

        if (node.sections?.length) {
            node.sections.forEach((section) => {
                ids = ids.concat(this.#extractContentIds(section));
            });
        }

        return ids;
    }

    #renderSectionTab(
        cells: InputPanelCells,
        sections: KupInputPanelLayoutSection[]
    ) {
        if (!this.tabSelected) {
            this.tabSelected = sections[0].id || '0';
        }

        const tabNodes: KupTabBarNode[] = sections.map((section, i) => {
            const cellIdsInSection = this.#extractContentIds(section);

            const hasError = cells.cells.some((cellData) => {
                const cell = cellData.cell;
                const column = cellData.column;
                return (
                    cellIdsInSection.includes(column.name) && !!cell.data?.error
                );
            });

            return {
                active: (section.id || `${i}`) === this.tabSelected,
                value: section.title,
                icon: hasError ? 'error' : section.icon,
                id: section.id || `${i}`,
                danger: hasError,
            };
        });

        const sectionContent = sections.map((section, i) => {
            const sectionId = section.id || `${i}`;
            return this.#renderSection(cells, section, true, {
                display: this.tabSelected !== sectionId ? 'none' : 'grid',
            });
        });

        const tabCustomStyle =
            '.tab-bar .tab-scroller .tab .tab__content { justify-content: flex-start; }';

        if (!this.#listeners.map((l) => l.event).includes('kup-tabbar-click')) {
            const event = 'kup-tabbar-click';
            const handler = (e: CustomEvent<KupTabBarEventPayload>) => {
                this.tabSelected = e.detail.node.id;
            };

            this.rootElement.addEventListener(event, handler);
            this.#listeners.push({
                event,
                handler,
            });
        }

        return (
            <div class={{ 'input-panel__tabs_container': true }}>
                <kup-tab-bar
                    data={tabNodes}
                    customStyle={tabCustomStyle}
                ></kup-tab-bar>
                {sectionContent}
            </div>
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
            'min-width': '0',
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

    #renderAbsoluteField(
        cells: InputPanelCells,
        field: KupInputPanelLayoutField
    ) {
        const fieldCell = cells.cells.find(
            (cell) => cell.column.name === field.id
        );
        if (!fieldCell || !fieldCell.cell) {
            return;
        }

        let length: number;
        if (fieldCell.cell.shape == FCellShapes.DATE) {
            length = field.absoluteLength > 8 ? field.absoluteLength : 8;
        } else {
            length = field.absoluteLength;
        }

        const width = `${getAbsoluteWidth(length)}px`;
        const height = `${getAbsoluteHeight(1)}px`;
        const top = `${getAbsoluteTop(field.absoluteRow)}px`;
        const left = `${getAbsoluteLeft(field.absoluteColumn)}px`;

        const styleObj = {
            position: 'absolute',
            width,
            'min-width': width,
            'max-width': width,
            height,
            'min-height': height,
            'max-height': height,
            top,
            left,
            overflow: 'auto',
        };

        fieldCell.cell.data = {
            ...fieldCell.cell.data,
            sizing: 'extra-small',
            customStyle:
                (fieldCell.cell.data.customStyle || '') +
                '.mdc-text-field {height: unset !important;}',
        };

        return (
            <div style={styleObj}>
                {this.#renderCell(fieldCell.cell, cells.row, fieldCell.column)}
            </div>
        );
    }

    #mapCommands() {
        this.inputPanelCommands = this.data.setup.commands
            .map((commandObj) => {
                if (commandObj?.children && commandObj?.children.length > 0) {
                    const data = {
                        'kup-list': {
                            showIcons: true,
                            data: commandObj.children.map((c) =>
                                this.#commandAdapter(c)
                            ),
                        },
                    };
                    return this.#renderDropDownButton(commandObj, data);
                } else {
                    const buttonCell = this.#commandAdapter(commandObj);
                    return this.#renderButton(buttonCell, commandObj.value);
                }
            })
            .flat();
    }

    #mapCells(data: KupInputPanelData) {
        if (data.setup?.commands?.length) {
            this.#mapCommands();
        }

        const layout = data?.rows[0]?.layout;
        const inpuPanelCells = data?.rows?.length
            ? data.rows.reduce((inpuPanelCells, row) => {
                  const cells = data.columns
                      .filter((column) => column.visible)
                      .map((column) => {
                          const cell = structuredClone(row.cells[column.name]);
                          const mappedCell = cell
                              ? {
                                    ...cell,
                                    data: this.#setData(cell, column, layout),
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
                    `${componentQuery}[id=${column.name.replace(
                        /\//g,
                        '\\$1'
                    )}]`
                );

                el?.setValue(cell.value);
            })
        );

        this.inputPanelCells = inpuPanelCells;
    }

    #setData(
        cell: KupInputPanelCell,
        column: KupInputPanelColumn,
        layout?: KupInputPanelLayout
    ) {
        const defaultProps = {
            ...this.#mapData(cell, column, layout),
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

    #mapData(
        cell: KupInputPanelCell,
        col: KupInputPanelColumn,
        layout?: KupInputPanelLayout
    ) {
        if (!cell) {
            return null;
        }

        const options = cell.options;
        let fieldLabel: string;
        if (layout?.absolute) {
            fieldLabel = null;
        } else {
            fieldLabel = col.title;
        }
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
            [FCellTypes.OBJECT, this.#ObjectAdapter.bind(this)],
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
                sizing: KupComponentSizing.EXTRA_SMALL,
            };
        }

        return null;
    }

    #CHIAdapter(
        _options: GenericObject,
        _fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            this.#checkOnBlurEvent(cell, id);
        }

        return CHIAdapter(currentValue);
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
        cell: KupInputPanelCell,
        id: string
    ) {
        cell.data = cell.data || {};

        cell.data.onClick = () => {
            this.#getFunctionOnClickBTN(cell, id);
        };

        if (cell.data?.keyShortcut && !cell.data?.disabled) {
            this.#keysShortcut.push(cell.data?.keyShortcut);
            this.#kupManager.keysBinding.register(
                cell.data?.keyShortcut,
                cell.data.onClick.bind(this)
            );
        }

        return {
            label: cell.value,
            fun: cell.fun,
            ...cell.data,
        };
    }

    #CMBandACPAdapter(
        rawOptions: GenericObject,
        fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        const configCMandACP = CMBandACPAdapter(currentValue, fieldLabel, []);

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

        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            this.#checkOnBlurEvent(cell, id);
        }

        return configCMandACP;
    }

    #CHKAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        let data = CHKAdapter(currentValue, fieldLabel);

        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            return {
                ...data,
                onBlur: () => {
                    this.#checkOnBlurProp(cell, id);
                },
            };
        }

        return data;
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
        _currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            return {
                label: fieldLabel,
                onBlur: () => {
                    this.#checkOnBlurProp(cell, id);
                },
            };
        }
        return { label: fieldLabel };
    }

    #RADAdapter(
        options: GenericObject,
        _fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        let data = RADAdapter(currentValue, options);

        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            return {
                ...data,
                onBlur: () => {
                    this.#checkOnBlurProp(cell, id);
                },
            };
        }

        return data;
    }

    #SWTAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return SWTAdapter(currentValue, fieldLabel);
    }

    #DateAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            this.#checkOnBlurEvent(cell, id);
        }

        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
            initialValue: currentValue,
        };
    }

    #ObjectAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            return {
                initialValue: currentValue || '',
                label: fieldLabel || ' ',
                value: currentValue || '',
                onBlur: () => {
                    this.#checkOnBlurProp(cell, id);
                },
            };
        }

        return {
            initialValue: currentValue || '',
            label: fieldLabel || ' ',
            value: currentValue || '',
        };
    }

    #TimeAdapter(
        _options: GenericObject,
        fieldLabel: string,
        _currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            this.#checkOnBlurEvent(cell, id);
        }
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
        _currentValue: string,
        cell: KupInputPanelCell,
        id: string
    ) {
        if (
            cell.inputSettings?.checkObject ||
            cell.inputSettings?.checkValueOnExit ||
            cell.mandatory
        ) {
            return {
                label: fieldLabel,
                onBlur: () => {
                    this.#checkOnBlurProp(cell, id);
                },
            };
        }
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

    #dataTreeOptionsChildrenAdapter(
        options: any,
        currentValue: string
    ): GenericObject[] {
        return options.children.map((child) => ({
            id: child.obj.k,
            value: child.value,
            selected: currentValue === child.obj.k,
            children: child.children?.length
                ? this.#dataTreeOptionsChildrenAdapter(child, currentValue)
                : [],
        }));
    }

    #tableOptionsAdapter(options: any, currentValue: string): GenericObject[] {
        return options.rows.map((row) => {
            const cells = row.fields || row.cells;
            const [id, value] = Object.keys(cells);

            return {
                id: cells[id].value,
                value: cells[value]?.value || cells[id].value,
                selected: currentValue === cells[id].value,
            };
        });
    }

    #commandAdapter(cell: KupDataCell): KupDataCell {
        const buttonCell = {
            ...cell,
            data: this.#BTNAdapter(null, null, cell.value, cell, cell.obj.k),
            id: cell.obj.k,
        };
        return buttonCell;
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
            this.#reverseMapCells(),
            detail.id
        ).then((options) => {
            data.data['kup-list'].data =
                this.#optionsTreeComboAdapter(options, currentValue) ?? [];
            detail.comp.refresh();
        });
    }

    async #checkOnBlurProp(cell: KupInputPanelCell, id: string) {
        const currCell = this.#getCell(id);

        // Required cell check
        if (cell.mandatory) {
            this.#setCellError(
                id,
                currCell.value
                    ? // If it's not empty remove the error message
                      null
                    : // else set the error message
                      this.#kupManager.language.translate(
                          KupLanguageGeneric.REQUIRED_VALUE
                      )
            );

            if (!currCell.value) {
                return;
            }
        } else {
            this.#setCellError(id, null);
        }

        // Valid object check
        if (cell.inputSettings?.checkObject && currCell.value) {
            const { valid } = await this.checkValidObjCallback({
                obj: cell.obj,
                currentState: this.#reverseMapCells(),
                fun: cell.fun,
            });
            if (valid) {
                this.#setCellError(id, null);
            } else {
                this.#setCellError(
                    id,
                    this.#kupManager.language.translate(
                        KupLanguageGeneric.INVALID_VALUE
                    )
                );
                return;
            }
        }

        if (cell.inputSettings?.checkValueOnExit && this.#areValuesUpdated()) {
            this.checkValidValueCallback(
                {
                    before: { ...this.#originalData },
                    after: this.#reverseMapCells(),
                },
                id
            );
        }
    }

    #checkOnBlurEvent(cell: KupInputPanelCell, id: string) {
        const evName = this.#eventBlurNames.get(cell.shape);
        if (!evName) {
            return;
        }

        const handler = async (e: CustomEvent<KupAutocompleteEventPayload>) => {
            const currCell = this.#getCell(id);

            if (e.detail.id !== id) {
                return;
            }

            // Required cell check
            if (cell.mandatory) {
                this.#setCellError(
                    id,
                    currCell.value
                        ? // If it's not empty remove the error message
                          null
                        : // else set the error message
                          this.#kupManager.language.translate(
                              KupLanguageGeneric.REQUIRED_VALUE
                          )
                );

                if (!e.detail.value) {
                    return;
                }
            } else {
                this.#setCellError(id, null);
            }

            // Valid object check
            if (cell.inputSettings?.checkObject && e.detail.value) {
                const { valid } = await this.checkValidObjCallback({
                    obj: cell.obj,
                    currentState: this.#reverseMapCells(),
                    fun: cell.fun,
                });

                this.#setCellError(
                    id,
                    valid
                        ? // If it's not empty remove the error message
                          null
                        : // else set the error message
                          this.#kupManager.language.translate(
                              KupLanguageGeneric.INVALID_VALUE
                          )
                );
                if (!valid) {
                    return;
                }
            }

            if (
                cell.inputSettings?.checkValueOnExit &&
                this.#areValuesUpdated()
            ) {
                this.checkValidValueCallback(
                    {
                        before: { ...this.#originalData },
                        after: this.#reverseMapCells(),
                    },
                    id
                );
            }
        };
        this.rootElement.addEventListener(evName, handler);
        this.#listeners.push({
            event: evName,
            handler,
        });
    }

    #setCellError(id: string, error: string) {
        this.inputPanelCells = this.inputPanelCells.map((cell) => ({
            ...cell,
            cells: cell.cells.map(({ cell, column }) => {
                const data =
                    column.name === id
                        ? {
                              ...cell.data,
                              error,
                          }
                        : cell.data;
                return {
                    column,
                    cell: {
                        ...cell,
                        data,
                    },
                };
            }),
        }));
    }

    #areValuesUpdated() {
        return this.inputPanelCells.some(({ cells, row }) =>
            cells.some(
                ({ cell, column: { name } }) =>
                    cell.value !== row.cells[name].value
            )
        );
    }

    #getFunctionOnClickBTN(cell: KupInputPanelCell, id: string) {
        cell.fun
            ? this.customButtonClickHandler({
                  fun: cell.fun,
                  cellId: id,
                  currentState: this.#reverseMapCells(),
              })
            : this.submitCb({
                  value: {
                      before: { ...this.#originalData },
                      after: this.#reverseMapCells(),
                  },
                  cell: id,
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

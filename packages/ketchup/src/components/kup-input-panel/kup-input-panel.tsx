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
import {
    FObjectFieldEventPayload,
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
    FCellEventPayload,
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
import {
    FTypographyProps,
    FTypographyType,
} from '../../f-components/f-typography/f-typography-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    CHIAdapter,
    CHKAdapter,
    CMBandACPAdapter,
    getCellValueForDisplay,
    RADAdapter,
    SWTAdapter,
} from '../../utils/cell-utils';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    CheckConditionsByEventType,
    CheckTriggeringEvents,
    DataAdapterFn,
    InputPanelButtonClickHandler,
    InputPanelCells,
    InputPanelCheckValidObjCallback,
    InputPanelCheckValidValueCallback,
    InputPanelKeyCommands,
    InputPanelOptionsHandler,
    KupInputPanelButtonsPositions,
    KupInputPanelCell,
    KupInputPanelClickEventPayload,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelEventHandlerDetails,
    KupInputPanelLayout,
    KupInputPanelLayoutField,
    KupInputPanelLayoutSection,
    KupInputPanelLayoutSectionType,
    KupInputPanelPosition,
    KupInputPanelProps,
    KupInputPanelRow,
    KupInputPanelSubmit,
} from './kup-input-panel-declarations';
import {
    getAbsoluteHeight,
    getAbsoluteLeft,
    getAbsoluteTop,
    getAbsoluteWidth,
    getInpComponentAbsoluteHeight,
    getLabelAbsoluteWidth,
    ROW_HEIGHT,
} from './kup-input-panel-utils';
import { FTypography } from '../../f-components/f-typography/f-typography';
import { KupPointerEventTypes } from '../../managers/kup-interact/kup-interact-declarations';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { FLabel } from '../../f-components/f-label/f-label';

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
     * Select the position of the buttons related to the input panel
     * @default "BOTTOM"
     */
    @Prop() buttonPosition: KupInputPanelButtonsPositions =
        KupInputPanelButtonsPositions.BOTTOM;

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';

    /**
     * Sets verical layout if dashboardMode is true
     * @default false
     */
    @Prop() dashboardMode: boolean = false;

    /**
     * Actual data of the form.
     * @default null
     */
    @Prop() data: KupInputPanelData = null;

    /**
     * Creates a hidden submit button in order to submit the form with enter.``
     * @default false
     */
    @Prop() hiddenSubmitButton: boolean = false;

    /**
     * Dispositions of the whole input panel elements
     * @default COLUMNS
     */
    @Prop() inputPanelPosition: KupInputPanelPosition =
        KupInputPanelPosition.COLUMNS;

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

    /**
     * Sets whether the first input should receive focus.
     * @default false
     */
    @Prop() autoFocus?: boolean = false;

    /**
     * Sets the auto skip between input text fields when the value reaches the max length
     * @default false
     */
    @Prop() autoSkip?: boolean = false;

    /**
     * When set to true, checkbox will call update
     * @default false
     */
    @Prop() updateOnClick: boolean = false;

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

    #formRef: HTMLFormElement;

    #optionsAdapterMap = new Map<
        string,
        (options: any, currentValue: string) => GenericObject[]
    >([
        ['SmeupDataTree', this.#dataTreeOptionsChildrenAdapter.bind(this)],
        ['SmeupDataTable', this.#tableOptionsAdapter.bind(this)],

        //FIXME: deprecated
        ['SmeupTreeNode', this.#treeOptionsNodeAdapter.bind(this)],
        ['SmeupTable', this.#tableOptionsAdapter.bind(this)],
    ]);

    #originalData: KupInputPanelData = null;

    #listeners: { event: string; handler: (e) => void }[] = [];
    #cellTypeComponents: Map<FCellTypes, string> = new Map<FCellTypes, string>([
        [FCellTypes.DATE, 'kup-date-picker'],
        [FCellTypes.TIME, 'kup-time-picker'],
    ]);
    #cellTypesNeedingReset: Map<FCellTypes, string> = new Map<
        FCellTypes,
        string
    >([
        [FCellTypes.COMBOBOX, 'kup-combobox'],
        [FCellTypes.AUTOCOMPLETE, 'kup-autocomplete'],
    ]);
    #cellCustomRender: Map<
        FCellShapes,
        (
            cell: KupDataCell,
            column: KupDataColumn,
            isAbsoluteLayout?: boolean
        ) => any
    > = new Map<
        FCellShapes,
        (
            cell: KupDataCell,
            column: KupDataColumn,
            isAbsoluteLayout?: boolean
        ) => any
    >([
        [FCellShapes.BUTTON_LIST, this.#renderButton.bind(this)],
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
    #readyPromise: Promise<void>;
    #readyResolve: () => void;
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
        if (this.data) {
            this.#mapCells(this.data);
        }
    }
    //#endregion

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                e.stopPropagation();

                const rootActiveElement = this.rootElement.shadowRoot
                    .activeElement as HTMLInputElement;
                const keyPressed = e.key.toLowerCase();
                if (keyPressed === 'enter' && rootActiveElement) {
                    rootActiveElement?.blur();
                    this.submitCb({
                        value: {
                            before: { ...this.#originalData },
                            after: this.#reverseMapCells(),
                        },
                    });
                }

                break;
        }
    }

    //#region PUBLIC METHODS
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Public method to wait until the component is fully ready.
     */
    @Method()
    async waitForReady(): Promise<void> {
        return this.#readyPromise;
    }

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

    /**
     * Generic right click event on input panel.
     */
    @Event({
        eventName: 'kup-inputpanel-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableContextMenu: EventEmitter<KupInputPanelClickEventPayload>;

    @Event({
        eventName: 'kup-inputpanel-objectfield-searchpayload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInputPanelObjectFieldSearchPayload: EventEmitter<FObjectFieldEventPayload>;

    @Event({
        eventName: 'kup-inputpanel-objectfield-opensearchmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInputPanelObjectFieldOpenSearchMenu: EventEmitter<FObjectFieldEventPayload>;

    @Event({
        eventName: 'kup-inputpanel-objectfield-selectedmenuitem',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInputPanelObjectFieldSelectedMenuItem: EventEmitter<FObjectFieldEventPayload>;
    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #getCell(id: string) {
        return this.inputPanelCells.reduce<KupDataCell | null>(
            (cell, { cells }) => {
                if (!cell) {
                    const foundCell = cells.find(
                        ({ column }) => column.name === id
                    );
                    if (foundCell) {
                        return foundCell.cell;
                    }
                    return null;
                }
                return cell;
            },
            null
        );
    }

    #renderRow(inputPanelCell: InputPanelCells) {
        const layout = inputPanelCell.row.layout;
        const horizontal = layout?.horizontal || false;
        const styleObj: GenericObject = {};
        const styleTypographyObj: GenericObject = {};

        let rowContent: VNode[];

        if (!layout?.sections?.length) {
            rowContent = inputPanelCell.cells
                .filter(({ column }) => column.visible)
                .map((cell) =>
                    this.#renderCell(cell.cell, inputPanelCell.row, cell.column)
                );
        } else {
            if (layout.absolute) {
                rowContent = this.#renderAbsoluteLayout(inputPanelCell, layout);
                // 12px is added due to the chance that the horizontal scrollbar will be rendered
                styleObj.height = `${
                    getInpComponentAbsoluteHeight(layout) * ROW_HEIGHT + 12
                }px`;
            } else {
                if (!layout.sectionsType) {
                    const hasDim = layout.sections.some((sec) => sec.dim);
                    styleObj.display = 'grid';
                    if (
                        this.inputPanelPosition ===
                            KupInputPanelPosition.INLINE ||
                        this.inputPanelPosition ===
                            KupInputPanelPosition.UPINLINE
                    ) {
                        styleObj.display = '';
                    }
                    if (layout.horizontal) {
                        styleObj.gridTemplateColumns = hasDim
                            ? layout.sections
                                  .map((sec) => sec.dim || 'auto')
                                  .join(' ')
                            : `repeat(${inputPanelCell.cells.length}, 1fr)`;
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

        const inputPanelClass = {
            'input-panel-form': true,
            'input-panel-form--inline':
                this.buttonPosition == KupInputPanelButtonsPositions.RIGHT,
        };

        const classObj = {
            'input-panel': true,
            'input-panel--column': !horizontal,
            'input-panel--absolute': layout?.absolute,
            'input-panel--inline':
                this.inputPanelPosition === KupInputPanelPosition.INLINE ||
                this.inputPanelPosition === KupInputPanelPosition.UPINLINE,
        };

        const commandsClass = {
            'input-panel__commands': true,
            [`input-panel__commands--${this.buttonPosition}`]: true,
        };

        const props: FTypographyProps = {
            value: layout?.sections[0]?.title,
            type: FTypographyType.HEADING1,
        };

        return (
            <div>
                <form
                    name={this.rootElement.id}
                    id={this.rootElement.id}
                    class={inputPanelClass}
                    ref={(el: HTMLFormElement) => (this.#formRef = el)}
                    onSubmit={(e: SubmitEvent) => {
                        e.preventDefault();
                        this.submitCb({
                            value: {
                                before: { ...this.#originalData },
                                after: this.#reverseMapCells(),
                            },
                        });
                    }}
                    onContextMenu={(e: MouseEvent) => {
                        if (this.#findTraversedFCell(e) != null) {
                            e.preventDefault();
                        }
                    }}
                >
                    <div class="input-panel__typography">
                        <FTypography {...props} />
                    </div>
                    <div class={classObj} style={styleObj}>
                        {rowContent}
                    </div>
                    <div class={commandsClass}>
                        <FButton
                            buttonType="submit"
                            label={this.#kupManager.language.translate(
                                KupLanguageGeneric.CONFIRM
                            )}
                            wrapperClass="form__submit"
                            invisible={this.hiddenSubmitButton}
                        ></FButton>
                        {this.inputPanelCommands}
                    </div>
                </form>
            </div>
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
            return customRender(cell, column, row.layout?.absolute);
        }

        cell.data = {
            ...cell.data,
            sizing: 'extra-small',
        };
        const cellProps: FCellProps = {
            cell,
            column,
            row,
            editable: true,
            component: this,
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

    #renderButton(cell: KupDataCell, { name }: KupDataColumn) {
        const renderedButton = (
            <FButton
                icon={cell.icon}
                id={name}
                {...cell.data}
                wrapperClass="form__submit"
            ></FButton>
        );
        return renderedButton;
    }

    #renderDropDownButton(cell: KupDataCell, data: GenericObject) {
        return (
            <kup-dropdown-button
                {...cell.data}
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

    #renderEditor(cell: KupDataCell, { name }: KupDataColumn) {
        const event = 'kup-editor-save';
        const handler = (e: CustomEvent<KupEditorEventPayload>) => {
            const edtCell: KupDataCell =
                this.inputPanelCells.reduce<KupDataCell>((cell, { cells }) => {
                    if (!cell) {
                        return cells.find(({ column }) => column.name === name)
                            .cell;
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
                id={name}
                isReadOnly={!cell.isEditable}
                showToolbar={true}
            ></kup-editor>
        );
    }

    #renderDataTable(cell: KupDataCell, { name }: KupDataColumn) {
        return (
            <kup-data-table
                id={name}
                editableData={true}
                showGroups={true}
                showFilters={true}
                {...cell.data}
            ></kup-data-table>
        );
    }

    #renderLabel(
        cell: KupDataCell,
        column: KupDataColumn,
        isAbsoluteLayout?: boolean
    ) {
        const isNumberType = dom.ketchup.objects.isNumber(cell.obj);
        const isFormattableType =
            isNumberType ||
            dom.ketchup.objects.isDate(cell.obj) ||
            dom.ketchup.objects.isTime(cell.obj) ||
            dom.ketchup.objects.isTimestamp(cell.obj);

        const classList = ['input-panel-label'];
        if (isAbsoluteLayout) classList.push('input-panel-label--legacy-look');
        if (isNumberType) classList.push('input-panel-label-number');

        const value = isFormattableType
            ? getCellValueForDisplay(column, cell)
            : cell.value;

        return (
            <span class={classList.join(' ')} id={column.name}>
                <FLabel text={value} />
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
                  this.#renderSection(inputPanelCell, section, false)
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
            'input-panel__section-inline':
                this.inputPanelPosition === KupInputPanelPosition.INLINE ||
                this.inputPanelPosition === KupInputPanelPosition.UPINLINE,
        };

        styleObj.gap = +section.gap > 0 ? `${section.gap}rem` : '1rem';

        let content = [];

        if (section.sections?.length) {
            content = section.sections
                .map((innerSection) => this.#renderSection(cells, innerSection))
                .filter(Boolean);

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
            content = section.content
                .map((field) => this.#renderField(cells, field))
                .filter(Boolean);

            styleObj.gridTemplateColumns =
                +section.gridCols > 0 ? `repeat(${section.gridCols}, 1fr)` : '';
            if (this.dashboardMode) {
                styleObj.gridTemplateRows =
                    +section.gridRows > 0
                        ? `repeat(${section.gridRows}, 1fr)`
                        : '';
            }
        }
        const sectionContent = content.length ? (
            <div class={classObj} style={styleObj}>
                {content}
            </div>
        ) : undefined;

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

        if (!fieldCell || !fieldCell.cell || !fieldCell.column.visible) {
            return;
        }

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

        if (!fieldCell || !fieldCell.cell || !fieldCell.column.visible) {
            return;
        }

        let length: number;
        if (fieldCell.cell.shape == FCellShapes.DATE) {
            length = field.absoluteLength > 8 ? field.absoluteLength : 8;
        } else {
            length = field.absoluteLength;
        }

        if (!field.absoluteHeight) {
            field.absoluteHeight = 1;
        }

        const absoluteWidth =
            fieldCell.cell.shape === FCellShapes.LABEL
                ? getLabelAbsoluteWidth(length)
                : getAbsoluteWidth(length);
        const absoluteHeight = getAbsoluteHeight(field.absoluteHeight);
        const absoluteTop = getAbsoluteTop(field.absoluteRow);
        const absoluteLeft = getAbsoluteLeft(field.absoluteColumn);

        const styleObj = {
            position: 'absolute',
            width: absoluteWidth !== null ? `${absoluteWidth}px` : null,
            'min-width': absoluteWidth !== null ? `${absoluteWidth}px` : null,
            'max-width': absoluteWidth !== null ? `${absoluteWidth}px` : null,
            height: absoluteHeight !== null ? `${absoluteHeight}px` : null,
            'min-height':
                absoluteHeight !== null ? `${absoluteHeight}px` : null,
            'max-height':
                absoluteHeight !== null ? `${absoluteHeight}px` : null,
            top:
                absoluteTop !== null
                    ? `${getAbsoluteTop(field.absoluteRow)}px`
                    : null,
            left:
                absoluteLeft !== null
                    ? `${getAbsoluteLeft(field.absoluteColumn)}px`
                    : null,
            overflow: 'auto',
        };

        fieldCell.cell.data = {
            ...fieldCell.cell.data,
            customStyle:
                (fieldCell.cell.data.customStyle || '') +
                '.mdc-text-field {height: unset !important;}',
            legacyLook: true,
            helperEnabled: false,
            ...(fieldCell.cell.shape === FCellShapes.TABLE && {
                rowsPerPage: fieldCell.cell.data.data.rows.length,
                showPaginator: false,
                showFooter: false,
                tableHeight: `${absoluteHeight}px`,
            }),
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
                    return this.#renderButton(buttonCell, {
                        name: commandObj.value,
                        title: commandObj.value,
                    });
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
                  const cells = data.columns.map((column) => {
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
                const queryCompSetValue =
                    this.#cellTypeComponents.get(cellType);
                const queryCompNeedsReset =
                    this.#cellTypesNeedingReset.get(cellType);

                if (!queryCompSetValue && !queryCompNeedsReset) return;

                const selector =
                    (queryCompSetValue ?? queryCompNeedsReset) +
                    `[id='${column.name.replace(/\//g, '\\$1')}']`;
                const el: any =
                    this.rootElement.shadowRoot.querySelector(selector);

                queryCompNeedsReset ? el?.reset() : el?.setValue?.(cell.value);
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
            disabled: !cell.isEditable,
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
            ? adapter(options, fieldLabel, currentValue, cell, col.name, layout)
            : null;
    }

    #slotData(cell: KupInputPanelCell, col: KupInputPanelColumn) {
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        if (cellType === FCellTypes.CHIP) {
            return {
                trailingIcon: true,
                label: col.title,
                disabled: !cell.isEditable,
                id: col.name,
                fullWidth: false,
            };
        }

        if (
            cellType === FCellTypes.MULTI_AUTOCOMPLETE ||
            cellType === FCellTypes.MULTI_COMBOBOX
        ) {
            return {
                ...this.#CMBandACPAdapter(cell.options, col.title, null),
                showDropDownIcon: true,
                class: '',
                style: { width: '100%' },
                disabled: !cell.isEditable,
                id: col.name,
            };
        }

        return null;
    }

    #CHIAdapter(
        _options: GenericObject,
        _fieldLabel: string,
        currentValue: string,
        cell: KupInputPanelCell
    ) {
        return CHIAdapter(currentValue, cell.decode);
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
        currentValue: string
    ) {
        const configCMandACP = CMBandACPAdapter(currentValue, fieldLabel, []);
        if (rawOptions) {
            configCMandACP.data['kup-list'].data =
                this.#optionsTreeComboAdapter(rawOptions, currentValue);
        }

        return configCMandACP;
    }

    #getOptionHandler(
        { detail }: CustomEvent<KupAutocompleteEventPayload>,
        checkList = false
    ) {
        const cell = this.#getCell(detail.id) as KupInputPanelCell;
        let triggerCallback = true;

        if (checkList) {
            triggerCallback = !detail.comp.data['kup-list'].data.length;
        }

        if (cell.fun && triggerCallback) {
            this.#getAutocompleteEventCallback(detail, cell);
        }
    }

    #CHKAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return CHKAdapter(currentValue, fieldLabel);
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
        const data: {
            label: string;
            onInput?: (event: InputEvent) => void;
        } = {
            label: fieldLabel,
            ...cell.data,
        };

        if (this.autoSkip && cell.isEditable && cell.data?.maxLength) {
            data.onInput = (event: InputEvent) => {
                this.#setAutoSkip(id, event);
            };
        }

        return data;
    }

    #RADAdapter(
        options: GenericObject,
        _fieldLabel: string,
        currentValue: string
    ) {
        return RADAdapter(currentValue, options);
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
        currentValue: string
    ) {
        return {
            data: {
                'kup-text-field': {
                    label: fieldLabel,
                },
            },
            initialValue: currentValue ?? '',
        };
    }

    #ObjectAdapter(
        _options: GenericObject,
        fieldLabel: string,
        currentValue: string
    ) {
        return {
            initialValue: currentValue || '',
            label: fieldLabel || ' ',
            value: currentValue || '',
        };
    }

    #TimeAdapter(
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
        id: string,
        layout: KupInputPanelLayout
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
                    columns: data.columns.map((col) => {
                        if (data.rows.length > 0) {
                            const cellObj = data.rows[0].cells[col.name]?.obj;
                            if (!col.obj && cellObj) {
                                return {
                                    ...col,
                                    obj: { t: cellObj.t, p: cellObj.p },
                                };
                            }
                            return col;
                        }
                        return col;
                    }),
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
                                            column,
                                            layout
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
                value: value ? cells[value].value : cells[id].value,
                selected: currentValue === cells[id].value,
            };
        });
    }

    #commandAdapter(cell: KupDataCell): KupDataCell {
        if (
            cell.data &&
            !cell.data.keyShortcut &&
            this.#kupManager.objects.isJ1Key(cell.obj ? cell.obj : {})
        ) {
            cell.data.keyShortcut = InputPanelKeyCommands[cell.obj.k];
        }

        const buttonCell = {
            ...cell,
            data: this.#BTNAdapter(null, null, cell.value, cell, cell.obj.k),
            id: cell.obj.k,
        };
        return buttonCell;
    }

    #getAutocompleteEventCallback(
        detail: KupAutocompleteEventPayload | KupComboboxIconClickEventPayload,
        cell: KupInputPanelCell
    ) {
        this.optionsHandler(
            cell.fun,
            detail.inputValue,
            this.#reverseMapCells(),
            detail.id
        ).then((options) => {
            const visibleColumns: string[] =
                options?.columns
                    ?.filter((col) => col?.visible || !('visible' in col))
                    .map((col) => col.name) || [];

            const filteredRows: KupDataRow[] = options?.rows?.map((row) => {
                const { cells } = row;
                const filteredCells = visibleColumns.reduce(
                    (acc, columnName) => {
                        if (row.cells.hasOwnProperty(columnName)) {
                            acc[columnName] = cells[columnName];
                        }
                        return acc;
                    },
                    {}
                );

                return {
                    ...row,
                    cells: filteredCells,
                };
            });

            const visibleColumnsOptions = { ...options, rows: filteredRows };

            const kupListData =
                cell.shape === FCellShapes.MULTI_AUTOCOMPLETE
                    ? cell.slotData.data['kup-list']
                    : cell.data?.data?.['kup-list'];
            if (kupListData) {
                kupListData.data = filteredRows?.length
                    ? (this.#optionsTreeComboAdapter(
                          visibleColumnsOptions,
                          cell.value
                      ) ?? [])
                    : [];
                kupListData.options = options.columns ?? [];
            } else {
                this.#kupManager.debug.logMessage(
                    this,
                    'getAutocompleteEventCallback() - "kup-list" not found in cell.data.data',
                    KupDebugCategory.WARNING
                );
            }
            detail.comp.refresh();
        });
    }

    async #manageInputPanelCheck(
        e: CustomEvent<FCellEventPayload>,
        eventType: CheckTriggeringEvents
    ) {
        const {
            detail: { column, cell },
        } = e;

        if (CheckConditionsByEventType[eventType](cell?.shape)) {
            return;
        }

        const currCell = this.#getCell(column.name);
        const originalCell = this.#originalData.rows[0].cells[column.name];

        if (!currCell) {
            // that means INP received a blur event was emitted, probably, by a TBL shape's cell applied to an INP cell
            return;
        }

        // Required cell check
        if ((cell as KupInputPanelCell).mandatory) {
            this.#setCellError(
                column.name,
                currCell.value
                    ? originalCell.data?.error || null
                    : this.#kupManager.language.translate(
                          KupLanguageGeneric.REQUIRED_VALUE
                      )
            );

            if (!cell.value) {
                return;
            }
        } else {
            this.#setCellError(column.name, originalCell.data?.error || null);
        }

        // Valid object check
        if (cell.inputSettings?.checkObject) {
            const { valid } = await this.checkValidObjCallback({
                obj: cell.obj,
                currentState: this.#reverseMapCells(),
                fun: (cell as KupInputPanelCell).fun,
            });

            if (valid) {
                this.#setCellError(
                    column.name,
                    originalCell.data?.error || null
                );
            } else {
                this.#setCellError(
                    column.name,
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
                column.name
            );
        }
    }

    #onCellUpdate({
        detail: { cell, column },
    }: CustomEvent<FCellEventPayload>) {
        if (
            cell.shape !== FCellShapes.CHECKBOX &&
            cell.shape !== FCellShapes.SWITCH
        ) {
            return;
        }

        if (this.updateOnClick) {
            this.submitCb({
                value: {
                    before: { ...this.#originalData },
                    after: this.#reverseMapCells(),
                },
                cell: column.name,
            });
        } else if (cell.inputSettings?.checkValueOnExit) {
            this.checkValidValueCallback(
                {
                    before: { ...this.#originalData },
                    after: this.#reverseMapCells(),
                },
                column.name
            );
        }
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

    #findTraversedFCell(e: MouseEvent): HTMLElement | null {
        const path = this.#kupManager.getEventPath(e.target, this.rootElement);
        const fcell = path.find((p) => p.classList?.contains('f-cell'));
        return fcell;
    }

    #getEventDetails(
        originalEvent: PointerEvent
    ): KupInputPanelEventHandlerDetails {
        const fcell = this.#findTraversedFCell(originalEvent);

        if (fcell == null) {
            return;
        }

        const currState = this.#reverseMapCells();

        const props = fcell['kup-get-cell-props']();
        const columnName = props.column.name;

        const anchor = fcell;
        const cell = currState.rows[0].cells[columnName];
        const column = currState.columns.find((c) => c.name == columnName);
        const row = currState.rows[0];

        return {
            anchor,
            cell,
            column,
            row,
            originalEvent,
        };
    }

    #didLoadInteractables() {
        // this could seems like a duplication because this.#kupManager.interact.on already does it but removing this causes an error on righ-clicking a TBL cell with tooltip when set as shape of an input panel cell
        this.#kupManager.interact.managedElements.add(this.#formRef);

        const tapCb = (e: PointerEvent) => {
            if (e.button == 2) {
                const details = this.#getEventDetails(e);

                if (details) {
                    this.kupDataTableContextMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details,
                    });
                }
            }
        };

        this.#kupManager.interact.on(
            this.#formRef,
            KupPointerEventTypes.TAP,
            tapCb
        );
    }

    #setFocusOnInputElement() {
        if (!this.#formRef) return;

        const MS_TO_FOCUS = 300;

        // set focus on first input error
        const fCellContents = Array.from(
            this.#formRef.querySelectorAll<HTMLElement>('.f-cell__content')
        );
        for (const fCellContent of fCellContents) {
            const inputError = this.#findFirstInput(fCellContent, true);
            if (inputError) {
                setTimeout(() => inputError.focus(), MS_TO_FOCUS);
                return;
            }
        }

        // set focus on first input of the first cellContent
        if (!this.autoFocus || fCellContents.length === 0) return;
        const input = this.#findFirstInput(fCellContents[0]);
        if (input) {
            setTimeout(() => input.focus(), MS_TO_FOCUS);
        }
    }

    #findFirstInput(
        element: HTMLElement,
        withError: boolean = false
    ): HTMLInputElement {
        if (!element || !(element instanceof HTMLElement)) return;

        const INPUT_SELECTOR = '.mdc-text-field__input';
        const ERROR_SELECTOR = '.mdc-text-field--error';
        const selector = withError
            ? `${ERROR_SELECTOR} ${INPUT_SELECTOR}`
            : INPUT_SELECTOR;

        const input = element.querySelector<HTMLInputElement>(selector);
        if (input) return input;

        // find inner shadow inputs
        const shadowRootElements = Array.from(
            element.querySelectorAll<HTMLElement>('*')
        ).filter((innerElemnent) => innerElemnent.shadowRoot);
        for (const element of shadowRootElements) {
            const shadowInput =
                element.shadowRoot.querySelector<HTMLInputElement>(selector);
            if (shadowInput) return shadowInput;
        }
    }

    #setAutoSkip(inputId: string, event: InputEvent): void {
        const currentHTMLInputElement = event?.target;
        if (
            !currentHTMLInputElement ||
            !(currentHTMLInputElement instanceof HTMLInputElement)
        ) {
            return;
        }

        const { maxLength, value } = currentHTMLInputElement;
        if (!maxLength || maxLength < 0 || value?.length < maxLength) {
            return;
        }

        const inputElements = Array.from(
            this.#formRef?.querySelectorAll<HTMLElement>('.f-text-field')
        ).reduce<{ id: string; HTMLInputElement: HTMLInputElement }[]>(
            (result, divElement) => {
                const inputElement = divElement.querySelector('input');
                if (!inputElement) {
                    return result;
                }

                result.push({
                    id: divElement?.id || '',
                    HTMLInputElement: inputElement,
                });
                return result;
            },
            []
        );
        if (!inputElements.length) {
            return;
        }

        const currentInputElementIndex = inputElements.findIndex(
            (element) => element.id === inputId
        );
        if (
            currentInputElementIndex < 0 ||
            currentInputElementIndex === inputElements.length - 1
        ) {
            return;
        }

        inputElements[currentInputElementIndex + 1].HTMLInputElement?.focus();
    }

    //#endregion

    //#region LIFECYCLE HOOKS
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    connectedCallback() {
        this.#readyPromise = new Promise((resolve) => {
            this.#readyResolve = resolve;
        });
    }

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
        this.onDataChanged();
    }

    componentDidLoad() {
        this.#didLoadInteractables();
        this.kupReady.emit({ comp: this, id: this.rootElement.id });

        this.#setFocusOnInputElement();
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        if (this.#formRef) {
            const fs: NodeListOf<HTMLElement> =
                this.#formRef.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }

        requestAnimationFrame(async () => {
            if (this.#formRef && this.#readyResolve) {
                this.#readyResolve();
                this.#readyResolve = null;
            }
        });
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
            <Host
                onKup-cell-blur={(e) =>
                    this.#manageInputPanelCheck(e, CheckTriggeringEvents.BLUR)
                }
                onKup-cell-update={this.#onCellUpdate.bind(this)}
                onKup-tabbar-click={(e: CustomEvent<KupTabBarEventPayload>) => {
                    this.tabSelected = e.detail.node.id;
                }}
                onKup-autocomplete-input={this.#getOptionHandler.bind(this)}
                onKup-autocomplete-iconclick={this.#getOptionHandler.bind(this)}
                onKup-combobox-iconclick={(e) =>
                    this.#getOptionHandler(e, true)
                }
                onKup-cell-itemclick={(e) =>
                    this.#manageInputPanelCheck(
                        e,
                        CheckTriggeringEvents.ITEMCLICK
                    )
                }
                onKup-objectfield-searchpayload={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupInputPanelObjectFieldSearchPayload.emit(e.detail);
                }}
                onKup-objectfield-opensearchmenu={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupInputPanelObjectFieldOpenSearchMenu.emit(e.detail);
                }}
                onKup-objectfield-selectedmenuitem={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupInputPanelObjectFieldSelectedMenuItem.emit(
                        e.detail
                    );
                }}
            >
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

        this.#keysShortcut.forEach((keyEvent) => {
            this.#kupManager.keysBinding.unregister(keyEvent);
        });
    }
    //#endregion
}

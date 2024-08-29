import {
    DropDownAction,
    KupCommand,
    KupDataCell,
    KupDataColumn,
    KupDataDataset,
    KupDataDatasetSort,
    KupDataFindCellFilters,
    KupDataNewColumn,
    KupDataNewColumnOptions,
    KupDataNewColumnTypes,
    KupDataNode,
    KupDataNodeDrilldownInfo,
    KupDataRow,
    KupDataRowAction,
    KupDataRowCells,
} from './kup-data-declarations';
import { findCell, getCellValue, replaceCell } from './kup-data-cell-helper';
import { findColumns, hideColumns, newColumn } from './kup-data-column-helper';
import { findRow, toNode } from './kup-data-row-helper';
import {
    getDrilldownInfoNode,
    getNodeByPath,
    getParentNode,
    removeNode,
    setPropertiesNode,
    toStreamNode,
} from './kup-data-node-helper';
import {
    fieldColumn,
    KupDataTableCell,
    KupDataTableRow,
    KupDataTableRowCells,
    VoCodVerRowEnum,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    FCellShapes,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { TreeNodePath } from '../../components/kup-tree/kup-tree-declarations';
import { ValueDisplayedValue } from '../../utils/filters/filters-declarations';
import { FImageProps } from '../../f-components/f-image/f-image-declarations';
import { KupThemeColorValues } from '../kup-theme/kup-theme-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles data operations.
 * @module KupData
 */
export class KupData {
    cell = {
        find(
            dataset: KupDataDataset,
            filters: KupDataFindCellFilters
        ): KupDataCell[] {
            return findCell(dataset, filters);
        },
        getValue(
            dataset: KupDataDataset,
            column: KupDataColumn,
            sorted?: boolean
        ): ValueDisplayedValue[] {
            return getCellValue(dataset, column, sorted, false);
        },
        getUnivocalValue(
            dataset: KupDataDataset,
            column: KupDataColumn,
            sorted?: boolean
        ): ValueDisplayedValue[] {
            return getCellValue(dataset, column, sorted, true);
        },
        replace(
            dataset: KupDataDataset,
            cell: KupDataCell,
            columns?: string[]
        ): KupDataCell[] {
            return replaceCell(dataset, cell, columns);
        },
        getType(cell: KupDataCell, shape?: FCellShapes): FCellTypes {
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
                    case FCellShapes.DATE:
                        return FCellTypes.DATE;
                    case FCellShapes.EDITOR:
                        return FCellTypes.EDITOR;
                    case FCellShapes.GAUGE:
                        return FCellTypes.GAUGE;
                    case FCellShapes.IMAGE:
                        return FCellTypes.IMAGE;
                    case FCellShapes.INPUT_CHECKBOX:
                        return FCellTypes.CHECKBOX;
                    case FCellShapes.KNOB:
                        return FCellTypes.KNOB;
                    case FCellShapes.MULTI_AUTOCOMPLETE:
                        return FCellTypes.MULTI_AUTOCOMPLETE;
                    case FCellShapes.MULTI_COMBOBOX:
                        return FCellTypes.MULTI_COMBOBOX;
                    case FCellShapes.PROGRESS_BAR:
                        return FCellTypes.PROGRESS_BAR;
                    case FCellShapes.RADIO:
                        return FCellTypes.RADIO;
                    case FCellShapes.RATING:
                        return FCellTypes.RATING;
                    case FCellShapes.SWITCH:
                        return FCellTypes.SWITCH;
                    case FCellShapes.TABLE:
                        return FCellTypes.TABLE;
                    case FCellShapes.TEXT_FIELD:
                        return FCellTypes.STRING;
                    case FCellShapes.TIME:
                        return FCellTypes.TIME;
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
            } else if (dom.ketchup.objects.isSwitch(obj)) {
                return FCellTypes.SWITCH;
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
        },
        /**
         * Given some cells, it creates an object with name of column
         * and value
         * @param {KupDataTableRowCells} cells  group of cells .
         * @returns { { name: string; value: KupDataTableCell }[]} object with name of the column and cell.
         */
        formatCells(
            cells: KupDataTableRowCells
        ): { name: string; value: KupDataTableCell }[] {
            return Object.entries(cells).map(([key, value]) => ({
                name: key,
                value: value,
            }));
        },
        /**
         * Get COD_VER cells
         * @param {KupDataTableRow} row single row.
         * @returns { { name: string; value: KupDataTableCell }[]} cells founded
         */
        getCodVer: (
            row: KupDataTableRow
        ): { name: string; value: KupDataTableCell }[] => {
            const formattedCells = this.cell.formatCells(row.cells);

            return formattedCells.filter(
                (cell) =>
                    cell.value.obj.p === VoCodVerRowEnum.P &&
                    cell.value.obj.t === VoCodVerRowEnum.T
            );
        },
    };
    column = {
        find(
            dataset: KupDataDataset | KupDataColumn[],
            filters: Partial<KupDataColumn>
        ): KupDataColumn[] {
            return findColumns(dataset, filters);
        },
        hide(
            dataset: KupDataDataset | KupDataColumn[],
            columns2hide: string[]
        ): KupDataColumn[] {
            return hideColumns(dataset, columns2hide);
        },
        new(
            dataset: KupDataDataset,
            type: KupDataNewColumnTypes,
            options: KupDataNewColumnOptions
        ): string | KupDataColumn {
            return newColumn(dataset, type, options);
        },
        /**
         * Check if column is COD_VER
         * @param {KupDataColumn } column single column.
         * @returns { boolean } if COD_VER founded or not.
         */
        isCodVer(column: KupDataColumn): boolean {
            if (column && column.obj) {
                const hasCodVerCol =
                    column.obj.p === VoCodVerRowEnum.P &&
                    column.obj.t === VoCodVerRowEnum.T;
                return hasCodVerCol;
            }
            return false;
        },
        /**
         *  Check if almost one column has COD_VER
         * @param { KupDataColumn[] } columns single column.
         * @returns { boolean } if COD_VER founded or not.
         */
        hasCodVer: (columns: KupDataColumn[]) => {
            return columns.some((col) => this.column.isCodVer(col));
        },
    };
    node = {
        getDrilldownInfo(nodes: KupDataNode[]): KupDataNodeDrilldownInfo {
            return getDrilldownInfoNode(nodes);
        },
        getParent(nodes: KupDataNode[], child: KupDataNode): KupDataNode {
            return getParentNode(nodes, child);
        },
        find(nodes: KupDataNode[], treeNodePath: TreeNodePath): KupDataNode {
            return getNodeByPath(nodes, treeNodePath);
        },
        findByStrTreeNodePath(
            nodes: KupDataNode[],
            treeNodePath: string
        ): KupDataNode {
            const split = treeNodePath.split(',');
            const path: TreeNodePath = [];
            for (let i = 0; i < split.length; i++) {
                path.push(Number(split[i]));
            }
            return getNodeByPath(nodes, path);
        },
        remove(nodes: KupDataNode[], node2remove: KupDataNode): KupDataNode {
            return removeNode(nodes, node2remove);
        },
        setProperties(
            nodes: KupDataNode[],
            properties: Partial<KupDataNode>,
            recursively?: boolean,
            exclude?: KupDataNode[]
        ): KupDataNode[] {
            return setPropertiesNode(nodes, properties, recursively, exclude);
        },
        toStream(nodes: KupDataNode[]): KupDataNode[] {
            return toStreamNode(nodes);
        },
    };
    row = {
        find(
            dataset: KupDataDataset,
            filters: KupDataFindCellFilters
        ): KupDataRow[] {
            return findRow(dataset, filters);
        },
        toNode(dataset: KupDataDataset): KupDataNode[] {
            return toNode(dataset);
        },
        /**
         * Adapts row actions to corresponding type
         * @param { KupDataRowAction[] } rowActions that must be adapted
         * @returns { KupDataRowAction[] } formatted row actions array
         */
        rowActionsAdapter(rowActions: KupDataRowAction[]): KupDataRowAction[] {
            return rowActions.map((rowAction, index) => ({
                ...rowAction,
                type: DropDownAction.ROWACTION,
                index: index,
            }));
        },
        /**
         * Build actions that must be showed in data table
         * @param { KupDataRow } row current row
         * @param { KupDataColumn[] } columns columns of datatable
         * @param { KupDataRowAction[] } actions actions in component prop
         * @param { KupCommand[] } commands commands in component prop
         * @returns { KupDataRowAction[] } action that must be show on row
         */
        buildRowActions: (
            row: KupDataRow,
            columns: KupDataColumn[],
            actions: KupDataRowAction[],
            commands: KupCommand[]
        ): KupDataRowAction[] => {
            const codVerActions = this.action.createActionsFromVoCodRow(
                row,
                columns,
                commands ?? []
            );

            const rowActionsWithCodVer = actions !== undefined 
                ? [...this.row.rowActionsAdapter(actions), ...codVerActions]
                : [...codVerActions];

            return rowActionsWithCodVer;
        },
    };
    action = {
        /**
         * Build image to show as action in row
         * @param { resource } icon that must be shown
         * @param { title } title of the ation
         * @param { wrapperClass }  type of wrapper class
         * @param { onClick } event that must be fired
         * @returns { FImageProps } single action
         */
        buildImageProp: (
            resource: string,
            title: string,
            wrapperClass: 'action' | 'expander',
            onClick: (e?: MouseEvent) => void
        ): FImageProps => {
            return {
                color: `var(${KupThemeColorValues.PRIMARY})`,
                sizeX: '1.5em',
                sizeY: '1.5em',
                resource,
                title,
                wrapperClass,
                onClick,
            } as FImageProps;
        },
        /**
         * Check if given actions have only icons without text
         * @param { actions } actions on which control is made
         * @returns { boolean } result of check
         */
        checkEveryActionHasOnlyIcon: (actions: KupDataRowAction[]): boolean => {
            return actions.every((action) => action.icon && !action.text);
        },
        /**
         * Creates actions from row with VO COD_VER obj.
         * @param {KupDataTableRow} row single row.
         * @param {KupCommand[]} commands group of commands.
         * @returns { KupDataRowAction[]} Actions founded.
         */
        createActionsFromVoCodRow: (
            row: KupDataTableRow,
            columns: KupDataColumn[],
            commands: KupCommand[]
        ): KupDataRowAction[] => {
            const actions: KupDataRowAction[] = [];

            const cellsCodVer = this.cell.getCodVer(row);

            cellsCodVer.forEach((codVer) => {
                let hasCommands = false;

                const currentColumn = this.column
                    .find(columns, {
                        name: codVer.name,
                    })
                    .pop();

                if (commands) {
                    const commandsFiltered = commands.filter(
                        (command) => command.obj.k === codVer.value.obj.k
                    );
                    hasCommands = commandsFiltered.length > 0;
                    commandsFiltered.forEach((commandFilter) => {
                        const index = commands.findIndex(
                            (command) =>
                                command.icon === commandFilter.icon &&
                                command.text === commandFilter.text &&
                                command.obj.k === commandFilter.obj.k
                        );
                        actions.push({
                            icon: commandFilter.icon,
                            text: commandFilter.text,
                            obj: commandFilter.obj,
                            cell: codVer.value,
                            index: index,
                            type: DropDownAction.CODVERWITHCOMMANDS,
                            column: currentColumn,
                        });
                    });
                }

                if (!hasCommands) {
                    actions.push({
                        icon:
                            codVer.value.icon ||
                            codVer.value.data?.resource ||
                            codVer.value.data?.icon ||
                            '',
                        text: codVer.value.value || currentColumn.name,
                        obj: codVer.value.obj,
                        cell: codVer.value,
                        type: DropDownAction.CODVER,
                        column: currentColumn,
                    });
                }
            });

            return actions;
        },
    };
    /**
     * Utility used by findRow and findCell.
     * @param {KupDataDataset} dataset - Input dataset.
     * @param {KupDataFindCellFilters} filters - Filters of the research.
     * @returns {{cells: KupDataCell[], rows: KupDataRow[]}}  Object containing rows and cells.
     */
    finder(
        dataset: KupDataDataset,
        filters: KupDataFindCellFilters
    ): { cells: KupDataCell[]; rows: KupDataRow[] } {
        const columns = filters ? filters.columns : null;
        const range = filters ? filters.range : null;
        const value = filters ? filters.value : null;
        const min = range && range.min ? range.min : null;
        const max = range && range.max ? range.max : null;
        const result: { cells: KupDataCell[]; rows: KupDataRow[] } = {
            cells: [],
            rows: [],
        };
        for (let index = 0; index < dataset.rows.length; index++) {
            const row = dataset.rows[index];
            const cells = row.cells;
            for (const key in cells) {
                const cell = cells[key];
                if (!columns || !columns.length || columns.includes(key)) {
                    if (min && max) {
                        let d: Date = null,
                            s = '',
                            n = 0;
                        if (dom.ketchup.objects.isDate(cell.obj)) {
                            d = dom.ketchup.dates.toDate(cell.value);
                            const dMax = dom.ketchup.dates.toDate(
                                max instanceof String ? max.valueOf() : max
                            );
                            const dMin = dom.ketchup.dates.toDate(
                                min instanceof String ? min.valueOf() : min
                            );
                            if (
                                d === dMax ||
                                d === dMin ||
                                (d < dMax && d > dMin)
                            ) {
                                result.cells.push(cell);
                                result.rows.push(row);
                            }
                        } else if (
                            typeof min === 'string' ||
                            min instanceof String
                        ) {
                            s = cell.value;
                            if (
                                s === max ||
                                s === min ||
                                (s < max && s > min)
                            ) {
                                result.cells.push(cell);
                                result.rows.push(row);
                            }
                        } else {
                            n = dom.ketchup.math.numberify(cell.value);
                            const nMax = dom.ketchup.math.numberify(max);
                            const nMin = dom.ketchup.math.numberify(min);
                            if (
                                n === max ||
                                n === min ||
                                (n < nMax && n > nMin)
                            ) {
                                result.cells.push(cell);
                                result.rows.push(row);
                            }
                        }
                    } else if (
                        value &&
                        cell.value &&
                        value.trim() === cell.value.trim()
                    ) {
                        result.cells.push(cell);
                        result.rows.push(row);
                    }
                }
            }
        }
        return result;
    }
    /**
     * Creates a new dataset with an amount of cells equal to a distinct calculation applied to the given columns.
     * The original value of cells will be stored in the title property of the new cells.
     * @param {KupDataDataset} dataset - Input dataset.
     * @param {string[]} columns - Column names to manage. When missing, defaults to all columns.
     * @param {KupDataColumn} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
     * @returns {KupDataDataset} New dataset with processed data.
     */
    distinct(
        dataset: KupDataDataset,
        columns?: string[],
        valuesColumn?: KupDataColumn
    ): KupDataDataset {
        const occurrencies: {
            [index: string]: { [index: string]: number };
        } = {};
        const rows = dataset.rows;
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            const cells = row.cells;
            for (const key in cells) {
                const cell = cells[key];
                if (
                    !columns ||
                    !columns.length ||
                    (columns && columns.includes(key))
                ) {
                    if (!occurrencies[key]) {
                        occurrencies[key] = {};
                    }
                    const occurrency = occurrencies[key];
                    occurrency[cell.value] = occurrency[cell.value]
                        ? occurrency[cell.value] + 1
                        : 1;
                }
            }
        }
        const newColumns: KupDataColumn[] = [];
        const newRows: KupDataRow[] = [];
        if (valuesColumn) {
            newColumns.push(valuesColumn);
        }
        for (const key in occurrencies) {
            const occurrency = occurrencies[key];
            const column = {
                ...dataset.columns.find(
                    (col: KupDataColumn) => col.name === key
                ),
            };
            column.obj = {
                t: 'NR',
                p: '',
                k: '',
            };
            let rowIndex = 0;
            newColumns.push(column);
            for (const j in occurrency) {
                const value = occurrency[j];
                let row: KupDataRow = null;
                if (!newRows[rowIndex]) {
                    newRows[rowIndex] = { cells: {} };
                }
                row = newRows[rowIndex];
                row.cells[key] = {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: value.toString(),
                    },
                    title: j,
                    value: value.toString(),
                };
                if (valuesColumn) {
                    row.cells[valuesColumn.name] = {
                        value: j,
                    };
                }
                rowIndex++;
            }
        }
        return {
            columns: newColumns,
            rows: newRows,
        };
    }
    /**
     * Creates a new dataset from the input one.
     * The new columns are to be specified in the columns argument along with their creation criteria.
     * @param {KupDataDataset} dataset - Input dataset.
     * @param {KupDataNewColumn[]} newColumns - Array containing the specifics of the new columns to be created.
     * @returns {KupDataDataset} Resulting dataset.
     */
    new(
        dataset: KupDataDataset,
        newColumns: KupDataNewColumn[]
    ): KupDataDataset {
        const outputColumns: KupDataColumn[] = [];
        const outputRows: KupDataRow[] = [];
        for (let index = 0; index < newColumns.length; index++) {
            const newColumn = newColumns[index].column;
            const criteria = newColumns[index].criteria;
            const cells = findCell(dataset, criteria);
            let rowIndex = 0;
            for (let index = 0; index < cells.length; index++) {
                const cell = cells[index];
                let outputRow: KupDataRow = null;
                if (!outputRows[rowIndex]) {
                    outputRows[rowIndex] = { cells: {} };
                }
                outputRow = outputRows[rowIndex];
                outputRow.cells[newColumn.name] = JSON.parse(
                    JSON.stringify(cell)
                );
                rowIndex++;
            }
            outputColumns.push(newColumn);
        }
        return {
            columns: outputColumns,
            rows: outputRows,
        };
    }
    /**
     * Performs a distinct/count after previously grouping columns by ranges.
     * @param {KupDataDataset} dataset - Input dataset.
     * @param {KupDataNewColumn[]} rangeColumns - A list of columns coupled with their criteria for creation. These are used to define ranges.
     * @param {KupDataColumn} resultingColumn - The resulting column.
     * @param {KupDataColumn} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
     * @returns {KupDataDataset} New dataset with processed data.
     */
    rangedDistinct(
        dataset: KupDataDataset,
        rangeColumns: KupDataNewColumn[],
        resultingColumn: KupDataColumn,
        valuesColumn?: KupDataColumn
    ): KupDataDataset {
        const newD = this.new(dataset, rangeColumns);
        const columnNames: string[] = [];
        for (let index = 0; index < rangeColumns.length; index++) {
            const newColumn = rangeColumns[index].column;
            columnNames.push(newColumn.name);
            replaceCell(newD, { value: newColumn.title }, [newColumn.name]);
        }
        newColumn(newD, KupDataNewColumnTypes.MERGE, {
            columns: columnNames,
            newColumn: resultingColumn,
        });
        return this.distinct(newD, null, valuesColumn);
    }
    /**
     * Creates a new dataset with sorted elements.
     * @param {KupDataDataset} dataset Input dataset.
     * @param {KupDataDatasetSort} sortType Type of sort to apply.
     * @param {string} headerColumn The column used for sorting.
     * @returns {KupDataDataset} Sorted dataset.
     */
    sort(
        dataset: KupDataDataset,
        sortType: KupDataDatasetSort,
        headerColumn: string
    ): KupDataDataset {
        if (sortType != 'normalDistribution') {
            const message = 'Wrong sort type! (' + sortType + ')';
            dom.ketchup.debug.logMessage(
                'kup-data',
                message,
                KupDebugCategory.WARNING
            );
            return dataset;
        }
        const output: KupDataDataset = {
            columns: JSON.parse(JSON.stringify(dataset.columns)),
            rows: [],
        };

        // sort all columns values by descending
        let values = getCellValue(
            dataset,
            this.column.find(dataset, { name: headerColumn })[0],
            true,
            true
        );
        values.reverse();

        const length = dataset.rows.length;

        // calculating middle index
        const idx = Math.floor(length / 2);
        let lastIdx = idx - 1;
        let leftIdx = idx - 1;
        let rightIdx = idx + 1;

        // sort the rows like a "mountain", the greatest is in the middle and the other ones are splitted left and right
        for (let i = 0; i < values.length; i++) {
            const value = values[i].value;
            // looping the rows because we have many rows with same value.
            this.finder(dataset, {
                columns: [headerColumn],
                value: value,
            }).rows.forEach((row) => {
                const xC = output.rows[idx];
                if (xC == null) {
                    output.rows[idx] = JSON.parse(JSON.stringify(row));
                } else {
                    output.rows[lastIdx] = JSON.parse(JSON.stringify(row));

                    if (lastIdx > idx) {
                        // right from the middle index.
                        lastIdx = leftIdx;
                        rightIdx++;
                    } else {
                        // left from the middle index.
                        lastIdx = rightIdx;
                        leftIdx--;
                    }
                }
            });
        }
        return output;
    }
    /**
     * Creates a new dataset with transposed columns and rows.
     * @param {KupDataDataset} dataset - Input dataset.
     * @param {string} headerColumn - When specified, it will be the column used as header. When missing, the header will be a series of progressive numbers.
     * @returns {KupDataDataset} Transposed dataset.
     */
    transpose(dataset: KupDataDataset, headerColumn?: string): KupDataDataset {
        const transposed: KupDataDataset = { columns: [], rows: [] };
        let firstColumn: KupDataColumn = null;
        if (headerColumn) {
            firstColumn = findColumns(dataset, { name: headerColumn })[0];
            transposed.columns.push(firstColumn);
            for (let index = 0; index < dataset.rows.length; index++) {
                const row = dataset.rows[index];
                const cell = row.cells[firstColumn.name];
                const title = cell.displayedValue
                    ? cell.displayedValue
                    : cell.value;
                transposed.columns.push({
                    name: cell.value + '_' + row.id,
                    title,
                });
            }
        } else {
            firstColumn = {
                name: fieldColumn.toUpperCase(),
                title: fieldColumn,
            };
            transposed.columns.push(firstColumn);
            for (let index = 0; index < dataset.rows.length; index++) {
                const row = dataset.rows[index];
                transposed.columns.push({
                    name: row.id,
                    title: '#' + index,
                });
            }
        }
        for (
            let index = headerColumn ? 1 : 0;
            index < dataset.columns.length;
            index++
        ) {
            const oldColumn = dataset.columns[index];
            const cells: KupDataRowCells = {};
            cells[firstColumn.name] = {
                value: oldColumn.title,
            };

            for (let index = 1; index < transposed.columns.length; index++) {
                const newColumn = transposed.columns[index];
                const oldRow = dataset.rows[index - 1];
                const cellName = headerColumn ? newColumn.name : oldRow.id;
                cells[cellName] = oldRow.cells[oldColumn.name];
                if (oldColumn.icon && !cells[cellName].icon) {
                    cells[cellName].icon = oldColumn.icon;
                }
                if (
                    oldColumn.placeholderIcon &&
                    !cells[cellName].placeholderIcon
                ) {
                    cells[cellName].placeholderIcon = oldColumn.placeholderIcon;
                }
                if (oldColumn.shape && !cells[cellName].shape) {
                    cells[cellName].shape = oldColumn.shape;
                }
            }
            // If a record is key and no column argument is provided, it will be placed on top
            if (!headerColumn && oldColumn.isKey) {
                transposed.rows.unshift({
                    id: String(index),
                    cells,
                    transposedColumnName: oldColumn.name,
                });
            } else {
                transposed.rows.push({
                    id: String(index),
                    cells,
                    transposedColumnName: oldColumn.name,
                });
            }
        }
        return transposed;
    }
}

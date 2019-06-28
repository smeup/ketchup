import {
    Component,
    Event,
    Prop,
    State,
    Watch,
    EventEmitter,
} from '@stencil/core';

import {
    Column,
    Row,
    SortObject,
    SortMode,
} from '../kup-data-table/kup-data-table-declarations';

import {
    Layout,
    Section,
    CollapsedSectionsState,
} from './kup-box-declarations';

import { isImage, isButton } from '../../utils/object-utils';

import { filterRows, sortRows } from '../kup-data-table/kup-data-table-helper';

import { KetchupComboEvent } from '../kup-combo/kup-combo-declarations';

@Component({
    tag: 'kup-box',
    styleUrl: 'kup-box.scss',
    shadow: true,
})
export class KupBox {
    /**
     * Data
     */
    @Prop() data: { columns?: Column[]; rows?: Row[] };

    /**
     * How the field will be displayed. If not present, a default one will be created.
     */
    @Prop() layout: Layout;

    /**
     * Number of columns
     */
    @Prop() columns = 1;

    /**
     * Enable sorting
     */
    @Prop()
    sortEnabled = false;

    /**
     * If sorting is enabled, specifies which column to sort
     */
    @Prop({ mutable: true })
    sortBy: string;

    /**
     * Enable filtering
     */
    @Prop()
    filterEnabled = false;

    /**
     * Enable multi selection
     */
    @Prop()
    multiSelection = false;

    @State()
    private globalFilterValue = '';

    @State()
    private collapsedSection: CollapsedSectionsState = {};

    /**
     * Lauched when a box is clicked
     */
    @Event({
        eventName: 'kupBoxClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxClicked: EventEmitter<{
        row: Row;
        column?: string;
    }>;

    /**
     * Lauched when the multi selection checkbox changes value
     */
    @Event({
        eventName: 'kupBoxSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxSelected: EventEmitter<{
        rows: Row[];
    }>;

    private boxLayout: Layout;

    private visibleColumns: Column[] = [];

    private rows: Row[] = [];

    private selectedRows: Row[] = [];

    private lastColumnIndex = 0;

    @Watch('globalFilterValue')
    @Watch('sortBy')
    recalculateRows() {
        this.initRows();
    }

    @Watch('data')
    onDataChanged() {
        this.initVisibleColumns();
        this.initRows();
        this.checkLayout();
    }

    // lifecycle hooks
    componentWillLoad() {
        this.onDataChanged();
    }

    // private methods
    private getColumns(): Array<Column> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: 0 }];
    }

    private initVisibleColumns(): void {
        this.visibleColumns = this.getColumns().filter((column) => {
            if (column.hasOwnProperty('visible')) {
                return column.visible;
            }

            return true;
        });
    }

    private getRows(): Row[] {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private initRows(): void {
        let filteredRows = this.getRows();

        if (this.filterEnabled && this.globalFilterValue) {
            const visibleCols = Object.freeze(this.visibleColumns);
            let size = visibleCols.length;
            let columnNames = [];

            let cnt = 0;

            while (size-- > 0) {
                columnNames.push(visibleCols[cnt++].name);
            }

            // filtering rows
            filteredRows = filterRows(
                filteredRows,
                null,
                this.globalFilterValue,
                columnNames
            );
        }

        this.rows = this.sortRows(filteredRows);
    }

    private sortRows(rows: Row[]): Row[] {
        let sortedRows = rows;

        if (this.sortBy) {
            // create 'fake' sortObject
            const sortObject: SortObject = {
                column: this.sortBy,
                sortMode: SortMode.A,
            };

            sortedRows = sortRows(sortedRows, [sortObject]);
        }

        return sortedRows;
    }

    private checkLayout() {
        // check if there is a layout.
        // if not, create a default layout
        if (this.layout) {
            this.boxLayout = this.layout;
            return;
        }

        // only one section, containing all visible fields
        const section: Section = {
            horizontal: false,
            sections: [],
            style: {
                textAlign: 'center',
            },
        };

        // adding box objects to section
        const visibleColumns = Object.freeze(this.visibleColumns);
        let size = visibleColumns.length;
        let content = [];

        let cnt = 0;

        while (size-- > 0) {
            content.push({
                column: visibleColumns[cnt++].name,
            });
        }

        section.content = content;

        // creating a new layout
        this.boxLayout = {
            sections: [section],
        };
    }

    private onSortChange(kupComboEvent: KetchupComboEvent) {
        this.sortBy = kupComboEvent.value.id;
        this.initRows();
    }

    private onGlobalFilterChange({ detail }) {
        this.globalFilterValue = detail.value;
    }

    private isSectionExpanded(row: Row, section: Section): boolean {
        if (!row.id || !section.id) {
            return false;
        }

        return (
            this.collapsedSection[section.id] &&
            this.collapsedSection[section.id][row.id]
        );
    }

    // event listeners
    private onBoxClick({ target }: MouseEvent, row: Row) {
        if (!(target instanceof HTMLElement)) {
            return;
        }

        // searching parent
        let element = target;
        let classList = element.classList;

        while (
            !classList.contains('box-object') &&
            !classList.contains('box-section') &&
            !classList.contains('box')
        ) {
            element = element.parentElement;

            if (element === null) {
                break;
            }

            classList = element.classList;
        }

        // evaluating column
        let column = null;
        if (classList.contains('box-object')) {
            column = element.dataset.column;
        }

        this.kupBoxClicked.emit({ row, column });
    }

    private onSelectionCheckChange(row: Row) {
        const index = this.selectedRows.indexOf(row);

        if (index >= 0) {
            // remove row
            this.selectedRows.splice(index, 1);
            this.selectedRows = [...this.selectedRows];
        } else {
            // add row
            this.selectedRows = [...this.selectedRows, row];
        }

        this.kupBoxSelected.emit({
            rows: this.selectedRows,
        });
    }

    private toggleSectionExpand(row: Row, section: Section) {
        // check if section / row has id
        if (!section.id) {
            // error
            console.error('cannot expand / collapse a section withoun an ID');
            return;
        }

        if (!row.id) {
            // error
            console.error(
                'cannot expand / collapse a section of a row without ad id'
            );
            return;
        }

        // check if section already in collapsedSection
        if (!this.collapsedSection[section.id]) {
            // adding element and row, setting it to expanded
            this.collapsedSection[section.id] = {};
            this.collapsedSection[section.id][row.id] = true;
        } else {
            const s = this.collapsedSection[section.id];

            if (!s[row.id]) {
                s[row.id] = true;
            } else {
                s[row.id] = !s[row.id];
            }
        }

        // triggering rendering
        this.collapsedSection = { ...this.collapsedSection };
    }

    // render methods
    private renderRow(row: Row, visibleColumns: Column[]) {
        // resetting lastColumnIndex
        this.lastColumnIndex = 0;

        let boxContent = null;
        if (this.boxLayout && this.boxLayout.sections) {
            const sections = Object.freeze(this.boxLayout.sections);
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                boxContent = [];
            }

            while (size-- > 0) {
                boxContent.push(
                    this.renderSection(
                        sections[cnt++],
                        null,
                        row,
                        visibleColumns
                    )
                );
            }
        }

        let multiSel = null;
        if (this.multiSelection) {
            multiSel = (
                <div class="box-selection">
                    <input
                        type="checkbox"
                        checked={this.selectedRows.includes(row)}
                        onChange={() => this.onSelectionCheckChange(row)}
                    />
                </div>
            );
        }

        return (
            <div class="box" onClick={(e) => this.onBoxClick(e, row)}>
                {multiSel}
                {boxContent}
            </div>
        );
    }

    private renderSection(
        section: Section,
        parent: Section,
        row: Row,
        visibleColumns: Column[]
    ) {
        let sectionContent = null;

        if (section.sections && section.sections.length > 0) {
            // rendering child
            const sections = Object.freeze(section.sections);
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderSection(
                        sections[cnt++],
                        section,
                        row,
                        visibleColumns
                    )
                );
            }
        } else if (section.content) {
            // rendering box objects
            const content = Object.freeze(section.content);
            let size = content.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderBoxObject(content[cnt++].column, row)
                );
            }
        } else if (this.lastColumnIndex < visibleColumns.length) {
            // getting first column
            const column = visibleColumns[this.lastColumnIndex];
            this.lastColumnIndex += 1;

            sectionContent = this.renderBoxObject(column.name, row);
        }

        const sectionExpanded = this.isSectionExpanded(row, section);

        const sectionClass: { [index: string]: boolean } = {
            'box-section': true,
            open: sectionExpanded,
            column: !section.horizontal,
        };

        const sectionStyle: any = section.style || {};
        if (section.dim && parent && parent.horizontal) {
            sectionStyle.maxWidth = section.dim;
            sectionStyle.flex = `0 0 ${section.dim}`;
        }

        let sectionContainer = null;
        if (section.collapsible) {
            sectionClass['collapse-section'] = true;

            const contentClass = {
                content: true,
            };

            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    <div class={contentClass}>{sectionContent}</div>
                    <div
                        class="header"
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.toggleSectionExpand(row, section);
                        }}
                    >
                        <div class="header-content">
                            <span>
                                {// TODO i18n
                                sectionExpanded ? 'Collassa' : 'Espandi'}
                            </span>
                            <span class="mdi mdi-chevron-down" />
                        </div>
                    </div>
                </div>
            );
        } else {
            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    {sectionContent}
                </div>
            );
        }

        return sectionContainer;
    }

    private renderBoxObject(column: string, row: Row) {
        let boContent = null;

        if (column) {
            const cell = row.cells[column];

            if (cell) {
                if (isImage(cell.obj)) {
                    let badges = null;
                    if (cell.config && cell.config.badges) {
                        badges = cell.config.badges;
                    }

                    boContent = <kup-image src={cell.value} badges={badges} />;
                } else if (isButton(cell.obj)) {
                    let label = cell.value;
                    let textMode = 'Hint';
                    let icon = null;
                    let flat = true;
                    let showtext = false;
                    let fillspace = false;

                    if (cell.config) {
                        const config = cell.config;

                        icon = config.icon;

                        if (config.hasOwnProperty('showtext')) {
                            showtext = config.showtext;
                        }

                        if (config.hasOwnProperty('fillspace')) {
                            fillspace = config.fillspace;
                        }

                        if (config.hasOwnProperty('flat')) {
                            flat = config.flat;
                        }

                        if (config.hasOwnProperty('fillspace')) {
                            fillspace = config.fillspace;
                        }
                    }

                    boContent = (
                        <kup-button
                            flat={flat}
                            iconClass={icon}
                            label={label}
                            textmode={textMode}
                            showtext={showtext}
                            fillspace={fillspace}
                        />
                    );
                } else {
                    boContent = cell.value;
                }
            }
        }

        return (
            <div data-column={column} class="box-object">
                {boContent}
            </div>
        );
    }

    render() {
        let sortPanel = null;
        if (this.sortEnabled) {
            let initialValue = { value: '', id: '' };

            // creating items
            const visibleColumnsItems = this.visibleColumns.map((column) => {
                const item = {
                    value: column.title,
                    id: column.name,
                };

                if (column.name === this.sortBy) {
                    // setting initial value
                    initialValue = item;
                }

                return item;
            });

            const items = [{ value: '', id: '' }, ...visibleColumnsItems];

            sortPanel = (
                <div id="sort-panel">
                    <kup-combo
                        displayedField="value"
                        items={items}
                        initialValue={initialValue}
                        onKetchupComboSelected={(e) =>
                            this.onSortChange(e.detail)
                        }
                    />
                </div>
            );
        }

        let filterPanel = null;
        if (this.filterEnabled) {
            filterPanel = (
                <div id="filter-panel">
                    <kup-text-input
                        placeholder="Cerca" // TODO
                        onKetchupTextInputUpdated={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    />
                </div>
            );
        }

        let boxContent = null;

        if (this.rows.length === 0) {
            boxContent = <p id="empty-data-message">Empty data</p>;
        } else {
            const rows = Object.freeze(this.rows);
            let size = rows.length;

            let cnt = 0;
            boxContent = [];

            while (size-- > 0) {
                boxContent.push(
                    this.renderRow(rows[cnt++], this.visibleColumns)
                );
            }
        }

        const containerStyle = {
            'grid-template-columns': `repeat(${this.columns}, 1fr)`,
        };

        return (
            <div>
                {sortPanel}
                {filterPanel}
                <div id="box-container" style={containerStyle}>
                    {boxContent}
                </div>
            </div>
        );
    }
}

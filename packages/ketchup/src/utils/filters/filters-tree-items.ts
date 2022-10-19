import type {
    GenericFilter,
    ValueDisplayedValue,
} from './filters-declarations';
import {
    KupTreeNode,
    treeMainColumnName,
} from '../../components/kup-tree/kup-tree-declarations';
import { FiltersColumnMenu } from './filters-column-menu';
import { FiltersRows } from './filters-rows';
import {
    KupDataColumn,
    KupDataRowCells,
} from '../../managers/kup-data/kup-data-declarations';
import { addColumnValueFromRow } from '../../managers/kup-data/kup-data-cell-helper';

/**
 * Filtering algorithms related to tree items rows.
 * @module FiltersTreeItems
 * @todo Should contain EVERY tree-item-specific filtering method.
 */
export class FiltersTreeItems extends FiltersRows {
    filterRows(
        items: KupTreeNode[] = [],
        filters: GenericFilter = {},
        globalFilter: string = '',
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): Array<KupTreeNode> {
        if (!items || items == null) {
            return [];
        }

        const isUsingGlobalFilter: boolean = !!(globalFilter && columns);

        if (
            !isUsingGlobalFilter &&
            !this.hasFilters(filters, columns, columnFilters)
        ) {
            this.setAllVisible(items);
            return items;
        }
        for (let i = 0; i < items.length; i++) {
            if (
                this.setNodeVisibility(
                    items[i],
                    filters,
                    globalFilter,
                    isUsingGlobalFilter,
                    columns,
                    columnFilters
                )
            ) {
            }
        }
        return items;
    }

    isNodeCompliant(
        node: KupTreeNode,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        let retValue = false;

        if (node.cells != null) {
            let cellsHolder: KupDataRowCells = node.cells;
            cellsHolder[treeMainColumnName] = {
                obj: node.obj,
                value: node.value,
            };
            retValue = this.areCellsCompliant(
                cellsHolder,
                filters,
                globalFilter,
                isUsingGlobalFilter,
                columns,
                columnFilters
            );
        }

        if (isUsingGlobalFilter == true) {
            retValue = this.isFilterCompliantForValue(node.value, globalFilter);
        }

        return retValue;
    }

    private setNodeVisibility(
        node: KupTreeNode,
        filters: GenericFilter = {},
        globalFilter: string,
        isUsingGlobalFilter: boolean = false,
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        if (columnFilters == null) {
            columnFilters = new FiltersColumnMenu();
        }
        let visibility: boolean = this.isNodeCompliant(
            node,
            filters,
            globalFilter,
            isUsingGlobalFilter,
            columns,
            columnFilters
        );
        if (node.disabled != true && node.expandable == true) {
            /** se il ramo è compatibile con il filtro, mostro tutto l'albero sottostante */
            if (visibility == true && isUsingGlobalFilter) {
                this.setAllVisible(node.children);
            } else {
                if (node.children) {
                    for (let i = 0; i < node.children.length; i++) {
                        if (
                            this.setNodeVisibility(
                                node.children[i],
                                filters,
                                globalFilter,
                                isUsingGlobalFilter,
                                columns,
                                columnFilters
                            )
                        ) {
                            this.expandCollapseNode(node, true);
                            visibility = true;
                        }
                    }
                }
            }
        }
        node.visible = visibility;
        return visibility;
    }

    private setAllVisible(items: KupTreeNode[]) {
        if (items) {
            items.forEach((element) => {
                element.visible = true;
                this.setAllVisible(element.children);
            });
        }
    }

    extractColumnValues(
        rows: Array<KupTreeNode>,
        column: KupDataColumn,
        values: ValueDisplayedValue[],
        univocal?: boolean
    ) {
        if (rows == null || rows.length == 0) {
            return;
        }
        /** il valore delle righe attualmente filtrate, formattato */
        rows.forEach((node): void => {
            let cellsHolder: KupDataRowCells = node.cells;
            cellsHolder[treeMainColumnName] = {
                obj: node.obj,
                value: node.value,
            };
            if (node.visible) {
                addColumnValueFromRow(
                    values,
                    column,
                    cellsHolder[column.name],
                    univocal
                );
                this.extractColumnValues(
                    node.children,
                    column,
                    values,
                    univocal
                );
            }
        });
        return values;
    }

    expandCollapseNode(treeNode: KupTreeNode, expandNode: boolean = false) {
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable) {
            // If the node does not already have the property to toggle expansion we add it
            // Notice how, if the property is already set, its first value will be the same value that was provided by the object itself
            // and only if the node must be expanded automatically then [treeExpandedPropName] is set to true forcibly.
            // This is done to allow a KupTreeNode to force its [treeExpandedPropName] to true so that specific nodes can be already set to open.
            treeNode.isExpanded = treeNode.hasOwnProperty('isExpanded')
                ? treeNode.isExpanded || expandNode
                : expandNode;
        }
    }

    expandCollapseAllNodes(treeNode: KupTreeNode, expandNode: boolean = false) {
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable && !treeNode.disabled) {
            this.expandCollapseNode(treeNode, expandNode);
            // Enriches also direct subtrees recursively (if it has children)
            if (treeNode.children && treeNode.children.length) {
                // To save some function calls, only child elements which are expandable will be enriched
                for (let i = 0; i < treeNode.children.length; i++) {
                    this.expandCollapseAllNodes(
                        treeNode.children[i],
                        expandNode
                    );
                }
            }
        }
    }
}

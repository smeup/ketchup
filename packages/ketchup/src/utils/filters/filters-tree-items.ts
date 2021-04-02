import type {
    Cell,
    CellsHolder,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import type { GenericFilter } from './filters-declarations';
import type { TreeNode } from '../../components/kup-tree/kup-tree-declarations';
import { FiltersColumnMenu } from './filters-column-menu';
import { FiltersRows } from './filters-rows';

/**
 * Filtering algorithms related to tree items rows.
 * @module FiltersTreeItems
 * @todo Should contain EVERY tree-item-specific filtering method.
 */
export class FiltersTreeItems extends FiltersRows {
    filterRows(
        items: TreeNode[] = [],
        filters: GenericFilter = {},
        globalFilter: string = '',
        columns: Column[] = [],
        treeExpandedPropName,
        columnFilters?: FiltersColumnMenu
    ): Array<TreeNode> {
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
                    treeExpandedPropName,
                    columnFilters
                )
            ) {
            }
        }
        return items;
    }

    isNodeCompliant(
        node: TreeNode,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: Column[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        let retValue = false;
        let treeColumnCell: CellsHolder = null;

        if (filters && filters['TREE_COLUMN']) {
            treeColumnCell = {
                TREE_COLUMN: {
                    obj: node.obj,
                    value: node.value,
                },
            };
        }

        if (node.cells != null) {
            retValue = this.areCellsCompliant(
                treeColumnCell ? treeColumnCell : node.cells,
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
        node: TreeNode,
        filters: GenericFilter = {},
        globalFilter: string,
        isUsingGlobalFilter: boolean = false,
        columns: Column[] = [],
        treeExpandedPropName,
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
                for (let i = 0; i < node.children.length; i++) {
                    if (
                        this.setNodeVisibility(
                            node.children[i],
                            filters,
                            globalFilter,
                            isUsingGlobalFilter,
                            columns,
                            treeExpandedPropName,
                            columnFilters
                        )
                    ) {
                        this.expandCollapseNode(
                            node,
                            true,
                            treeExpandedPropName
                        );
                        visibility = true;
                    }
                }
            }
        }
        node.visible = visibility;
        return visibility;
    }

    private setAllVisible(items: TreeNode[]) {
        items.forEach((element) => {
            element.visible = true;
            this.setAllVisible(element.children);
        });
    }

    extractColumnValues(
        rows: Array<TreeNode>,
        column: Column,
        values: { value: string; displayedValue: string }[]
    ) {
        if (rows == null || rows.length == 0) {
            return;
        }
        /** il valore delle righe attualmente filtrate, formattato */
        rows.forEach((node): void => {
            let cell: Cell = null;
            // TODO fare check con TreeMainColumnName
            if (column.name === 'TREE_COLUMN') {
                cell = {
                    obj: node.obj,
                    value: node.value,
                };
            } else {
                cell = node.cells[column.name];
            }
            if (node.visible) {
                this.addColumnValueFromRow(values, column, cell);
                this.extractColumnValues(node.children, column, values);
            }
        });
        return values;
    }

    expandCollapseNode(
        treeNode: TreeNode,
        expandNode: boolean = false,
        treeExpandedPropName
    ) {
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable) {
            // If the node does not already have the property to toggle expansion we add it
            // Notice how, if the property is already set, its first value will be the same value that was provided by the object itself
            // and only if the node must be expanded automatically then [treeExpandedPropName] is set to true forcibly.
            // This is done to allow a TreeNode to force its [treeExpandedPropName] to true so that specific nodes can be already set to open.
            treeNode[treeExpandedPropName] = treeNode.hasOwnProperty(
                treeExpandedPropName
            )
                ? treeNode[treeExpandedPropName] || expandNode
                : expandNode;
        }
    }

    expandCollapseAllNodes(
        treeNode: TreeNode,
        expandNode: boolean = false,
        treeExpandedPropName
    ) {
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable && !treeNode.disabled) {
            this.expandCollapseNode(treeNode, expandNode, treeExpandedPropName);
            // Enriches also direct subtrees recursively (if it has children)
            if (treeNode.children && treeNode.children.length) {
                // To save some function calls, only child elements which are expandable will be enriched
                for (let i = 0; i < treeNode.children.length; i++) {
                    this.expandCollapseAllNodes(
                        treeNode.children[i],
                        expandNode,
                        treeExpandedPropName
                    );
                }
            }
        }
    }
}

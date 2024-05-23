import { findColumns } from './utils/kul-data-column-utils';
import {
    filter,
    getDrilldownInfo,
    getParent,
    pop,
    setProperties,
    toStream,
} from './utils/kul-data-node-utils';
import {
    KulDataCell,
    KulDataColumn,
    KulDataDataset,
    KulDataNode,
    KulDataNodeDrilldownInfo,
    KulDataNodeOperations,
    KulDataShapesMap,
} from './kul-data-declarations';

/**
 * Handles data operations.
 * @module KulData
 */
export class KulData {
    cell = {
        exists: (node: KulDataNode) => {
            return !!(node && node.cells && Object.keys(node.cells).length);
        },
        stringify: (value: unknown) => {
            if (value === null || value === undefined) {
                return String(value);
            } else if (value instanceof Date) {
                return value.toISOString();
            } else if (typeof value === 'object') {
                try {
                    return JSON.stringify(value, null, 2);
                } catch (error) {
                    console.error('Failed to stringify object:', error);
                    return '[object Object]';
                }
            } else {
                return String(value);
            }
        },
    };
    column = {
        find(
            dataset: KulDataDataset | KulDataColumn[],
            filters: Partial<KulDataColumn>
        ): KulDataColumn[] {
            return findColumns(dataset, filters);
        },
    };
    extract = {
        shapes: (dataset: KulDataDataset) => {
            if (!this.node.exists(dataset)) {
                return;
            }

            const browseCells = (node: KulDataNode) => {
                if (!this.cell.exists(node)) {
                    return;
                }
                const cells = node.cells;
                for (const key in cells) {
                    if (Object.prototype.hasOwnProperty.call(cells, key)) {
                        const cell = cells[key];
                        if (
                            cell.shape &&
                            cell.shape !== 'text' &&
                            cell.shape !== 'number'
                        ) {
                            const shapeProps = {};
                            if (!shapes[cell.shape]) {
                                shapes[cell.shape] = [];
                            }
                            shapes[cell.shape].push(
                                this.extract.singleShape(cell)
                            );
                        } else {
                            if (!shapes.text) {
                                shapes.text = [];
                            }
                            shapes.text.push(cell.value.toString());
                        }
                    }
                }
            };
            const recursive = (node: KulDataNode) => {
                for (
                    let index = 0;
                    node.children && index < node.children.length;
                    index++
                ) {
                    recursive(node.children[index]);
                }
            };
            const shapes: KulDataShapesMap = {};
            const nodes = dataset.nodes;
            for (let index = 0; index < nodes.length; index++) {
                const node = nodes[index];
                browseCells(node);
                recursive(node);
            }
            return shapes;
        },
        singleShape: (cell: KulDataCell) => {
            const prefix = 'kul';
            const shapeProps = {};
            for (const prop in cell) {
                if (prop === 'shape') {
                    continue;
                }
                if (prop.indexOf(prefix) === 0) {
                    shapeProps[prop] = cell[prop];
                } else {
                    const prefixedProp =
                        prefix + prop.charAt(0).toUpperCase() + prop.slice(1);
                    if (!shapeProps[prefixedProp]) {
                        shapeProps[prefixedProp] = cell[prop];
                    }
                }
            }
            return shapeProps;
        },
    };
    node: KulDataNodeOperations = {
        exists: (dataset: KulDataDataset) => {
            return !!(dataset && dataset.nodes?.length);
        },
        filter: (
            dataset: KulDataDataset,
            filters: Partial<KulDataNode>,
            partialMatch: boolean = false
        ): {
            matchingNodes: Set<KulDataNode>;
            remainingNodes: Set<KulDataNode>;
            ancestorNodes: Set<KulDataNode>;
        } => {
            return filter(this.cell.stringify, dataset, filters, partialMatch);
        },
        fixIds: (nodes: KulDataNode[]) => {
            function updateNodeIds(
                node: KulDataNode,
                depth: string = '0'
            ): void {
                node.id = depth;

                if (node.children) {
                    node.children.forEach((child: any, index: number) => {
                        const newDepth = `${depth}.${index}`;
                        updateNodeIds(child, newDepth);
                    });
                }
            }
            nodes.forEach((node: KulDataNode) => {
                updateNodeIds(node, '0');
            });
            return nodes;
        },
        getDrilldownInfo(nodes: KulDataNode[]): KulDataNodeDrilldownInfo {
            return getDrilldownInfo(nodes);
        },
        getParent(nodes: KulDataNode[], child: KulDataNode): KulDataNode {
            return getParent(nodes, child);
        },
        pop(nodes: KulDataNode[], node2remove: KulDataNode): KulDataNode {
            return pop(nodes, node2remove);
        },
        setProperties(
            nodes: KulDataNode[],
            properties: Partial<KulDataNode>,
            recursively?: boolean,
            exclude?: KulDataNode[]
        ): KulDataNode[] {
            return setProperties(nodes, properties, recursively, exclude);
        },
        toStream(nodes: KulDataNode[]): KulDataNode[] {
            return toStream(nodes);
        },
    };
}

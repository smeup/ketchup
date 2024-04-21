import { GenericObject } from '../../components';
import {
    KulDataCell,
    KulDataDataset,
    KulDataNode,
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
    };
    extract = {
        props: (dataset: KulDataDataset) => {
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
                        if (cell.relatedProp && props[cell.relatedProp]) {
                            props[cell.relatedProp] = cell.value;
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
            const props: GenericObject = {};
            const nodes = dataset.nodes;
            for (let index = 0; index < nodes.length; index++) {
                const node = nodes[index];
                browseCells(node);
                recursive(node);
            }
            return props;
        },
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
                        if (cell.shape && cell.shape !== 'text') {
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
            const shapeProps = { ...cell.shapeProps };
            for (const prop in cell) {
                if (prop === 'shape') {
                    continue;
                }
                const prefixedProp =
                    'kul' + prop.charAt(0).toUpperCase() + prop.slice(1);
                shapeProps[prefixedProp] = cell[prop];
            }
            return shapeProps;
        },
    };
    node = {
        exists: (dataset: KulDataDataset) => {
            return !!(dataset && dataset.nodes?.length);
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
    };
}

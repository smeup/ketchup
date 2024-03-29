import { KulButtonPropsInterface } from '../../components/kul-button/kul-button-declarations';
import { KulDataDataset } from './kul-data-declarations';

/**
 * Handles data operations.
 * @module KulData
 */
export class KulData {
    cell = {};
    convert = {
        toButton: (dataset: KulDataDataset) => {
            if (!this.node.exists(dataset)) {
                return;
            }
            const nodes = dataset.nodes;
            const props: KulButtonPropsInterface = {};
            for (let index = 0; index < array.length; index++) {
                const node = nodes[index];
                recursive(node);
            }
            function recursive(node: KupDataNode) {
                streamlined.push(node);
                for (
                    let index = 0;
                    node.children && index < node.children.length;
                    index++
                ) {
                    recursive(node.children[index]);
                }
            }
        },
    };
    node = {
        exists: (dataset: KulDataDataset) => {
            return !!(dataset && dataset.columns?.length);
        },
    };

    constructor() {
        this.container = document.createElement('div');
        this.container.setAttribute('kul-dynamic-position', '');
        document.body.appendChild(this.container);
        this.managedElements = new Set();
    }
}
